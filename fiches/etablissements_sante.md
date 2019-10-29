# Les dépenses des établissements de santé dans le SNDS

## L’hôpital public

Nous vous présentons tout d'abord comment exclure l'information concernant les hôpitaux publics dans le DCIR et le DCIRS, afin
de privilégier leur étude via le PMSI. 

### Comment exclure les actes et consultations externes du DCIR et DCIRS

Les remontées des hôpitaux publics ne sont pas exhaustives dans le DCIR.
Il est donc conseillé de les exclure et d’utiliser les données du PMSI uniquement pour ceux-ci. 

Sont remontées dans le DCIR des lignes « pour information » relatives aux transmissions des **consultations externes et des 
séjours des établissements publics** qui ne sont pas encore passés en facturation directe.  

Pour les exclure, il faut appliquer le filtre `DPN_QLF NE 71` (qualificatif de la dépense n'est pas "pour information (soins externes)".  

La CNAM recommande d’appliquer ce filtre pour toutes les requêtes effectuées sur le DCIR. Ces lignes ont été exclues du DCIRS.

En effet, on trouve dans le DCIR les **actes et consultations externes** (ACE) en facturation directe. 

En effet, depuis septembre 2011, certains établissements publics ont basculé leur activité ACE en facturation directe. 
Cela concernait 335 établissements géographiques (268 FINESS juridiques) à fin septembre 2015, d’autres sont passés en 
facturation directe depuis, mais il reste encore des établissements pour lesquels les ACE sont sur leur budget global. 
Ainsi, l’information est partielle, tandis qu’elle est remontée de façon exhaustive dans le PMSI.

Pour exclure les Actes et Consultations Externes générés par les établissements Ex Dotation Globale (ex DG), il est conseillé d’utiliser 
le filtre ci-dessous:

-	On exclut la prestation :
	- si elle concerne de la T2A dans le public **OU** 
    - si elle n’est dans pas un établissement en T2A mais que l’établissement est public et que la catégorie de l’établissement exécutant est un CHR,
un CH, un CH spécialité de lutte contre le cancer, un hôpital local, un établissement de soins obstétriques et chirurgico-gynécologiques,
un établissement de soins pluridisciplinaires, un établissement de soins chirurgicaux ou un établissement de soins médicaux et que le code 
du mode de traitement indique que la prestation est en hospitalisation complète, consultation et soins externes ou urgence (ou sans objet) **OU**
    -	si l’indicateur de T2A est manquant, que l’indicateur du caractère privé ou public de l’établissement est manquant, 
que la catégorie de l’établissement exécutant est manquant et que le mode de  traitement est manquant 

Le code SAS correspondant est le suivant :
```
NOT (T2.ETE_IND_TAA= 1  
    OR (T2.ETE_IND_TAA= 0 AND T2.PRS_PPU_SEC=1 
        AND T2.ETE_CAT_COD in (101,355,131,106,122,365,128,129) AND T2.MDT_COD in (0,3,7,10)))
    OR (T2.ETE_IND_TAA is null AND T2.PRS_PPU_SEC is null 
        AND T2.ETE_CAT_COD is null AND T2.MDT_COD is null)
```

### Comment exclure l'hôpital public des études sur le DCIR et le DCIRS à partir du classement de la catégorie juridique privé / public

On peut créer une variable qui permet d’obtenir le lieu d’exécution de la prestation et de classer ce lieu en fonction de s’il s’agit
d’un établissement en public et privé. 

Si la variable `ETB_EXE_FIN` est égal à 0, aucun établissement n’est lié à la prestation, alors il s’agit d’une prestation de ville. 

Parmi les soins associés à un FINESS, certains peuvent être classés dans les soins de ville selon la logique suivante. 
La variable `ETB_CAT_RG1` du référentiel des établissements (`IR_CET_V`) permet de regrouper les établissements 
(la variable `ETB_CAT_COD` offre une nomenclature plus fine). 

Si les deux premiers caractères de la variable de code de regroupement de l’établissement `ETB_CAT_RG1`  
est égale à 21 (à l'exclusion des établissements relevant de la loi hospitalière, `ETE_CAT_COD`== 698) ou 22, alors il s’agit de prestations que l'on peut classer en "ville", à savoir les cabinets libéraux et 
autres établissements de soins et de prévention. 



La variable `PRS_PPU_SEC` nous permet d'avoir de l'information sur la caractéristique privé ou public de la prestation. 
La variable `PRS_PPU_SEC` est construite comme suit. L’établissement est public :

    - 	si le type d’établissement est public ( `ETE_TYP_COD` vaut 1, 2 ou 3]) et 
    - 	si le numéro  du PS exécutant n’est pas renseigné (`PFS_EXE_NUM` est manquant ou vaut ‘00000000’)
    -	sinon l’établissement est privé 

Si le code `PRS_PPU_SEC` est égal à 1 alors on peut classer la prestation en lieu d'exécution "Public".
Sinon les prestations sont classées en lieu d’exécution "Prive".

Pour résumer en pseudo-code:
```
IF substr(ETB_CAT_RG1,1,2) IN (21,22) AND ETE_CAT_COD<>698:
    THEN lieu_exec = "ville"
ELSE IF PRS_PPU_SEC == 1:
    THEN lieu_exec = "public"
ELSE : 
    lieu_exec = "prive"
```

Pour avoir plus de détail sur la catégorie juridique de l'établissement, on peut se référer à la variable `ETE_TYP_COD` qui est le code du type 
de l'établissement exécutant. 
Dans le DCIR, il faut aller chercher les variables `PRS_PPU_SEC` et `ETE_TYP_COD` dans la table `ER_ETE_F` qui n'est pas la table centrale; 
dans le DCIRS ces informations sont dans la table centrale `NS_PRS_F` (table de nomenclature `IR_TYE_V`).


Un poste particulier est à dégager qui peut concerner l'hôpital public et qui devrait être retenus avec les soins de ville, 
à savoir les **rétrocessions**.
Les rétrocessions correspondent à de la pharmacie hospitalière en établissement. Le code prestation `PRS_NAT_REF` est parmi 
3317, 3318, 3319, 3351, 3352, 3353, 3354, 3355, 3356, 3357, 3330 (table de valeur `IR_NAT_V`). 


Lorsque l’on travaille sur les **soins de ville**, il est recommandé d’exclure les prestations en établissements publics qui 
ne sont pas des rétrocessions. On peut donc exclure les prestations pour lesquels `lieu_exec` == 'public' sauf si la `PRS_NAT_REF` 
correspond à de la rétrocession.

### Les dépenses en établissement public dans le PMSI

#### Filtres à appliquer pour le PMSI MCO

Nous décrivons ici comment trouver les dépenses dans le PMSI MCO. 

Sur la partie séjour, les filtres à poser sont les suivants : 

- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) 
- Exclusion des séjours en erreur
- Exclusion des prestations inter établissement
- Exclusion des prestations pour lesquelles un résumé de séjour n'a pas été généré: la dialyse, l'activité externe des médecins salariés ou 
des FFM, ATU, SE (attention cependant, la variable `TYP_GEN_RSA` n'est disponible qu'à partir de 2015)

-> RA : j'ai l'impression qu'il manque des finess géo

Le code SAS correspondant est le suivant :

```
WHERE 
ETA_NUM not in ('130780521', '130783236', '130783293', '130784234', '130804297','600100101', '750041543', 
'750100018', '750100042', '750100075', '750100083', '750100091', '750100109', '750100125', '750100166', 
'750100208', '750100216', '750100232', '750100273', '750100299' , '750801441', '750803447', '750803454', 
'910100015', '910100023', '920100013', '920100021', '920100039', '920100047', '920100054', '920100062', 
'930100011', '930100037', '930100045', '940100027', '940100035', '940100043', '940100050', '940100068', 
'950100016', '690783154', '690784137', '690784152', '690784178', '690787478', '830100558') 
AND GRG_GHM not like '90%' 
AND ENT_MOD<>'0' and SOR_MOD<>'0'
AND TYP_GEN_RSA = '0' 
```

Toutes les variables de filtres présentées se trouvent dans la table des séjours `t_mcoANNEE.b` sous ORAVUE. 


#### Les tables à considérer pour étudier l'activité en hôpital public 

Il existe quatre types de spécialité hospitalière : 
- MCO
- SSR
- PSY
- HAD
Pour plus de détail sur ce spécialités, se reporter par exemple au Panorama des établissements de santé de la DREES
(https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/panoramas-de-la-drees/article/les-etablissements-de-sante-edition-2019)
ou à la documentation de l'ATIH sur le sujet.

##### En MCO

Pour connaitre le montant de la dépense, on utilise la table de valorisation des séjours `t_mcoANNEE.valo` sous ORAVUE. 
La variable de montant est `MNT_TOT_AM`. Il est conseillé de considérer `MNT_TOT_AM` de la table `valo` corrigée par l'ATIH et non la variable
`TOT_MNT_AM` de la table `STC` qui est l'information brute des établissements.  
Il s'agit du montant présenté à l'assurance maladie puisqu'il n'y a pas de dépassements à l'hôpital public.

Pour joindre les deux tables `valo` et `stc` il faut passer par la table de chainage patients (`t_mcoANNEE.c` toujours sous ORAVUE).
La clef de chaînage est le couple (`RSA_NUM`, `ETA_NUM`). `RSA_NUM` est le numéro du patient et `ETA_NUM` l'identifiant de l'établissement.
Dans la table patients, on trouve l'identifiant bénéficiaire `NIR_ANO_17` (cf. fiche Identifiant des bénéficiaires pour plus d'informations).

L'information concernant les établissements se trouve dans la table `t_mcoANNEE.e`. On peut joindre cette table aux précédentes 
avec `ETA_NUM`. 

Les dépenses d'actes et consultations externes (ACE) des établissements publics et ESPIC se trouvent dans la table de valorisation des ACE 
sous `ORAVUE.t_mcoANNEE.valoace`. 
Cette table contient une ligne par ACE (valorisé ou non). Elle contient la valorisation totale ainsi le détail de valorisation par
prestation (ATU, FFM, Dialyse,
SE, FTN, NGAP, CCAM, DM Externe). La variable de montant de dépense est `mnt_br`, soit la base de remboursement de la sécurité sociale. En effet, 
comme évoqué précédemment, il n'existe pas de dépassements à l'hôpital public. 
La table patients correspondante est `t_mcoANNEE.cstc`, on peut les chaîner toujours via le couple (`RSA_NUM`,`ETA_NUM`). La table
patients contient également l'identifiant bénéficiaire `NIR_ANO_17`. 

L'information sur la pharmacie de la liste en sus et les dispositifs médicaux implantables se trouve dans les tables suivantes. 

Pour l'hôpital public en MCO: 
- `MED` : contient les médicaments en sus
- `MEDATU` : contient les médicaments soumis à autorisation temporaire d’utilisation
- `MEDTHROMBO` : contient les médicaments thrombolytiques pour le traitement de l’AVC ischémique
- `DMIP` : contient les dispositifs médicaux implantables en sus

Pour les ACE en MCO, l'information se trouve dans la table `FHSTC` : médicaments en sus.

#### En SSR

Pour connaitre le montant de la dépense d'un patient en SSR
En SSR, 

#### En HAD


L'information sur la dépense que représente la pharmacie de la liste en sus et les médicaments coûteux hors liste en sus et hors ATU est contenue dans

-    `MED` : médicaments en sus
-    `MEDATU` : médicaments soumis à autorisation temporaire d’utilisation
-    `MEDCHL` : médicaments coûteux hors liste en SUS et hors ATU


#### En PSY

L'information sur la dépense que représente la pharmacie de la liste en sus est contenue dans

-    `MED` : médicaments en sus
-    `MEDATU` : médicaments soumis à autorisation temporaire d’utilisation


## Les établissements privés dans le DCIR et le DCIRS

Les séjours en cliniques privées sont facturés directement à l’Assurance Maladie ce qui garantit l’**exhaustivité des remontées d’information sur ce champ**.
Cela concerne toutes les prestations en établissement privé, que l'établissement soit de nature non lucratif ou lucratif.
Le PMSI contient des tables de facturation des séjours privés mais il n’est pas certain qu’elles correspondent aux montants réellement facturés et 
remboursés par l’assurance maladie.
Il est donc **recommandé d'analyser les dépenses des cliniques privées dans le DCIR ou le DCIRS plutôt que dans le PMSI**. 

### Les filtres à poser avant d'analyser les établissements privés

Avant d'analyser ce champ dans le DCIR ou le DCIRS, les filtres à poser sont les suivants : 

-	`DPN_QLF NE 71` : on exclut les remontées d'information "pour information (soins externes)", afin d'écart les ACE à l'hôpital public.

-	`ASU_NAT` = 10,30,40 : Maladie, maternité, AT/MP, décès et invalidité sont les 5 risques pris en charge par l’assurance maladie.
Si les caisses ont effectué des remboursements pour d’autres risques, ceux-ci ne sont pas censés être pris en charge. Par exemple la nature
d'assurance 22 qui correspond à des soins aux invalides de guerre (CNMSS).
On sélectionne les prestations qui correspondent aux risques maladie (10), maternité (30) et AT/MP (40) et on exclut décès et invalidité. 

-	`ETE_TYP_COD` NOT IN (1,2,3) : ce filtre nous permet de se concentrer sur les prestations qui ont lieu dans un établissement privé.
Se référer au tableau de nomenclature `ETE_TYE_V` pour obtenir la classification des établissements.
Se référer à la nomenclature pour savoir quel filtre exact appliquer sur `ETE_TYP_COD` en fonction de la catégorie de prestations ciblée.

-	 `ETE_CAT_COD` NOT IN (125, 130, 132, 133, 134, 142, 223, 224, 228, 230, 268, 269, 289, 297, 347, 413, 414, 433, 438, 439,700). 
On filtre sur la catégorie de l’établissement exécutant afin d'exclure les centres de santé.

On exclut les centres de santé car ceux-ci sont catégorisés en soins de ville comme dans les Comptes de la Santé
(https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/panoramas-de-la-drees/article/les-depenses-de-sante-en-2018-resultats-des-comptes-de-la-sante-edition-2019)
ainsi que dans la statistique mensuelle de la CNAM.

- `MFT_COD` NOT IN (4,6). On filtre sur le motif du code de fixation des tarifs. On exclut ainsi ETABLISSEMENTS PRIVES A BUT NON LUCRATIF PARTICIPANT AU SERVICE PUBLIC HOSPITALIER (PSPH)
et ETABLISSEMENT DE SANTE ET MEDICAUX SOCIAUX NON CONVENTIONNE AVEC L AIDE SOCIALE ET NON CONVENTIONNE AVEC L ASSURANCE MALADIE (TARIF D AUTORITE). Voir
nomenclature pour plus de précisions sur le filtre sur le motif du code de fixation des tarifs à appliquer. 



### Ventiler les établissements privés selon la nature juridique

Comme précisé ci-dessus, on peut construire cette ventilation avec la variable `ETE_TYP_COD`.

|  ETB_TYP_COD |ETB_PPU_SEC   | ETB_TYP_LIB  |
|---|---|---|
| 99 | 9 | VALEUR INCONNUE  |
| 0 | 2 | AMBULATOIRE SECTEUR LIBERAL  |
| 1 | 1 | PUBLIC PROPREMENT DIT  |
| 2 | 1 | PSPH PRIVE A BUT NON LUCRATIF PARTICIPANT AU SERVICE PUBLIC HOSPITALIER  |
| 3 | 1 | EX PJP AYANT OPTE POUR LE BG  |
| 4 | 2 | PRIVE LUCRATIF CONVENTIONNE  |
| 5 | 2 | PRIVE NON LUCRATIF CONVENTIONNE  |
| 6 | 2 | PRIVE NON LUCRATIF CONVENTIONNE  |
| 7 | 2 | PRIVE NON LUCRATIF NON CONVENTIONNE  |
| 8 | 2 | OQN NON LUCRATIF CONVENTIONNE  |
| 9 | 2 | OQN LUCRATIF CONVENTIONNE  |

L’Objectif quantifié national (OQN) résulte d'un accord du 4 avril 1991 entre l'État, les organismes d'assurance maladie et l'UHP. 
Cet accord a été retranscrit dans le Code de la Sécurité sociale (art. L. 162-22-2, R. 162-41 et D. 162-4). 
L’OQN concerne les activités de psychiatrie et de soins de suite ou de réadaptation exercées par les établissements de santé privés.  

Conventionné : To be continued


### Ventiler les établissements privés selon la discipline (PSY, SSR, MCO et HAD)

Dans le DCIR et le DCIRS,  il y a les équivalents des discipline de prestation des différents PMSI pour les établissements privés. 
Pour ce faire, il faut regarder la variable `DDP_COD` de `NS_PRS_F` pour le DCIRS et `DDP_COD` de la table `ER_ETE_F` pour le DCIR.
Cette variable de code de la discipline de prestations a pour table de nomenclature `IR_DDP_V`, et dans cette nomenclature on trouve
la variable `DDP_GDE_COD` qui nous renseigne sur la discipline de prestations.

| DDP_GDE_COD | discipline de prestation |
| ----------- | --------------------------|
| 4 | SSR |
| 6 | PSY |
| 0,1,2,3 | MCO et HAD|
| 0 | sans objet |
| 1 | médecine |
| 2 | chirurgie | 
| 3 | obstétrique |
| 5 | USLD | 

La HAD se repère avec le Groupe Homogène de Tarif, on peut la repérer à l'aide 
de la nomenclature fournie (cf. paragraphe suivant) construite sur la statistique mensuelle de la CNAM sur les cliniques privées.

Pour repérer les prestations en USLD, on peut utiliser le `DDP_GDE_COD` égal à 5 combiné au code prestations (cf. nomenclature).

Il n'existe pas d'activité externe en établissement privé lucratif, elle est considérée comme du soin de ville libéral. 
Afin de distinguer le lieu d'exécution de la prestation, on peut utiliser la variable `lieu_exec` présentée ci-dessus.


### Catégoriser les prestations des établissements privés

Nous proposons une nomenclature avec une entrée par `PRS_NAT_REF` construite à 
partir de la statistique mensuelle sur les établissements privés de la CNAM.
Nous avons repris la catégorisation en postes. Ainsi à une `PRS_NAT_REF` correspond 
le libellé de la CNAM dans la nomenclature ainsi que les filtres associés (`DPN_QLF`,
`RGO_ASU_NAT`, `CPL_FJH_TYP`, etc.).

Rajouter table avec liste des catégories 


### Etudier le secteur médico-social et handicap

Une partie des séjours du secteur médico-social et handicap est facturée directement à l’Assurance Maladie. 
Ces séjours peuvent être retrouvés dans le DCIR via le type d’établissement. Il faut effectuer une jointure 
avec la table établissement `ER_ETE_F` et utiliser la variable `ETE_CAT_COD` (dans le DCIRS, la même variable
dans la table de prestations centrale comme mentionné ci-dessus). Une jointure avec `IR_CET_V` (du répertoire ORAVAL)
permet d’avoir les libellés des différents établissements.

**L’information sur ces séjours n’est pas exhaustive et doit être traitée avec précaution**. 


Auteurs: Kristel Jacquier, Raphaële Adjerad

*Sources* 
-	« Maquette Stat mens Etablissements prives – version du 28 mai 2010 Regles de gestion du Regime General pour constituer la statistique mensuelle pour le suivi des depenses des etablissements prives » disponible sur le portail SNDS (Dossiers publics>SNIIRAM>_Documentation SNIIRAM- SNDS> Documentation>maquettes Stat Mens>ancienne maquette stat mens)
-	Supports de Formation DCIRS et PMSI
-	Code de Jérôme Brocca (ARS)
-	Code de Mathis Haradji (DSS)


