## Schéma

- Titre : Table des GHT (groupage établissement)
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaa_nnB](/tables/T_HADaa_nnB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20HAD/T_HADaa_nnGRE.json"  
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
`ETE_GHS_NUM`|
number|GHT au format numérique||
`GHT_NBJ`|
integer|Groupage Etablissement : nombre de jours||
`GHT_NUM`|
string|Groupage Etablissement : n° du GHT||
`GRE_GRP_ETB`|
string|Groupage Etablissement : nombre de zones tarifaires établissement (1 à 4)||
`GRE_GRP_GHPC`|
string|Groupage Etablissement : n° du GHPC||
`GRE_GRP_RET`|
boolean|Groupage Etablissement : code retour||
`GRE_RPPS_VER`|
string|Groupage établissement version de la classification||
`RHAD_NUM`|
string|N° séquentiel de séjour d&#x27;HAD||
`SEQ_NUM`|
string|N° de la séquence dans le séjour||
`SSEQ_NUM`|
string|N° de la sous-séquence||
`SEQ_SEJ`|
string|Numéro de la séquence dans le séjour||
`ETA_NUM_JUR`|
string|N° FINESS de l’établissement (code géographique)||
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (code géographique)||

