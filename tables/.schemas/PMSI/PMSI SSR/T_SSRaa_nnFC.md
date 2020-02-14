## Schéma

- Titre : OQN Honoraire
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RHA_NUM` => table [T_SSRaa_nnB](/tables/T_SSRaa_nnB) [ `ETA_NUM`, `RHA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20SSR/T_SSRaa_nnFC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`RHA_NUM`|
string|N° Séquentiel du séjour||
`TYP_ART`|
string|Type d&#x27;enregistrement (C)||
`RSF_TYP`|
string|Type de format RSF (1&#x3D;Ancien/2&#x3D;Nouveau)||
`NUM_FAC`|
string|N° Facture séquentiel||
`DEL_DAT_ENT`|
number|Délai par rapport à la date d&#x27;entrée||
`ETA_NUM`|
string|N° FINESS||
`PSH_MDT`|
string|Mode de traitement||
`PSH_DMT`|
string|Discipline de prestation (ex DMT)||
`EXO_TM`|
string|Justification exonération TM||
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
number|Montant Remboursable AMO||
`HON_MNT`|
number|Montant des honoraires (dépassement compris)||
`AMC_MNR`|
number|Montant remboursable AMC||
`NOE_MNR`|
number|Montant remboursé NOEMIE Retour||
`NOE_OPE`|
string|Nature opération récupération NOEMIE Retour||
`SOIN_ANN`|
string|Année de soins||
`SOIN_MOI`|
string|Mois de soins||
`EXE_SPE`|
string|Spécilité exécutant||
`ACT_DEL`|
number|Délai de l&#x27;acte||

