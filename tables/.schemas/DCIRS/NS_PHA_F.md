## Schéma

- Titre : Table simplifiée des données de codage de pharmacie
<br />
- Clé(s) étrangère(s) : <br />
`CLE_DCI_JNT` => table [NS_PRS_F](/tables/NS_PRS_F) [ `CLE_DCI_JNT` ]<br />
`BEN_IDT_ANO` => table [IR_IBA_R](/tables/IR_IBA_R) [ `BEN_IDT_ANO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIRS/NS_PHA_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`CLE_DCI_JNT`|
integer|Clé technique de jointure||
`BEN_IDT_ANO`|
string|Identifiant bénéficiaire anonymisé||
`BEN_IDT_TOP`|
integer|Top identifiant bénéficiaire Anonymisé||
`EXE_SOI_DTD`|
date|Date de début d&#x27;exécution des soins||
`EXE_SOI_DTF`|
date|Date de fin d&#x27;exécution des soins||
`EXE_SOI_AMD`|
string|Date (année et mois) de début d&#x27;exécution des soins||
`EXE_SOI_AMF`|
string|Date (année et mois) de fin d&#x27;exécution des soins||
`PFS_EXE_NUM`|
string|N° du professionnel de santé exécutant||
`PFS_PRE_NUM`|
string|N° du professionnel de santé prescripteur||
`GRG_LIQ_COD`|
string|Grand régime de liquidation||
`CAI_LIQ_COD`|
string|Code de la caisse de liquidation||
`PRS_NAT_REF`|
integer|Code de la Prestations de référence||
`ETB_PRE_FIN`|
string|N° FINESS de l&#x27;établissement prescripteur||
`ETB_EXE_FIN`|
string|N° FINESS de l&#x27;établissement exécutant||
`RGO_REM_TAU`|
number|Taux de remboursement (part Régime Obligatoire)||
`GRG_AFF_COD`|
string|Code du grand régime d&#x27;affiliation||
`CAI_AFF_COD`|
string|Code de la caisse d&#x27;affiliation||
`SLM_AFF_COD`|
string|Code de la SLM||
`FLX_TRT_DTD`|
date|Date d&#x27;entrée des données dans le système d&#x27;information||
`FLX_DIS_DTD`|
date|Date de mise à disposition des données||
`FLX_EMT_TYP`|
integer|Type d&#x27;émetteur||
`EXE_INS_DPT`|
string|Département du professionnel de santé exécutant||
`PRE_INS_DPT`|
string|Département du professionnel de santé prescripteur||
`ETE_DPT_COD`|
string|Département de l&#x27;établissement exécutant||
`ETP_DPT_COD`|
string|Departement de l&#x27;établissement prescripteur||
`BEN_RES_DPT`|
string|Département de résidence du bénéficiaire||
`PHA_SEQ_NUM`|
integer|Numéro séquentiel||
`PHA_PRS_C13`|
integer|Code CIP de la pharmacie de ville (13 Caractères)||
`PHA_PRS_IDE`|
integer|Code CIP de la pharmacie de ville (ancien code sur 7 Caractères)||
`PHA_ACT_PRU`|
number|Prix unitaire du médicament codé en CIP||
`PHA_CPA_PCP`|
string|Condition particulière de prise en charge||
`PHA_DEC_PRU`|
number|Prix unitaire de l&#x27;unité délivrée||
`PHA_DEC_TOP`|
string|Top déconditionnement||
`PHA_IDE_CPL`|
integer|Préfixe du code CIP||
`PHA_MOD_PRN`|
string|Mode de prescription||
`PHA_SEQ_RNV`|
integer|Séquence de renouvellement||
`PHA_SUB_MTF`|
integer|Motif de substitution du médicament||
`PHA_ACT_QSC`|
integer|Nombre de conditionnements (boite, etc.)||
`PHA_DEC_QSD`|
integer|Nombre d&#x27;unités délivrées (comprimés, etc.) si déconditionnement||

