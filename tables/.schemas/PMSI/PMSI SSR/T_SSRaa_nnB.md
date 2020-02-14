## Schéma

- Titre : Description du Séjour
<br />
- Clé primaire : `ETA_NUM`, `RHA_NUM`, `RHS_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM` => table [T_SSRaa_nnE](/tables/T_SSRaa_nnE) [ `ETA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20SSR/T_SSRaa_nnB.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM`|
string|N° FINESS d&#x27;inscription e-PMSI||
`RHA_VER`|
string|N° version du format du RHA||
`GEN_VER`|
string|N° version de GENRHA||
`GRC_VER`|
string|Version de groupage Etablissement||
`GRC_GME`|
string|Groupage GME Etablissement||
`GRC_RET`|
boolean|Code retour GME Etablissement||
`GRC_TOP_ERR`|
string|Indicateur d’erreur GME Etablissement||
`GRG_VER`|
string|Version de groupage GENRHA||
`GRG_GME`|
string|Groupage GME GENRHA||
`GRG_RET`|
boolean|Code retour GME GENRHA||
`GRG_TOP_ERR`|
string|Indicateur d’erreur GME GENRHA||
`TYP_GEN_RHA`|
string|Type de génération automatique du RHA||
`RHA_NUM`|
string|N° Séquentiel du séjour||
`RHS_NUM`|
string|Numéro séquentiel du RHS||
`AGE_ANN`|
number|Age||
`COD_SEX`|
string|Sexe||
`BDI_COD`|
string|Code géographique de résidence||
`BDI_DEP`|
string|Code département de résidence||
`RHS_ANT_SEJ_ENT`|
number|Antériorité du RHS par rapport à l&#x27;entrée dans le séjour||
`MOI_ANN_SOR_SEJ`|
string|Mois/ Année de sortie du séjour||
`HOS_TYP_UM`|
string|Type d’hospitalisation UM||
`AUT_TYP_UM`|
string|Type d&#x27;autorisation d’UM||
`ETA_NUM_GEO`|
string|N° FINESS géographique||
`ENT_MOD`|
string|Mode d’entrée UM||
`ENT_PRV`|
string|Provenance||
`SOR_MOD`|
string|Mode de sortie UM||
`SOR_DES`|
string|Destination||
`DEB_SEM`|
string|Semaine de début de séjour SSR||
`DEB_FIN`|
string|Semaine de fin de séjour SSR||
`SEJ_ANT`|
number|Antériorité du RHS par rapport à l&#x27;entrée dans l&#x27;UM||
`MOI_ANN`|
string|Mois Année du RHS||
`JP_HWE`|
string|Jours de présence hors week-end||
`JP_WE`|
string|Jours de présence en week-end||
`ANC_CHI`|
number|Ancienneté de la date chirurgicale||
`FP_PEC`|
string|Finalité principale de prise en charge||
`MOR_PRP`|
string|Manifestation morbide principale||
`ETL_AFF`|
string|Affection étiologique||
`HAB_DEP`|
string|Dépendance à l’habillage||
`DPL_DEP`|
string|Dépendance au déplacement||
`ALI_DEP`|
string|Dépendance à l’alimentation||
`CON_DEP`|
string|Dépendance à la continence||
`CPT_DEP`|
string|Dépendance au comportement||
`REL_DEP`|
string|Dépendance à la relation||
`NBR_DGN`|
number|Nombre de diagnostics associés dans ce RHS (n1)||
`NBR_CSARR`|
number|Nombre d&#x27;actes CSARR dans ce RHS (n2)||
`NBR_CCAM`|
number|Nombre d&#x27;actes CCAM dans ce RHS (n3)||
`REHOS_PRJ_THP`|
string|Poursuite du même projet thérapeutique||
`GMT_NUM`|
string|GMT||
`EXB_TOP`|
string|Indicateur d&#x27;appartenance à la zone basse||
`EXB_NBJ`|
integer|Nombre de journées du supplément zone basse||
`EXH_NBJ`|
integer|Nombre de journées en zone haute||
`LIT_DEDIE`|
string|Lit identifié soins palliatifs (LISP)||
`SCORE_RR`|
number|Score RR||
`TYP_US`|
string|Type unité spécifique||
`ASS_DGN_3`|
string|Diagnostic associé n° 3||
`ASS_DGN_13`|
string|Diagnostic associé n° 13||
`ASS_DGN_10`|
string|Diagnostic associé n° 10||
`ASS_DGN_2`|
string|Diagnostic associé n° 2||
`PHY`|
number|Physiothérapie||
`BAL`|
number|Balnéothérapie||
`ASS_DGN_8`|
string|Diagnostic associé n° 8||
`URO_SPH_RED`|
number|Rééducation uro-sphinctérienne||
`ASS_DGN_7`|
string|Diagnostic associé n° 7||
`FR_UTL`|
string|Utilisation d’un fauteuil roulant||
`BIL`|
number|Bilans||
`ASS_DGN_17`|
string|Diagnostic associé n° 17||
`REI_RED`|
number|Réadaptation-réinsertion||
`ASS_DGN_5`|
string|Diagnostic associé n° 5||
`COL_RED`|
number|Rééducation collective||
`ASS_DGN_1`|
string|Diagnostic associé n° 1||
`NEU_PSY_RED`|
number|Rééducation neuro-psychologique||
`ASS_DGN_16`|
string|Diagnostic associé n° 16||
`MEC_RED`|
number|Rééducation mécanique||
`GRC_CMC`|
string|CMC de l&#x27;établissement||
`NUT_RED`|
number|Rééducation nutritionnelle||
`ASS_DGN_18`|
string|Diagnostic associé n° 18||
`NBR_ACT`|
number|Nombre d’actes (n) médicaux||
`GRC_GHJ`|
string|GHJ de l&#x27;établissement||
`NBR_CCAR`|
number|Nombre d&#x27;actes CdARR dans ce RHS (n2)||
`GRG_GHJ`|
string|GHJ du GENRHA||
`ASS_DGN_11`|
string|Diagnostic associé n° 11||
`ASS_DGN_14`|
string|Diagnostic associé n° 14||
`ASS_DGN_9`|
string|Diagnostic associé n° 9||
`ASS_DGN_19`|
string|Diagnostic associé n° 19||
`RHS_NBR_IVA`|
string|Nombre total de points IVA  du RHS||
`ASS_DGN_12`|
string|Diagnostic associé n° 12||
`APP_ADP`|
number|Adaptation d’appareillage||
`GRG_CMC`|
string|CMC du GENRHA||
`ASS_DGN_20`|
string|Diagnostic associé n° 20||
`ASS_DGN_6`|
string|Diagnostic associé n° 6||
`SEN_MOT_RED`|
number|Rééducation sensori-motrice||
`ASS_DGN_15`|
string|Diagnostic associé n° 15||
`ASS_DGN_4`|
string|Diagnostic associé n° 4||
`CAR_RSP_RED`|
number|Rééducation cardio-respiratoire||
`ACT_TYP`|
string|Type d’activité||

