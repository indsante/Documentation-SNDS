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
`TYP_ART`|
string|Type d&#x27;enregistrement||
`ETA_NUM_EPMSI`|
string|Numéro FINESS de l’entité juridique||
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (site géographique)||
`RIP_NUM`|
string|Numéro séquentiel de séjour (idem RPSA)||
`FAC_NUM`|
string|N° séquentiel de facture||
`DEL_DAT_ENT`|
number|Délai par rapport à la date d&#x27;entrée||
`ENT_MOI`|
string|Mois de la date de début de séjour||
`ENT_ANN`|
string|Année de la date de début de séjour||
`SOR_MOI`|
string|Mois de la date de fin de séjour||
`SOR_ANN`|
string|Année de la date de fin de séjour||
`SEJ_DUR`|
number|Durée (Date de fin de séjour-date de début de séjour)||
`SEJ_FIN`|
string|Nature d&#x27;interruption ou de fin de séjour||
`ETB_NUM`|
string|Etablissement de transfert ou de retour ou lieu d&#x27;exécution de l&#x27;acte||

