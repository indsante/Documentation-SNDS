## Schéma

- Titre : Table des données de codage des Unités Communes de Dispensation
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_UCD_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ORG_CLE_NEW`|chaîne de caractères|Code de l&#x27;organisme de liquidation||
`UCD_ACH_PRU`|nombre réel|Prix d&#x27;achat unitaire||
`UCD_CAL_PRU`|nombre réel|Prix unitaire calculé||
`UCD_DLV_NBR`|nombre entier|Nombre d&#x27;unités délivrées||
`UCD_ECT_MNT`|nombre réel|Montant UCD total de l&#x27;écart indemnisable||
`UCD_ECU_MNT`|nombre réel|Montant UCD unitaire de l&#x27;écart indemnisable||
`UCD_FAC_PRU`|nombre réel|Prix unitaire facturé||
`UCD_FRC_COE`|nombre réel|Coefficient de fractionnement||
`UCD_LGN_NUM`|nombre entier|Numéro de ligne UCD||
`UCD_MAR_MNT`|nombre réel|Montant UCD TTC de la marge de rétrocession||
`UCD_ORD_NUM`|nombre entier|Numéro d&#x27;Ordre de la Prestation Affinée UCD||
`UCD_RCT_COU`|nombre réel|Coût de reconstitution du médicament||
`UCD_TOP_UCD`|nombre entier|Top UCD||
`UCD_TTF_MNT`|nombre réel|Montant total TTC facturé||
`UCD_UCD_COD`|chaîne de caractères|Code UCD de la pharmacie hospitalière||
`DCT_ORD_NUM`|nombre entier|numéro d&#x27;ordre du décompte dans l&#x27;organisme||
`FLX_DIS_DTD`|date|Date de mise à disposition des données||
`FLX_EMT_NUM`|nombre entier|numéro d&#x27;émetteur du flux||
`FLX_EMT_ORD`|nombre entier|numéro de séquence du flux||
`FLX_EMT_TYP`|nombre entier|Type d&#x27;émetteur||
`FLX_TRT_DTD`|date|Date d&#x27;entrée des données dans le système d&#x27;information||
`ORG_CLE_NUM`|chaîne de caractères|organisme de liquidation des prestations (avant fusion des caisses)||
`PRS_ORD_NUM`|nombre entier|Numéro d&#x27;ordre de la prestation dans le décompte||
`REM_TYP_AFF`|nombre entier|type de remboursement affiné||

