## Schéma

- Titre : Fich comp médicament soumis à autorisation temporaire d'utilisation
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaa_nnB](/tables/T_HADaa_nnB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20HAD/T_HADaa_nnMEDATU.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACH_PRI_ADM`|
number|Prix d&#x27;achat multiplié par le nombre administré||
`ADM_ANN`|
string|Année de la date d&#x27;administration||
`ADM_MOIS`|
string|Mois de la date d&#x27;administration||
`ADM_NBR`|
integer|Nombre administré éventuellement fractionnaire||
`ANN`|
string|Année période||
`DAT_DELAI`|
number|Délai entre la date d’entrée du séjour et la date de dispensation||
`ETA_NUM_EPMSI`|
string|N° FINESS e-PMSI||
`FAC_NUM`|
string|N° séquentiel de facture||
`INI_VAL_PRS`|
string|Validation initiale de la prescription par un centre de référence ou de compétence||
`MOIS`|
string|N° période (mois)||
`PRS_TYP`|
string|Type de prestation||
`RHAD_NUM`|
string|N° séquentiel de séjour d&#x27;HAD||
`SEJ_NBR`|
integer|Nombre de séjours impliqués||
`SEQ_SEJ`|
string|Numéro de la séquence dans le séjour||
`SSEQ_NUM`|
string|Numéro de sous-séquence||
`TOP_UCD_AUTO`|
string|Top transcodage UCD13 auto||
`UCD_UCD_COD`|
string|Code UCD||
`UCD_COD`|
string|Code UCD||

