# Notions autour du Professionnel de sante
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Préambule
Pour commencer, posons quelques éléments de définitions : 

*  Le terme *Professionnel de Santé* sera abrégé par PS.

*  Un PS Exécutant équivaut à tout professionnel de santé qui exécute un acte ou délivre un produit.

*  Un PS Prescripteur équivaut à tout professionnel de santé qui prescrit un acte ou un produit.

#### Exemple : 
*Un médecin généraliste réalise une consultation auprès d’un patient et lui prescrit une prise de sang ainsi que des médicaments. 
On parle de PS Exécutant pour son activité de consultation exécutée. 
On parle de PS prescripteur pour son activité de prescription de médicaments et de biologie.
La pharmacie qui va délivrer les médicaments et le laboratoire qui va effectuer la prise de sang seront considérés à leur tour comme des PS exécutants dans leur activité.*

Les produits du SNDS ne proposent pas tous le même niveau d’information relatif au Professionnel de santé. 
Le datamart DAMIR propose des données de dépenses agrégées sur les caractéristiques du PS (spécialité, mode d'exercice, nature d'activité) alors que les datamarts de l’offre de soins AMOS (CCAM, EXE-PRS, LPP, CDS) et les tables du DCIR-DCIRS et de l’EGBS proposent des données individuelles pour chaque PS, en clair ou cryptées selon le profil de l’utilisateur. 

## Identifiants du PS dans le SNDS

Le PS, libéral ou salarié, est caractérisé par un numéro unique, le [N° RPPS (Répertoire Partagé des Professionnels de Santé)](https://documentation-snds.health-data-hub.fr/glossaire/RPPS.html) constitué de 11 chiffres qui resteront inchangés durant toute sa carrière professionnelle. 
Toutefois cet identifiant n’est pas encore disponible dans le SNDS (sauf pour les prescripteurs salariés : PSP_PPS_NUM dans DCIR-DCIRS).
**Les produits du SNDS proposent de suivre l’activité des PS libéraux exerçant en cabinet de ville ou en établissement privé.
Les identifiants du PS dans le SNDS sont en réalité les identifiants de son (ou ses) cabinet(s).**

Un cabinet  possède deux identifiants : 
*  L'identifiant du cabinet principal
*  L'identifiant du cabinet où est exécuté/prescrit l'acte

Les deux numéros seront donc identiques lorsque le patient consulte dans le cabinet principal du PS.


Ainsi, il existe le **Numéro du PS Statistique** (appelé également le N° Assurance maladie) constitué de 8 chiffres (et 1 clé). 
**Il correspond au numéro du CABINET PRINCIPAL du PS à partir duquel est fait le chaînage statistique sous lequel est regroupée toute l’activité exécutée/prescrite qu’un praticien est susceptible d’avoir sous différents numéros de liquidation.** 
Un **Numéro de PS de liquidation** correspond au numéro du **cabinet du FLUX** c’est-à-dire le cabinet du lieu où a été TRAITÉE (liquidée) l’activité du praticien : il peut donc s’agir soit du cabinet principal, soit d’un cabinet secondaire s’il est différent du Numéro de PS Statistique. 
Les 2 premiers chiffres de ces numéros représentent le département d’implantation du cabinet, et le 3ème la [catégorie du PS](https://documentation-snds.health-data-hub.fr/fiches/professionnel_sante.html#notions-liees-aux-identifiants-ps-du-snds).

Par exemple, un PS généraliste ayant un cabinet principal à Paris et un cabinet secondaire à Nanterre aura deux activités distinguables :

*Cet exemple peut concerner les identifiants des PS Exécutant ou Prescripteur*

| Lieu d'activité  | Numéro Statistique = N° cabinet principal | Numéro de liquidation = N° cabinet où est réalisée l’activité |
| :---------: |:---------:| :---------:|
| Activité réalisée sur le cabinet de Paris (75)  |   **751XXXXX**        |  **751XXXXX** |
| Activité réalisée sur le cabinet de Nanterre (92)  | **751XXXXX**            |   921XXXXX |

**Sous le Numéro de PS Statistique, nous pouvons regrouper toute son activité même si elle a été réalisée dans différents lieux d’implantation de cabinets. 
En revanche, le Numéro de Liquidation ne caractérise que l’activité réalisée sur le lieu d’implantation du cabinet.**

Attention, ce N° de PS de liquidation est également utile pour historiser les données et peut correspondre à un ancien cabinet : ainsi, un PS qui déménage et change de cabinet principal va voir changer son Numéro de chainage Statistique sur tout l’historique. 
En revanche son Numéro de liquidation restera celui au moment de la date du traitement du soin/prescription.

Par exemple, un PS généraliste ferme son cabinet principal de Paris 751XXXXX en juillet 2019 et ouvre son cabinet principal à Nice 061XXXXX ;  
Cela se matérialise ainsi :

**AVANT JUILLET 2019**

| Dans le SNDS dates de traitement du soin | Numéro Statistique = N° cabinet principal | Numéro de liquidation = N° cabinet où est réalisée l’activité |
| :---------: |:---------:| :---------:|
| Inférieures à Juillet 2019  |   **751XXXXX**        |  **751XXXXX** |
| Supérieures à Juillet 2019  | **-**            |    **-**  |


**APRES JUILLET 2019**

| Dans le SNDS dates de traitement du soin | Numéro Statistique = N° cabinet principal | Numéro de liquidation = N° cabinet où est réalisée l’activité |
| :---------: |:---------:| :---------:|
| Inférieures à Juillet 2019  |   **061XXXXX**        |  **751XXXXX** |
| Supérieures à Juillet 2019  | **061XXXXX**      |    **061XXXXX**   |


Les produits du SNDS proposant des données individuelles PS ne contiennent pas tous les mêmes informations. 
Nous pouvons les récapituler ainsi :

| Produits SNDS | N° PS Exécutant Statistique | N° PS Exécutant liquidation | N° PS prescripteur Statistique | N°PS Prescripteur liquidation |
| :---------: |:---------:| :---------:|:---------:|:---------:|
| **DCIR-DCIRS**  |   x        |  PFS_EXE_NUM | x | PFS_PRE_NUM |
| **EGB-EGBS**  |   x        |  PFS_EXE_NUM / PFS_EXE_CRY si crypté | x | PFS_PRE_NUM / PFS_PRE_CRY si crypté |
| **AMOS (Offre des soins libérale)**  |   N°PS exécutant statistique        |  N°PS exécutant de liquidation | N° PS prescripteur statistique | N° PS prescripteur de liquidation  |
| **DA_PRA_R (Référentiel PS libéraux)** Pour la Cnam et ARS  |   STA_PFS_NUM        |  PFS_PFS_NUM | STA_PFS_NUM | PFS_PFS_NUM |
| En comparaison **SIAM-ERASME** pour le réseau AM du RG |   x        |  EXENUM_nomtable | x | PRENUM_nomtable |

*x=non disponible*

::: warning 
Ainsi, dans les datamarts AMOS, il est possible de regrouper toute l’activité d’un praticien sous son dernier Numéro Statistique connu dans le référentiel praticien permettant un chainage de toute son activité. 
Au contraire, dans DCIR, seule l’activité réalisée sur le lieu d’implantation du cabinet est étudiée (elle correspondra à toute son activité si le PS ne possède qu’un seul cabinet). 
Si l’on joint sur le numéro de cabinet principal via la DA_PRA_R on peut récupérer toute l’activité du PS dans le DCIR également
:::


**Et le N° de médecin traitant ?**

Dès lors qu’un bénéficiaire a choisi son médecin traitant, *DCIR* (PRS_MTT_NUM), *EGB* (PRS_MTT_NUM ou PRS_MTT_CRY) et *AMOS* fournissent l’information qui correspond à l’un ou l’autre des N° de PS de Liquidation ou Statistique (selon le numéro d’identification professionnel que le PS a indiqué sur le formulaire Cerfa ou sa carte CPS).


## Notions liées aux identifiants PS du SNDS

### Caisse statistique et Caisse de rattachement / Géographie statistique et Géographie de liquidation

Les notions suivantes se rapportent aux N° des PS. La notion « statistique » n’est proposée que dans les datamarts AMOS (données individuelles PS) et le référentiel PS.

| Notion statistique = lieu du dernier cabinet principal | Notion de liquidation = lieu d’implantation au moment du flux/traitement | 
| :---------: |:---------:| 
|N° PS Statistique / Caisse Statistique / Région/Département/Commune Statistique   |   N° PS de liquidation / Caisse de rattachement / Région/Département/Commune d’exercice | 
| **Chainage de toute l’activité / Permet de travailler un profil de PS sur toute son activité**  | **Activité sur le lieu d’implantation / Permet d’avoir une photographie locale des comportements des PS**  |


*  **La caisse statistique du PS** correspond à la caisse d’implantation du cabinet principal du PS ; elle est responsable des relevés statistiques du PS ; **elle rassemble toute son activité, même réalisée dans des cabinets secondaires**. 
Elle correspond aux deux  premiers numéros du N° du PS statistique et à la dernière information connue du référentiel praticiens.

|  | Notion statistique de CAISSE | Notion de liquidation de CAISSE | 
| :---------: |:---------:| :---------:|
| **DA_PRA_R**  |   STA_CAI_NUM  | CAI_NUM  | 
| **AMOS**  | Caisse Statistique du PS Exécutant / Prescripteur  | Caisse de rattachement du PS Exécutant/Prescripteur  |


*	**La caisse de rattachement du PS** est la caisse du lieu d’implantation géographique  du cabinet du PS. 
Elle correspond aux deux premiers numéros du N° du PS de liquidation. 
La caisse de rattachement du PS est différente de la caisse statistique du PS si le PS a un cabinet secondaire rattaché à une autre caisse que son cabinet principal. 
Et **elle correspond en cas de cabinets multiples à son activité sur le lieu d’implantation du cabinet**.
Elle peut refléter également, comme pour le Numéro du PS de liquidation, le flux lorsqu’il y a un déménagement du cabinet.

| Lieu d'activité  | Identifiants PS Exécutant ou Prescripteur (Numéro Statistique = N° cabinet principal) | Identifiants PS Exécutant ou Prescripteur (Numéro de liquidation = N° cabinet où est réalisée l’activité) | Caisse Statistique | Caisse de rattachement |
| :---------: |:---------:| :---------:| :---------:| :---------:|
| Activité réalisée sur le cabinet de Paris (75)  |   **751XXXXX**        |  **751XXXXX** | **751** | **751** |
| Activité réalisée sur le cabinet de Nanterre (92)  | **751XXXXX**            |   921XXXXX | **751** | 921 |


* **La géographie** se décline selon les produits SNDS en 3 notions : **commune, département et région**. 
Elle correspond à l’installation du cabinet du PS, principal ou secondaire. 
Dans les datamarts AMOS, la géographie statistique, c’est-à-dire commune,  département et région du lieu d’installation du cabinet principal, est proposée, en sus de la **géographie de liquidation reflétant le lieu d’exercice** de chaque cabinet. 
La commune du PS sera mise à blanc si les N° de PS sont cryptés. 
Dans DAMIR et DCIR seul le département d’exercice du cabinet du PS exécutant et prescripteur est présent.

|  | Notion statistique de GEOGRAPHIE | 
| :---------: |:---------:| 
| **AMOS**  | Commune/Département/Région Statistique du PS Exécutant/Prescripteur  | 


|  | Notion de liquidation de GEOGRAPHIE – lieu d’exercice | 
| :---------: |:---------:| 
| **DA_PRA_R**  | PFS_EXC_COM/ GEO_DPT_COD  | 
| **AMOS**  | Commune/Département/Région Statistique du PS Exécutant/Prescripteur  | 
| **DAMIR**  | Département du PS Exécutant/Prescripteur   | 
| **DCIRS**  | EXE_INS_DPT / PRE_INS_DPT   | 



### Catégorie, spécialité et mode d’exercice particulier

**La catégorie professionnelle du PS** répartit les différents types de professions de santé entre établissements (catégorie 0), médecins (catégorie 1), fournisseurs / pharmacies / transporteurs (catégorie 2), laboratoires (catégorie 3), Chirurgiens-dentistes (catégorie 4), sages-femmes (catégorie 5), infirmiers (catégorie 6), masseurs-kinésithérapeutes (catégorie 7), pédicures/podologues (catégorie 8) et orthoptistes/orthophonistes et psychologues (catégorie 9).

**La spécialité médicale ou la nature d’activité** (simple terminologie, on parle de spécialité pour les médecins et de nature d’activité pour les non-médecins) détaille chaque catégorie.

Par exemple dans la catégorie 1 Médecins, on trouve les spécialités 01 médecins généralistes, 06 radiologues, 04 cardiologues, 13 pneumologues, etc…
Les catégories 6 Infirmiers et 7 masseurs-kinésithérapeutes ne contiennent respectivement que les natures d'activité 24 infirmiers et 26 kinés.

Dans le cas de numéros de PS non cryptés, la catégorie correspond au 3ème caractère du N° de PS (ex : 92**1**53526 correspond à un n° de médecin, 92**7**111222 correspond à un numéro de kiné). 
Chaque PS ne possède qu’une seule spécialité à un moment donné.

Dans **DCIR et DAMIR**, la terminologie spécialité et nature d’activité a été séparée en deux variables distinctes : 

*  PS**E_SPE**_COD ou PS**P_SPE**_COD = spécialité médicale pour tous les médecins (E pour exécutants ou P pour prescripteurs)

*  PS**E_ACT**_NAT ou PS**P_ACT**_NAT = nature d’activité pour toutes les autres professions de santé non médecins (Auxiliaires médicaux, Sage femmes, Chirurgiens-dentistes, Transporteurs, Pharmaciens…exécutants ou prescripteurs).

Par exemple, les dentistes sont répartis entre la spécialité 36 des chirurgiens-dentistes spécialistes en ODF et  les natures d’activité des dentistes 19, 53 et 54, mais tous regroupés sous la catégorie 4. 
Les stomatologues de spécialité 18 sont des médecins de catégorie 1.

Dans **DCIRS** en revanche, une variable qui rassemble les 2 terminologies, PS**E_ACT_SPE** ou PS**P_ACT_SPE**, a été ajoutée.

Dans **les datamarts AMOS**, la variable spécialité ou nature d’activité du PS exécutant/prescripteur rassemble également les deux terminologies. Idem dans le référentiel PS (PFS_PRA_SPE). Dans DA_PRA_R, la variable LAB_CAT_COD correspond à la catégorie de laboratoire, et AUX_SPE_COD au code spécialisation des auxiliaires médicaux.

**La compétence MEP du PS**, présente dans le référentiel PS ou AMOS,  permet de distinguer parmi les médecins généralistes de spécialité médicale 01  ceux qui ont une compétence particulière telle qu’homéopathie, angiologie, allergologie, acuponcture, …
Celle-ci fait l’objet d’une déclaration officielle enregistrée par la caisse.


::: danger

**Attention : la catégorie et la spécialité médicale de l’exécutant ou du prescripteur correspondent à celle du PS qui a exécuté l’acte ou prescrit l’acte (on parle aussi de la spécialité du flux).** 

Par exemple, si un médecin généraliste libéral réalise un acte infirmier (piqûre), à cet acte sera associée sa spécialité 01 dans les bases du SNDS. 
C’est la majorité des cas.

Mais, ce médecin généraliste peut également faire réaliser cette piqûre par son éventuel salarié infirmier (spécialité 24). 
Idem pour un ophtalmologue qui salarie un orthoptiste.
Ainsi les bases DCIR-DCIRS, EGB-EGBS et le datamart DAMIR contiennent la spécialité de celui qui fait l’acte et indiqueront  donc la spécialité PS**E_SPE**_COD 24 pour l’infirmier, 29 pour l’orthoptiste, même si ces actes ont été réalisés sous couvert de l’activité d’un médecin généraliste ou d’un ophtalmologue.

En revanche les datamarts AMOS contiennent une information supplémentaire : en sus de la spécialité du PS qui fait l’acte et qui peut éventuellement correspondre à la spécialité d’un salarié (=spécialité du flux, donc ici 24), ils fournissent également la spécialité du référentiel  du PS libéral qui gère l’acte (ici le médecin généraliste employeur 01 de l’infirmier 24).

**Cette indication dans AMOS permet de retracer l’ensemble de l’activité d’une spécialité donnée.

Dans DCIR, si l’on souhaite éviter les actes réalisés par des salariés de libéraux, il faudra revenir au référentiel PS pour s’assurer que la spécialité du flux est bien celle du référentiel PS libéraux.**


:::


### Statut juridique, nature d’exercice et mode de conventionnement

Les situations de ces variables se rapportent au N° de PS de liquidation au moment du traitement de la prestation.

**Le statut juridique** traduit son mode d’exercice : il peut s’agir d’un statut juridique  libéral pour une activité libérale intégrale ou à temps plein hospitalier, il peut s’agir d’un statut juridique public ou privé (exerçant à titre salarié d’un établissement privé, d’une société d'exercice libéral, ou de libéraux).

**La nature d’exercice** du PS précise son exercice et indique notamment s’il est libéral intégral ou partagé avec une activité salariée, s’il exerce à temps partiel ou temps plein hospitalier. 
La modalité 7 indique si le PS est en fin d’activité. 
C’est cette indication qui permet de voir, à une date T de flux, si un N° de PS de liquidation correspond à un ancien cabinet qui a par la suite déménagé. 
Les datamarts AMOS proposent également les dates de début et fin d’exercice (période d’exercice en annéemois).

Enfin, le **code convention** renseigne sur le type de conventionnement que le PS a passé avec l’Assurance Maladie ; cette notion est liée au **secteur conventionnel adopté par le PS** : non conventionné, conventionné ou conventionné avec droit à dépassement.


| Convention du PS | Secteur Conventionnel | 
| :---------: |:---------:| 
| 0 PRATICIEN NON CONVENTIONNE  | 0 SECTEUR 0  | 
| 1 PRATICIEN CONVENTIONNE  | 1 SECTEUR I  | 
| 2 PRATICIEN CONVENTIONNE AVEC DROIT PERMANENT A DEPASSEMENT  | 1 SECTEUR I   | 
| 3 PRATICIEN CONVENTIONNE AVEC HONORAIRES LIBRES  | 2 SECTEUR II - PRATICIEN CONVENTIONNE AVEC HONORAIRES LIBRES   | 
| 8 VALEUR INCONNUE  | 9 SECTEUR INCONNU   | 
| 9 PRATICIEN SALARIE (SERVICE MEDICAL DU REGIME SNCF, RATP OU MINES) | 0 SECTEUR 0   | 

Ces variables peuvent être complétées dans les datamarts AMOS et DCIR par les différents contrats sur objectifs signés par le PS, par exemple son adhésion à l’[OPTAM](https://documentation-snds.health-data-hub.fr/glossaire/OPTAM.html) (PRS_CRD_OPT) qui a remplacé le Contrat d’Accès aux Soins.
Elles peuvent également constituer un « contexte du PS » (dans DCIR, EXE_CTX_PFS) qui servira à établir la grille tarifaire des actes chirurgicaux de la nomenclature CCAM.


### Récapitulatif par produit SNDS

| Variables (Executants et Prescripteurs | Produits | Libellé |
| :---------: |:---------:|:---------:| 
| **Catégorie du PS**  | DCIR  | X (3e caractère du numéro PS, si pas crypté) |
|   | DAMIR/AMOS  | Catégorie du PS Exécutant ou Prescripteur |
|  | DA_PRA_R   | PFS_CAT_COD |
| **Spécialité médicale du PS**  | DCIR/DCIRS  | PS**E_SPE**_COD ou PS**P_SPE**_COD |
|  | DAMIR  | Spécialité médicale PS Exécutant ou Prescripteur |
| **Nature d’activité du PS**  | DCIR/DCIRS  | PS**E_ACT**_NAT ou PS**P_ACT**_NAT  |
|  | DAMIR  | Nature activité PS Exécutant ou Prescripteur |
| **Regroupement 2 terminologies**  | DCIRS  | PS**E_ACT**_SPE ou PS**P_ACT**_SPE  |
|  | AMOS  | Spécialité/nature d'activité PS Exécutant ou Prescripteur     |
|  | DA_PRA_R  | PFS_PRA_SPE      |
| **Spécialité PS salarié**  | AMOS  | Spécialité/nature d'activité PS Exécutant ou Prescripteur  |
|  | DA_PRA_R  | PRA_SAL_SPE      |
| **Compétence MEP du PS**  | DCIR/DCIRS  | X  |
|  | DAMIR | X      |
|  | AMOS | Compétence MEP du PS      |
|  | DA_PRA_R  | PRA_MEP_COD      |
| **Statut juridique**  | DCIR/DCIRS  | PS**E**_STJ_COD ou  PS**P**_STJ_COD  |
|  | DAMIR/AMOS  | Statut juridique du PS Exécutant ou Prescripteur      |
| **Nature d’exercice**  | DCIR/DCIRS  | X  |
|  | DAMIR | X      |
|  | AMOS | Nature exercice du PS Exécutant ou Prescripteur |
|  | DA_PRA_R  | EXC_EXC_NAT      |
| **Code convention**  | DCIR/DCIRS  | PSE_CNV_COD ou PSP_CNV_COD  |
|  | DAMIR/AMOS  | Convention du PS Exécutant ou Prescripteur      |
|  | DA_PRA_R   | CNV_CNV_COD      |


## Profils de connexion aux données du SNDS et respect du référentiel Sécurité relatif aux PS

Certains profils de connexion au portail SNDS permettent la lecture en clair des N° de PS, pour les caisses nationales des régimes, les Directions de Coordination de la Gestion du Risque des CPAM, les DRSM, les ARS et la Direction de la Sécurité Sociale.
Les autres profils (y compris le 117 pour les extractions de données DCIR) proposent un N° de PS crypté et par conséquent un N° de commune à blanc.

**Le Référentiel de Sécurité du SNDS impose de ne pas sortir du portail SNDS de données individuelles bénéficiaire et Professionnel de Santé non anonymes** (non anonyme signifiant qu’il ne doit pas être possible à partir de ces données de déduire une information personnelle sur le professionnel de santé.)

**Il est donc interdit, pour répondre à des finalités du SNDS, d’exporter les identifiants des professionnels de santé, même cryptés ; 
Il est également recommandé de ne pas sortir de petits effectifs.**


## Références

::: tip Crédits
Cette fiche provient d'un document créé par la Cnam - MPL-2.0
[Fiche publiée](../files/Cnam/2019-10_Cnam_Professionnels-sante_MLP-2.0.pdf)
:::
