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
`AGE_ANN`|
integer|Age en années||
`AGE_GES`|
integer|Age gestationnel||
`AGE_JOU`|
integer|Age en jours||
`ANT_SUP_NBR`|
integer|Nombre de suppléments antepartum||
`AUT_PGV_NBR`|
integer|Nombre d&#x27;autorisations d&#x27;unités médicales à portée globale valides (Nb_AutPGV)||
`BDI_COD`|
string|Code géographique de résidence||
`BDI_DEP`|
string|Code département de résidence||
`BEB_SEJ`|
string|Type de séjour inférieur à la borne extrême basse||
`BEH_NBJ`|
integer|Nombre de journées au-delà de la borne extrême haute||
`CAI_SUP_NBR`|
integer|Nombre de suppléments caisson hyperbare||
`COD_SEX`|
string|Sexe||
`DEL_REG_ENT`|
integer|Délai de la date des dernières règles par rapport à la date d&#x27;entrée||
`DGN_PAL`|
string|Diagnostic principal (DP)||
`DGN_REL`|
string|Diagnostic relié (DR)||
`DOS_TYP`|
string|Type de dosimétrie||
`ENT_MOD`|
string|Mode d&#x27;entrée dans le champ du PMSI-MCO||
`ENT_PRV`|
string|Provenance||
`ETA_NUM`|
string|Numéro FINESS e-PMSI||
`ETE_GHS_NUM`|
integer|Numéro de GHS (du GHM GENRSA)||
`EXB_NBJ`|
integer|Nb journées EXB||
`GHS_9615_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9615||
`GHS_HS_INNOV`|
string|GHS si non prise en compte de l&#x27;innovation||
`GHS_NUM`|
string|Numéro de GHS (du GHM GENRSA)||
`GRC_GHM`|
string|GHM calculé par la clinique||
`GRC_RET`|
boolean|Groupage établissement Code Retour||
`GRC_VER`|
string|Groupage établissement Version classification||
`GRG_GHM`|
string|GHM calculé par le GENRSA||
`GRG_RET`|
boolean|Code retour obtenu par GENRSA||
`GRG_VER`|
string|Groupage GENRSA :Version de la classification||
`INNOV_NUM`|
string|Numéro d&#x27;innovation||
`MACH_TYP_RAD`|
string|Type de machine en radiothérapie||
`NBR_ACT`|
integer|Nombre de zones d&#x27;actes (nA) dans ce RSA||
`NBR_DGN`|
integer|Nombre de diagnostics associés significatifs (nDAS) dans ce RSA||
`NBR_RUM`|
integer|Nombre de RUM composant le RSS d&#x27;origine (NbRUM)||
`NBR_SEA`|
integer|Nombre de séances||
`NBR_SUP_NN1`|
integer|Nombre de suppléments NN1||
`NBR_SUP_NN2`|
integer|Nombre de suppléments NN2||
`NBR_SUP_NN3`|
integer|Nombre de suppléments NN3||
`NBR_SUP_REA`|
integer|Nombre de suppléments pour REA (réanimation)||
`NBR_SUP_REP`|
integer|Nombre de suppléments REP (réanimation pédiatrique)||
`NBR_SUP_SOI`|
integer|Nombre de suppléments soins intensifs provenant de la réanimation||
`NBR_SUP_SRC`|
integer|Nombre de suppléments pour SRC (surveillance continue)||
`NBR_SUP_STF`|
integer|Nombre de suppléments pour STF (soins intensifs)||
`PAS_LIT_DED`|
string|Passage dans un lit dédié de soins palliatifs||
`PLO_ACT`|
string|Type de prestation de prélèvement d&#x27;organe||
`POI_NAI`|
integer|Poids d&#x27;entrée (en grammes)||
`RSA_NUM`|
string|N° d&#x27;index du RSA||
`RSS_NUM`|
string|Numéro de version du format du RSA||
`RTH_SUP_NBR`|
integer|Nombre de zones de suppléments de radiothérapie (Nb_Rdth)||
`SEJ_COD_CONF`|
string|Confirmation du codage du séjour||
`SEJ_NBJ`|
integer|Durée totale du séjour dans le champ du PMSI (vide si séances)||
`SEJ_TYP`|
string|Type de séjour||
`SEQ_RUM`|
string|N° séquentiel du RUM ayant fourni le DP||
`SOR_ANN`|
string|Année de sortie||
`SOR_DES`|
string|Destination||
`SOR_MOD`|
string|Mode de sortie du champ PMSI-MCO||
`SOR_MOI`|
string|Mois de sortie||
`SUP_ENT_DPA`|
integer|Nombre de suppléments pour les entraînements à la dialyse péritonéale automatisée hors séances||
`SUP_ENT_DPC`|
integer|Nombre de suppléments pour les entraînements à la dialyse péritonéale continue ambulatoire hors séances||
`SUP_ENT_HEM`|
integer|Nombre de suppléments pour les entraînements à l&#x27;hémodialyse hors séances||
`SUP_HEM_HS`|
integer|Nombre de suppléments pour hémodialyse hors séances||
`SUP_RAD_PED`|
integer|Nombre de suppléments radiothérapie pédiatrique||
`TAR_SEQ_NUM`|
string|Numéro séquentiel de tarifs||
`TOP_AVASTIN`|
string|Top Radiation partielle Avastin||
`TOP_DEF_CARD`|
string|Supplément défibrillateur cardiaque||
`TOP_GHS_MIN_SUS`|
string|Top GHS minoré||
`TOP_VLV_AOR`|
string|Top valves aortiques percutanées||
`TYP_GEN_RSA`|
string|Type de génération automatique du RSA||
`UHCD_TOP`|
string|Top UHCD||
`NBR_NAIS_ANT`|
integer|Nombres de naissances vivantes antérieures||
`GHS_9512_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9512||
`GHS_9515_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9515||
`GHS_9511_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9511||
`GHS_9619_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9619||
`GHS_9610_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9610||
`NBR_IVG_ANT`|
integer|Nombre d’IVG antérieures||
`GHS_9620_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9620||
`NBR_SUP_SSC`|
integer|Nombre de suppléments pour SSC (surveillance continue)||
`GHS_9622_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9622||
`GHM_24707Z_ACT`|
integer|Nombre d&#x27;actes menant dans le GHM 24Z07Z ou 28Z13Z||
`GHS_9621_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9621||
`NBR_SEA_SROS`|
integer|Nombre de séances avant SROS||
`GHM_24706Z_ACT`|
integer|Nombre d&#x27;actes menant dans le GHM 24Z06Z ou 28Z12Z||
`GHM_24705Z_ACT`|
integer|Nombre d&#x27;actes menant dans le GHM 24Z05Z ou 28Z11Z||
`FAIS_NBR`|
integer|Nombre de faisceaux||
`GHS_9611_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9611||
`GHS_9612_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9612||
`GHS_9510_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9510||
`GHS_9524_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 9524||
`DLY_ACT`|
string|Forfait dialyse||
`GHS_6523_ACT`|
integer|Nombre d&#x27;actes menant dans le GHS 6523||
`NBR_SUP_SRA`|
integer|Nombre de suppléments pour SRA (réanimation)||
`COD_IGS`|
string|IGS 2||
`ANN_IVG_PREC`|
string|Année de l’IVG précédente||

