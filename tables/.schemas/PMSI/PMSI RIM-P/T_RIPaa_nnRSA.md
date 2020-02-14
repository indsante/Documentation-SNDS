## Schéma

- Titre : Résumé par séquence
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RIP_NUM` => table [T_RIPaa_nnFB](/tables/T_RIPaa_nnFB) [ `ETA_NUM_EPMSI`, `RIP_NUM` ]<br />
`IPP_IRR_CRY` => table [T_RIPaa_nnR3A](/tables/T_RIPaa_nnR3A) [ `IPP_IRR_CRY` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20RIM-P/T_RIPaa_nnRSA.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|
string|N° FINESS e-PMSI||
`FOR_NUM`|
string|N° format||
`FOR_NUM_ORI`|
string|N° format RIM d&#x27;orgine||
`ETA_NUM_TWO`|
string|Second n° FINESS||
`IPP_IRR_CRY`|
string|Cryptage irreversible de l&#x27;IPP||
`SEJ_IDT`|
string|Identifiant de séjour||
`AGE_ANN`|
number|Age du patient en années||
`AGE_JOU`|
number|Age du patient en jours pour les enfants de moins d&#x27;un an||
`COD_SEX`|
string|Sexe du patient||
`BDI_COD`|
string|Code géographique de résidence||
`BDI_DEP`|
string|Code département de résidence||
`FOR_ACT`|
string|Forme d&#x27;activité||
`RIP_NUM`|
string|N° séquentiel de séjour||
`ENT_MOD`|
string|Mode d&#x27;entrée de séjour||
`ENT_PRV`|
string|Provenance||
`SOR_MOD`|
string|Mode de sortie de séjour||
`SOR_DES`|
string|Destination||
`SEC_NUM`|
string|N°de secteur ou de dispositif intersectoriel||
`MOD_SOI`|
string|Mode légal de soins||
`SEQ_IND`|
string|Indicateur de séquence correspondant à une sortie d’essai||
`SEQ_SEQ_NUM`|
string|N° séquentiel de séquence au sein du séjour||
`DEL_DAT`|
number|Délai entre la date de début de la séquence et la date d&#x27;entrée du séjour||
`SEQ_PRE_IND`|
string|Indicateur de première séquence du séjour||
`SEQ_DER_IND`|
string|Indicateur de dernière séquence du séjour||
`SEQ_FIN_MOI`|
string|Mois de la date de fin de séquence||
`SEQ_FIN_ANN`|
string|Année de la date de fin de séquence||
`SEQ_COU_NBJ`|
integer|Nombre de jours couverts par la séquence||
`PRE_JOU_NBJ`|
integer|Nombre de jours de présence||
`PRE_DEM_JOU_NBJ`|
integer|Nombre de demi-journées de présence||
`THE_ISO_NBJ`|
integer|Nombre de jours d’isolement thérapeutique||
`SCO_DEP_HAB`|
string|Score pour la dépendance pour l’habillage (AVQ)||
`SCO_DEP_DPL`|
string|Score pour la dépendance pour le déplacement/Locomotion (AVQ)||
`SCO_DEP_ALI`|
string|Score pour la dépendance pour l’alimentation (AVQ)||
`SCO_DEP_CON`|
string|Score pour la dépendance pour la continence (AVQ)||
`SCO_DEP_CPT`|
string|Score pour la dépendance pour le comportement (AVQ)||
`SCO_DEP_COM`|
string|Score dépendance communication (AVQ)||
`THE_MS_IND`|
string|Indicateur d’accompagnement thérapeutique en milieu scolaire||
`ANO_IND`|
string|Indicateur d&#x27;anomalie||
`ETB_SAN_AUTOR`|
string|Indicateur FINESS géographique sans autorisation||
`TYP_GEN_RSA`|
string|Type de génération automatique du RPSA||
`DGN_PAL`|
string|Diagnostic principal ou motif de prise en charge principale||
`NBR_DGN`|
number|Nombre de diagnostics et facteurs associés||
`NBR_CCAM`|
integer|Nombre d&#x27;actes CCAM||
`SEJ_LEG`|
string|Mode légal de séjour||
`SCO_DEP_REL`|
string|Score pour la dépendance pour la relation (AVQ)||
`NAT_PEC`|
string|Nature de prise en charge||

