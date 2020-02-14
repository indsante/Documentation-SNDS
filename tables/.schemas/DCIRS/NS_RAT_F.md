## Schéma

- Titre : Table simplifiée des données des rentes d'accident du travail
<br />
- Clé(s) étrangère(s) : <br />
`CLE_DCI_JNT` => table [NS_PRS_F](/tables/NS_PRS_F) [ `CLE_DCI_JNT` ]<br />
`BEN_IDT_ANO` => table [IR_IBA_R](/tables/IR_IBA_R) [ `BEN_IDT_ANO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIRS/NS_RAT_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`CLE_DCI_JNT`|nombre entier|Clé technique de jointure||
`BEN_IDT_ANO`|chaîne de caractères|Identifiant bénéficiaire anonymisé||
`BEN_IDT_TOP`|nombre entier|Top identifiant bénéficiaire Anonymisé||
`EXE_SOI_DTD`|date|Date de début d&#x27;exécution des soins||
`EXE_SOI_DTF`|date|Date de fin d&#x27;exécution des soins||
`EXE_SOI_AMD`|année et mois|Date (année et mois) de début d&#x27;exécution des soins||
`EXE_SOI_AMF`|année et mois|Date (année et mois) de fin d&#x27;exécution des soins||
`PFS_EXE_NUM`|chaîne de caractères|N° du professionnel de santé exécutant||
`PFS_PRE_NUM`|chaîne de caractères|N° du professionnel de santé prescripteur||
`GRG_LIQ_COD`|chaîne de caractères|Grand régime de liquidation||
`CAI_LIQ_COD`|chaîne de caractères|Code de la caisse de liquidation||
`PRS_NAT_REF`|nombre entier|Code de la Prestations de référence||
`ETB_PRE_FIN`|chaîne de caractères|N° FINESS de l&#x27;établissement prescripteur||
`ETB_EXE_FIN`|chaîne de caractères|N° FINESS de l&#x27;établissement exécutant||
`RGO_REM_TAU`|nombre réel|Taux de remboursement (part Régime Obligatoire)||
`GRG_AFF_COD`|chaîne de caractères|Code du grand régime d&#x27;affiliation||
`CAI_AFF_COD`|chaîne de caractères|Code de la caisse d&#x27;affiliation||
`SLM_AFF_COD`|chaîne de caractères|Code de la SLM||
`FLX_TRT_DTD`|date|Date d&#x27;entrée des données dans le système d&#x27;information||
`FLX_DIS_DTD`|date|Date de mise à disposition des données||
`FLX_EMT_TYP`|nombre entier|Type d&#x27;émetteur||
`EXE_INS_DPT`|chaîne de caractères|Département du professionnel de santé exécutant||
`PRE_INS_DPT`|chaîne de caractères|Département du professionnel de santé prescripteur||
`ETE_DPT_COD`|chaîne de caractères|Département de l&#x27;établissement exécutant||
`ETP_DPT_COD`|chaîne de caractères|Departement de l&#x27;établissement prescripteur||
`BEN_RES_DPT`|chaîne de caractères|Département de résidence du bénéficiaire||
`RAT_SEQ_NUM`|nombre entier|Numéro séquentiel||
`BEN_RAT_ANO`|chaîne de caractères|N° anonymisé de rente (accident du travail - maladie professionnelle)||
`ATT_NAT`|nombre entier|Nature de l&#x27;accident du travail||
`RAT_IPP_TAU`|nombre réel|Taux de l&#x27;incapacité permanente (IPP)||
`RAT_IPP_DTE`|date|Date d&#x27;effet du taux de l&#x27;incapacité permanente (IPP)||

