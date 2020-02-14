## Schéma

- Titre : Table des NIR foinisé deux fois et date entrè/sortie complètes
<br />
- Clé primaire : `ETA_NUM_EPMSI`, `RHAD_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaa_nnB](/tables/T_HADaa_nnB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />
`NIR_ANO_17` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20HAD/T_HADaa_nnC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|
string|N° FINESS e-PMSI||
`ETA_NUM_GEO`|
string|Numéro FINESS de l’établissement (code géographique)||
`format`|
string|N° format||
`vid_hosp_for`|
string|N° format VID-HOSP||
`ENT_MOI`|
string|Mois d&#x27;entrée||
`ENT_ANN`|
string|Année d&#x27;entrée||
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
boolean|Contrôle de cohérence de date||
`COH_NAI_RET`|
boolean|Code retour controle date de naissance||
`COH_SEX_RET`|
boolean|code retour controle coherence sexe||
`NIR_ANO_17`|
string|N° anonyme||
`SEJ_NUM`|
string|N° de séjour||
`RHAD_NUM`|
string|N° séquentiel de séjour d&#x27;HAD||
`ENT_DAT`|
date|Date d&#x27;entrée||
`SOR_DAT`|
date|Date de sortie||
`EXE_SOI_DTD`|
date|Date d&#x27;entrée (format date)||
`EXE_SOI_DTF`|
date|Date de sortie (format date)||
`EXE_SOI_AMD`|
string|Date d&#x27;entrée au format année + mois||
`EXE_SOI_AMF`|
string|Date de sortie au format année + mois||
`RNG_NAI_RET`|
boolean|Code retour contrôle « Rang de naissance »||
`RNG_BEN_RET`|
boolean|Code retour contrôle « Rang du bénéficiaire »||
`RNG_NAI`|
string|Rang de naissance||
`RNG_BEN`|
string|Rang du bénéficiaire||
`NUM_DAT_AT_RET`|
boolean|Code retour contrôle &quot; Numéro accident du travail ou date d’accident de droit commun&quot;||
`ORG_CPL_NUM_RET`|
boolean|Code retour contrôle &quot; N° d’organisme complémentaire&quot;||
`ETA_NUM_RET`|
boolean|Code retour contrôle &quot;N° FINESS d’inscription e-PMSI&quot;||
`NUM_DAT_AT`|
string|Numéro accident du travail ou date d’accident de droit commun||
`ORG_CPL_NUM`|
string|N° d’organisme complémentaire||
`SEJ_LUN_ANN`|
string|Année de la date d&#x27;entrée de séjour||
`SEJ_LUN_MOI`|
string|Mois de la date d&#x27;entrée de séjour||
`SOR_AM`|
date|Date de sortie||
`ETA_NUM_JUR`|
string|N° FINESS de l’établissement (code géographique)||
`SOR_ANN`|
string|Année de sortie||
`SOR_MOI`|
string|Mois de sortie||
`ENT_AM`|
date|Date d&#x27;entrée||
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (code géographique)||

