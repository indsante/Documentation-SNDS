## Schéma

- Titre : Prise en charge patient pour etb DG
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RIP_NUM` => table [T_RIPaa_nnFB](/tables/T_RIPaa_nnFB) [ `ETA_NUM_EPMSI`, `RIP_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20RIM-P/T_RIPaa_nnSTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|
string|N° FINESS de l&#x27;établisement||
`RIP_NUM`|
string|N° séquentiel dans fichier PMSI||
`NOE_RGM_CTL`|
string|Code retour contrôle « code grand régime »||
`EXO_TM_CTL`|
string|Code retour contrôle « code justification d’exonération du ticket modérateur »||
`COD_PEC_CTL`|
string|Code retour contrôle « code de prise en charge du forfait journalier »||
`NAT_ASS_CTL`|
string|Code retour contrôle « nature d’assurance »||
`CTR_TYP_CTL`|
string|Code retour contrôle « type de contrat souscrit auprès d&#x27;un organisme complémentaire »||
`SEJ_FAC_CTL`|
string|Code retour contrôle « séjour facturable à l’assurance maladie »||
`NON_FAC_AM_CTL`|
string|Code retour contrôle « motif de la non facturation à l&#x27;assurance maladie »||
`FAC_18E_CTL`|
string|Code retour contrôle « facturation du 18 euro »||
`NBR_VEN_CTL`|
string|Code retour contrôle « nombre de venues de la facture »||
`FAC_MNT_TM_CTL`|
string|Code retour contrôle « montant à facturer au titre du ticket modérateur»||
`FAC_MNT_FJ_CTL`|
string|Code retour contrôle « montant à facturer au titre du forfait journalier »||
`TOT_MNT_AM_CTL`|
string|Code retour contrôle « montant total du séjour remboursé par l’assurance maladie (i.e. hors prestations annexes »)||
`MAJ_MNT_CTL`|
string|Code retour contrôle « montant lié à la majoration au parcours de soin »||
`REM_BAS_CTL`|
string|Code retour contrôle « montant base remboursement »||
`REM_TAU_CTL`|
string|Code retour contrôle « taux de remboursement »||
`BEN_CMU_CTL`|
string|Code retour contrôle « Patient bénéficiaire de la CMU »||
`DAT_HOS_CTL`|
string|Code retour contrôle « Identifiant anonyme d&#x27;hospitalisation »||
`TOT_MNT_AMC_CTL`|
string|Code retour contrôle « Montant total du séjour remboursable pour l&#x27;AMC »||
`NOE_RGM`|
string|Code grand régime||
`EXO_TM`|
string|Code justification d’exonération du ticket modérateur||
`FJ_COD_PEC`|
string|Code de prise en charge du forfait journalier||
`NAT_ASS`|
string|Nature d&#x27;assurance||
`CTR_TYP`|
string|Type de contrat souscrit auprès d&#x27;un organisme complémentaire||
`SEJ_FAC_AM`|
string|Séjour facturable à l’assurance maladie||
`NON_FAC_AM`|
string|Motif de la non facturation à l&#x27;assurance maladie||
`FAC_18E`|
string|Facturation du 18 euro||
`FAC_NBR_VEN`|
number|Nombre de venues de la facture||
`FAC_MNT_TM`|
number|Montant à facturer au titre du ticket modérateur||
`FAC_MNT_FJ`|
number|Montant à facturer au titre du forfait journalier||
`TOT_MNT_AM`|
number|Montant total du séjour remboursé par l’assurance maladie (i.e. hors prestations annexes)||
`MAJ_MNT_PS`|
number|Montant lié à la majoration au parcours de soins||
`REM_BAS_MNT`|
number|Montant base remboursement||
`REM_TAU`|
number|Taux de remboursement||
`BEN_CMU`|
string|Patient bénéficiaire de la CMU||
`DAT_HOS`|
string|Identifiant anonyme d&#x27;hospitalisation||
`TOT_MNT_AMC`|
number|Montant total du séjour remboursable pour l&#x27;AMC||
`GES_COD_CTL`|
string|Code retour contrôle « code gestion »||
`PA_COD_CTL`|
string|Code retour contrôle « Code participation assuré »||
`ENT_NUM_CTL`|
string|Code retour contrôle « N° d’entrée »||
`CAI_GES_CTL`|
string|Code retour contrôle « N° caisse gestionnaire »||
`CENT_GES_CTL`|
string|Code retour contrôle « N° centre gestionnaire »||
`GES_COD`|
string|code gestion||
`PA_COD`|
string|Code participation assuré||
`ENT_NUM`|
string|N° d’entrée||
`CAI_GES`|
string|N° caisse gestionnaire||
`CENT_GES`|
string|N° centre gestionnaire||
`RNG_NAI_CTL`|
string|Code retour contrôle « Rang de naissance »||
`RNG_BEN_CTL`|
string|Code retour contrôle « Rang du bénéficiaire »||
`RNG_NAI`|
string|Rang de naissance||
`RNG_BEN`|
string|Rang du bénéficiaire||
`PEC_SOI_URG_CTL`|
string|Code retour contrôle &quot;Confirmation de la prise en charge dans le cadre du dispositif des soins urgents&quot;||
`PEC_SOI_URG`|
string|Confirmation de la prise en charge dans le cadre du dispositif des soins urgents||
`NAT_PJ_DT_CTL`|
string|Code retour contrôle «Nature de la pièce justificative des droits«||
`DAT_PEC_CTL`|
string|Code retour contrôle «Prise en charge établie le«||
`CAI_NUM_CTL`|
string|Code retour contrôle «Délivrée par«||
`REG_PEC_ASS_CTL`|
string|Code retour contrôle «Régime de prestation de l’assuré«||
`TOP_ECL_FLX_CTL`|
string|Code retour contrôle «Top éclatement des flux par l’établissement«||
`DAT_DEB_FAC_CTL`|
string|Code retour contrôle «Date d’entrée«||
`DAT_FIN_FAC_CTL`|
string|Code retour contrôle «Date de sortie«||
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
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (site géographique)||

