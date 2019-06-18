# NS_PRS_F

prestations

- Clé primaire : `CLE_DCI_JNT`

## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|ACC_TIE_IND|nombre réel|Top tiers responsable accident|||
|AR1_ASU_NAT|nombre réel|Nature d'assurance autre régime que régime obligatoire (ARO) - 1ère occurrence|||
|AR1_REM_BSE|nombre réel|Base de remboursement autre régime que régime obligatoire (ARO) - 1ère occurrence|||
|AR1_REM_MNT|nombre réel|Montant remboursé autre régime que régime obligatoire (ARO) - 1ère occurrence|||
|AR1_REM_TYP|nombre réel|Type de remboursement autre régime que régime obligatoire (ARO) - 1ère occurrence|||
|AR2_ASU_NAT|nombre réel|Nature d'assurance autre régime que régime obligatoire (ARO) - 2ème occurrence|||
|AR2_REM_BSE|nombre réel|Base de remboursement autre régime que régime obligatoire (ARO) - 2ème occurrence|||
|AR2_REM_MNT|nombre réel|Montant remboursé autre régime que régime obligatoire (ARO) - 2ème occurrence|||
|AR2_REM_TYP|nombre réel|Type de remboursement autre régime que régime obligatoire (ARO) - 2ème occurrence|||
|AR3_ASU_NAT|nombre réel|Nature d'assurance autre régime que régime obligatoire (ARO) - 3ème occurrence|||
|AR3_REM_BSE|nombre réel|Base de remboursement autre régime que régime obligatoire (ARO) - 3ème occurrence|||
|AR3_REM_MNT|nombre réel|Montant remboursé autre régime que régime obligatoire (ARO) - 3ème occurrence|||
|AR3_REM_TYP|nombre réel|Type de remboursement autre régime que régime obligatoire (ARO) - 3ème occurrence|||
|ASS_PAF_MNT|nombre réel|Montant des franchises et des participations forfaitaires de l'assuré|||
|BEN_AMA_COD|nombre réel|Age du bénéficiaire en mois (si < 2 ans) ou années (si >= 2 ans)|||
|BEN_CDI_NIR|chaîne de caractères|Code d'identification du NIR|||
|BEN_CMU_ORG|chaîne de caractères|Code de l'organisme complémentaire|||
|BEN_CMU_TOP|chaîne de caractères|Top bénéficiaire de la CMU complémentaire|||
|BEN_CTA_TYP|nombre réel|Type de contrat complémentaire|||
|BEN_EHP_TOP|chaîne de caractères|Identification hospitalisation en EHPAD ou en EMS|||
|BEN_IDT_ANO|chaîne de caractères|Identifiant bénéficiaire anonymisé|||
|BEN_IDT_TOP|nombre réel|Top identifiant bénéficiaire Anonymisé|||
|BEN_QAF_COD|nombre réel|Qualité du matricule de l'ouvreur de droits|||
|BEN_RES_COM|chaîne de caractères|Commune de résidence du bénéficiaire|||
|BEN_RES_DPT|chaîne de caractères|Département de résidence du bénéficiaire|||
|BSE_REM_BSE|nombre réel|Base de remboursement de l'acte de base|||
|BSE_REM_MNT|nombre réel|Montant remboursé pour l'acte de base|||
|CAI_AFF_COD|chaîne de caractères|Code de la caisse d'affiliation|||
|CAI_LIQ_COD|chaîne de caractères|Code de la caisse de liquidation|||
|CLE_DCI_JNT|chaîne de caractères|Clé technique de jointure|||
|CPM_REM_BSE|nombre réel|Base de remboursement des compléments d'actes et majorations (hors participations de l'assuré)|||
|CPM_REM_MNT|nombre réel|Montant remboursé pour les compléments d'actes et majorations|||
|DDP_COD|nombre réel|Code de la discipline de prestation (ou discipline médico tarifaire)|||
|DPN_QLF|nombre réel|Qualificatif de la dépense|||
|DRG_AFF_NAT|chaîne de caractères|Code affiné du destinataire du règlement|||
|DRG_NAT|nombre réel|Code du destinataire du règlement|||
|DRT_ACS_TOP|chaîne de caractères|Top bénéficiaire ACS|||
|ETB_EXE_FIN|chaîne de caractères|N° FINESS de l'établissement exécutant|||
|ETB_PRE_FIN|chaîne de caractères|N° FINESS de l'établissement prescripteur|||
|ETE_CAT_COD|nombre réel|Catégorie de l'établissement exécutant|||
|ETE_DPT_COD|chaîne de caractères|Département de l'établissement exécutant|||
|ETE_GHS_NUM|nombre réel|Numéro du GHS|||
|ETE_IND_TAA|nombre réel|Indicateur TAA|||
|ETE_MCO_DDP|chaîne de caractères|Code discipline MCO établissement exécutant|||
|ETE_TYP_COD|nombre réel|Code du type de l'établissement exécutant|||
|ETP_DPT_COD|chaîne de caractères|Departement de l'établissement prescripteur|||
|EXE_CTX_BEN|chaîne de caractères|Contexte Bénéficiaire|||
|EXE_CTX_PFS|chaîne de caractères|Contexte Professionnel de Santé|||
|EXE_INS_DPT|chaîne de caractères|Département du professionnel de santé exécutant|||
|EXE_SOI_AMD|chaîne de caractères|Date (année et mois) de début d'exécution des soins|||
|EXE_SOI_AMF|chaîne de caractères|Date (année et mois) de fin d'exécution des soins|||
|EXE_SOI_DTD|date|Date de début d'exécution des soins|||
|EXE_SOI_DTF|date|Date de fin d'exécution des soins|||
|EXO_MTF|nombre réel|Motif d'exonération du ticket modérateur|||
|FLX_DIS_DTD|date|Date de mise à disposition des données|||
|FLX_EMT_TYP|nombre réel|Type d'émetteur|||
|FLX_TRT_DTD|date|Date d'entrée des données dans le système d'information|||
|GRG_AFF_COD|chaîne de caractères|Code du grand régime d'affiliation|||
|GRG_LIQ_COD|chaîne de caractères|Grand régime de liquidation|||
|IJR_RVL_NAT|chaîne de caractères|Nature de la revalorisation (indemnités journalières)|||
|MDT_COD|nombre réel|Code du mode de traitement|||
|MFT_COD|nombre réel|Code du mode de fixation des tarifs|||
|MTM_NAT|nombre réel|Modulation du ticket modérateur|||
|PFS_EXE_NUM|chaîne de caractères|N° du professionnel de santé exécutant|||
|PFS_PRE_NUM|chaîne de caractères|N° du professionnel de santé prescripteur|||
|PRE_INS_DPT|chaîne de caractères|Département du professionnel de santé prescripteur|||
|PRE_PRE_AMD|chaîne de caractères|Date (année et mois) de prescription|||
|PRE_PRE_DTD|date|Date de prescription|||
|PRS_ACT_COG|nombre réel|Coefficient global de l'acte de base|||
|PRS_ACT_NBR|nombre réel|Dénombrement des actes de base|||
|PRS_ACT_QTE|nombre réel|Quantité de l'acte de base|||
|PRS_DEP_MNT|nombre réel|Montant global du dépassement|||
|PRS_DIS_PRE|chaîne de caractères|Dispositif de prévention|||
|PRS_DRA_AME|chaîne de caractères|Date réelle (année et mois) de l'accouchement|||
|PRS_GRS_DTD|date|Date présumée de Grossesse|||
|PRS_HOS_AMD|chaîne de caractères|Date (année et mois) de début d'hospitalisation|||
|PRS_HOS_DTD|date|Date de début d'hospitalisation|||
|PRS_MTT_NUM|chaîne de caractères|Numéro du medecin traitant|||
|PRS_NAT_REF|nombre réel|Code de la prestation de référence|||
|PRS_PAI_MNT|nombre réel|Montant global de la dépense|||
|PRS_PDS_QCP|nombre réel|Code qualificatif du parcours de soins|||
|PRS_PPU_SEC|nombre réel|Code privé / public de la prestation|||
|PRS_PRE_MTT|nombre réel|Code origine de la prescription|||
|PSE_ACT_NAT|nombre réel|Nature d'activité du professionnel de santé exécutant|||
|PSE_ACT_SPE|nombre réel|Spécialité ou nature d'activité du professionnel de santé exécutant|||
|PSE_CNV_COD|nombre réel|Code convention du professionnel de santé exécutant|||
|PSE_SPE_COD|nombre réel|Spécialite médicale du professionnel de santé exécutant|||
|PSE_STJ_COD|nombre réel|Mode d'exercice du professionnel de santé exécutant|||
|PSP_ACT_NAT|nombre réel|Nature d'activite du professionnel de santé prescripteur|||
|PSP_ACT_SPE|nombre réel|Spécialité ou nature d'activité du professionnel de santé prescripteur|||
|PSP_CNV_COD|nombre réel|Code convention du professionnel de santé prescripteur|||
|PSP_PPS_NUM|chaîne de caractères|Numéro RPPS du prescripteur salarié|||
|PSP_SPE_COD|nombre réel|Spécialité médicale du professionnel de santé prescripteur|||
|PSP_STJ_COD|nombre réel|Mode d'exercice du professionnel de santé prescripteur|||
|RGM_COD|nombre réel|Code du petit régime|||
|RGO_ASU_NAT|nombre réel|Nature d'assurance (régime obligatoire)|||
|RGO_ENV_TYP|nombre réel|Type d'enveloppe (régime obligatoire)|||
|RGO_REM_TAU|nombre réel|Taux de remboursement (part Régime Obligatoire)|||
|SLM_AFF_COD|chaîne de caractères|Code de la SLM|||
|TOT_REM_BSE|nombre réel|Base totale de remboursement de l'acte (base et compléments/majo hors PAF)|||
|TOT_REM_MNT|nombre réel|Montant total remboursé pour l'acte (base et compléments/majo et participations de l'assuré)|||
