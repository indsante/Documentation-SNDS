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
`RHA_NUM`|chaîne de caractères|N° Séquentiel du séjour||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement (A)||
`RSF_TYP`|chaîne de caractères|Type de format RSF (1&#x3D;Ancien/2&#x3D;Nouveau)||
`NUM_FAC`|chaîne de caractères|N° Facture séquentiel||
`ETA_NUM`|chaîne de caractères|N° FINESS||
`AGE_ANN`|nombre réel|Age||
`COD_SEX`|chaîne de caractères|Sexe||
`COD_CIV`|chaîne de caractères|Civilité||
`RNG_BEN`|chaîne de caractères|Rang de bénéficiaire||
`OPE_NAT`|chaîne de caractères|Nature opération||
`NAT_ASS`|chaîne de caractères|Nature assurance||
`EXO_TM`|chaîne de caractères|Justification d&#x27;exonération du TM||
`COD_PEC`|chaîne de caractères|Code de prise en charge||
`NOE_RGM`|chaîne de caractères|Code Gd régime||
`RNG_NAI`|chaîne de caractères|Rang de naissance||
`PH_BRM`|nombre réel|Total Base Remboursement Prestation hospitalière||
`PH_AMO_MNR`|nombre réel|Total remboursable AMO Prestation hospitalières||
`HON_MNT`|nombre réel|Total honoraire Facturé||
`HON_AM_MNR`|nombre réel|Total honoraire remboursable AM||
`PAS_OC_MNT`|nombre réel|Total participation assuré avant OC||
`PH_OC_MNR`|nombre réel|Total remboursable OC pour les PH||
`HON_OC_MNR`|nombre réel|Total remboursable OC pour les honoraires||
`PH_MNT`|nombre réel|Montant total facturé pour  PH||
`PAT_BEN_CMU`|chaîne de caractères|Patient bénéficiaire de la CMU||
`ORG_CPL_NUM`|chaîne de caractères|N° d’organisme complémentaire||
`NUM_DAT_AT`|chaîne de caractères|Numéro accident du travail ou date d’accident de droit commun||
`SOR_ANN`|année|Année de sortie||
`SOR_MOI`|date|Mois de sortie||
`CTR_TYP`|chaîne de caractères|Type de contrat souscrit auprès d&#x27;un organisme||
`FAC_ETL`|chaîne de caractères|Etat de liquidation de la facture||
`GES_COD`|chaîne de caractères|Code gestion||

