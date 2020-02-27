# Localisation géographique des bénéficiaires
<!-- SPDX-License-Identifier: MPL-2.0 -->

La localisation géographique du bénéficiaire dans le SNDS est possible grâce aux variables indiquant le **département** et la **commune de résidence**. 
Il n’existe pas de niveau de localisation plus fin.
Ces variables sont mises à disposition dans plusieurs tables du SNDS, dans des formats différents, avec parfois des informations contradictoires ou à corriger.

L’objet de cette fiche est d’aider à s’y retrouver parmi ces différentes informations pour assurer au mieux la qualité de la localisation du bénéficiaire.  

## Remarques préliminaires

### Signification du code commune

L'information code commune est différente selon l'univers considéré.

Dans le **SNIIRAM**, le code commune est le **code Insee**. 
Il est remonté via la carte vitale au moment du soin, ou via les bases de données des caisses de sécurité sociale. 

Dans le **PMSI**, le code commune est appelé **code géographique**. 
Il s'agit du code postal pour les commune de plus de 1000 habitants, et d'un code postal agrégé pour les communes de moins de 1000 habitants. 
Ce code postal est déclaré par le bénéficiaire lors du séjour.

Dans les **causes de décès**, le code commune est le **code Insee**. 
Il s’agit de l’information sur le certificat de décès.

### Association d'un bénéficiaire à un lieu de résidence

Différents critères permettent d'associer un bénéficiaire à un lieu de résidence.

La CNAM retient souvent le critère du **dernier département de résidence**.
 
Il est possible d’utiliser d’autres critères d'associations, tels que 
- le département du plus grand nombre de soins sur la période d’étude ;  
- le département de l’organisme de remboursement du bénéficiaire ;
- le département du professionnel exerçant le soin.

### Qualité de l'information

La plupart des codes département sont corrects.
Des problèmes existent cependant pour la Corse, les DOM, et les bénéficiaires de certaines sections locales mutualistes étudiantes (SLM 617).

Beaucoup de corrections sont à faire sur les codes communes. 
On recourt alors notamment à des tables de correction, qui ne sont *a priori* pas exhaustives.

## Où trouver les variables département et commune ?

| **UNIVERS**| **TABLE**| **VARIABLE DÉPARTEMENT** (str(3)) | **VARIABLE COMMUNE** (str(3)) | **REMARQUES** |
|------------|----------|----------|----------|----------|
| **SNIIRAM  DCIR** | **Référentiel des bénéficiaires** [IR_BEN_R](../tables/BENEFICIAIRE/IR_BEN_R.md) | BEN_RES_DPT | BEN_RES_COM | Dernière information disponible (table des prestations ou données administratives des caisses de sécurité sociale) |
| | **Table prestations** [ER_PRS_F](../tables/DCIR/ER_PRS_F.md)| BEN_RES_DPT | BEN_RES_COM | Information remontée au moment de la prestation |
| **SNIIRAM DCIRS** | **Référentiel des bénéficiaires** [IR_IBA_R](../tables/BENEFICIAIRE/IR_IBA_R.md) | BEN_RES_DPT | BEN_RES_COM | Dernière information disponible (table des prestations ou données administratives des caisses de sécurité sociale) |
| | **Table prestations** [NS_PRS_F](../tables/DCIRS/NS_PRS_F.md)| BEN_RES_DPT | BEN_RES_COM | Information remontée au moment de la prestation |
| | **Tables affinées** [NS_XXX_F](../tables/DCIRS)| BEN_RES_DPT | BEN_RES_COM | Information remontée au moment de la prestation |
| **PMSI MCO/SSR/HAD** | **Table séjour B** [T_MCOaa_B](../tables/PMSI/PMSI%20MCO/T_MCOaaB.md) | BDI_DEP | BDI_COD (str(5))| |
| **Cartographie des pathologies** | **Table individus** [CT_IND_AAAA_GN](../tables/CARTOGRAPHIE_PATHOLOGIES/CT_IND_AAAA_GN.md)| dpt| Non disponible | Code reconstitué à partir des informations du DCIR et du PMSI et corrigé si besoin |
| **Causes de décès** | **Table cause initiale de décès** [KI_CCI_R](../tables/Causes%20de%20décès/KI_CCI_R.md) | BEN_RES_DPT | BEN_RES_COM | Les codes ont été transformés pour coller aux référentiels du SNIIRAM IR_DPT_V et IR_GEO_V |

## Construction de la localisation dans le PMSI

Pour travailler *à un niveau départemental*, la variable département `BDI_DEP` s’utilise seule.

Différences par rapport au SNIIRAM :
- Les départements de Corse sont codés `2A` ou `2B`
- Les DOM sont codés `9A`, `9B`, `9C`, `9D` et `9F`

Pour travailler *à un niveau communal*, la variable commune `BDI_COD` s’utilise également seule dans le PMSI (5 positions). 
Elle donne le code géographique du lieu de résidence déclaré par le patient. 

Le code géographique correspond au code postal, ou à un regroupement pour les codes postaux de moins de 1000 habitants.  
L'[ATIH](../glossaire/ATIH.md) met à disposition chaque année sur son [site](https://www.atih.sante.fr/nomenclatures-de-recueil-de-linformation/codes-geographiques)  une table qui permet de passer des codes géographiques aux codes postaux.

## Construction de la localisation dans le SNIIRAM
 
### Construction du code département

La variable du département `BEN_RES_DPT` peut généralement s’utiliser directement.

Il est cependant plus rigoureux de commencer par reconstituer le code Insee `depcom` au niveau comunal (cf ci-dessous), puis d'en extraire le code département. 
Cette méthode permet notamment de bien distinguer les DOM, et les deux départements de Corse.

Exemple de code SAS pour construire la variable departement `dept`
```sas
IF substr(depcom,1,2) in ("97","20") THEN dept=substr(depcom,1,3);
ELSE dept=substr(depcom,1,2);
```

Pour reconstituer le code département de la Corse (Haute-Corse `201`, et Corse-du-Sud `202`), 
il est également possible d'utiliser le département de l'organisme d'affiliation du bénéficiaire `(substr(ORG_AFF_BEN,4,3))`.
Les deux départements de la Corse y sont en effet bien distingués pour le régime général, et pour les SLM.


### Construction du code commune Insee complet à 5 positions
 
Pour travailler *au niveau communal* dans le SNIIRAM, il faut reconstituer le code commune Insee complet à 5 positions. 
 
Cette partie détaille la construction du code Insee pour un soin, c'est-à-dire pour une ligne du DCIR. 

Elle ne spécifie pas de critère de décision pour savoir quelle information retenir si un bénéficiaire est associé à deux localisations différentes.

#### Règles de construction

La construction du code Insee à 5 positions nécessite de combiner les variables département **et** commune. 
Cette combinaison a une règle générale, et des règles spécifiques pour les cas particuliers.

La **règle générale** consiste à extraire *les deux derniers caractères du code département* et *les trois caractères du code commune*.   

![Schéma de construction du code commune Insee dans le SNIIRAM](../files/DREES/2019-07_DREES_localisation_beneficiaires/code_com_snds.png)


Des **règles spécifiques** existent pour : 

-  La Corse (code département `209`)
    Combinaison des 
    - 2 **premiers** caractères du code département    
    - 3 caractères du code commune
-  Les DOM
    - Pour les bénéficiaires du [RG](../glossaire/RG.md), le code département est `097` et la règle dominante fonctionne
    - Pour la [MSA](../glossaire/MSA.md) et le [RSI](../glossaire/RSI.md), le code département est entre `971` et `976`, 
        - Pour la MSA, on applique la même règle que pour la Corse.
        - Pour le RSI, on conserve les 3 caractères du code département et les 2 derniers caractères du code commune.

#### Code SAS pour construire `depcom`

Voici un exemple de code SAS pour construire la variable code Insee `depcom` à 5 positions, à partir des variables `BEN_RES_DPT` et `BEN_RES_COM`.

```sas
/*Cas général*/
IF ben_res_dpt ne '209' and substr(ben_res_dpt,1,2) ne '97' 
	THEN depcom=compress(substr(ben_res_dpt,2,2)||ben_res_com);
 /*Corse*/
ELSE IF ben_res_dpt = '209' 
	THEN depcom=compress(substr(ben_res_dpt,1,2)||ben_res_com); 
 /*DOM pour MSA*/
ELSE IF (regime='02A' and substr(ben_res_dpt,1,2)='97') 
	THEN depcom=compress(substr(ben_res_dpt,1,2)||ben_res_com); 
/*DOM pour RSI*/
ELSE IF (regime='03A' and substr(ben_res_dpt,1,2)='97') 
	THEN depcom=compress(ben_res_dpt)||substr(ben_res_com,2,2); 
```
#### Obtention du code INSEE en 2A et 2B pour la Corse en partant du code INSEE commencant par 20
Lorsque le code INSEE est obtenu à partir des variables `BEN_RES_DPT` et `BEN_RES_COM` il est possible d'obtenir le code INSEE actuel pour la Corse (commençant par 2A ou 2B) pour tous les bénéficiaires. Pour obtenir le nouveau code INSEE (l’ancien code INSEE était valable avant 1976) il faut utiliser le fichier des événements sur les communes de l'INSEE, disponible à cette [page](https://www.insee.fr/fr/information/3720946) pour l'année 2019. 

Il faudra ainsi fusionner la variable code INSEE avec la variable `com_av`.  
Le code INSEE actuel pour la Corse est donné par la variable `com_ap`.

#### Problèmes supplémentaires et corrections

D'autres problèmes existent, pour lesquels nous proposons des corrections, à appliquer dans l'ordre.

- Un certain nombre de codes communes et de codes départements sont manquants. 
Les valeurs manquantes utilisées sont `000`, `099` ou `999`. 

*Correction* : utiliser le département de l’organisme d’affiliation `(substr(ORG_AFF_BEN,4,3))`.

- Les caisses utilisent parfois des codes Insee qui n'existent plus.
  
La nomenclature des codes communes évolue en effet régulièrement. 
Les caisses ont parfois du retard pour répercuter ces évolutions.
    
*Correction* : La table `RFCOMMUN.CORRECTIONS_COM2012_NEW` permet de réattribuer les bons codes Insee. 
Attention, cette table n'est pas exhaustive. 
    
- Utilisation des codes postaux à la place des codes Insee  
    
*Correction* : La table `RFCOMMUN.T_FIN_GEO_LOC_FRANCE`, mise à disposition par l’ARS Ile-de-France, permet de réattribuer les bons codes.
 
- Anomalies pour les bénéficiaires d’une SLM étudiante (code 617) : code département tronqué à deux caractères et compris entre `001` et `009`

*Correction* : utiliser le département de l’organisme d’affiliation `(substr(ORG_AFF_BEN,4,3))`.

## Lien entre la localisation dans le PMSI et dans le SNIIRAM
La table **PMSI_CORRESP**, mise à disposition par l’[ATIH](../glossaire/ATIH.md), permet de passer des codes géographiques (PMSI) aux codes Insee (SNIIRAM).  
Cette table est disponible sur le portail de la [CNAM](../glossaire/Cnam.md) dans le répertoire **rfcommun**.  
Il est possible de reconstituer cette table en croisant :
- la table donnant la correspondance entre le code postal et le code géographique du PMSI mise à disposition sur le [site internet de l'ATIH](https://www.atih.sante.fr/nomenclatures-de-recueil-de-linformation/codes-geographiques) 
- une table donnant la correspondance entre le code postal et le code Insee disponible en open data [à l'adresse suivante](https://public.opendatasoft.com/explore/dataset/correspondance-code-insee-code-postal/table/?flg=fr&refine.insee_com=01001).

::: warning Note
Lorsqu'un code géographique est associé à plusieurs codes postaux, une simple jointure sur `PMSI_CORRESP va générer des lignes en doublons.
:::

## Construction du code région (SNIIRAM et PMSI)

Le programme ci-dessous permet d'associer aux codes départements reconstruits selon les méthodes citées précédemment (SNIIRAM ou PMSI) les codes des nouvelles régions correspondantes :

```sas
IF dept="01" THEN region="84-Auvergne-Rhône Alpes";
IF dept="02" THEN region="32- Hauts de France";
IF dept="03" THEN region="84-Auvergne-Rhône Alpes";
IF dept="04" THEN region="93-Provence Alpes Cote d'Azur";
IF dept="05" THEN region="93-Provence Alpes Cote d'Azur";
IF dept="06" THEN region="93-Provence Alpes Cote d'Azur";
IF dept="07" THEN region="84-Auvergne-Rhône Alpes";
IF dept="08" THEN region="44-Grand Est";
IF dept="09" THEN region="76-Occitanie";
IF dept="10" THEN region="44-Grand Est";
IF dept="11" THEN region="76-Occitanie";
IF dept="12" THEN region="76-Occitanie";
IF dept="13" THEN region="93-Provence Alpes Cote d'Azur";
IF dept="14" THEN region="28- Normandie";
IF dept="15" THEN region="84-Auvergne-Rhône Alpes";
IF dept="16" THEN region="75-Nouvelle Aquitaine";
IF dept="17" THEN region="75-Nouvelle Aquitaine";
IF dept="18" THEN region="24-Centre-Val de Loire";
IF dept="19" THEN region="75-Nouvelle Aquitaine";
IF dept="2A" THEN region="94-Corse";
IF dept="2B" THEN region="94-Corse";
IF dept="201" THEN region="94-Corse";
IF dept="202" THEN region="94-Corse";
IF dept="20" THEN region="94-Corse";
IF dept="21" THEN region="27- Bourgogne Franche Comté";
IF dept="22" THEN region="53-Bretagne";
IF dept="23" THEN region="75-Nouvelle Aquitaine";
IF dept="24" THEN region="75-Nouvelle Aquitaine";
IF dept="25" THEN region="27- Bourgogne Franche Comté";
IF dept="26" THEN region="84-Auvergne-Rhône Alpes";
IF dept="27" THEN region="28- Normandie";
IF dept="28" THEN region="24-Centre-Val de Loire";
IF dept="29" THEN region="53-Bretagne";
IF dept="30" THEN region="76-Occitanie";
IF dept="31" THEN region="76-Occitanie";
IF dept="32" THEN region="76-Occitanie";
IF dept="33" THEN region="75-Nouvelle Aquitaine";
IF dept="34" THEN region="76-Occitanie";
IF dept="35" THEN region="53-Bretagne";
IF dept="36" THEN region="24-Centre-Val de Loire";
IF dept="37" THEN region="24-Centre-Val de Loire";
IF dept="38" THEN region="84-Auvergne-Rhône Alpes";
IF dept="39" THEN region="27- Bourgogne Franche Comté";
IF dept="40" THEN region="75-Nouvelle Aquitaine";
IF dept="41" THEN region="24-Centre-Val de Loire";
IF dept="42" THEN region="84-Auvergne-Rhône Alpes";
IF dept="43" THEN region="84-Auvergne-Rhône Alpes";
IF dept="44" THEN region="52-Pays de Loire";
IF dept="45" THEN region="24-Centre-Val de Loire";
IF dept="46" THEN region="76-Occitanie";
IF dept="47" THEN region="75-Nouvelle Aquitaine";
IF dept="48" THEN region="76-Occitanie";
IF dept="49" THEN region="52-Pays de Loire";
IF dept="50" THEN region="28- Normandie";
IF dept="51" THEN region="44-Grand Est";
IF dept="52" THEN region="44-Grand Est";
IF dept="53" THEN region="52-Pays de Loire";
IF dept="54" THEN region="44-Grand Est";
IF dept="55" THEN region="44-Grand Est";
IF dept="56" THEN region="53-Bretagne";
IF dept="57" THEN region="44-Grand Est";
IF dept="58" THEN region="27- Bourgogne Franche Comté";
IF dept="59" THEN region="32- Hauts de France";
IF dept="60" THEN region="32- Hauts de France";
IF dept="61" THEN region="28- Normandie";
IF dept="62" THEN region="32- Hauts de France";
IF dept="63" THEN region="84-Auvergne-Rhône Alpes";
IF dept="64" THEN region="75-Nouvelle Aquitaine";
IF dept="65" THEN region="76-Occitanie";
IF dept="66" THEN region="76-Occitanie";
IF dept="67" THEN region="44-Grand Est";
IF dept="68" THEN region="44-Grand Est";
IF dept="69" THEN region="84-Auvergne-Rhône Alpes";
IF dept="70" THEN region="27- Bourgogne Franche Comté";
IF dept="71" THEN region="27- Bourgogne Franche Comté";
IF dept="72" THEN region="52-Pays de Loire";
IF dept="73" THEN region="84-Auvergne-Rhône Alpes";
IF dept="74" THEN region="84-Auvergne-Rhône Alpes";
IF dept="75" THEN region="11-Ile de France";
IF dept="76" THEN region="28- Normandie";
IF dept="77" THEN region="11-Ile de France";
IF dept="78" THEN region="11-Ile de France";
IF dept="79" THEN region="75-Nouvelle Aquitaine";
IF dept="80" THEN region="32- Hauts de France";
IF dept="81" THEN region="76-Occitanie";
IF dept="82" THEN region="76-Occitanie";
IF dept="83" THEN region="93-Provence Alpes Cote d'Azur";
IF dept="84" THEN region="93-Provence Alpes Cote d'Azur";
IF dept="85" THEN region="52-Pays de Loire";
IF dept="86" THEN region="75-Nouvelle Aquitaine";
IF dept="87" THEN region="75-Nouvelle Aquitaine";
IF dept="88" THEN region="44-Grand Est";
IF dept="89" THEN region="27- Bourgogne Franche Comté";
IF dept="90" THEN region="27- Bourgogne Franche Comté";
IF dept="91" THEN region="11-Ile de France";
IF dept="92" THEN region="11-Ile de France";
IF dept="93" THEN region="11-Ile de France";
IF dept="94" THEN region="11-Ile de France";
IF dept="95" THEN region="11-Ile de France";
IF dept="9A" THEN region="01-Guadeloupe";
IF dept="9B" THEN region="02-Martiniquee";
IF dept="9C" THEN region="03-Guyane";
IF dept="9D" THEN region="04-La Réunion";
IF dept="9F" THEN region="06-Mayotte";
IF dept="971" THEN region="01-Guadeloupe";
IF dept="972" THEN region="02-Martiniquee";
IF dept="973" THEN region="03-Guyane";
IF dept="974" THEN region="04-La Réunion";
IF dept="976" THEN region="06-Mayotte";
```

## Références

::: tip Crédit
Le contenu de cette fiche est rédigé par Claire-Lise Dubost (DREES).
Il s'inspire notamment de la note technique rédigée en 2014 par Pierre-Olivier Blotière (CNAM), ainsi que de codes fournis par les ARS.
:::
