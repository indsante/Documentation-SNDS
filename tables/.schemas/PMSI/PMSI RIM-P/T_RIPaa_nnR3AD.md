## Schéma

- Titre : Diagnostic associé à l'acte
<br />
- Clé primaire : `ETA_NUM_EPMSI`, `ORD_NUM`, `SEJ_IDT`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `ORD_NUM`, `SEJ_IDT` => table [T_RIPaa_nnR3A](/tables/T_RIPaa_nnR3A) [ `ETA_NUM_EPMSI`, `ORD_NUM`, `SEJ_IDT` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20RIM-P/T_RIPaa_nnR3AD.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|
string|N° FINESS e-PMSI||
`ETA_NUM_TWO`|
string|Second n° FINESS||
`SEJ_IDT`|
string|Identifiant de séjour||
`IPP_IRR_CRY`|
string|Cryptage irreversible de l&#x27;IPP||
`ORD_NUM`|
string|N° d&#x27;ordre||
`ASS_DGN`|
string|Diagnostics et facteurs associés||

