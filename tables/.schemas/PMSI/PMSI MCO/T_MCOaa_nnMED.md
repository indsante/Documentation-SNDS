## Schéma

- Titre : Fich comp medicament en sus
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RSA_NUM` => table [T_MCOaa_nnB](/tables/T_MCOaa_nnB) [ `ETA_NUM`, `RSA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20MCO/T_MCOaa_nnMED.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ADM_MOIS`|
string|Mois de la date d&#x27;administration||
`ADM_NBR`|
number|Nombre administré éventuellement fractionnaire||
`ADM_NBR_PRI`|
number|Prix d&#x27;achat multiplié par le nombre administré||
`ANN`|
string|Année période||
`DAT_ADM_ANN`|
string|Année de la date d&#x27;administration||
`DELAI`|
integer|Délai entre la date d’entrée du séjour et la date de dispensation||
`ETA_NUM`|
string|N° FINESS e-PMSI||
`ETA_NUM_ENT`|
string|N° FINESS du fichier d&#x27;entrée||
`INI_VAL_PRS`|
string|Validation initiale de la prescription par un centre de référence ou de compétence||
`MOI`|
string|N° période (mois)||
`NBR_SEJ`|
integer|Nombre de séjours impliqués||
`PRS_TYP`|
string|Type de prestation||
`RSA_NUM`|
string|N° d&#x27;index du RSA||
`TOP_UCD_AUTO`|
string|Top transcodage UCD13 auto||
`UCD_UCD_COD`|
string|Code UCD||
`COD_LES`|
string|Code indication des spécialités pharmaceutiques inscrites sur la liste en sus||
`UCD_COD`|
string|Code UCD||

