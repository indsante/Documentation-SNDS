## Schéma

- Titre : Référentiel médicalisé des bénéficiaires (ALD)
<br />
- Clé(s) étrangère(s) : <br />
`BEN_NIR_PSA`, `BEN_RNG_GEM` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA`, `BEN_RNG_GEM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR_DCIRS/IR_IMB_R.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`BEN_NIR_PSA`|chaîne de caractères|Identifiant anonyme du patient dans le SNIIRAM||
`BEN_RNG_GEM`|nombre entier|rang de naissance du bénéficiaire||
`IMB_ALD_DTD`|date|Date de début d&#x27;exonération du ticket modérateur attribuée par les services médicaux (ALD, AT, MP)||
`IMB_ALD_DTF`|date|Date de fin de l&#x27;exonération attribuée par les services médicaux (ALD, AT, MP)||
`IMB_ALD_NUM`|nombre entier|Numéro d&#x27;ALD||
`IMB_ETM_NAT`|nombre entier|Motif d&#x27;exonération du bénéficiaire||
`IMB_MLP_BTR`|chaîne de caractères|Tableau des maladies professionnelles (bis, ter)||
`IMB_MLP_TAB`|chaîne de caractères|Numéro de tableau des maladies professionnelles (MP)||
`IMB_SDR_LOP`|chaîne de caractères|Localisation - paragraphe syndrome||
`INS_DTE`|date|Date d&#x27;insertion||
`MED_MTF_COD`|chaîne de caractères|Motif médical ou pathologie (code CIM10)||
`MED_NCL_IDT`|chaîne de caractères|Nomenclature médicale||
`UPD_DTE`|date|Date de la dernière sélection des bénéficiaires de l&#x27;EGB||

