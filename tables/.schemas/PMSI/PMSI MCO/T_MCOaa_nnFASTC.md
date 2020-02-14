## Schéma

- Titre : ACE Entete facture
<br />
- Clé primaire : `ETA_NUM`, `SEQ_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM` => table [T_MCOaa_nnE](/tables/T_MCOaa_nnE) [ `ETA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20MCO/T_MCOaa_nnFASTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`AGE_ANN`|
integer|Age (en années)||
`BDI_COD`|
string|Code géographique de résidence||
`BDI_DEP`|
string|Code département de résidence||
`COD_CIV`|
string|Code civilité||
`COD_SEX`|
string|Sexe||
`CTR_TYP`|
string|Type de contrat souscrit auprès d&#x27;un organisme complémentaire||
`ETA_NUM`|
string|Numéro FINESS e-PMSI||
`ETA_NUM_GEO`|
string|Numéro FINESS géographique||
`EXO_TM`|
string|Justification d&#x27;exonération du TM||
`FIDES_TOP`|
string|Valorisé par FIDES||
`GES_COD`|
string|Code gestion||
`HON_AM_MNR`|
number|Total honoraire remboursable AM||
`HON_MNT`|
number|Total honoraire Facturé||
`HON_OC_MNR`|
number|Total remboursable OC pour les honoraires||
`NAT_ASS`|
string|Nature assurance||
`NOE_RGM`|
string|Code Gd régime||
`NON_SEJ_FAC_AM`|
string|Motif de la non facturation à l&#x27;assurance maladie||
`NUM_DAT_AT`|
string|Numéro accident du travail ou date d’accident de droit commun||
`NUM_FAC`|
string|N° Facture séquentiel||
`OPE_NAT`|
string|Nature opération||
`ORG_CPL_NUM`|
string|N° d’organisme complémentaire||
`PAS_OC_MNT`|
number|Total participation assuré avant OC||
`PAT_CMU`|
string|Patient bénéficiaire de la CMU||
`PH_AMO_MNR`|
number|Total remboursable AMO Prestation hospitalières||
`PH_BRM`|
number|Total Base Remboursement Prestation hospitalière||
`PH_MNT`|
number|Montant total facturé pour PH||
`PH_OC_MNR`|
number|Total remboursable OC pour les PH||
`PS_IND`|
string|Indicateur du parcours de soins||
`RNG_BEN`|
string|Rang de bénéficiaire||
`RNG_NAI`|
string|Rang de naissance||
`RSF_TYP`|
string|Type de format RSF (1 : ancien, 2 : nouveau)||
`SEJ_FAC_AM`|
string|Séjour facturable à l’assurance maladie||
`SEQ_NUM`|
string|N° séquentiel||
`SOR_ANN`|
string|Année de sortie||
`SOR_MOI`|
string|Mois de sortie||
`TYP_ART`|
string|Type d&#x27;enregistrement||
`DAT_RET`|
boolean|Code retour contrôle « date de référence» (date d&#x27;entrée)||
`NIR_ANO_17`|
string|N° anonyme||
`NIAS_RET`|
boolean|Code retour contrôle « n° d’identification administratif de séjour »||
`SEX_RET`|
boolean|Code retour contrôle « sexe »||
`NIR_RET`|
boolean|Code retour contrôle « n° sécurité sociale »||
`COD_PEC`|
string|Code de prise en charge||

