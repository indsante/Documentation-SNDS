# ER_TRS_F

affinage des actes détaillés de transport 


## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|ITR_ORD_NUM|nombre réel|N° ordre information détaillée transport|||
|ORG_CLE_NEW|chaîne de caractères|Organisme de liquidation (après fusion des caisses)|||
|TRS_ACP_NOM|chaîne de caractères|Nom de l'accompagnateur diplômé du véhicule|||
|TRS_ACP_NOMC|chaîne de caractères|Nom de l'accompagnateur (anonymisé)|||
|TRS_CDR_NOM|chaîne de caractères|Nom du conducteur diplômé du véhicule|||
|TRS_CDR_NOMC|chaîne de caractères|Nom du conducteur (anonymisé)|||
|TRS_ARR_CDP|chaîne de caractères|Code postal du lieu d'arrivée du transport|||
|TRS_DEP_CDP|chaîne de caractères|Code postal du lieu de départ du transport|||
|TRS_TRP_HRA|nombre réel|L’heure d’arrivée du transport (format hhmm)|||
|TRS_TRP_HRD|nombre réel|L’heure de départ du transport (format hhmm)|||
|TRS_VEH_NUM|chaîne de caractères|Numéro minéralogique du véhicule|||
|TRS_VEH_NUMC|chaîne de caractères|Numéro minéralogique du véhicule (anonymisé)|||
|DCT_ORD_NUM|nombre réel|N° ordre décompte dans caisse                      1|||
|FLX_DIS_DTD|date|Date de mise à disposition des données dans SI     2|||
|FLX_EMT_NUM|nombre réel|N° émetteur du flux                                                  3|||
|FLX_EMT_ORD|nombre réel|N° séquence du flux                                               4|||
|FLX_EMT_TYP|nombre réel|Type d'émetteur                                                      5|||
|FLX_TRT_DTD|date|Date de traitement des données dans SI                   6|||
|ORG_CLE_NUM|chaîne de caractères|Ancien concept de l'organisme de liquidation (avant fusion, jusqu’au jour J de la fusion)          7|||
|PRS_ORD_NUM|nombre réel|N° ordre prestation dans décompte                 8|||
|REM_TYP_AFF|nombre réel|Type de remboursement affiné                                 9|||
