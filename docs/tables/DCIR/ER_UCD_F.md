# ER_UCD_F

affinage UCD (pharmacie hospitalière)


## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|ORG_CLE_NEW|chaîne de caractères|Organisme de liquidation (après fusion des caisses)|||
|UCD_ACH_PRU|nombre réel|Prix d'achat unitaire|||
|UCD_CAL_PRU|nombre réel|Prix unitaire calculé|||
|UCD_DLV_NBR|nombre réel|Nombre d'unités délivrées|||
|UCD_ECT_MNT|nombre réel|Montant total de l'écart indemnisable|||
|UCD_ECU_MNT|nombre réel|Montant unitaire de l'écart indemnisable|||
|UCD_FAC_PRU|nombre réel|Prix unitaire facturé|||
|UCD_FRC_COE|nombre réel|Coefficient de fractionnement|||
|UCD_LGN_NUM|nombre réel|Numéro de ligne UCD|||
|UCD_MAR_MNT|nombre réel|Montant TTC de la marge de rétrocession|||
|UCD_ORD_NUM|nombre réel|N° ordre prestation affinée UCD|||
|UCD_RCT_COU|nombre réel|Coût de reconstitution du médicament|||
|UCD_TOP_UCD|nombre réel|Top UCD (0=pharmacie rétrocédée 1=pharmacie en sus du GHS)|||
|UCD_TTF_MNT|nombre réel|Montant total TTC délivré|||
|UCD_UCD_COD|chaîne de caractères|Code prestation affinée UCD|||
|DCT_ORD_NUM|nombre réel|N° ordre décompte dans caisse                      1|||
|FLX_DIS_DTD|date|Date de mise à disposition des données dans SI     2|||
|FLX_EMT_NUM|nombre réel|N° émetteur du flux                                                  3|||
|FLX_EMT_ORD|nombre réel|N° séquence du flux                                               4|||
|FLX_EMT_TYP|nombre réel|Type d'émetteur                                                      5|||
|FLX_TRT_DTD|date|Date de traitement des données dans SI                   6|||
|ORG_CLE_NUM|chaîne de caractères|Ancien concept de l'organisme de liquidation (avant fusion, jusqu’au jour J de la fusion)          7|||
|PRS_ORD_NUM|nombre réel|N° ordre prestation dans décompte                 8|||
|REM_TYP_AFF|nombre réel|Type de remboursement affiné                                 9|||
