## Schéma

- Titre : NIR patient et Dates de soin
<br />
- Clé primaire : `ETA_NUM`, `RSA_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RSA_NUM` => table [T_MCOaa_nnB](/tables/T_MCOaa_nnB) [ `ETA_NUM`, `RSA_NUM` ]<br />
`NIR_ANO_17` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20MCO/T_MCOaa_nnC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`COH_NAI_RET`|
boolean|Code retour contrôle « Cohérence date naissance »||
`COH_SEX_RET`|
boolean|Code retour contrôle « Cohérence sexe »||
`DAT_RET`|
boolean|Code retour contrôle « date de référence» (date d&#x27;entrée)||
`ENT_DAT`|
date|date d&#x27;entrée||
`ETA_NUM`|
string|Numéro FINESS e-PMSI||
`ETA_NUM_RET`|
boolean|Code retour contrôle &quot;N° FINESS d’inscription e-PMSI&quot;||
`EXE_SOI_AMD`|
string|Date d&#x27;entrée au format année + mois||
`EXE_SOI_AMF`|
string|Date de sortie au format année + mois||
`EXE_SOI_DTD`|
date|Date d&#x27;entrée (date)||
`EXE_SOI_DTF`|
date|Date de sortie (date)||
`FHO_RET`|
boolean|Code retour « fusion ANO HOSP et HOSP PMSI »||
`FOR_NUM`|
string|N° format||
`HOS_NN_MAM`|
string|Hospitalisation d&#x27;un nouveau-né auprès de la mère||
`HOS_NNE_RET`|
boolean|Code retour contrôle « Hospitalisation d&#x27;un nouveau-né auprès de la mère »||
`HOS_ORG_RET`|
boolean|Code retour contrôle « Hospitalisation pour prélèvement d&#x27;organe »||
`HOS_PLO`|
string|Hospitalisation pour prélèvement d&#x27;organe||
`NAI_RET`|
boolean|Code retour contrôle « date de naissance »||
`NIR_ANO_17`|
string|N° anonyme||
`NIR_ANO_MAM`|
string|N° anonyme mère-enfant||
`NIR_RET`|
boolean|Code retour contrôle « n° sécurité sociale »||
`NUM_DAT_AT`|
string|Numéro accident du travail ou date d’accident de droit commun||
`NUM_DAT_AT_RET`|
boolean|Code retour contrôle &quot; Numéro accident du travail ou date d’accident de droit commun&quot;||
`ORG_CPL_NUM`|
string|N° d’organisme complémentaire||
`ORG_CPL_NUM_RET`|
boolean|Code retour contrôle &quot; N° d’organisme complémentaire&quot;||
`PMS_RET`|
boolean|Code retour « fusion ANO PMSI et fichier PMSI »||
`RNG_BEN`|
string|Rang du bénéficiaire||
`RNG_BEN_RET`|
boolean|Code retour contrôle « Rang du bénéficiaire »||
`RNG_NAI`|
string|Rang de naissance||
`RNG_NAI_RET`|
boolean|Code retour contrôle « Rang de naissance »||
`RSA_NUM`|
string|N° séquentiel dans fichier PMSI||
`SEJ_MER_RET`|
boolean|Code retour contrôle « N° administratif de séjour de la mère »||
`SEJ_NUM`|
string|N° de séjour||
`SEJ_RET`|
boolean|Code retour contrôle « n° d’identification administratif de séjour »||
`SEX_RET`|
boolean|Code retour contrôle « sexe »||
`SOR_ANN`|
string|Année de sortie||
`SOR_DAT`|
date|date de sortie||
`SOR_MOI`|
string|Mois de sortie||
`VID_HOSP_FOR`|
string|N° format VID-HOSP||
`ENT_AM`|
date|Date d&#x27;entrée au format année + mois||
`SOR_AM`|
date|Date de sortie au format année + mois||

