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
`CPT_DEP_PER`|chaîne de caractères|Periode comptable||
`CPT_EXC_RTC`|nombre entier|Exercice de rattachement||
`CPT_MIR_NUM`|chaîne de caractères|N° compte MIRCOSS||
`CPT_MVT_MNT`|nombre réel|Montant (signé) du mouvement comptable||
`CPT_MVT_SGN`|nombre entier|Signe du mouvement comptable||
`CPT_MVT_SNS`|chaîne de caractères|Sens du Mouvement comptable||
`CPT_ORD_NUM`|nombre entier|N° ordre ventilation comptable||
`CPT_TRM_RGM`|chaîne de caractères|N° de compte régime||
`CPT_VEN_TYP`|nombre entier|type de ventilation||
`GES_CPT_COD`|chaîne de caractères|Code gestion comptable mnemonique||
`GES_GRG_COD`|nombre entier|Grand régime de gestion comptable||
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

