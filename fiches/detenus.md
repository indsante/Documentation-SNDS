# Détenus 
<!-- SPDX-License-Identifier: MPL-2.0 -->

Lorsque l'on parle de détenus, on considère l'ensemble des individus mis sous main de justice et non seulement les individus sous écrou. 

Il s'agit des individus:
- incarcérés (condamnés ou en détention provisoire) 
- en aménagement de peine (semi-liberté, placement à l'extérieur ou sous surveillance électronique) dès lors qu'ils n'exercent pas d'activité professionnelle rémunérée.

Cette population est rattachée au régime général d'assurance maladie et affiliée auprès du Centre national de la protection sociale des personnes écrouées (CNPE).

## Repérage des détenus

### DANS le DCIR 

Dans le SNDS et plus praticulièrement dans les bases du DCIR, la population des détenus se repère avec la variable `RGM_COD`, lorsque le code de gestion vaut 65 (cf ci-dessous).
On trouve cette variable dans la table prestation (`ER_PRS_F` dans le DCIR ou [NS_PRS_F](../tables/DCIRS/NS_PRS_F.md) dans le DCIRS). 


| Code gestion  | libellé  |
|---|---|
| 10 | Régime général, assurés cotisants et assimilés  |
| 11  | Régime général, assurés retraités  |
| 12  | Régime général, assurés non cotisant  |
| 13  | Invalides de guerre  |
| 18  | Adultes handicapés  |
| 23  | Fonctionnaires, ouvriers de l'Etat  |
| 25  | Etudiants  |
| 29  | Agents des collectivités locales  |
| 34  | Artistes auteurs  |
| 65  | Détenus  |
| 86  | Assurés personnels volontaire invalidité parentale  |
| 89  | Assurés bénéficiaires de la CMU Couverture Maladie Universelle  |
| 90  | Praticiens et auxilliaires médicaux sauf biologistes  |

Les codes petits régimes ne sont renseignés que lorsqu'il y a une consommation de soin. 
Conséquence : on ne récupère ainsi que les consommants.

::: warning 
Certaines années, le code gestion 65 a été maintenu alors même que les bénéficaires n'etaient plus detenus. 
On ne peut donc pas utiliser cette méthode pour un dénombrement des detenus.
Les ayants-droits des détenus sont affiliés au régime des détenus.
:::

**Requête SAS pour le repérage des detenus**

```sql

proc sql;
drop table sasdata1.detenus ;
%connectora;
create table sasdata1.detenus as select * from connection to oracle (
select distinct /*t1.ben_nir_psa, t1.ben_rng_gem,*/t2.ben_idt_ano,
t1.ben_sex_cod,
t1.ben_nai_ann
from er_prs_f t1 left join IR_BEN_R t2 on (t1.ben_nir_psa=t2.ben_nir_psa
and t1.ben_rng_gem=t2.ben_rng_gem)
where rgm_cod in (651,652,653,654,655,656,657,658,659)
and RGM_GRG_COD in (1)
AND EXE_SOI_DTD BETWEEN to_date('01012018','DDMMYYYY') AND to_date('31122018','DDMMYYYY')
AND FLX_DIS_DTD BETWEEN to_date('01012018','DDMMYYYY') AND to_date('31032019','DDMMYYYY')
);
disconnect from oracle;
quit;

```
### Dans le PMSI 

De manière générale dans le PMSI, la variable `COD_ GES` qui indique le code du regime du patient n'est pas toujours bien renseignée. 
 Pour cibler les personnes détenus notamment dans le MCO, il vaut mieux partir de la variable `VALO` contenue dans la table `VALO` ou `VALO_ACE`. 
 Les détenus correspondent à la modalité  5 dans la table `VALO` et 3 dans la table `VALO_ACE`.

## Les soins dispensés aux detenus  

Dans le cas des personnes incarcérées (condamnées ou en détention provisoire), les soins sont organisés par l'administration pénitentiaire et dispensés au sein d'une unité de soins:
- d'une unité de soins unité de consultation et de soins ambulatoires (UCSA),
- unité hospitalière spécialement aménagée (UHSA), 
- service médico-psychologique régional (SMPR), 
- unité hospitalière sécurisée interrégionale (UHSI),


Ces établissements peuvent être repérés dans le SNDS. 

### Les unités de consultations et de soins aux detenus (UCSA).

Ces unités aujourd'hui appelées USMP (unité sanitaire en milieu pénitentier) sont situées dans un établissement pénitentiaire mais adossées à un établissement de santé. 
Les consultations qui y sont dispensées font l'objet d'un financement spécifique.
Elles peuvent être repérées dans les table `T_MCOaaFCSTC` à partir de la variable `CONSULT_MIG`, l'UCSA correspond à la modalité 10

```sql
proc sql;
create table detenus_consult as select 
count(distinct NIR_ANO_17) as nb_benef,
CASE WHEN EXE_SPE in ('01','22','23') then "med"
	WHEN EXE_SPE in ('07','70','77','79') then "GYN"
	WHEN EXE_SPE in ('05') then "dermato"
	WHEN EXE_SPE in ('08') then "Gastro"
	WHEN EXE_SPE in ('11') then "ORL" 
	WHEN EXE_SPE in ('13') then "pneumo"
	WHEN EXE_SPE in ('35') then "nephro"
	WHEN EXE_SPE in ('15') then "oph"
	WHEN EXE_SPE in ('33','75','17') then "psy"
	WHEN EXE_SPE in ('03','47','48') then "cardio"
	WHEN EXE_SPE in ('12') then "pediatre"
	WHEN EXE_SPE in ('18','36','44','45','19','53','54') then "dentiste" end as spe
from ORAVUE.T_MCO18FCSTC t1 inner join ORAVUE.T_MCO18CSTC t2 on 
(t1.ETA_NUM=t2.ETA_NUM AND 
T1.SEQ_NUM=t2.SEQ_NUM)
where consult_MIG='10'
AND EXE_SPE in ('01','22','23','15','33','75','17','79','05','08','11','13','07','70','77','35','75','17','03','47','48','12','18','36','44','45','19','53','54')
	GROUP BY 2;
	quit;
	
```


### Les unités hospitalières sécurisée interregionale (UHSI)

Une unité hospitalière sécurisée interrégionale (UHSI) est une unité prenant en charge les hospitalisations programmées de plus de 48 heures des personnes détenues au sein d'un établissement public de santé . 
Pour les autres hospitalisations (urgentes ou de moins de 48 heures), les personnes détenues sont accueillies dans les établissements publics de santé situés à proximité des établissements pénitentiaires où elles sont incarcérées.

Ces unités peuvent être repérées à partir des codes d'unités médicales, l'UHSI correspond à l'UM 26. 
On peut ainsi déterminer en croisant avec la table des séjours les caractérisques des séjours MCO des détenus.

```sql

/*UHSI*/ 

Proc sql; 
Create table detenu_UHSI as select 
count(distinct NIR_ANO_17) as nb_benef,
count(distinct T1.ETA_NUM||t1.RSA_NUM) as nb_sejour,
AUT_TYP1_UM
from ORAVUE.T_MCO18UM T1 left join ORAVUE.T_MCO18C T2
on (T1.ETA_NUM=T2.ETA_NUM and T1.RSA_NUM=T2.RSA_NUM)
where substr(AUT_TYP1_UM,1,2)='26'
group by 3;
quit;


```


On peut ici chainer nos detenus (identifiés dans les prestations du DCIR à partir du code petit régime `RGM_COD` qui commence par 65) avec le PMSI pour récupérer l'ensemble des hospitalisations de detenus.

```sql
Proc sql; 
Create table detenu_UM as select 
distinct t2.NIR_ANO_17,
count(distinct T1.ETA_NUM||t1.RSA_NUM) as nb_sejour,
AUT_TYP1_UM
from ORAVUE.T_MCO18UM T1 left join ORAVUE.T_MCO18C T2 on (T1.ETA_NUM=T2.ETA_NUM and T1.RSA_NUM=T2.RSA_NUM)
						INNER JOIN ORAVUE.T_MCO18B T3 on (T1.ETA_NUM=T3.ETA_NUM and T1.RSA_NUM=T3.RSA_NUM)
where t2.NIR_ANO_17 in (select ben_nir_psa from ORAUSER.detenus)
group by 1,3;
quit;
Proc sql; 
Create table detenu_UM as select 
distinct t2.NIR_ANO_17,
count(distinct T1.ETA_NUM||t1.RSA_NUM) as nb_sejour,
AUT_TYP1_UM
from ORAVUE.T_MCO18UM T1 left join ORAVUE.T_MCO18C T2 on (T1.ETA_NUM=T2.ETA_NUM and T1.RSA_NUM=T2.RSA_NUM)
						INNER JOIN ORAVUE.T_MCO18B T3 on (T1.ETA_NUM=T3.ETA_NUM and T1.RSA_NUM=T3.RSA_NUM)
where t2.NIR_ANO_17 in (select ben_nir_psa from ORAUSER.detenus)
group by 1,3;
quit;


```

### les soins psychiatriques 

Pour chaque région pénitentaire, il existe un Services Médico-Psychologiques Régionaux (SMPR) implanté dans un établissement pénitentiaire et rattaché à un établissement public hospitalier de santé mentale.

Pour les prisons ne disposant pas d’un SMPR, le dispositif de soins psychiatrique implique des personnels soignants issus d’un établissement psychiatrique qui assurent des vacations et sont intégrés dans les UHSA (Unités d’Hospitalisation Spécialement Aménagées), visant à accueillir les détenus ayant besoin de soins en milieu hospitalier.

# Les UHSA 
La loi de programmation et d’orientation de la justice du 9 septembre 2002 crée les UHSA ( Unités d’Hospitalisation Spécialement Aménagées), visant à accueillir les détenus ayant besoin de soins en milieu hospitalier 

– les unités sont implantées au sein d’un établissement de santé mentale
– l’administration pénitentiaire assure la sécurisation périmétrique et n’est pas présente au sein de l’unité de soins sauf en cas de demande du personnel soignant.
– le personnel hospitalier assure les soins

L’UHSA ne concerne que l’hospitalisation complète (à temps plein).


On peut identifier cette activite grâce à la variable `SEC_NUM` dans `T_RIPaaRSA` ou `T_RIPaaR3A`.
modalité à 5 caractères du secteur dans lequel le malade est pris en charge. 

Le troisième caractère donne des informations sur le secteur.

- G = secteur de psychiatrie générale 
- I = secteur de psychiatrie infanto-juvénile
- P = secteur de psychiatrie en milieu pénitentiaire 
- Z = dispositif intersectoriel formalisé 
- UMD = Unités Malades Difficiles inter-régionale code du département d’implantation suivi de D00


```sql
/* l'UHSA correspond aux UM qui ont un 3ieme caractère = P */
/* ici on s'interresse à tous les détenus (à partir du code petit régime) et on recherche l'unité médicale dans lequel se trouve le patient*/
proc sql;
Create table detenu_UHSA as 
select 
count(distinct t2.NIR_ANO_17) as nb_patient, 
substr(SEC_NUM,3,1) as num_secteur
from ORAVUE.T_RIP18RSA t1 LEFT JOIN ORAVUE.T_RIP18C t2 on (t1.ETA_NUM_EPMSI=t2.ETA_NUM_EPMSI and t1.RIP_NUM=t2.RIP_NUM)
where t2.NIR_ANO_17 in (select ben_nir_psa from ORAUSER.detenus)
group by 2
;
quit;

``` 

On peut savoir où a eu lieu le soin grâce à la variabe `ACT_LIEU` dans les tables `T_RIPaaRSA` ou `T_RIPaaR3A`. 
Le code `L06` correspond au milieu pénitentier. 

```sql
proc sql;
Create table detenu_UHSA_lieu as 
select distinct ACt_LIEU,
count(distinct t1.ETA_NUM_EPMSI||t1.IPP_IRR_CRY) as nb_patient, 
count(distinct t1.ETA_NUM_EPMSI||t1.ORD_NUM||SEJ_IDT) as nb_passage
from ORAVUE.T_RIP18R3A t1 INNER JOIN ORAUSER. tab_int  T2 ON (T1.ETA_NUM_EPMSI= T2.ETA_NUM_EPMSI  AND T1.IPP_IRR_CRY=T2.IPP_IRR_CRY)
group by 1
;
quit;
``` 

Ces soins peuvent être dispensés avec ou sans consentements. 

On peut avoir cette information à partir de la variable `MOD_SOI`. 
Les soins sans consentement correspondent à la modalité `6 - Soins psychiatriques aux détenus (article D. 398 du code de procédure pénale)` lorsqu'il s'agit de patients detenus.

 
### Les détenus et le médicament. 
 
Les médicaments peuvent être dispensés : 
 - dans les UCSA
 - en officine de ville 
 - pendant séjours hospitaliers

Pour précision, les médicaments délivrés dans les UCSA donne lieu à un recueil dans le PMSI depuis 1 Janvier 2016 (base `T_MCO18SUP_USMP`  unité sanitaire en milieu pénitencier). Ce recueil se fait par établissement et n'est donc pas chainable sur les bénéficaires. 

exemple d'extraction des médicaments de ville chez les détenus (pour illustration données Normandes) : 

| PERIODE | PHA\_ATC\_L03                                                  | NBboites | nb\_patient |
|---------|----------------------------------------------------------------|----------|-------------|
| 2018    | ANALGESIQUES                                                   | 84345    | 5667        |
| 2018    | ANTIBACTERIENS A USAGE SYSTEMIQUE                              | 14109    | 3397        |
| 2018    | ANTIINFLAMMATOIRES ET ANTIRHUMATISMAUX                         | 7095     | 2991        |
| 2018    | PSYCHOLEPTIQUES                                                | 70742    | 2968        |
| 2018    | MEDICAMENTS POUR LES TROUBLES DE L'ACIDITE                     | 10669    | 2519        |
| 2018    | AUTRES MEDICAMENTS DU SYSTEME NERVEUX                          | 132306   | 1883        |
| 2018    | ANTISEPTIQUES ET DESINFECTANTS                                 | 2535     | 1480        |
| 2018    | PREPARATIONS NASALES                                           | 2363     | 1331        |
| 2018    | ANTIHISTAMINIQUES A USAGE SYSTEMIQUE                           | 4883     | 1280        |
| 2018    | TOPIQUES POUR DOULEURS ARTICULAIRES OU MUSCULAIRES             | 2706     | 1255        |
| 2018    | CORTICOIDES A USAGE SYSTEMIQUE                                 | 2595     | 1201        |
| 2018    | MEDICAMENTS DU RHUME ET DE LA TOUX                             | 2588     | 1201        |
| 2018    | MEDICAMENTS POUR LES SYNDROMES OBSTRUCTIFS DES VOIES AERIENNES | 9503     | 1197        |
| 2018    | PSYCHOANALEPTIQUES                                             | 11654    | 1143        |
| 2018    | PREPARATIONS STOMATOLOGIQUES                                   | 3640     | 1102        |
| 2018    | ANTITHROMBOTIQUES                                              | 8601     | 1050        |

DCIR exploitation ARS NORMANDIE (données detenus Normands)


 
 
 
::: tip Crédits
Cette fiche a été initialement rédigée par Céline Leroy, ARS Normandie,  MAJ AOUT 2020 
:::


