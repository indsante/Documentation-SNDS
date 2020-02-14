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
`AGE_ANN`|nombre entier|Age (en années)||
`BDI_COD`|chaîne de caractères|Code géographique de résidence||
`BDI_DEP`|chaîne de caractères|Code département de résidence||
`COD_CIV`|chaîne de caractères|Code civilité||
`COD_SEX`|chaîne de caractères|Sexe||
`CTR_TYP`|chaîne de caractères|Type de contrat souscrit auprès d&#x27;un organisme complémentaire||
`ETA_NUM`|chaîne de caractères|Numéro FINESS e-PMSI||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS géographique||
`EXO_TM`|chaîne de caractères|Justification d&#x27;exonération du TM||
`FIDES_TOP`|chaîne de caractères|Valorisé par FIDES||
`GES_COD`|chaîne de caractères|Code gestion||
`HON_AM_MNR`|nombre réel|Total honoraire remboursable AM||
`HON_MNT`|nombre réel|Total honoraire Facturé||
`HON_OC_MNR`|nombre réel|Total remboursable OC pour les honoraires||
`NAT_ASS`|chaîne de caractères|Nature assurance||
`NOE_RGM`|chaîne de caractères|Code Gd régime||
`NON_SEJ_FAC_AM`|chaîne de caractères|Motif de la non facturation à l&#x27;assurance maladie||
`NUM_DAT_AT`|chaîne de caractères|Numéro accident du travail ou date d’accident de droit commun||
`NUM_FAC`|chaîne de caractères|N° Facture séquentiel||
`OPE_NAT`|chaîne de caractères|Nature opération||
`ORG_CPL_NUM`|chaîne de caractères|N° d’organisme complémentaire||
`PAS_OC_MNT`|nombre réel|Total participation assuré avant OC||
`PAT_CMU`|chaîne de caractères|Patient bénéficiaire de la CMU||
`PH_AMO_MNR`|nombre réel|Total remboursable AMO Prestation hospitalières||
`PH_BRM`|nombre réel|Total Base Remboursement Prestation hospitalière||
`PH_MNT`|nombre réel|Montant total facturé pour PH||
`PH_OC_MNR`|nombre réel|Total remboursable OC pour les PH||
`PS_IND`|chaîne de caractères|Indicateur du parcours de soins||
`RNG_BEN`|chaîne de caractères|Rang de bénéficiaire||
`RNG_NAI`|chaîne de caractères|Rang de naissance||
`RSF_TYP`|chaîne de caractères|Type de format RSF (1 : ancien, 2 : nouveau)||
`SEJ_FAC_AM`|chaîne de caractères|Séjour facturable à l’assurance maladie||
`SEQ_NUM`|chaîne de caractères|N° séquentiel||
`SOR_ANN`|année|Année de sortie||
`SOR_MOI`|date|Mois de sortie||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`DAT_RET`|booléen|Code retour contrôle « date de référence» (date d&#x27;entrée)||
`NIR_ANO_17`|chaîne de caractères|N° anonyme||
`NIAS_RET`|booléen|Code retour contrôle « n° d’identification administratif de séjour »||
`SEX_RET`|booléen|Code retour contrôle « sexe »||
`NIR_RET`|booléen|Code retour contrôle « n° sécurité sociale »||
`COD_PEC`|chaîne de caractères|Code de prise en charge||

