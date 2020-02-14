## Schéma

- Titre : Table des données comptables
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_CPT_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`CPT_DEP_PER`|
string|Periode comptable||
`CPT_EXC_RTC`|
integer|Exercice de rattachement||
`CPT_MIR_NUM`|
string|N° compte MIRCOSS||
`CPT_MVT_MNT`|
number|Montant (signé) du mouvement comptable||
`CPT_MVT_SGN`|
integer|Signe du mouvement comptable||
`CPT_MVT_SNS`|
string|Sens du Mouvement comptable||
`CPT_ORD_NUM`|
integer|N° ordre ventilation comptable||
`CPT_TRM_RGM`|
string|N° de compte régime||
`CPT_VEN_TYP`|
integer|type de ventilation||
`GES_CPT_COD`|
string|Code gestion comptable mnemonique||
`GES_GRG_COD`|
integer|Grand régime de gestion comptable||
`ORG_CLE_NEW`|
string|Code de l&#x27;organisme de liquidation||
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

