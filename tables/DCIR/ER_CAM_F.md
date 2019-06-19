# ER_CAM_F

affinage des actes médicaux (codage CCAM)


## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|CAM_ACT_COD|chaîne de caractères|Code activité (1, 2 et 3 = activité chir/med, 4 = anesthésie, 5 = circulation extracorporelle)|||
|CAM_ACT_PRU|nombre réel|Prix unitaire de la prestation affinée CCAM|||
|CAM_ASS_COD|chaîne de caractères|Code association non prévue (1=acte de tarif le plus élevé, geste complémentaire, supplément, toujours facturés à taux plein, 2=acte associé facturé à 50 % de sa valeur, 3=acte associé facturé à 75 % de sa valeur, 4=acte spécifique facturé à 100 % de sa valeur, 5=acte facturé à 100 % de sa valeur - cas particulier actes à des moments non continus de même journée)|||
|CAM_CAB_IND|chaîne de caractères|Top supplément de charge en cabinet|||
|CAM_DOC_EXT|chaîne de caractères|Extension documentaire|||
|CAM_MOD_COD|chaîne de caractères|Codes modificateur|||
|CAM_ORD_NUM|nombre réel|N° ordre prestation affinée CCAM|||
|CAM_PRS_IDE|chaîne de caractères|Code prestation affinée CCAM|||
|CAM_QUA_DEN|chaîne de caractères|N° de la dent (non renseigné)|||
|CAM_REM_BSE|nombre réel|Base de remboursement de la CCAM|||
|CAM_REM_COD|chaîne de caractères|Code remboursement exceptionnel|||
|CAM_TRT_PHA|nombre réel|Phase de traitement (0 = phase par défaut, 1 = phase 1, 2 = phase 2, 3 = phase 3)|||
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
