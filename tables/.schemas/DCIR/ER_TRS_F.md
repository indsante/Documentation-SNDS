## Schéma

- Titre : Table des données détaillées de transport
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_TRS_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ITR_ORD_NUM`|
integer|Numéro d&#x27;ordre de l&#x27;information détaillée du transport||
`ORG_CLE_NEW`|
string|Code de l&#x27;organisme de liquidation||
`TRS_ACP_NOM`|
string|Nom de l&#x27;accompagnateur diplômé du véhicule||
`TRS_ACP_NOMC`|
string|Nom de l&#x27;accompagnateur (anonymisé)||
`TRS_CDR_NOM`|
string|Nom du conducteur diplômé du véhicule||
`TRS_CDR_NOMC`|
string|Nom du conducteur (anonymisé)||
`TRS_ARR_CDP`|
string|Code postal du lieu d&#x27;arrivée du transport||
`TRS_DEP_CDP`|
string|Code postal du lieu de départ du transport||
`TRS_TRP_HRA`|
integer|Heure d&#x27;arrivée du transport||
`TRS_TRP_HRD`|
integer|Heure de départ du transport||
`TRS_VEH_NUM`|
string|Numéro minéralogique du véhicule||
`TRS_VEH_NUMC`|
string|Numéro minéralogique du véhicule (anonymisé)||
`DCT_ORD_NUM`|
integer|numéro d&#x27;ordre du décompte dans l&#x27;organisme||
`FLX_DIS_DTD`|
date|Date de mise à disposition des données||
`FLX_EMT_NUM`|
integer|numéro d&#x27;émetteur du flux||
`FLX_EMT_ORD`|
integer|numéro de séquence du flux||
`FLX_EMT_TYP`|
integer|Type d&#x27;émetteur||
`FLX_TRT_DTD`|
date|Date d&#x27;entrée des données dans le système d&#x27;information||
`ORG_CLE_NUM`|
string|organisme de liquidation des prestations (avant fusion des caisses)||
`PRS_ORD_NUM`|
integer|Numéro d&#x27;ordre de la prestation dans le décompte||
`REM_TYP_AFF`|
integer|type de remboursement affiné||
`TRS_DTF_DTE`|
date|Date d&#x27;arrivée du transport||
`TRS_DTD_AME`|
string|Année et mois de départ du transport (format AAAAMM)||
`TRS_DTD_DTE`|
date|Date de départ du transport||
`TRS_DTF_AME`|
string|Année et mois d&#x27;arrivée du transport (format AAAAMM)||

