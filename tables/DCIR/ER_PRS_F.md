# ER_PRS_F

Table des prestations

- Clé primaire : `DCT_ORD_NUM, FLX_DIS_DTD, FLX_EMT_NUM, FLX_EMT_ORD, FLX_EMT_TYP, FLX_TRT_DTD, ORG_CLE_NUM, PRS_ORD_NUM, REM_TYP_AFF`

## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|BEN_AMA_COD|nombre réel|Age du bénéficiaire en mois (si < 2 ans) ou années (si >= 2 ans)|||
|BEN_CDI_NIR|chaîne de caractères|Code d'identification du NIR|||
|BEN_CMU_CAT|chaîne de caractères|Catégorie d'organisme complémentaire CMU|||
|BEN_CMU_ORG|chaîne de caractères|Code de l'organisme complémentaire|||
|BEN_CMU_TOP|chaîne de caractères|Top bénéficiaire de la CMU complémentaire|||
|BEN_DCD_AME|chaîne de caractères|Année et mois de décès du bénéficiaire|||
|BEN_DCD_DTE|date|Date de décès du bénéficiaire|||
|BEN_EHP_TOP|chaîne de caractères|Identification hospitalisation en EHPAD ou en EMS|||
|BEN_IAT_CAT|chaîne de caractères|Catégorie du bénéficiaire (Invalidité - Rente accident du travail)|||
|BEN_NAI_ANN|chaîne de caractères|Année de naissance du bénéficiaire|||
|BEN_PAI_CMU|chaîne de caractères|Type de procédure de paiement CMU|||
|BEN_NIR_PSA|chaîne de caractères|Identifiant anonyme du patient dans le SNIIRAM|||
|BEN_RNG_GEM|nombre réel|rang de naissance du bénéficiaire|||
|BEN_QAF_COD|nombre réel|Qualité du matricule de l'ouvreur de droits|||
|BEN_RES_COM|chaîne de caractères|commune de résidence du destinataire du règlement|||
|BEN_RES_DPT|chaîne de caractères|Département de résidence du bénéficiaire|||
|BEN_SEX_COD|nombre réel|Code sexe du bénéficiaire|||
|ORG_AFF_BEN|chaîne de caractères|Code de l'organisme d'affiliation|||
|PRS_REJ_TOP|chaîne de caractères|Top rejet ou signalement|||
|EXE_SOI_AMD|chaîne de caractères|Date (année et mois) de début d'exécution des soins|||
|EXE_SOI_AMF|chaîne de caractères|Date (année et mois) de fin d'exécution des soins|||
|EXE_SOI_DTD|date|Date de début d'exécution des soins|||
|EXE_SOI_DTF|date|Date de fin d'exécution des soins|||
|PRE_PRE_AMD|chaîne de caractères|Date (année et mois) de prescription|||
|PRE_PRE_DTD|date|Date de prescription|||
|PRS_GRS_DTD|date|Date présumée de Grossesse|||
|PRS_HOS_AMD|chaîne de caractères|Date (année et mois) de début d'hospitalisation|||
|PRS_HOS_DTD|date|Date de début d'hospitalisation|||
|BSE_REM_BSE|nombre réel|Base de remboursement de l'acte de base|||
|BSE_REM_MNT|nombre réel|Montant remboursé pour l'acte de base|||
|BSE_REM_PRU|nombre réel|Prix unitaire de l'acte (acte de base)|||
|BSE_REM_SGN|nombre réel|Signe du remboursement (acte de base)|||
|CPL_REM_BSE|nombre réel|Base de remboursement (complément d'acte)|||
|CPL_REM_MNT|nombre réel|Montant versé-remboursé (complément d'acte)|||
|CPL_REM_PRU|nombre réel|Prix unitaire de l'acte (complément d'acte)|||
|CPL_REM_SGN|nombre réel|Signe du remboursement (complément d'acte)|||
|PRS_ACT_CFT|nombre réel|Coefficient (non signé) de l'acte|||
|PRS_ACT_COG|nombre réel|Coefficient global de l'acte de base|||
|PRS_ACT_NBR|nombre réel|Dénombrement des actes de base|||
|PRS_ACT_QTE|nombre réel|Quantité de l'acte de base|||
|PRS_DEP_MNT|nombre réel|Montant global du dépassement|||
|PRS_ETA_RAC|nombre réel|Reste à charge de l'établissement|||
|PRS_PAI_MNT|nombre réel|Montant global de la dépense|||
|RGO_MOD_MNT|nombre réel|Montant de la majoration de la participation de l'assuré (régime obligatoire)|||
|ORB_BSE_NUM|chaîne de caractères|Organisme de base de liquidation des prestations|||
|ORL_BSE_NUM|chaîne de caractères|Organisme de base de liquidation des prestations|||
|RGM_COD|nombre réel|Code du petit régime|||
|RGM_GRG_COD|nombre réel|Grand régime de liquidation du bénéficiaire|||
|ACC_TIE_IND|nombre réel|Top tiers responsable accident|||
|BSE_FJH_TYP|nombre réel|Type de prise en charge du forfait journalier (acte de base)|||
|BSE_PRS_NAT|nombre réel|Nature de la prestation (acte de base)|||
|CPL_AFF_COD|nombre réel|Code complément affiné|||
|CPL_ANO_COD|nombre réel|Code anomalie complément affiné|||
|CPL_FJH_TYP|nombre réel|Type de prise en charge du forfait journalier (complément d'acte)|||
|CPL_MAJ_TOP|nombre réel|Top complément - majoration|||
|CPL_PRS_NAT|nombre réel|Nature de la prestation (complément d'acte)|||
|DPN_QLF|nombre réel|Qualificatif de la dépense|||
|DRG_MOD|nombre réel|Mode de règlement|||
|DRG_NAT|nombre réel|Code du destinataire du règlement|||
|EXE_LIE_COD|nombre réel|Lieu d'exécution de l'acte médical|||
|EXO_MTF|nombre réel|Motif d'exonération du ticket modérateur|||
|IJR_EMP_NUM|nombre réel|Numéro demployeur pour les indemnités journalières|||
|IJR_RVL_NAT|chaîne de caractères|Nature de la revalorisation (indemnités journalières)|||
|MTM_NAT|nombre réel|Modulation du ticket modérateur|||
|ORG_CLE_NEW|chaîne de caractères|Code de l'organisme de liquidation|||
|PRE_REN_COD|chaîne de caractères|Type de renouvellement de la prescription (opticien - pharmacien)|||
|PRS_CRD_OPT|chaîne de caractères|Top option de coordination|||
|PRS_DPN_QLP|nombre réel|Qualificatif de la dépense transmis|||
|PRS_NAT_REF|nombre réel|Code de la Prestations de référence|||
|PRS_OPS_TRF|nombre réel|Indicateur de tarif opposable|||
|PRS_PDS_QCP|nombre réel|Code qualificatif du parcours de soins|||
|PRS_PDS_QTP|nombre réel|Qualificatif du parcours de soins transmis|||
|PRS_PPF_COD|chaîne de caractères|Prise en compte de la participation forfaitaire|||
|PRS_PRE_MTT|nombre réel|Code origine de la prescription|||
|PRS_REF_KIN|chaîne de caractères|Indicateur Référentiel Entente Préalable kinésithérapie|||
|PRS_TOP_ENP|nombre réel|Indicateur Top Entente Préalable|||
|PRS_TYP_KIN|chaîne de caractères|Type de prestation Kiné|||
|RGO_ASU_NAT|nombre réel|Nature d'assurance (régime obligatoire)|||
|RGO_ENV_TYP|nombre réel|Type d'enveloppe (régime obligatoire)|||
|RGO_FTA_COD|nombre réel|Forçage du taux (hors parcours de soins) (part obligatoire)|||
|RGO_MIN_TAU|nombre réel|Taux de remboursement modulé (hors parcours de Soins) (régime obligatoire)|||
|RGO_REM_TAU|nombre réel|Taux de remboursement (part Régime Obligatoire)|||
|RGO_THE_TAU|nombre réel|Taux de remboursement théorique (régime obligatoire)|||
|ETB_PRE_FIN|chaîne de caractères|N° FINESS de l'établissement prescripteur|||
|PFS_EXE_NUM|chaîne de caractères|N° du professionnel de santé exécutant|||
|PFS_EXE_NUMC|chaîne de caractères|N° PS exécutant (anonymisé)|||
|PFS_PRE_NUM|chaîne de caractères|N° du professionnel de santé prescripteur|||
|PFS_PRE_NUMC|chaîne de caractères|N° PS prescripteur (anonymisé)|||
|PRS_MTT_NUM|chaîne de caractères|Numéro du medecin traitant|||
|PRS_MTT_NUMC|chaîne de caractères|N° médecin traitant (anonymisé)|||
|PSE_ACT_NAT|nombre réel|Nature d'activité du professionnel de santé exécutant|||
|PSE_CNV_COD|nombre réel|Code convention du professionnel de santé exécutant|||
|PSE_REF_ADH|chaîne de caractères|Top prestation exécuté par un professionnel de santé adhérent à l'option référent|||
|PSE_SPE_COD|nombre réel|Spécialite médicale du professionnel de santé exécutant|||
|PSE_STJ_COD|nombre réel|Mode d'exercice du professionnel de santé exécutant|||
|PSP_ACT_NAT|nombre réel|Nature d'activite du professionnel de santé prescripteur|||
|PSP_CNV_COD|nombre réel|Code convention du professionnel de santé prescripteur|||
|PSP_PPS_NUM|chaîne de caractères|Numéro RPPS du prescripteur salarié|||
|PSP_PPS_NUMC|chaîne de caractères|Numéro RPPS du prescripteur (anonymisé)|||
|PSP_REF_ADH|chaîne de caractères|Top prestation prescrite par un professionnel de santé adhérent à l'option référent|||
|PSP_SPE_COD|nombre réel|Spécialité médicale du professionnel de santé prescripteur|||
|PSP_STJ_COD|nombre réel|Mode d'exercice du professionnel de santé prescripteur|||
|PSP_SVI_PPS|nombre réel|indicateur de fiabilité du numéro RPPS|||
|DCT_ORD_NUM|nombre réel|numéro d'ordre du décompte dans l'organisme|||
|FLX_DIS_DTD|date|Date de mise à disposition des données|||
|FLX_EMT_NUM|nombre réel|numéro d'émetteur du flux|||
|FLX_EMT_ORD|nombre réel|numéro de séquence du flux|||
|FLX_EMT_TYP|nombre réel|Type d'émetteur|||
|FLX_TRT_DTD|date|Date d'entrée des données dans le système d'information|||
|ORG_CLE_NUM|chaîne de caractères|organisme de liquidation des prestations (avant fusion des caisses)|||
|PRS_ORD_NUM|nombre réel|Numéro d'ordre de la prestation dans le décompte|||
|REM_TYP_AFF|nombre réel|type de remboursement affiné|||
