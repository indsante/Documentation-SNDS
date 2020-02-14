## Schéma

- Titre : ACE Honoraire
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `SEQ_NUM` => table [T_SSRaa_nnFASTC](/tables/T_SSRaa_nnFASTC) [ `ETA_NUM`, `SEQ_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20SSR/T_SSRaa_nnFCSTC.json"  
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
`SOR_MOI`|date|Mois des soins||
`DEL_DAT_ENT`|nombre réel|Délai par rapport à la date d&#x27;entrée||
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
`TYP_UNI_FON_C`|chaîne de caractères|Type d’unité fonctionnelle de consultations||
`COEF_SSR`|nombre réel|Coefficient SSR (1)||

