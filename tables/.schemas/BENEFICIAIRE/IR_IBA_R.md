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
`BEN_IDT_ANO`|
string|Identifiant bénéficiaire anonymisé||
`BEN_IDT_TOP`|
integer|Top identifiant bénéficiaire Anonymisé||
`ASS_NIR_ANO`|
string|Matricule anonymisé de l&#x27;ouvreur de droits||
`BEN_CDI_NIR`|
string|Code d&#x27;identification du NIR||
`BEN_NAI_ANN`|
string|Année de naissance du bénéficiaire||
`BEN_NAI_MOI`|
string|Mois de naissance du bénéficiaire||
`BEN_SEX_COD`|
integer|Code sexe du bénéficiaire||
`BEN_DCD_DTE`|
date|Date de décès du bénéficiaire||
`BEN_DCD_AME`|
string|Année et mois de décès du bénéficiaire||
`ORG_AFF_BEN`|
string|Code de l&#x27;organisme d&#x27;affiliation||
`BEN_RES_DPT`|
string|Département de résidence du bénéficiaire||
`BEN_RES_COM`|
string|commune de résidence du destinataire du règlement||
`BEN_TOP_CNS`|
integer|top consommant - non consommant||
`MAX_TRT_DTD`|
date|Date maximale de traitement d&#x27;une Prestations||
`ORG_CLE_NEW`|
string|Code de l&#x27;organisme de liquidation||
`BEN_DTE_INS`|
date|Date d&#x27;insertion dans le référentiel||
`BEN_DTE_MAJ`|
date|Date de mise à jour||

