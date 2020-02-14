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
`SEQ_NUM`|chaîne de caractères|N° séquentiel||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`RSF_TYP`|chaîne de caractères|Type de format RSF (1 : ancien, 2 : nouveau)||
`NUM_FAC`|chaîne de caractères|N° Facture séquentiel||
`SOR_ANN`|année|Année des soins||
`DEL_DAT_ENT`|nombre réel|Délai par rapport à la date d&#x27;entrée||
`SOR_MOI`|date|Mois des soins||
`ETA_NUM`|chaîne de caractères|Numéro FINESS||
`PSH_MDT`|chaîne de caractères|Mode de traitement||
`PSH_DMT`|chaîne de caractères|Discipline de prestation (ex DMT)||
`EXO_TM`|chaîne de caractères|Justification exo TM||
`EXE_SPE`|chaîne de caractères|Spécialité exécutant||
`ACT_COD`|chaîne de caractères|Code acte||
`ACT_NBR`|nombre entier|Quantité||
`ACT_COE`|nombre réel|Coefficient||
`ACT_DNB`|nombre réel|Dénombrement||
`PRI_UNI`|nombre réel|Prix Unitaire||
`REM_BAS`|nombre réel|Montant Base remboursement||
`REM_TAU`|nombre réel|Taux applicable à la prestation||
`AMO_MNR`|nombre réel|Montant Remboursable par la caisse (AMO)||
`HON_MNT`|nombre réel|Montant des honoraire (dépassement compris) ou Montant total de la dépense pour PH||
`AMC_MNR`|nombre réel|Montant remboursable par l&#x27;organisme complémentaire (AMC)||
`ETA_NUM_GEO`|chaîne de caractères|FINESS géographique||
`FJ_COD_PEC`|chaîne de caractères|Code de prise en charge FJ||
`COEF_SSR`|nombre réel|Coefficient MCO (1)||

