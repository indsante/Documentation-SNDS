## Schéma

- Titre : interruption de sejour
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RIP_NUM` => table [T_RIPaa_nnFB](/tables/T_RIPaa_nnFB) [ `ETA_NUM_EPMSI`, `RIP_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20RIM-P/T_RIPaa_nnFI.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`ETA_NUM_EPMSI`|chaîne de caractères|Numéro FINESS de l’entité juridique||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (site géographique)||
`RIP_NUM`|chaîne de caractères|Numéro séquentiel de séjour (idem RPSA)||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture||
`DEL_DAT_ENT`|nombre réel|Délai par rapport à la date d&#x27;entrée||
`ENT_MOI`|date|Mois de la date de début de séjour||
`ENT_ANN`|année|Année de la date de début de séjour||
`SOR_MOI`|date|Mois de la date de fin de séjour||
`SOR_ANN`|année|Année de la date de fin de séjour||
`SEJ_DUR`|nombre réel|Durée (Date de fin de séjour-date de début de séjour)||
`SEJ_FIN`|chaîne de caractères|Nature d&#x27;interruption ou de fin de séjour||
`ETB_NUM`|chaîne de caractères|Etablissement de transfert ou de retour ou lieu d&#x27;exécution de l&#x27;acte||

