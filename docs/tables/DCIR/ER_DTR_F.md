# ER_DTR_F

affinage des actes de transport 


## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|ORG_CLE_NEW|chaîne de caractères|Organisme de liquidation (après fusion des caisses)|||
|TRS_ACT_PRU|nombre réel|Prix unitaire de la prestation affinée transport|||
|TRS_ACT_QSN|nombre réel|Nombre de KM facturés/forfaits/suppléments|||
|TRS_ORD_NUM|nombre réel|N° ordre prestation affinée transport|||
|TRS_PRS_IDE|nombre réel|Code prestation affinée transport|||
|TRS_TRS_MTF|nombre réel|Motif du transport|||
|DCT_ORD_NUM|nombre réel|N° ordre décompte dans caisse                      1|||
|FLX_DIS_DTD|date|Date de mise à disposition des données dans SI     2|||
|FLX_EMT_NUM|nombre réel|N° émetteur du flux                                                  3|||
|FLX_EMT_ORD|nombre réel|N° séquence du flux                                               4|||
|FLX_EMT_TYP|nombre réel|Type d'émetteur                                                      5|||
|FLX_TRT_DTD|date|Date de traitement des données dans SI                   6|||
|ORG_CLE_NUM|chaîne de caractères|Ancien concept de l'organisme de liquidation (avant fusion, jusqu’au jour J de la fusion)          7|||
|PRS_ORD_NUM|nombre réel|N° ordre prestation dans décompte                 8|||
|REM_TYP_AFF|nombre réel|Type de remboursement affiné                                 9|||
