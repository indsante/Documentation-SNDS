## Schéma

- Titre : Référentiel des bénéficiaires du SNIIRAM-SNDS
<br />
- Clé primaire : `BEN_NIR_PSA`, `BEN_RNG_GEM`

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/BENEFICIAIRE/IR_BEN_R.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`BEN_NIR_PSA`|chaîne de caractères|Identifiant anonyme du patient dans le SNIIRAM|<p>valeur unique</p><p>Unicité fausse sans le rang gémellaire. Contrainte nécessaire pour les clés étrangère du PMSI, qui n&#x27;a pas le rang gémellaire</p>|
`BEN_RNG_GEM`|nombre entier|rang de naissance du bénéficiaire||
`BEN_NIR_ANO`|chaîne de caractères|NIR pseudonymisé du bénéficiaire||
`BEN_IDT_ANO`|chaîne de caractères|Identifiant bénéficiaire anonymisé|<p>valeur unique</p>|
`BEN_IDT_TOP`|booléen|Top identifiant bénéficiaire Anonymisé||
`ASS_NIR_ANO`|chaîne de caractères|Matricule anonymisé de l&#x27;ouvreur de droits||
`BEN_IDT_MAJ`|date|Date d&#x27;alimentation du NIR BEN_NIR_NAO||
`BEN_CDI_NIR`|chaîne de caractères|Code d&#x27;identification du NIR||
`BEN_NAI_ANN`|année|Année de naissance du bénéficiaire||
`BEN_NAI_MOI`|date|Mois de naissance du bénéficiaire||
`BEN_SEX_COD`|nombre entier|Code sexe du bénéficiaire||
`BEN_DCD_DTE`|date|Date de décès du bénéficiaire||
`BEN_DCD_AME`|année et mois|Année et mois de décès du bénéficiaire||
`ORG_AFF_BEN`|chaîne de caractères|Code de l&#x27;organisme d&#x27;affiliation||
`BEN_RES_DPT`|chaîne de caractères|Département de résidence du bénéficiaire||
`BEN_RES_COM`|chaîne de caractères|commune de résidence du destinataire du règlement||
`BEN_TOP_CNS`|booléen|top consommant - non consommant||
`MAX_TRT_DTD`|date|Date maximale de traitement d&#x27;une Prestations||
`ORG_CLE_NEW`|chaîne de caractères|Code de l&#x27;organisme de liquidation||
`BEN_DTE_INS`|date|Date d&#x27;insertion dans le référentiel||
`BEN_DTE_MAJ`|date|Date de mise à jour||

