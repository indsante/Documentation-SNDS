## Schéma

- Titre : Table des données de codage de pharmacie

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/EGB/EB_PHA_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`PHA_PRS_C13`|
integer|Code CIP de la pharmacie de ville (13 Caractères)||
`PHA_ORD_NUM`|
integer|Numéro d&#x27;ordre de la prestation affinée pharmacie||
`PHA_ACT_QSN`|
integer|Quantité affinée signée (&#x3D; nombre de boites facturées)||
`FLX_DIS_DTD`|
date|Date de mise à disposition des données||
`PHA_MOD_PRN`|
string|Mode de prescription||
`REM_TYP_AFF`|
integer|type de remboursement affiné||
`ORG_CLE_NUM`|
string|organisme de liquidation des prestations (avant fusion des caisses)||
`ORG_CLE_NEW`|
string|Code de l&#x27;organisme de liquidation||
`FLX_TRT_DTD`|
date|Date d&#x27;entrée des données dans le système d&#x27;information||
`PHA_CPA_PCP`|
string|Condition particulière de prise en charge||
`DCT_ORD_NUM`|
integer|numéro d&#x27;ordre du décompte dans l&#x27;organisme||
`PHA_IDE_CPL`|
integer|Préfixe du code CIP||
`PHA_PRS_IDE`|
integer|Code CIP de la pharmacie de ville (ancien code sur 7 Caractères)||
`PHA_SEQ_RNV`|
integer|Séquence de renouvellement||
`PHA_ACT_PRU`|
number|Prix unitaire du médicament codé en CIP||
`FLX_EMT_TYP`|
integer|Type d&#x27;émetteur||
`CLE_TEC_PRS`|
string|Clé technique Prestation||
`PHA_DEC_TOP`|
string|Top déconditionnement||
`PHA_DEC_QSU`|
integer|Quantité complète de déconditionnement signée||
`PHA_SUB_MTF`|
integer|Motif de substitution du médicament||
`PHA_DEC_PRU`|
number|Prix unitaire de l&#x27;unité déconditionnée délivrée||
`FLX_EMT_NUM`|
integer|numéro d&#x27;émetteur du flux||
`PRS_ORD_NUM`|
integer|Numéro d&#x27;ordre de la prestation dans le décompte||
`FLX_EMT_ORD`|
integer|numéro de séquence du flux||

