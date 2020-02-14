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
`ETA_NUM_EPMSI`|chaîne de caractères|N° FINESS e-PMSI||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS de l’établissement (code géographique)||
`format`|chaîne de caractères|N° format||
`vid_hosp_for`|chaîne de caractères|N° format VID-HOSP||
`ENT_MOI`|date|Mois d&#x27;entrée||
`ENT_ANN`|année|Année d&#x27;entrée||
`NIR_RET`|booléen|Code retour contrôle &quot; n° sécurité sociale &quot;||
`NAI_RET`|booléen|Code retour contrôle &quot; date de naissance &quot;||
`SEX_RET`|booléen|Code retour contrôle &quot; sexe &quot;||
`SEJ_RET`|booléen|Code retour contrôle &quot; n° d’identification administratif de séjour &quot;||
`FHO_RET`|booléen|Code retour &quot;fusion ANO_HOSP et HOSP-PMSI&quot;||
`PMS_RET`|booléen|Code retour &quot;fusion ANO-PMSI et fichier PMSI &quot;||
`DAT_RET`|booléen|Contrôle de cohérence de date||
`COH_NAI_RET`|booléen|Code retour controle date de naissance||
`COH_SEX_RET`|booléen|code retour controle coherence sexe||
`NIR_ANO_17`|chaîne de caractères|N° anonyme||
`SEJ_NUM`|chaîne de caractères|N° de séjour||
`RHAD_NUM`|chaîne de caractères|N° séquentiel de séjour d&#x27;HAD||
`ENT_DAT`|date|Date d&#x27;entrée||
`SOR_DAT`|date|Date de sortie||
`EXE_SOI_DTD`|date|Date d&#x27;entrée (format date)||
`EXE_SOI_DTF`|date|Date de sortie (format date)||
`EXE_SOI_AMD`|année et mois|Date d&#x27;entrée au format année + mois||
`EXE_SOI_AMF`|chaîne de caractères|Date de sortie au format année + mois||
`RNG_NAI_RET`|booléen|Code retour contrôle « Rang de naissance »||
`RNG_BEN_RET`|booléen|Code retour contrôle « Rang du bénéficiaire »||
`RNG_NAI`|chaîne de caractères|Rang de naissance||
`RNG_BEN`|chaîne de caractères|Rang du bénéficiaire||
`NUM_DAT_AT_RET`|booléen|Code retour contrôle &quot; Numéro accident du travail ou date d’accident de droit commun&quot;||
`ORG_CPL_NUM_RET`|booléen|Code retour contrôle &quot; N° d’organisme complémentaire&quot;||
`ETA_NUM_RET`|booléen|Code retour contrôle &quot;N° FINESS d’inscription e-PMSI&quot;||
`NUM_DAT_AT`|chaîne de caractères|Numéro accident du travail ou date d’accident de droit commun||
`ORG_CPL_NUM`|chaîne de caractères|N° d’organisme complémentaire||
`SEJ_LUN_ANN`|année|Année de la date d&#x27;entrée de séjour||
`SEJ_LUN_MOI`|date|Mois de la date d&#x27;entrée de séjour||
`SOR_AM`|date|Date de sortie||
`ETA_NUM_JUR`|chaîne de caractères|N° FINESS de l’établissement (code géographique)||
`SOR_ANN`|année|Année de sortie||
`SOR_MOI`|date|Mois de sortie||
`ENT_AM`|date|Date d&#x27;entrée||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (code géographique)||

