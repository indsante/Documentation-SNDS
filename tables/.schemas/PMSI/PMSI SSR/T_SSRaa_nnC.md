## Schéma

- Titre : NIR patient et Dates de soin
<br />
- Clé primaire : `ETA_NUM`, `RHA_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RHA_NUM` => table [T_SSRaa_nnB](/tables/T_SSRaa_nnB) [ `ETA_NUM`, `RHA_NUM` ]<br />
`NIR_ANO_17` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20SSR/T_SSRaa_nnC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM`|
string|N° FINESS||
`MOI_LUN_1S`|
string|Mois du lundi de la première semaine du séjour dans l&#x27;année (SSR)||
`ANN_LUN_1S`|
string|Année du lundi de la première semaine du séjour dans l&#x27;année (SSR)||
`NIR_RET`|
boolean|Code retour contrôle &quot; n° sécurité sociale &quot;||
`NAI_RET`|
boolean|Code retour contrôle &quot; date de naissance &quot;||
`SEX_RET`|
boolean|Code retour contrôle &quot; sexe &quot;||
`SEJ_RET`|
boolean|Code retour contrôle &quot; n° d’identification administratif de séjour &quot;||
`FHO_RET`|
boolean|Code retour &quot;fusion ANO_HOSP et HOSP-PMSI&quot;||
`PMS_RET`|
boolean|Code retour &quot;fusion ANO-PMSI et fichier PMSI &quot;||
`DAT_RET`|
boolean|Code retour contrôle « date de référence» (date d’entrée)||
`COH_NAI_RET`|
boolean|Code retour contrôle « Cohérence date naissance »||
`COH_SEX_RET`|
boolean|Code retour contrôle « Cohérence sexe »||
`NIR_ANO_17`|
string|N° anonyme||
`SEJ_NUM`|
string|N° de séjour||
`RHA_NUM`|
string|N° Séquentiel du séjour||
`ENT_DAT`|
date|Date d&#x27;entrée||
`SOR_DAT`|
date|Date de sortie||
`EXE_SOI_AMD`|
string|Date d&#x27;entrée au format année + mois||
`EXE_SOI_AMF`|
string|Date de sortie au format année + mois||
`EXE_SOI_DTD`|
date|date d&#x27;entrée||
`EXE_SOI_DTF`|
date|date de sortie||
`NUM_DAT_AT_RET`|
boolean|Code retour contrôle &quot; Numéro accident du travail ou date d’accident de droit commun&quot;||
`ORG_CPL_NUM_RET`|
boolean|Code retour contrôle &quot; N° d’organisme complémentaire&quot;||
`NUM_DAT_AT`|
string|Numéro accident du travail ou date d’accident de droit commun||
`ORG_CPL_NUM`|
string|N° d’organisme complémentaire||
`ETA_NUM_RET`|
boolean|Code retour contrôle «N° FINESS d’inscription e-PMSI«||
`ENT_AM`|
date|Date d&#x27;entrée au format année + mois||
`SOR_MOI`|
string|Mois de sortie||
`SOR_AM`|
date|Date de sortie au format année + mois||
`SOR_ANN`|
string|Année de sortie||

