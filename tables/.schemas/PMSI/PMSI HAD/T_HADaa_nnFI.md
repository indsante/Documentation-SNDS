## Schéma

- Titre : Table FI : Table des RSFA interruption de séjour des établissements ex-OQN
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaa_nnB](/tables/T_HADaa_nnB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20HAD/T_HADaa_nnFI.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`DEL_DAT_ENT`|
number|delai par rapport a date entree||
`ENT_ANN`|
string|Année de la date début de séjour||
`ENT_MOI`|
string|Mois de la date début de séjour||
`ETA_NUM_EPMSI`|
string|N° FINESS ePMSI||
`ETA_NUM_GEO`|
string|Numéro FINESS  géographique||
`ETB_NUM`|
string|Etablissement de transfert ou de retour ou lieu d&#x27;exécution de l&#x27;acte||
`FAC_NUM`|
string|N° séquentiel de facture (idem RAPSS)||
`RHAD_NUM`|
string|Numéro séquentiel d&#x27;entrée (idem RAPSS)||
`SEJ_FIN`|
string|Nature d&#x27;interruption ou de fin de séjour||
`SOR_ANN`|
string|Année de la date fin de séjour||
`SOR_MOI`|
string|Mois de la date fin de séjour||
`TYP_ART`|
string|Type d&#x27;enregistrement||
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (site géographique)||

