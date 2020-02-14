## Schéma

- Titre : Table des données de codage de la Liste des Produits et Prestations
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_TIP_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`LPP_ECT_MNT`|
number|Montant total de l&#x27;écart indemnisable LPP||
`LPP_ECU_MNT`|
number|Montant unitaire de l&#x27;écart indemnisable LPP||
`ORG_CLE_NEW`|
string|Code de l&#x27;organisme de liquidation||
`TIP_ACL_DTD`|
date|Date de début de location ou d&#x27;achat||
`TIP_ACL_DTF`|
date|Date de fin de location ou d&#x27;achat||
`TIP_ACT_PRU`|
number|Prix unitaire LPP du produit ou de la Prestations||
`TIP_ACT_QSN`|
integer|Quantité d&#x27;actes LPP||
`TIP_ORD_NUM`|
integer|N° Ordre Prestation Affinee LPP||
`TIP_PRS_IDE`|
integer|Code LPP du produit ou de la Prestations||
`TIP_PRS_TYP`|
integer|Type de Prestations fournie||
`TIP_PUB_PRX`|
number|Prix unitaire public||
`TIP_SIR_NUM`|
string|N° SIRET Fabriquant-Importateur||
`DCT_ORD_NUM`|
integer|numéro d&#x27;ordre du décompte dans l&#x27;organisme||
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

