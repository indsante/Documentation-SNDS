## Schéma

- Titre : Référentiel des bénéficiaires de DCIRS
<br />
- Clé primaire : `BEN_IDT_ANO`
<br />
- Clé(s) étrangère(s) : <br />
`BEN_IDT_ANO` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_IDT_ANO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/BENEFICIAIRE/IR_IBA_R.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`BEN_IDT_ANO`|chaîne de caractères|Identifiant bénéficiaire anonymisé||
`BEN_IDT_TOP`|nombre entier|Top identifiant bénéficiaire Anonymisé||
`ASS_NIR_ANO`|chaîne de caractères|Matricule anonymisé de l&#x27;ouvreur de droits||
`BEN_CDI_NIR`|chaîne de caractères|Code d&#x27;identification du NIR||
`BEN_NAI_ANN`|année|Année de naissance du bénéficiaire||
`BEN_NAI_MOI`|date|Mois de naissance du bénéficiaire||
`BEN_SEX_COD`|nombre entier|Code sexe du bénéficiaire||
`BEN_DCD_DTE`|date|Date de décès du bénéficiaire||
`BEN_DCD_AME`|année et mois|Année et mois de décès du bénéficiaire||
`ORG_AFF_BEN`|chaîne de caractères|Code de l&#x27;organisme d&#x27;affiliation||
`BEN_RES_DPT`|chaîne de caractères|Département de résidence du bénéficiaire||
`BEN_RES_COM`|chaîne de caractères|commune de résidence du destinataire du règlement||
`BEN_TOP_CNS`|nombre entier|top consommant - non consommant||
`MAX_TRT_DTD`|date|Date maximale de traitement d&#x27;une Prestations||
`ORG_CLE_NEW`|chaîne de caractères|Code de l&#x27;organisme de liquidation||
`BEN_DTE_INS`|date|Date d&#x27;insertion dans le référentiel||
`BEN_DTE_MAJ`|date|Date de mise à jour||

