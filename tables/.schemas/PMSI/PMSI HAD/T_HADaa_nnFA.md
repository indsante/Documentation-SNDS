## Schéma

- Titre : TableFA : Table des RSFA début de facture des établissements ex-OQN
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaa_nnB](/tables/T_HADaa_nnB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20HAD/T_HADaa_nnFA.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`AGE_ANN`|
number|Age||
`CMU_BEN_PAT`|
string|Patient bénéficiaire de la CMU||
`COD_CIV`|
string|Code civilité||
`COD_SEX`|
string|Sexe||
`CON_TYP`|
string|Type de contrat souscrit auprès d&#x27;un organisme complémentaire||
`ENT_ANN`|
string|Année de la date d&#x27;entrée||
`ENT_MOI`|
string|Mois de la date d&#x27;entrée||
`ETA_NUM_EPMSI`|
string|N° FINESS e-PMSI||
`ETA_NUM_GEO`|
string|Numéro FINESS  géographique||
`EXO_TM`|
string|Justification d&#x27;exonération du TM||
`COD_PEC`|
string|Code de prise en charge||
`FAC_ETL`|
string|Etat de liquidation de la facture||
`FAC_NUM`|
string|N° séquentiel de facture (idem RAPSS)||
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
`OPE_NAT`|
string|Nature opération||
`PAS_OC_MNT`|
number|Total participation assuré avant OC||
`PH_AMO_MNR`|
number|Total remboursable AMO Prestation hospitalières||
`PH_BRM`|
number|Total Base Remboursement Prestation hospitalière||
`PH_MNT`|
number|Montant total facturé pour  PH||
`PH_OC_MNR`|
number|Total remboursable OC pour les PH||
`RHAD_NUM`|
string|Numéro séquentiel d&#x27;entrée (idem RAPSS)||
`SOR_ANN`|
string|Année de la date de sortie||
`SOR_MOI`|
string|Mois de la date de sortie||
`TYP_ART`|
string|Type d&#x27;enregistrement||
`ORG_CPL_NUM`|
string|N° d’organisme complémentaire||
`NUM_DAT_AT`|
string|Numéro accident du travail ou date d’accident de droit commun||
`RNG_BEN`|
string|Rang de bénéficiaire||
`RNG_NAI`|
string|Rang de naissance||
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (site géographique)||

