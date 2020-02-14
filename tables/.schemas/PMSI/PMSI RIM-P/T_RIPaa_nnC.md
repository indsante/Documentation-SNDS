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
`ETA_NUM_EPMSI`|chaîne de caractères|FINESS d’inscription e-PMSI||
`ETA_NUM_TWO`|chaîne de caractères|Second n° FINESS||
`FOR_NUM`|chaîne de caractères|N° format||
`FOR_NUM_HOSP`|chaîne de caractères|N° format VID-HOSP||
`ENT_MOI`|date|Mois de la date d&#x27;entrée du séjour||
`ENT_ANN`|année|Année de la date d&#x27;entrée du séjour||
`NIR_RET`|booléen|Code retour contrôle « n° sécurité sociale »||
`NAI_RET`|booléen|Code retour contrôle « date de  naissance »||
`SEX_RET`|booléen|Code retour contrôle « sexe »||
`SEJ_RET`|booléen|Code retour contrôle « n° d’identification administratif de séjour »||
`FHO_RET`|booléen|Code retour « fusion ANO-HOSP et HOSP-PMSI »||
`PMS_RET`|booléen|Code retour « fusion ANO-PMSI et fichier PMSI »||
`DAT_RET`|booléen|Code retour contrôle « date de référence» (date d’entrée du séjour)||
`COH_NAI_RET`|booléen|Code retour contrôle « Cohérence date naissance »||
`COH_SEX_RET`|booléen|Code retour contrôle « Cohérence sexe »||
`NIR_ANO_17`|chaîne de caractères|N° anonyme||
`SEJ_NUM`|chaîne de caractères|N° de séjour||
`RIP_NUM`|chaîne de caractères|N° séquentiel dans fichier PMSI||
`ENT_DAT`|date|Date d&#x27;entrée||
`SOR_DAT`|date|Date de sortie||
`EXE_SOI_DTD`|date et heure|date d&#x27;entrée||
`EXE_SOI_DTF`|date et heure|date de sortie||
`EXE_SOI_AMD`|année et mois|Date d&#x27;entrée au format année + mois||
`EXE_SOI_AMF`|chaîne de caractères|Date de sortie au format année + mois||
`NUM_DAT_AT_RET`|booléen|Code retour contrôle &quot; Numéro accident du travail ou date d’accident de droit commun&quot;||
`ORG_CPL_NUM_RET`|booléen|Code retour contrôle &quot; N° d’organisme complémentaire&quot;||
`ETA_NUM_RET`|booléen|Code retour contrôle «N° FINESS d’inscription e-PMSI«||
`NUM_DAT_AT`|chaîne de caractères|Numéro accident du travail ou date d’accident de droit commun||
`ORG_CPL_NUM`|chaîne de caractères|N° d’organisme complémentaire||
`ENT_AM`|date|Date d&#x27;entrée au format année + mois||
`SOR_MOI`|date|Mois de sortie||
`SOR_AM`|date|Date de sortie au format année + mois||
`SOR_ANN`|année|Année de sortie||

