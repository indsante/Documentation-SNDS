# ER_PHA_F

Table des données de codage de pharmacie


## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|ORG_CLE_NEW|chaîne de caractères|Code de l'organisme de liquidation|||
|PHA_ACT_PRU|nombre réel|Prix unitaire du médicament codé en CIP|||
|PHA_ACT_QSN|nombre réel|Quantité affinée signée (= nombre de boites facturées)|||
|PHA_CPA_PCP|chaîne de caractères|Condition particulière de prise en charge|||
|PHA_DEC_PRU|nombre réel|Prix unitaire de l'unité déconditionnée délivrée|||
|PHA_DEC_QSU|nombre réel|Quantité complète de déconditionnement signée|||
|PHA_DEC_TOP|chaîne de caractères|Top déconditionnement|||
|PHA_IDE_CPL|nombre réel|Préfixe du code CIP|||
|PHA_MOD_PRN|chaîne de caractères|Mode de prescription|||
|PHA_ORD_NUM|nombre réel|Numéro d'ordre de la prestation affinée pharmacie|||
|PHA_PRS_C13|nombre réel|Code CIP de la pharmacie de ville (13 Caractères)|||
|PHA_PRS_IDE|nombre réel|Code CIP de la pharmacie de ville (ancien code sur 7 Caractères)|||
|PHA_SEQ_RNV|nombre réel|Séquence de renouvellement|||
|PHA_SUB_MTF|nombre réel|Motif de substitution du médicament|||
|DCT_ORD_NUM|nombre réel|numéro d'ordre du décompte dans l'organisme|||
|FLX_DIS_DTD|date|Date de mise à disposition des données|||
|FLX_EMT_NUM|nombre réel|numéro d'émetteur du flux|||
|FLX_EMT_ORD|nombre réel|numéro de séquence du flux|||
|FLX_EMT_TYP|nombre réel|Type d'émetteur|||
|FLX_TRT_DTD|date|Date d'entrée des données dans le système d'information|||
|ORG_CLE_NUM|chaîne de caractères|organisme de liquidation des prestations (avant fusion des caisses)|||
|PRS_ORD_NUM|nombre réel|Numéro d'ordre de la prestation dans le décompte|||
|REM_TYP_AFF|nombre réel|type de remboursement affiné|||
