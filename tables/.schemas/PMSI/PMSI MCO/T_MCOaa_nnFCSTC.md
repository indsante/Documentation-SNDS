## Schéma

- Titre : ACE Honoraire
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `SEQ_NUM` => table [T_MCOaa_nnFASTC](/tables/T_MCOaa_nnFASTC) [ `ETA_NUM`, `SEQ_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20MCO/T_MCOaa_nnFCSTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACT_COD`|
string|Code acte||
`ACT_COE`|
number|Coefficient||
`ACT_DNB`|
integer|Dénombrement||
`ACT_NBR`|
integer|Quantité||
`AMC_MNR`|
number|Montant remboursable par l&#x27;organisme complémentaire (AMC)||
`AMO_MNR`|
number|Montant Remboursable par la caisse (AMO)||
`COEF_MCO`|
number|Coefficient MCO||
`CONSULT_MIG`|
string|Type d’unité fonctionnelle de consultations (*)||
`DEL_DAT_ENT`|
integer|Délai par rapport à la date d&#x27;entrée||
`ETA_NUM`|
string|Numéro FINESS e-PMSI||
`ETA_NUM_GEO`|
string|Numéro FINESS géographique||
`EXE_SPE`|
string|Spécialité exécutant||
`EXO_TM`|
string|Justification exo TM||
`HON_MNT`|
number|Montant des honoraire (dépassement compris) ou Montant total de la dépense pour PH||
`NUM_FAC`|
string|N° Facture séquentiel||
`PRI_UNI`|
number|Prix Unitaire||
`PSH_DMT`|
string|Discipline de prestation (ex DMT)||
`PSH_MDT`|
string|Mode de traitement||
`REM_BAS`|
number|Montant Base remboursement||
`REM_TAU`|
integer|Taux applicable à la prestation||
`RSF_TYP`|
string|Type de format RSF (1 : ancien, 2 : nouveau)||
`SEQ_NUM`|
string|N° séquentiel||
`SOR_ANN`|
string|Année des soins||
`SOR_MOI`|
string|Mois des soins||
`TYP_ART`|
string|Type d&#x27;enregistrement||
`DAT_RET`|
boolean|Code retour contrôle « date de référence» (date d&#x27;entrée)||
`NIR_ANO_17`|
string|N° anonyme||
`NIAS_RET`|
boolean|Code retour contrôle « n° d’identification administratif de séjour »||
`SEX_RET`|
boolean|Code retour contrôle « sexe »||
`NOE_MNR`|
integer|Montant remboursé NOEMIE Retour||
`NOE_OPE`|
integer|Nature opération récupération NOEMIE Retour||
`NIR_RET`|
boolean|Code retour contrôle « n° sécurité sociale »||

