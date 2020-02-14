## Schéma

- Titre : Table des données des établissements
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_ETE_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`DDP_COD`|
integer|Code de la discipline de Prestations (ou discipline médico tarifaire)||
`ETB_EXE_FIN`|
string|N° FINESS de l&#x27;établissement exécutant||
`ETE_CAT_COD`|
integer|Catégorie de l&#x27;établissement exécutant||
`ETE_ETA_TRF`|
string|Numéro d&#x27;établissement de transfert||
`ETE_GHS_NUM`|
integer|Numéro du GHS||
`ETE_IND_TAA`|
integer|Indicateur TAA||
`ETE_MCO_COE`|
number|Coefficient (Non Signé) MCO||
`ETE_MCO_DDP`|
string|Code discipline MCO établissement exécutant||
`ETE_NAT_FSJ`|
string|Nature de fin de séjour||
`ETE_STJ_COD`|
integer|Statut Juridique de l&#x27;établissement juridique||
`ETE_TYP_COD`|
integer|Code du type de l&#x27;établissement exécutant||
`MDT_COD`|
integer|Code du mode de traitement||
`MFT_COD`|
integer|Code du mode de fixation des tarifs||
`ORG_CLE_NEW`|
string|Code de l&#x27;organisme de liquidation||
`PRS_PPU_SEC`|
integer|Secteur privé/public||
`DCT_ORD_NUM`|
integer|N° ordre décompte dans caisse                      1||
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

