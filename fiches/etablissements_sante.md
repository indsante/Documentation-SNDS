# Les dépenses des établissements de santé dans le SNDS

## L’hôpital public

Nous vous présentons tout d'abord comment exclure l'information concernant les hôpitaux publics dans le DCIR et le DCIRS, afin
de privilégier leur étude via le PMSI. 

### Comment exclure les actes et consultations externes du DCIR 

Les remontées des hôpitaux publics ne sont pas exhaustives dans le DCIR.
Il est donc conseillé de les exclure et d’utiliser les données du PMSI uniquement pour ceux-ci. 

Sont remontées dans le DCIR des lignes « pour information » relatives aux transmissions des consultations externes et des 
séjours des établissements publics qui ne sont pas encore passés en facturation directe.  

Pour les exclure, il faut appliquer le filtre `DPN_QLF NE 71` (qualificatif de la dépense n'est pas "pour information (soins externes)".  

La CNAM recommande d’appliquer ce filtre pour toutes les requêtes effectuées sur le DCIR. Ces lignes ont été exclues du DCIRS.

On trouve dans le DCIR les **actes et consultations externes** (ACE) en facturation directe. 

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
    -	si l’indicateur de T2A est manquant, que l’indicateur du caractère privé ou public de l’établissement est manquant, que la catégorie de l’établissement exécutant est manquant et que le mode de  traitement est manquant 

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
La variable `PRS_PPU_SEC` nous permet d'avoir de l'information sur la caractéristique privé ou public de la prestation. 
La variable `PRS_PPU_SEC` est construite comme suit. L’établissement est public :

    - 	si le type d’établissement est public ( `ETE_TYP_COD` vaut 1, 2 ou 3]) et 
    - 	si le numéro  du PS exécutant n’est pas renseigné (`PFS_EXE_NUM` est manquant ou vaut ‘00000000’
    -	sinon l’établissement est privé 

Si la variable de code de regroupement de l’établissement `ETB_CAT_RG1` (plus exactement les deux premiers caractères de cette variable) 
est égale à 21 ou 22, alors il s’agit de prestations que l'on peut classer en "ville" 
(cabinets libéraux et autres établissements de soins et de prévention). 

-> RA : attention dans 21, il y a l'item établissements relevant de la loi hospitalière

Sinon, si le code `PRS_PPU_SEC` est égal à 1 alors on peut classer la prestation en lieu d'exécution "Public".
Sinon les prestations sont classées en lieu d’exécution "Prive".

Pour résumer en pseudo-code:
```
IF substr(ETB_CAT_RG1,1,2) IN (21,22):
    THEN lieu_exec = "ville"
ELSE IF PRS_PPU_SEC == 1:
    THEN lieu_exec = "public"
ELSE : 
    lieu_exec = "prive"
```

Pour avoir plus de détail sur la catégorie juridique de l'établissement, on peut se référer à la variable `ETE_TYP_COD` 
qui est le code du type de l'établissement exécutant. 
Dans le DCIR, il faut aller chercher cette variable dans la table `ER_ETE_F` qui n'est pas la table centrale; dans le DCIRS
cette information a été rappatriée dans la table centrale `NS_PRS_F` (table de nomenclature `IR_TYE_V`).

Un poste particulier est à dégager qui peut concerner l'hôpital public et qui devrait être retenus avec les soins de ville, 
à savoir les **rétrocessions**.
Les rétrocessions correspondent à de la pharmacie hospitalière en établissement. Le code prestation `PRS_NAT_REF` est parmi 
3317, 3318, 3319, 3321, 3351, 3352, 3353,3354,3355, 3356,3357, 3330 (table de valeur `IR_NAT_V`).

Lorsque l’on travaille sur les **soins de ville**, il est recommandé d’exclure les prestations en établissements publics qui ne sont pas des rétrocessions.
On peut donc exclure les prestations pour lesquels `PRS_PPU_SEC` == 1 sauf si la `PRS_NAT_REF` correspond à de la rétrocession.

### Trouver les dépenses dans le PMSI

Nous décrivons ici comment trouver les dépenses dans le PMSI MCO. 

Sur la partie séjour, les filtres à poser sont les suivants : 

- Exclusion des FINESS géographiques APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) 
- Exclusion des séjours en erreur
- Exclusion des prestations inter établissement
- Exclusion des prestations pour lesquelles un résumé de séjour n'a pas été généré: la dialyse, l'activité externe des médecins salariés ou des FFM, ATU, SE (attention cependant, la variable TYP_GEN_RSA n'est disponible qu'à partir de 2015)

Le code SAS correspondant est le suivant :

```
WHERE 
ETA_NUM not in ('130780521', '130783236', '130783293', '130784234', '130804297','600100101', '750041543', '750100018', '750100042', '750100075', '750100083', '750100091', '750100109', '750100125', '750100166', '750100208', '750100216', '750100232', '750100273', '750100299' , '750801441', '750803447', '750803454', '910100015', '910100023', '920100013', '920100021', '920100039', '920100047', '920100054', '920100062', '930100011', '930100037', '930100045', '940100027', '940100035', '940100043', '940100050', '940100068', '950100016', '690783154', '690784137', '690784152', '690784178', '690787478', '830100558') 
AND GRG_GHM not like '90%' 
AND ENT_MOD<>'0' and SOR_MOD<>'0'
AND TYP_GEN_RSA = '0' 
```

Toutes les variables de filtres présentées se trouvent dans la table des séjours `t_mcoANNEE.b` sous ORAVUE. Pour connaitre le montant dépensé par le patient, on utilise la table de valorisation des séjours `t_mcoANNEE.valo` sous ORAVUE. Cette table contient une ligne par ACE (valorisé ou non). La variable de montant est `MNT_TOT_AM`. Il s'agit du montant présenté à l'assurance maladie puisqu'il n'y a pas de dépassements à l'hôpital public.
Pour joindre les deux tables il faut passer par la table de chainage patients (`t_mcoANNEE.c` toujours sous ORAVUE).

Les dépenses d'actes et consultations externes (ACE) des établissements publics et ESPIC se trouvent dans la table de valorisation des ACE sous `ORAVUE.t_mcoANNEE.valoace`. Elle contient la valorisation totale ainsi le détail de valorisation par prestation (ATU, FFM, Dialyse, SE, FTN, NGAP, CCAM, DM Externe). La variable de montant est `mnt_br`, soit la base de remboursement de la sécurité sociale. En effet, comme évoqué précédemment, il n'existe pas de dépassements à l'hôpital public. 
La table patients correspondante est `t_mcoANNEE.cstc`.

 
## Les établissements privés dans le DCIR et le DCIRS

Les séjours en cliniques privées sont facturés directement à l’Assurance Maladie ce qui garantit l’exhaustivité des remontées d’information sur ce champ.
Cela concerne toutes les prestations en établissement privé, que l'établissement soit de nature non lucratif ou lucratif.
Le PMSI contient des tables de facturation des séjours privés mais il n’est pas certain qu’elles correspondent aux montants réellement facturés et remboursés par l’assurance maladie.
Il est donc recommandé d'analyser les dépenses des cliniques privées dans le DCIR ou le DCIRS plutôt que dans le PMSI. 

### Les filtres à poser avant d'analyser les établissements privés

Avant d'analyser ce champ dans le DCIR ou le DCIRS, les filtres à poser sont les suivants : 

-	`DPN_QLF NE 71` : on exclut les remontées d'information "pour information (soins externes)", afin d'écart les ACE à l'hôpital public.

-	`CPT_ENV_TYP` =0,1,2,3,9  (type d’enveloppe ONDAM)

-> RA: pour moi la variable est `RGO_ENV_TYP` et la nomenclature elle a pour variable `CPT_ENV_TYP`,
on peut être préciser qu'il faut mettre ce filtre pour retrouver les statistiques mensuelles mais
pas forcément pour étudier les etab privés

Type d’enveloppe 0,1,2,3,9 : 9=valeur inconnue, 1 à 3= Prestations légales de l’Assurance Maladie. 
 
*Note* : Parmi les prestations non prises en compte par le RG on peut trouver des IJ paternité que le RG paie pour la CAF. 

-	`ASU_NAT` = 10,30,40 : Maladie, maternité, AT/MP, décès et invalidité sont les 5 risques pris en charge par l’assurance maladie.
Si les caisses ont effectué des remboursements pour d’autres risques, ceux-ci ne sont pas censés être pris en charge. Par exemple la nature d'assurance 22 qui correspond à des soins aux invalides de guerre (CNMSS).
On sélectionne les prestations qui correspondent aux risques maladie (10), maternité (30) et AT/MP (40) et on exclut décès et invalidité. 

-	`ETE_TYP_COD` IN (4, 5, 6, 7, 8, 9) : ce filtre nous permet de se concentrer sur les prestations qui ont lieu dans un établissement privé.
En effet, la table de nomenclature `ETE_TYE_V` nous permet de sélectionner ainsi les établissements privés lucratifs conventionnés, les établissements
privés lucratifs non conventionnés, les établissements privés non lucratifs conventionnés, les établissements privés non lucratifs
non conventionnés, les OQN non lucratifs conventionnés et non conventionnés.

*Note* : RA : ajouter explication sur etab OQN

-	 `ETE_CAT_COD` NOT IN (125, 130, 132, 133, 134, 142, 223, 224, 228, 230, 268, 269, 289, 297, 347, 413, 414, 433, 438, 439,700). 
On filtre sur la catégorie de l’établissement exécutant afin d'exclure les centres de santé.

-> RA ; pourquoi ? On pourrait vouloir garder les csanté 

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


### Ventiler les établissements privés selon la discipline (PSY, SSR, MCO et HAD)

Dans le DCIR et le DCIRS,  il y a les équivalents des discipline de prestation des différents PMSI pour les établissements privés. 
Pour ce faire, il faut regarder la variable `DDP_COD` de `NS_PRS_F` pour le DCIRS et `DDP_COD` de la table `ER_ETE_F` pour le DCIR.
Cette variable de code de la discipline de prestations a pour table de nomenclature `IR_DDP_V`, et dans cette nomenclature on trouve
la variable `DDP_GDE_COD` qui nous renseigne sur la discipline de prestations.

| DDP_GDE_COD | discipline de prestation |
| ----------- | --------------------------|
| 4 | SSR |
| 6 | PSY |
| 0,1,2,3 | MCO |
| 0 | sans objet |
| 1 | médecine |
| 2 | chirurgie | 
| 3 | obstétrique |

Pour repérer la HAD, il faut considérer les prestations pour lesquelles `ETE_CAT_COD` est égal à 127 ou 422 
(et voir si cela correspond à `DDP_GDE_COD` égal à 10 – indiqué comme soins à domicile, à discuter).

Il n'existe pas d'activité externe en établissement privé, elle est considérée comme du soin de ville libéral.

### Etudier le secteur médico-social et handicap

Une partie des séjours du secteur médico-social et handicap est facturée directement à l’Assurance Maladie. 
Ces séjours peuvent être retrouvés dans le DCIR via le type d’établissement. Il faut effectuer une jointure 
avec la table établissement `ER_ETE_F` et utiliser la variable `ETE_CAT_COD` (dans le DCIRS, la même variable
dans la table de prestations centrale comme mentionné ci-dessus).

Une jointure avec `IR_CET_V` (du répertoire ORAVAL) permet d’avoir les libellés des différents établissements.
L’information sur ces séjours n’est pas exhaustive. 


Auteurs: Kristel Jacquier, Raphaële Adjerad

*Sources* 
-	« Maquette Stat mens Etablissements prives – version du 28 mai 2010 Regles de gestion du Regime General pour constituer la statistique mensuelle pour le suivi des depenses des etablissements prives » disponible sur le portail SNDS (Dossiers publics>SNIIRAM>_Documentation SNIIRAM- SNDS> Documentation>maquettes Stat Mens>ancienne maquette stat mens)
-	Supports de Formation DCIRS et PMSI
-	Code de Jérôme Brocca (ARS)
-	Code de Mathis Haradji (DSS)


