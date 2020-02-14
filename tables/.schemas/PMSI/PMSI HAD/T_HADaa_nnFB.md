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
`ACT_COD`|chaîne de caractères|Code acte||
`ACT_COE`|nombre réel|Cœfficient||
`ACT_NBR`|nombre entier|Quantité||
`AMC_MNR`|nombre réel|Montant remboursable par l&#x27;organisme complémentaire (AMC)||
`AMO_MNR`|nombre réel|Montant Remboursable par la caisse (AMO)||
`DEL_DAT_ENT`|nombre réel|delai par rapport à la date d&#x27;entrée||
`ENT_ANN`|année|Année de la date de début de séjour||
`ENT_MOI`|date|Mois de la date de début de séjour||
`ETA_NUM_EPMSI`|chaîne de caractères|N° FINESS e-PMSI||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS  géographique||
`ETE_GHS_NUM`|nombre réel|N° GHS||
`EXO_TM`|chaîne de caractères|Justification exonération TM||
`FAC_MNT`|nombre réel|Montant total de la dépense||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture (idem RAPSS)||
`FJ_COD_PEC`|chaîne de caractères|Code prise en charge FJ||
`GHT_NUM`|chaîne de caractères|N° de GHT||
`HAD_COE`|nombre réel|Cœfficient HAD||
`NOE_MNR`|nombre réel|Montant remboursé NOEMIE Retour||
`NOE_OPE`|chaîne de caractères|Nature opération récupération NOEMIE Retour||
`PRI_UNI`|nombre réel|Prix Unitaire||
`PSH_DMT`|chaîne de caractères|Discipline de prestation (ex DMT)||
`PSH_MDT`|chaîne de caractères|Mode de traitement||
`REM_BAS`|nombre réel|Montant Base remboursement||
`REM_TAU`|nombre réel|Taux applicable à la prestation||
`RHAD_NUM`|chaîne de caractères|Numéro séquentiel d&#x27;entrée (idem RAPSS)||
`SOR_ANN`|année|Année de la date de fin de séjour||
`SOR_MOI`|date|Mois de la date de fin de séjour||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (site géographique)||

