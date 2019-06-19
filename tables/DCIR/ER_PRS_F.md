# ER_PRS_F

prestations

- Clé primaire : `DCT_ORD_NUM, FLX_DIS_DTD, FLX_EMT_NUM, FLX_EMT_ORD, FLX_EMT_TYP, FLX_TRT_DTD, ORG_CLE_NUM, PRS_ORD_NUM, REM_TYP_AFF`

## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|BEN_AMA_COD|nombre réel|Age du beneficiaire en mois (< 2 ans) ou annees (>= 2 ans)|||
|BEN_CDI_NIR|chaîne de caractères|Code identification du NIR|||
|BEN_CMU_CAT|chaîne de caractères|Catégorie organisme complémentaire CMU|||
|BEN_CMU_ORG|chaîne de caractères|Organisme complémentaire CMU|||
|BEN_CMU_TOP|chaîne de caractères|Top bénéficiaire CMU Complémentaire (0 = non, 1 = oui, 2 = sans objet)|||
|BEN_DCD_AME|chaîne de caractères|Année et mois du décès du bénéficiaire (format AAAAMM)|||
|BEN_DCD_DTE|date|Date du décès du bénéficiaire (jour + mois + année)|||
|BEN_EHP_TOP|chaîne de caractères|Top patient hébergé en EHPAD (0 = non, 1 = oui, 2 = sans objet)|||
|BEN_IAT_CAT|chaîne de caractères|Catégorie du bénéficiaire (Invalidité / RAT)|||
|BEN_NAI_ANN|chaîne de caractères|Année de naissance du bénéficiaire (format AAAA)|||
|BEN_PAI_CMU|chaîne de caractères|Type de procédure de paiement CMU|||
|BEN_NIR_PSA|chaîne de caractères|Identifiant anonyme du bénéficiaire|||
|BEN_RNG_GEM|nombre réel|Rang de naissance du bénéficiaire|||
|BEN_QAF_COD|nombre réel|Qualité affinée du bénéficiaire|||
|BEN_RES_COM|chaîne de caractères|Commune de résidence du bénéficiaire|||
|BEN_RES_DPT|chaîne de caractères|Département de résidence du bénéficiaire|||
|BEN_SEX_COD|nombre réel|Sexe du bénéficiaire|||
|ORG_AFF_BEN|chaîne de caractères|Organisme d'affiliation du bénéficiaire|||
|PRS_REJ_TOP|chaîne de caractères|Rejet ou signalement|||
|EXE_SOI_AMD|chaîne de caractères|Année et mois de début soins/exécution  (format AAAAMM)|||
|EXE_SOI_AMF|chaîne de caractères|Année et mois de fin soins/exécution  (format AAAAMM)|||
|EXE_SOI_DTD|date|Date de début soins/exécution  (jour + mois + année)|||
|EXE_SOI_DTF|date|Date de fin soins/exécution  (jour + mois + année)|||
|PRE_PRE_AMD|chaîne de caractères|Année et mois de prescription (format AAAAMM)|||
|PRE_PRE_DTD|date|Date de prescription  (jour + mois + année)|||
|PRS_GRS_DTD|date|Date présumée de grossesse (jour + mois + année)|||
|PRS_HOS_AMD|chaîne de caractères|Année et mois début hospitalisation  (format AAAAMM)|||
|PRS_HOS_DTD|date|Date de début d'hospitalisation  (jour + mois + année)|||
|BSE_REM_BSE|nombre réel|Base de remboursement (acte de base)|||
|BSE_REM_MNT|nombre réel|Montant remboursé (acte de base)|||
|BSE_REM_PRU|nombre réel|Prix unitaire (acte de base)|||
|BSE_REM_SGN|nombre réel|Signe (acte de base)|||
|CPL_REM_BSE|nombre réel|Base de remboursement (complément d'acte)|||
|CPL_REM_MNT|nombre réel|Montant remboursé (complément d'acte)|||
|CPL_REM_PRU|nombre réel|Prix unitaire (complément d'acte)|||
|CPL_REM_SGN|nombre réel|Signe (complément d'acte)|||
|PRS_ACT_CFT|nombre réel|Coefficient (non signé) de l'acte|||
|PRS_ACT_COG|nombre réel|Coefficient global (signé) de l'acte|||
|PRS_ACT_NBR|nombre réel|Dénombrement (signé) des actes|||
|PRS_ACT_QTE|nombre réel|Quantité (signée) de l'acte|||
|PRS_DEP_MNT|nombre réel|Montant (signé) du dépassement|||
|PRS_ETA_RAC|nombre réel|Reste à charge de l’établissement|||
|PRS_PAI_MNT|nombre réel|Montant (signé) de la dépense|||
|RGO_MOD_MNT|nombre réel|Montant de la majoration de la participation de l'assuré (R. O.)|||
|ORB_BSE_NUM|chaîne de caractères|Organisme de base de l'affiliation du bénéficiaire|||
|ORL_BSE_NUM|chaîne de caractères|Organisme de base de liquidation des prestations|||
|RGM_COD|nombre réel|Petit régime d'affiliation|||
|RGM_GRG_COD|nombre réel|Grand régime de liquidation|||
|ACC_TIE_IND|nombre réel|Indication de tiers sur feuille de soins en cas d'accident (0 = non, 1 = oui, 2 = sans objet)|||
|BSE_FJH_TYP|nombre réel|Type prise en charge du forfait journalier (acte de base)|||
|BSE_PRS_NAT|nombre réel|Nature de la prestation (acte de base)|||
|CPL_AFF_COD|nombre réel|Code complément d'acte affiné|||
|CPL_ANO_COD|nombre réel|Code anomalie du complément affiné|||
|CPL_FJH_TYP|nombre réel|Type prise en charge FJ (complément d'acte)|||
|CPL_MAJ_TOP|nombre réel|Top complément et majoration|||
|CPL_PRS_NAT|nombre réel|Nature de prestation (complément d'acte)|||
|DPN_QLF|nombre réel|Qualificatif de la dépense|||
|DRG_MOD|nombre réel|Mode de règlement|||
|DRG_NAT|nombre réel|Nature de destinataire du règlement|||
|EXE_LIE_COD|nombre réel|Code lieu d'exécution|||
|EXO_MTF|nombre réel|Motif exonération TM|||
|IJR_EMP_NUM|chaîne de caractères|Numéro de l'employeur (IJ)|||
|IJR_RVL_NAT|chaîne de caractères|Nature de la revalorisation (IJ)|||
|MTM_NAT|nombre réel|Modulation du ticket modérateur|||
|ORG_CLE_NEW|chaîne de caractères|Organisme de liquidation des prestations (après fusion des caisses)|||
|PRE_REN_COD|chaîne de caractères|Type de renouvellement de la prescription (opticien / pharmacien)|||
|PRS_CRD_OPT|nombre réel|Top option de coordination|||
|PRS_DPN_QLP|nombre réel|Qualificatif de la dépense transmis|||
|PRS_NAT_REF|nombre réel|Nature de la prestation de référence|||
|PRS_OPS_TRF|nombre réel|Indicateur de tarif opposable|||
|PRS_PDS_QCP|nombre réel|Qualificatif du parcours de soins calculé|||
|PRS_PDS_QTP|nombre réel|Qualificatif du parcours de soins transmis|||
|PRS_PPF_COD|chaîne de caractères|Code participation forfaitaire|||
|PRS_PRE_MTT|nombre réel|Origine de la prescription|||
|PRS_REF_KIN|chaîne de caractères|Indicateur Référentiel Entente Préalable kinésithérapie|||
|PRS_TOP_ENP|nombre réel|Indicateur Top Entente Préalable|||
|PRS_TYP_KIN|chaîne de caractères|Type de prestation de kinésithérapie|||
|RGO_ASU_NAT|nombre réel|Nature de l'assurance (R. O.)|||
|RGO_ENV_TYP|nombre réel|Type d'enveloppe (R. O.)|||
|RGO_FTA_COD|nombre réel|Code forçage du taux (R. O.)|||
|RGO_MIN_TAU|nombre réel|Taux de remboursement modulé (R. O.)|||
|RGO_REM_TAU|nombre réel|Taux de remboursement (R. O.)|||
|RGO_THE_TAU|nombre réel|Taux de remboursement théorique (R. O.)|||
|ETB_PRE_FIN|chaîne de caractères|N° FINESS géographique établissement prescripteur|||
|PFS_EXE_NUM|chaîne de caractères|N° PS exécutant|||
|PFS_EXE_NUMC|chaîne de caractères|N° PS exécutant (anonymisé)|||
|PFS_PRE_NUM|chaîne de caractères|N° PS prescripteur|||
|PFS_PRE_NUMC|chaîne de caractères|N° PS prescripteur (anonymisé)|||
|PRS_MTT_NUM|chaîne de caractères|N° médecin traitant|||
|PRS_MTT_NUMC|chaîne de caractères|N° médecin traitant (anonymisé)|||
|PSE_ACT_NAT|nombre réel|Nature d'activité du PS exécutant|||
|PSE_CNV_COD|nombre réel|Code convention du PS exécutant|||
|PSE_REF_ADH|chaîne de caractères|Top PS exécutant référent|||
|PSE_SPE_COD|nombre réel|Spécialité médicale PS exécutant|||
|PSE_STJ_COD|nombre réel|Mode d'exercice du PS exécutant|||
|PSP_ACT_NAT|nombre réel|Nature d'activité du PS prescripteur|||
|PSP_CNV_COD|nombre réel|Code convention du PS prescripteur|||
|PSP_PPS_NUM|chaîne de caractères|Numéro RPPS du prescripteur|||
|PSP_PPS_NUMC|chaîne de caractères|Numéro RPPS du prescripteur (anonymisé)|||
|PSP_REF_ADH|chaîne de caractères|Top prestation prescrite par un professionnel de santé adhérent à l'option référent (0 = non, 1 = oui, 2 = non disponible)|||
|PSP_SPE_COD|nombre réel|Spécialité médicale PS prescripteur|||
|PSP_STJ_COD|nombre réel|Mode d'exercice du PS prescripteur|||
|PSP_SVI_PPS|nombre réel|Indicateur fiabilite du numero RPPS|||
|DCT_ORD_NUM|nombre réel|N° ordre décompte dans caisse                      1|||
|FLX_DIS_DTD|date|Date de mise à disposition des données dans SI     2|||
|FLX_EMT_NUM|nombre réel|N° émetteur du flux                                                  3|||
|FLX_EMT_ORD|nombre réel|N° séquence du flux                                               4|||
|FLX_EMT_TYP|nombre réel|Type d'émetteur                                                      5|||
|FLX_TRT_DTD|date|Date de traitement des données dans SI                   6|||
|ORG_CLE_NUM|chaîne de caractères|Ancien concept de l'organisme de liquidation (avant fusion, jusqu’au jour J de la fusion)          7|||
|PRS_ORD_NUM|nombre réel|N° ordre prestation dans décompte                 8|||
|REM_TYP_AFF|nombre réel|Type de remboursement affiné                                 9|||
