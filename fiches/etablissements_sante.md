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

### Les catégories juridiques d'établissement dans les PMSI

Les données du PMSI : donner les tables et les variables concernant les etablissements.


 
## Les établissements privés dans le DCIR et le DCIRS

Les séjours en cliniques privées sont facturés directement à l’Assurance Maladie ce qui garantit l’exhaustivité des remontées d’information sur ce champ.
Cela concerne toutes les prestations en établissement privé, que l'établissement soit de nature non lucratif ou lucratif.
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

-	`ASU_NAT` = 10,30,40 : on sélectionne les prestations qui correspondent aux risques maladie, maternité et AT/MP.
On exclut décès et invalidité ici. 
Maladie, maternité, AT/MP, décès et invalidité sont les 5 risques pris en charge par l’assurance maladie.
Si les caisses ont effectué des remboursements pour d’autre risques, ceux-ci ne sont pas censés être pris en charge. 
Par exemple code 22 SOINS AUX INVALIDES DE GUERRE (CNMSS). 

-	`ETE_TYP_COD` IN (4, 5, 6, 7, 8, 9) : ce filtre nous permet de se concentrer sur les prestations qui ont lieu dans un établissement privé.
En effet, la table de nomenclature `ETE_TYE_V` nous permet de sélectionner ainsi les établissements privés lucratifs conventionnés, les établissements
privés lucratifs non conventionnés, les établissements privés non lucratifs conventionnés, les établissements privés non lucratifs
non conventionnés, les OQN non lucratifs conventionnés et non conventionnés.

*Note* : RA : ajouter explication sur etab OQN


-	Catégorie de l’établissement exécutant : On exclut les centres de santé . 

ETE_CAT_COD NOT IN (125, 130, 132, 133, 134, 142, 223, 224, 228, 230, 268, 269, 289, 297, 347, 413, 414, 433, 438, 439,700) 

-> RA ; pourquoi ? On pourrait vouloir garder les csanté 

### Ventiler les établissements privés selon la nature juridique

Comme précisé ci-dessus, on peut construire cette ventilation avec la variable `ETE_TYP_COD`.

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
-	Formation DCIRS
-	Code de Jérôme Brocca (ARS)
-	Code de Mathis Haradji (DSS)


