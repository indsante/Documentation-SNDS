## Schéma

- Titre : Résumé par acte ambulatoire anonymisé
<br />
- Clé primaire : `ETA_NUM_EPMSI`, `ORD_NUM`, `SEJ_IDT`

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20RIM-P/T_RIPaa_nnR3A.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|
string|N° FINESS e-PMSI||
`FOR_NUM`|
string|N° format||
`FOR_NUM_ORI`|
string|N° format RIM d&#x27;orgine||
`ETA_NUM_TWO`|
string|Second n° FINESS||
`IPP_IRR_CRY`|
string|Cryptage irreversible de l&#x27;IPP|<p>valeur unique</p>|
`SEJ_IDT`|
string|Identifiant de séjour||
`AGE_ANN`|
number|Age du patient en années à la date de réalisation de l&#x27;acte||
`AGE_JOU`|
number|Age du patient en jours pour les enfants de moins d&#x27;un an||
`COD_SEX`|
string|Sexe du patient||
`BDI_COD`|
string|Code géographique de résidence||
`BDI_DEP`|
string|Code département de résidence||
`FOR_ACT`|
string|Forme d&#x27;activité||
`SEC_NUM`|
string|N°de secteur ou de dispositif intersectoriel||
`MOD_SOI`|
string|Mode légal de soins||
`ORD_NUM`|
string|N° d&#x27;ordre||
`RAL_ACT_MOI`|
string|Mois de la date de réalisation de l&#x27;acte||
`RAL_ACT_ANN`|
string|Année de la date de réalisation de l&#x27;acte||
`ACT_NAT`|
string|Nature de l’acte||
`ACT_LIEU`|
string|Lieu de l’acte||
`PRO_CAT`|
string|Catégorie professionnelle de l’intervenant||
`INT_NBR`|
integer|Nombre d’intervenants||
`ANO_IND`|
string|Indicateur d&#x27;anomalie||
`ACT_LIB_IND`|
string|Indicateur d’activité libérale||
`ETB_SAN_AUTOR`|
string|Indicateur FINESS géographique sans autorisation||
`DGN_PAL`|
string|Diagnostic principal ou motif de prise en charge principale||
`NBR_DGN`|
number|Nombre de diagnostics et facteurs associés||
`NAT_PEC`|
string|Nature de prise en charge||

