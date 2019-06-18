# T_SSRaa_nnC

NIR patient et Dates de soin

Champ : Public et Privé

- Clé primaire : `ETA_NUM, RHA_NUM`

## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|ETA_NUM|chaîne de caractères|N° FINESS |||
|MOI_LUN_1S|chaîne de caractères|Mois du lundi de la première semaine du séjour dans l'année (SSR) |||
|ANN_LUN_1S|chaîne de caractères|Année du lundi de la première semaine du séjour dans l'année (SSR)|||
|NIR_RET|chaîne de caractères|Code retour contrôle « n° sécurité sociale « |||
|NAI_RET|chaîne de caractères|Code retour contrôle « date de naissance « |||
|SEX_RET|chaîne de caractères|Code retour contrôle « sexe « |||
|SEJ_RET|chaîne de caractères|Code retour contrôle « n° d’identification administratif de séjour « |||
|FHO_RET|chaîne de caractères|Code retour «fusion ANO_HOSP et HOSP-PMSI«|||
|PMS_RET|chaîne de caractères|Code retour «fusion ANO-PMSI et fichier PMSI «|||
|DAT_RET|chaîne de caractères|Code retour contrôle « date de référence» (date d’entrée)|||
|COH_NAI_RET|chaîne de caractères|Code retour contrôle « Cohérence date naissance »|||
|COH_SEX_RET|chaîne de caractères|Code retour contrôle « Cohérence sexe »|||
|NIR_ANO_17|chaîne de caractères|N° anonyme |||
|SEJ_NUM|chaîne de caractères|N° de séjour |||
|RHA_NUM|chaîne de caractères|N° Séquentiel du séjour|||
|ENT_DAT|chaîne de caractères|Date d'entrée|||
|SOR_DAT|chaîne de caractères|Date de sortie|||
|EXE_SOI_AMD|chaîne de caractères|Date d'entrée au format année + mois|||
|EXE_SOI_AMF|chaîne de caractères|Date de sortie au format année + mois|||
|EXE_SOI_DTD|date|date d'entrée|||
|EXE_SOI_DTF|date|date de sortie|||
|NUM_DAT_AT_RET|chaîne de caractères|Code retour contrôle « Numéro accident du travail ou date d’accident de droit commun«|||
|ORG_CPL_NUM_RET|chaîne de caractères|Code retour contrôle « N° d’organisme complémentaire«|||
|NUM_DAT_AT|chaîne de caractères|Numéro accident du travail ou date d’accident de droit commun|||
|ORG_CPL_NUM|chaîne de caractères|N° d’organisme complémentaire|||
|ETA_NUM_RET|chaîne de caractères|Code retour contrôle «N° FINESS d’inscription e-PMSI«|||
