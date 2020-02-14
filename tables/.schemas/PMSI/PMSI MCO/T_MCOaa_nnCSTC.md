## Schéma

- Titre : ACE NIR/date
<br />
- Clé primaire : `ETA_NUM`, `SEQ_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `SEQ_NUM` => table [T_MCOaa_nnFASTC](/tables/T_MCOaa_nnFASTC) [ `ETA_NUM`, `SEQ_NUM` ]<br />
`NIR_ANO_17` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20MCO/T_MCOaa_nnCSTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ENT_DAT`|
date|Date d&#x27;entrée||
`ENT_DAT_RET`|
boolean|Code retour contrôle « date de référence» (date d&#x27;entrée)||
`ETA_NUM`|
string|N° FINESS||
`EXE_SOI_AMD`|
string|Date d&#x27;entrée au format année + mois||
`EXE_SOI_AMF`|
string|Date de sortie au format année + mois||
`EXE_SOI_DTD`|
date|Date d&#x27;entrée||
`EXE_SOI_DTF`|
date|Date de sortie||
`IAS_RET`|
boolean|Code retour contrôle « n° d&#x27;identification administratif de séjour »||
`NAI_RET`|
boolean|Code retour contrôle « date de naissance »||
`NIR_ANO_17`|
string|N° Anonyme du patient||
`NIR_RET`|
boolean|Code retour contrôle « n° sécurité sociale »||
`RNG_BEN`|
string|Rang du bénéficiaire||
`RNG_NAI`|
string|Rang de naissance||
`SEJ_NUM`|
string|N° de séjour||
`SEQ_NUM`|
string|N° séquentiel||
`SEX_RET`|
boolean|Code retour contrôle « sexe »||
`SOR_DAT`|
date|Date de sortie||
`RAC_MNT_PAT_RET`|
boolean|Code retour contrôle « Montant total du séjour facturé au patient «||
`NBR_REJET_AMO_RET`|
boolean|Code retour contrôle « Rejet AMO «||
`FAC_AMO_DT_RET`|
boolean|Code retour contrôle « Date de facturation AMO «||
`FAC_AMC_DT_RET`|
boolean|Code retour contrôle « Date de facturation AMC «||
`FAC_RAC_DT_RET`|
boolean|Code retour contrôle « Date de facturation patient «||
`PAI_AMO_DT_RET`|
boolean|Code retour contrôle « Date de paiement AMO «||
`PAI_AMC_DT_RET`|
boolean|Code retour contrôle « Date de paiement AMC «||
`PAI_RAC_DT_RET`|
boolean|Code retour contrôle « Date de paiement patient «||
`VALID_FAC_AMO_RET`|
boolean|Code retour contrôle « Statut FT AMO «||
`VALID_FAC_AMC_RET`|
boolean|Code retour contrôle « Statut FT AMC «||
`VALID_FAC_RAC_RET`|
boolean|Code retour contrôle « Statut FT patient «||
`PAYS_ASS_PAT_RET`|
boolean|Code retour contrôle « Pays d’assurance social «||
`RAC_MNT_PAT`|
number|Montant total du séjour facturé au patient||
`NBR_REJET_AMO`|
string|Rejet AMO||
`FAC_AMO_DT`|
string|Date de facturation AMO||
`FAC_AMC_DT`|
string|Date de facturation AMC||
`FAC_RAC_DT`|
string|Date de facturation patient||
`PAI_AMO_DT`|
string|Date de paiement AMO||
`PAI_AMC_DT`|
string|Date de paiement AMC||
`PAI_RAC_DT`|
string|Date de paiement patient||
`VALID_FAC_AMO`|
string|Statut FT AMO||
`VALID_FAC_AMC`|
string|Statut FT AMC||
`VALID_FAC_RAC`|
string|Statut FT patient||
`PAYS_ASS_PAT`|
string|Pays d’assurance social||
`ENT_AM`|
date|Date d&#x27;entrée au format année + mois||
`SOR_AM`|
date|Date de sortie au format année + mois||

