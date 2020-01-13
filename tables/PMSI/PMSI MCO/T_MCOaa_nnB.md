# T_MCOaa_nnB

Description du Séjour

- Clé primaire : `ETA_NUM, RSA_NUM`

## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|AGE_ANN|nombre réel|Age en années|||
|AGE_GES|nombre réel|Age gestationnel|||
|AGE_JOU|nombre réel|Age en jours|||
|ANT_SUP_NBR|nombre réel|Nombre de suppléments antepartum|||
|AUT_PGV_NBR|nombre réel|Nombre d'autorisations d'unités médicales à portée globale valides (Nb_AutPGV)|||
|BDI_COD|chaîne de caractères|Code géographique de résidence|||
|BDI_DEP|chaîne de caractères|Code département de résidence|||
|BEB_SEJ|chaîne de caractères|Type de séjour inférieur à la borne extrême basse|||
|BEH_NBJ|nombre réel|Nombre de journées au-delà de la borne extrême haute|||
|CAI_SUP_NBR|nombre réel|Nombre de suppléments caisson hyperbare|||
|COD_SEX|chaîne de caractères|Sexe|||
|DEL_REG_ENT|nombre réel|Délai de la date des dernières règles par rapport à la date d'entrée|||
|DGN_PAL|chaîne de caractères|Diagnostic principal (DP)|||
|DGN_REL|chaîne de caractères|Diagnostic relié (DR)|||
|DOS_TYP|chaîne de caractères|Type de dosimétrie|||
|ENT_MOD|chaîne de caractères|Mode d'entrée dans le champ du PMSI-MCO|||
|ENT_PRV|chaîne de caractères|Provenance|||
|ETA_NUM|chaîne de caractères|Numéro FINESS e-PMSI|||
|ETE_GHS_NUM|nombre réel|Numéro de GHS (du GHM GENRSA)|||
|EXB_NBJ|nombre réel|Nb journées EXB|||
|GHS_9615_ACT|nombre réel|Nombre d'actes menant dans le GHS 9615|||
|GHS_HS_INNOV|chaîne de caractères|GHS si non prise en compte de l'innovation|||
|GHS_NUM|chaîne de caractères|Numéro de GHS (du GHM GENRSA)|||
|GRC_GHM|chaîne de caractères|GHM calculé par la clinique|||
|GRC_RET|booléen|Groupage établissement Code Retour|||
|GRC_VER|chaîne de caractères|Groupage établissement Version classification|||
|GRG_GHM|chaîne de caractères|GHM calculé par le GENRSA|||
|GRG_RET|booléen|Code retour obtenu par GENRSA|||
|GRG_VER|chaîne de caractères|Groupage GENRSA :Version de la classification|||
|INNOV_NUM|chaîne de caractères|Numéro d'innovation|||
|MACH_TYP_RAD|chaîne de caractères|Type de machine en radiothérapie|||
|NBR_ACT|nombre réel|Nombre de zones d'actes (nA) dans ce RSA|||
|NBR_DGN|nombre réel|Nombre de diagnostics associés significatifs (nDAS) dans ce RSA|||
|NBR_RUM|nombre réel|Nombre de RUM composant le RSS d'origine (NbRUM)|||
|NBR_SEA|nombre réel|Nombre de séances|||
|NBR_SUP_NN1|nombre réel|Nombre de suppléments NN1|||
|NBR_SUP_NN2|nombre réel|Nombre de suppléments NN2|||
|NBR_SUP_NN3|nombre réel|Nombre de suppléments NN3|||
|NBR_SUP_REA|nombre réel|Nombre de suppléments pour REA (réanimation)|||
|NBR_SUP_REP|nombre réel|Nombre de suppléments REP (réanimation pédiatrique)|||
|NBR_SUP_SOI|nombre réel|Nombre de suppléments soins intensifs provenant de la réanimation|||
|NBR_SUP_SRC|nombre réel|Nombre de suppléments pour SRC (surveillance continue)|||
|NBR_SUP_STF|nombre réel|Nombre de suppléments pour STF (soins intensifs)|||
|PAS_LIT_DED|chaîne de caractères|Passage dans un lit dédié de soins palliatifs|||
|PLO_ACT|chaîne de caractères|Type de prestation de prélèvement d'organe|||
|POI_NAI|nombre réel|Poids d'entrée (en grammes)|||
|RSA_NUM|chaîne de caractères|N° d'index du RSA|||
|RSS_NUM|chaîne de caractères|Numéro de version du format du RSA|||
|RTH_SUP_NBR|nombre réel|Nombre de zones de suppléments de radiothérapie (Nb_Rdth)|||
|SEJ_COD_CONF|chaîne de caractères|Confirmation du codage du séjour|||
|SEJ_NBJ|nombre réel|Durée totale du séjour dans le champ du PMSI (vide si séances)|||
|SEJ_TYP|chaîne de caractères|Type de séjour|||
|SEQ_RUM|chaîne de caractères|N° séquentiel du RUM ayant fourni le DP|||
|SOR_ANN|chaîne de caractères|Année de sortie|||
|SOR_DES|chaîne de caractères|Destination|||
|SOR_MOD|chaîne de caractères|Mode de sortie du champ PMSI-MCO|||
|SOR_MOI|chaîne de caractères|Mois de sortie|||
|SUP_ENT_DPA|nombre réel|Nombre de suppléments pour les entraînements à la dialyse péritonéale automatisée hors séances|||
|SUP_ENT_DPC|nombre réel|Nombre de suppléments pour les entraînements à la dialyse péritonéale continue ambulatoire hors séances|||
|SUP_ENT_HEM|nombre réel|Nombre de suppléments pour les entraînements à l'hémodialyse hors séances|||
|SUP_HEM_HS|nombre réel|Nombre de suppléments pour hémodialyse hors séances|||
|SUP_RAD_PED|nombre réel|Nombre de suppléments radiothérapie pédiatrique|||
|TAR_SEQ_NUM|chaîne de caractères|Numéro séquentiel de tarifs|||
|TOP_AVASTIN|chaîne de caractères|Top Radiation partielle Avastin|||
|TOP_DEF_CARD|chaîne de caractères|Supplément défibrillateur cardiaque|||
|TOP_GHS_MIN_SUS|chaîne de caractères|Top GHS minoré|||
|TOP_VLV_AOR|chaîne de caractères|Top valves aortiques percutanées|||
|TYP_GEN_RSA|chaîne de caractères|Type de génération automatique du RSA|||
|UHCD_TOP|chaîne de caractères|Top UHCD|||
|NBR_NAIS_ANT|nombre réel|Nombres de naissances vivantes antérieures|||
|GHS_9512_ACT|nombre réel|Nombre d'actes menant dans le GHS 9512|||
|GHS_9515_ACT|nombre réel|Nombre d'actes menant dans le GHS 9515|||
|GHS_9511_ACT|nombre réel|Nombre d'actes menant dans le GHS 9511|||
|GHS_9619_ACT|nombre réel|Nombre d'actes menant dans le GHS 9619|||
|GHS_9610_ACT|nombre réel|Nombre d'actes menant dans le GHS 9610|||
|NBR_IVG_ANT|nombre réel|Nombre d’IVG antérieures|||
|GHS_9620_ACT|nombre réel|Nombre d'actes menant dans le GHS 9620|||
|NBR_SUP_SSC|nombre réel|Nombre de suppléments pour SSC (surveillance continue)|||
|GHS_9622_ACT|nombre réel|Nombre d'actes menant dans le GHS 9622|||
|GHM_24707Z_ACT|nombre réel|Nombre d'actes menant dans le GHM 24Z07Z ou 28Z13Z|||
|GHS_9621_ACT|nombre réel|Nombre d'actes menant dans le GHS 9621|||
|NBR_SEA_SROS|nombre réel|Nombre de séances avant SROS|||
|GHM_24706Z_ACT|nombre réel|Nombre d'actes menant dans le GHM 24Z06Z ou 28Z12Z|||
|GHM_24705Z_ACT|nombre réel|Nombre d'actes menant dans le GHM 24Z05Z ou 28Z11Z|||
|FAIS_NBR|nombre réel|Nombre de faisceaux|||
|GHS_9611_ACT|nombre réel|Nombre d'actes menant dans le GHS 9611|||
|GHS_9612_ACT|nombre réel|Nombre d'actes menant dans le GHS 9612|||
|GHS_9510_ACT|nombre réel|Nombre d'actes menant dans le GHS 9510|||
|GHS_9524_ACT|nombre réel|Nombre d'actes menant dans le GHS 9524|||
|DLY_ACT|chaîne de caractères|Forfait dialyse|||
|GHS_6523_ACT|nombre réel|Nombre d'actes menant dans le GHS 6523|||
|NBR_SUP_SRA|nombre réel|Nombre de suppléments pour SRA (réanimation)|||
|COD_IGS|chaîne de caractères|IGS 2|||
|ANN_IVG_PREC|chaîne de caractères|Année de l’IVG précédente|||
