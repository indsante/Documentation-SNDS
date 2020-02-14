## Schéma

- Titre : affinage des actes de transport 
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_DTR_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ORG_CLE_NEW`|
string|Organisme de liquidation (après fusion des caisses)||
`TRS_ACT_PRU`|
integer|Prix unitaire de la prestation affinée transport||
`TRS_ACT_QSN`|
integer|Nombre de KM facturés/forfaits/suppléments||
`TRS_ORD_NUM`|
integer|N° ordre prestation affinée transport||
`TRS_PRS_IDE`|
integer|Code prestation affinée transport||
`TRS_TRS_MTF`|
integer|Motif du transport||
`DCT_ORD_NUM`|
integer|N° ordre décompte dans caisse                      1||
`FLX_DIS_DTD`|
date|Date de mise à disposition des données dans SI     2||
`FLX_EMT_NUM`|
integer|N° émetteur du flux                                                  3||
`FLX_EMT_ORD`|
integer|N° séquence du flux                                               4||
`FLX_EMT_TYP`|
integer|Type d&#x27;émetteur                                                      5||
`FLX_TRT_DTD`|
date|Date de traitement des données dans SI                   6||
`ORG_CLE_NUM`|
string|Ancien concept de l&#x27;organisme de liquidation (avant fusion, jusqu’au jour J de la fusion)          7||
`PRS_ORD_NUM`|
integer|N° ordre prestation dans décompte                 8||
`REM_TYP_AFF`|
integer|Type de remboursement affiné                                 9||

