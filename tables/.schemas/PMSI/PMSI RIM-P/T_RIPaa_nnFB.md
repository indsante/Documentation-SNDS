## Schéma

- Titre : prestation hospitalière
<br />
- Clé primaire : `ETA_NUM_EPMSI`, `RIP_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI` => table [T_RIPaa_nnE](/tables/T_RIPaa_nnE) [ `ETA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20RIM-P/T_RIPaa_nnFB.json"  
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
`ENT_MOI`|date|Mois de la date de début de séjour||
`ENT_ANN`|année|Année de la date de début de séjour||
`SOR_MOI`|date|Mois de la date de fin de séjour||
`SOR_ANN`|année|Année de la date de fin de séjour||
`SEJ_DUR`|nombre réel|Durée (Date de fin de séjour-date de début de séjour)||
`DEL_DAT_ENT`|nombre réel|Délai par rapport à la date d&#x27;entrée||
`PSH_MDT`|chaîne de caractères|Mode de traitement||
`PSH_DMT`|chaîne de caractères|Discipline de prestation (ex DMT)||
`ACT_COD`|chaîne de caractères|Code acte||
`ACT_NBR`|nombre entier|Quantité||
`EXO_TM`|chaîne de caractères|Justification exonération TM||
`ACT_COE`|nombre réel|Cœfficient||
`COD_PEC`|chaîne de caractères|Code prise en charge FJ||
`RIP_COE`|nombre réel|Cœfficient MCO/HAD||
`PRI_UNI`|nombre réel|Prix Unitaire||
`REM_BAS`|nombre réel|Montant Base remboursement||
`REM_TAU`|nombre réel|Taux applicable à la prestation||
`AMO_MNR`|nombre réel|Montant Remboursable par la caisse (AMO)||
`FAC_MNT`|nombre réel|Montant total de la dépense||
`AMC_MNR`|nombre réel|Montant remboursable par l&#x27;organisme complémentaire (AMC)||
`GHS_NUM`|chaîne de caractères|N° de GHS/GHT||
`NOE_MNR`|nombre réel|Montant remboursé NOEMIE Retour||
`NOE_OPE`|chaîne de caractères|Nature opération récupération NOEMIE Retour||
`ETE_GHS_NUM`|nombre réel|N° GHS (format num)||

