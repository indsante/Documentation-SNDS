## Schéma

- Titre : Table individus de la cartographie des pathologies pour l'année AAAA et l'algorithme N
<br />
- Clé primaire : `ben_nir_psa`, `ben_rng_gem`
<br />
- Clé(s) étrangère(s) : <br />
`ben_nir_psa`, `ben_rng_gem` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA`, `BEN_RNG_GEM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/CARTOGRAPHIE_PATHOLOGIES/CT_IDE_AAAA_GN.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`id_carto`|chaîne de caractères|Identifiant bénéficiaire cartographie|<p>valeur unique</p>|
`ben_nir_psa`|chaîne de caractères|Identifiant anonyme du patient dans le SNIIRAM||
`ben_rng_gem`|nombre entier|rang de naissance du bénéficiaire||
`version`|chaîne de caractères|Version de la cartographie||

