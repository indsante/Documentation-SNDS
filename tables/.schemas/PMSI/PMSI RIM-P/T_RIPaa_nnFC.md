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
`DEL_DAT_ENT`|
number|Délai par rapport à la date d&#x27;entrée||
`ACT_MOI`|
string|Mois de la date de l&#x27;acte||
`ACT_ANN`|
string|Année de la date de l&#x27;acte||
`PSH_MDT`|
string|Mode de traitement||
`PSH_DMT`|
string|Discipline de prestation (ex DMT)||
`EXO_TM`|
string|Justification exo TM||
`ACT_COD`|
string|Code acte||
`ACT_NBR`|
integer|Quantité||
`ACT_COE`|
number|Cœfficient||
`ACT_DNB`|
number|Dénombrement||
`PRI_UNI`|
number|Prix Unitaire||
`REM_BAS`|
number|Montant Base remboursement||
`REM_TAU`|
number|Taux Remboursement||
`AMO_MNR`|
number|Montant Remboursable par AMO||
`HON_MNT`|
number|Montant des honoraire (dépassement compris)||
`AMC_MNR`|
number|Montant remboursable par AMC||
`NOE_MNR`|
number|Montant remboursé NOEMIE Retour||
`NOE_OPE`|
string|Nature opération récupération NOEMIE Retour||

