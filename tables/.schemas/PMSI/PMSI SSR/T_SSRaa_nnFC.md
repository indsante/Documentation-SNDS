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
`RHA_NUM`|chaîne de caractères|N° Séquentiel du séjour||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement (C)||
`RSF_TYP`|chaîne de caractères|Type de format RSF (1&#x3D;Ancien/2&#x3D;Nouveau)||
`NUM_FAC`|chaîne de caractères|N° Facture séquentiel||
`DEL_DAT_ENT`|nombre réel|Délai par rapport à la date d&#x27;entrée||
`ETA_NUM`|chaîne de caractères|N° FINESS||
`PSH_MDT`|chaîne de caractères|Mode de traitement||
`PSH_DMT`|chaîne de caractères|Discipline de prestation (ex DMT)||
`EXO_TM`|chaîne de caractères|Justification exonération TM||
`ACT_COD`|chaîne de caractères|Code acte||
`ACT_NBR`|nombre entier|Quantité||
`ACT_COE`|nombre réel|Cœfficient||
`ACT_DNB`|nombre réel|Dénombrement||
`PRI_UNI`|nombre réel|Prix Unitaire||
`REM_BAS`|nombre réel|Montant Base remboursement||
`REM_TAU`|nombre réel|Taux Remboursement||
`AMO_MNR`|nombre réel|Montant Remboursable AMO||
`HON_MNT`|nombre réel|Montant des honoraires (dépassement compris)||
`AMC_MNR`|nombre réel|Montant remboursable AMC||
`NOE_MNR`|nombre réel|Montant remboursé NOEMIE Retour||
`NOE_OPE`|chaîne de caractères|Nature opération récupération NOEMIE Retour||
`SOIN_ANN`|année|Année de soins||
`SOIN_MOI`|date|Mois de soins||
`EXE_SPE`|chaîne de caractères|Spécilité exécutant||
`ACT_DEL`|nombre réel|Délai de l&#x27;acte||

