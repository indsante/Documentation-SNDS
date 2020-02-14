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
`ARO_ASU_NAT`|nombre entier|Nature d&#x27;assurance (autre que régime obligatoire)||
`ARO_CPL_COD`|nombre entier|Complément d&#x27;acte (autre que régime obligatoire)||
`ARO_ENV_TYP`|nombre entier|Type d&#x27;enveloppe (autre que régime obligatoire)||
`ARO_FJH_TYP`|nombre entier|Type de prise en charge du forfait Journalier (autre que régime obligatoire)||
`ARO_FTA_COD`|nombre entier|Code forçage du taux (hors parcours de soins) autre que régime obligatoire||
`ARO_MIN_TAU`|nombre réel|Taux modulé (hors parcours de Soins) du remboursement (autre que régime obligatoire)||
`ARO_MOD_MNT`|nombre réel|Montant de la majoration de la participation de l&#x27;assuré (autre que régime obligatoire)||
`ARO_ORD_NUM`|nombre entier|Numéro d&#x27;ordre du remboursement autre que régime obligatoire||
`ARO_PRS_NAT`|nombre entier|Nature de la prestation (autre que régime obligatoire)||
`ARO_REM_BSE`|nombre réel|Base de remboursement (autre que régime obligatoire)||
`ARO_REM_MNT`|nombre réel|Montant versé-remboursé (autre que régime obligatoire)||
`ARO_REM_PRU`|nombre réel|Prix unitaire de l&#x27;acte (autre que régime obligatoire)||
`ARO_REM_SGN`|nombre entier|Signe du remboursement (autre que régime obligatoire)||
`ARO_REM_TAU`|nombre réel|Taux réel de remboursement (autre que régime obligatoire)||
`ARO_REM_TYP`|nombre entier|Type de remboursement (autre que régime obligatoire)||
`ARO_THE_TAU`|nombre entier|Taux théorique de remboursement||
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

