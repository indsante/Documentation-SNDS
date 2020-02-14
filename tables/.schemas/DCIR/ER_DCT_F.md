## Schéma

- Titre : Table des données de décompte
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_DCT_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`DCT_ARC_DTE`|date|Date liquidation||
`DCT_ARR_DTE`|date|Date arrivée du dossier||
`DCT_CTL_COD`|nombre entier|Code du contrôle||
`DCT_LOT_TCR`|chaîne de caractères|Type Certification du Lot||
`DCT_CTL_TYP`|chaîne de caractères|Type de Controle||
`DCT_EMT_IDT`|chaîne de caractères|Identification de l&#x27;émetteur||
`DCT_ENT_SUP`|nombre entier|Type de saisie affinée||
`DCT_INT_VER`|chaîne de caractères|Type de Version interface Tiers||
`DCT_MAN_DTD`|date|Date de mandatement Initial||
`DCT_MUT_CMP`|chaîne de caractères|Part Mutuelle Complementaire décompte||
`DCT_MVT_SYS`|nombre entier|Type de saisie||
`DCT_REM_DTD`|date|Date de remboursement - recyclage||
`DCT_RGU_SNS`|chaîne de caractères|Sens de la régulation||
`ORG_CLE_NEW`|chaîne de caractères|Code de l&#x27;organisme de liquidation||
`DCT_ORD_NUM`|nombre entier|N° ordre décompte dans caisse                      1||
`FLX_DIS_DTD`|date|Date de mise à disposition des données||
`FLX_EMT_NUM`|nombre entier|numéro d&#x27;émetteur du flux||
`FLX_EMT_ORD`|nombre entier|numéro de séquence du flux||
`FLX_EMT_TYP`|nombre entier|Type d&#x27;émetteur||
`FLX_TRT_DTD`|date|Date d&#x27;entrée des données dans le système d&#x27;information||
`ORG_CLE_NUM`|chaîne de caractères|organisme de liquidation des prestations (avant fusion des caisses)||
`PRS_ORD_NUM`|nombre entier|N° ordre prestation dans décompte                 8||
`REM_TYP_AFF`|nombre entier|Type de remboursement affiné                                 9||

