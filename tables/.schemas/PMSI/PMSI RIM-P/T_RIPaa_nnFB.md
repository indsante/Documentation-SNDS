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
string|Mois de la date de début de séjour||
`ENT_ANN`|
string|Année de la date de début de séjour||
`SOR_MOI`|
string|Mois de la date de fin de séjour||
`SOR_ANN`|
string|Année de la date de fin de séjour||
`SEJ_DUR`|
number|Durée (Date de fin de séjour-date de début de séjour)||
`DEL_DAT_ENT`|
number|Délai par rapport à la date d&#x27;entrée||
`PSH_MDT`|
string|Mode de traitement||
`PSH_DMT`|
string|Discipline de prestation (ex DMT)||
`ACT_COD`|
string|Code acte||
`ACT_NBR`|
integer|Quantité||
`EXO_TM`|
string|Justification exonération TM||
`ACT_COE`|
number|Cœfficient||
`COD_PEC`|
string|Code prise en charge FJ||
`RIP_COE`|
number|Cœfficient MCO/HAD||
`PRI_UNI`|
number|Prix Unitaire||
`REM_BAS`|
number|Montant Base remboursement||
`REM_TAU`|
number|Taux applicable à la prestation||
`AMO_MNR`|
number|Montant Remboursable par la caisse (AMO)||
`FAC_MNT`|
number|Montant total de la dépense||
`AMC_MNR`|
number|Montant remboursable par l&#x27;organisme complémentaire (AMC)||
`GHS_NUM`|
string|N° de GHS/GHT||
`NOE_MNR`|
number|Montant remboursé NOEMIE Retour||
`NOE_OPE`|
string|Nature opération récupération NOEMIE Retour||
`ETE_GHS_NUM`|
number|N° GHS (format num)||

