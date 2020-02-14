## Schéma

- Titre : Table historique des affiliations à l'aide à la complémentaire santé
<br />
- Clé(s) étrangère(s) : <br />
`BEN_NIR_PSA`, `BEN_RNG_GEM` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA`, `BEN_RNG_GEM` ]<br />
`BEN_IDT_ANO` => table [IR_IBA_R](/tables/IR_IBA_R) [ `BEN_IDT_ANO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR_DCIRS/IR_ACS_R.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`BEN_NIR_PSA`|chaîne de caractères|Identifiant anonyme du patient dans le SNIIRAM||
`BEN_RNG_GEM`|nombre entier|rang de naissance du bénéficiaire||
`BEN_NIR_ANO`|chaîne de caractères|NIR pseudonymisé du bénéficiaire||
`BEN_IDT_ANO`|chaîne de caractères|Identifiant bénéficiaire anonymisé||
`FAM_DRT_VRU`|chaîne de caractères|Code de verrouillage des droits||
`FAM_DRT_DSD`|date|Date de début de verrouillage des droits||
`FAM_DRT_DSF`|date|Date de fin de verrouillage des droits||
`IND_RNM_BEN`|chaîne de caractères|Top RNIAM||

