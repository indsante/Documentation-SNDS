## Schéma

- Titre : OQN Entete facture
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RHA_NUM` => table [T_SSRaa_nnB](/tables/T_SSRaa_nnB) [ `ETA_NUM`, `RHA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20SSR/T_SSRaa_nnFA.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`RHA_NUM`|
string|N° Séquentiel du séjour||
`TYP_ART`|
string|Type d&#x27;enregistrement (A)||
`RSF_TYP`|
string|Type de format RSF (1&#x3D;Ancien/2&#x3D;Nouveau)||
`NUM_FAC`|
string|N° Facture séquentiel||
`ETA_NUM`|
string|N° FINESS||
`AGE_ANN`|
number|Age||
`COD_SEX`|
string|Sexe||
`COD_CIV`|
string|Civilité||
`RNG_BEN`|
string|Rang de bénéficiaire||
`OPE_NAT`|
string|Nature opération||
`NAT_ASS`|
string|Nature assurance||
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
`PAT_BEN_CMU`|
string|Patient bénéficiaire de la CMU||
`ORG_CPL_NUM`|
string|N° d’organisme complémentaire||
`NUM_DAT_AT`|
string|Numéro accident du travail ou date d’accident de droit commun||
`SOR_ANN`|
string|Année de sortie||
`SOR_MOI`|
string|Mois de sortie||
`CTR_TYP`|
string|Type de contrat souscrit auprès d&#x27;un organisme||
`FAC_ETL`|
string|Etat de liquidation de la facture||
`GES_COD`|
string|Code gestion||

