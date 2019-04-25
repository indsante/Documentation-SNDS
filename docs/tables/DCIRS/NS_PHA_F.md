# NS_PHA_F

affinage des actes de pharmacie (officine de ville)


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
|PHA_SEQ_NUM|nombre réel|Numéro séquentiel|||
|PHA_PRS_C13|nombre réel|Code CIP de la pharmacie de ville (13 caractères)|||
|PHA_PRS_IDE|nombre réel|Code CIP de la pharmacie de ville (ancien code sur 7 caractères)|||
|PHA_ACT_PRU|nombre réel|Prix unitaire du médicament codé en CIP|||
|PHA_CPA_PCP |chaîne de caractères|Condition particulière de prise en charge|||
|PHA_DEC_PRU |nombre réel|Prix unitaire de l'unité délivrée|||
|PHA_DEC_TOP|chaîne de caractères|Top déconditionnement|||
|PHA_IDE_CPL|nombre réel|Préfixe du code CIP|||
|PHA_MOD_PRN|chaîne de caractères|Mode de prescription|||
|PHA_SEQ_RNV|nombre réel|Séquence de renouvellement|||
|PHA_SUB_MTF|nombre réel|Motif de substitution du médicament|||
|PHA_ACT_QSC|nombre réel|Nombre de conditionnements (boite, etc.)|||
|PHA_DEC_QSD |nombre réel|Nombre d'unités délivrées (comprimés, etc.) si déconditionnement|||
