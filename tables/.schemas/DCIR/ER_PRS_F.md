## Schéma

- Titre : Table des prestations
<br />
- Clé primaire : `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF`
<br />
- Clé(s) étrangère(s) : <br />
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
`BEN_AMA_COD`|nombre entier|Age du bénéficiaire en mois (si &lt; 2 ans) ou années (si &gt;&#x3D; 2 ans)||
`BEN_CDI_NIR`|chaîne de caractères|Code d&#x27;identification du NIR||
`BEN_CMU_CAT`|nombre entier|Catégorie d&#x27;organisme complémentaire CMU||
`BEN_CMU_ORG`|chaîne de caractères|Code de l&#x27;organisme complémentaire||
`BEN_CMU_TOP`|nombre entier|Top bénéficiaire de la CMU complémentaire||
`BEN_DCD_AME`|année et mois|Année et mois de décès du bénéficiaire||
`BEN_DCD_DTE`|date|Date de décès du bénéficiaire||
`BEN_EHP_TOP`|nombre entier|Identification hospitalisation en EHPAD ou en EMS||
`BEN_IAT_CAT`|chaîne de caractères|Catégorie du bénéficiaire (Invalidité - Rente accident du travail)||
`BEN_NAI_ANN`|année|Année de naissance du bénéficiaire||
`BEN_PAI_CMU`|nombre entier|Type de procédure de paiement CMU||
`BEN_NIR_PSA`|chaîne de caractères|Identifiant anonyme du patient dans le SNIIRAM||
`BEN_RNG_GEM`|nombre entier|rang de naissance du bénéficiaire||
`BEN_QAF_COD`|nombre entier|Qualité du matricule de l&#x27;ouvreur de droits||
`BEN_RES_COM`|chaîne de caractères|commune de résidence du destinataire du règlement||
`BEN_RES_DPT`|chaîne de caractères|Département de résidence du bénéficiaire||
`BEN_SEX_COD`|nombre entier|Code sexe du bénéficiaire||
`ORG_AFF_BEN`|chaîne de caractères|Code de l&#x27;organisme d&#x27;affiliation||
`PRS_REJ_TOP`|nombre entier|Top rejet ou signalement||
`EXE_SOI_AMD`|année et mois|Date (année et mois) de début d&#x27;exécution des soins||
`EXE_SOI_AMF`|année et mois|Date (année et mois) de fin d&#x27;exécution des soins||
`EXE_SOI_DTD`|date|Date de début d&#x27;exécution des soins||
`EXE_SOI_DTF`|date|Date de fin d&#x27;exécution des soins||
`PRE_PRE_AMD`|année et mois|Date (année et mois) de prescription||
`PRE_PRE_DTD`|date|Date de prescription||
`PRS_GRS_DTD`|date|Date présumée de Grossesse||
`PRS_HOS_AMD`|année et mois|Date (année et mois) de début d&#x27;hospitalisation||
`PRS_HOS_DTD`|date|Date de début d&#x27;hospitalisation||
`BSE_REM_BSE`|nombre réel|Base de remboursement de l&#x27;acte de base||
`BSE_REM_MNT`|nombre réel|Montant remboursé pour l&#x27;acte de base||
`BSE_REM_PRU`|nombre réel|Prix unitaire de l&#x27;acte (acte de base)||
`BSE_REM_SGN`|nombre entier|Signe du remboursement (acte de base)||
`CPL_REM_BSE`|nombre réel|Base de remboursement (complément d&#x27;acte)||
`CPL_REM_MNT`|nombre réel|Montant versé-remboursé (complément d&#x27;acte)||
`CPL_REM_PRU`|nombre réel|Prix unitaire de l&#x27;acte (complément d&#x27;acte)||
`CPL_REM_SGN`|nombre entier|Signe du remboursement (complément d&#x27;acte)||
`PRS_ACT_CFT`|nombre réel|Coefficient (non signé) de l&#x27;acte||
`PRS_ACT_COG`|nombre réel|Coefficient global de l&#x27;acte de base||
`PRS_ACT_NBR`|nombre réel|Dénombrement des actes de base||
`PRS_ACT_QTE`|nombre réel|Quantité de l&#x27;acte de base||
`PRS_DEP_MNT`|nombre réel|Montant global du dépassement||
`PRS_ETA_RAC`|nombre réel|Reste à charge de l&#x27;établissement||
`PRS_PAI_MNT`|nombre réel|Montant global de la dépense||
`RGO_MOD_MNT`|nombre réel|Montant de la majoration de la participation de l&#x27;assuré (régime obligatoire)||
`ORB_BSE_NUM`|chaîne de caractères|Organisme de base de liquidation des prestations||
`ORL_BSE_NUM`|chaîne de caractères|Organisme de base de liquidation des prestations||
`RGM_COD`|nombre entier|Code du petit régime||
`RGM_GRG_COD`|nombre entier|Grand régime de liquidation du bénéficiaire||
`ACC_TIE_IND`|nombre entier|Top tiers responsable accident||
`BSE_FJH_TYP`|nombre entier|Type de prise en charge du forfait journalier (acte de base)||
`BSE_PRS_NAT`|nombre entier|Nature de la prestation (acte de base)||
`CPL_AFF_COD`|nombre entier|Code complément affiné||
`CPL_ANO_COD`|nombre entier|Code anomalie complément affiné||
`CPL_FJH_TYP`|nombre entier|Type de prise en charge du forfait journalier (complément d&#x27;acte)||
`CPL_MAJ_TOP`|nombre entier|Top complément - majoration||
`CPL_PRS_NAT`|nombre entier|Nature de la prestation (complément d&#x27;acte)||
`DPN_QLF`|nombre entier|Qualificatif de la dépense||
`DRG_MOD`|nombre entier|Mode de règlement||
`DRG_NAT`|nombre entier|Code du destinataire du règlement||
`EXE_LIE_COD`|nombre entier|Lieu d&#x27;exécution de l&#x27;acte médical||
`EXO_MTF`|nombre entier|Motif d&#x27;exonération du ticket modérateur||
`IJR_EMP_NUM`|nombre entier|Numéro demployeur pour les indemnités journalières||
`IJR_RVL_NAT`|chaîne de caractères|Nature de la revalorisation (indemnités journalières)||
`MTM_NAT`|nombre entier|Modulation du ticket modérateur||
`ORG_CLE_NEW`|chaîne de caractères|Code de l&#x27;organisme de liquidation||
`PRE_REN_COD`|nombre entier|Type de renouvellement de la prescription (opticien - pharmacien)||
`PRS_CRD_OPT`|nombre entier|Top option de coordination||
`PRS_DPN_QLP`|nombre entier|Qualificatif de la dépense transmis||
`PRS_NAT_REF`|nombre entier|Code de la Prestations de référence||
`PRS_OPS_TRF`|nombre entier|Indicateur de tarif opposable||
`PRS_PDS_QCP`|nombre entier|Code qualificatif du parcours de soins||
`PRS_PDS_QTP`|nombre entier|Qualificatif du parcours de soins transmis||
`PRS_PPF_COD`|chaîne de caractères|Prise en compte de la participation forfaitaire||
`PRS_PRE_MTT`|nombre entier|Code origine de la prescription||
`PRS_REF_KIN`|chaîne de caractères|Indicateur Référentiel Entente Préalable kinésithérapie||
`PRS_TOP_ENP`|nombre entier|Indicateur Top Entente Préalable||
`PRS_TYP_KIN`|chaîne de caractères|Type de prestation Kiné||
`RGO_ASU_NAT`|nombre entier|Nature d&#x27;assurance (régime obligatoire)||
`RGO_ENV_TYP`|nombre entier|Type d&#x27;enveloppe (régime obligatoire)||
`RGO_FTA_COD`|nombre entier|Forçage du taux (hors parcours de soins) (part obligatoire)||
`RGO_MIN_TAU`|nombre réel|Taux de remboursement modulé (hors parcours de Soins) (régime obligatoire)||
`RGO_REM_TAU`|nombre réel|Taux de remboursement (part Régime Obligatoire)||
`RGO_THE_TAU`|nombre réel|Taux de remboursement théorique (régime obligatoire)||
`ETB_PRE_FIN`|chaîne de caractères|N° FINESS de l&#x27;établissement prescripteur||
`PFS_EXE_NUM`|chaîne de caractères|N° du professionnel de santé exécutant||
`PFS_PRE_NUM`|chaîne de caractères|N° du professionnel de santé prescripteur||
`PRS_MTT_NUM`|chaîne de caractères|Numéro du medecin traitant||
`PSE_ACT_NAT`|nombre entier|Nature d&#x27;activité du professionnel de santé exécutant||
`PSE_CNV_COD`|nombre entier|Code convention du professionnel de santé exécutant||
`PSE_REF_ADH`|chaîne de caractères|Top prestation exécuté par un professionnel de santé adhérent à l&#x27;option référent||
`PSE_SPE_COD`|nombre entier|Spécialite médicale du professionnel de santé exécutant||
`PSE_STJ_COD`|nombre entier|Mode d&#x27;exercice du professionnel de santé exécutant||
`PSP_ACT_NAT`|nombre entier|Nature d&#x27;activite du professionnel de santé prescripteur||
`PSP_CNV_COD`|nombre entier|Code convention du professionnel de santé prescripteur||
`PSP_PPS_NUM`|chaîne de caractères|Numéro RPPS du prescripteur salarié||
`PSP_REF_ADH`|chaîne de caractères|Top prestation prescrite par un professionnel de santé adhérent à l&#x27;option référent||
`PSP_SPE_COD`|nombre entier|Spécialité médicale du professionnel de santé prescripteur||
`PSP_STJ_COD`|nombre entier|Mode d&#x27;exercice du professionnel de santé prescripteur||
`PSP_SVI_PPS`|nombre entier|indicateur de fiabilité du numéro RPPS||
`DCT_ORD_NUM`|nombre entier|numéro d&#x27;ordre du décompte dans l&#x27;organisme||
`FLX_DIS_DTD`|date|Date de mise à disposition des données||
`FLX_EMT_NUM`|nombre entier|numéro d&#x27;émetteur du flux||
`FLX_EMT_ORD`|nombre entier|numéro de séquence du flux||
`FLX_EMT_TYP`|nombre entier|Type d&#x27;émetteur||
`FLX_TRT_DTD`|date|Date d&#x27;entrée des données dans le système d&#x27;information||
`ORG_CLE_NUM`|chaîne de caractères|organisme de liquidation des prestations (avant fusion des caisses)||
`PRS_ORD_NUM`|nombre entier|Numéro d&#x27;ordre de la prestation dans le décompte||
`REM_TYP_AFF`|nombre entier|type de remboursement affiné||
`BEN_DRT_SPF`|chaîne de caractères|Droits spécifiques à l&#x27;ACS (avec ou sans tiers payant intégral)||
`BEN_ACS_TOP`|booléen|Top contrat ACS Tiers payant Intégral||
`EXE_CTX_PFS`|chaîne de caractères|Contexte Professionnels de santé||
`PRS_TYP_MAJ`|chaîne de caractères|Type de majoration||
`EXE_CTX_BEN`|chaîne de caractères|Contexte Bénéficiaire||
`CPL_FTA_COD`|nombre entier|Code de forçage du taux pour les compléments d&#x27;actes||
`PRS_PPU_SEC`|nombre entier|Code privé - public de la Prestations||
`BEN_CTA_TYP`|nombre entier|Type de contrat complémentaire||
`PRS_DRA_AME`|année et mois|Date réelle (année et mois) de l&#x27;accouchement||
`DRG_AFF_NAT`|nombre entier|Code affiné du destinataire du règlement||
`PRS_MNT_MAJ`|nombre réel|montant de la majoration||
`PRE_IND_PEL`|chaîne de caractères|Indicateur Prescription en Ligne||
`PRS_DIS_PRE`|chaîne de caractères|Dispositif de prévention||
`CPL_REM_TAU`|nombre réel|Taux de remboursement des compléments d&#x27;actes||
`PRS_QTT_MAJ`|nombre entier|Quantité de majorations||

