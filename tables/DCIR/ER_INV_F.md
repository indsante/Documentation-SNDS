# ER_INV_F

affinage des actes invalidité


## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|INV_ATR_DTD|date|Date d'attribution de la pension d'invalidité|||
|INV_PEN_CAT|nombre réel|Catégorie de la pension d'invalidité|||
|INV_PEN_ETA|nombre réel|Etat de la pension d'invalidité|||
|ORG_CLE_NEW|chaîne de caractères|Organisme de liquidation (après fusion des caisses)|||
|DCT_ORD_NUM|nombre réel|N° ordre décompte dans caisse                      1|||
|FLX_DIS_DTD|date|Date de mise à disposition des données dans SI     2|||
|FLX_EMT_NUM|nombre réel|N° émetteur du flux                                                  3|||
|FLX_EMT_ORD|nombre réel|N° séquence du flux                                               4|||
|FLX_EMT_TYP|nombre réel|Type d'émetteur                                                      5|||
|FLX_TRT_DTD|date|Date de traitement des données dans SI                   6|||
|ORG_CLE_NUM|chaîne de caractères|Ancien concept de l'organisme de liquidation (avant fusion, jusqu’au jour J de la fusion)          7|||
|PRS_ORD_NUM|nombre réel|N° ordre prestation dans décompte                 8|||
|REM_TYP_AFF|nombre réel|Type de remboursement affiné                                 9|||
