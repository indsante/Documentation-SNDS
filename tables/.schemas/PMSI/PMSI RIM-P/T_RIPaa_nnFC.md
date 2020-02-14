## Schéma

- Titre : honoraire
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RIP_NUM` => table [T_RIPaa_nnFB](/tables/T_RIPaa_nnFB) [ `ETA_NUM_EPMSI`, `RIP_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20RIM-P/T_RIPaa_nnFC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`ETA_NUM_EPMSI`|chaîne de caractères|Numéro FINESS de l’entité juridique||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (site géographique)||
`RIP_NUM`|chaîne de caractères|Numéro séquentiel de séjour (idem RPSA)||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture||
`DEL_DAT_ENT`|nombre réel|Délai par rapport à la date d&#x27;entrée||
`ACT_MOI`|date|Mois de la date de l&#x27;acte||
`ACT_ANN`|année|Année de la date de l&#x27;acte||
`PSH_MDT`|chaîne de caractères|Mode de traitement||
`PSH_DMT`|chaîne de caractères|Discipline de prestation (ex DMT)||
`EXO_TM`|chaîne de caractères|Justification exo TM||
`ACT_COD`|chaîne de caractères|Code acte||
`ACT_NBR`|nombre entier|Quantité||
`ACT_COE`|nombre réel|Cœfficient||
`ACT_DNB`|nombre réel|Dénombrement||
`PRI_UNI`|nombre réel|Prix Unitaire||
`REM_BAS`|nombre réel|Montant Base remboursement||
`REM_TAU`|nombre réel|Taux Remboursement||
`AMO_MNR`|nombre réel|Montant Remboursable par AMO||
`HON_MNT`|nombre réel|Montant des honoraire (dépassement compris)||
`AMC_MNR`|nombre réel|Montant remboursable par AMC||
`NOE_MNR`|nombre réel|Montant remboursé NOEMIE Retour||
`NOE_OPE`|chaîne de caractères|Nature opération récupération NOEMIE Retour||

