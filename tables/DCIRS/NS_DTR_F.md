# NS_DTR_F

affinage des actes de transport 


## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|CLE_DCI_JNT|chaîne de caractères|Clé technique de jointure|||
|BEN_IDT_ANO|chaîne de caractères|Identifiant bénéficiaire anonymisé|||
|BEN_IDT_TOP|nombre réel|Top identifiant bénéficiaire Anonymisé|||
|EXE_SOI_DTD|date|Date de début d'exécution des soins|||
|EXE_SOI_DTF|date|Date de fin d'exécution des soins|||
|EXE_SOI_AMD|chaîne de caractères|Date (année et mois) de début d'exécution des soins|||
|EXE_SOI_AMF|chaîne de caractères|Date (année et mois) de fin d'exécution des soins|||
|PFS_EXE_NUM|chaîne de caractères|N° du professionnel de santé exécutant|||
|PFS_PRE_NUM|chaîne de caractères|N° du professionnel de santé prescripteur|||
|GRG_LIQ_COD|chaîne de caractères|Code du grand régime de liquidation|||
|CAI_LIQ_COD|chaîne de caractères|Code de la caisse de liquidation|||
|PRS_NAT_REF|nombre réel|Code de la prestation de référence|||
|ETB_PRE_FIN|chaîne de caractères|N° FINESS de l'établissement prescripteur|||
|ETB_EXE_FIN|chaîne de caractères|N° FINESS de l'établissement exécutant|||
|RGO_REM_TAU|nombre réel|Taux de remboursement (part Régime Obligatoire)|||
|GRG_AFF_COD|chaîne de caractères|Code du grand régime d'affiliation|||
|CAI_AFF_COD|chaîne de caractères|Code de la caisse d'affiliation|||
|SLM_AFF_COD|chaîne de caractères|Code de la SLM|||
|FLX_TRT_DTD|date|Date d'entrée des données dans le système d'information|||
|FLX_DIS_DTD|date|Date de mise à disposition des données|||
|FLX_EMT_TYP|nombre réel|Type d'émetteur|||
|EXE_INS_DPT|chaîne de caractères|Département du professionnel de santé exécutant|||
|PRE_INS_DPT|chaîne de caractères|Département du professionnel de santé prescripteur|||
|ETE_DPT_COD|chaîne de caractères|Département de l'établissement exécutant|||
|ETP_DPT_COD|chaîne de caractères|Departement de l'établissement prescripteur|||
|BEN_RES_DPT|chaîne de caractères|Département de résidence du bénéficiaire|||
|DTR_SEQ_NUM|nombre réel|Numéro séquentiel|||
|TRS_PRS_IDE|nombre réel|Code affiné du transport (forfait, km, majoration, supplément…)|||
|TRS_ACT_PRU|nombre réel|Prix unitaire du code affiné du transport|||
|TRS_TRS_MTF|nombre réel|Motif du transport|||
|TRS_ACT_QSN|nombre réel|Nombre de Km facturés ou de forfaits ou de majorations ou de suppléments|||
