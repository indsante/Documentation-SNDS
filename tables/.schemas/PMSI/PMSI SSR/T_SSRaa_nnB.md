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
`ETA_NUM`|chaîne de caractères|N° FINESS d&#x27;inscription e-PMSI||
`RHA_VER`|chaîne de caractères|N° version du format du RHA||
`GEN_VER`|chaîne de caractères|N° version de GENRHA||
`GRC_VER`|chaîne de caractères|Version de groupage Etablissement||
`GRC_GME`|chaîne de caractères|Groupage GME Etablissement||
`GRC_RET`|booléen|Code retour GME Etablissement||
`GRC_TOP_ERR`|chaîne de caractères|Indicateur d’erreur GME Etablissement||
`GRG_VER`|chaîne de caractères|Version de groupage GENRHA||
`GRG_GME`|chaîne de caractères|Groupage GME GENRHA||
`GRG_RET`|booléen|Code retour GME GENRHA||
`GRG_TOP_ERR`|chaîne de caractères|Indicateur d’erreur GME GENRHA||
`TYP_GEN_RHA`|chaîne de caractères|Type de génération automatique du RHA||
`RHA_NUM`|chaîne de caractères|N° Séquentiel du séjour||
`RHS_NUM`|chaîne de caractères|Numéro séquentiel du RHS||
`AGE_ANN`|nombre réel|Age||
`COD_SEX`|chaîne de caractères|Sexe||
`BDI_COD`|chaîne de caractères|Code géographique de résidence||
`BDI_DEP`|chaîne de caractères|Code département de résidence||
`RHS_ANT_SEJ_ENT`|nombre réel|Antériorité du RHS par rapport à l&#x27;entrée dans le séjour||
`MOI_ANN_SOR_SEJ`|année et mois|Mois/ Année de sortie du séjour||
`HOS_TYP_UM`|chaîne de caractères|Type d’hospitalisation UM||
`AUT_TYP_UM`|chaîne de caractères|Type d&#x27;autorisation d’UM||
`ETA_NUM_GEO`|chaîne de caractères|N° FINESS géographique||
`ENT_MOD`|chaîne de caractères|Mode d’entrée UM||
`ENT_PRV`|chaîne de caractères|Provenance||
`SOR_MOD`|chaîne de caractères|Mode de sortie UM||
`SOR_DES`|chaîne de caractères|Destination||
`DEB_SEM`|chaîne de caractères|Semaine de début de séjour SSR||
`DEB_FIN`|chaîne de caractères|Semaine de fin de séjour SSR||
`SEJ_ANT`|nombre réel|Antériorité du RHS par rapport à l&#x27;entrée dans l&#x27;UM||
`MOI_ANN`|année et mois|Mois Année du RHS||
`JP_HWE`|chaîne de caractères|Jours de présence hors week-end||
`JP_WE`|chaîne de caractères|Jours de présence en week-end||
`ANC_CHI`|nombre réel|Ancienneté de la date chirurgicale||
`FP_PEC`|chaîne de caractères|Finalité principale de prise en charge||
`MOR_PRP`|chaîne de caractères|Manifestation morbide principale||
`ETL_AFF`|chaîne de caractères|Affection étiologique||
`HAB_DEP`|chaîne de caractères|Dépendance à l’habillage||
`DPL_DEP`|chaîne de caractères|Dépendance au déplacement||
`ALI_DEP`|chaîne de caractères|Dépendance à l’alimentation||
`CON_DEP`|chaîne de caractères|Dépendance à la continence||
`CPT_DEP`|chaîne de caractères|Dépendance au comportement||
`REL_DEP`|chaîne de caractères|Dépendance à la relation||
`NBR_DGN`|nombre réel|Nombre de diagnostics associés dans ce RHS (n1)||
`NBR_CSARR`|nombre réel|Nombre d&#x27;actes CSARR dans ce RHS (n2)||
`NBR_CCAM`|nombre réel|Nombre d&#x27;actes CCAM dans ce RHS (n3)||
`REHOS_PRJ_THP`|chaîne de caractères|Poursuite du même projet thérapeutique||
`GMT_NUM`|chaîne de caractères|GMT||
`EXB_TOP`|chaîne de caractères|Indicateur d&#x27;appartenance à la zone basse||
`EXB_NBJ`|nombre entier|Nombre de journées du supplément zone basse||
`EXH_NBJ`|nombre entier|Nombre de journées en zone haute||
`LIT_DEDIE`|chaîne de caractères|Lit identifié soins palliatifs (LISP)||
`SCORE_RR`|nombre réel|Score RR||
`TYP_US`|chaîne de caractères|Type unité spécifique||
`ASS_DGN_3`|chaîne de caractères|Diagnostic associé n° 3||
`ASS_DGN_13`|chaîne de caractères|Diagnostic associé n° 13||
`ASS_DGN_10`|chaîne de caractères|Diagnostic associé n° 10||
`ASS_DGN_2`|chaîne de caractères|Diagnostic associé n° 2||
`PHY`|nombre réel|Physiothérapie||
`BAL`|nombre réel|Balnéothérapie||
`ASS_DGN_8`|chaîne de caractères|Diagnostic associé n° 8||
`URO_SPH_RED`|nombre réel|Rééducation uro-sphinctérienne||
`ASS_DGN_7`|chaîne de caractères|Diagnostic associé n° 7||
`FR_UTL`|chaîne de caractères|Utilisation d’un fauteuil roulant||
`BIL`|nombre réel|Bilans||
`ASS_DGN_17`|chaîne de caractères|Diagnostic associé n° 17||
`REI_RED`|nombre réel|Réadaptation-réinsertion||
`ASS_DGN_5`|chaîne de caractères|Diagnostic associé n° 5||
`COL_RED`|nombre réel|Rééducation collective||
`ASS_DGN_1`|chaîne de caractères|Diagnostic associé n° 1||
`NEU_PSY_RED`|nombre réel|Rééducation neuro-psychologique||
`ASS_DGN_16`|chaîne de caractères|Diagnostic associé n° 16||
`MEC_RED`|nombre réel|Rééducation mécanique||
`GRC_CMC`|chaîne de caractères|CMC de l&#x27;établissement||
`NUT_RED`|nombre réel|Rééducation nutritionnelle||
`ASS_DGN_18`|chaîne de caractères|Diagnostic associé n° 18||
`NBR_ACT`|nombre réel|Nombre d’actes (n) médicaux||
`GRC_GHJ`|chaîne de caractères|GHJ de l&#x27;établissement||
`NBR_CCAR`|nombre réel|Nombre d&#x27;actes CdARR dans ce RHS (n2)||
`GRG_GHJ`|chaîne de caractères|GHJ du GENRHA||
`ASS_DGN_11`|chaîne de caractères|Diagnostic associé n° 11||
`ASS_DGN_14`|chaîne de caractères|Diagnostic associé n° 14||
`ASS_DGN_9`|chaîne de caractères|Diagnostic associé n° 9||
`ASS_DGN_19`|chaîne de caractères|Diagnostic associé n° 19||
`RHS_NBR_IVA`|chaîne de caractères|Nombre total de points IVA  du RHS||
`ASS_DGN_12`|chaîne de caractères|Diagnostic associé n° 12||
`APP_ADP`|nombre réel|Adaptation d’appareillage||
`GRG_CMC`|chaîne de caractères|CMC du GENRHA||
`ASS_DGN_20`|chaîne de caractères|Diagnostic associé n° 20||
`ASS_DGN_6`|chaîne de caractères|Diagnostic associé n° 6||
`SEN_MOT_RED`|nombre réel|Rééducation sensori-motrice||
`ASS_DGN_15`|chaîne de caractères|Diagnostic associé n° 15||
`ASS_DGN_4`|chaîne de caractères|Diagnostic associé n° 4||
`CAR_RSP_RED`|nombre réel|Rééducation cardio-respiratoire||
`ACT_TYP`|chaîne de caractères|Type d’activité||

