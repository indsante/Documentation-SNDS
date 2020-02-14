## Schéma

- Titre : ACE Prestation
<br />
- Clé primaire : `ETA_NUM`, `SEQ_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `SEQ_NUM` => table [T_MCOaa_nnFASTC](/tables/T_MCOaa_nnFASTC) [ `ETA_NUM`, `SEQ_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20MCO/T_MCOaa_nnFBSTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACT_COD`|chaîne de caractères|Code acte||
`ACT_COE`|nombre réel|Coefficient||
`ACT_DNB`|nombre entier|Dénombrement||
`ACT_NBR`|nombre entier|Quantité||
`AMC_MNR`|nombre réel|Montant remboursable par l&#x27;organisme complémentaire (AMC)||
`AMO_MNR`|nombre réel|Montant Remboursable par la caisse (AMO)||
`COEF_MCO`|nombre réel|Coefficient MCO||
`DEL_DAT_ENT`|nombre entier|Délai par rapport à la date d&#x27;entrée||
`ETA_NUM`|chaîne de caractères|Numéro FINESS e-PMSI||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS géographique||
`EXE_SPE`|chaîne de caractères|Spécialité exécutant||
`EXO_TM`|chaîne de caractères|Justification d&#x27;exonération du TM||
`HON_MNT`|nombre réel|Montant des honoraires (dépassement compris) ou Montant total de la dépense pour PH||
`NUM_FAC`|chaîne de caractères|N° Facture séquentiel||
`PRI_UNI`|nombre réel|Prix Unitaire||
`PSH_DMT`|chaîne de caractères|Discipline de prestation (ex DMT)||
`PSH_MDT`|chaîne de caractères|Mode de traitement||
`REM_BAS`|nombre réel|Montant Base remboursement||
`REM_TAU`|nombre entier|Taux applicable à la prestation||
`RSF_TYP`|chaîne de caractères|Type de format RSF (1 : ancien, 2 : nouveau)||
`SEQ_NUM`|chaîne de caractères|N° séquentiel||
`SOR_ANN`|année|Année des soins||
`SOR_MOI`|date|Mois des soins||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`TYP_FPI`|chaîne de caractères|Type de prestation intermédiaire||

