## Schéma

- Titre : Table des données de remboursements complémentaires
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_ARO_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ARO_ASU_NAT`|
integer|Nature d&#x27;assurance (autre que régime obligatoire)||
`ARO_CPL_COD`|
integer|Complément d&#x27;acte (autre que régime obligatoire)||
`ARO_ENV_TYP`|
integer|Type d&#x27;enveloppe (autre que régime obligatoire)||
`ARO_FJH_TYP`|
integer|Type de prise en charge du forfait Journalier (autre que régime obligatoire)||
`ARO_FTA_COD`|
integer|Code forçage du taux (hors parcours de soins) autre que régime obligatoire||
`ARO_MIN_TAU`|
number|Taux modulé (hors parcours de Soins) du remboursement (autre que régime obligatoire)||
`ARO_MOD_MNT`|
number|Montant de la majoration de la participation de l&#x27;assuré (autre que régime obligatoire)||
`ARO_ORD_NUM`|
integer|Numéro d&#x27;ordre du remboursement autre que régime obligatoire||
`ARO_PRS_NAT`|
integer|Nature de la prestation (autre que régime obligatoire)||
`ARO_REM_BSE`|
number|Base de remboursement (autre que régime obligatoire)||
`ARO_REM_MNT`|
number|Montant versé-remboursé (autre que régime obligatoire)||
`ARO_REM_PRU`|
number|Prix unitaire de l&#x27;acte (autre que régime obligatoire)||
`ARO_REM_SGN`|
integer|Signe du remboursement (autre que régime obligatoire)||
`ARO_REM_TAU`|
number|Taux réel de remboursement (autre que régime obligatoire)||
`ARO_REM_TYP`|
integer|Type de remboursement (autre que régime obligatoire)||
`ARO_THE_TAU`|
integer|Taux théorique de remboursement||
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

