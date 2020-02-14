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
`AGE_ANN`|nombre réel|Age en années||
`AGE_JOU`|nombre réel|Age en jours||
`AVQ_ALI`|chaîne de caractères|Cotation dépendance AVQ, alimentation||
`AVQ_CON`|chaîne de caractères|Cotation dépendance AVQ, continence||
`AVQ_CPT`|chaîne de caractères|Cotation dépendance AVQ, comportement||
`AVQ_HAB`|chaîne de caractères|Cotation dépendance AVQ, habillage/toilette||
`AVQ_LOC`|chaîne de caractères|Cotation dépendance AVQ, locomotion||
`AVQ_REL`|chaîne de caractères|Cotation dépendance AVQ, relation||
`BDI_COD`|chaîne de caractères|Code géographique||
`BDI_DEP`|chaîne de caractères|Code département||
`COD_CONF`|chaîne de caractères|Confirmation de codage||
`COD_SEX`|chaîne de caractères|Sexe du patient||
`DEP_COT`|chaîne de caractères|Cotation dépendance selon Karnofsky||
`DGN_PAL`|chaîne de caractères|Diagnostic principal||
`ENT_MOD`|chaîne de caractères|Mode d’entrée||
`ENT_PRV`|chaîne de caractères|Provenance||
`ETA_NUM_ESMS`|chaîne de caractères|Numéro FINESS EHPA||
`ETA_NUM_EPMSI`|chaîne de caractères|N° FINESS e-PMSI||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS de l’établissement (code géographique)||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture||
`FIN_ANN_SEQ`|année|Année de la date de fin de la séquence||
`FIN_MOI_SEQ`|date|Mois de la date de fin de la séquence||
`MOT_NFACT_AM`|chaîne de caractères|Motif de la non facturation à l&#x27;assurance maladie||
`NBR_ACT`|nombre entier|Nombre d&#x27;actes||
`NBR_DGN`|nombre entier|Nombre de diagnostics associés||
`NBR_DGN_MPA`|nombre entier|Nombre de diagnostics liés au MPA (n2)||
`NBR_DGN_MPP`|nombre entier|Nombre de diagnostics liés au MPP (n1)||
`PAT_TYP_DOM`|chaîne de caractères|Type de lieu de domicile du patient||
`PEC_ASS`|chaîne de caractères|Mode de prise en charge associé||
`PEC_MOD_ASSO1`|chaîne de caractères|Mode de prise en charge associé documentaire 1||
`PEC_MOD_ASSO2`|chaîne de caractères|Mode de prise en charge associé documentaire 2||
`PEC_MOD_ASSO3`|chaîne de caractères|Mode de prise en charge associé documentaire 3||
`PEC_MOD_ASSO4`|chaîne de caractères|Mode de prise en charge associé documentaire 4||
`PEC_MOD_ASSO5`|chaîne de caractères|Mode de prise en charge associé documentaire 5||
`PEC_PAL`|chaîne de caractères|Mode de prise en charge principal||
`RAPSS_NUM`|chaîne de caractères|N° de version du format de RAPSS||
`RHAD_NUM`|chaîne de caractères|N° séquentiel de séjour d&#x27;HAD||
`SEJ_FACT_AM`|chaîne de caractères|Séjour facturable à l&#x27;assurance maladie||
`SEJ_NBJ`|nombre entier|Nombre de journées dans le séjour||
`SEQ_DER`|chaîne de caractères|Dernière séquence||
`SEQ_NBJ`|nombre entier|Nombre de journées dans la séquence||
`SEQ_NUM`|chaîne de caractères|N° de la séquence dans le séjour||
`SEQ_SEJ_NBJ`|nombre entier|Nombre de journées entre le début de la séquence et la date d’entrée du séjour||
`SOR_ANN`|année|Année de la date de sortie du séjour||
`SOR_ANN_SSEQ`|année|Année de sortie de la sous-séquence||
`SOR_DES`|chaîne de caractères|Destination||
`SOR_MOD`|chaîne de caractères|Mode de sortie||
`SOR_MOI`|date|Mois de la date de sortie du séjour||
`SOR_MOI_SSEQ`|date|Mois de sortie de la sous-séquence||
`SSEQ_NBJ`|nombre entier|Nombre de journées de la sous-séquence||
`SSEQ_NUM`|chaîne de caractères|Numéro de sous-séquence||
`SSEQ_SEJ_DER`|chaîne de caractères|Dernière sous séquence du séjour||
`SSEQ_SEQ_DER`|chaîne de caractères|Dernière sous-séquence de la séquence||
`SSEQ_SEQ_NBJ`|nombre entier|Nombre de journées entre le début de la sous-séquence et le début de la séquence||
`RPSS_VER`|chaîne de caractères|N° de version du format du RPSS||
`DGN_PAL3`|chaîne de caractères|Diagnostic associé 3||
`DGN_PAL5`|chaîne de caractères|Diagnostic associé 5||
`DGN_PAL4`|chaîne de caractères|Diagnostic associé 4||
`ETA_GRP_VER`|chaîne de caractères|Groupage établissement : version de la classification||
`SEQ_SEJ`|chaîne de caractères|Numéro de la séquence dans le séjour||
`DGN_PAL1`|chaîne de caractères|Diagnostic associé 1||
`ETA_GRP_RET`|booléen|Groupage établissement : code retour||
`ETA_GRP_GHPC`|chaîne de caractères|Groupage établissement : n° du GHPC||
`ETA_NUM_EHPA`|chaîne de caractères|Numéro FINESS EHPA||
`DGN_PAL6`|chaîne de caractères|Diagnostic associé 6||
`ETA_NUM_JUR`|chaîne de caractères|N° FINESS de l’établissement (code géographique)||
`ETB_TAR_NBR`|nombre entier|Groupage établissement : nombre de zones tarifaires établissement (1 à 4)||
`DGN_PAL7`|chaîne de caractères|Diagnostic associé 7||
`DGN_PAL2`|chaîne de caractères|Diagnostic associé 2||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (code géographique)||

