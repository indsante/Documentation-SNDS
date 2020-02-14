## Schéma

- Titre : Table FH : Table des RSFA des Médicaments en sus des établissements ex-OQN
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaa_nnB](/tables/T_HADaa_nnB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20HAD/T_HADaa_nnFH.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACH_PRI`|
number|Prix d&#x27;achat unitaire TTC||
`COD_UCD`|
string|Code UCD||
`COE_TAU`|
number|Coefficient de fractionnement||
`DEL_DAT_ENT`|
number|delai par rapport à la date d&#x27;entrée||
`ENT_ANN`|
string|Année de la date de début de séjour||
`ENT_MOI`|
string|Mois de la date de début de séjour||
`ETA_NUM_EPMSI`|
string|Numéro FINESS de l’entité juridique||
`ETA_NUM_GEO`|
string|Numéro FINESS  géographique||
`FAC_NUM`|
string|N° séquentiel de facture (idem RAPSS)||
`FAC_TOT`|
number|Montant total facturé TTC||
`MNT_UNI_ECA`|
number|Montant unitaire de l&#x27;écart indemnisable||
`QUA_COD`|
number|Quantité||
`RHAD_NUM`|
string|Numéro séquentiel d&#x27;entrée (idem RAPSS)||
`TOT_MNT_ECA`|
number|Montant total de l&#x27;écart indemnisable||
`TYP_ART`|
string|Type d&#x27;enregistrement||
`UCD_UCD_COD`|
string|Code UCD sur 13 caractère avec 000 à gauche||
`COD_LES`|
string|Code indication des spécialités pharmaceutiques inscrites sur la liste en sus||
`ETA_NUM_TWO`|
string|Numéro FINESS de l’établissement (site géographique)||

