# ER_RAT_F

affinage des rentes et accidents du travail


## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|ATT_NAT|nombre réel|Nature de l'accident|||
|BEN_RAT_ANO|chaîne de caractères|N° de rente AT / MP (anonymisé)|||
|ORG_CLE_NEW|chaîne de caractères|Organisme de liquidation (après fusion des caisses)|||
|RAT_IPP_DTE|date|Date d'effet du taux d'incapacité permanente (IPP)|||
|RAT_IPP_TAU|nombre réel|Taux d'incapacité permanente (IPP)|||
|DCT_ORD_NUM|nombre réel|N° ordre décompte dans caisse                      1|||
|FLX_DIS_DTD|date|Date de mise à disposition des données dans SI     2|||
|FLX_EMT_NUM|nombre réel|N° émetteur du flux                                                  3|||
|FLX_EMT_ORD|nombre réel|N° séquence du flux                                               4|||
|FLX_EMT_TYP|nombre réel|Type d'émetteur                                                      5|||
|FLX_TRT_DTD|date|Date de traitement des données dans SI                   6|||
|ORG_CLE_NUM|chaîne de caractères|Ancien concept de l'organisme de liquidation (avant fusion, jusqu’au jour J de la fusion)          7|||
|PRS_ORD_NUM|nombre réel|N° ordre prestation dans décompte                 8|||
|REM_TYP_AFF|nombre réel|Type de remboursement affiné                                 9|||
