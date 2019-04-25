# ER_PHA_F

affinage des actes de pharmacie (officine de ville)


## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|ORG_CLE_NEW|chaîne de caractères|Organisme de liquidation (après fusion des caisses)|||
|PHA_ACT_PRU|nombre réel|Prix unitaire de la prestation affinée pharmacie|||
|PHA_ACT_QSN|nombre réel|Quantité affinée (signée) (nombre de boites facturées)|||
|PHA_CPA_PCP |chaîne de caractères|Condition particulière de prise en charge |||
|PHA_DEC_PRU |nombre réel|Prix unitaire de l'unité déconditionnée délivrée |||
|PHA_DEC_QSU |nombre réel|Quantité complète de déconditionnement signée |||
|PHA_DEC_TOP |chaîne de caractères|Top déconditionnement |||
|PHA_IDE_CPL|nombre réel|Préfixe code affiné pharmacie|||
|PHA_MOD_PRN |chaîne de caractères|Mode de prescription|||
|PHA_ORD_NUM|nombre réel|N° ordre de la prestation affinée pharmacie|||
|PHA_PRS_C13|nombre réel|Code CIP sur 13 caractères|||
|PHA_PRS_IDE|nombre réel|Code prestation affinée pharmacie (CIP 7 délivré)|||
|PHA_SEQ_RNV|nombre réel|Séquence de renouvellement|||
|PHA_SUB_MTF|nombre réel|Motif de substitution du médicament|||
|DCT_ORD_NUM|nombre réel|N° ordre décompte dans caisse                      1|||
|FLX_DIS_DTD|date|Date de mise à disposition des données dans SI     2|||
|FLX_EMT_NUM|nombre réel|N° émetteur du flux                                                  3|||
|FLX_EMT_ORD|nombre réel|N° séquence du flux                                               4|||
|FLX_EMT_TYP|nombre réel|Type d'émetteur                                                      5|||
|FLX_TRT_DTD|date|Date de traitement des données dans SI                   6|||
|ORG_CLE_NUM|chaîne de caractères|Ancien concept de l'organisme de liquidation (avant fusion, jusqu’au jour J de la fusion)          7|||
|PRS_ORD_NUM|nombre réel|N° ordre prestation dans décompte                 8|||
|REM_TYP_AFF|nombre réel|Type de remboursement affiné                                 9|||
