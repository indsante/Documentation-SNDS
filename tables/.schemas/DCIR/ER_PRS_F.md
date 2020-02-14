## Schéma

- Titre : Table des prestations
<br />
- Clé primaire : `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF`
<br />
- Clé(s) étrangère(s) : <br />
`BEN_NIR_PSA`, `BEN_RNG_GEM` => table [CT_IDE_AAAA_GN](/tables/CT_IDE_AAAA_GN) [ `ben_nir_psa`, `ben_rng_gem` ]<br />
`PFS_EXE_NUM` => table [DA_PRA_R](/tables/DA_PRA_R) [ `PFS_PFS_NUM` ]<br />
`PFS_PRE_NUM` => table [DA_PRA_R](/tables/DA_PRA_R) [ `PFS_PFS_NUM` ]<br />
`PRS_MTT_NUM` => table [DA_PRA_R](/tables/DA_PRA_R) [ `PFS_PFS_NUM` ]<br />
`BEN_NIR_PSA`, `BEN_RNG_GEM` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA`, `BEN_RNG_GEM` ]<br />
`ETB_PRE_FIN` => table [BE_IDE_R](/tables/BE_IDE_R) [ `IDE_ETA_NU8` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_PRS_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`BEN_AMA_COD`|
integer|Age du bénéficiaire en mois (si &lt; 2 ans) ou années (si &gt;&#x3D; 2 ans)||
`BEN_CDI_NIR`|
string|Code d&#x27;identification du NIR||
`BEN_CMU_CAT`|
integer|Catégorie d&#x27;organisme complémentaire CMU||
`BEN_CMU_ORG`|
string|Code de l&#x27;organisme complémentaire||
`BEN_CMU_TOP`|
integer|Top bénéficiaire de la CMU complémentaire||
`BEN_DCD_AME`|
date|Année et mois de décès du bénéficiaire||
`BEN_DCD_DTE`|
date|Date de décès du bénéficiaire||
`BEN_EHP_TOP`|
integer|Identification hospitalisation en EHPAD ou en EMS||
`BEN_IAT_CAT`|
string|Catégorie du bénéficiaire (Invalidité - Rente accident du travail)||
`BEN_NAI_ANN`|
year|Année de naissance du bénéficiaire||
`BEN_PAI_CMU`|
integer|Type de procédure de paiement CMU||
`BEN_NIR_PSA`|
string|Identifiant anonyme du patient dans le SNIIRAM||
`BEN_RNG_GEM`|
integer|rang de naissance du bénéficiaire||
`BEN_QAF_COD`|
integer|Qualité du matricule de l&#x27;ouvreur de droits||
`BEN_RES_COM`|
string|commune de résidence du destinataire du règlement||
`BEN_RES_DPT`|
string|Département de résidence du bénéficiaire||
`BEN_SEX_COD`|
integer|Code sexe du bénéficiaire||
`ORG_AFF_BEN`|
string|Code de l&#x27;organisme d&#x27;affiliation||
`PRS_REJ_TOP`|
integer|Top rejet ou signalement||
`EXE_SOI_AMD`|
date|Date (année et mois) de début d&#x27;exécution des soins||
`EXE_SOI_AMF`|
date|Date (année et mois) de fin d&#x27;exécution des soins||
`EXE_SOI_DTD`|
date|Date de début d&#x27;exécution des soins||
`EXE_SOI_DTF`|
date|Date de fin d&#x27;exécution des soins||
`PRE_PRE_AMD`|
date|Date (année et mois) de prescription||
`PRE_PRE_DTD`|
date|Date de prescription||
`PRS_GRS_DTD`|
date|Date présumée de Grossesse||
`PRS_HOS_AMD`|
date|Date (année et mois) de début d&#x27;hospitalisation||
`PRS_HOS_DTD`|
date|Date de début d&#x27;hospitalisation||
`BSE_REM_BSE`|
number|Base de remboursement de l&#x27;acte de base||
`BSE_REM_MNT`|
number|Montant remboursé pour l&#x27;acte de base||
`BSE_REM_PRU`|
number|Prix unitaire de l&#x27;acte (acte de base)||
`BSE_REM_SGN`|
integer|Signe du remboursement (acte de base)||
`CPL_REM_BSE`|
number|Base de remboursement (complément d&#x27;acte)||
`CPL_REM_MNT`|
number|Montant versé-remboursé (complément d&#x27;acte)||
`CPL_REM_PRU`|
number|Prix unitaire de l&#x27;acte (complément d&#x27;acte)||
`CPL_REM_SGN`|
integer|Signe du remboursement (complément d&#x27;acte)||
`PRS_ACT_CFT`|
number|Coefficient (non signé) de l&#x27;acte||
`PRS_ACT_COG`|
number|Coefficient global de l&#x27;acte de base||
`PRS_ACT_NBR`|
number|Dénombrement des actes de base||
`PRS_ACT_QTE`|
number|Quantité de l&#x27;acte de base||
`PRS_DEP_MNT`|
number|Montant global du dépassement||
`PRS_ETA_RAC`|
number|Reste à charge de l&#x27;établissement||
`PRS_PAI_MNT`|
number|Montant global de la dépense||
`RGO_MOD_MNT`|
number|Montant de la majoration de la participation de l&#x27;assuré (régime obligatoire)||
`ORB_BSE_NUM`|
string|Organisme de base de liquidation des prestations||
`ORL_BSE_NUM`|
string|Organisme de base de liquidation des prestations||
`RGM_COD`|
integer|Code du petit régime||
`RGM_GRG_COD`|
integer|Grand régime de liquidation du bénéficiaire||
`ACC_TIE_IND`|
integer|Top tiers responsable accident||
`BSE_FJH_TYP`|
integer|Type de prise en charge du forfait journalier (acte de base)||
`BSE_PRS_NAT`|
integer|Nature de la prestation (acte de base)||
`CPL_AFF_COD`|
integer|Code complément affiné||
`CPL_ANO_COD`|
integer|Code anomalie complément affiné||
`CPL_FJH_TYP`|
integer|Type de prise en charge du forfait journalier (complément d&#x27;acte)||
`CPL_MAJ_TOP`|
integer|Top complément - majoration||
`CPL_PRS_NAT`|
integer|Nature de la prestation (complément d&#x27;acte)||
`DPN_QLF`|
integer|Qualificatif de la dépense||
`DRG_MOD`|
integer|Mode de règlement||
`DRG_NAT`|
integer|Code du destinataire du règlement||
`EXE_LIE_COD`|
integer|Lieu d&#x27;exécution de l&#x27;acte médical||
`EXO_MTF`|
integer|Motif d&#x27;exonération du ticket modérateur||
`IJR_EMP_NUM`|
integer|Numéro demployeur pour les indemnités journalières||
`IJR_RVL_NAT`|
string|Nature de la revalorisation (indemnités journalières)||
`MTM_NAT`|
integer|Modulation du ticket modérateur||
`ORG_CLE_NEW`|
string|Code de l&#x27;organisme de liquidation||
`PRE_REN_COD`|
integer|Type de renouvellement de la prescription (opticien - pharmacien)||
`PRS_CRD_OPT`|
integer|Top option de coordination||
`PRS_DPN_QLP`|
integer|Qualificatif de la dépense transmis||
`PRS_NAT_REF`|
integer|Code de la Prestations de référence||
`PRS_OPS_TRF`|
integer|Indicateur de tarif opposable||
`PRS_PDS_QCP`|
integer|Code qualificatif du parcours de soins||
`PRS_PDS_QTP`|
integer|Qualificatif du parcours de soins transmis||
`PRS_PPF_COD`|
string|Prise en compte de la participation forfaitaire||
`PRS_PRE_MTT`|
integer|Code origine de la prescription||
`PRS_REF_KIN`|
string|Indicateur Référentiel Entente Préalable kinésithérapie||
`PRS_TOP_ENP`|
integer|Indicateur Top Entente Préalable||
`PRS_TYP_KIN`|
string|Type de prestation Kiné||
`RGO_ASU_NAT`|
integer|Nature d&#x27;assurance (régime obligatoire)||
`RGO_ENV_TYP`|
integer|Type d&#x27;enveloppe (régime obligatoire)||
`RGO_FTA_COD`|
integer|Forçage du taux (hors parcours de soins) (part obligatoire)||
`RGO_MIN_TAU`|
number|Taux de remboursement modulé (hors parcours de Soins) (régime obligatoire)||
`RGO_REM_TAU`|
number|Taux de remboursement (part Régime Obligatoire)||
`RGO_THE_TAU`|
number|Taux de remboursement théorique (régime obligatoire)||
`ETB_PRE_FIN`|
string|N° FINESS de l&#x27;établissement prescripteur||
`PFS_EXE_NUM`|
string|N° du professionnel de santé exécutant||
`PFS_PRE_NUM`|
string|N° du professionnel de santé prescripteur||
`PRS_MTT_NUM`|
string|Numéro du medecin traitant||
`PSE_ACT_NAT`|
integer|Nature d&#x27;activité du professionnel de santé exécutant||
`PSE_CNV_COD`|
integer|Code convention du professionnel de santé exécutant||
`PSE_REF_ADH`|
string|Top prestation exécuté par un professionnel de santé adhérent à l&#x27;option référent||
`PSE_SPE_COD`|
integer|Spécialite médicale du professionnel de santé exécutant||
`PSE_STJ_COD`|
integer|Mode d&#x27;exercice du professionnel de santé exécutant||
`PSP_ACT_NAT`|
integer|Nature d&#x27;activite du professionnel de santé prescripteur||
`PSP_CNV_COD`|
integer|Code convention du professionnel de santé prescripteur||
`PSP_PPS_NUM`|
string|Numéro RPPS du prescripteur salarié||
`PSP_REF_ADH`|
string|Top prestation prescrite par un professionnel de santé adhérent à l&#x27;option référent||
`PSP_SPE_COD`|
integer|Spécialité médicale du professionnel de santé prescripteur||
`PSP_STJ_COD`|
integer|Mode d&#x27;exercice du professionnel de santé prescripteur||
`PSP_SVI_PPS`|
integer|indicateur de fiabilité du numéro RPPS||
`DCT_ORD_NUM`|
integer|numéro d&#x27;ordre du décompte dans l&#x27;organisme||
`FLX_DIS_DTD`|
date|Date de mise à disposition des données||
`FLX_EMT_NUM`|
integer|numéro d&#x27;émetteur du flux||
`FLX_EMT_ORD`|
integer|numéro de séquence du flux||
`FLX_EMT_TYP`|
integer|Type d&#x27;émetteur||
`FLX_TRT_DTD`|
date|Date d&#x27;entrée des données dans le système d&#x27;information||
`ORG_CLE_NUM`|
string|organisme de liquidation des prestations (avant fusion des caisses)||
`PRS_ORD_NUM`|
integer|Numéro d&#x27;ordre de la prestation dans le décompte||
`REM_TYP_AFF`|
integer|type de remboursement affiné||
`BEN_DRT_SPF`|
string|Droits spécifiques à l&#x27;ACS (avec ou sans tiers payant intégral)||
`BEN_ACS_TOP`|
boolean|Top contrat ACS Tiers payant Intégral||
`EXE_CTX_PFS`|
string|Contexte Professionnels de santé||
`PRS_TYP_MAJ`|
string|Type de majoration||
`EXE_CTX_BEN`|
string|Contexte Bénéficiaire||
`CPL_FTA_COD`|
integer|Code de forçage du taux pour les compléments d&#x27;actes||
`PRS_PPU_SEC`|
integer|Code privé - public de la Prestations||
`BEN_CTA_TYP`|
integer|Type de contrat complémentaire||
`PRS_DRA_AME`|
date|Date réelle (année et mois) de l&#x27;accouchement||
`DRG_AFF_NAT`|
integer|Code affiné du destinataire du règlement||
`PRS_MNT_MAJ`|
number|montant de la majoration||
`PRE_IND_PEL`|
string|Indicateur Prescription en Ligne||
`PRS_DIS_PRE`|
string|Dispositif de prévention||
`CPL_REM_TAU`|
number|Taux de remboursement des compléments d&#x27;actes||
`PRS_QTT_MAJ`|
integer|Quantité de majorations||

