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
`DCD_IDT_ENC`|chaîne de caractères|Identifiant décès encodé||
`DCD_IDT_TOP`|nombre entier|Top apparié avec IR_BEN_R||
`BEN_IDT_ANO`|chaîne de caractères|Identifiant bénéficiaire anonymisé||
`BEN_IDT_TOP`|nombre entier|Top identifiant bénéficiaire Anonymisé||
`BEN_NIR_ANO`|chaîne de caractères|NIR pseudonymisé du bénéficiaire||
`FLX_PER_ANN`|année|Année de décès||
`CER_VER_NUM`|nombre entier|Version du certificat||
`TRT_STA_COD`|nombre entier|Statut de traitement||
`TYP_CER_COD`|nombre entier|Type de certificat||
`CER_SUP_TYP`|nombre entier|Type de support||
`TYP_VOL_COD`|nombre entier|Type de volet||
`DCD_DPT_COD`|chaîne de caractères|Département de décès||
`DCD_COM_COD`|chaîne de caractères|Commune de décès||
`BEN_RES_DPT`|chaîne de caractères|Département de résidence du bénéficiaire||
`BEN_RES_COM`|chaîne de caractères|commune de résidence du destinataire du règlement||
`BEN_DCD_DTE`|date|Date de décès du bénéficiaire||
`BEN_DCD_AME`|année et mois|Année et mois de décès du bénéficiaire||
`DCD_LIE_COD`|nombre entier|Lieu du décès||
`BEN_NAI_ANN`|année|Année de naissance du bénéficiaire||
`BEN_NAI_MOI`|date|Mois de naissance du bénéficiaire||
`BEN_SEX_COD`|nombre entier|Code sexe du bénéficiaire||
`PFV_ACP_COD`|nombre entier|Activité professionnelle||
`CAT_PCS_COD`|chaîne de caractères|Profession et catégorie socioprofessionnelle||
`ETA_MAR_COD`|nombre entier|Etat matrimonial||
`DCD_CIM_COD`|chaîne de caractères|Cause initiale du décès||
`DCD_CAU_COD`|nombre entier|Recherche de la cause de décès||
`DCD_GRS_COD`|nombre entier|La grossesse a contribué au décès||
`DCD_GRS_DEL`|chaîne de caractères|Délai entre fin de grossesse et décès||
`DCD_LIE_LIB`|chaîne de caractères|Lieu de lévènement si mort violente||
`DCD_ATT_COD`|nombre entier|Accident du travail||
`NEO_APG_SCO`|nombre entier|Apgar à une minute||
`NEO_GES_AGE`|nombre entier|Âge gestationnel en semaines révolues daménorrhée||
`NEO_NAI_POI`|nombre réel|Poids de naissance en grammes||
`RNG_NAI_TYP`|nombre entier|Type de naissance||
`GRS_ORD_NUM`|nombre entier|N° dordre de lenfant si grossesse multiple||
`ACC_LIA_COD`|nombre entier|Lieu daccouchement||
`ACC_PST_COD`|nombre entier|Présentation de lenfant||
`ACC_DEB_COD`|nombre entier|Début du travail||
`MOD_ACC_COD`|nombre entier|Mode daccouchement||
`HOS_TRF_TOP`|nombre entier|Transfert ou hospitalisation particulière de lenfant||
`MER_NAI_ANN`|année|Année de naissance de la mère||
`MER_PFS_COD`|nombre entier|Activité professionnelle de la mère||
`MER_PFG_LIB`|chaîne de caractères|Profession de la mère exercée pendant la grossesse||
`MER_MAR_COD`|nombre entier|Etat matrimonial de la mère||
`MER_SIT_TOP`|nombre entier|La mère vit elle en couple||
`TOT_GRS_NBR`|nombre entier|Nombre total de grossesses||
`TOT_ACC_NBR`|nombre entier|Nombre total daccouchements||
`PER_PFS_COD`|nombre entier|Activité professionnelle du père||
`PER_PFG_LIB`|chaîne de caractères|Profession du père exercée pendant la grossesse||

