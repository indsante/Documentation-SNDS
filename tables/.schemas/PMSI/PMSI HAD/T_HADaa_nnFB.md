## Schéma

- Titre : Table FB : Table des RSFA facture des établissements ex-OQN
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaa_nnB](/tables/T_HADaa_nnB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20HAD/T_HADaa_nnFB.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACT_COD`|
string|Code acte||
`ACT_COE`|
number|Cœfficient||
`ACT_NBR`|
integer|Quantité||
`AMC_MNR`|
number|Montant remboursable par l&#x27;organisme complémentaire (AMC)||
`AMO_MNR`|
number|Montant Remboursable par la caisse (AMO)||
`DEL_DAT_ENT`|
number|delai par rapport à la date d&#x27;entrée||
`ENT_ANN`|
string|Année de la date de début de séjour||
`ENT_MOI`|
string|Mois de la date de début de séjour||
`ETA_NUM_EPMSI`|
string|N° FINESS e-PMSI||
`ETA_NUM_GEO`|
string|Numéro FINESS  géographique||
`ETE_GHS_NUM`|
number|N° GHS||
`EXO_TM`|
string|Justification exonération TM||
`FAC_MNT`|
number|Montant total de la dépense||
`FAC_NUM`|
string|N° séquentiel de facture (idem RAPSS)||
`FJ_COD_PEC`|
string|Code prise en charge FJ||
`GHT_NUM`|
string|N° de GHT||
`HAD_COE`|
number|Cœfficient HAD||
`NOE_MNR`|
number|Montant remboursé NOEMIE Retour||
`NOE_OPE`|
string|Nature opération récupération NOEMIE Retour||
`PRI_UNI`|
number|Prix Unitaire||
`PSH_DMT`|
string|Discipline de prestation (ex DMT)||
`PSH_MDT`|
string|Mode de traitement||
`REM_BAS`|
number|Montant Base remboursement||
`REM_TAU`|
number|Taux applicable à la prestation||
`RHAD_NUM`|
string|Numéro séquentiel d&#x27;entrée (idem RAPSS)||
`SOR_ANN`|
string|Année de la date de fin de séjour||
`SOR_MOI`|
string|Mois de la date de fin de séjour||
`TYP_ART`|
string|Type d&#x27;enregistrement||
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (site géographique)||

