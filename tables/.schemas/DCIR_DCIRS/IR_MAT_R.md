## Schéma

- Titre : Table historique de la maternité
<br />
- Clé(s) étrangère(s) : <br />
`BEN_NIR_PSA`, `BEN_RNG_GEM` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA`, `BEN_RNG_GEM` ]<br />
`BEN_IDT_ANO` => table [IR_IBA_R](/tables/IR_IBA_R) [ `BEN_IDT_ANO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR_DCIRS/IR_MAT_R.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`BEN_NIR_PSA`|
string|Identifiant anonyme du patient dans le SNIIRAM||
`BEN_RNG_GEM`|
integer|rang de naissance du bénéficiaire||
`BEN_NIR_ANO`|
string|NIR pseudonymisé du bénéficiaire||
`BEN_IDT_ANO`|
string|Identifiant bénéficiaire anonymisé||
`BEN_GRS_DTE`|
date|Date présumée de grossesse||
`BEN_DRA_AME`|
string|Année et mois de l’accouchement||
`IND_RNM_BEN`|
string|Top RNIAM||

