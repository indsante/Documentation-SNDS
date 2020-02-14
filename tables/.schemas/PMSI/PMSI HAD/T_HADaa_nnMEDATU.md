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
`ACH_PRI_ADM`|nombre réel|Prix d&#x27;achat multiplié par le nombre administré||
`ADM_ANN`|année|Année de la date d&#x27;administration||
`ADM_MOIS`|date|Mois de la date d&#x27;administration||
`ADM_NBR`|nombre entier|Nombre administré éventuellement fractionnaire||
`ANN`|année|Année période||
`DAT_DELAI`|nombre réel|Délai entre la date d’entrée du séjour et la date de dispensation||
`ETA_NUM_EPMSI`|chaîne de caractères|N° FINESS e-PMSI||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture||
`INI_VAL_PRS`|chaîne de caractères|Validation initiale de la prescription par un centre de référence ou de compétence||
`MOIS`|date|N° période (mois)||
`PRS_TYP`|chaîne de caractères|Type de prestation||
`RHAD_NUM`|chaîne de caractères|N° séquentiel de séjour d&#x27;HAD||
`SEJ_NBR`|nombre entier|Nombre de séjours impliqués||
`SEQ_SEJ`|chaîne de caractères|Numéro de la séquence dans le séjour||
`SSEQ_NUM`|chaîne de caractères|Numéro de sous-séquence||
`TOP_UCD_AUTO`|chaîne de caractères|Top transcodage UCD13 auto||
`UCD_UCD_COD`|chaîne de caractères|Code UCD||
`UCD_COD`|chaîne de caractères|Code UCD||

