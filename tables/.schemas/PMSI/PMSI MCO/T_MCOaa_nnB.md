## Schéma

- Titre : Description du Séjour
<br />
- Clé primaire : `ETA_NUM`, `RSA_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM` => table [T_MCOaa_nnE](/tables/T_MCOaa_nnE) [ `ETA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20MCO/T_MCOaa_nnB.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`AGE_ANN`|nombre entier|Age en années||
`AGE_GES`|nombre entier|Age gestationnel||
`AGE_JOU`|nombre entier|Age en jours||
`ANT_SUP_NBR`|nombre entier|Nombre de suppléments antepartum||
`AUT_PGV_NBR`|nombre entier|Nombre d&#x27;autorisations d&#x27;unités médicales à portée globale valides (Nb_AutPGV)||
`BDI_COD`|chaîne de caractères|Code géographique de résidence||
`BDI_DEP`|chaîne de caractères|Code département de résidence||
`BEB_SEJ`|chaîne de caractères|Type de séjour inférieur à la borne extrême basse||
`BEH_NBJ`|nombre entier|Nombre de journées au-delà de la borne extrême haute||
`CAI_SUP_NBR`|nombre entier|Nombre de suppléments caisson hyperbare||
`COD_SEX`|chaîne de caractères|Sexe||
`DEL_REG_ENT`|nombre entier|Délai de la date des dernières règles par rapport à la date d&#x27;entrée||
`DGN_PAL`|chaîne de caractères|Diagnostic principal (DP)||
`DGN_REL`|chaîne de caractères|Diagnostic relié (DR)||
`DOS_TYP`|chaîne de caractères|Type de dosimétrie||
`ENT_MOD`|chaîne de caractères|Mode d&#x27;entrée dans le champ du PMSI-MCO||
`ENT_PRV`|chaîne de caractères|Provenance||
`ETA_NUM`|nombre entier|Numéro FINESS e-PMSI||
`ETE_GHS_NUM`|nombre entier|Numéro de GHS (du GHM GENRSA)||
`EXB_NBJ`|nombre entier|Nb journées EXB||
`GHS_9615_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9615||
`GHS_HS_INNOV`|nombre entier|GHS si non prise en compte de l&#x27;innovation||
`GHS_NUM`|nombre entier|Numéro de GHS (du GHM GENRSA)||
`GRC_GHM`|chaîne de caractères|GHM calculé par la clinique||
`GRC_RET`|booléen|Groupage établissement Code Retour||
`GRC_VER`|nombre entier|Groupage établissement Version classification||
`GRG_GHM`|chaîne de caractères|GHM calculé par le GENRSA||
`GRG_RET`|booléen|Code retour obtenu par GENRSA||
`GRG_VER`|chaîne de caractères|Groupage GENRSA :Version de la classification||
`INNOV_NUM`|chaîne de caractères|Numéro d&#x27;innovation||
`MACH_TYP_RAD`|chaîne de caractères|Type de machine en radiothérapie||
`NBR_ACT`|nombre entier|Nombre de zones d&#x27;actes (nA) dans ce RSA||
`NBR_DGN`|nombre entier|Nombre de diagnostics associés significatifs (nDAS) dans ce RSA||
`NBR_RUM`|nombre entier|Nombre de RUM composant le RSS d&#x27;origine (NbRUM)||
`NBR_SEA`|nombre entier|Nombre de séances||
`NBR_SUP_NN1`|nombre entier|Nombre de suppléments NN1||
`NBR_SUP_NN2`|nombre entier|Nombre de suppléments NN2||
`NBR_SUP_NN3`|nombre entier|Nombre de suppléments NN3||
`NBR_SUP_REA`|nombre entier|Nombre de suppléments pour REA (réanimation)||
`NBR_SUP_REP`|nombre entier|Nombre de suppléments REP (réanimation pédiatrique)||
`NBR_SUP_SOI`|nombre entier|Nombre de suppléments soins intensifs provenant de la réanimation||
`NBR_SUP_SRC`|nombre entier|Nombre de suppléments pour SRC (surveillance continue)||
`NBR_SUP_STF`|nombre entier|Nombre de suppléments pour STF (soins intensifs)||
`PAS_LIT_DED`|booléen|Passage dans un lit dédié de soins palliatifs||
`PLO_ACT`|nombre entier|Type de prestation de prélèvement d&#x27;organe||
`POI_NAI`|nombre entier|Poids d&#x27;entrée (en grammes)||
`RSA_NUM`|nombre entier|N° d&#x27;index du RSA||
`RSS_NUM`|chaîne de caractères|Numéro de version du format du RSA||
`RTH_SUP_NBR`|nombre entier|Nombre de zones de suppléments de radiothérapie (Nb_Rdth)||
`SEJ_COD_CONF`|chaîne de caractères|Confirmation du codage du séjour||
`SEJ_NBJ`|nombre entier|Durée totale du séjour dans le champ du PMSI (vide si séances)||
`SEJ_TYP`|chaîne de caractères|Type de séjour||
`SEQ_RUM`|nombre entier|N° séquentiel du RUM ayant fourni le DP||
`SOR_ANN`|année|Année de sortie||
`SOR_DES`|chaîne de caractères|Destination||
`SOR_MOD`|chaîne de caractères|Mode de sortie du champ PMSI-MCO||
`SOR_MOI`|date|Mois de sortie||
`SUP_ENT_DPA`|nombre entier|Nombre de suppléments pour les entraînements à la dialyse péritonéale automatisée hors séances||
`SUP_ENT_DPC`|nombre entier|Nombre de suppléments pour les entraînements à la dialyse péritonéale continue ambulatoire hors séances||
`SUP_ENT_HEM`|nombre entier|Nombre de suppléments pour les entraînements à l&#x27;hémodialyse hors séances||
`SUP_HEM_HS`|nombre entier|Nombre de suppléments pour hémodialyse hors séances||
`SUP_RAD_PED`|nombre entier|Nombre de suppléments radiothérapie pédiatrique||
`TAR_SEQ_NUM`|chaîne de caractères|Numéro séquentiel de tarifs||
`TOP_AVASTIN`|booléen|Top Radiation partielle Avastin||
`TOP_DEF_CARD`|booléen|Supplément défibrillateur cardiaque||
`TOP_GHS_MIN_SUS`|booléen|Top GHS minoré||
`TOP_VLV_AOR`|booléen|Top valves aortiques percutanées||
`TYP_GEN_RSA`|nombre entier|Type de génération automatique du RSA||
`UHCD_TOP`|booléen|Top UHCD||
`NBR_NAIS_ANT`|nombre entier|Nombres de naissances vivantes antérieures||
`GHS_9512_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9512||
`GHS_9515_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9515||
`GHS_9511_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9511||
`GHS_9619_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9619||
`GHS_9610_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9610||
`NBR_IVG_ANT`|nombre entier|Nombre d’IVG antérieures||
`GHS_9620_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9620||
`NBR_SUP_SSC`|nombre entier|Nombre de suppléments pour SSC (surveillance continue)||
`GHS_9622_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9622||
`GHM_24707Z_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHM 24Z07Z ou 28Z13Z||
`GHS_9621_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9621||
`NBR_SEA_SROS`|nombre entier|Nombre de séances avant SROS||
`GHM_24706Z_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHM 24Z06Z ou 28Z12Z||
`GHM_24705Z_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHM 24Z05Z ou 28Z11Z||
`FAIS_NBR`|nombre entier|Nombre de faisceaux||
`GHS_9611_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9611||
`GHS_9612_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9612||
`GHS_9510_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9510||
`GHS_9524_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 9524||
`DLY_ACT`|chaîne de caractères|Forfait dialyse||
`GHS_6523_ACT`|nombre entier|Nombre d&#x27;actes menant dans le GHS 6523||
`NBR_SUP_SRA`|nombre entier|Nombre de suppléments pour SRA (réanimation)||
`COD_IGS`|chaîne de caractères|IGS 2||
`ANN_IVG_PREC`|année|Année de l’IVG précédente||

