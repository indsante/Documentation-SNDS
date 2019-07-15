# Aide Médicale d'Etat
<!-- SPDX-License-Identifier: MPL-2.0 -->

L'Aide Médicale de l'État (AME) est destinée à permettre l'accès aux soins des personnes en situation irrégulière en France. 
Elle est attribuée sous conditions de résidence et de ressources.

Ce dispositif s'inscrit dans le cadre de la lutte contre les exclusions. 
Elle s'adresse aux ressortissants étrangers en situation irrégulière et précaire.

Pour plus d'information, vous pouvez consulter le site de l'[Assurance Maladie](https://www.ameli.fr/assure/droits-demarches/situations-particulieres/situation-irreguliere-ame).

## Identification des bénéficiaires de l'AME

Pour identifier les bénéficiaires de l'AME dans la table des prestations du DCIR [ER_PRS_F](../tables/DCIR/ER_PRS_F.md),
 il faut utiliser la variable `RGM_COD` (code petit régime). 

On prends les modalités : 
- 95 : aide médicale gratuite 100 % état
- 96 : aide médicale hospitalière gratuite 100 % état

Seul souci : on ne considère que les consommants puisque on a l'information uniquement dans la table des prestations. 
Il faut donc que l'individu ait au moins une prestation, ce qui est souvent le cas pour les AME. 

On peut aussi utiliser la variable `BEN_CMU_CAT` (catégorie d’organisme complémentaire) dont la modalité 5 correspond à l’AME.

::: warning Attention
L'AME n'est pas applicable à Mayotte.
:::

## Code SQL 
```sql

/* rechercher des béneficiaire de l'AME;*/

proc sql;
drop table sasdata1.AME ;
%connectora;
create table sasdata1.AME as select * from connection to oracle (
select distinct /*ben_nir_psa, ben_rng_gem,*/t2.ben_idt_ano, t1.ben_ama_cod, t1.ben_sex_cod
from er_prs_f t1 left join IR_BEN_R  t2 on (t1.ben_nir_psa=t2.ben_nir_psa
and t1.ben_rng_gem=t2.ben_rng_gem)
where t1.rgm_cod in (95,96)
/*and RGM_GRG_COD in (1)*/
AND t1.EXE_SOI_AMD BETWEEN '201801' and '201812'/*to_date('01012018','DDMMYYYY') AND to_date('31122018','DDMMYYYY')*/
AND t1.FLX_DIS_DTD BETWEEN to_date('01012018','DDMMYYYY') AND to_date('31032019','DDMMYYYY')
AND t1.BEN_RES_DPT in ('014','050','061','076','027')
AND t1.ORG_AFF_BEN like '01%' /*affiliés au régime général*/
);
disconnect from oracle;
quit;

```

## Références

::: tip Crédits
Cette fiche a été rédigée par Catherine BISQUAY (ARS Ile-de-France) & Céline LEROY (ARS Normandie)
:::
