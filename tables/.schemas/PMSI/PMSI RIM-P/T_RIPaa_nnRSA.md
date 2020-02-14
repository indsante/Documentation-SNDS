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
`ETA_NUM_EPMSI`|chaîne de caractères|N° FINESS e-PMSI||
`FOR_NUM`|chaîne de caractères|N° format||
`FOR_NUM_ORI`|chaîne de caractères|N° format RIM d&#x27;orgine||
`ETA_NUM_TWO`|chaîne de caractères|Second n° FINESS||
`IPP_IRR_CRY`|chaîne de caractères|Cryptage irreversible de l&#x27;IPP||
`SEJ_IDT`|chaîne de caractères|Identifiant de séjour||
`AGE_ANN`|nombre réel|Age du patient en années||
`AGE_JOU`|nombre réel|Age du patient en jours pour les enfants de moins d&#x27;un an||
`COD_SEX`|chaîne de caractères|Sexe du patient||
`BDI_COD`|chaîne de caractères|Code géographique de résidence||
`BDI_DEP`|chaîne de caractères|Code département de résidence||
`FOR_ACT`|chaîne de caractères|Forme d&#x27;activité||
`RIP_NUM`|chaîne de caractères|N° séquentiel de séjour||
`ENT_MOD`|chaîne de caractères|Mode d&#x27;entrée de séjour||
`ENT_PRV`|chaîne de caractères|Provenance||
`SOR_MOD`|chaîne de caractères|Mode de sortie de séjour||
`SOR_DES`|chaîne de caractères|Destination||
`SEC_NUM`|chaîne de caractères|N°de secteur ou de dispositif intersectoriel||
`MOD_SOI`|chaîne de caractères|Mode légal de soins||
`SEQ_IND`|chaîne de caractères|Indicateur de séquence correspondant à une sortie d’essai||
`SEQ_SEQ_NUM`|chaîne de caractères|N° séquentiel de séquence au sein du séjour||
`DEL_DAT`|nombre réel|Délai entre la date de début de la séquence et la date d&#x27;entrée du séjour||
`SEQ_PRE_IND`|chaîne de caractères|Indicateur de première séquence du séjour||
`SEQ_DER_IND`|chaîne de caractères|Indicateur de dernière séquence du séjour||
`SEQ_FIN_MOI`|date|Mois de la date de fin de séquence||
`SEQ_FIN_ANN`|année|Année de la date de fin de séquence||
`SEQ_COU_NBJ`|nombre entier|Nombre de jours couverts par la séquence||
`PRE_JOU_NBJ`|nombre entier|Nombre de jours de présence||
`PRE_DEM_JOU_NBJ`|nombre entier|Nombre de demi-journées de présence||
`THE_ISO_NBJ`|nombre entier|Nombre de jours d’isolement thérapeutique||
`SCO_DEP_HAB`|chaîne de caractères|Score pour la dépendance pour l’habillage (AVQ)||
`SCO_DEP_DPL`|chaîne de caractères|Score pour la dépendance pour le déplacement/Locomotion (AVQ)||
`SCO_DEP_ALI`|chaîne de caractères|Score pour la dépendance pour l’alimentation (AVQ)||
`SCO_DEP_CON`|chaîne de caractères|Score pour la dépendance pour la continence (AVQ)||
`SCO_DEP_CPT`|chaîne de caractères|Score pour la dépendance pour le comportement (AVQ)||
`SCO_DEP_COM`|chaîne de caractères|Score dépendance communication (AVQ)||
`THE_MS_IND`|chaîne de caractères|Indicateur d’accompagnement thérapeutique en milieu scolaire||
`ANO_IND`|chaîne de caractères|Indicateur d&#x27;anomalie||
`ETB_SAN_AUTOR`|chaîne de caractères|Indicateur FINESS géographique sans autorisation||
`TYP_GEN_RSA`|chaîne de caractères|Type de génération automatique du RPSA||
`DGN_PAL`|chaîne de caractères|Diagnostic principal ou motif de prise en charge principale||
`NBR_DGN`|nombre réel|Nombre de diagnostics et facteurs associés||
`NBR_CCAM`|nombre entier|Nombre d&#x27;actes CCAM||
`SEJ_LEG`|chaîne de caractères|Mode légal de séjour||
`SCO_DEP_REL`|chaîne de caractères|Score pour la dépendance pour la relation (AVQ)||
`NAT_PEC`|chaîne de caractères|Nature de prise en charge||

