## Schéma

- Titre : debut facture
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RIP_NUM` => table [T_RIPaa_nnFB](/tables/T_RIPaa_nnFB) [ `ETA_NUM_EPMSI`, `RIP_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20RIM-P/T_RIPaa_nnFA.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`TYP_ART`|
string|Type d&#x27;enregistrement||
`ETA_NUM_EPMSI`|
string|Numéro FINESS de l’entité juridique||
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (site géographique)||
`RIP_NUM`|
string|Numéro séquentiel de séjour (idem RPSA)||
`FAC_NUM`|
string|N° séquentiel de facture||
`ENT_MOI`|
string|Mois de la date d&#x27;entrée||
`ENT_ANN`|
string|Année de la date d&#x27;entrée||
`SOR_MOI`|
string|Mois de la date de sortie||
`SOR_ANN`|
string|Année de la date de sortie||
`SEJ_DUR`|
number|Durée (Date de sortie-date d&#x27;entrée)||
`COD_SEX`|
string|Sexe||
`AGE_ANN`|
number|Age (en années)||
`COD_CIV`|
string|Code civilité||
`RNG_BEN`|
string|Rang de bénéficiaire||
`OPE_NAT`|
string|Nature opération||
`NAT_ASS`|
string|Nature assurance||
`CON_TYP`|
string|Type de contrat souscrit auprès d&#x27;un organisme complémentaire||
`EXO_TM`|
string|Justification d&#x27;exonération du TM||
`COD_PEC`|
string|Code de prise en charge||
`NOE_RGM`|
string|Code Gd régime||
`RNG_NAI`|
string|Rang de naissance||
`PH_BRM`|
number|Total Base Remboursement Prestation hospitalière||
`PH_AMO_MNR`|
number|Total remboursable AMO Prestation hospitalières||
`HON_MNT`|
number|Total honoraire Facturé||
`HON_AM_MNR`|
number|Total honoraire remboursable AM||
`PAS_OC_MNT`|
number|Total participation assuré avant OC||
`PH_OC_MNR`|
number|Total remboursable OC pour les PH||
`HON_OC_MNR`|
number|Total remboursable OC pour les honoraires||
`PH_MNT`|
number|Montant total facturé pour  PH||
`FAC_ETL`|
string|Etat de liquidation de la facture||
`BEN_CMU`|
string|Patient bénéficiaire de la CMU||
`ORG_CPL_NUM`|
string|N° d’organisme complémentaire||
`NUM_DAT_AT`|
string|Numéro accident du travail ou date d’accident de droit commun||

