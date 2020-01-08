# FAQ EGB

*version 09/2019*



## AT-MP


**Quelle indemnisation pour les victimes dont le taux d'incapacité permanente RAT_IPP_TAU est inférieur à 10 % ?**	

Le versement de rentes de victime en réparation d’incapacités permanentes inférieures à 10 % peut correspondre aux cas suivants : 
- il s’agit de rentes (PRS_NAT_REF = 8111) attribuées avant l’instauration des indemnités en capital (PRS_NAT_REF = 8226) : ces dernières sont en effet versées depuis 1987 en réparation d’incapacités permanentes inférieures à 10 % ; 
- il peut s’agir aussi de rentes optionnelles attribuées quand plusieurs conditions sont réunies : la victime a plusieurs taux d’IP inférieurs à 10 % et le cumul de ces taux est supérieur à 10 %. 

Dans ce cas, le taux d’IP rat_ipp_tau renseigné est le dernier taux attribué au bénéficiaire ouvrant droit à rente. 

Vérifier donc avec date d'effet du taux d'incapacité permanente (IPP) RAT_IPP_DTE (Date ).


**Comment rechercher les maladies professionnelles exonérantes et leurs libellés ?**	

Pour le motif d'exonération du ticket modérateur imb_etm_nat = 12 (Référentiel médicalisé des bénéficiaires) :
1/ On recherche le nom des maladies en priorité dans la table de valeurs des maladies professionnelles SPDVAL.AT_MLP_V. 
La jointure entre EB_IMB_R et AT_MLP_V doit porter sur les quatre champs suivants:
- EB_IMB_R.MED_MTF_COD = AT_MLP_V.SIN_SYN_PAT (code CIM10 de la maladie), 
- EB_IMB_R.IMB_MLP_TAB = AT_MLP_V.SIN_MLP_TAB (N° de tableau des maladies professionnelles), 
- EB_IMB_R.IMB_MLP_BTR = AT_MLP_V.SIN_MLP_BTR (tableaux bis et ter des maladies professionnelles), 
- EB_IMB_R.IMB_SDR_LOP = AT_MLP_V.SIN_SYN_LOP (Localisation / paragraphe syndrome). 

Il sera peut-être nécessaire d’utiliser la fonction TRIM de SAS si les formats des variables ne coïncident pas entre les deux tables. 

2/ Si on n'a pas retrouvé toutes les maladies recherchées en 1/, on peut compléter la recherche en faisant une jointure sur les enregistrements restants, EB_IMB_R et la table de valeurs des codes CIM10 SPDVAL.IR_CIM_V, de la forme : MED_MTF_COD = CIM_COD"






## MEDICAMENTS / PHARMACIE

**Comment calculer le coût d'un médicament pour l'assurance maladie ?**	

Le coût d'un médicament pour l'Assurance Maladie = PHA_ACT_PRU (prix unitaire du médicament) * RGO_REM_TAU (taux de remboursement de la prestation).
Le prix unitaire d'un médicament est également disponible dans la base des médicament BDM_IT :
http://www.codage.ext.cnamts.fr/codif/bdm_it/index_presentation.php?p_site=AMELI"


**Pourquoi pour des médicaments soumis à prescription initiale hospitalière nous ne disposons que du code de prescripteur (PFS_PRE_CRY) ou bien du code de l’établissement prescripteur (ETB_PRE_FIN), mais pas les deux codes en même temps ?**	
Quand la prescription est réalisée à l'hôpital, c'est le numéro FINESS de ce dernier qui est véhiculé, sinon c'est celui du médecin prescripteur. 
Pour information, le renouvellement de la prescription des médicaments à "prescription initiale hospitalière" peut être effectué par un PS libéral.


**Quelle variable utiliser pour identifier la classe ATC d'un médicament, entre PHA_ATC_CLA et PHA_ATC_C07 ?**	

La variable PHA_ATC_CLA est obsolète depuis le 24 janvier 2012. 
Il faut utiliser la variable PHA_ATC_C07.


**Comment dénombrer les pharmacies ?**	

Le dénombrement des pharmacies se fait grâce à l'identifiant, crypté ou pas, de la pharmacie, PFS_EXE_NUMC ou PFS_EXE_NUM.






## PS	

**Est-il possible de récupérer le numéro de département du PS (prescripteur ou exécutant) à l'origine d'une prestation ?**	

Le département d'exercice du PS n'est pas intégré aux données de l'EGB, mais il peut être calculé à partir du numéro du PS (2 premiers caractères). 
Seuls donc les utilisateurs EGB ayant accés au numero du PS en clair (PFS_PRE_NUM ou PFS_EXE_NUM) peuvent retrouver son département.


**Comment identifier la spécialité et la nature d'activité d'un PS ?**	

Dans l'EGB :
PS(P/E)_ACT_NAT Nature d'activité du PS Exécutant/Prescripteur, dont la table de valeurs est IR_ACT_V 
PS(P/E)_SPE_COD Spécialité médicale du PS Exécutant/Prescripteur, dont la table de valeurs est IR_SPE_V

Dans l'EGB simplifié :
Les codes de la spécialité et de la nature d’activité des professionnels de santé des données sources sont regroupés dans une seule variable dans l’EGBS, que ce soit pour les Prescripteurs ou les Exécutants, nommée PS(P/E)_ACT_SPE. La table de valeurs est IR_SPA_D.






## ACTES ET CIM-10 (GENERAL / GROSSESSE...)

**Que signifie et comment utiliser la variable PRS_ACT_QTE ?**	

La variable PRS_ACT_QTE corréspond à quantité signée de l'acte, ie le nombre d'actes. 
Pour quantifier le nombre d'actes correspondant réellement aux actes d'orthophonie, infirmiers, de kinésithérapie..., il faut sélectionner la variable PRS_ACT_QTE correspondant à l'acte de base recherché BSE_PRS_NAT (3132 pour les actes d'orthophonie, par exemple) et non pas les quantités d'actes liées aux éventuelles majorations ou indemnités de déplacement des professionnels de santé.

**Comment sont gérés les actes en série dans l'EGB ?**	

Cela dépend de ce que le PS écrit sur la feuille de soins. 
Dans l'EGB, on peut avoir un ensemble d'actes saisi sur un seul enregistrement, avec une date de début de soins exe_soi_dtd et une date de fin des soins exe_soi_dtf renseignées et différente de exe_soi_dtd. 
Dans ce cas, généralement, la quantité d'actes prs_act_qte est supérieure à 1. 
On peut également avoir une ligne par séance de soins avec une date de fin des soins exe_soi_dtf égale à la date de début de soins exe_soi_dtd, ou une date de fin des soins non renseignée. 
Là aussi, la quantité d'actes prs_act_qte renseignera sur le nombre d'actes pratiqués ce jour-là.


**Comment utiliser la date présumée de grossesse PRS_GRS_DTD ?** 
**Permet-elle de repérer les femmes enceintes ?**	

Il n'y a pas de critère dans DCIR ou dans l'EGB/ qui permette d'identifier de manière infaillible les femmes enceintes ou les dates d'accouchement. 
En théorie, à réception d'une déclaration de grossesse, on enregistre la date présumée de grossesse dans PRS_GRS_DTD. 
Le système calcule et enregistre une exonération du ticket modérateur au titre du risque maternité, qui va du 1er jour du 6ème mois jusqu'à 12 jours après la date présumée d'accouchement. 
Lors de l'enregistrement de la date réelle d'accouchement, cette période d'exonération est recalculée en fonction de la date réelle de l'accouchement. 
Ainsi, pour une période de soins donnée, on peut trouver plusieurs valeurs différentes de la date PRS_GRS_DTD pour une même bénéficiaire. 
Pratiquement, il est conseillé de rechercher les femmes enceintes en croisant plusieurs informations, par exemple en ciblant un contexte spécifique de remboursement (exemple : prise en charge des prestations sur le risque maternité à partir du 6ème mois de grossesse) ou des soins dits "traçants".


**Comment interpreter les dates d'insertion pour une pathologie CIM-10 ?**
**Exemple : Un individu qui a un code cim10 ="I70" depuis le 14/01/2014 pour IMB_ETM_NAT=41 avec une date d'insertion 01/05/2014.** 
**La ligne du dessous, il s'agit du même individu avec un code cim10 ="I70" depuis le 14/01/2016 mais IMB_ETM_NAT=13 avec une date d'insertion 01/05/2016.**

Une nouvelle date d'insertion pour une pathologie correspond à une nouvelle déclaration (même si c'est pour la même pathologie).
Dans le cas de l'exemple, le 14/01/2014 est la première date de début de l'ALD.






## AFFILIATION / LIQUIDATION

**Comment interpréter le code du régime d'affiliation ou de liquidation d'un bénéficiaire ?**	

L’organisme de liquidation et l’organisme d’affiliation (org_cle_new et org_aff_ben dans l'EGB) sont éclatés en trois, le code du grand régime, le code de la caisse et le code de la SLM. 
Ainsi, dans l’EGBS, vous disposez : 
- du code du grand régime d'affiliation ou de liquidation qui correspond aux trois premières positions de l’organisme org_cle_new
- de la caisse d'affiliation ou de liquidation sur trois positions (positions 4 à 6 de l’organisme org_cle_new)
- du code de la SLM de liquidation sur trois positions (positions 7 à 9 de la variable org_cle_new), qui n’est renseignée que si le code du grand régime de liquidation grg_liq_cod est égal à 01M (SLM)
- du code de la SLM d’affiliation (7ème à 9ème composantes de la variable org_aff_ben), qui n’est alimenté que si le grand régime d’affiliation grg_aff_cod vaut 01M, 91C à 96C ou 99C (SLM)"

**Quelle est la variable grand régime de liquidation du bénéficiaire ?**	

Dans l'EGB : 
Variable RGM_GRG_COD dont la table de valeur est IR_GRG_V.

Dans L'EGB simplifié : 
Variable GRG_LIQ_COD dont les valeurs sont 01C (RG), 01M(SLM), 02A(RA), 03A(IND), 10A(clers de notaires) et 90A(cultes).


**Comment utiliser le code du petit régime d'affiliation ?**	

Le code du petit régime d'affiliation RGM_COD est propre à chaque grand régime. 
Pour le régime général par exemple, il permet de distinguer un salarié d'un retraité ou d'un bénéficiaire de la CMU de base ... 
Pour la MSA, il permet de distinguer un salarié d'un exploitant agricole. 
Il faut donc toujours combiner le grand régime avec le code du petit régime pour savoir exactement ce que ce code du petit régime signifie. 






## BENEFICIAIRES (VARIABLES, PRESTATIONS, DECES...)

**Comment utiliser la variable BEN_AMA_COD ?**	

La variable BEN_AMA_COD donne l'âge du patient à la date de la prestation. 
Il est préconisé de contrôler la fiabilité de BEN_AMA_COD avec la variable BEN_NAI_ANM (année et mois de naissance) dans le référentiel des bénéficiaires EB_INB_F.


**Disposons-nous de toutes les prestations consommées par les patients qui ont changé d'organisme au cours d'une année (notamment pour les sujets qui sont passés du RG au RSI pendant cette période) ?**	

A partir de juin 2007, les prestations des bénéficiaires nomades (sortis de l'EGB) sont toujours chargées à condition qu'elles relèvent de l'un des organismes participant à l'EGB. En 2008, l’EGB ne couvrait que le régime général hors SLM, seules sont donc chargée les prestations relevant du RG sur cette période (cf. la documentation générale de l'EGB (version 3-2) du 29 avril 2016 disponible sous Mediam). 


**D'où proviennent les dates de décès (variables BEN_DCD_DTD et BEN_DCD_AME) ?**	

Les dates de décès qui sont dans le référentiel des bénéficiaires de l'EGB eb_inb_f proviennent du RNIAM, lorsqu'elles sont certifiées par l'INSEE, et des caisses d'assurance maladie. 


**A quel type de prise en charge correspond la prestation de base BSE_PRS_NAT=1122 dont le libellé est examen spécial (protocole) ?**	

Cette prestation désigne le protocole d'examen spécial établi conjointement par le médecin traitant et le médecin conseil en cas d’affection de longue durée et en cas de de soins continus ou d'interruption de travail supérieurs à six mois. 
Il est matérialisé par un protocole écrit qui détermine : 
les soins et les traitements nécessaires à la prise en charge de la maladie du patient. 
les soins qui sont pris en charge à 100 %, ceux qui sont remboursés aux taux habituels de la Sécurité sociale et ceux qui ne sont pas du tout pris en charge.


**Quels codes prestations utiliser pour cibler le recours au médecin géneraliste ?**	

Utiliser les codes PRS_NAT : 1111 (C), 1112 (CS), 1211 (V), 1212 (VS) et les nouvelles prestations G, GS, VG, VGS.

4 nouvelles prestations de médecin généraliste ont été crées le 1er mai 2017 suite à l'application de la majoration MMG (majoration pour les médecins généralistes), d’un montant de 2 €, est appliquée (sous conditions) :
- 1110, G (C+MMG) : consultation au cabinet majorée de la majoration pour le médecin généraliste
- 1109, GS (CS+MMG) : consultation au cabinet par le médecin spécialiste qualifié en médecine générale avec la majoration pour le médecin généraliste
- 1210, VG (V+MMG) : visite à domicile par le médecin généraliste majorée de la majoration pour le médecin généraliste
- 1209, VGS (VS+MMG) : visite à domicile par le médecin spécialiste qualifié en médecine générale majorée de la majoration pour le médecin généraliste"






## EHPAD / LPP

**Peut-on retrouver les informations des bénéficiaires hébergés en EHPAD ?**	

Il existe un top BEN_EHP_TOP dans la table des prestations EB_PRS_F, concernant les personnes hospitalisées dans des EHPAD. 
Cette donnée a été ajoutée par anticipation dans le modèle en octobre 2009, mais elle n'est pas alimentée (top=0, et valeur non renseignée sur l'historique).


**Dans quelle mesure le SNIIRAM ne dispose-t-il que des "Informations partielles sur la consommation des personnes âgées en EHPAD et pas d’informations sur l’hospitalisation en long séjour" (cf. formation architecture)**

Dans le DCIR ainsi que dans l'EGB nous ne disposons pas des délivrances de médicaments en EHPAD disposant d'une pharmacie à usage intérieur (PUI), ni des soins paramédicaux réalisés dans les EHPAD dont la tarification se fait au forfait global. 
Les EHPAD au forfait partiel et sans PUI, donc celles pour lesquelles on dispose du maximum d'informations, représentent environ 3/4 de l'ensemble des EHPAD, représentant 2/3 des résidents en EHPAD.


**Pouvez vous me préciser quelle est la différence entre les variables TIP_ACT_PRU (Prix unitaire LPP) et TIP_PUB_PRX (Prix public) dans la table EB_TIP_F ?**	

Le prix unitaire TIP_ACT_PRU correspond à la base de remboursement de la prestation affinée LPP dont le code est tip_prs_ide. 
C'est le montant à partir duquel les régimes obligatoires de sécurité sociale calculent le montant remboursé. 
Le champ TIP_PUB_PRX est le prix limite de vente de cette prestation affinée par les fournisseurs (pharmaciens par exemple). 
Ce prix limite de vente n'est pas toujours renseigné. 
Aussi, il est conseillé d'utiliser le code TIP_ACT_PRU mais de ne pas utiliser la variable TIP_PUB_PRX.






## REFERENTIELS 

**A quoi correspond la modalité "0" de la variable imb_etm_nat dans le référentiel médicalisé ?**	

Cette valeur "0" correspondait aux ALD du RSI mais depuis janvier 2017, les codes de prise en charge des ALD du RSI sont les mêmes que ceux des autres régimes (41 pour ALD liste, 43 pour ALD hors liste, 45 pour polypathologies). 


**Comment dénombrer les individus vivants en situation de pouvoir "consommer" en 2016 à partir du référentiel eb_inb_f ?**	

Consulter la macrocommande SAS détaillant le mode de calcul de la population protégée par le RG hors SLM, les SLM, la MSA ou le RSI au cours d'une année donnée. 
Elle a été mise en ligne le 05/05/2017 sur médiam ou xmédiam sous "Projets informationnels > Documentation EGB".






## PMSI	

**Les données PMSI des bénéficiaires continuent-elles d’être chargées s’ils sortent de l’EGB ?**	

Les bénéficiaires du référentiel de l'EGB eb_inb_f peuvent être topés comme sortis (ben_mvt_top = 2) mais ils ne sortent pas encore physiquement du référentiel. 
L'historique de l'EGB est de 20 ans : les premiers bénéficiaires ont été intégrés en mars 2005, le chargement suivant du référentiel n'est intervenu qu'en mars 2006 (Cf. documentation générale §IV-1-c). 
Les premiers bénéficiaires sortis ne seront éliminés physiquement du référentiel qu'en mars 2026, soit 20 ans après leur sortie. 
Pour le PMSI d'une année donnée dans l'EGB, on sélectionne les bénéficiaires recensés dans le référentiel de juin de l'année suivante, i.e. tous les bénéficiaires, quel que soit leur statut (entrant, sorti, présent dans le même organisme ou ayant changé d'organisme), pour lesquels la date d'insertion dans l'EGB ins_dte est antérieure ou égale à juin de l'année suivante.


**Comment la variable ben_nir_idt est-elle créée dans le PMSI de l'EGB, alors que classiquement le rang gémellaire n'est pas disponible dans le PMSI ?**	

Le rang gémellaire étant absent du PMSI, l'appariement de celui-ci avec le référentiel des bénéficiaires est réalisé uniquement sur le BEN_NIR_PSA.
Les informations des jumeaux, triplés … de même sexe, sont donc dupliquées dans les tables de chaînage. 
Mais les conséquences de cette duplication restent négligeables car ces bénéficiaires sont très rares dans l’EGB.


**Quand sont disponibles les tables annuelles du PMSI MCO ?**	

Il faut se référer au classeur "ECHANTILLON_TABLEAU_DES_CHARGEMENTS_MAJ_20AA_MM_JJ" onglet "PMSI pour l'EGB" (disponible sous BO Infoview / Dossiers publics / Echantillon Généraliste Bénéficiaires / Offre de services EGB). 
Pour information, les données du PMSI d'une année N sont chargées avec le référentiel de l'EGB de l'année N+1. "






## DOCUMENTATION / DONNEES


**Quand le dictionnaire EGB sera t-il bientôt mis à jour ?**
**La dernière version date de 2013.**	

Le dictionnaire SNIIRAM est en cours de reconstruction.
Il faut considérer, pour le moment, le fichier téléchargeable "liste des tables et des variables Vx" comme le dictionnaire de l'EGB : Il décrit l'ensemble des variables de l'EGB (Libellé, Format, Tables de valeurs, Critères d'agrégation...).


**Je ne parviens pas à lire les documents PDF sur le portail sous BO**	

Sur Internet Explorer : aller dans "Outils" de votre navigateur Internet explorer, --> Paramètres d’affichage de compatibilité et d’ajouter le site "ameli.fr". 
Ou bien utiliser firefox.


**Les données pour les années 2002 et 2003 présentes dans l’EGB sont complètes et bien renseignées ?**	

Les données de prestations de l'EGB sont traitées depuis le 1er janvier 2003 (date de traitement flx_trt_dtd >= 1er janvier 2003, date de mise à disposition des données flx_dis_dtd >= 1er février 2003). 
Dans ces conditions, vous pouvez rencontrer des prestations exécutées en 2002 et traitées en 2003 car une feuille de soins peut être envoyée par un assuré social à sa caisse d'assurance maladie pendant les 27 mois qui suivent la date des soins. 
Cependant, les feuilles de soins électroniques sont traitées majoritairement au cours du mois d'exécution des soins. 
Par conséquent, vous ne disposez pas de l'exhaustivité des soins exécutés en 2002 dans l'EGB. 
Le plus prudent est de travailler sur les soins exécutés à partir de 2004 (date de début de soins exe_soi_dtd >= 1er janvier 2004).


**Concernant la représentation géographique de l'EGB, l'échantillon n'est pas représentatif au niveau départemental et encore moins par commune.** 
**Mais l'est-il au niveau régional ? Si non existe t il une méthode de redressement ?** 	

L'EGB est représentatif au niveau national, il n'est pas construit pour l'être au niveau régional. 
Aucune méthode de redressement n'est disponible pour l'instant. 






## AUTRES

**Est-il possible à partir des données de l'EGB de repérer les médecins ayant signé le contrat d'accès aux soins et si oui à partir de quelle année ?**	

L'EGB est un échantillon de patients et non un échantillon de PS.
On ne peut pas savoir si un médecin a signé un contrat d'accès aux soins à partir des données de l'EGB.



**Je souhaite calculer la survie des patients ayant subi un acte de réanimation à 1 mois, 3 mois, et 1 an.** 
**Je trouve des taux plus élevés que ceux attendus.**
**La population étudiée est l'ensemble des patients ayant subi un acte de chirurgie dans les 48h précédents ou suivants l'acte de réanimation, sur la période 2009-2015.**	

Si la survie est supérieure à celle attendue y compris dans la population générale, a priori ce n'est pas dû à la sélection d'actes. 
Les données concernant les décès ne sont disponibles que pour le Régime Général jusqu'en 2011. 
Il faut donc soit limiter votre analyse à cette population, soit limiter la période de recrutement aux années ultérieures.


**Pour quelle raisons des montants remboursés peuvent être négatifs ou nuls ?**	

Dans l'EGB Simplifié, les montants négatifs ou nuls correspondent à des régularisations ou à des anomalies non corrigées/redresées par l'ETL lors du passage de l'EGB à l'EGBS.
La proportion des prestations concernées est très faible.



## REFERENCES

La [FAQ EGB 09 2019](../../../files/Cnam/2019-06-CNAM-FAQ_EGB_MLP-2.0.xlsx) [CNAM - MPL-2.0] reprend les questions fréquemment posées sur l'EGB.


