## Schéma

- Titre : Table des données de codage de biologie
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_BIO_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`BIO_ACT_QSN`|nombre entier|Quantité d&#x27;actes de biologie||
`BIO_ORD_NUM`|nombre entier|Numéro d&#x27;ordre de l&#x27;acte affiné de biologie||
`BIO_PRS_IDE`|nombre entier|Code NABM de l&#x27;acte de biologie||
`ORG_CLE_NEW`|chaîne de caractères|Code de l&#x27;organisme de liquidation||
`DCT_ORD_NUM`|nombre entier|N° ordre décompte dans caisse                      1||
`FLX_DIS_DTD`|date|Date de mise à disposition des données||
`FLX_EMT_NUM`|nombre entier|numéro d&#x27;émetteur du flux||
`FLX_EMT_ORD`|nombre entier|numéro de séquence du flux||
`FLX_EMT_TYP`|nombre entier|Type d&#x27;émetteur||
`FLX_TRT_DTD`|date|Date d&#x27;entrée des données dans le système d&#x27;information||
`ORG_CLE_NUM`|chaîne de caractères|organisme de liquidation des prestations (avant fusion des caisses)||
`PRS_ORD_NUM`|nombre entier|Numéro d&#x27;ordre de la prestation dans le décompte||
`REM_TYP_AFF`|nombre entier|type de remboursement affiné||
`ARO_THE_TAU`|nombre réel|Taux théorique de remboursement (autre que régime obligatoire)||

