# FAQ DCIR
<!-- SPDX-License-Identifier: MPL-2.0 -->

*version 09/2019*


## DCIR


### VARIABLE IJR_EMP_NUM

**La variable IJR_EMP_NUM est passée du format numérique au format alphanumérique le 9 novembre 2017.** 
**Est-ce également le cas dans les tables archives du DCIR ER_PRS_F_aaaa ?** 	

Non, le format a changé uniquement dans la table ER_PRS_F mais pas dans les tables archives ER_PRS_F_aaaa.





### MODE DE PRESCRIPTION MSA	

**Les informations concernant le mode de prescription ne sont pas remontées pour le régime agricole (MSA), alors qu'il est disponible pour l'ensemble des autres régimes.**	

Ce champ n'est pas transmis par la MSA, pour une raison de version de norme de transmission NTEIR. 
En effet, ce champ est remonté depuis la version 6 de la norme NTEIR, tandis que la MSA transmet actuellement en norme 5, mais travaille sur la montée de version (de 5 à 9).






### PRESTATIONS DE CURES THERMALES DES BENEFICIAIRES CMU-C

**Comment repérer les prestations cures thermales TTH et HTH pour les bénéficiaires CMU-C et Type de contrat = 89 ?**	

Ces prestations, pour ces bénéficiaires, sont repérables dans ER_PRS_F en combinant :

1- BEN_CTA_TYP, Type de contrat avec un organisme complémentaire = 89 => BENEFICIAIRE DE LA CMU COMPLEMENTAIRE (EN COURS) QUELQUE SOIT LE GESTIONNAIRE 

2- PRS_NAT_REF, BSE_PRS_NAT, CPL_PRS_NAT Nature de la prestation de référence, de base ou complémentaire prenant une des valeurs suivantes :

4131 FRAIS DE TRANSPORTCURES THERMALES

4132 FRAIS D HOTELCURES THERMALES

9132 FRAIS DE DEPLACEMENT EN CURE THERMALE 

9133 FRAIS D HEBERGEMENT EN CURE THERMALE






### SOINS URGENTS EN EX-DG	

**L'ATIH identifie les remboursements en soins urgents en ex-DG par la variable NON_FAC_AM = "4".** 
**Comment identifier les soins urgents dans DCIR ?**

Concernant le dispositif des soins urgents relatif à la prise en charge des soins urgents mis en place pour les personnes étrangères en situation irrégulière, qui relève d'un dispositif de facturation particulier, ce sont des soins réalisés pour des étrangers non AME. 
Ils ne figurent pas dans DCIR, seul le service comptable dispose des montants correspondants à ces soins. 
En revanche, nous disposons de quelques informations dans le PMSI.





### MEDECIN TRAITANT

**Si le médecin déclaré comme médecin traitant part à la retraite et que le patient n'en a pas déclaré un nouveau, le PRS_MTT_NUM se met-il à ""00000000"" ?**
**Ou bien est ce que le dernier numéro reste tant qu'il n'y a pas de changement ?**
**Existe-il une table recensant les professionnels de santé en activité ou n'exerçant plus mais avec leur date de fin d'activité ?**

Le numéro de médecin traitant ne change pas tant que le patient n'en a pas déclaré de nouveau (même si l'ancien part la retraite). 
La table T_FPPS_ACT ne contient pas que les professionnels en activité mais l'ensemble des professionnels de santé libéraux. 
Pour savoir si un professionnel est en activité, il faut utiliser la table T_FPPS_PFS_EXC qui indique la nature d'exercice du professionnel avec sa date d'effet. 
Par ailleurs, un patient peut avoir un numéro de médecin traitant qui n'est pas un médecin libéral : un établissement, un centre de santé, un ehpad...






### VARIABLE EXE_SOI_DTD	

**A quelle date correspond EXE_SOI_DTD dans le cadre des actes de biologie ?**
**S'agit-il de la date du prélèvement sanguin ?** 
**Ou s'agit-il de la date de réception de l'échantillon par la laboratoire doseur ?** 
**Ou bien de la date d'analyse par le laboratoire doseur ?**	

Les actes de prélèvement ont leur propre codage (3222 : prélèvement sanguin par un directeur de laboratoire ; 3223 : prélèvement sanguin par un technicien de laboratoire...). 
La date EXE_SOI_DTD associée correspond à leur date d'exécution c'est-à-dire à la date où les prélèvements sont effectués.






### REGULATIONS DES PRESTATIONS CCAM	

**Comment prendre en compte les régulations sur les prestations CCAM ?**
**Pourriez-vous me confirmer qu'il faut prendre en compte PRS_ACT_QTE ?**	

Il s'agit bien de la variable PRS_ACT_QTE.






### VARIABLE PFS_EXE_NUM	 

**A quoi correspond le cas PFS_EXE_NUM = 00000000 ?**
**Récupère-t-on les établissements exécutants publics et privés ?**	 


PFS_EXE_NUM = 00000000 correspond à des PS exécutants salariés, d’établissements privés pour la grande majorité, et d'établissements publics en FIDES (Facturation Directe).






### TABLE IR_PHA_R	

**Selon le communiqué du 2 mars 2015, DCIR Codage du CIP sur 13 chiffres:  Nous vous rappelons également que la table CNAMTS de référence sur le médicament, IR_PHA_R, ne contient pas de médicaments homéopathiques.** 
**A quoi correspondraient les 196 lignes avec PHA_ATC_L03 = SPECIALITES HOMEOPATHIQUES ?**

Nous avons mis à jour ce communiqué en précisant qu'il existe bien 196 lignes de médicaments homéopathiques qui ont été remboursés par le passé et qui figurent dans le réferentiel car c'est une base historisée.






### REGIME PENITENTIAIRE	

**Existe t-il un moyen de repérer l’appartenance au Régime Pénitentiaire des individus ?** 

Les détenus sont identifiables par des codes petits régimes spécifiques (652, 656, 657 et 658 associés au grand régime 01 et concerne l’assuré).






### TABLE IR_PHA_R	

**Pourquoi certains médicaments n'ont pas d'ATC dans le référentiel IR_PHA_R ?** 	

Nous avons regardé les médicaments récents, ayant des dates de début de validité du tarif (PHA_TAR_DAT) supérieures ou égales à Janvier 2016, sur 16 071 médicaments, seuls 163 non pas de classe ATC, ce qui représente 1% de ces médicaments.
Il s'agit de médicaments trop récents pour que le service de la CNAMTS ait eu le temps de renseigner la classe ATC.






### PATIENTS FRONTALIERS


**Comment identifier les patients résidents dans les départements frontaliers, qui effectuent des soins d'imagerie médicale en Belgique ?**

Tout d’abord les soins à l’étranger sont réglés par le Centre National des Soins à l’Etranger (CNSE) rattaché à la CPAM du Morbihan qui centralise et traite les factures de soins acquittées par les assurés sociaux du Régime Général.

Le CNSE traite les factures acquittées relatives aux :

- Soins réalisés hors UE

- Soins réalisés dans l’UE/UEE et Suisse : lorsque l’assuré n’a pas utilisé la CEAM ou n’a pas pu l’utiliser hors de son séjour.

Pour le remboursement de ces soins, les assurés concernés doivent en faire la demande en complétant l’imprimé Cerfa S 3125 et joindre les factures acquittées.

Dans le système d’informations, on retrouve les paiements CNSE, mais il y a très peu de détail, les paiements sont identifiables :

- Dans le SNIIRAM par le code de prestation 4331

- Sur SIAM ERASME code de prestations ETR, ET1 , ET2 , ET3, ET4, ET5, ET6, ET8

Le problème est que nous ne disposons pas de détail sur les soins réalisés : pas d’informations sur le pays dans lequel ont été réalisés les soins, pas d’informations sur le PS exécutant/prescripteur, nous ne connaissons pas non plus le type actes réalisés.

Ensuite, il y’a le cas des frontaliers migrants qui habitent en France mais travaillent à l’étranger (exemple des résidents en Ardennes qui travaillent en Belgique), ces personnes sont susceptibles de bénéficier d’un double rattachement système belge et système français :

Lorsqu’ils ont des soins effectués en Belgique, les soins sont remboursés par le système belge, et on ne les retrouvera pas dans le système d’informations car non remboursés par l’assurance maladie en France.






### CODAGE AFFINE LPP	

**On a découvert que pour certains codes LPP, on pouvait avoir un prix unitaire faible ainsi qu'une quantité faible et un montant remboursé/remboursable beaucoup plus important que la simple multiplication du prix X quantité.**
**Par exemple, on a un code LPP pour les lancettes avec un prix unitaire de 15 €, une délivrance pour un patient d'une seule quantité et un montant remboursé de 127 € sur cette ligne dans la table Prestations.** 
**En regardant de plus près, on s'est aperçu que sur cette ligne, on avait une quantité de 1 mais un dénombrement de 3.**
**On s'est rendu compte que si plusieurs codes LPP étaient délivrés le même jour (dénombrement supérieur à 1), le montant remboursé qui était reporté dans la ligne prestation était tout simplement la somme des montants pour l'ensemble des codes LPP délivrés le jour en question.** 
**Cet individu avait eu des lancettes ce jour là (une boîte à 15 €) avec des bandelettes et un kit d'autosurveillance et si on fait la somme des montants pour les trois produits on obtient les 127 € du départ.** 
**Mais ce 127 € est présent trois fois dans la table Prestation donc attention si vous vous intéressez aux montants remboursés/remboursables il ne faut pas prendre en compte les montants présents dans la table PRS mais il faut les recalculer à l'aide de la table affinée LPP (TIP).**

Les indicateurs agrégés correspondant aux codes PS5 pouvant comporter un cumul de codes affinés, et les indicateurs affinés portant uniquement sur le code affiné sélectionné. 
Ainsi, le montant remboursé affiné = quantité affinée x prix unitaire du code affiné LPP x taux de remboursement. 
Il correspond au calcul préconisé dans la table TIP du DCIR.
Effectivement, si on travaille sur du codage affiné, il ne faut pas se servir du montant remboursé au niveau agrégé (table PRS du DCIR) car il démultiplierait le montant remboursé total de la prestation LPP.






### NIR D'UN ASSURE PROVISOIRE

**Dans quel(s) cas et quelle(s) condition(s) un bénéficiaire est-il considéré comme "assuré provisoire"?**
**Est-ce uniquement les patients bénéficiaire de l'AME ? ou d'autres cas existe-t-il ?**

**Quand le bénéficiaire n'est plus assuré provisoire, change-t-il de NIR?** 	


Le matricule en clair d’un ouvreur de droits provisoire commence par 7 ou 8. 

Un matricule provisoire est attribué à un étranger qui vient travailler en France, en attente de l’attribution de son NIR par le SANDIA, service de la CNAV chargé d’attribuer un NIR aux personnes nées hors de France. 

Un matricule provisoire est également donné aux bénéficiaires de l’AME, leur code BEN_CDI_NIR vaut donc 04. 

Dans ce cas, aucun NIR ne leur est attribué car les bénéficiaires de l’AME ne sont pas des assurés sociaux, le régime général avance leurs frais de santé pour le compte de l’Etat et se les fait rembourser ensuite par l’Etat. 

Attention : il existe également des bénéficiaires de l’AME qui disposent d’un NIR (BEN_CDI_NIR = 00), il s’agit généralement de personnes considérées comme des étrangers qui ont été en situation régulière en France pendant une certaine période et qui sont ensuite en situation irrégulière. 

Lorsqu’un ouvrant droit provisoire obtient son NIR (assuré social étranger venant travailler en France), il change de numéro d’immatriculation, son matricule provisoire commençant par 7 ou 8 est remplacé par son NIR commençant par 1 ou 2. 

Attention, il s'agit du NIR de l’ouvrant droit et non de celui des ayants droit. Dans IR_BEN_R, pour le régime général et les régimes infogérés, le NIR pseudonymisé BEN_NIR_ANO n’est chargé que si le bénéficiaire (assuré ou ayant droit) dispose d’un NIR certifié.






### LIBELLES DES CODES DE CESSATION D'ACTIVITE	

**Existe-il une table de valeurs de la variable mode de fin d'exercice libéral (EXC_FIN_MTF) permettant d'obtenir les libellés associés à ces codes ?** 	

Malheureusement cette table de valeur n'existe pas encore sous SAS, elle le sera avec l'arrivée du RFOS, nous n'avons pas de date à vous communiquer pour le moment. 







### FORMAT DE LA VARIABLE IJR-EMP_NUM	

**Le format de la variable IJR_EMP_NUM est-il également passé de numérique à alphanumériques dans les tables archives de DCIR (exemple : ER_PRS_F_2012) ?**                                 

La modification de format de la variable IJR_EMP_NUM a été effectuée uniquement dans la table ER_PRS_F de DCIR, sur tout l'historique de données chargées dans cette table, à partir de janvier 2013.  
Elle n’a pas été réalisée dans les tables « archives » de DCIR (historique 2006 à 2012) car ces tables ne sont pas évolutives mais correspondent à des données « mortes » ayant été archivées et dont le modèle est « figé » (de type photo). 
Le format de cette variable dans les tables archives est encore numérique.






### NUMEROS SIRET

**Y a-t-il un moyen de repérer les numéros SIRET des particuliers/associations employeurs ?** 
**Est-ce que du moment qu’on a au moins une lettre dans le numéro, on peut en déduire qu’on est dans le cas de particulier/associations employeur ?** 
**A l’inverse, y a-t-il des cas de particulier/association employeur où il n’y a pas de lettre dans le numéro SIRET ?** 
**Avez-vous de la doc ou un interlocuteur à ce sujet ?**
 
Il n'y a pas moyen de repérer les numéros SIRET des particuliers/associations employeurs pour la NEC, car pas encore d'évolution au niveau de l'entrepôt, pour la NTEIR il faut vérifier.






### DATE D'ACCOUCHEMENT PRS_GRS_DTD	

**Je m'intéresse aux congés paternité et souhaiterais savoir à quoi correspond la "date présumée de grossesse" associée à ces congés, car elle est parfois assez éloignée du premier jour du congé.**
**Est-elle remontée au moment de l'accouchement ou plus tôt par la caisse ?**

En théorie, à réception d'une déclaration de grossesse, on enregistre la date présumée de grossesse dans PRS_GRS_DTD. 
Le système calcule et enregistre une exonération du ticket modérateur au titre du risque maternité, qui va du 1er jour du 6ème mois jusqu'à 12 jours après la date présumée d'accouchement. 
Lors de l'enregistrement de la date réelle d'accouchement, cette période d'exonération est recalculée en fonction de la date réelle de l'accouchement. 
Ainsi, pour une période de soins donnée, on peut trouver plusieurs valeurs différentes de la date PRS_GRS_DTD pour une même bénéficiaire.

Il existe une table historique de la maternité IR_MAT_R dans la bibliothèque ORAVUE, dans laquelle deux variables sont particulièrement intéressantes : 

- BEN_GRS_DTE : Date présumée de grossesse, qui est alimentée par les BDO, et saisie par les services de liquidation à la réception de la déclaration de grossesse. 
Il n’y a pas de mise à jour de cette date , sauf si une erreur a été commise (erreur de saisie par le technicien, réception d’un rectificatif de la part de l’assurée). 

- BEN_DRA_AME : Année et mois de l'accouchement. 
Lors de l’alimentation mensuelle de la table IR_MAT_R à partir des BDO, une mise à jour de l’année et du mois de l’accouchement BEN_DRA_AME est réalisée dans le cas où, pour un même bénéficiaire caractérisé par son couple {identifiant SNIIRAM BEN_NIR_PSA ; rang bénéficiaire BEN_RNG_GEM} et une même date présumée de grossesse BEN_GRS_DTE : 
o la variable BEN_DRA_AME (année et mois de l’accouchement) est inconnue dans la table IR_MAT_R (l’accouchement n’avait pas encore eu lieu par exemple), 
o cette variable est maintenant renseignée dans les BDO, la variable BEN_DRA_AME est alors mise à jour dans la table historique IR_MAT_R; elle est forcée à la valeur qu’elle prend dans les BDO. 

Il existe une documentation associée à cette table dans le portail SNDS. 






### MEDICAMENTS ATU	

**Comment identifier les médicaments en ATU (nominative ou de cohorte) dans le SNDS ?**
**Le fichier MATU fourni par l'ATIH n'est disponible que depuis 2014.** 
**Y a-t-il une autre source d'information que ce fichier ? peut-on identifier ces médicaments avant 2014 ?**

Les médicament en ATU sont identifiables dans le DCIR par le code prestation PS5 (variable PRS_NAT REF) : 3351 (MEDICAMENT AVEC UNE AUTORISATION TEMPORAIRE D'UTILISATION).






### ACTES DES ORTHOPHONISTES	

**Quels sont les différents types de soins prodigués par les orthophonistes (nomenclature générale des actes professionnels - NGAP) permettant de déterminer la part des enfants suivis pour dyslexie, aphasie, autres troubles du langage...** 
**Quelle variable doit-on utiliser ?**	

Les orthophonistes facturent leurs prestations en utilisant le code AMO (code PS5 3132) affecté d'un coefficient selon les indications de la NGAP.
Le coefficient correspond à la variable PRS_ACT_CFT de ER_PRS_F.






### EXISTENCE DE SLM EN '01C'	

**En consultant les tables consopat.extraction_patientsAAAAtr, il existe des lignes ORG_AFF_BEN commençant par '01C' associées à la variable "regime" = SLM, alors que les SLM ont a priori des codes organismes en '01M'.** 
**Est-ce un cas particulier ou une erreur ?**	

Effectivement, les organismes d'affiliation en '01M' correspondent à des SLM du régime général, tandis que ceux en '01C' sont relatifs aux caisses stricto sensu. 
En recherchant sur la table consopat.extraction_patients2016tr de 2016, il n'y a que très peu de cas pour lesquels la variable regime = SLM alors que l'organisme d'affiliation commence par '01C', et il s'agit a priori d'erreurs. 
Il existe cependant également des organismes d'affiliation en '91C', '92C', '93C', '94C', '95C', '96C' et '99C' pour lesquels la variable 'regime' = SLM dans les tables de consopat : il s'agit des remboursements faits par les caisses primaires pour les bénéficiaires des SLM au titre de la subsistance.






### ALLOCATION ADULTE HANDICAPE	

**Comment repérer les bénéficiaires de l'allocation adulte handicapé dans le DCIR ?**
**Existe-t-il un top AAH dans le DCIR ? Ou bien une information sur l’ouverture de droit à l’AAH ?**	

Il n'existe pas de top AAH dans le DCIR. 
L'information existante sur le droit à l'AAH n'est disponible que pour les personnes non assujetties à un autre titre à un régime obligatoire d'assurance maladie et au travers des données de remboursement. 
L’information n’est donc pas exhaustive. 
Cependant, une étude publiée par le Fonds CMU portant sur « La protection sociale complémentaire des personnes en situation de handicap et de précarité » et établie à partir des données de 3 caisses primaires d’assurance maladie (Bordeaux, Nanterre et Hainaut) indique que les assurés de ces régimes (hors maintiens de droit et hors ayants-droit) représenteraient près des 3/4 des bénéficiaires de l’AAH. 

Le ciblage de ces bénéficiaires se fait grâce à la variable donnant le régime d’affiliation à l’assurance maladie (« code petit régime ») :

180 : Adultes-handicapés. Ce régime prévaut uniquement sur la qualité d'ayant droit. Protection sociale : PN. Risques couverts : maladie-maternité. 

181 : Adultes handicapés + droits AT. 

188 : Adultes handicapés (ex régime spécial d'assurance maladie de la chambre de Commerce et d'Industrie). 

189 : Ex-titulaire de l'AHH (maintien de droits). Protection sociale : PN. Risques couverts : maladie-maternité. (Ce code régime ne doit plus être utilisé à compter du 01/01/2016 car avec la réforme PUMA, la notion de maintien de droits n'existe plus)

Attention : ces codes 'petit régime' concernent des assurés comme des ayants-droits. 
Une personne avec un code petit régime AHH n’est donc pas forcément handicapée mais peut être un ayant-droit d’une personne handicapée.






### INTEGRATION DU REGIME DES INDEPENDANTS	

**Comment reconnaître les travailleurs indépendants dans le DCIR ?**
**Avec l’affiliation au régime général des nouveaux travailleurs indépendants  au 1 er janvier 2019, y a-t-il création d’un code petit régime pour les indépendants ?**

Pour la prise en charge des nouveaux travailleurs indépendants dans le SNDS à partir du 1er janvier 2019, l’identification des factures se fera par la réutilisation des codes petits régimes suivants : RGM_COD = 105, 106, 107, 103, 360, 660, chacun de ces petits régimes permettant de distinguer les différentes catégories d’indépendants. 
De plus, les codes des organismes d’affiliation et de liquidation ne feront plus référence au code grand régime = 03, mais prendront le code grand régime = 01.
Un top permettant d’identifier les factures de ces nouveaux travailleurs indépendants est créé (variable PRS_FAC_TOP).






### COMPARATIF AVEC SNIREP	

**Retrouver les résultats de SNIREP dans DCIR : dans le cadre de l'évaluation de l'activité en dialyse de certains établissements, une requête rapide sur le SNIREP permet d'obtenir les dépenses AM par centre, comment faire pour les retrouver sous DCIR ?** 

La solution consiste en fait en une jointure entre la table ER_PRS_F et ER_ETE_F.






### ACTES DE TELEMEDECINE	

**Existe-t-il un moyen d'identifier les actes réalisées dans le cadre de la télémédecine dans le DCIR ?** 

Voici la liste des actes de télémédecine présents au 08/10/2018 dans ORAVUE : 

1096 TTE TELECONSULTATION MEDECIN TRAITANT AVEC EHPAD 

1097 TDT TELE EXPERTISE DOSSIER TRAITANT 

1157 TCP Acte de téléconsultation 

1158 TEP Acte de télé expertise 

1164 TLC TÉLÉ CONSULTATION - ALD ET / OU EHPAD 

1165 TLE TÉLÉ EXPERTISE - ALD ET/OU EHPAD 

1172 TSA TELESURVEILLANCE : PS EFFECTUANT L'ACCOMPAGNEMENT 

1174 TSM TELESURVEILLANCE : MEDECIN TELESURVEILLANT 

1191 TC TELECONSULTATION TOUTES SPECIALITES 

1192 TCG TELECONSULTATION GENERALISTE 

3593 TSF TELESURVEILLANCE : FOURNISSEUR DE LA SOLUTION 

A priori, les actes TE1 1193 et TE2 1194 (télé expertise) seraient à venir début 2019.






### CHANGEMENT DE SEXE	

**Pour les personnes ayant effectué un changement de sexe à l'état civil, le NIR du bénéficiaire BEN_NIR_ANO est-il également modifié ?** 
**Est-il possible de suivre le parcours de soins de ces personnes en cas de changement de NIR ?**

Il est possible effectivement que l'INSEE procède au changement du NIR d'une personne suite à jugement en cas de changement de sexe. 
Dans ce cas, il ne sera malheureusement pas possible de suivre le parcours de soin de la personne avant/après changement de sexe. 






### MONTANTS ACTES CCAM	

**Comment calculer le montant des actes CCAM dans DCIR ?**
**Pour de nombreux actes, le prix unitaire renseigné dans la table ER_CAM_F (variable CAM_ACT_PRU) est inférieur au montant de la base remboursement (BSE_REM_BSE) et au montant remboursé (BSE_REM_MNT) de la table ER_PRS_F.** 
**Par exemple, l'acte ZBQK002 a un prix unitaire CAM_ACT_PRU = 21.28€ et le montant remboursé vaut 25.92 (tout comme la base de remboursement).** 
**Comment le patient peut être remboursé d'un montant supérieur au prix de l'acte ? Est-ce que la variable CAM_ACT_PRU est bien la variable à utiliser ?**

Les différences de montants sont dues aux modificateurs qui s'appliquent sur le code affiné CCAM. 
Ainsi, dans l'exemple relatif à l'acte ZBQK002, si on multiplie le prix unitaire 21.28 par 1.218 (modificateur = 21,8% si acte réalisé par un radiologue), on retrouve bien le montant renseigné dans ER_PRS_F (25.92€).






### NUMERO PS SALARIE D'ETABLISSEMENT

**Quand le professionnel prescripteur ou exécutant est salarié dans un établissement public, le numéro renseigné dans les variables PFS_EXE_NUM et PFS_PRE_NUM est-il bien le numéro FINESS de l’établissement ?** 
**S'il est salarié dans un établissement privé, s'agit-il du RPPS du professionnel ?**
**Ces informations vont-elles changer avec le Caqesces ?** 	

Actuellement pour le régime RG, y compris SLM : 

- Pour le PS exécutant dans un établissement, il y a 2 informations possibles dans la facture : exe-num : n° du PS et eta-num : n° etablissement. 

Les règles d'alimentation sont les suivantes : 
* Si le 3ème caractère de exe-num <> 0 alors PFS_EXE_NUM est alimenté à partir de exe-num; et dans ce cas, ETB_EXE_FIN = eta-num si eta-num est renseigné 
* Si le 3ème caractère de exe-num = 0 alors PFS_EXE_NUM est non renseigné et : 
          => si eta-num est non renseigné alors ETB_EXE_FIN = exe-num ;
          => si eta-num est renseigné alors ETB_EXE_FIN = eta-num 


- Pour le PS prescripteur dans un établissement, il y a une seule information possible dans la facture : pre-num qui contient soit le n° de PS , soit le n° établissement. 

Les règles d’alimentation sont alors :
* Si le 3ème caractère de pre-num <> 0 alors PFS_PRE_NUM est alimenté à partir de pre-num et ETB_PRE_FIN est non alimenté ;
* Si le 3ème caractère de pre-num = 0 alors ETB_PRE_FIN = pre-num et PFS_PRE_NUM est non alimenté.

Les autres régimes devraient se conformer à ces règles.






### CMU et CMU-C	

**Comment toper des consommants bénéficiaires de la CMU de base et bénéficiaires de la CMU-complémentaire ?**

Les bénéficiaires de la CMU complémentaire sont repérables grâce à la variable BEN_CMU_TOP présente dans la table ER_PRS_F, et dont la table de valeurs est  BEN_CMU_TOP_V.
Les valeurs de cette varaible sont : 0 = Non ; 1 = Oui ; 2 = Sans objet.
Règle de gestion : le top CMU (variable BEN_CMU_TOP) est positionné à 1 lorsque le type de contrat CMU est égal à 89 (bénéficiaire de la CMU complémentaire), sinon il est positionné à zéro.
Toutefois, lorsque le patient est en ALD, le top CMU-C est forcé à 0 pour les prestations liquidées en rapport avec l'ALD (celle-ci est prioritaire), et prend la valeur 1 pour les prestations liquidées non en rapport avec l'ALD.

Pour info, un top CMU = 1 indique un bénéficiaire de la CMU-C, mais qui n’est pas forcément en régime de CMU de Base. 






### COMPARAISON DCIR/DCIRS	

**Les résultats d'une requête ne sont pas les mêmes sur le DCIRS et sur le DCIR : par exemple, une requête portant sur le nombre de consultations effectuées par un médecin généraliste au cours d'un mois (janvier 2016) selon le département, donne sur le DCIRS un total 22,1 millions consultations, contre 22,7 consultations sur le DCIR soit un écart de 600 000 consultations (= 3% dans l'effectif du DCIRS).**
**En détaillant par département, les disparités dans cet écart sont les plus fortes dans les départements 93 et 75.** 
**Y a-t-il une explication pour ces écarts ?**
**Quelle base faut-il préconiser pour ces calculs, qu'il s'agisse du nombre total de consultations, ou du nombre de bénéficiaires ayant eu recours à une prestations ?**	

Une des différences entre DCIRS et DCIR est que DCIRS est davantage filtré : 
En particulier, les prestations des bénéficiaires ayant des NIR fictifs, celles non individualisables, et les prestations réalisées au cours d'un séjour ou d'une consultation externe envoyées pour information sont exclues d'emblée dans DCIRS (il est donc à priori pas besoin de filtrer sur DPN_QLF <>71). 

En enlevant les bénéficiaires avec NIR fictifs de la requête sur DCIR, les résultats devraient être plus proches.






### MENTION NON SUBSTITUABLE MSA	

**Les informations concernant la mention Non Substituable ne sont pas remontées pour le régime agricole (MSA) alors qu'il est disponible pour l'ensemble des autres régimes.** 
**Cela correspond-il à une anomalie ?**

Effectivement, ce champ n'est pas encore transmis par la MSA, pour une raison de version de norme de transmission NTEIR : ce champ est remonté avec la version 6 de la norme NTEIR, tandis que la MSA transmet actuellement en norme 5.






### DECLARATION DE GROSSESSE	

**A-t-on dans DCIR des informations fiables concernant la déclaration de la grossesse ?**	

Il n'y a pas de critère exact permettant d'obtenir la certitude d'une déclaration de grossesse à part utiliser la variable PRS_GRS_DTD qui est déclarative et peut donc varier de plusieurs jours en fonction du professionnel de santé qui la soumet.
Il faut donc croiser plusieurs informations pour arriver à une information plus fiable.






### REMBOURSEMENT DE MEDICAMENTS - AYANTS-DROITS	

**Le remboursement des soins des ayants-droits est-il bien rattaché à l'ayant droit ou à l'ouvreur de droit ?** 
**Plus précisément, pour les médicaments remboursés pour des personnes de moins de 18 ans (qui n'ont pas encore de carte vitale), qui sont donc rattachés à un/les 2 parent(s), comment cela se retranscrit-il dans le DCIR ?** 
**Le remboursement est-il bien rattaché à l'enfant, ou à son/ses parent(s) ?**	

Oui le remboursement de l'ensemble des prestations (dont celui de médicaments) est rattaché à l'enfant et non à son/ses parent(s). 
Il faut cependant faire attention à ne pas doublonner les enfants qui sont rattachés à leurs 2 parents. 
Ces enfants ont 2 BEN_NIR_PSA différents car 2 ouvreurs de droits différents (le BEN_NIR_PSA est construit à partir du NIR de l'ouvreur de droit ET du sexe et de la date de naissance de l'enfant). 
De plus, une très grande majorité des enfants a un identifiant unique ""vie entière"" BEN_NIR_ANO qui permet de lier les couples BEN_NIR_PSA-BEN_RNG_GEM correspondant à un même enfant. 
Il est recommandé d'utiliser l'identifiant BEN_IDT_ANO qui est égal au BEN_NIR_ANO s'il existe ou à la concaténations du BEN_NIR_PSA et du BEN_RNG_GEM si le BEN_NIR_ANO est manquant, et particulièrement pour des études portant sur une population d'enfants. 






### REGROUPEMENT CABINET PS LIBERAUX	

**Existe-t-il une variable dans le DCIR informant sur les regroupements de professionnels de santé, qui travaillent dans un même cabinet ?**	

Il n'y a pas dans DCIR de variable informant des regroupements de PS. 
Toutefois, dans la table T_FPPS_PFS accessible dans Oravue pour les organismes d'assurance maladie, la variable 'PFS_SCV_COD' (Code association du PS) regroupe les PS d'un même cabinet. 
Il faut rajouter le département car cette variable peut avoir la même valeur sur plusieurs départements. 
Dans la table DA_PRA_R, la variable 'PFS_SCN_COD' (Code association du PS) est également présente.






## DCIRS



### PRIX UNITAIRE DE L'ACTE DE BIOLOGIE	

**Pouvez vous me dire quelle variable correspond au prix unitaire d'un acte de biologie dans la table NS_BIO_F ?** 	

Les tables ER_BIO_F et NS_BIO_F du codage affiné de biologie ne contiennent pas le prix unitaire de l'acte affiné de biologie. 
Néanmoins, il est possible d'évaluer le coût des actes affinés de biologie d'un bénéficiaire à partir des informations suivantes :

- le code acte affiné BIO_PRS_IDE (table du codage affiné de biologie ER_BIO_F),

- le prix de l'acte B de biologie médicale BSE_REM_PRU (table des prestations ER_PRS_F), 

- le taux de remboursement de cet acte RGO_REM_TAU (table des prestations ER_PRS_F), 

- le coefficient de l'acte affiné de biologie BTF_TAR_COF (table de référence IR_BTF_R dans le dossier ORAREF), 

- la quantité d'actes affinés BIO_ACT_QSN (table du codage affiné de biologie ER_BIO_F).

La règle proposée pour recalculer le montant remboursé de l'acte affiné BIO_PRS_IDE est la suivante : coefficient de l'acte affiné de biologie x prix de l'acte B x quantité affinée de l'acte de biologie x taux de remboursement (rgo_rem_tau/100).






### ABSENCE DES BENEFICIAIRES DES SLM INFOGEREES DANS LES VUES PATIENTS DCIRS	

**Dans le DCIRS, contrairement au DCIR, les patients affiliés à des SLM infogérées devraient être présents dans les vues régionales "Patients".** 
**Or, seules les caisses et SLM de liquidation de la région y sont retrouvées.** 
**Est-ce normal ? Si oui, comment repérer et identifier les patients affiliés aux SLM infogérées ?**	

Avec DCIR simplifié, une évolution a été apportée afin que les données RG y compris SLM soient restituées dans les vues régionales « patients », y compris pour les bénéficiaires des SLM dites « infogérées ». 
Ainsi, pour ces SLM infogérées, c’est l’organisme d’affiliation du bénéficiaire qui est utilisé pour attribuer les remboursements à une région. 
Donc, il devrait y avoir dans la vue « patients » d'une région donnée, les remboursements des organismes de liquidation de la région (RG, MSA, SSI) ET ceux faits à des bénéficiaires des SLM infogérées affiliés à cette région. 
Pour ces cas, l’organisme renseigné ne devrait pas être une caisse mais bien une SLM (de type 01M…).

Cette évolution n'était au départ pas correctement restituée dans les vues régionales "Patients" de DCIRS. 
Mais suite à une évolution de la gestion des profils, une correction a été apportée et les bénéficiares affiliés aux SLM infogérées de la région sont depuis bien restitués dans les vues patients de DCIRS.






### UTILISATION DE BEN_IDT_ANO DANS DCIR

**Peut-on utiliser BEN_IDT_ANO dans DCIR ?**

BEN_IDT_ANO est l'identifiant utilisé dans le DCIRS. Dans DCIR, l'identifiant bénéficiaire est constitué du couple BEN_NIR_PSA-BEN_RNG_GEM mais la correspondance entre BEN_IDT_ANO et chaque couple BEN_NIR_PSA-BEN_RNG_GEM est donnée dans le référentiel IR_BEN_R (qui comprend les 3 variables BEN_NIR_PSA, BEN_RNG_GEM, BEN_IDT_ANO). 
L'identifiant BEN_IDT_ANO est donc tout à fait utilisable dans DCIR mais demande un croisement systématique entre les données du flux et IR_BEN_R.






### LIEN BEN_IDT_ANO / BEN_NIR_PSA	

**Est-ce normal qu'un même BEN_IDT_ANO soit associé à plusieurs couples BEN_NIR_PSA, BEN_RNG_GEM ?**

Un même BEN_IDT_ANO peut effectivement être associé à plusieurs couples {BEN_NIR_PSA; BEN_RNG_GEM}. 
Cela peut s'expliquer par des changements de situations au cours de la vie du bénéficiaire : passage d'ayant droit de son conjoint ou de ses parents à assuré pour propre compte, passage de NIR provisoire à NIR définitif ...
Pour la Sécurité Sociale des Indépendants, le nombre de couples {BEN_NIR_PSA; BEN_RNG_GEM} peut être plus élevé car ce régime code les rangs gémellaires d'une façon différente par rapport au RG. 
D'ici 2020, avec l'intégration de la Sécurité Sociale des Indépendants au RG, la codification des BEN_RNG_GEM devrait s'améliorer, et améliorer donc de façon générale les NIR. 
La répartition des couples {BEN_NIR_PSA; BEN_RNG_GEM] est contrôlée à chaque chargement mensuel du référentiel IR_BEN_R. 
Les NIR identifiés comme fictifs sont isolés et ne sont pas restitués dans IR_BEN_R mais remplacés par la concaténation {BEN_NIR_PSA; BEN_RNG_GEM} avec un BEN_IDT_TOP = 0.






### PRIX UNITAIRE DANS LA TABLE NS_BIO_F	

**Quelle variable correspond au prix unitaire d'un acte de biologie dans la table NS_BIO_F de DCIRS ?**
**De plus, où peut-on trouver la description de la table IR_BIO_R ?**

La table ER_BIO_F du codage affiné de biologie ne contient pas le prix unitaire de l'acte affiné de biologie.
La règle proposée pour recalculer le montant remboursé de l'acte affiné BIO_PRS_IDE est la suivante : 
coefficient de l'acte affiné de biologie * prix de l'acte B * quantité affinée de l'acte de biologie * taux de remboursement (rgo_rem_tau/100)






### EXCLUSION POUR CONSULTATIONS EXTERNES TRANSMISE POUR INFO	

**Dans le DCIR simplifié, les données sont restituées avec le filtre : DPN_QLF ≠ 71.** 
**Toutefois, un filtre supplémentaire est possible dans DCIR, si on veut exclure des analyses toutes les consultations externes transmises pour information, en excluant les lignes pour lesquelles DPN_QLF = 0 ET PRS_DPN_QLP = 71.** 
**Peut-on le faire dans le DCIR simplifié, car la variable PRS_DPN_QLP n'est pas présente dans la table NS_PRS_F ?** 
**Faire une exclusion plus large PRS_DPN_QLP = 71 sans rajouter la condition DPN_QLF = 0 est-elle également juste ?**	

Le qualificatif de la dépense transmis PRS_DPN_QLF a été mis en place dans le cadre du dispositif des participations forfaitaires assurés. 
Si DPN_QLF = 0 (sans objet) ET PRS_DPN_QLP = 71 (ACE transmis pour information), alors il s’agit des participations forfaitaires assuré (CPL_AFF_COD = 16) payées pour les consultations externes, transmises non pas pour information mais pour connaître l’ensemble des PF assurés. 
On peut les intégrer dès lors que l’on travaille sur un coût de pathologie / traitement. 
Cette participation forfaitaire est réellement payée par l'assuré, elle n'est pas payée "pour information". 
Par conséquent, si vous réalisez une étude sur le coût d'une pathologie ou d'un traitement médical, vous ne devez pas exclure ces enregistrements de votre analyse. 
De plus, ils vous permettent de repérer qu'une consultation externe a bien eu lieu.






### ACCIDENT DU TRAVAIL	

**Comment calculer le nombre d'accidents de travail sur une année à partir du DCIRS ?** 
**Filtrer sur le code PRS_NAT_REF = 8226 dans la table NS_RAT_F, puis utiliser la variable ATT_NAT qui permet de distinguer les accidents du travail des maladies professionnelles et les accidents de trajet : est-ce la bonne démarche ?**	

La table NS_RAT_F ne contient que les prestations dont le code prestation est relatif à une rente (invalidité >= 10 % pour AT ou MP), c'est à dire principalement le code prestation 8111. 
L'ICA (invalidité < 10%, versée en une fois) n'est pas considérée comme une rente, d'ailleurs il y en a très peu dans NS_RAT_F. 
Pour les AT sans incapacité ou entrainant une incapacité temporaire d'inaptitude (ITI), il faut plutôt aller chercher dans la table des prestations NS_PRS_F les prestations avec IJ ou ITI. 
Du coup, si l'on veut repérer l'ensemble des AT, les codes prestations à extraire sont : les IJ codées 6111 à 6118, les ITI 6120, les ICA 8226 et les rentes 8111. 
Ensuite, faire un croisement avec le référentiel médicalisé IR_IMB_R (par l'intermédiaire du Référentiel des Bénéficiaires IR_BEN_R) permet d'avoir davantage d'information sur l'AT (date de début, motif CIM10, ...). 
Cependant, on ne peut pas distinguer les IJ pour AT des IJ pour maladie professionnelle, car la nature d'assurance AT et MP est la même. 






### LIGNES DE MAJORATIONS	

**Pourquoi existe-t-il des lignes de majorations dans DCIRS ?** 
**Dans le support de formation, il est indiqué que le DCIRS fournit, dans la table des prestations NS_PRS_F, sur une seule ligne, des indicateurs sur la prestation de référence et sur les majorations ou compléments d'actes associés.** 
**Or, il existe des individus, dans la table des prestations, qui ont une ligne pour la prestation de base et également une ligne pour la majoration. Pourquoi ?**	

Il s'agit de majorations qui n'ont pas pu être rattachées à l'acte de base auquel elles se rapportent comme cela est prévu dans DCIRS. 
C'est le cas notamment lorsque la prestation de référence n'est pas renseignée par l'acte de base. 
Toutefois, pour ces cas où la majoration n'a pas pu être rattachée à l'acte de base, il a été décidé de la conserver tout de même dans DCIRS, c'est pourquoi on retrouve ces lignes dans la table NS_PRS_F. 






### PROFIL 81 ACTIVITE DE DIALYSE MANQUANTE	

**A partir de le vue régionale "Prescripteurs", il n'y a pas d'assurés du RG (mais uniquement des assurés du régime agricole) ayant eu un transport lié à une dialyse dans un établissement de santé de la région, tandis qu'à partir de la vue régionale "Patients", on trouve bien des assurés du RG.** 
**Comment expliquer cela ?**	

Le problème vient du fait que dans la vue régionale "Prescripteur", les données restituées sont restreintes aux données prescrites par un établissement de la région ou un PS de la région de l'utilisateur (si n° de PS renseigné et n° FINESS renseigné pour l'acte prescrit, c'est la géographie de l'établissement qui est prise en compte dans le filtre). 
Or, pour l'ensemble des régimes, versant prescripteur, les n° FINESS des établissements prescripteurs (ETE_PRE_FIN) de prestations de forfaits de dialyse sont renseignés uniquement pour les régimes 02 (RA) et 04 (SNCF) et correspondent toujours au numéro de l'établissement exécutant ETB_EXE_FIN. 
En conséquence, la vue régionale "Prescripteurs" restitue bien les données de ces 2 régimes. 
Pour les autres régimes (dont le RG), le numéro de l'établissement prescripteur n'est pas renseigné à la source (ETB_PRE_FIN est égal à 00000000 pour les prestations de dialyse). 
En conséquence, le filtre gérant les accès par région ne restitue pas les données de ces régimes dans la vue prescripteur.






### OBTENIR LES MEMES RESULTATS D'UN MOIS A L'AUTRE	

**Comment peut-on bloquer les résultats d'une requête lancée sur le DCIRS à deux dates différentes ?** 
**Pour les soins de l'année 2017, les conditions suivantes sont-elles suffisantes ?**
**t1.EXE_SOI_AMD BETWEEN '201701' AND '201712' AND t1.EXE_SOI_DTD BETWEEN '1Jan2017:0:0:0'dt AND '31Dec2017:0:0:0'dt AND t1.FLX_DIS_DTD BETWEEN '1Fev2017:0:0:0'dt AND '1Jui2018:0:0:0'dt.**

Deux éléments peuvent engendrer des différences dans les requêtes lancées à deux dates différentes :
- les régularisations : quand on ré-agrège des actes qui ont été liquidés à des dates différentes (par exemple, dans le cas d’une régularisation), on conserve la date de traitement de l’acte initial ; 
- les prestations du Port Autonome de Bordeaux : elles ont été exclues lors des premiers traitements (1ère MAD DCIRS V1 en avril 2017) et ont été ensuite réintégrées (2ème MAD DCIRS V1 en février 2018, avec la complétude des données sur 2017 et 2018). 
Cette réintégration concerne les données avec GRG_LIQ_COD = 16 et les périodes avec FLX_DIS_DTD compris entre février 2016 et janvier 2018. 
Elle fait suite à la suppression dans IR_BEN_R des NIR fictifs multi BEN_NIR_PSA qui posaient antérieurement un problème pour l’alimentation DCIRS. 






## REFERENTIELS



### IR_IMB_R VERSUS IR_ETM_R	

**Pour le régime général, on constate l'absence de bénéficiaires du référentiel IR_IMB_R alors qu'ils sont présents dans IR_ETM_R avec un motif d'exonération du TM = 41 et qu'ils ont des remboursements avec des motifs d'exo 41 ou 42 selon que le soin est en rapport ou non avec l'affection.**

Les données du référentiel IR_IMB_R sont médicales et nous informent en particulier de la pathologie exonérante, tandis que celles de la table IR_ETM_R sont purement administratives (ALD liste par exemple) mais ne contiennent pas de détails sur le plan médical. 






### IR_ACS_R	

**La table IR_ACS_R est alimentée tous les mois, elle contient une ligne par bénéficiaire et par période d’affiliation afin que les utilisateurs puissent savoir à quelle date les droits à l’ACS ont été renouvelés.**
**Je souhaiterais savoir si cette extraction est réalisée de façon centralisée par les CTI et quels sont les critères précis utilisés pour l'extraction BDO ?**

Cette table est alimentée mensuellement à partir des BDO des bases Erasme régionales pour le régime général hors SLM, les SLM infogérées par le RG (Cf. documentation utilisateurs), les régimes des marins 06A, des mines 07A, des clercs et employés de notaires 10A et des cultes 90A.

Les conditions générales de sélection des bénéficiaires dans les BDO des bases régionales, sélection qui permet d'enrichir les 5 tables du référentiel des bénéficiaires du SNIIRAM sont les suivantes : 

- le matricule de l'ouvreur de droits ASSMAC_BEN en commence par 1, 2, 5, 6, 7 ou 8, 

- les 6 premiers caractères de l'identifiant du bénéficiaire BENIDF_BEN correspondant à la date de naissance sans le siècle et sont différents de 000000, 

- l'indicateur du RNIAM du bénéficiaire INDRNM_BEN est renseigné et différent de A, B ou Y (rejet ou litige sur le NIR et/ou l'état civil), 

- le NIR du bénéficiaire MACBEN_BEN est renseigné et commence par 1 ou 2.






### IR_ACS_R / IR_ORC_R	

**Quelles sont les nuances entre :**

**- L’information contenue dans la table IR_ACS_R** 

**- Le type de contrat BEN_CTA_TYP in ('91','92','93') de la table IR_ORC_R** 

**La comparaison des deux sources montrent des écarts.**


L’aide à l’acquisition d’une complémentaire santé (ACS) concerne les personnes dont les ressources sont modestes, comprises entre le plafond de la CMU complémentaire et 35 % au-dessus de ce plafond. 
Elle est accordée par l’assurance maladie obligatoire aux personnes qui en font la demande et qui remplissent les conditions de ressources.

L’ACS donne droit au demandeur et aux membres du foyer qui lui sont rattachés (ayants droit) :

1. Pendant un an : 

-à une aide financière à faire valoir sur le montant de la souscription à une assurance maladie complémentaire, 

-à partir du 1er juillet 2015, à une dispense totale d’avance de frais pour leurs soins de santé (tiers payant intégral), s’ils souscrivent à un contrat d’assurance maladie complémentaire prévu à cet effet (11 contrats sont prévus en juillet 2015, regroupés en trois catégories, standard, medium, premium) ;

=> se sont les contrats BEN_CTA_TYP in ('91','92','93') de la table IC_ORC_R à partir de juillet 2015. 

C’est un droit optionnel de l’ACS, on peut choisir de ne pas souscrire à ces contrats.  

2. pendant 18 mois :

-à la dispense d'avance de frais sur la part prise en charge par l’assurance maladie obligatoire (tiers payant social),

-depuis le 1er mars 2013, aux tarifs médicaux sans dépassements d'honoraires.

=> c’est les périodes de droits d’ouverture de l’ACS présente dans la table IR_ACS_R. 

On a ces droits d’office avec l’ACS.  

L’ACS est accordée à tous les membres du foyer du demandeur. 
Dans les BDO, l’affiliation à l’ACS est attribuée au niveau de la « famille » au sens de la sécurité sociale, i.e. l’ouvreur de droits et l’ensemble de ses ayants droit. 
Dans la table IR_ACS_R, l’affiliation à l’ACS est retracée pour chaque bénéficiaire ({identifiant SNIIRAM ; rang bénéficiaire}), qu’il soit ouvrant droit ou ayant droit. 
Si vous voulez connaître la composition des « familles » affiliées à l’ACS, il vous faut apparier la table IR_ACS_R avec la table principale IR_BEN_R sur l’identifiant SNIIRAM et le rang de bénéficiaire, et regrouper les bénéficiaires qui ont un même ouvreur de droit, i.e. même matricule de l’ouvreur de droits ASS_NIR_ANO. 
L’appariement avec la table IR_BEN_R vous permet également de connaître l’année et le mois de naissance, le sexe, la date éventuelle de décès, … de chaque membre de la famille.

Pour tout complément d’information sur l’ACS, vous pouvez vous reporter* [*au site de l’assurance maladie*](http://www.ameli.fr/assures/soins-et-remboursements/cmu-et-complementaires-sante/aide-au-paiement-d-une-complementaire-sante/quels-sont-les-avantages-de-l-acs.php)






### IR_IMB_R	

**Il était prévu courant 2017 une purge du référentiel IR_IMB_R, éliminant les individus non exonérés au cours des trois dernières années, intégrant le régime de l'assuré et le BEN_NIR_ANO si je ne me trompe pas. Doit-on considérer que cette nouvelle table IR_ETM_R est la version purgée de IR_IMB_R (même si elle n'est valable que pour le régime général et régimes infogérés) ou allez-vous purger dans tous les cas IR_IMB_R ?** 	

Non, la table IR_ETM_R n'est pas une version purgée de IR_IMB_R, la purge de IR_IMB_R se fera bien effectivement, elle a été repoussée à une date ultérieure.






### IR_MAT_R

**IR_MAT_R fait partie des 5 tables satellites qui viennent enrichir le table principale IR_BEN_R, et fournit pour les bénéficiaires l'historique de leurs grossesses au delà du 1er janvier 2013.** 
**On constate qu' il y a des grossesses de plus de 9 mois ... Le record est BEN_GRS_DTE = 20/03/2013 et BEN_DRA_AME = 201804, ce qui fait grosso modo 5 ans.** 
**Comment expliquer ces cas ?**

Il peut s'agir de femmes ayant fait une fausse couche suite à la grossesse déclarée dans la date présumée de grossesse, et qui ont mené une autre grossesse à terme plus tard dans leurs vies, la première date présumée de grossesse n'a donc pas été actualisée. 






### IR_BEN_R : BEN_RES_DPT DOM/TOM	

**En comptant le nombre de bénéficiaires (combinaison unique de {BEN_NIR_PSA, BEN_RNG_GEM}) dans IR_BEN_R, par département de résidence BEN_RES_DPT, on trouve une majorité de "097 -Autres DOM".** 
**A quoi correspond le BEN_RES_DPT = 097 ?**	

Pour les bénéficiaires du régime général résidants dans les DOM, le BEN_RES_DPT est codé 097 sans pouvoir faire de distinction entre les différents DOM. 
Pour les utilisateurs ayant accès à la commune de résidence du bénéficiaire (sur 3 positions), une solution est de reconstituer le code commune sur 5 positions comme suit :
depcom = compress(substr(BEN_RES_PDT,2,2)||BEN_RES_COM) 
puis de prendre les trois premiers caractères du code depcom; on obtient alors les codes des différents DOM : 971, 972, 973, 974 et 976.






### PATIENTS AVEC UN MEDECIN TRAITANT	

**Existe-t-il une table "Bénéficiaires" qui permette d'identifier l'ensemble des patients ayant déclaré un médecin traitant, même ceux n'ayant pas eu de consommation de soins une année donnée ?** 
**Ou le seul moyen d'identifier si un patient a un médecin traitant, est-ce d'utiliser la variable "PRS_MTT_NUM" de la table "ERE_PRS_F"?**	

Oui, il existe le réferentiel IR_MTT_R qui couvre le même périmètre que IR_BEN_R : alimenté par tous les régimes d’assurance maladie obligatoire, il s’est enrichie des informations issues des bases administratives de huit sections locales mutualistes du régime général (La mutuelle générale LMG, la mutuelle générale de la police MGP, MFP service MFPS, la mutuelle nationale des hospitaliers MNH, Harmonie fonction publique HFP, La mutuelle des étudiants LMDE (depuis janvier 2017), la caisse d’assurance maladie des industries électriques et gazières CAMIEG, La mutuelle du ministère de l’intérieur Intériale), et de cinq régimes infogérés par le régime général (l’établissement national des invalides de la marine ENIM (depuis février 2016), la caisse nationale de sécurité sociale des mines CANSSM (depuis octobre 2016), la caisse nationale militaire de sécurité sociale CNMSS (depuis septembre 2017), la caisse de retraite et de prévoyance des clercs et employés de notaires CRPCEN, la caisse d’assurance vieillesse et maladie des cultes CAVIMAC). Il couvre ainsi près de 5 millions de personnes.
Une documentation sur ce référentiel est disponible sous le portail. "






## PMSI




### EVALUATION DES DEPENSES EN ETABLISSEMENTS PUBLICS HOSPITALIERS	

**Comment évaluer les dépenses des établissements Publics Hospitaliers pour les ressortissants de l'ENIM, en risque AT-MP, à partir des données PMSI ?**	

Il faut joindre les tables T_MCOAAVALO (table de valorisation des séjours) et T_MCOAASTC (table des informations de prise en charge des établissements STC) sur les variables ETA_NUM et RSA_NUM.
Il faut ensuite exclure les FINESS géographiques qui générent des doublons.
Le régime des ressortissants de l’ENIM correspond à la valeur 06 de la variable NOE_RGM (code grand régime).
La valorisation des séjours est la valeur de la variable MNT_TOT_AM de la table T_MCOAAVALO.
Le risque AT-MP correspond à la valeur 41 de la variable NAT_ASS (nature d’assurance) de la table T_MCOAASTC.

NB : La table VALO ne prend en compte que les séjours remboursés par l’assurance maladie.






### PSYCHIATRIE - CHAINAGE AVEC DCIR ET AUTRES PMSI	

**Un patient identifié dans le PMSI Psychiatrie ambulatoire peut-il être chainé dans les autres PMSI et dans le DCIR ?**	

Les personnes ayant des séjours hospitaliers en psychiatrie sont chainables avec les autres PMSI et le DCIR (NIR_ANO_17 = BEN_NIR_PSA) avec toujours le souci du rang gémellaire.
En revanche, pour le PMSI psy en ambulatoire, seules les personnes ayant eu de l’ambulatoire ET un séjour psy dans le même établissement sont chainables à l’aide de la variable IPP_IRR_CRY commune aux séjours et aux actes ambulatoires au sein d'un même établissement. 
Les actes ambulatoires des personnes n’ayant pas de séjours dans le PMSI PSY ne sont pas chainables avec les autres PMSI et DCIR (aucune correspondance entre  IPP_IRR_CRY  et NIR_ANO_17).






### RAPPROCHEMENT TABLES FMSTC ET FCSTC	

**Dans la table PMSI "FCSTC", pour un couple {ETA_NUM - SEQ_NUM} donné, il y a 2 lignes pour l'acte ATM, correspondant aux spécialités de l'exécutant 07 et 01.**
**Pour le même couple {ETA_NUM - SEQ_NUM} dans la table FMSTC, il y a également 2 lignes correspondant à 2 codes affinés CCAM (par exemple, JKHD001 et JKQP001).** 
**Comment savoir quel acte a été exécuté par le spécialiste  « 07 » ?** 

Pour un même couple {ETA_NUM,SEQ_NUM}, nous ne pouvons malheureusement pas connaître la correspondance entre les différentes lignes des tables FCSTC et FBSTC (avec un code de regroupement CCAM : ADI, ATM, ADE, ADC …) d’une part et de la table FMSTC d’autre part. 
Cette information manque déjà à la base dans les données produites par les établissements pour l’envoi à l’ATIH. 
Pour résoudre ce problème, il faudrait modifier le format de ces fichiers produits par les établissements (des fichiers nommés RSF-ACE).






### BASE DE REMBOURSEMENT DES SEJOURS DES ETABLISSEMENTS PUBLICS	

**Y a-t-il une table permettant de calculer les montants en base de remboursements des séjours réalisés par les établissements publics ?**
**En effet, les tables T_MCOaaVALO ne présentent que les montants AM.**	

Cette information est présente dans la table "Prise en charge" T_MCOaa_nnSTC, à travers la variable en question est REM_BAS_MNT "Montant base remboursement". 






### COUT TOTAL DES HOSPITALISATIONS DES HOPITAUX PUBLICS	

**Quelle est la table appropriée pour le coût total de l'hospitalisation des hôpitaux publics ?**	

Dans la table VALO, ce sont les montants finaux après retraitement divers et variés qu'il faut faire  pour valoriser le séjour.
le montant STC est le montant brut de départ.
Il faut bien utiliser la table VALO qui retranscrit ce qui a été réellement payé à l’établissement pour les séjours réalisés. 
Les retraitements sont multiples car des coefficients sont appliqués sur les montants (géographique, prudentiel, de reprise, de transition...).
L’autre montant de la table STC est renseigné par les établissements et se fait sur la base des TJP (Tarif journalier de prestations).






## AUTRES (DA_PRA_R, CARTOGRAPHIE...)



### DA_PRA_R - VARIABLE PFS_PRA_SPE	

**Détails sur la variable PFS_PRA_SPE, notamment sur les différentes variables spécialité du prescripteur dans la DA_PRA_R : le codage est-il le même que pour la variable PSP_SPE_COD du DCIR ?**	

La variable PFS_PRA_SPE est la spécialité du PS dans le cabinet dans lequel il exerce (pas forcément le cabinet principal).
La table contient l’historique des situations des PS. 
Pour avoir la dernière situation en date, il faut filtrer sur la variable EXC_EFF_DSD qui est la date à laquelle le PS a commencé à exercer avec la spécialité.
La variable STA_PRA_SPE est le cabinet principal du PS.                             
La variable PFS_SPE_COD est la spécialité du PS prescripteur qu’il soit médecin ou autre, tandis que la variable PSP_SPE_COD dans le DCIR est le code spécialité du PS médecins et la variable PSP_ACT_NAT est la nature d’activité du PS autre que médecin.

Donc la variable PFS_PRA_SPE est un mix des deux, tantôt elle est égale à la PSP_SPE_COD si le PS est médecin, tantôt à la PSP_ACT_NAT si le PS est autre que médecin.






### CARTOGRAPHIE DES PATHOLOGIES

**Afin d'avoir une vision plus fine de la cartographie des pathologies dans la région (au bassin de vie ou à l'EPCI), quels sont les profils d'accès au DCIR qui permettent de croiser la table de la cartographie des pathologies avec la commune de résidence du bénéficiaire ?** 	

Les seuls profils qui permettent d’accéder en même temps aux tables de cartographie des pathologies et à la commune de résidence du bénéficiaire sont les profils qui autorisent le croisement des identifiants potentiels, à savoir pour les ARS le profil portail 84 (vue patients). 

Cet accès est possible également via les profils portail 89 (vue offre de soins) et profil portail 94 (vue prescripteurs). 






### DA_PRA_R - DOCUMENTATION

**Existe-t-il une documentation sur la table DA_PRA_R ?**
**J'ai reçu une requête qui fait appel à la table DA_PRA_R, je l'ai ouvert dans SAS et je vois qu'il s'agit d'une table sur les professionnels de santé, mais je ne trouve aucune documentation à son sujet.** 

Concernant la table DA_PRA_R du référentiel des PS, il n'y a pas à proprement parlé de nomenclature en table pour le moment. 
Pour l'instant, le manuel utilisateur du FNPS disponible sur AMELI RESEAU permet une lecture des valeurs présentes en table. 






### ORAREF - DOCUMENTATION	

**Existe-t-il quelque part une documentation recensant les tables de ORAREF et leur variables, notamment celles commençant par XC ?**	

Les référentiels (bibliothèque ORAREF dans SAS Guide) sont présents dans le dictionnaire des données mais pour le moment, ils ne sont pas aussi détaillés que les tables SAS des datamarts restitués. Les tables en XC se réfèrent à la CCAM (actes médicaux).






### RFCOMMUN - TABLES DE CORRECTIONS DES CODES COMMUNES

**Les tables CORRECTIONS_COM2011_NEW » et « CORRECTIONS_COM2012_NEW » présentes dans la bibliothèque RFCOMMUN ne concernent-elles que les années 2011 et 2012 ?** 
**Et sont elles applicables à IR_BEN_R ?**
**Pour les habitants des DOM en particulier, on retrouve des codes communes qui semblent erronés pour d’autres années aussi bien dans la table ER_PRS_R que dans la table IR_BEN_R (exemple codes communes : 97502, 97503, 97516).**	

Les tables ""CORRECTIONS_COM2011_NEW"" et ""CORRECTIONS_COM2012_NEW"" situées dans RFCOMMUN ne sont plus maintenues, et par conséquent ne concernent que les années 2011 et 2012.

En revanche, les tables de consommants de la librairie CONSOPAT (du type "extraction_patientsaaaaTR") contiennent des codes communes corrigés à travers les variables département et commune de résidence suivantes :
- dpt1 (à partir de 2011) : département de résidence du bénéficiaire correspondant au dernier soin de l’année 
- ben_res_dpt / ben_res_com2 : respectivement codes département et commune de résidence du bénéficiaire correspondant au dernier soin de l’année 
- depcom : code commune obtenu par concaténation de ben_res_dpt et ben_res_com (la plupart des codes erronés a été corrigée) 
- depcom2 : recodage de depcom du format 20XXX en 2AXXX ou 2BXXX pour la Corse et du format 97XXX en 9AXXX, 9BXXX, 9CXXX ou 9DXXX pour les DOM (non renseigné ailleurs).






### CAUSES DE DECES - APPARIEMENT

**A-t-on une idée de la part d’appariement total des causes médicales de décès ?**	

D’après la documentation relative aux tables des causes médicales de décès :
Pour les décès de 2013, 93,9% ont pu être appariés avec IR_BEN_R ; et pour ceux de 2014 : 92,9%.

L’appariement avec les données des causes médicales de décès n’a pas pu être total, car les données du CépiDC ne contiennent pas pour le moment les identifiants des bénéficiaires. 
On ne peut donc pas apparier l’ensemble de ces données avec IR_BEN_R et par suite avec le DCIR/DCIRS ou le PMSI. 
L’ensemble des causes de décès est cependant restitué, y compris celles qui n’ont pu être appariées, afin de pouvoir calculer des statistiques globales sur les causes médicales de décès.
Un top, noté DCD_IDT_TOP, a été créé pour distinguer facilement les décès appariés (top = 1) des décès non appariés (top = 0).






### RESID'EHPAD - ORS

**Pour les ORS, est-il prévu un accès aux données de Resid'EHPAD, ou bien la création d'un TOP EHPAD dans le DCIR, permettant d'identifier pour chaque bénéficiaire un (ou des) séjour(s) en Ehpad et de les dater, à partir des tables de Resid'Ehpad ?**
**Ces informations paraissent indispensables si l'on veut faire des études sur les personnes (très) âgées.**	

Il n'y a pas de top Ehpad dans le DCIR, sauf par jointure avec les tables de Resid'Ehpad aux dates du résident en Ehpad pour les utilisateurs ayant accès à ces tables.
Résid'Ehpad = tables relatives aux données des personnes résidentes en Ehpad  (nbre de lits, mouvements, détail par grands postes de prestations de ce qui est dépensé par l’établissement dans le forfait de soins, distribué par la CNSA chaque année), pas la totalité des dépenses. 
C'est un bordereau déclaratif, et donc pas exhaustif).
Il faut apparier aux données du DCIR pour avoir le total des dépenses de soins de ville.
Actuellement, voici les organismes qui ont accès aux tables EHPAD et les profils bordereaux correspondant : CNAM (10b, 12b, 35b et 40b), DRSM et DCGDR (13b, 14b, 15b, 16b, 21b, 22b), autres caisses nationales des régimes (18b, 19b) et ARS (23b, 24b, 25b, 26b, 27b, 28b, 30b)

Les données de Resid'EHPAD ne sont pas à l'heure actuelle accessible aux ORS, un top EHPAD n'est pas non plus prévu à l'heure actuelle.






### IJ - QUANTITE OU DENOMBREMENT DES IJ	

**Quel indicateur de dénombrement choisir pour compter des jours payés IJ ?**
**Le dénombrement d’IJ semble plus élevé que sur ERASME régional (à périmètre identique) ; faut-il utiliser la variable IJR_RVL_NAT de DCIR (condition IJR_RVL_NAT = ZZ, XX, ‘   ‘) pour enlever les IJ régularisées ?**

Pour les IJ : il vaut mieux prendre le dénombrement que la quantité, car sinon on compte plusieurs fois une même journée s’il y a plusieurs employeurs (cas des personnes avec plusieurs employeurs à la fois) ou s’il y a une revalorisation ultérieure.
La quantité d’IJ donne le nombre de journées de la période d’indemnités journalières. 
Si pour une même personne il y a plusieurs versements pour une même période d’indemnités journalières (par exemple si la personne a plusieurs employeurs), la quantité d'IJ est renseigné pour chacune des périodes.
Le dénombrement d’IJ donne le nombre de journées effectivement payées. 
Si pour une même personne, il y a plusieurs versements pour une même période d’indemnités journalières (par exemple si la personne a plusieurs employeurs), le dénombrement d'IJ est renseigné pour une seule des périodes, afin de ne pas compter plusieurs fois une même journée. 
De même, en cas de revalorisation ultérieure, il est égal à 0.
Mais attention le dénombrement n'est pas alimenté pour les régimes passant par la norme NTEIR (MSA, RSI)

Concernant la variable IJR_RVL_NAT relative aux revalorisations d'IJ, il y a en effet eu une période où il a fallu utiliser la quantité d'IJ associée à la condition IJR_RVL_NAT i, ('ZZ', 'XX', '  ') car il y avait un problème sur le dénombrement. Mais ce n'est plus le cas.






### RESID'EHPAD - VALEUR DE FLX_DIS_DTD

**Le FLX_DIS_DTD dans les tables RESID'EHPAD indique '01NOV2015:00:00:00'.** 
**Cela veut-il dire que depuis novembre 2015, les données Resid'Ehpad ne sont pas mises à jour ?**	

FLX_DIS_DTD = '01NOV2015:00:00:00' signifie que les présences et les mouvements des personnes résidentes en EHPAD ne sont restitués qu’à partir du 01NOV2015, tout mouvement et présence avant cette date est perdu (règle des 33 mois glissants). 






### CAUSES DE DECES - VARIABLE BEN_SEX_COD

**A quoi / qui correspondent les BEN_SEX_COD  = 3 en 2014 ?**	

A la suite du rechargement des données des causes médicales de décès de 2013 à 2015 en juin 2018, après retraitement des données par le CépiDC, les cas pour lesquels BEN_SEX_COD = 3 en 2014 n'apparaissent plus. 






### LETTRES CLES POUR VALORISER LES ACE

**Faut-il utiliser la table MS_ACT_V pour retrouver les lettres clés appartenant à la valorisation RAFAEL ?**	

La table ORAVAL.IR_NAT_V (variable PRS_NAT_CB2) contient les informations nécessaires aux lettres clés.




## REFERENCES

La [FAQ DCIR 09 2019](../../../files/Cnam/2019-07-CNAM-FAQ_DCIR_MLP-2.0.xlsx) [CNAM - MPL-2.0] reprend les questions fréquemment posées sur le DCIR.



