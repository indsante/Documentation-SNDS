# Les variables sociodémographiques dans le SNDS
<!-- SPDX-License-Identifier: MPL-2.0 -->
Le SNDS est très riche en informations sur le recours aux soins mais possède peu de variables sociodémographiques sur les bénéficiaires.

Cette fiche présente les différentes variables disponibles, leur qualité et où les trouver.

## Différentes approches de la situation socio-démographique
On peut distinguer trois types de variables dans le SNDS qui permettent de caractériser la situation des bénéficiaires.
* Les variables **individuelles** : sexe, âge, date de naissance, date de décès
* Les variables **liées aux droits** dont bénéficient les individus : [CMU-C](../glossaire/CMUC.md), [ACS](../glossaire/ACS.md), [AME](../glossaire/AME.md)
* Les variables dites **écologiques**, qui caractérisent les territoires auxquels sont associés les bénéficiaires : l'indice de déprivation FDEP.  
On considère dans ce dernier cas que les individus qui habitent sur un territoire défavorisé, sont également défavorisés.

Ces variables peuvent être présentes dans le SNIIRAM, dans le PMSI, ou dans les deux. Dans le premier cas, il s'agit de remontées administratives, tandis que dans le second, il s'agit d'informations déclaratives collectées au cours du séjour du patient, et qui ne sont donc pas vérifiées.

## Les variables individuelles 
### Le sexe
Dans le SNIIRAM, la variable **BEN_SEX_COD** renseigne sur le sexe du bénéficiaire.
La variable BEN_SEX_COD (variable numérique) est présente dans la table de prestations de soins [ER_PRS_F](../tables/DCIR/ER_PRS_F.md) à chaque soin, ainsi que dans le référentiel des bénéficiaires, [IR_BEN_R](../tables/BENEFICIAIRE/IR_BEN_R.md), pour les consommants et les non-consommants. Elle est aussi disponible dans les tables de consommants du répertoire CONSOPAT, et est issue du référentiel IR_BEN_R. 
Cette variable ne contient quasiment pas de valeur manquante.

Dans le PMSI, la variable **COD_SEX** renseigne sur le sexe du bénéficiaire. Elle se trouve dans la table T_MCOaaB.

### La date de naissance
La date de naissance est disponible dans le SNDS mais limitée au mois (**BEN_NAI_MOI**) et à l'année de naissance (**BEN_NAI_ANN**). Le jour de naissance n’est pas disponible. 
Ces deux variables sont restituées dans le référentiel des bénéficiaires, IR_BEN_R, pour les consommants et les non-consommants. Elles sont aussi disponibles dans les tables de consommants du répertoire CONSOPAT, et sont issues du référentiel IR_BEN_R. 
L'année de naissance **BEN_NAI_ANN** est également restituée dans la table de prestations de soins ER_PRS_F à chaque soin.  
La valeur manquante de l’année de naissance et du mois de naissance est forcée à janvier 1600.
En 2016, cette variable ne contient quasiment pas de valeur manquante, la qualité ayant nettement progressé pour les bénéficiaires du [RSI](../glossaire/RSI.md)

### L'âge au moment du soin
L’âge à la date des soins peut être calculé à partir de l'année de naissance, en âge atteint dans l’année : année des soins - année de naissance.  

Il existe également dans les tables de prestations ER_PRS_F et [NS_PRS_F](../tables/DCIRS/NS_PRS_F.md), la variable **BEN_AMA_COD**, qui donne l'**âge à la date des soins en années** pour les bénéficiaires de plus de 2 ans.  
Cette variable est calculée comme l’écart entre l’année et le mois de la date des soins (ou à défaut de la date de liquidation) et l’année et le mois de naissance du bénéficiaire. 

Pour les nourrissons de moins de 2 ans, BEN_AMA_COD donne l'âge en mois + 1000 (exemple : 1023 = 23 mois). 

Lorsque l’âge calculé est supérieur à 129 ou inférieur à 0, BEN_AMA_COD prend la valeur ‘9999’.  

::: warning Attention 
Un problème d’arrondi impacte les BEN_AMA_COD calculés avant Novembre 2014 (date de traitement). Une correction a été apportée dans la règle de calcul depuis sans reprise de l’historique (cf. communiqué du 18/12/2014). 
:::  

Dans le PMSI, la variable **AGE_ANN** renseigne l’âge du patient au début de l’hospitalisation en années révolues.

### La date de décès
Dans le SNDS, la date de décès est disponible :
* en **mois/année** dans la variable **BEN_DCD_AME** : format caractère de type AAAAMM (codée « 160001 » pour les vivants ou en cas de valeur manquante)
* en **jour/mois/année** dans BEN_DCD_DTE: format datetime.  

Ces deux variables sont restituées dans le référentiel des bénéficiaires IR_BEN_R, et dans la table de prestations ER_PRS_F lorsque la prestation a fait l'objet d'un remboursement après le décès.  
 
La date de décès provient principalement des flux de prestations, lors du versement du capital décès (pour les salariés) ou du versement de prestations accompagnant la fin de vie, ou lors d’un décès à l’hôpital. Mais même dans ce cas, il n’est pas obligatoire de renseigner la date de décès.  
Le processus d’alimentation de la date de décès est propre à chaque régime. (cf. forum du 05/12/2013 « Date de décès et mise à disposition dans DCIR »).
* RG : dans IR_BEN_R, pour le RG hors SLM, si la date de décès n’est pas mise à jour par les flux de prestations, elle est enrichie par les bases locales (BDO) des CPAM (il existe un circuit entre l’Insee et les CPAM pour l’enregistrement des décès et leur certification). C’est le cas depuis juillet 2009, ce qui assure l’exhaustivité de l’information du statut vital depuis juillet 2009 pour le RG hors SLM dans IR_BEN_R (cf. forum du 09/09/2011 « Informations sur les décès dans le DCIR »).
* MSA : remonte par les flux de prestations depuis l’intégration de la MSA dans le DCIR, c’est-à-dire depuis janvier 2009.
* RSI : date de décès très mal renseignée.
* SLM : très mal renseigné. Cela dépend des sections mutualistes. Pour les 8 SLM (LMG, MGP, MFPS, MNH, HFP, CAMIEG, Interiale, LMDE) dont les non consommants sont inclus depuis septembre 2015 dans IR_BEN_R, la date de décès est renseignée.
* ENIM, CANMSS, CRCPEN et CAVIMAC : date de décès renseignée à partir des BDO dans IR_BEN_R.

Pour le PMSI, l’information est présente si le patient est décédé au cours de son hospitalisation (mode de sortie égal à 9). Dans ce cas, on peut récuperer la date de sortie du séjour **SOR-DAT**.

Depuis juin 2018, les causes de décès sont intégrées dans le SNDS, les variables BEN_DCD_DTE et BEN_DCD_AME apparaissent donc également dans les tables [KI_CCI_R](../tables/Causes de décès/KI_CCI_R.md) et [KI_ECD_R](../tables/Causes de décès/KI_ECD_R.md). 
::: warning Attention 
Il est possible d’avoir une date de décès renseignée dans les tables relatives aux causes de décès, mais  mise par défaut au 01 janvier 1600 dans IR_BEN_R, bien que le certificat ait pu être apparié à un bénéficiaire. 
:::

Une fiche est en cours de rédaction sur la fiabilité de la date de décès dans le SNDS.

## Les variables concernant les droits
### La CMU-C
La couverture maladie universelle complémentaire (CMU-C) permet aux assurés dont les ressources ne dépassent pas le plafond fixé par la loi de bénéficier d’une protection maladie complémentaire gratuite ([pour en savoir plus](https://www.ameli.fr/assure/droits-demarches/difficultes-acces-droits-soins/complementaire-sante/cmu-complementaire)). La CMUC ne s’applique pas dans le département de Mayotte.  
L’étude de la CMU-C nécessite de travailler sur les personnes $agées de moins de 60 ans, afin ’exclure les personnes pouvant bénéficier de l’allocation de solidarité aux personnes âgées (Aspa) (par exemple, le minimum vieillesse).  

<!--
Dans le **SNIIRAM**, la variable **BEN_CMU_TOP** est restituée dans la table prestations ER_PRS_F, pour chaque soins. Un top égal à 1 indique un bénéficiaire de la CMU-C, mais qui n’est pas forcément en régime de CMU de base. Lorsque le patient est en affection de longue durée (ALD), le top CMU-C est forcé à 0 pour les prestations liquidées en rapport avec son ALD (celle-ci est prioritaire), et prend la valeur 1 pour les prestations liquidées non en rapport avec l'ALD.

La variable **BEN_CMU_TOP** est également disponible dans les tables de consommants du répertoire CONSOPAT. Elle est issue de la table des prestations.
Elle prend la valeur 1 si au moins une prestation a été faite au titre de la CMU-C au cours de l’année, 0 sinon.

L’information sur la CMU de base est présente dans le **PMSI** depuis 2012 pour les séjours en établissements privé et l’activité externe (variable **PAT_CMU** de la table T_MCOaaFA pour l’hospitalisation dans le privé, PAT_CMU dans T_MCOaaFASTC pour l’activité externe) et depuis 2011 pour les établissements publics (variable **BEN_CMU** dan la table T_MCOaaSTC) .
-->

Une [fiche](../fiches/cmu_c.md) est consacrée au repérage des bénéficiaires de la CMU-C. 

### L'ACS
L’aide à l’acquisition d’une complémentaire santé (ACS) est un dispositif destiné aux personnes à faibles revenus pour leur faciliter l’accès à une assurance maladie complémentaire.  
Cette aide est accordée pour un an renouvelable aux personnes résidant en France de façon stable depuis plus de trois mois, en situation régulière et percevant des ressources comprises entre le plafond d'attribution de la CMU-C et 35 % au-delà, selon la composition du foyer ([pour en savoir plus](https://www.ameli.fr/assure/droits-demarches/difficultes-acces-droits-soins/complementaire-sante/aide-paiement-complementaire-sante)).  

<!--
Depuis le 1er juillet 2015, il est possible d’identifier les bénéficiaires éligibles à l’ACS et ayant souscrit certains types de contrats d’assurance maladie complémentaire, à l’aide de la variable **BEN_ACS_TOP** dans la table des prestations ER_PRS_F.  

L’information sur l’ACS est absente du PMSI.
-->

Une [fiche](../fiches/acs.md) est consacrée au repérage des bénéficiaires de l'ACS dans le SNDS.  

### L'AME
L'Aide Médicale de l'État (AME) est destinée à permettre l'accès aux soins des personnes en situation irrégulière en France.  
Elle est attribuée aux **personnes étrangères (et leurs ayants droits) en situation irrégulière** (c’est-à-dire sans titre de séjour ou récépissé de demande ou de document attestant qu’une demande est en cours). Ces personnes doivent résider en France métropolitaine ou dans les départements d'outre-mer, hors Mayotte, de façon stable, depuis plus de trois mois, et leurs ressources ne doivent pas dépasser un certain plafond ([pour en savoir plus](https://www.ameli.fr/assure/droits-demarches/situations-particulieres/situation-irreguliere-ame))

<!--
Les bénéficiaires de l’AME ne sont pas affiliés au RG, ils sont hébergés par ce régime.

Dans le **SNIIRAM**, on identifie les bénéficiaires de l'AME grâce à la variable **RGM_COD** disponible dans la table des prestations ER_PRS_F. 
Il faut retenir les modalités :
- 95 : aide médicale gratuite 100 % état
- 96 : aide médicale hospitalière gratuite 100 % état

Dans les tables consommants du répertoire CONSOPAT, la variable **BEN_AME_TOP** est construite à partir de la table des prestations. Elle prend la valeur 1 si au moins un soin a été réalisé en tant que bénéficiaire de l’AME au cours de l’année (tous régimes d’assurance confondus), 0 sinon.  

Dans le **PMSI**, l’information sur l’AME est présente depuis 2012 dans la table de valorisation des établissements publics (valeur 3 de la variable VALO de la table T_MCOaaVALO).
-->

Une [fiche](../fiches/aide_medicale_etat.md) est consacrée au repérage des bénéficiaires de l'AME. 

## Les variables écologiques
### Le lieu de résidence
Le SNDS couvre les bénéficiaires qui résident en France, DOM inclus ou à l’étranger.
Il existe différentes variables dans le SNDS qui renseignent sur le département ou la commune de résidence du bénéficiaire. Elles ne sont pas toutes construites de la même façon.

Pour plus d'informations, une [fiche](../fiches/localisation_geographique_beneficiaires.md) est consacrée à la localisation des bénéficiaires dans le SNDS.

### L'indice de désavantage social : le FDep

Un indice territorial de désavantage social (ou **FDep** pour *French Deprivation Index*) permet de caractériser l'environnement socioéconomique des bénéficiaires à partir de la commune de résidence.

#### Méthode de construction
L'indice de désavantage social est calculé au niveau communal à partir de données socioéconomiques issues du recensement de la population et des données sur les revenus fiscaux des ménages respectivement en 2009 et 2013 :
* part des ouvrier·e·s dans la population active de 15 à 64 ans
* part des chômeur·se·s dans la population active de 15 à 64 ans
* part des diplômé·e·s de niveau baccalauréat (minimum) dans la population de 15 ans ou plus non scolarisée
* revenu fiscal médian des ménages


Le FDep est calculé comme la première composante principale d’une analyse factorielle de ces quatre variables. La méthode qui permet de construire cet indice est décrite dans l'article suivant :
> [Rey, Grégoire et al. *“Ecological association between a deprivation index and mortality in France over the period 1997 - 2001: variations with spatial scale, degree of urbanicity, age, gender and cause of death.”* BMC public health vol. 9 33. 22 Jan. 2009, doi:10.1186/1471-2458-9-33](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2637240/).
  
Contrairement à la méthode décrite dans l’article ci-dessus, les variables socioéconomiques manquantes au niveau de la commune sont remplacées par les données du canton auquel appartient la commune. Par ailleurs, le FDep09 (version de 2009) a été calculé au niveau des Iris, mais son utilisation à cette échelle n’a pas fait l’objet d’une publication, car les données de mortalité ne sont pas diffusables à cette échelle. 
 

Une fois construit, l'indice de désavantage social FDep est associé de la façon suivante au code commune de résidence des bénéficiaires :
* calcul du code commune de résidence corrigé pour chaque bénéficiaire, ou de son département si la commune est inconnue (*cf*. [lieu de résidence du bénéficiaire](../fiches/localisation_geographique_beneficiaires.md))
* affectation de l’indice de désavantage social de la commune aux patient·e·s avec commune de résidence connue ou affectation de l’indice de désavantage social du département aux patient·e·s sans commune de résidence connue

::: warning Restrictions
L'indice de désavantage social n'est pas disponible pour certains bénéficiaires : les résidents des DOM et des COM, les bénéficiaires sans commune ni département de résidence connus, les bénéficiaires affiliés à des SLM (mauvaise qualité de la commune de résidence).
:::
  
#### Où trouver la variable ?

L'indice de déprivation social est disponible sous les variables **FDEP09** et **FDEP13** présentes dans les tables `DEFA_UU2009` et `DEFA_UU2013` de la bibliothèque `CONSOPAT`. Ces tables sont accessibles via tout profil permettant d’accéder au DCIR et permettant d’accéder au code commune de résidence du bénéficiaire.

La variable **QUINTILE_COM** donne la répartition en quintile des communes. Après pondération par le nombre d’habitant·e·s de la commune, l’indice permet de définir des quintiles de population générale en fonction du niveau de désavantage social de la commune (QUINTILE_POP), du quintile de population le plus favorisé (Q1) au quintile le plus défavorisé (Q5). Cet indice est également disponible pour chaque bénéficiaire dans certaines des tables de consommants au travers de la variable **QUINT_DEFA**.


L’indice est calculé uniquement pour les communes de France métropolitaine (environ 36 600 communes). En raison d’une mauvaise qualité de l’information portant sur la commune, **l’indice de désavantage social n’est exploitable que pour les données du RG (hors SLM), RSI et MSA**. Le programme de la Cnam fait appel à un fichier de correction du code de la commune différent suivant l’année (Les tables `CORRECTIONS_COM2011_NEW` ou `CORRECTIONS_COM2012_NEW` de la bibliothèque `RFCOMMUN`) avant l’affectation de l’indice à la commune.

## Repérer les publics précaires 

L'analyse de la précarité peut se faire par le repérage des publics ayant accès à certains droits, comme présenté ci-dessus: 
* les CMU-cistes, 
* les bénéficaires de l'ACS, 
* de l'AME. 

Il est également possible de repérer les [détenus](detenus.md) dans le SNDS.

::: tip Crédits  
Cette fiche a été rédigée par Claire-Lise Dubost (DREES), et s'appuie notamment sur des informations issus du document [*SNDS, ce qu'il faut savoir*](../formation_snds/Sante_publique_France.md) constitué par Santé Publique France, ainsi que de la note technique *L'indice de désavantage social "FDEP" et son application à DCIR* rédigé en 2014 par la CNAM.
:::
