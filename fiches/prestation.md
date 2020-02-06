# Cibler selon les natures de prestations
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Définition
Les prestations concernent tous les actes et prescriptions de soins, pour lesquels un remboursement, effectué par l’Assurance Maladie, est présent dans le SNDS. 

Les prestations sont codifiées en normes dites B2 ou PS5. 
La norme B2 est répertoriée par une lettre-clé, alors que la norme PS5 l’est par des chiffres.

### Par exemple :
En norme dite PS5, les codifications pourront être `1111` pour une Consultation, `1137` pour une Majoration Nourrisson ou `3111` pour un acte infirmier, ...
L’objectif d’une telle codification est de pouvoir rassembler des codes relatifs à certains types d’actes.
Par exemple, les codes de la forme `11xx` sont l'ensemble des actes de consultation.

En norme B2, on aura par exemple les lettres clés : `C` pour les consultations `1111`, `MBB` pour les majorations nourrissons `1137`, `AMI` pour les actes pratiqués par un.e infirmier.e `3111`.
Les extractions seront principalement faites sur la norme PS5.

## Variables concernées
Les variables qui concernent les natures de prestation sont situées dans les tables ER_PRS_F (table de la part légale Régime Obligatoire) et ER_ARO_F (table de la part remboursée supplémentaire Autres que Régime Obligatoire) pour le DCIR.

Dans ER_PRS_F, il y a trois variables :
- PRS_NAT_REF : Code de la Prestations de référence
- BSE_PRS_NAT : Nature de la prestation (acte de base)
- CPL_PRS_NAT : Nature de la prestation (complément ou majoration d'acte)

Dans ER_ARO_F, la variable concernée s’intitule ARO_PRS_NAT (Nature de la prestation (autre que régime obligatoire).

Concernant le DCIRS, la variable PRS_NAT_REF (Code de la Prestations de référence) est présente dans toutes les tables.

La prestation de référence représente l’acte déclencheur du paiement : par exemple une consultation 1111.
Cette prestation de référence peut être accompagnée d'un complément d’acte (ex : complément nuit) ou une majoration d’acte (ex : majoration nourrisson) qui eux ne peuvent être effectués seuls.

## Cibler des patients sur un code « Nature de prestation »
Un code « Nature de prestation » est répertorié par un code sur 4 caractères (par exemple 1111 - CONSULTATION COTEE C / 1173 - FORFAIT PATIENTELE MEDECIN TRAITANT…).

**Principe :** Sortir une liste de patients qui ont eu une « nature de prestation » précise, soit en référence, soit en acte de base, soit en complément sur 2017. 

**Table(s) concernée(s) :** [ER_PRS_F](../tables/DCIR/ER_PRS_F.md) dans DCIR

Dans les exemples de programme SAS ci-dessous, le code de prestation est noté `XXXX`.

```sas
proc sql;
%connectora;
create table table as select * from connection to oracle
(select distinct a.BEN_NIR_PSA
from er_prs_f a
where (a.PRS_NAT_REF = 'XXXX' or a.BSE_PRS_NAT = 'XXXX' or a.CPL_PRS_NAT = 'XXXX')
and a.exe_soi_dtd between to_date('20170101','YYYYMMDD') and to_date('20171201','YYYYMMDD')
and a.flx_dis_dtd between to_date('20180101','YYYYMMDD') and to_date('20191201','YYYYMMDD')
);
disconnect from oracle;
quit;

```

**Principe :** Sortir une liste de patients qui ont eu une « nature de prestation » précise autre que régime obligatoire sur 2017. 

**Table(s) concernée(s) :** [ER_PRS_F](../tables/DCIR/ER_PRS_F.md), [ER_ARO_F](../tables/DCIR/ER_ARO_F.md) dans le DCIR.

Programme SAS :

```sas
proc sql;
%connectora;
create table table2 as select * from connection to oracle
(select distinct a.BEN_NIR_PSA
from er_prs_f a, er_aro_f b
where a.FLX_DIS_DTD = b.FLX_DIS_DTD 
and a.FLX_EMT_NUM = b.FLX_EMT_NUM 
and a.FLX_EMT_ORD = b.FLX_EMT_ORD 
and a.FLX_EMT_TYP = b.FLX_EMT_TYP 
and a.ORG_CLE_NUM = b.ORG_CLE_NUM 
and a.PRS_ORD_NUM = b.PRS_ORD_NUM 
and a.FLX_TRT_DTD = b.FLX_TRT_DTD
and a.DCT_ORD_NUM = b.DCT_ORD_NUM 
and a.REM_TYP_AFF = b.REM_TYP_AFF
and  b.ARO_PRS_NAT = 'XXXX'
and a.exe_soi_dtd between to_date('20170101','YYYYMMDD') and to_date('20171231','YYYYMMDD')
and a.flx_dis_dtd between to_date('20170201','YYYYMMDD') and to_date('20191231','YYYYMMDD')
);
disconnect from oracle;
quit;
```


## Références

::: tip Crédits
Cette fiche provient d'un document créé par la Cnam - MPL-2.0
[Fiche publiée](../files/Cnam/2019-10_Cnam_Programmes-SAS-Nature-Prestation_MPL-2.0.doc)
:::
