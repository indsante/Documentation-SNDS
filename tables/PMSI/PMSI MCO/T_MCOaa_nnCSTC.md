# T_MCOaa_nnCSTC

ACE NIR/date

- Clé primaire : `ETA_NUM, SEQ_NUM`

## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|ENT_DAT|date (format `%d%m%Y`)|Date d'entrée|||
|ENT_DAT_RET|booléen|Code retour contrôle « date de référence» (date d'entrée)|||
|ETA_NUM|chaîne de caractères|N° FINESS|||
|EXE_SOI_AMD|chaîne de caractères|Date d'entrée au format année + mois|||
|EXE_SOI_AMF|chaîne de caractères|Date de sortie au format année + mois|||
|EXE_SOI_DTD|date|Date d'entrée|||
|EXE_SOI_DTF|date|Date de sortie|||
|IAS_RET|booléen|Code retour contrôle « n° d'identification administratif de séjour »|||
|NAI_RET|booléen|Code retour contrôle « date de naissance »|||
|NIR_ANO_17|chaîne de caractères|N° Anonyme du patient|||
|NIR_RET|booléen|Code retour contrôle « n° sécurité sociale »|||
|RNG_BEN|chaîne de caractères|Rang du bénéficiaire|||
|RNG_NAI|chaîne de caractères|Rang de naissance|||
|SEJ_NUM|chaîne de caractères|N° de séjour|||
|SEQ_NUM|chaîne de caractères|N° séquentiel|||
|SEX_RET|booléen|Code retour contrôle « sexe »|||
|SOR_DAT|date (format `%d%m%Y`)|Date de sortie|||
|RAC_MNT_PAT_RET|booléen|Code retour contrôle « Montant total du séjour facturé au patient «|||
|NBR_REJET_AMO_RET|booléen|Code retour contrôle « Rejet AMO «|||
|FAC_AMO_DT_RET|booléen|Code retour contrôle « Date de facturation AMO «|||
|FAC_AMC_DT_RET|booléen|Code retour contrôle « Date de facturation AMC «|||
|FAC_RAC_DT_RET|booléen|Code retour contrôle « Date de facturation patient «|||
|PAI_AMO_DT_RET|booléen|Code retour contrôle « Date de paiement AMO «|||
|PAI_AMC_DT_RET|booléen|Code retour contrôle « Date de paiement AMC «|||
|PAI_RAC_DT_RET|booléen|Code retour contrôle « Date de paiement patient «|||
|VALID_FAC_AMO_RET|booléen|Code retour contrôle « Statut FT AMO «|||
|VALID_FAC_AMC_RET|booléen|Code retour contrôle « Statut FT AMC «|||
|VALID_FAC_RAC_RET|booléen|Code retour contrôle « Statut FT patient «|||
|PAYS_ASS_PAT_RET|booléen|Code retour contrôle « Pays d’assurance social «|||
|RAC_MNT_PAT|nombre réel|Montant total du séjour facturé au patient|||
|NBR_REJET_AMO|chaîne de caractères|Rejet AMO|||
|FAC_AMO_DT|chaîne de caractères|Date de facturation AMO|||
|FAC_AMC_DT|chaîne de caractères|Date de facturation AMC|||
|FAC_RAC_DT|chaîne de caractères|Date de facturation patient|||
|PAI_AMO_DT|chaîne de caractères|Date de paiement AMO|||
|PAI_AMC_DT|chaîne de caractères|Date de paiement AMC|||
|PAI_RAC_DT|chaîne de caractères|Date de paiement patient|||
|VALID_FAC_AMO|chaîne de caractères|Statut FT AMO|||
|VALID_FAC_AMC|chaîne de caractères|Statut FT AMC|||
|VALID_FAC_RAC|chaîne de caractères|Statut FT patient|||
|PAYS_ASS_PAT|chaîne de caractères|Pays d’assurance social|||
|ENT_AM|date|Date d'entrée au format année + mois|||
|SOR_AM|date|Date de sortie au format année + mois|||
