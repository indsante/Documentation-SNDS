## Schéma

- Titre : ACE Prestation
<br />
- Clé primaire : `ETA_NUM`, `SEQ_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `SEQ_NUM` => table [T_SSRaa_nnFASTC](/tables/T_SSRaa_nnFASTC) [ `ETA_NUM`, `SEQ_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20SSR/T_SSRaa_nnFBSTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`SEQ_NUM`|
string|N° séquentiel||
`TYP_ART`|
string|Type d&#x27;enregistrement||
`RSF_TYP`|
string|Type de format RSF (1 : ancien, 2 : nouveau)||
`NUM_FAC`|
string|N° Facture séquentiel||
`SOR_ANN`|
string|Année des soins||
`DEL_DAT_ENT`|
number|Délai par rapport à la date d&#x27;entrée||
`SOR_MOI`|
string|Mois des soins||
`ETA_NUM`|
string|Numéro FINESS||
`PSH_MDT`|
string|Mode de traitement||
`PSH_DMT`|
string|Discipline de prestation (ex DMT)||
`EXO_TM`|
string|Justification exo TM||
`EXE_SPE`|
string|Spécialité exécutant||
`ACT_COD`|
string|Code acte||
`ACT_NBR`|
integer|Quantité||
`ACT_COE`|
number|Coefficient||
`ACT_DNB`|
number|Dénombrement||
`PRI_UNI`|
number|Prix Unitaire||
`REM_BAS`|
number|Montant Base remboursement||
`REM_TAU`|
number|Taux applicable à la prestation||
`AMO_MNR`|
number|Montant Remboursable par la caisse (AMO)||
`HON_MNT`|
number|Montant des honoraire (dépassement compris) ou Montant total de la dépense pour PH||
`AMC_MNR`|
number|Montant remboursable par l&#x27;organisme complémentaire (AMC)||
`ETA_NUM_GEO`|
string|FINESS géographique||
`FJ_COD_PEC`|
string|Code de prise en charge FJ||
`COEF_SSR`|
number|Coefficient MCO (1)||

