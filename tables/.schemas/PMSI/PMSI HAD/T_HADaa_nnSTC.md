## Schéma

- Titre : Prise en charge par l'AM de chaque séjour, pour les établissements valorisés STC
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaa_nnB](/tables/T_HADaa_nnB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20HAD/T_HADaa_nnSTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|
string|N° FINESS e-PMSI||
`ETA_NUM_GEO`|
string|Numéro FINESS de l’établissement (code géographique)||
`RHAD_NUM`|
string|N° séquentiel de séjour d&#x27;HAD||
`GRG_COD_CTL`|
string|Contrôle code grand régime||
`GES_COD_CTL`|
string|Code retour controle «code gestion»||
`EXO_TM_CTL`|
string|Contrôle code justification d&#x27;exonération du TM||
`COD_PEC_CTL`|
string|Contrôle code prise en charge forfait journalier||
`NAT_ASS_CTL`|
string|Contrôle code nature d&#x27;assurance||
`TYP_CTR_CTL`|
string|Contrôle type de contrat souscrit auprès d&#x27;un organisme complémentaire||
`SEJ_FAC_CTL`|
string|Contrôle code séjour facturable à l&#x27;AM||
`MNF_AM_CTL`|
string|Code retour contrôle « motif de la non facturation à l&#x27;assurance maladie »||
`FAC_18E_CTL`|
string|Contrôle code facturation des 18 euros||
`NBR_VEN_CTL`|
string|Contrôle format nombre de venues||
`FAC_MNT_TM_CTL`|
string|Contrôle format montant à facturer au titre du TM||
`FAC_MNT_FJ_CTL`|
string|Contrôle format montant à facturer au titre du FJ||
`TOT_MNT_AM_CTL`|
string|Contrôle format montant total remboursable par AM||
`MAJ_MNT_CTL`|
string|Contrôle format montant majoration parcours de soins||
`REM_BAS_CTL`|
string|Contrôle montant base remboursement||
`REM_TAU_CTL`|
string|Contrôle taux de remboursement||
`PAT_CMU_CTL`|
string|Code retour contrôle « Patient bénéficiaire de la CMU »||
`DAT_HOS_CTL`|
string|code retour controlme identifiant anonyme hosp||
`TOT_MNT_AMC_CTL`|
string|Code retour contrôle « Montant total du séjour remboursable pour l&#x27;AMC »||
`PA_COD_CTL`|
string|Code retour contrôle « Code participation assuré »||
`ENT_NUM_CTL`|
string|Code retour contrôle « N° d’entrée »||
`PEC_SOI_URG_CTL`|
string|Code retour contrôle &quot;Confirmation de la prise en charge dans le cadre du dispositif des soins urgents&quot;||
`NAT_PJ_DT_CTL`|
string|Code retour contrôle &quot;Nature de la pièce justificative des droits&quot;||
`DAT_PEC_CTL`|
string|Code retour contrôle &quot;Prise en charge établie le&quot;||
`CAI_NUM_CTL`|
string|Code retour contrôle &quot;Délivrée par&quot;||
`REG_PEC_ASS_CTL`|
string|Code retour contrôle &quot;Régime de prestation de l’assuré&quot;||
`TOP_ECL_FLX_CTL`|
string|Code retour contrôle &quot;Top éclatement des flux par l’établissement&quot;||
`DAT_DEB_FAC_CTL`|
string|Code retour contrôle &quot;Date d’entrée&quot;||
`DAT_FIN_FAC_CTL`|
string|Code retour contrôle &quot;Date de sortie&quot;||
`CAI_GES_CTL`|
string|Code retour contrôle « N° caisse gestionnaire »||
`CENT_GES_CTL`|
string|Code retour contrôle « N° centre gestionnaire »||
`GRG_COD`|
string|Code grand régime||
`GES_COD`|
string|Code gestion||
`EXO_TM`|
string|Code justification d’exonération du ticket modérateur||
`FJ_COD_PEC`|
string|Code de prise en charge du forfait journalier||
`NAT_ASS`|
string|Nature d’assurance||
`TYP_CTR`|
string|Type de contrat souscrit auprès d&#x27;un organisme complémentaire||
`FAC_SEJ_AM`|
string|Séjour facturable à l’assurance maladie||
`MNF_AM`|
string|Motif de la non facturation à l&#x27;assurance maladie||
`FAC_18E`|
string|Facturation du 18 euros||
`FAC_NBR_VEN`|
integer|Nombre de venues de la facture||
`FAC_MNT_TM`|
number|Montant à facturer au titre du ticket modérateur||
`FAC_MNT_FJ`|
number|Montant à facturer au titre du forfait journalier||
`TOT_MNT_AM`|
number|Montant total du séjour remboursé par l’assurance maladie (i.e. hors prestations annexes)||
`MAJ_MNT_PS`|
number|Montant lié à la majoration au parcours de soin||
`REM_BAS_MNT`|
number|Montant base remboursement||
`REM_TAU`|
number|Taux de remboursement||
`PAT_CMU`|
string|Patient bénéficiaire de la CMU||
`DAT_HOS`|
string|Date de l’hospitalisation cryptee||
`TOT_MNT_AMC`|
number|Montant total du séjour remboursable pour l&#x27;AMC||
`PA_COD`|
string|Code participation assuré||
`ENT_NUM`|
string|N° d’entrée||
`CAI_GES`|
string|N° caisse gestionnaire||
`CENT_GES`|
string|N° centre gestionnaire||
`PEC_SOI_URG`|
string|Confirmation de la prise en charge dans le cadre du dispositif des soins urgents||
`NAT_PJ_DT`|
string|Nature de la pièce justificative des droits||
`DAT_PEC`|
string|Prise en charge établie le||
`CAI_NUM`|
string|Délivrée par||
`REG_PEC_ASS`|
string|Régime de prestation de l’assuré||
`TOP_ECL_FLX`|
string|Top éclatement des flux par l’établissement||
`DAT_DEB_FAC`|
string|Date d’entrée||
`DAT_FIN_FAC`|
string|Date de sortie||
`RAC_MNT_PAT_CTL`|
string|Code retour contrôle « Montant total du séjour facturé au patient «||
`NBR_REJET_AMO_CTL`|
string|Code retour contrôle « Rejet AMO «||
`FAC_AMO_DT_CTL`|
string|Code retour contrôle « Date de facturation AMO «||
`FAC_AMC_DT_CTL`|
string|Code retour contrôle « Date de facturation AMC «||
`FAC_RAC_DT_CTL`|
string|Code retour contrôle « Date de facturation patient «||
`PAI_AMO_DT_CTL`|
string|Code retour contrôle « Date de paiement AMO «||
`PAI_AMC_DT_CTL`|
string|Code retour contrôle « Date de paiement AMC «||
`PAI_RAC_DT_CTL`|
string|Code retour contrôle « Date de paiement patient «||
`VALID_FAC_AMO_CTL`|
string|Code retour contrôle « Statut FT AMO «||
`VALID_FAC_AMC_CTL`|
string|Code retour contrôle « Statut FT AMC «||
`VALID_FAC_RAC_CTL`|
string|Code retour contrôle « Statut FT patient «||
`PAYS_ASS_PAT_CTL`|
string|Code retour contrôle « Pays d’assurance social «||
`RAC_MNT_PAT`|
number|Montant total du séjour facturé au patient||
`NBR_REJET_AMO`|
string|Rejet AMO||
`FAC_AMO_DT`|
string|Date de facturation AMO||
`FAC_AMC_DT`|
string|Date de facturation AMC||
`FAC_RAC_DT`|
string|Date de facturation patient||
`PAI_AMO_DT`|
string|Date de paiement AMO||
`PAI_AMC_DT`|
string|Date de paiement AMC||
`PAI_RAC_DT`|
string|Date de paiement patient||
`VALID_FAC_AMO`|
string|Statut FT AMO||
`VALID_FAC_AMC`|
string|Statut FT AMC||
`VALID_FAC_RAC`|
string|Statut FT patient||
`PAYS_ASS_PAT`|
string|Pays d’assurance social||
`RNG_NAI`|
string|Rang de naissance||
`RNG_BEN`|
string|Rang du bénéficiaire||
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (code géographique)||
`RNG_NAI_CTL`|
string|Code retour contrôle « Rang de naissance »||
`RNG_BEN_CTL`|
string|Code retour contrôle « Rang du bénéficiaire »||

