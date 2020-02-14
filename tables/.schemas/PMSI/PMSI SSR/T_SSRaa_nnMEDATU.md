## Schéma

- Titre : Med à autorisation temporaire d'utilisation
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RHA_NUM`, `RHS_NUM` => table [T_SSRaa_nnB](/tables/T_SSRaa_nnB) [ `ETA_NUM`, `RHA_NUM`, `RHS_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20SSR/T_SSRaa_nnMEDATU.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM`|
string|N° FINESS||
`PRS_TYP`|
string|Type de prestation||
`ANN`|
string|Année période||
`MOI`|
string|N° période (mois)||
`RHA_NUM`|
string|N° Séquentiel du séjour||
`RHS_NUM`|
string|Numéro séquentiel du RHS||
`UCD_UCD_COD`|
string|Code UCD||
`ADM_NBR`|
integer|Nombre administré éventuellement fractionnaire||
`ACH_PRI_ADM`|
number|Prix d&#x27;achat multiplié par le nombre administré||
`ADM_MOIS`|
string|Mois de la date d&#x27;administration||
`ADM_ANN`|
string|Année de la date d&#x27;administration||
`DAT_DELAI`|
number|Délai entre la date d’entrée du séjour et la date de dispensation||
`TOP_UCD_AUTO`|
string|Top transcodage UCD13 auto||
`UCD_COD`|
string|Code UCD||

