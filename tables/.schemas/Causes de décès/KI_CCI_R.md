## Schéma

- Titre : Table des circonstances et de la cause initiale de décès
<br />
- Clé(s) étrangère(s) : <br />
`BEN_IDT_ANO` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_IDT_ANO` ]<br />
`BEN_IDT_ANO` => table [IR_IBA_R](/tables/IR_IBA_R) [ `BEN_IDT_ANO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/Causes%20de%20d%C3%A9c%C3%A8s/KI_CCI_R.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`DCD_IDT_ENC`|
string|Identifiant décès encodé||
`DCD_IDT_TOP`|
integer|Top apparié avec IR_BEN_R||
`BEN_IDT_ANO`|
string|Identifiant bénéficiaire anonymisé||
`BEN_IDT_TOP`|
integer|Top identifiant bénéficiaire Anonymisé||
`BEN_NIR_ANO`|
string|NIR pseudonymisé du bénéficiaire||
`FLX_PER_ANN`|
string|Année de décès||
`CER_VER_NUM`|
integer|Version du certificat||
`TRT_STA_COD`|
integer|Statut de traitement||
`TYP_CER_COD`|
integer|Type de certificat||
`CER_SUP_TYP`|
integer|Type de support||
`TYP_VOL_COD`|
integer|Type de volet||
`DCD_DPT_COD`|
string|Département de décès||
`DCD_COM_COD`|
string|Commune de décès||
`BEN_RES_DPT`|
string|Département de résidence du bénéficiaire||
`BEN_RES_COM`|
string|commune de résidence du destinataire du règlement||
`BEN_DCD_DTE`|
date|Date de décès du bénéficiaire||
`BEN_DCD_AME`|
string|Année et mois de décès du bénéficiaire||
`DCD_LIE_COD`|
integer|Lieu du décès||
`BEN_NAI_ANN`|
string|Année de naissance du bénéficiaire||
`BEN_NAI_MOI`|
string|Mois de naissance du bénéficiaire||
`BEN_SEX_COD`|
integer|Code sexe du bénéficiaire||
`PFV_ACP_COD`|
integer|Activité professionnelle||
`CAT_PCS_COD`|
string|Profession et catégorie socioprofessionnelle||
`ETA_MAR_COD`|
integer|Etat matrimonial||
`DCD_CIM_COD`|
string|Cause initiale du décès||
`DCD_CAU_COD`|
integer|Recherche de la cause de décès||
`DCD_GRS_COD`|
integer|La grossesse a contribué au décès||
`DCD_GRS_DEL`|
string|Délai entre fin de grossesse et décès||
`DCD_LIE_LIB`|
string|Lieu de lévènement si mort violente||
`DCD_ATT_COD`|
integer|Accident du travail||
`NEO_APG_SCO`|
integer|Apgar à une minute||
`NEO_GES_AGE`|
integer|Âge gestationnel en semaines révolues daménorrhée||
`NEO_NAI_POI`|
number|Poids de naissance en grammes||
`RNG_NAI_TYP`|
integer|Type de naissance||
`GRS_ORD_NUM`|
integer|N° dordre de lenfant si grossesse multiple||
`ACC_LIA_COD`|
integer|Lieu daccouchement||
`ACC_PST_COD`|
integer|Présentation de lenfant||
`ACC_DEB_COD`|
integer|Début du travail||
`MOD_ACC_COD`|
integer|Mode daccouchement||
`HOS_TRF_TOP`|
integer|Transfert ou hospitalisation particulière de lenfant||
`MER_NAI_ANN`|
string|Année de naissance de la mère||
`MER_PFS_COD`|
integer|Activité professionnelle de la mère||
`MER_PFG_LIB`|
string|Profession de la mère exercée pendant la grossesse||
`MER_MAR_COD`|
integer|Etat matrimonial de la mère||
`MER_SIT_TOP`|
integer|La mère vit elle en couple||
`TOT_GRS_NBR`|
integer|Nombre total de grossesses||
`TOT_ACC_NBR`|
integer|Nombre total daccouchements||
`PER_PFS_COD`|
integer|Activité professionnelle du père||
`PER_PFG_LIB`|
string|Profession du père exercée pendant la grossesse||

