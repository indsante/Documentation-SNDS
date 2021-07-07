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
`DDP_COD`|nombre entier|Code de la discipline de Prestations (ou discipline médico tarifaire)||
`ETB_EXE_FIN`|chaîne de caractères|N° FINESS de l&#x27;établissement exécutant||
`ETE_CAT_COD`|nombre entier|Catégorie de l&#x27;établissement exécutant||
`ETE_ETA_TRF`|chaîne de caractères|Numéro d&#x27;établissement de transfert||
`ETE_GHS_NUM`|nombre entier|Numéro du GHS||
`ETE_IND_TAA`|nombre entier|Indicateur TAA||
`ETE_MCO_COE`|nombre réel|Coefficient (Non Signé) MCO||
`ETE_MCO_DDP`|chaîne de caractères|Code discipline MCO établissement exécutant||
`ETE_NAT_FSJ`|chaîne de caractères|Nature de fin de séjour||
`ETE_STJ_COD`|nombre entier|Statut Juridique de l&#x27;établissement juridique||
`ETE_TYP_COD`|nombre entier|Code du type de l&#x27;établissement exécutant||
`MDT_COD`|nombre entier|Code du mode de traitement||
`MFT_COD`|nombre entier|Code du mode de fixation des tarifs||
`ORG_CLE_NEW`|chaîne de caractères|Code de l&#x27;organisme de liquidation||
`PRS_PPU_SEC`|nombre entier|Secteur privé/public||
`DCT_ORD_NUM`|nombre entier|N° ordre décompte dans caisse                      1||
`FLX_DIS_DTD`|date|Date de mise à disposition des données||
`FLX_EMT_NUM`|nombre entier|numéro d&#x27;émetteur du flux||
`FLX_EMT_ORD`|nombre entier|numéro de séquence du flux||
`FLX_EMT_TYP`|nombre entier|Type d&#x27;émetteur||
`FLX_TRT_DTD`|date|Date d&#x27;entrée des données dans le système d&#x27;information||
`ORG_CLE_NUM`|chaîne de caractères|organisme de liquidation des prestations (avant fusion des caisses)||
`PRS_ORD_NUM`|nombre entier|Numéro d&#x27;ordre de la prestation dans le décompte||
`REM_TYP_AFF`|nombre entier|type de remboursement affiné||

