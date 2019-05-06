# IR_BEN_R

Référentiel des bénéficiaires (DCIR)

- Clé primaire : `BEN_NIR_PSA, BEN_RNG_GEM`

## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|BEN_NIR_PSA|chaîne de caractères|Identifiant SNIIRAM anonymisé du bénéficiaire||Valeur unique|
|BEN_RNG_GEM|nombre réel|Rang gémélaire|||
|BEN_NIR_ANO|chaîne de caractères|NIR anonymisé du bénéficiaire|||
|BEN_IDT_ANO|chaîne de caractères|Identifiant synthétique anonymisé du bénéficiaire||Valeur unique|
|BEN_IDT_TOP|nombre réel|Top associé à ben_idt_ano|||
|ASS_NIR_ANO|chaîne de caractères|Matricule anonymisé de l'ouvreur de droits|||
|BEN_IDT_MAJ|date|Date d'alimentation du NIR BEN_NIR_NAO|||
|BEN_CDI_NIR|chaîne de caractères|Qualité du matricule de l'ouvreur de droits|||
|BEN_NAI_ANN|chaîne de caractères|Année de naissance du bénéficiaire|||
|BEN_NAI_MOI|chaîne de caractères|Mois de naissance du bénéficiaire|||
|BEN_SEX_COD|nombre réel|Code sexe du bénéficiaire|||
|BEN_DCD_DTE|date|Date de décès du bénéficiaire|||
|BEN_DCD_AME|chaîne de caractères|Année et mois de décès du bénéficiaire|||
|ORG_AFF_BEN|chaîne de caractères|Organisme d'affiliation|||
|BEN_RES_DPT|chaîne de caractères|Département de résidence du destinataire du règlement|||
|BEN_RES_COM|chaîne de caractères|commune de résidence du destinataire du règlement|||
|BEN_TOP_CNS|nombre réel|top consommant / non consommant|||
|MAX_TRT_DTD|date|date maximale de traitement d'une prestation|||
|ORG_CLE_NEW|chaîne de caractères|organisme de liquidation|||
|BEN_DTE_INS|date|date d'insertion dans le référentiel|||
|BEN_DTE_MAJ|date|date de mise à jour|||
