## Schéma

- Titre : chainage
<br />
- Clé primaire : `ETA_NUM_EPMSI`, `RIP_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RIP_NUM` => table [T_RIPaa_nnFB](/tables/T_RIPaa_nnFB) [ `ETA_NUM_EPMSI`, `RIP_NUM` ]<br />
`NIR_ANO_17` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20RIM-P/T_RIPaa_nnC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|
string|FINESS d’inscription e-PMSI||
`ETA_NUM_TWO`|
string|Second n° FINESS||
`FOR_NUM`|
string|N° format||
`FOR_NUM_HOSP`|
string|N° format VID-HOSP||
`ENT_MOI`|
string|Mois de la date d&#x27;entrée du séjour||
`ENT_ANN`|
string|Année de la date d&#x27;entrée du séjour||
`NIR_RET`|
boolean|Code retour contrôle « n° sécurité sociale »||
`NAI_RET`|
boolean|Code retour contrôle « date de  naissance »||
`SEX_RET`|
boolean|Code retour contrôle « sexe »||
`SEJ_RET`|
boolean|Code retour contrôle « n° d’identification administratif de séjour »||
`FHO_RET`|
boolean|Code retour « fusion ANO-HOSP et HOSP-PMSI »||
`PMS_RET`|
boolean|Code retour « fusion ANO-PMSI et fichier PMSI »||
`DAT_RET`|
boolean|Code retour contrôle « date de référence» (date d’entrée du séjour)||
`COH_NAI_RET`|
boolean|Code retour contrôle « Cohérence date naissance »||
`COH_SEX_RET`|
boolean|Code retour contrôle « Cohérence sexe »||
`NIR_ANO_17`|
string|N° anonyme||
`SEJ_NUM`|
string|N° de séjour||
`RIP_NUM`|
string|N° séquentiel dans fichier PMSI||
`ENT_DAT`|
date|Date d&#x27;entrée||
`SOR_DAT`|
date|Date de sortie||
`EXE_SOI_DTD`|
datetime|date d&#x27;entrée||
`EXE_SOI_DTF`|
datetime|date de sortie||
`EXE_SOI_AMD`|
string|Date d&#x27;entrée au format année + mois||
`EXE_SOI_AMF`|
string|Date de sortie au format année + mois||
`NUM_DAT_AT_RET`|
boolean|Code retour contrôle &quot; Numéro accident du travail ou date d’accident de droit commun&quot;||
`ORG_CPL_NUM_RET`|
boolean|Code retour contrôle &quot; N° d’organisme complémentaire&quot;||
`ETA_NUM_RET`|
boolean|Code retour contrôle «N° FINESS d’inscription e-PMSI«||
`NUM_DAT_AT`|
string|Numéro accident du travail ou date d’accident de droit commun||
`ORG_CPL_NUM`|
string|N° d’organisme complémentaire||
`ENT_AM`|
date|Date d&#x27;entrée au format année + mois||
`SOR_MOI`|
string|Mois de sortie||
`SOR_AM`|
date|Date de sortie au format année + mois||
`SOR_ANN`|
string|Année de sortie||

