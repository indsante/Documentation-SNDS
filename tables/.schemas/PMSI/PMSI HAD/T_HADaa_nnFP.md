## Schéma

- Titre : Table FP : Table des RSFA des LPP/DMI en sus des établissements ex-OQN
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaa_nnB](/tables/T_HADaa_nnB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20HAD/T_HADaa_nnFP.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`DEL_DAT_ENT`|nombre réel|delai par rapport a date entree||
`ENT_ANN`|année|Année de la date début de séjour||
`ENT_MOI`|date|Mois de la date début de séjour||
`ETA_NUM_EPMSI`|chaîne de caractères|N° FINESS ePMSI||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS  géographique||
`FAC_MNT`|nombre réel|Montant total facturé||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture (idem RAPSS)||
`LPP_COD`|chaîne de caractères|Code référence LPP||
`LPP_PRI_UNI`|nombre réel|Prix d&#x27;achat unitaire||
`LPP_PU_DEV`|nombre réel|Tarif référence LPP Prix Unitaire sur devis||
`LPP_QUA`|nombre réel|Quantité||
`MNT_UNI_ECA`|nombre réel|Montant unitaire de l&#x27;écart indemnisable||
`RHAD_NUM`|chaîne de caractères|Numéro séquentiel d&#x27;entrée (idem RAPSS)||
`TIP_PRS_IDE`|nombre réel|Code LPP (13 c)||
`TOT_MNT_ECA`|nombre réel|Montant total de l&#x27;écart indemnisable||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (site géographique)||

