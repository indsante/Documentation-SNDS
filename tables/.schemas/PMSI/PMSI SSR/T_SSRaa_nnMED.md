## Schéma

- Titre : Med en sus
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RHA_NUM`, `RHS_NUM` => table [T_SSRaa_nnB](/tables/T_SSRaa_nnB) [ `ETA_NUM`, `RHA_NUM`, `RHS_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20SSR/T_SSRaa_nnMED.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM`|chaîne de caractères|N° FINESS||
`PRS_TYP`|chaîne de caractères|Type de prestation||
`ANN`|année|Année période||
`MOIS`|date|N° période (mois)||
`RHA_NUM`|chaîne de caractères|N° Séquentiel du séjour||
`RHS_NUM`|chaîne de caractères|Numéro séquentiel du RHS||
`UCD_UCD_COD`|chaîne de caractères|Code UCD||
`ADM_NBR`|nombre entier|Nombre administré éventuellement fractionnaire||
`ACH_PRI_ADM`|nombre réel|Prix d&#x27;achat multiplié par le nombre administré||
`ADM_MOIS`|date|Mois de la date d&#x27;administration||
`ADM_ANN`|année|Année de la date d&#x27;administration||
`DAT_DELAI`|nombre réel|Délai entre la date d’entrée du séjour et la date de dispensation||
`TOP_UCD_AUTO`|chaîne de caractères|Top transcodage UCD13 auto||
`UCD_COD`|chaîne de caractères|Code UCD||

