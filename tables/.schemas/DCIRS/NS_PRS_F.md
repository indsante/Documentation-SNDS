## Schéma

- Titre : Table des prestations
<br />
- Clé primaire : `CLE_DCI_JNT`
<br />
- Clé(s) étrangère(s) : <br />
`PFS_EXE_NUM` => table [DA_PRA_R](/tables/DA_PRA_R) [ `PFS_PFS_NUM` ]<br />
`PFS_PRE_NUM` => table [DA_PRA_R](/tables/DA_PRA_R) [ `PFS_PFS_NUM` ]<br />
`PRS_MTT_NUM` => table [DA_PRA_R](/tables/DA_PRA_R) [ `PFS_PFS_NUM` ]<br />
`BEN_IDT_ANO` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_IDT_ANO` ]<br />
`BEN_IDT_ANO` => table [IR_IBA_R](/tables/IR_IBA_R) [ `BEN_IDT_ANO` ]<br />
`ETB_PRE_FIN` => table [BE_IDE_R](/tables/BE_IDE_R) [ `IDE_ETA_NU8` ]<br />
`ETB_EXE_FIN` => table [BE_IDE_R](/tables/BE_IDE_R) [ `IDE_ETA_NU8` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIRS/NS_PRS_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACC_TIE_IND`|
integer|Top tiers responsable accident||
`AR1_ASU_NAT`|
integer|Nature d&#x27;assurance autre régime que régime obligatoire (ARO) - 1ère occurrence||
`AR1_REM_BSE`|
number|Base de remboursement autre régime que régime obligatoire (ARO) - 1ère occurrence||
`AR1_REM_MNT`|
number|Montant remboursé autre régime que régime obligatoire (ARO) - 1ère occurrence||
`AR1_REM_TYP`|
integer|Type de remboursement autre régime que régime obligatoire (ARO) - 1ère occurrence||
`AR2_ASU_NAT`|
integer|Nature d&#x27;assurance autre régime que régime obligatoire (ARO) - 2ème occurrence||
`AR2_REM_BSE`|
number|Base de remboursement autre régime que régime obligatoire (ARO) - 2ème occurrence||
`AR2_REM_MNT`|
number|Montant remboursé autre régime que régime obligatoire (ARO) - 2ème occurrence||
`AR2_REM_TYP`|
integer|Type de remboursement autre régime que régime obligatoire (ARO) - 2ème occurrence||
`AR3_ASU_NAT`|
integer|Nature d&#x27;assurance autre régime que régime obligatoire (ARO) - 3ème occurrence||
`AR3_REM_BSE`|
number|Base de remboursement autre régime que régime obligatoire (ARO) - 3ème occurrence||
`AR3_REM_MNT`|
number|Montant remboursé autre régime que régime obligatoire (ARO) - 3ème occurrence||
`AR3_REM_TYP`|
integer|Type de remboursement autre régime que régime obligatoire (ARO) - 3ème occurrence||
`ASS_PAF_MNT`|
number|Montant des franchises et des participations forfaitaires de l&#x27;assuré||
`BEN_AMA_COD`|
integer|Age du bénéficiaire en mois (si &lt; 2 ans) ou années (si &gt;&#x3D; 2 ans)||
`BEN_CDI_NIR`|
string|Code d&#x27;identification du NIR||
`BEN_CMU_ORG`|
string|Code de l&#x27;organisme complémentaire||
`BEN_CMU_TOP`|
string|Top bénéficiaire de la CMU complémentaire||
`BEN_CTA_TYP`|
integer|Type de contrat complémentaire||
`BEN_EHP_TOP`|
string|Identification hospitalisation en EHPAD ou en EMS||
`BEN_IDT_ANO`|
string|Identifiant bénéficiaire anonymisé||
`BEN_IDT_TOP`|
integer|Top identifiant bénéficiaire Anonymisé||
`BEN_QAF_COD`|
integer|Qualité du matricule de l&#x27;ouvreur de droits||
`BEN_RES_COM`|
string|Commune de résidence du bénéficiaire||
`BEN_RES_DPT`|
string|Département de résidence du bénéficiaire||
`BSE_REM_BSE`|
number|Base de remboursement de l&#x27;acte de base||
`BSE_REM_MNT`|
number|Montant remboursé pour l&#x27;acte de base||
`CAI_AFF_COD`|
string|Code de la caisse d&#x27;affiliation||
`CAI_LIQ_COD`|
string|Code de la caisse de liquidation||
`CLE_DCI_JNT`|
integer|Clé technique de jointure||
`CPM_REM_BSE`|
number|Base de remboursement des compléments d&#x27;actes et majorations (hors participations de l&#x27;assuré)||
`CPM_REM_MNT`|
number|Montant remboursé pour les compléments d&#x27;actes et majorations||
`DDP_COD`|
integer|Code de la discipline de Prestations (ou discipline médico tarifaire)||
`DPN_QLF`|
integer|Qualificatif de la dépense||
`DRG_AFF_NAT`|
string|Code affiné du destinataire du règlement||
`DRG_NAT`|
integer|Code du destinataire du règlement||
`DRT_ACS_TOP`|
string|Top bénéficiaire ACS||
`ETB_EXE_FIN`|
string|N° FINESS de l&#x27;établissement exécutant||
`ETB_PRE_FIN`|
string|N° FINESS de l&#x27;établissement prescripteur||
`ETE_CAT_COD`|
integer|Catégorie de l&#x27;établissement exécutant||
`ETE_DPT_COD`|
string|Département de l&#x27;établissement exécutant||
`ETE_GHS_NUM`|
integer|Numéro du GHS||
`ETE_IND_TAA`|
integer|Indicateur TAA||
`ETE_MCO_DDP`|
string|Code discipline MCO établissement exécutant||
`ETE_TYP_COD`|
integer|Code du type de l&#x27;établissement exécutant||
`ETP_DPT_COD`|
string|Departement de l&#x27;établissement prescripteur||
`EXE_CTX_BEN`|
string|Contexte Bénéficiaire||
`EXE_CTX_PFS`|
string|Contexte Professionnels de santé||
`EXE_INS_DPT`|
string|Département du professionnel de santé exécutant||
`EXE_SOI_AMD`|
string|Date (année et mois) de début d&#x27;exécution des soins||
`EXE_SOI_AMF`|
string|Date (année et mois) de fin d&#x27;exécution des soins||
`EXE_SOI_DTD`|
date|Date de début d&#x27;exécution des soins||
`EXE_SOI_DTF`|
date|Date de fin d&#x27;exécution des soins||
`EXO_MTF`|
integer|Motif d&#x27;exonération du ticket modérateur||
`FLX_DIS_DTD`|
date|Date de mise à disposition des données||
`FLX_EMT_TYP`|
integer|Type d&#x27;émetteur||
`FLX_TRT_DTD`|
date|Date d&#x27;entrée des données dans le système d&#x27;information||
`GRG_AFF_COD`|
string|Code du grand régime d&#x27;affiliation||
`GRG_LIQ_COD`|
string|Grand régime de liquidation||
`IJR_RVL_NAT`|
string|Nature de la revalorisation (indemnités journalières)||
`MDT_COD`|
integer|Code du mode de traitement||
`MFT_COD`|
integer|Code du mode de fixation des tarifs||
`MTM_NAT`|
integer|Modulation du ticket modérateur||
`PFS_EXE_NUM`|
string|N° du professionnel de santé exécutant||
`PFS_PRE_NUM`|
string|N° du professionnel de santé prescripteur||
`PRE_INS_DPT`|
string|Département du professionnel de santé prescripteur||
`PRE_PRE_AMD`|
string|Date (année et mois) de prescription||
`PRE_PRE_DTD`|
date|Date de prescription||
`PRS_ACT_COG`|
number|Coefficient global de l&#x27;acte de base||
`PRS_ACT_NBR`|
integer|Dénombrement des actes de base||
`PRS_ACT_QTE`|
integer|Quantité de l&#x27;acte de base||
`PRS_DEP_MNT`|
number|Montant global du dépassement||
`PRS_DIS_PRE`|
string|Dispositif de prévention||
`PRS_DRA_AME`|
string|Date réelle (année et mois) de l&#x27;accouchement||
`PRS_GRS_DTD`|
date|Date présumée de Grossesse||
`PRS_HOS_AMD`|
string|Date (année et mois) de début d&#x27;hospitalisation||
`PRS_HOS_DTD`|
date|Date de début d&#x27;hospitalisation||
`PRS_MTT_NUM`|
string|Numéro du medecin traitant||
`PRS_NAT_REF`|
integer|Code de la Prestations de référence||
`PRS_PAI_MNT`|
number|Montant global de la dépense||
`PRS_PDS_QCP`|
integer|Code qualificatif du parcours de soins||
`PRS_PPU_SEC`|
integer|Code privé - public de la Prestations||
`PRS_PRE_MTT`|
integer|Code origine de la prescription||
`PSE_ACT_NAT`|
integer|Nature d&#x27;activité du professionnel de santé exécutant||
`PSE_ACT_SPE`|
integer|Spécialité ou nature d&#x27;activité du professionnel de santé exécutant||
`PSE_CNV_COD`|
integer|Code convention du professionnel de santé exécutant||
`PSE_SPE_COD`|
integer|Spécialite médicale du professionnel de santé exécutant||
`PSE_STJ_COD`|
integer|Mode d&#x27;exercice du professionnel de santé exécutant||
`PSP_ACT_NAT`|
integer|Nature d&#x27;activite du professionnel de santé prescripteur||
`PSP_ACT_SPE`|
integer|Spécialité ou nature d&#x27;activité du professionnel de santé prescripteur||
`PSP_CNV_COD`|
integer|Code convention du professionnel de santé prescripteur||
`PSP_PPS_NUM`|
string|Numéro RPPS du prescripteur salarié||
`PSP_SPE_COD`|
integer|Spécialité médicale du professionnel de santé prescripteur||
`PSP_STJ_COD`|
integer|Mode d&#x27;exercice du professionnel de santé prescripteur||
`RGM_COD`|
integer|Code du petit régime||
`RGO_ASU_NAT`|
integer|Nature d&#x27;assurance (régime obligatoire)||
`RGO_ENV_TYP`|
integer|Type d&#x27;enveloppe (régime obligatoire)||
`RGO_REM_TAU`|
number|Taux de remboursement (part Régime Obligatoire)||
`SLM_AFF_COD`|
string|Code de la SLM||
`TOT_REM_BSE`|
number|Base totale de remboursement de l&#x27;acte (base et compléments-majo hors PAF)||
`TOT_REM_MNT`|
number|Montant total remboursé pour l&#x27;acte (base et compléments-majo et participations de l&#x27;assuré)||

