## Schéma

- Titre : Table des actes
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaa_nnB](/tables/T_HADaa_nnB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20HAD/T_HADaa_nnA.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACT_COD`|
string|Code de l&#x27;activité||
`CCAM_COD`|
string|Code de l&#x27;acte CCAM (hors extension PMSI)||
`EXT_PMSI`|
string|Extension PMSI||
`DEL_DEB_SSEQ`|
number|Délai depuis le début de la sousséquence||
`ETA_NUM_EPMSI`|
string|N° FINESS e-PMSI||
`ETA_NUM_GEO`|
string|Numéro FINESS de l’établissement (code géographique)||
`EXT_DOC`|
string|Extension documentaire||
`PHA_COD`|
string|Code de la phase||
`REAL_NBR`|
integer|Nombre de réalisations||
`RHAD_NUM`|
string|N° séquentiel de séjour d&#x27;HAD||
`SEQ_NUM`|
string|N° de la séquence dans le séjour||
`SSEQ_NUM`|
string|N° de la sous-séquence||
`VAL_DAT_SSEQ`|
string|Dates de validité de l&#x27;acte compatibles avec les dates de la sousséquence||
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (code géographique)||

