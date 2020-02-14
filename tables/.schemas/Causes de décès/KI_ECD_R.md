## Schéma

- Titre : Table de lensemble des causes de décès
<br />
- Clé(s) étrangère(s) : <br />
`BEN_IDT_ANO` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_IDT_ANO` ]<br />
`BEN_IDT_ANO` => table [IR_IBA_R](/tables/IR_IBA_R) [ `BEN_IDT_ANO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/Causes%20de%20d%C3%A9c%C3%A8s/KI_ECD_R.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`DCD_IDT_ENC`|chaîne de caractères|Identifiant décès encodé||
`DCD_IDT_TOP`|nombre entier|Top apparié avec IR_BEN_R||
`BEN_IDT_ANO`|chaîne de caractères|Identifiant bénéficiaire anonymisé||
`BEN_IDT_TOP`|nombre entier|Top identifiant bénéficiaire Anonymisé||
`BEN_NIR_ANO`|chaîne de caractères|NIR pseudonymisé du bénéficiaire||
`FLX_PER_ANN`|année|Année de décès||
`CER_LIG_NUM`|nombre entier|N° de ligne du certificat de décès||
`ECD_CAU_RNG`|nombre entier|Rang de la cause||
`ECD_CAU_LIB`|chaîne de caractères|Libellé de la cause||
`ECD_CIM_COD`|chaîne de caractères|Code de la cause||
`BEN_DCD_DTE`|date|Date de décès du bénéficiaire||
`BEN_DCD_AME`|année et mois|Année et mois de décès du bénéficiaire||

