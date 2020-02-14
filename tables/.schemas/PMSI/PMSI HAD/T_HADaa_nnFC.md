## Schéma

- Titre : Table FC : Table des RSFA des honoraires des établissements ex-OQN
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaa_nnB](/tables/T_HADaa_nnB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20HAD/T_HADaa_nnFC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACT_ANN`|
string|Année de la date de l&#x27;acte||
`ACT_COD`|
string|Code acte||
`ACT_COE`|
number|Cœfficient||
`ACT_DNB`|
number|Dénombrement||
`ACT_MOI`|
string|Mois de la date de l&#x27;acte||
`ACT_NBR`|
integer|Quantité||
`AMC_MNR`|
number|Montant remboursable par AMC||
`AMO_MNR`|
number|Montant Remboursable par AMO||
`DEL_DAT_ENT`|
number|delai par rapport à la date d&#x27;entrée||
`ETA_NUM_EPMSI`|
string|N° FINESS e-PMSI||
`ETA_NUM_GEO`|
string|Numéro FINESS  géographique||
`EXO_TM`|
string|Justification exo TM||
`EXE_SPE`|
string|Spécialité exécutant||
`FAC_NUM`|
string|N° séquentiel de facture (idem RAPSS)||
`HON_MNT`|
number|Montant des honoraire (dépassement compris)||
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
number|Taux Remboursement||
`RHAD_NUM`|
string|Numéro séquentiel d&#x27;entrée (idem RAPSS)||
`TYP_ART`|
string|Type d&#x27;enregistrement||
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (site géographique)||

