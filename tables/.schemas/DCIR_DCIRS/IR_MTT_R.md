## Schéma

- Titre : Table historique des médecins traitants
<br />
- Clé(s) étrangère(s) : <br />
`BEN_NIR_PSA`, `BEN_RNG_GEM` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA`, `BEN_RNG_GEM` ]<br />
`BEN_IDT_ANO` => table [IR_IBA_R](/tables/IR_IBA_R) [ `BEN_IDT_ANO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR_DCIRS/IR_MTT_R.json"  
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
`IND_RNM_BEN`|chaîne de caractères|Top RNIAM||
`MTT_DEP_DTE`|date|date de début du contrat avec le médecin traitant||
`MTT_FIN_DTE`|date|date de fin du contrat avec le médecin traitant||
`MTT_MTF_COD`|chaîne de caractères|Motif de résiliation du contrat avce le médecin traitant||
`MTT_ORI_COD`|chaîne de caractères|Origine de la saisie ou de la mise à jour de la déclaration de médecin traitant||
`MTT_PFS_NUM`|chaîne de caractères|Numéro du médecin traitant||

