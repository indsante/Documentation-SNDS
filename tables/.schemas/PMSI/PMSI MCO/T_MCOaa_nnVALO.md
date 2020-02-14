## Schéma

- Titre : Valorisation des séjours
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RSA_NUM` => table [T_MCOaa_nnB](/tables/T_MCOaa_nnB) [ `ETA_NUM`, `RSA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20MCO/T_MCOaa_nnVALO.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`COEFGEO`|
number|Coefficient géographique||
`COEFPRUD`|
number|coefficient prudentiel||
`COEFTRANS`|
number|Coefficient de transition||
`ETA_NUM`|
string|Numéro FINESS de l’établissement||
`ETE_GHS_NUM`|
integer|GHS au format DCIR||
`FLAG_FIDES`|
string|Indicateur FIDES GENRSA ; vaut 1 si le séjour est pris en charge dans le cadre de FIDES||
`GHS_NUM`|
string|Numéro du GHS||
`GHS50`|
integer|Nb séjours avec réhospitalisation dans le même GHM||
`MNT_18`|
number|Montant participation forfaitaire du 18 euros||
`MNT_9610_AM`|
number|Valorisation AM actes menant dans le GHS 9610||
`MNT_9615_AM`|
number|Valorisation AM actes menant dans le GHS 9615||
`MNT_9619_AM`|
number|Valorisation AM actes menant dans le GHS 9619||
`MNT_9620_AM`|
number|Valorisation AM actes menant dans le GHS 9620||
`MNT_9621_AM`|
number|Valorisation AM actes menant dans le GHS 9621||
`MNT_9622_AM`|
number|Valorisation AM actes menant dans le GHS 9622||
`MNT_9623_AM`|
number|Valorisation AM actes menant dans le GHS 9623||
`MNT_9625_AM`|
number|Valorisation AM actes menant dans le GHS 9625||
`MNT_9631_AM`|
number|Valorisation AM actes menant dans le GHS 9631||
`MNT_9632_AM`|
number|Valorisation AM actes menant dans le GHS 9632||
`MNT_9633_AM`|
number|Valorisation AM actes menant dans le GHS 9633||
`MNT_ANT_AM`|
number|Valorisation AM suppléments antepartum||
`MNT_CAISSON_AM`|
number|Valorisation AM suppléments caisson hyperbare||
`MNT_DIP_AM`|
number|Valorisation AM suppléments de dialyse DIP||
`MNT_DMI`|
number|Valorisation accordée DMI||
`MNT_EXH_AM`|
number|Valorisation AM EXH||
`MNT_EXINF_AM`|
number|Valorisation AM EXB||
`MNT_FJ2`|
number|Montant du forfait journalier||
`MNT_GHS_AM`|
number|Valorisation AM GHS||
`MNT_GHS50_AM`|
number|Valorisation AM des séjours avec réhospitalisation dans le même GHM||
`MNT_IVG_AM`|
number|Valorisation AM IVG (hors FJS)||
`MNT_MAJO`|
number|Montant majoration du parcours de soin||
`MNT_MED_ATU`|
number|Valorisation accordée médicaments ATU/POST ATU||
`MNT_MON`|
number|Valorisation accordée molécules onéreuses||
`MNT_NN1_AM`|
number|Valorisation AM suppléments de néonat sans SI||
`MNT_NN2_AM`|
number|Valorisation AM suppléments de néonat avec SI||
`MNT_NN3_AM`|
number|Valorisation AM suppléments de réanimation néonat||
`MNT_PO1_AM`|
number|Valorisation AM PO1||
`MNT_PO2_AM`|
number|Valorisation AM PO2||
`MNT_PO3_AM`|
number|Valorisation AM PO3||
`MNT_PO4_AM`|
number|Valorisation AM PO4||
`MNT_PO5_AM`|
number|Valorisation AM PO5||
`MNT_PO6_AM`|
number|Valorisation AM PO6||
`MNT_PO7_AM`|
number|Valorisation AM PO7||
`MNT_PO8_AM`|
number|Valorisation AM PO8||
`MNT_PO9_AM`|
number|Valorisation AM PO9||
`MNT_POA_AM`|
number|Valorisation AM POA||
`MNT_RAC`|
number|Montant remboursable par l&#x27;organisme complémentaire (AMC)||
`MNT_RAP_AM`|
number|Valorisation AM suppléments de radiothérapie pédiatrique||
`MNT_REA_AM`|
number|Valorisation AM suppléments de réanimation||
`MNT_REP_AM`|
number|Valorisation AM suppléments de réanimation pédiatrique||
`MNT_SC_AM`|
number|Valorisation AM suppléments de surveillance continue||
`MNT_SI_AM`|
number|Valorisation AM suppléments soins intensifs||
`MNT_SUPPENT1_AM`|
number|Valorisation AM suppléments pour entraînements à la dialyse péritonéale automatisée hors séance||
`MNT_SUPPENT2_AM`|
number|Valorisation AM suppléments pour entraînements à la dialyse péritonéale continue ambulatoire hors séance||
`MNT_SUPPENT3_AM`|
number|Valorisation AM suppléments pour entraînements à l’hémodialyse hors séance||
`MNT_SUPPHD_AM`|
number|Valorisation AM suppléments pour hémodialyse hors séance||
`MNT_TOT_AM`|
number|Valorisation totale AM du séjour.||
`NB_9610`|
integer|Nombre d’actes menant dans le GHS 9610||
`NB_9615`|
integer|Nombre d’actes menant dans le GHS 9615||
`NB_9619`|
integer|Nombre d’actes menant dans le GHS 9619||
`NB_9620`|
integer|Nombre d’actes menant dans le GHS 9620||
`NB_9621`|
integer|Nombre d’actes menant dans le GHS 9621||
`NB_9622`|
integer|Nombre d’actes menant dans le GHS 9622||
`NB_9623`|
integer|Nombre d’actes menant dans le GHS 9623||
`NB_9625`|
integer|Nombre d’actes menant dans le GHS 9625||
`NB_9631`|
integer|Nombre d’actes menant dans le GHS 9631||
`NB_9632`|
integer|Nombre d’actes menant dans le GHS 9632||
`NB_9633`|
integer|Nombre d’actes menant dans le GHS 9633||
`NB_ANT`|
integer|Nb suppléments antepartum||
`NB_DIP`|
integer|Nb suppléments dialyse DIP||
`NB_NN1`|
integer|Nb suppléments de néonat sans SI||
`NB_NN2`|
integer|Nb suppléments de néonat avec SI||
`NB_NN3`|
integer|Nb suppléments de réanimation néonat||
`NB_RAP`|
integer|Nb suppléments de radiothérapie pédiatrique||
`NB_SRC2`|
integer|Nb suppléments de surveillance continue||
`NB_STF2`|
integer|Nb suppléments de soins intensifs||
`NBCAISSON`|
integer|Nb suppléments caisson hyperbare||
`NBEXB`|
integer|Nb journées EXB||
`NBEXH`|
integer|Nombre de journées EXH||
`NBJREA`|
integer|Nb suppléments de réanimation||
`NBREP`|
integer|Nb suppléments de réanimation pédiatrique||
`PONDER`|
integer|Nombre de séjours ou nombre de séances||
`RSA_NUM`|
string|Numéro de séjour RSS||
`SEJXINF`|
string|Type de séjour inférieur à la borne extrême basse||
`SUPPENT1`|
integer|Nb suppléments pour entraînements à la dialyse péritonéale automatisée hors séance||
`SUPPENT2`|
integer|Nb suppléments pour entraînements à la dialyse péritonéale continue ambulatoire hors séance||
`SUPPENT3`|
integer|Nb suppléments pour entraînements à l’hémodialyse hors séance||
`SUPPHD`|
integer|Nb suppléments pour hémodialyse hors séance||
`TAUX2`|
number|Taux de remboursement||
`TYPORG`|
string|Type de prestation de prélèvement d’organe (type 1, 2, 3 ou 4)||
`TYPORG5`|
string|Prélèvement d’organe de type 5||
`TYPORG6`|
string|Prélèvement d’organe de type 6||
`TYPORG7`|
string|Prélèvement d’organe de type 7||
`TYPORG8`|
string|Prélèvement d’organe de type 8||
`TYPORG9`|
string|Prélèvement d’organe de type 9||
`TYPORGA`|
string|Prélèvement d’organe de type A||
`VALO`|
string|Type de valorisation du séjour||
`MNT_GHS_BR`|
number|Valorisation BR GHS||
`MNT_EXINF_BR`|
number|Valorisation BR EXB||
`MNT_GHS50_BR`|
number|Valorisation BR des séjours avec réhospitalisation dans le même GHM||
`MNT_EXH_BR`|
number|Valorisation BR EXH||
`MNT_SUPPHD_BR`|
number|Valorisation BR suppléments pour hémodialyse hors séance||
`MNT_SUPPENT1_BR`|
number|Valorisation BR suppléments pour entraînements à la dialyse péritonéale automatisée hors séance||
`MNT_SUPPENT2_BR`|
number|Valorisation BR suppléments pour entraînements à la dialyse péritonéale continue ambulatoire hors séance||
`MNT_SUPPENT3_BR`|
number|Valorisation BR suppléments pour entraînements à l’hémodialyse hors séance||
`MNT_DIP_BR`|
number|Valorisation BR suppléments de dialyse DIP||
`MNT_PO1_BR`|
number|Valorisation BR PO1||
`MNT_PO2_BR`|
number|Valorisation BR PO2||
`MNT_PO3_BR`|
number|Valorisation BR PO3||
`MNT_PO4_BR`|
number|Valorisation BR PO4||
`MNT_PO5_BR`|
number|Valorisation BR PO5||
`MNT_PO6_BR`|
number|Valorisation BR PO6||
`MNT_PO7_BR`|
number|Valorisation BR PO7||
`MNT_PO8_BR`|
number|Valorisation BR PO8||
`MNT_PO9_BR`|
number|Valorisation BR PO9||
`MNT_POA_BR`|
number|Valorisation BR POA||
`MNT_9610_BR`|
number|Valorisation BR actes menant dans le GHS 9610||
`MNT_9619_BR`|
number|Valorisation BR actes menant dans le GHS 9619||
`MNT_9620_BR`|
number|Valorisation BR actes menant dans le GHS 9620||
`MNT_9621_BR`|
number|Valorisation BR actes menant dans le GHS 9621||
`MNT_9622_BR`|
number|Valorisation BR actes menant dans le GHS 9622||
`MNT_9623_BR`|
number|Valorisation BR actes menant dans le GHS 9623||
`MNT_9625_BR`|
number|Valorisation BR actes menant dans le GHS 9625||
`MNT_9631_BR`|
number|Valorisation BR actes menant dans le GHS 9631||
`MNT_9632_BR`|
number|Valorisation BR actes menant dans le GHS 9632||
`MNT_9633_BR`|
number|Valorisation BR actes menant dans le GHS 9633||
`MNT_9615_BR`|
number|Valorisation BR actes menant dans le GHS 9615||
`MNT_REA_BR`|
number|Valorisation BR suppléments de réanimation||
`MNT_REP_BR`|
number|Valorisation BR suppléments de réanimation pédiatrique||
`MNT_SI_BR`|
number|Valorisation BR suppléments soins intensifs||
`MNT_SC_BR`|
number|Valorisation BR suppléments de surveillance continue||
`MNT_NN1_BR`|
number|Valorisation BR suppléments de néonat sans SI||
`MNT_NN2_BR`|
number|Valorisation BR suppléments de néonat avec SI||
`MNT_NN3_BR`|
number|Valorisation BR suppléments de réanimation néonat||
`MNT_CAISSON_BR`|
number|Valorisation BR suppléments caisson hyperbare||
`MNT_RAP_BR`|
number|Valorisation BR suppléments de radiothérapie pédiatrique||
`MNT_ANT_BR`|
number|Valorisation BR suppléments antepartum||
`NB_SDC`|
number|Nb suppléments défibrillateur cardiaque||
`MNT_SDC_BR`|
number|Valorisation BR suppléments défibrillateur cardiaque||
`MNT_SDC_AM`|
number|Valorisation AM suppléments défibrillateur cardiaque||
`MNT_IVG_BR`|
number|Valorisation BR IVG||
`MNT_TOT_BR`|
number|Valorisation totale BR du séjour.
C’est la somme de : 
mnt_mon, mnt_dmi, mnt_med_atu, mnt_ghs, mnt_exinf, mnt_ghs50, mnt_exh, mnt_supphd, mnt_suppent1, mnt_suppent2, mnt_suppent3, mnt_dip, mnt_po1, mnt_po2, mnt_po3, mnt_po4, mnt_po5, mnt_po6, mnt_po7, mnt_po8, mnt_po9, mnt_poa,mnt_9610, mnt_9619, mnt_9620,  mnt_9621, mnt_9622, mnt_9623, mnt_9625, mnt_9631, mnt_9632, mnt_9633, mnt_9615, mnt_rap, mnt_ant, mnt_rea, mnt_rep, mnt_si, mnt_sc, mnt_nn1, mnt_nn2, mnt_nn3, mnt_caisson, mnt_ivg, mnt_sdc
Pour les séjours AME et SU, c’est la somme de: 
mnt_mon, mnt_dmi, mnt_med_atu, mnt_ghs, mnt_exinf, mnt_ghs50, mnt_exh, mnt_supphd, mnt_suppent1, mnt_suppent2, mnt_suppent3, mnt_dip, mnt_9610, mnt_9619, mnt_9620,  mnt_9621, mnt_9622, mnt_9623, mnt_9625, mnt_9631, mnt_9632, mnt_9633, mnt_9615, mnt_rap, mnt_ant, mnt_rea, mnt_rep, mnt_si, mnt_sc, mnt_nn1, mnt_nn2, mnt_nn3, mnt_caisson,mnt_tjp20e, mnt_fjse, mnt_sdc
||
`COEFREP`|
number|coefficient de reprise||
`MNT_TJP20_AME`|
integer|Valorisation 20% TJP (uniquement pour les séjours AME)||
`MNT_IVGFJS_AM`|
integer|Valorisation Forfait Journalier de Sortie (uniquement pour les séjours AME)||
`NB_9611`|
integer|Nombre d’actes menant dans le GHS 9611||
`GHSMIN`|
integer|Nb séjours avec minoration forfaitaire liste en sus||
`MNT_9624_AM`|
integer|Valorisation AM actes menant dans le GHS 9624||
`NB_9624`|
integer|Nombre d’actes menant dans le GHS 9624||
`MNT_FJS_AME`|
integer|Valorisation Forfait Journalier de Sortie (uniquement pour les séjours AME)||
`MNT_9612_AM`|
integer|Valorisation AM actes menant dans le GHS 9612||
`MNT_9611_AM`|
integer|Valorisation AM actes menant dans le GHS 9611||
`NB_9612`|
integer|Nombre d’actes menant dans le GHS 9612||
`MNT_GHSMIN_AM`|
number|Valorisation AM des séjours avec minoration forfaitaire liste en sus||

