# T_MCOaa_nnVALO

Valorisation des séjours

Champ : Public


## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|COEFGEO|nombre réel|Coefficient géographique|||
|COEFPRUD|nombre réel|coefficient prudentiel |||
|COEFTRANS|nombre réel|Coefficient de transition|||
|ETA_NUM|chaîne de caractères|Numéro FINESS de l’établissement|||
|ETE_GHS_NUM|nombre réel|GHS au format DCIR|||
|FLAG_FIDES|chaîne de caractères|Indicateur FIDES GENRSA ; vaut 1 si le séjour est pris en charge dans le cadre de FIDES|||
|GHS_NUM|chaîne de caractères|Numéro du GHS|||
|GHS50|nombre réel|Nb séjours avec réhospitalisation dans le même GHM|||
|MNT_18|nombre réel|Montant participation forfaitaire du 18 euros|||
|MNT_9610_AM|nombre réel|Valorisation AM actes menant dans le GHS 9610|||
|MNT_9615_AM|nombre réel|Valorisation AM actes menant dans le GHS 9615|||
|MNT_9619_AM|nombre réel|Valorisation AM actes menant dans le GHS 9619|||
|MNT_9620_AM|nombre réel|Valorisation AM actes menant dans le GHS 9620|||
|MNT_9621_AM|nombre réel|Valorisation AM actes menant dans le GHS 9621|||
|MNT_9622_AM|nombre réel|Valorisation AM actes menant dans le GHS 9622|||
|MNT_9623_AM|nombre réel|Valorisation AM actes menant dans le GHS 9623|||
|MNT_9625_AM|nombre réel|Valorisation AM actes menant dans le GHS 9625|||
|MNT_9631_AM|nombre réel|Valorisation AM actes menant dans le GHS 9631|||
|MNT_9632_AM|nombre réel|Valorisation AM actes menant dans le GHS 9632|||
|MNT_9633_AM|nombre réel|Valorisation AM actes menant dans le GHS 9633|||
|MNT_ANT_AM|nombre réel|Valorisation AM suppléments antepartum|||
|MNT_CAISSON_AM|nombre réel|Valorisation AM suppléments caisson hyperbare|||
|MNT_DIP_AM|nombre réel|Valorisation AM suppléments de dialyse DIP|||
|MNT_DMI|nombre réel|Valorisation accordée DMI|||
|MNT_EXH_AM|nombre réel|Valorisation AM EXH|||
|MNT_EXINF_AM|nombre réel|Valorisation AM EXB|||
|MNT_FJ2|nombre réel|Montant du forfait journalier|||
|MNT_GHS_AM|nombre réel|Valorisation AM GHS|||
|MNT_GHS50_AM|nombre réel|Valorisation AM des séjours avec réhospitalisation dans le même GHM|||
|MNT_IVG_AM|nombre réel|Valorisation AM IVG (hors FJS)|||
|MNT_MAJO|nombre réel|Montant majoration du parcours de soin |||
|MNT_MED_ATU|nombre réel|Valorisation accordée médicaments ATU/POST ATU|||
|MNT_MON|nombre réel|Valorisation accordée molécules onéreuses|||
|MNT_NN1_AM|nombre réel|Valorisation AM suppléments de néonat sans SI|||
|MNT_NN2_AM|nombre réel|Valorisation AM suppléments de néonat avec SI|||
|MNT_NN3_AM|nombre réel|Valorisation AM suppléments de réanimation néonat|||
|MNT_PO1_AM|nombre réel|Valorisation AM PO1|||
|MNT_PO2_AM|nombre réel|Valorisation AM PO2|||
|MNT_PO3_AM|nombre réel|Valorisation AM PO3|||
|MNT_PO4_AM|nombre réel|Valorisation AM PO4|||
|MNT_PO5_AM|nombre réel|Valorisation AM PO5|||
|MNT_PO6_AM|nombre réel|Valorisation AM PO6|||
|MNT_PO7_AM|nombre réel|Valorisation AM PO7|||
|MNT_PO8_AM|nombre réel|Valorisation AM PO8|||
|MNT_PO9_AM|nombre réel|Valorisation AM PO9|||
|MNT_POA_AM|nombre réel|Valorisation AM POA|||
|MNT_RAC|nombre réel|Montant remboursable par l'organisme complémentaire (AMC)|||
|MNT_RAP_AM|nombre réel|Valorisation AM suppléments de radiothérapie pédiatrique|||
|MNT_REA_AM|nombre réel|Valorisation AM suppléments de réanimation|||
|MNT_REP_AM|nombre réel|Valorisation AM suppléments de réanimation pédiatrique|||
|MNT_SC_AM|nombre réel|Valorisation AM suppléments de surveillance continue|||
|MNT_SI_AM|nombre réel|Valorisation AM suppléments soins intensifs|||
|MNT_SUPPENT1_AM|nombre réel|Valorisation AM suppléments pour entraînements à la dialyse péritonéale automatisée hors séance|||
|MNT_SUPPENT2_AM|nombre réel|Valorisation AM suppléments pour entraînements à la dialyse péritonéale continue ambulatoire hors séance|||
|MNT_SUPPENT3_AM|nombre réel|Valorisation AM suppléments pour entraînements à l’hémodialyse hors séance|||
|MNT_SUPPHD_AM|nombre réel|Valorisation AM suppléments pour hémodialyse hors séance|||
|MNT_TOT_AM|nombre réel|Valorisation totale AM du séjour.|||
|NB_9610|nombre réel|Nombre d’actes menant dans le GHS 9610|||
|NB_9615|nombre réel|Nombre d’actes menant dans le GHS 9615|||
|NB_9619|nombre réel|Nombre d’actes menant dans le GHS 9619|||
|NB_9620|nombre réel|Nombre d’actes menant dans le GHS 9620|||
|NB_9621|nombre réel|Nombre d’actes menant dans le GHS 9621|||
|NB_9622|nombre réel|Nombre d’actes menant dans le GHS 9622|||
|NB_9623|nombre réel|Nombre d’actes menant dans le GHS 9623|||
|NB_9625|nombre réel|Nombre d’actes menant dans le GHS 9625|||
|NB_9631|nombre réel|Nombre d’actes menant dans le GHS 9631|||
|NB_9632|nombre réel|Nombre d’actes menant dans le GHS 9632|||
|NB_9633|nombre réel|Nombre d’actes menant dans le GHS 9633|||
|NB_ANT|nombre réel|Nb suppléments antepartum|||
|NB_DIP|nombre réel|Nb suppléments dialyse DIP|||
|NB_NN1|nombre réel|Nb suppléments de néonat sans SI|||
|NB_NN2|nombre réel|Nb suppléments de néonat avec SI|||
|NB_NN3|nombre réel|Nb suppléments de réanimation néonat|||
|NB_RAP|nombre réel|Nb suppléments de radiothérapie pédiatrique|||
|NB_SRC2|nombre réel|Nb suppléments de surveillance continue|||
|NB_STF2|nombre réel|Nb suppléments de soins intensifs|||
|NBCAISSON|nombre réel|Nb suppléments caisson hyperbare|||
|NBEXB|nombre réel|Nb journées EXB |||
|NBEXH|nombre réel|Nombre de journées EXH |||
|NBJREA|nombre réel|Nb suppléments de réanimation|||
|NBREP|nombre réel|Nb suppléments de réanimation pédiatrique|||
|PONDER|nombre réel|Nombre de séjours ou nombre de séances|||
|RSA_NUM|chaîne de caractères|Numéro de séjour RSS|||
|SEJXINF|chaîne de caractères|Type de séjour inférieur à la borne extrême basse |||
|SUPPENT1|nombre réel|Nb suppléments pour entraînements à la dialyse péritonéale automatisée hors séance|||
|SUPPENT2|nombre réel|Nb suppléments pour entraînements à la dialyse péritonéale continue ambulatoire hors séance|||
|SUPPENT3|nombre réel|Nb suppléments pour entraînements à l’hémodialyse hors séance|||
|SUPPHD|nombre réel|Nb suppléments pour hémodialyse hors séance|||
|TAUX2|nombre réel|Taux de remboursement |||
|TYPORG|chaîne de caractères|Type de prestation de prélèvement d’organe (type 1, 2, 3 ou 4)|||
|TYPORG5|chaîne de caractères|Prélèvement d’organe de type 5|||
|TYPORG6|chaîne de caractères|Prélèvement d’organe de type 6|||
|TYPORG7|chaîne de caractères|Prélèvement d’organe de type 7|||
|TYPORG8|chaîne de caractères|Prélèvement d’organe de type 8|||
|TYPORG9|chaîne de caractères|Prélèvement d’organe de type 9|||
|TYPORGA|chaîne de caractères|Prélèvement d’organe de type A|||
|VALO|chaîne de caractères|Type de valorisation du séjour|||
|MNT_GHS_BR|nombre réel|Valorisation BR GHS|||
|MNT_EXINF_BR|nombre réel|Valorisation BR EXB|||
|MNT_GHS50_BR|nombre réel|Valorisation BR des séjours avec réhospitalisation dans le même GHM|||
|MNT_EXH_BR|nombre réel|Valorisation BR EXH|||
|MNT_SUPPHD_BR|nombre réel|Valorisation BR suppléments pour hémodialyse hors séance|||
|MNT_SUPPENT1_BR|nombre réel|Valorisation BR suppléments pour entraînements à la dialyse péritonéale automatisée hors séance|||
|MNT_SUPPENT2_BR|nombre réel|Valorisation BR suppléments pour entraînements à la dialyse péritonéale continue ambulatoire hors séance|||
|MNT_SUPPENT3_BR|nombre réel|Valorisation BR suppléments pour entraînements à l’hémodialyse hors séance|||
|MNT_DIP_BR|nombre réel|Valorisation BR suppléments de dialyse DIP|||
|MNT_PO1_BR|nombre réel|Valorisation BR PO1|||
|MNT_PO2_BR|nombre réel|Valorisation BR PO2|||
|MNT_PO3_BR|nombre réel|Valorisation BR PO3|||
|MNT_PO4_BR|nombre réel|Valorisation BR PO4|||
|MNT_PO5_BR|nombre réel|Valorisation BR PO5|||
|MNT_PO6_BR|nombre réel|Valorisation BR PO6|||
|MNT_PO7_BR|nombre réel|Valorisation BR PO7|||
|MNT_PO8_BR|nombre réel|Valorisation BR PO8|||
|MNT_PO9_BR|nombre réel|Valorisation BR PO9|||
|MNT_POA_BR|nombre réel|Valorisation BR POA|||
|MNT_9610_BR|nombre réel|Valorisation BR actes menant dans le GHS 9610|||
|MNT_9619_BR|nombre réel|Valorisation BR actes menant dans le GHS 9619|||
|MNT_9620_BR|nombre réel|Valorisation BR actes menant dans le GHS 9620|||
|MNT_9621_BR|nombre réel|Valorisation BR actes menant dans le GHS 9621|||
|MNT_9622_BR|nombre réel|Valorisation BR actes menant dans le GHS 9622|||
|MNT_9623_BR|nombre réel|Valorisation BR actes menant dans le GHS 9623|||
|MNT_9625_BR|nombre réel|Valorisation BR actes menant dans le GHS 9625|||
|MNT_9631_BR|nombre réel|Valorisation BR actes menant dans le GHS 9631|||
|MNT_9632_BR|nombre réel|Valorisation BR actes menant dans le GHS 9632|||
|MNT_9633_BR|nombre réel|Valorisation BR actes menant dans le GHS 9633|||
|MNT_9615_BR|nombre réel|Valorisation BR actes menant dans le GHS 9615|||
|MNT_REA_BR|nombre réel|Valorisation BR suppléments de réanimation|||
|MNT_REP_BR|nombre réel|Valorisation BR suppléments de réanimation pédiatrique|||
|MNT_SI_BR|nombre réel|Valorisation BR suppléments soins intensifs|||
|MNT_SC_BR|nombre réel|Valorisation BR suppléments de surveillance continue|||
|MNT_NN1_BR|nombre réel|Valorisation BR suppléments de néonat sans SI|||
|MNT_NN2_BR|nombre réel|Valorisation BR suppléments de néonat avec SI|||
|MNT_NN3_BR|nombre réel|Valorisation BR suppléments de réanimation néonat|||
|MNT_CAISSON_BR|nombre réel|Valorisation BR suppléments caisson hyperbare|||
|MNT_RAP_BR|nombre réel|Valorisation BR suppléments de radiothérapie pédiatrique|||
|MNT_ANT_BR|nombre réel|Valorisation BR suppléments antepartum|||
|NB_SDC|nombre réel|Nb suppléments défibrillateur cardiaque|||
|MNT_SDC_BR|nombre réel|Valorisation BR suppléments défibrillateur cardiaque|||
|MNT_SDC_AM|nombre réel|Valorisation AM suppléments défibrillateur cardiaque|||
|MNT_IVG_BR|nombre réel|Valorisation BR IVG|||
|MNT_TOT_BR|nombre réel|Valorisation totale BR du séjour.
C’est la somme de : 
mnt_mon, mnt_dmi, mnt_med_atu, mnt_ghs, mnt_exinf, mnt_ghs50, mnt_exh, mnt_supphd, mnt_suppent1, mnt_suppent2, mnt_suppent3, mnt_dip, mnt_po1, mnt_po2, mnt_po3, mnt_po4, mnt_po5, mnt_po6, mnt_po7, mnt_po8, mnt_po9, mnt_poa,mnt_9610, mnt_9619, mnt_9620,  mnt_9621, mnt_9622, mnt_9623, mnt_9625, mnt_9631, mnt_9632, mnt_9633, mnt_9615, mnt_rap, mnt_ant, mnt_rea, mnt_rep, mnt_si, mnt_sc, mnt_nn1, mnt_nn2, mnt_nn3, mnt_caisson, mnt_ivg, mnt_sdc
Pour les séjours AME et SU, c’est la somme de: 
mnt_mon, mnt_dmi, mnt_med_atu, mnt_ghs, mnt_exinf, mnt_ghs50, mnt_exh, mnt_supphd, mnt_suppent1, mnt_suppent2, mnt_suppent3, mnt_dip, mnt_9610, mnt_9619, mnt_9620,  mnt_9621, mnt_9622, mnt_9623, mnt_9625, mnt_9631, mnt_9632, mnt_9633, mnt_9615, mnt_rap, mnt_ant, mnt_rea, mnt_rep, mnt_si, mnt_sc, mnt_nn1, mnt_nn2, mnt_nn3, mnt_caisson,mnt_tjp20e, mnt_fjse, mnt_sdc
|||
|COEFREP|nombre réel|coefficient de reprise|||
