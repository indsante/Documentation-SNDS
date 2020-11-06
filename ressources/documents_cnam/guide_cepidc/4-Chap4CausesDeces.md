# IV - Description des données
<!-- SPDX-License-Identifier: MPL-2.0 -->

Les deux tables sur les causes médicales de décès sont disponibles dans le répertoire « ORAVUE » du SNDS, vous pouvez les exploiter via SAS Enterprise Guide. 
Le document « Causes Médicales de décès - liste des profils d'accès et des identifiants potentiels - 24 septembre 2018.pdf » mis en ligne sur Ameli Réseau et le portail SNIIRAM vous donne la liste des identifiants potentiels ainsi que les profils du SNDS sous lesquels vous pouvez exploiter les données sur les causes de décès. 
Pour les utilisateurs qui ne sont pas autorisés à croiser les identifiants potentiels, de nouveaux profils du SNDS donnent accès à la commune de décès du bénéficiaire, à l’exclusion des autres identifiants potentiels (dates de soins, commune de résidence, mois de naissance, date de décès). 
Il s’agit des profils portail 119 à 126.


A partir des éléments fournis par le médecin qui a délivré le certificat de décès, le CépiDc détermine la cause initiale du décès. Cette cause initiale est renseignée dans la table KI_CCI_R, accompagnée d’informations socio-démographiques et médicales. 
La cause initiale du décès ainsi que toutes les autres causes, s’il en existe, sont restituées dans la table de l’ensemble des causes de décès KI_ECD_R.

Afin de vous aider à exploiter ces deux tables, des tables de valeurs sont à votre disposition dans le répertoire « ORAVAL ». Elles contiennent les valeurs et les libellés des variables correspondantes. 
Les tables spécifiques aux causes médicales de décès commencent par « DS », les autres tables commencent par « IR »  ou « MS » et sont également utilisées pour les données de consommation de soins.


## La table des circonstances et de la cause initiale du décès KI_CCI_R

La table des circonstances et de la cause initiale de décès KI_CCI_R contient une ligne par décès, une ligne par identifiant `dcd_idt_enc`. Lorsque les décès sont appariés avec les données de santé (`dcd_idt_top` = 1), cette table contient une ligne par identifiant `ben_idt_ano`.

::: details Tableau 1 - Liste des informations de la table KI_CCI_R
|                |     Code    |     Libellé   |     Format |     Tables de   valeurs  |     Changement à   la mise à disposition 2020|          
|----------------|-------------|---------------|------------|--------------------------|----------------------------------------------|
|Identifiants Bénéficiaire  |     DCD_IDT_ENC     |     Identifiant décès encodé          |     car(64)   |     |    |  
|                           |     DCD_IDT_TOP     |     Top apparié avec IR_BEN_R         |     num(1)    |     |    |                       
|                           |      BEN_IDT_ANO    |     Identifiant synthétique SNDS     |     car(18)   |     |    |           |                           |     BEN_IDT_TOP     |     Top identifiant synthétique   SNDS |     num(1)   |     |    |   
|                           |     BEN_NIR_ANO     |     NIR pseudonymisé du bénéficiaire  |     car(17)   |     |    |          
|Tout certificat            |     FLX_PER_ANN     |     Année de décès                    |     car(4)    |     |    | 
|                           |     CER_VER_NUM     |     Version du certificat             |     num(1)  | DS_VER_V  |    | 
|                           |     TRT_STA_COD     |     Statut de traitement    |     num(1)      |     DS_STA_V   |     |                      |                           |     TYP_CER_COD     |     Type de certificat      |     num(1)      |     DS_CER_V   |     |                      |                           |     CER_SUP_TYP     |     Type de support          |     num(1)     |     DS_SUP_V   |    |                      |                           |     TYP_VOL_COD     |     Type de volet          |     num(1)       |     DS_VOL_V   |    |                           |                           |     DCD_DPT_COD     |     Département de décès     |     car(3)     |     IR_DPT_V   |   |                            |                           |     DCD_COM_COD     |     Commune de décès         |     car(3)     |     IR_GEO_V   |    |                         |                           |     BEN_RES_DPT     |     Département de domicile   |     car(3)    |     IR_DPT_V   |    |                      |                           |     BEN_RES_COM     |     Commune de domicile     |     car(3)      |     IR_GEO_V  |    |                         |                           |     BEN_DCD_DTE     |     Date du décès          |     date         |         |    |                                  |                           |     BEN_DCD_AME     |     Année et mois du décès    |     car(6)    |     AAAAMM    |    |                         |                           |     DCD_LIE_COD     |     Lieu du décès          |     num(1)       |     DS_LIE_V    |    |                       |                           |     BEN_NAI_ANN     |     Année de naissance       |     car(4)     |     |    |                                      |                           |     BEN_NAI_MOI     |     Mois de naissance         |     car(2)    |   |    |                                    |                           |     BEN_SEX_COD     |     Sexe                    |     num(1)      |     IR_SEX_V     |     |                     |                           |     PFV_ACP_COD     |     Activité professionnelle  |     num(1)     |     DS_ACP_V   |     |                        |                           |     CAT_PCS_COD     |     Profession et catégorie socioprofessionnelle |    car(4) |     DS_PC1_V, DS_PC2_V,   DS_PC3_V    |                                                  |          |
|                           |     ETA_MAR_COD     |     Etat matrimonial       |     num(1)      |     DS_MAR_V |     |                            |                           |     DCD_CIM_COD     |     Cause initiale du décès    |     car(4)  |     IR_CCI_V, IR_CIM_V,   MS_CIM_V |     |                           |     DCD_CAU_COD     |     Recherche de la cause de décès  |     num(1)      | DS_CAU_V  | |                           |                           |     DCD_CIM_VER     |     Version CIM utilisée pour coder les causes médicales de décès    |    num(1)      |   DS_CIM_V   |     Variable nouvelle           |  
|                           |     DCD_CIR_COD     |     Circonstance apparente du décès   |     num(1)  |  DS_CIR_V  | Variable nouvelle  |        
|                           |     DCD_MSU_COD     |     Mort subite     |     num(1)    |     DS_MSU_V   |     Variable nouvelle    |
|   Certificat   Adulte     |     DCD_GRS_COD     |     La grossesse a contribué au décès   |     num(1)      |  DS_GRS_V |    |  |                           |     DCD_GRS_DEL     |     Délai entre fin de grossesse et décès    |     car(4)     |       |        |          |
|                           |     DCD_LIE_LIB     |     Lieu de l’évènement si mort violente     |     car(200)    |       |     Variable supprimée   |    
|                           |     DCD_ATT_COD     |     Accident du travail ou Activité professionnelle |   num(1)   |   DS_ATT_V |   |
|                           |     DCD_ENC_COD     |     La femme décédée était-elle enceinte ?   |     num(1)      |   DS_ENC_V     |    Variable nouvelle   |
|                           |     DCD_FIA_COD     |     Fiabilité de la date de décès           |     num(1)    |     DS_FIA_V    |     Variable nouvelle      |          |
|                            |     LIE_LMV_COD     |     Codification du lieu de décès si mort violente   |  num(1)| DS_LMV_V  |     Variable nouvelle                            |          |
|    Certificat   Néonatal   |     NEO_APG_SCO     |     Apgar à une minute                    |     num(2)    |       |     |
|                            |     NEO_GES_AGE     |     Âge gestationnel en semaines révolues d’aménorrhée  |  num(2) |     |        |     |                            |     NEO_NAI_POI     |     Poids de naissance en   grammes       |     num(4,0)  |       |     |
|                            |     RNG_NAI_TYP     |     Type de naissance                     |     num(1)      |  DS_NAI_V |     |    |                            |     GRS_ORD_NUM     |     N° d’ordre de l’enfant si   grossesse multiple      |     num(1)|     ||     |      |                            |     ACC_LIA_COD     |     Lieu d’accouchement            |     num(1)      |     DS_LIA_V |   |                      |                            |     ACC_PST_COD     |     Présentation de l’enfant       |     num(1)      |     DS_PST_V |   |                      |                            |     ACC_DEB_COD     |     Début du travail               |     num(1)      |     DS_DEB_V |   |                      |                            |     MOD_ACC_COD     |     Mode d’accouchement            |     num(1)      |     DS_ACC_V |  |                       |                            |     HOS_TRF_TOP     |     Transfert ou hospitalisation particulière de l’enfant |  num(1) | DS_TRF_V  |         |
|                            |     MER_NAI_ANN     |     Année de naissance de la mère  |     car(4)      |        |        |
|                            |     MER_PFS_COD     |     Activité professionnelle de la mère  | num(1)    |     DS_PFS_V |   | |                            |     MER_PFG_LIB     |     Profession de la mère   exercée pendant la grossesse |  car(50) |   |    |   |                            |     MER_MAR_COD     |     Etat matrimonial de la mère    |     num(1)      |   DS_MAR_V |  |                         |                            |     MER_SIT_TOP     |     La mère vit elle en couple     |     num(1)      |   DS_SIT_V |  | 
|                            |     TOT_GRS_NBR     |     Nombre total de grossesses       |     num(2)      |    |  |
|                            |     TOT_ACC_NBR     |     Nombre total   d’accouchements    |     num(2)      |   |  |
|                            |     PER_PFS_COD     |     Activité professionnelle du père  |     num(1)      |     DS_PFS_V        |   |        |                            |     PER_PFG_LIB     |     Profession du père exercée pendant la grossesse        |     car(50)   |  |    |                            |     DCD_NEO_AGE     |     Mortalité néonatale groupe d'âge       |     num(1)      |     DS_AGE_V     |     Variable nouvelle   |
|                            |     DCD_NRS_COD     |     Mort inattendue du nourrisson      |     num(1)      |    DS_NRS_V     |     Variable nouvelle   |    
:::


### Rappel sur les identifiants des bénéficiaires

- le champ `dcd_idt_enc` permet d’identifier chaque décès envoyé par l’INSERM, qu’il ait ou non pu être apparié avec les données de santé. Il correspond au numéro de certificat de décès pseudonymisé deux fois, une première fois par l’INSERM, une seconde fois par la CNAM ;
- le top `dcd_idt_top` vaut 1 si le décès a été apparié avec le référentiel IR_BEN_R / IR_BEN_R_ARC, 0 sinon ;
- l’identifiant synthétique du bénéficiaire dans le SNDS `ben_idt_ano` est renseigné dans la table KI_CCI_R lorsque le décès a pu être apparié avec le référentiel des bénéficiaires IR_BEN_R / IR_BEN_R_ARC (dcd_idt_top = 1). 
Il correspond :
    - au NIR pseudonymisé du bénéficiaire `ben_nir_ano` lorsqu’il est alimenté dans le référentiel des bénéficiaires,
    - à la concaténation de l’identifiant SNIIRAM pseudonymisé du bénéficiaire `ben_nir_psa` et du rang de bénéficiaire `ben_rng_gem` lorsque le NIR pseudonymisé `ben_nir_ano` n’est pas alimenté dans le référentiel des bénéficiaires (Cf. rappel dans le [chapitre II](2-Chap2CausesDeces.md)) ;
- le `top ben_idt_top` associé à l’identifiant synthétique `ben_idt_ano` vaut 1 lorsque `ben_idt_ano` = `ben_nir_ano`, 0 sinon ;
- le NIR pseudonymisé du bénéficiaire `ben_nir_ano` est alimenté pour les décès appariés avec les données de santé, lorsqu’il est renseigné dans le référentiel IR_BEN_R / IR_BEN_R_ARC (`dcd_idt_top` = 1 et `ben_idt_top` = 1).

### Version du certificat, statut de traitement, type de certificat, type de support, volet du certificat

- pour les décès antérieurs à 2017, la version de tous les certificats cer_ver_num est celle de 1997. Un nouveau certificat de décès est disponible à partir de l’année 2017 pour 6 communes faisant partie de l’expérimentation de dématérialisation totale du certificat de décès. Le nouveau modèle de certificat rentrera en vigueur pour l’ensemble des certificats (papiers et électroniques) à partir du 1er janvier 2018 et devrait progressivement remplacer le certificat de 1997 ;

- pour l’instant, les informations de décès intégrées au SNDS sont des données annuelles consolidées par l’INSERM et l’INSEE, le statut de traitement `trt_sta_cod` est toujours final ;

- le type de certificat de décès typ_cer_cod est destiné à distinguer les décès d’adultes des décès néonatals. Les décès néonatals concernent les enfants nés vivants et décédés au plus tard le 28ème jour de leur vie.

En réalité, lorsque le médecin qui rédige le certificat de décès ne dispose que d’une version sur papier, il ne dispose pas toujours de la version adéquate du certificat (adulte ou néonatal). 
C’est pourquoi, certains décès considérés comme des décès d’adultes (`typ_cer_cod` = 1 dans KI_CCI_R) sont en réalité des décès néonatals et certains décès considérés comme néonatals (`typ_cer_cod` = 2) sont des décès d’adultes. 
Par conséquent, si vous souhaitez réaliser des études spécifiques aux décès néonatals, veuillez-vous rapprocher du CépiDc ;

- le type de support `cer_sup_typ` permet de distinguer les certificats sur papier des certificats électroniques. La proportion de certificats électroniques augmente au cours du temps (de 4,9 % en 2013 à 9,1 % en 2015), cette tendance devrait continuer dans les années postérieures ;

- la variable `typ_vol_cod` concernant le type de volet du certificat de décès n’a été introduite qu’en 2017 dans les bases de données du CépiDc, ce qui explique que cette variable est très rarement renseignée pour l’instant. 
Tant que le nouveau certificat de décès n’est pas utilisé, le type de volet du certificat `typ_vol_cod` ne peut prendre que la valeur 1 (initial). 
Un volet complémentaire (`typ_vol_cod` = 2) pourra être utilisé dans les nouveaux certificats, mis en place progressivement à partir de 2018.


### Département et commune de décès ou de résidence

- La table de valeurs du code des départements IR_DPT_V prévoit qu’un département est codé sur trois positions, 001, 002 par exemple. Pour la Corse, la codification adoptée dans cette table est 201 pour la Corse du Sud et 202 pour la Haute Corse, au lieu de 02A et 02B. 
Pour les départements d’outre-mer (DOM), le code du département est 097.

La codification de la table IR_DPT_V a été appliquée au département de décès `dcd_dpt_cod` et au département de résidence `ben_res_dpt` de la table KI_CCI_R. 
Par conséquent, les départements de Corse sont codés 201 et 202 et les DOM sont codés 097 ;

- Le libellé des communes se trouvent dans la table de valeurs IR_GEO_V mais nous vous rappelons que pour trouver le nom d’une commune, il faut toujours indiquer le code du département dans lequel elle se situe. 
Le code du département figure également dans la table IR_GEO_V.


### Date de décès

La date `ben_dcd_dte` est la date complète du décès, année, mois et jour. 
Pour les utilisateurs qui ne sont pas autorisés à croiser les identifiants potentiels, le champ `ben_dcd_ame` leur fournit l’année et le mois du décès quel que soit le profil utilisé.


### Profession et catégorie socioprofessionnelle

Lorsqu’il est renseigné, le code `cat_pcs_cod` de la profession ou catégorie socioprofessionnelle (PCS) se rapporte à une personne active au moment de son décès. 
Le code de la PCS n’est jamais renseigné pour les retraités ou les autres inactifs, il commence toujours par 1, 2, … 6.
La codification des PCS est définie par l’INSEE, c’est également l’INSEE qui saisit ce code dans les données des causes médicales de décès.

La codification des PCS est hiérarchisée :
- le premier caractère de gauche du champ `cat_pcs_cod` correspond à la codification en 8 postes, listée dans la table de valeurs DS_PC1_V. 
Si vous souhaitez connaître le libellé de ces PCS pour les personnes de la table KI_CCI_R, vous appariez le premier caractère du code `cat_pcs_cod` (substr(cat_pcs_cod,1,1) avec le code `cat_pc1_ch1` de la table de valeurs DS_PC1_V et vous listez le libellé correspondant `ch1_pc1_lib` ;
- les PCS de la table KI_CCI_R sont saisis sur 2 caractères, suivant la nomenclature de l’INSEE en 42 postes listée dans la table DS_PC3_V. 
Si vous voulez connaître le libellé de ces PCS, vous pouvez donc apparier le code `cat_pcs_cod` de la table KI_CCI_R avec le code `cat_pc3_ch3` de la table de valeurs DS_PC3_V et éditer les libellés correspondants `ch3_pc3_lib`.

La table de valeurs DS_PC2_V correspond à la codification des PCS suivant la nomenclature de l’INSEE en 24 postes (codes saisis sur 2 caractères). 
Cette nomenclature n’a pas été utilisée par l’INSEE pour les causes de décès mais la table de valeurs DS_PC2_V pourra peut-être servir pour les décès d’autres années.

N.B. : le format du code de la PCS a été corrigé dans les tables de valeurs DS_PC1_V, DS_PC2_V et DS_PC3_V : il est maintenant alphanumérique, comme cela est également le cas dans la table KI_CCI_R. 
L’appariement entre la table KI_CCI_R et les tables de valeurs DS_PC1_V … est donc simplifié.


### Cause initiale du décès

La cause initiale de décès est définie par l’OMS comme «a) la maladie ou le traumatisme qui a déclenché l’évolution morbide conduisant directement au décès, ou b) les circonstances de l’accident ou de la violence qui ont entraîné le traumatisme mortel». 
Le code de la cause initiale du décès dcd_cim_cod correspond se conforme à la 10ème version révision de la classification internationale des maladies (CIM10) réalisée maintenue par l’organisation mondiale de la santé (OMS). 
Ce code est hiérarchisé :
- les trois premiers caractères de gauche du code dcd_cim_cod correspondent à la classe de la pathologie au sens de l’OMS. 
En appariant ces trois premiers caractères de gauche au code `cat_cim_cod` de la table de valeurs des classes de pathologies IR_CCI_V (substr(dcd_cim_cod,1,3) = cat_cim_cod), vous pouvez connaître le libellé correspondant de la classe de pathologie `cat_cim_lib` ;
- pour connaître le libellé de la pathologie elle-même `dcd_cim_cod`, vous appariez ce champ avec le code `cim_cod` de la table de valeurs des pathologies IR_CIM_V. 
Vous pouvez également rechercher ces libellés dans la table MS_CIM_V qui contient la codification CIM10 des diagnostics du PMSI.

La valeur « R99 » du code de la cause initiale de décès `dcd_cim_cod` ne figure ni dans la table IR_CIM_V, ni dans la table MS_CIM_V. Elle correspond à une pathologie inconnue, ce qui se produit notamment lorsque le CépiDc ne reçoit pas le volet médical du certificat de décès.


### Apgar à une minute

Le score d’Apgar mesure la vitalité d’un nouveau-né au moment de sa naissance. Ce score varie de 0 à 10, plus il est élevé, meilleur est l’état de santé du bébé. 
Ce score résulte de l’évaluation du rythme cardiaque, de la respiration, du tonus, de la couleur de la peau et de la réactivité de l’enfant. 
Pour plus de détails sur ce score, veuillez-vous rapprocher d’un médecin.


### Âge gestationnel et poids de naissance de l’enfant en grammes

Selon les recommandations de l’OMS, les enfants nés après 22 semaines révolues d’aménorrhée ou pesant au moins 500 grammes sont présumés viables, indépendamment de tout autre critère.

Dans la table KI_CCI_R, lorsque l’âge gestationnel `neo_ges_age` est d’au moins 22 semaines ou lorsque le poids de naissance de l’enfant `neo_nai_poi` est d’au moins 500 grammes, on peut considérer qu’il s’agit d’un décès néonatal. 
Au-dessous de ces deux seuils, on considère qu’il s’agit d’un enfant mort-né mais pas d’un décès néonatal. 
Si vous souhaitez plus d’information, vous pouvez activer [ce lien](https://www.senat.fr/lc/lc184/lc1840.html) sur le site du Sénat.



## La table de l’ensemble des causes de décès KI_ECD_R

La table de l’ensemble des causes de décès KI_ECD_R se rapporte aux mêmes identifiants de décès `dcd_idt_enc` que ceux de la table des circonstances et de la cause initiale du décès KI_CCI_R. 
Tout identifiant `dcd_idt_enc` de l’une des deux tables se retrouve également dans l’autre.

Contrairement à la table KI_CCI_R qui ne contient qu’une seule ligne par décès, la table KI_ECD_R peut contenir plusieurs lignes pour un même identifiant de décès `dcd_idt_enc`. 
En effet, elle comporte une ligne pour chaque cause de décès déclarée par le médecin qui a rempli le certificat de décès. 
En pratique, la table KI_ECD_R contient une ligne par triplet {identifiant de décès encodé `dcd_idt_enc` ; N° de ligne du certificat de décès `cer_lig_num` ; rang de la cause de décès `ecd_cau_rng`}.

Le N° de ligne du certificat de décès `cer_lig_num` peut aller de 1 à 6, par contre, aucune limite n’est définie pour le rang de la cause `ecd_cau_rng`.

Lorsque le décès a pu être apparié avec les données de santé, le top `dcd_idt_top` prend la valeur 1, les champs `ben_idt_ano`, `ben_idt_top` et s’il existe `ben_nir_ano` sont alimentés.

::: warning Attention
Nous vous déconseillons fortement d’apparier directement la table KI_ECD_R avec les données de santé car vous risquez de recopier les données de santé autant de fois qu’il y a de lignes pour un même décès dans la table KI_ECD_R.

Nous vous conseillons donc de calculer d’abord les données de santé pour chaque identifiant ben_idt_ano correspondant à un décès apparié avec les données de santé, puis de rapprocher ces données de la table KI_ECD_R.

Il convient de noter que pour un même identifiant `dcd_idt_enc`, la cause initiale de décès présente dans la table KI_CCI_R ne correspond pas systématiquement à l’une des causes mentionnées dans la table KI_ECD_R. Dans certains cas, la cause initiale résulte d’une combinaison de causes de la table KI_ECD_R.
:::

Le code CIM10 `ecd_cim_cod` et le libellé `ecd_cau_lib` de toutes les causes de décès d’un individu figurent dans la table KI_CCI_R. 
Pour connaître les libellés attribués par l’OMS aux codes `ecd_cim_cod` attribués à chaque décès, vous pouvez également apparier tout ou partie du code `ecd_cim_cod` aux tables de valeurs IR_CCI_V, IR_CIM_V ou MS_CIM_V du SNDS.

::: details  Tableau 2 – Liste des informations de la table KI_ECD_R
|                |     Code    |     Libellé   |    Format  |     Table de   valeurs   |
|----------------|-------------|---------------|------------|--------------------------|
|   Identifiants Bénéficiaire   |     DCD_IDT_ENC    |     Identifiant   décès encodé    |     car(64)     |           |
|                               |     DCD_IDT_TOP    |     Top   Apparié avec IR_BEN_R   |     num(1)      |           |
|                               |     BEN_IDT_ANO    |     Identifiant synthétique SNDS   |     car(18)     |          |
|                               |     BEN_IDT_TOP    |     Top   identifiant synthétique SNDS   |    num(1) |          |
|                               |     BEN_NIR_ANO    |     NIR   pseudonymisé du bénéficiaire   |  car(17)  |          |
|  Ensemble des causes du décès |     FLX_PER_ANN    |     Année   du décès              |     car(4)      |           |
|                               |     CER_LIG_NUM    |     N° de ligne du certificat de décès |  num(1)   |            |
|                               |     ECD_CAU_RNG    |     Rang   de la cause           |     num(3)      |            |
|                               |     ECD_CAU_LIB    |     Libellé   de la cause        |     car(100)    |            |
|                               |     ECD_CIM_COD    |     Code   de la cause           |     car(4)      |  IR_CCI_V, IR_CIM_V, MS_CIM_V   |
|                               |     BEN_DCD_DTE    |     Date du décès                |     Date        |             |
|                               |     BEN_DCD_AME    |     Année   et mois du décès     |     car(6)      |     AAAAMM     |
:::

#### Précisions sur le numéro de ligne du certificat `cer_lig_num`

Lorsqu’un médecin remplit un certificat de décès, il doit décrire la ou les maladies ou affections qui ont directement provoqué le décès mais il peut également préciser les états morbides qui ont contribué au décès.

Dans la table KI_ECD_R, les lignes `cer_lig_num` comprises entre 1 et 5 correspondent aux maladies ou affections qui ont directement provoqué le décès, la ligne N° 6 concerne les états morbides qui ont contribué au décès. 
Bien entendu, les 5 premières lignes ne sont pas systématiquement remplies pour tous les décès, cela dépend du nombre d’affections qui ont provoqué le décès.

C’est pourquoi, dans la table KI_ECD_R, vous pourrez trouver des décès (identifiés par le champ `dcd_idt_enc`), pour lesquels les lignes `cer_lig_num` portent les numéros 1 et 6, 1, 2 et 6 par exemple. 
Vous pourrez également trouver des décès qui ne comportent pas de ligne N° 6.

La variable `ecd_cau_lib` est le descriptif de la cause tel qu’il a été rédigé par le médecin sur le certificat et après traitement automatique ou manuel spécifique pour lui attribuer un code. 
Pour un décès, il peut arriver qu’il y ait un décalage entre `ecd_cau_lib` et le code attribué `ecd_cim_cod`, par exemple lorsqu’une entité nosologique génère deux codes distincts. 
Cela peut aussi être la conséquence de deux entités nosologiques sur une même ligne dont le code attribué est la même : seul le code de la première entité nosologique est apposé.


## Les tables de valeur

::: details Descriptif des tables de valeurs ajoutées en 2020
|  Nom de la table |                          Libellé                                    |     Valeurs                |
|------------------|---------------------------------------------------------------------|----------------------------|
|     DS_CIM_V     | Version de la CIM utilisée pour coder les causes médicales de décès |   1 : CIM9  | 
|                  |                                                                     |   2 : CIM10  |
|                  |                                                                     |   3 : CIM11 |
|     DS_AGE_V     |     Mortalité néonatale groupe d'âge                                |   1 : Mortalité néonatale précoce (âge<7jours)   |
|                  |                                                                     |   2 : Mortalité néonatale tardive (7jrs<= age <28 jrs)| 
|                  |                                                                     |   3 : Décès de moins d'un an (28 jours à 366 jours)| 
|     DS_FIA_V     |     Fiabilité de la date de décès                                   |   1 : Date réelle   |
|                  |                                                                     |   2 : Date du constat de décès   |
|     DS_MSU_V     |     Mort subite                                                     |   1 : Oui  |
|                  |                                                                     |   2 : Non  |  
|                  |                                                                     |   3 : Ne sait pas     |
|     DS_CIR_V     |     Circonstance apparente du décès                                 |   1 : Indéterminée  |  
|                  |                                                                     |   2 : Mort naturelle |  
|                  |                                                                     |   3 : Accident   | 
|                  |                                                                     |   4 : Suicide  |  
|                  |                                                                     |   5 : Atteinte à la vie d'autrui   |
|                  |                                                                     |   6 : Fait de guerre|   
|                  |                                                                     |   7 : Investigations en cours |  
|                  |                                                                     |   8 : Complication de soins médicaux ou chirurgicaux   
|                  |                                                                     |   9 : Atteinte à la vie de l’enfant (certificat néonatal uniquement)  |
|     DS_ENC_V     |     La femme décédée était-elle enceinte ?                          |   1 : Non, pas au cours de l’année précédant le décès   
|                  |                                                                     |   2 : pas au moment du décès mais grossesse terminée depuis 42 jours ou moins|
|                  |                                                                     |   3 : pas au moment du décès mais grossesse terminée depuis plus de 42 jours et moins d’un an  | 
|                  |                                                                     |   4 : Oui, au moment du décès   |
|                  |                                                                     |   5 : Ne sait pas        |
:::

::: details Table de valeur modifiée en 2020
|Nom de la table |      Libellé                                    |   Valeurs  |
|----------------|-------------------------------------------------|------------|
|   DS_ATT_V     | Accident du travail ou Activité professionnelle | 1 : Oui   |
|                |                                                 | 2 : Non   |
|                |                                                 | 3 : Sans précision (ancien) ou ne sais pas (nouveau)   |
:::
