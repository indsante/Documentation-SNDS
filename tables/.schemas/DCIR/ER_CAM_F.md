## Schéma

- Titre : Table des données de codage de la Classification Commune des Actes Médicaux
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_CAM_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`CAM_ACT_COD`|chaîne de caractères|Code activite||
`CAM_ACT_PRU`|nombre réel|Prix unitaire CCAM de l&#x27;acte médical||
`CAM_ASS_COD`|chaîne de caractères|Code association||
`CAM_CAB_IND`|chaîne de caractères|Top supplément de charge en cabinet||
`CAM_DOC_EXT`|chaîne de caractères|Extension documentaire||
`CAM_MOD_COD`|chaîne de caractères|Codes modificateurs||
`CAM_ORD_NUM`|nombre entier|Numéro d&#x27;ordre de la prestation affinée CCAM||
`CAM_PRS_IDE`|chaîne de caractères|Code CCAM de l&#x27;acte médical||
`CAM_QUA_DEN`|chaîne de caractères|Localisation dentaire||
`CAM_REM_BSE`|nombre réel|Base de remboursement de la CCAM||
`CAM_REM_COD`|chaîne de caractères|Code remboursement exceptionnel||
`CAM_TRT_PHA`|nombre entier|Phase de traitement||
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
`CAM_MI4_MNT`|nombre réel|Montant Minoration due à association sur Modificateur4||
`CAM_MM4_MNT`|nombre réel|Montant Majoration Modificateur4||
`CAM_GRI_TAR`|chaîne de caractères|Grille tarifaire||
`CAM_SUP_MNT`|nombre réel|Montant supplément de Charge en Cabinet||
`CAM_MI1_MNT`|nombre réel|Montant Minoration due à association sur Modificateur1||
`CAM_NRM_MNT`|nombre réel|Montant Non Rmb du à annulation du tarif pr acte non rmb||
`CAM_MI3_MNT`|nombre réel|Montant Minoration due à association sur Modificateur3||
`CAM_MM2_MNT`|nombre réel|Montant Majoration Modificateur2||
`CAM_MM3_MNT`|nombre réel|Montant Majoration Modificateur3||
`CAM_RED_MNT`|nombre réel|Montant réduction Tarif due à praticien non conventionné||
`CAM_MPU_MNT`|nombre réel|Montant Minoration due à association sur PU de l&#x27; Acte||
`CAM_MM1_MNT`|nombre réel|Montant Majoration Modificateur1||
`CAM_MI2_MNT`|nombre réel|Montant Minoration due à association sur Modificateur2||

