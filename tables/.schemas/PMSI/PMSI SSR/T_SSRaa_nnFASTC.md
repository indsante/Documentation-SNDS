## Schéma

- Titre : ACE Entete facture
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM` => table [T_SSRaa_nnE](/tables/T_SSRaa_nnE) [ `ETA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20SSR/T_SSRaa_nnFASTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`SEQ_NUM`|
string|N° séquentiel||
`TYP_ART`|
string|Type d&#x27;enregistrement||
`RSF_TYP`|
string|Type de format RSF (1 : ancien, 2 : nouveau)||
`NUM_FAC`|
string|N° Facture séquentiel||
`SOR_ANN`|
string|Année de sortie||
`SOR_MOI`|
string|Mois de sortie||
`ETA_NUM`|
string|Numéro FINESS||
`AGE_ANN`|
number|Age||
`COD_SEX`|
string|Sexe||
`BDI_COD`|
string|Code géographique||
`BDI_DEP`|
string|Code département de résidence||
`COD_CIV`|
string|Code civilité||
`RNG_BEN`|
string|Rang de bénéficiaire||
`PS_IND`|
string|Indicateur du parcours de soins||
`OPE_NAT`|
string|Nature opération||
`NAT_ASS`|
string|Nature assurance||
`EXO_TM`|
string|Justification d&#x27;exonération du TM||
`SEJ_FAC_AM`|
string|Séjour facturable à l’assurance maladie||
`NON_SEJ_FAC_AM`|
string|Motif de la non facturation à l&#x27;assurance maladie||
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
number|Montant total facturé pour PH||
`PAT_CMU`|
string|Patient bénéficiaire de la CMU||
`GES_COD`|
string|Code de gestion||
`ORG_CPL_NUM`|
string|N° d’organisme complémentaire||
`NUM_DAT_AT`|
string|Numéro accident du travail ou date d’accident de droit commun||
`ETA_NUM_GEO`|
string|FINESS géographique||
`CTR_TYP`|
string|Type de contrat souscrit auprès d&#x27;un organisme||
`FIDES_TOP`|
string|Valorisé par FIDES||

