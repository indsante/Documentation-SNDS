# T_HADaa_nnSTC

Prise en charge par l'AM de chaque séjour, pour les établissements valorisés STC 

Champ : Public


## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|ETA_NUM_EPMSI|chaîne de caractères|N° FINESS e-PMSI|||
|ETA_NUM_GEO|chaîne de caractères|Numéro FINESS de l’établissement (code géographique)|||
|RHAD_NUM|chaîne de caractères|N° séquentiel de séjour d'HAD|||
|GRG_COD_CTL|chaîne de caractères|Contrôle code grand régime|||
|GES_COD_CTL|chaîne de caractères|Code retour controle «code gestion»|||
|EXO_TM_CTL|chaîne de caractères|Contrôle code justification d'exonération du TM|||
|COD_PEC_CTL|chaîne de caractères|Contrôle code prise en charge forfait journalier|||
|NAT_ASS_CTL|chaîne de caractères|Contrôle code nature d'assurance|||
|TYP_CTR_CTL|chaîne de caractères|Contrôle type de contrat souscrit auprès d'un organisme complémentaire|||
|SEJ_FAC_CTL|chaîne de caractères|Contrôle code séjour facturable à l'AM|||
|MNF_AM_CTL|chaîne de caractères|Code retour contrôle « motif de la non facturation à l'assurance maladie »|||
|FAC_18E_CTL|chaîne de caractères|Contrôle code facturation des 18 euros|||
|NBR_VEN_CTL|chaîne de caractères|Contrôle format nombre de venues|||
|FAC_MNT_TM_CTL|chaîne de caractères|Contrôle format montant à facturer au titre du TM|||
|FAC_MNT_FJ_CTL|chaîne de caractères|Contrôle format montant à facturer au titre du FJ|||
|TOT_MNT_AM_CTL|chaîne de caractères|Contrôle format montant total remboursable par AM|||
|MAJ_MNT_CTL|chaîne de caractères|Contrôle format montant majoration parcours de soins|||
|REM_BAS_CTL|chaîne de caractères|Contrôle montant base remboursement|||
|REM_TAU_CTL|chaîne de caractères|Contrôle taux de remboursement|||
|PAT_CMU_CTL|chaîne de caractères|Code retour contrôle « Patient bénéficiaire de la CMU »|||
|DAT_HOS_CTL|chaîne de caractères|code retour controlme identifiant anonyme hosp|||
|TOT_MNT_AMC_CTL|chaîne de caractères|Code retour contrôle « Montant total du séjour remboursable pour l'AMC »|||
|PA_COD_CTL|chaîne de caractères|Code retour contrôle « Code participation assuré »|||
|ENT_NUM_CTL|chaîne de caractères|Code retour contrôle « N° d’entrée »|||
|PEC_SOI_URG_CTL|chaîne de caractères|Code retour contrôle «Confirmation de la prise en charge dans le cadre du dispositif des soins urgents« |||
|NAT_PJ_DT_CTL|chaîne de caractères|Code retour contrôle «Nature de la pièce justificative des droits«|||
|DAT_PEC_CTL|chaîne de caractères|Code retour contrôle «Prise en charge établie le«|||
|CAI_NUM_CTL|chaîne de caractères|Code retour contrôle «Délivrée par«|||
|REG_PEC_ASS_CTL|chaîne de caractères|Code retour contrôle «Régime de prestation de l’assuré«|||
|TOP_ECL_FLX_CTL|chaîne de caractères|Code retour contrôle «Top éclatement des flux par l’établissement«|||
|DAT_DEB_FAC_CTL|chaîne de caractères|Code retour contrôle «Date d’entrée«|||
|DAT_FIN_FAC_CTL|chaîne de caractères|Code retour contrôle «Date de sortie«|||
|CAI_GES_CTL|chaîne de caractères|Code retour contrôle « N° caisse gestionnaire »|||
|CENT_GES_CTL|chaîne de caractères|Code retour contrôle « N° centre gestionnaire »|||
|GRG_COD|chaîne de caractères|Code grand régime|||
|GES_COD|chaîne de caractères|Code gestion|||
|EXO_TM|chaîne de caractères|Code justification d’exonération du ticket modérateur|||
|FJ_COD_PEC|chaîne de caractères|Code de prise en charge du forfait journalier|||
|NAT_ASS|chaîne de caractères|Nature d’assurance|||
|TYP_CTR|chaîne de caractères|Type de contrat souscrit auprès d'un organisme complémentaire|||
|FAC_SEJ_AM|chaîne de caractères|Séjour facturable à l’assurance maladie|||
|MNF_AM|chaîne de caractères|Motif de la non facturation à l'assurance maladie|||
|FAC_18E|chaîne de caractères|Facturation du 18 euros|||
|FAC_NBR_VEN|nombre réel|Nombre de venues de la facture|||
|FAC_MNT_TM|nombre réel|Montant à facturer au titre du ticket modérateur|||
|FAC_MNT_FJ|nombre réel|Montant à facturer au titre du forfait journalier|||
|TOT_MNT_AM|nombre réel|Montant total du séjour remboursé par l’assurance maladie (i.e. hors prestations annexes)|||
|MAJ_MNT_PS|nombre réel|Montant lié à la majoration au parcours de soin|||
|REM_BAS_MNT|nombre réel|Montant base remboursement|||
|REM_TAU|nombre réel|Taux de remboursement|||
|PAT_CMU|chaîne de caractères|Patient bénéficiaire de la CMU|||
|DAT_HOS|chaîne de caractères|Date de l’hospitalisation cryptee|||
|TOT_MNT_AMC|nombre réel|Montant total du séjour remboursable pour l'AMC|||
|PA_COD|chaîne de caractères|Code participation assuré |||
|ENT_NUM|chaîne de caractères|N° d’entrée|||
|CAI_GES|chaîne de caractères|N° caisse gestionnaire|||
|CENT_GES|chaîne de caractères|N° centre gestionnaire |||
|PEC_SOI_URG|chaîne de caractères|Confirmation de la prise en charge dans le cadre du dispositif des soins urgents |||
|NAT_PJ_DT|chaîne de caractères|Nature de la pièce justificative des droits|||
|DAT_PEC|chaîne de caractères|Prise en charge établie le|||
|CAI_NUM|chaîne de caractères|Délivrée par|||
|REG_PEC_ASS|chaîne de caractères|Régime de prestation de l’assuré|||
|TOP_ECL_FLX|chaîne de caractères|Top éclatement des flux par l’établissement|||
|DAT_DEB_FAC|chaîne de caractères|Date d’entrée|||
|DAT_FIN_FAC|chaîne de caractères|Date de sortie|||
|RAC_MNT_PAT_CTL|chaîne de caractères|Code retour contrôle « Montant total du séjour facturé au patient «|||
|NBR_REJET_AMO_CTL|chaîne de caractères|Code retour contrôle « Rejet AMO «|||
|FAC_AMO_DT_CTL|chaîne de caractères|Code retour contrôle « Date de facturation AMO «|||
|FAC_AMC_DT_CTL|chaîne de caractères|Code retour contrôle « Date de facturation AMC «|||
|FAC_RAC_DT_CTL|chaîne de caractères|Code retour contrôle « Date de facturation patient «|||
|PAI_AMO_DT_CTL|chaîne de caractères|Code retour contrôle « Date de paiement AMO «|||
|PAI_AMC_DT_CTL|chaîne de caractères|Code retour contrôle « Date de paiement AMC «|||
|PAI_RAC_DT_CTL|chaîne de caractères|Code retour contrôle « Date de paiement patient «|||
|VALID_FAC_AMO_CTL|chaîne de caractères|Code retour contrôle « Statut FT AMO «|||
|VALID_FAC_AMC_CTL|chaîne de caractères|Code retour contrôle « Statut FT AMC «|||
|VALID_FAC_RAC_CTL|chaîne de caractères|Code retour contrôle « Statut FT patient «|||
|PAYS_ASS_PAT_CTL|chaîne de caractères|Code retour contrôle « Pays d’assurance social «|||
|RAC_MNT_PAT|nombre réel|Montant total du séjour facturé au patient|||
|NBR_REJET_AMO|chaîne de caractères|Rejet AMO|||
|FAC_AMO_DT|chaîne de caractères|Date de facturation AMO|||
|FAC_AMC_DT|chaîne de caractères|Date de facturation AMC|||
|FAC_RAC_DT|chaîne de caractères|Date de facturation patient|||
|PAI_AMO_DT|chaîne de caractères|Date de paiement AMO|||
|PAI_AMC_DT|chaîne de caractères|Date de paiement AMC|||
|PAI_RAC_DT|chaîne de caractères|Date de paiement patient|||
|VALID_FAC_AMO|chaîne de caractères|Statut FT AMO|||
|VALID_FAC_AMC|chaîne de caractères|Statut FT AMC|||
|VALID_FAC_RAC|chaîne de caractères|Statut FT patient|||
|PAYS_ASS_PAT|chaîne de caractères|Pays d’assurance social|||
