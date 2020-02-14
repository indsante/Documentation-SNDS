## Schéma

- Titre : Table des Résumés Anonyme Par Sous-Séquence (RAPSS)
<br />
- Clé primaire : `ETA_NUM_EPMSI`, `RHAD_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI` => table [T_HADaa_nnE](/tables/T_HADaa_nnE) [ `ETA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20HAD/T_HADaa_nnB.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`AGE_ANN`|
number|Age en années||
`AGE_JOU`|
number|Age en jours||
`AVQ_ALI`|
string|Cotation dépendance AVQ, alimentation||
`AVQ_CON`|
string|Cotation dépendance AVQ, continence||
`AVQ_CPT`|
string|Cotation dépendance AVQ, comportement||
`AVQ_HAB`|
string|Cotation dépendance AVQ, habillage/toilette||
`AVQ_LOC`|
string|Cotation dépendance AVQ, locomotion||
`AVQ_REL`|
string|Cotation dépendance AVQ, relation||
`BDI_COD`|
string|Code géographique||
`BDI_DEP`|
string|Code département||
`COD_CONF`|
string|Confirmation de codage||
`COD_SEX`|
string|Sexe du patient||
`DEP_COT`|
string|Cotation dépendance selon Karnofsky||
`DGN_PAL`|
string|Diagnostic principal||
`ENT_MOD`|
string|Mode d’entrée||
`ENT_PRV`|
string|Provenance||
`ETA_NUM_ESMS`|
string|Numéro FINESS EHPA||
`ETA_NUM_EPMSI`|
string|N° FINESS e-PMSI||
`ETA_NUM_GEO`|
string|Numéro FINESS de l’établissement (code géographique)||
`FAC_NUM`|
string|N° séquentiel de facture||
`FIN_ANN_SEQ`|
string|Année de la date de fin de la séquence||
`FIN_MOI_SEQ`|
string|Mois de la date de fin de la séquence||
`MOT_NFACT_AM`|
string|Motif de la non facturation à l&#x27;assurance maladie||
`NBR_ACT`|
integer|Nombre d&#x27;actes||
`NBR_DGN`|
integer|Nombre de diagnostics associés||
`NBR_DGN_MPA`|
integer|Nombre de diagnostics liés au MPA (n2)||
`NBR_DGN_MPP`|
integer|Nombre de diagnostics liés au MPP (n1)||
`PAT_TYP_DOM`|
string|Type de lieu de domicile du patient||
`PEC_ASS`|
string|Mode de prise en charge associé||
`PEC_MOD_ASSO1`|
string|Mode de prise en charge associé documentaire 1||
`PEC_MOD_ASSO2`|
string|Mode de prise en charge associé documentaire 2||
`PEC_MOD_ASSO3`|
string|Mode de prise en charge associé documentaire 3||
`PEC_MOD_ASSO4`|
string|Mode de prise en charge associé documentaire 4||
`PEC_MOD_ASSO5`|
string|Mode de prise en charge associé documentaire 5||
`PEC_PAL`|
string|Mode de prise en charge principal||
`RAPSS_NUM`|
string|N° de version du format de RAPSS||
`RHAD_NUM`|
string|N° séquentiel de séjour d&#x27;HAD||
`SEJ_FACT_AM`|
string|Séjour facturable à l&#x27;assurance maladie||
`SEJ_NBJ`|
integer|Nombre de journées dans le séjour||
`SEQ_DER`|
string|Dernière séquence||
`SEQ_NBJ`|
integer|Nombre de journées dans la séquence||
`SEQ_NUM`|
string|N° de la séquence dans le séjour||
`SEQ_SEJ_NBJ`|
integer|Nombre de journées entre le début de la séquence et la date d’entrée du séjour||
`SOR_ANN`|
string|Année de la date de sortie du séjour||
`SOR_ANN_SSEQ`|
string|Année de sortie de la sous-séquence||
`SOR_DES`|
string|Destination||
`SOR_MOD`|
string|Mode de sortie||
`SOR_MOI`|
string|Mois de la date de sortie du séjour||
`SOR_MOI_SSEQ`|
string|Mois de sortie de la sous-séquence||
`SSEQ_NBJ`|
integer|Nombre de journées de la sous-séquence||
`SSEQ_NUM`|
string|Numéro de sous-séquence||
`SSEQ_SEJ_DER`|
string|Dernière sous séquence du séjour||
`SSEQ_SEQ_DER`|
string|Dernière sous-séquence de la séquence||
`SSEQ_SEQ_NBJ`|
integer|Nombre de journées entre le début de la sous-séquence et le début de la séquence||
`RPSS_VER`|
string|N° de version du format du RPSS||
`DGN_PAL3`|
string|Diagnostic associé 3||
`DGN_PAL5`|
string|Diagnostic associé 5||
`DGN_PAL4`|
string|Diagnostic associé 4||
`ETA_GRP_VER`|
string|Groupage établissement : version de la classification||
`SEQ_SEJ`|
string|Numéro de la séquence dans le séjour||
`DGN_PAL1`|
string|Diagnostic associé 1||
`ETA_GRP_RET`|
boolean|Groupage établissement : code retour||
`ETA_GRP_GHPC`|
string|Groupage établissement : n° du GHPC||
`ETA_NUM_EHPA`|
string|Numéro FINESS EHPA||
`DGN_PAL6`|
string|Diagnostic associé 6||
`ETA_NUM_JUR`|
string|N° FINESS de l’établissement (code géographique)||
`ETB_TAR_NBR`|
integer|Groupage établissement : nombre de zones tarifaires établissement (1 à 4)||
`DGN_PAL7`|
string|Diagnostic associé 7||
`DGN_PAL2`|
string|Diagnostic associé 2||
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (code géographique)||

