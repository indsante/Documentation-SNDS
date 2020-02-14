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
`SEQ_NUM`|chaîne de caractères|N° séquentiel||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`RSF_TYP`|chaîne de caractères|Type de format RSF (1 : ancien, 2 : nouveau)||
`NUM_FAC`|chaîne de caractères|N° Facture séquentiel||
`SOR_ANN`|année|Année de sortie||
`SOR_MOI`|date|Mois de sortie||
`ETA_NUM`|chaîne de caractères|Numéro FINESS||
`AGE_ANN`|nombre réel|Age||
`COD_SEX`|chaîne de caractères|Sexe||
`BDI_COD`|chaîne de caractères|Code géographique||
`BDI_DEP`|chaîne de caractères|Code département de résidence||
`COD_CIV`|chaîne de caractères|Code civilité||
`RNG_BEN`|chaîne de caractères|Rang de bénéficiaire||
`PS_IND`|chaîne de caractères|Indicateur du parcours de soins||
`OPE_NAT`|chaîne de caractères|Nature opération||
`NAT_ASS`|chaîne de caractères|Nature assurance||
`EXO_TM`|chaîne de caractères|Justification d&#x27;exonération du TM||
`SEJ_FAC_AM`|chaîne de caractères|Séjour facturable à l’assurance maladie||
`NON_SEJ_FAC_AM`|chaîne de caractères|Motif de la non facturation à l&#x27;assurance maladie||
`NOE_RGM`|chaîne de caractères|Code Gd régime||
`RNG_NAI`|chaîne de caractères|Rang de naissance||
`PH_BRM`|nombre réel|Total Base Remboursement Prestation hospitalière||
`PH_AMO_MNR`|nombre réel|Total remboursable AMO Prestation hospitalières||
`HON_MNT`|nombre réel|Total honoraire Facturé||
`HON_AM_MNR`|nombre réel|Total honoraire remboursable AM||
`PAS_OC_MNT`|nombre réel|Total participation assuré avant OC||
`PH_OC_MNR`|nombre réel|Total remboursable OC pour les PH||
`HON_OC_MNR`|nombre réel|Total remboursable OC pour les honoraires||
`PH_MNT`|nombre réel|Montant total facturé pour PH||
`PAT_CMU`|chaîne de caractères|Patient bénéficiaire de la CMU||
`GES_COD`|chaîne de caractères|Code de gestion||
`ORG_CPL_NUM`|chaîne de caractères|N° d’organisme complémentaire||
`NUM_DAT_AT`|chaîne de caractères|Numéro accident du travail ou date d’accident de droit commun||
`ETA_NUM_GEO`|chaîne de caractères|FINESS géographique||
`CTR_TYP`|chaîne de caractères|Type de contrat souscrit auprès d&#x27;un organisme||
`FIDES_TOP`|chaîne de caractères|Valorisé par FIDES||

