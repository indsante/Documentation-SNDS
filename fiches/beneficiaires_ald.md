# Bénéficiaires du dispositif ALD

## Le dispositif des ALD

Le dispositif des affections de longue durée (ALD) permet la prise en charge des patients ayant une maladie chronique comportant un traitement prolongé et une thérapeutique particulièrement coûteuse. 
Une liste établie par décret ouvre droit, pour les ALD figurant sur cette liste, à une exonération du ticket modérateur (prise en charge à 100 %) pour les soins en rapport avec son affection : tumeurs malignes, diabète, maladies psychiatriques de longue durée, maladie coronaire, etc. 

Un patient peut bénéficier de l'exonération du ticket modérateur s'il est atteint :

- D'une affection inscrite sur la liste (ALD 30) ;
- D'une affection dite « hors liste » (ALD 31), 
c'est-à-dire d'une forme grave d'une maladie ou d'une forme évolutive ou invalidante d'une maladie grave ne figurant pas sur la liste des ALD 30, comportant un traitement prolongé d'une durée prévisible supérieure à six mois et une thérapeutique particulièrement coûteuse 
(exemples : maladie de Paget, les ulcères chroniques ou récidivants avec retentissement fonctionnel sévère) ;
- De plusieurs affections entraînant un état pathologique invalidant (ALD 32), nécessitant des soins continus d'une durée prévisible supérieure à six mois.

**Comparaison effectifs ALD : estimations CNAM - calculs DREES**

![](../files/DREES/2019-04-08_DREES-ARS_Beneficiaires-ALD/comparaison_effectifs_ALD.png)

## Repérer les ALD

Pour repérer les ALD, il existe deux sources principales : 
- le **référentiel médicalisé** [IR_IMB_R](../tables/DCIR_DCIRS/IR_IMB_R.md) qui liste les bénéficiaires du dispositif, la nature de leurs ALD, et les dates de début et de fin de l'ALD, 
- ou la **table des prestations** qui indique pour chaque prestation si le patient a été exonéré au titre d'une ALD.

Les informations dans ces deux tables ne se recoupent pas parfaitement. 

En effet, parmi les ALD en cours sur une période donnée dans le référentiel médicalisé IR_MB_R, certaines ne donnent pas lieu à des exonérations sur les prestations effectuées au cours de cette même période (16 % des bénéficiaires du dispositif en 2017). 
Selon les études, on peut ou non considérer ce critère comme déterminant pour la détection d'une ALD « active »[^2]. 
De même, certains patients ayant des prestations exonérées au titre d'une ALD n'apparaissent pas dans le référentiel (5 % des patients en 2017) pour lesquels on parle d'une ALD non retrouvée. 
Le choix de la méthode dépendra principalement de l'approche, selon qu'elle est orientée sur les pathologies des patients ou sur les dépenses liées aux ALD.

Pour construire une population bénéficiaire d'une ou plusieurs ALD en cours, on peut donc utiliser plusieurs méthodes :

- Récupérer l'information sur le bénéficiaire dans le référentiel des ALD à l'aide de son identifiant, de la date de début et de fin de son ALD, ainsi que de son code CIM-10 (table de correspondance IR_CIM_V). _Voir Programme 1_
- Récupérer l'information uniquement lors de la prestation, en retenant les prestations avec exonération du ticket modérateur pour motif d'ALD (EXO_MTF). Attention, cette méthode ne permet pas d'être exhaustif pour les raisons évoquées ci-dessus : les patients en ALD peuvent être exonérés à un autre titre. _Voir Programme 2_
- Croiser ces deux informations afin de savoir de quelle ALD il s'agit et si celle-ci a donné lieu à des exonérations (ALD « active ») (préconisé par la CNAM, voir Figure 1 et Programme 3) [^3].

![](../files/DREES/2019-04-08_DREES-ARS_Beneficiaires-ALD/methode_ald_cnam.png)
**Figure 1 - Méthode préconisée par la CNAM**

## Descriptions des tables et variables utiles 

### Le référentiel des ALD : IR\_IMB\_R

**Champ de cette table (en 2018)** : RG depuis 2005, MSA depuis 2014, RSI depuis 2016 (étude rétrospective possible jusqu'en 2013)

- BEN_NIR_PSA/BEN_RNG_GEM : identifiant du DCIR
- MED_MTF_COD* : indique le code CIM10 de la demande ALD si med_ncl_idt=&quot;CIM10&quot;
- IMB_ALD_NUM* : donne le numéro de l'ALD obtenue parmi la liste des 32 ALD.
- IMB_ETM_NAT : type de prise en charge (11 = accident du travail, 12=maladie professionnelle, 13= invalidité, 41=ald sur liste, 43= ald hors liste, 45=polypathologie)
- IMB_ALD_DTD: Date de début d'exonération du ticket modérateur
- IMB_ALD_DTF: Date de fin d'exonération du ticket modérateur

\* Voir encadré ci-dessous pour optimiser l’utilisation de ces variables dans le repérage de l’ALD

::: tip Code diagnostic ou code ALD dans le réferentiel medicalisé ?

La variable **imb_ald_num** est parfois mal renseignée. Il est recommandé de reconstituer le code ALD à l'aide de la variable **med_mtf_cod** (code diagnostic associé à l'ALD) que l'on joint avec le référentiel IR_CIM_V sur la variable **cim_cod**. Ce référentiel contient la variable ald_030_cod qui permet d'identifier le code ALD lorsqu'elle est sur la liste des 30 ALD en fonction de la pathologie et selon la dernière réglementation en vigueur. Cette opération permet notamment de corriger un certain nombre d'ALD codées à 0 dans la variable imb_ald_num.

Voir programme 1 pour une application de cette méthode.
:::

### Table des prestations : NS\_PRS\_F dans le DCIRS, ER\_PRS\_F dans le DCIR

EXO\_MTF : Motif d'exonération du ticket modérateur (table de valeur ir_exo_v en annexe).

Les codes 41 à 46 correspondent à des soins liés à un bénéficiaire d'une ALD. Pour les dépenses de santé en lien avec une ALD, exo_mtf prend les valeurs 42, 44 ou 46 et le taux de remboursement (RGO_REM_TAU) est de 100%. Pour les dépenses de santé sans lien avec une ALD exo_mtf prend les valeurs 41, 43 ou 45. Il s'agit pour les bénéficiaires du dispositif de soins sans rapport avec leur ALD et donc remboursés aux taux habituels de la Sécurité sociale.

### La table de valeurs IR\_CIM\_V (bibliothèque ORAVAL)

Elle donne la correspondance entre le code cim10 (cim_cod) et le numéro d'ald (ald_030_cod) selon la réglementation la plus récente. Attention, elle ne donne pas les codes associés aux ALD 31 et 32.

### Liste des ALD table IR\_ALD\_V (modalités de la variable IMB\_ALD\_NUM)

| Code | Libellé |
| ---- | ------- | 
| 0 | sans objet |
| 1 | accident vasculaire cérébral invalidant |
| 2 | insuffisances médullaires et autres cytopénies chroniques |
| 3 | artériopathies chroniques avec manifestations ischémiques |
| 4 | bilharzioses compliquées |
| 5 | insuffisances cardiaques graves, troubles du rythme graves, cardiopathies valvulaires graves , cardiopathies congénitales graves|
| 6 | maladies chroniques actives du foie et cirrhoses |
| 7 | déficits immunitaires primitifs graves nécessitant un traitement prolongé, infection par le virus d e l'immuno-déficience humaine (VIH)|
| 8 | diabète de type 1 et diabète de type 2 |
| 9 | formes graves des affections neurologiques et musculaires (dont myopathie), épilepsie grave |
| 10 | hémoglobinopathies, hémolyses, chroniques constitutionnelles et acquises sévères |
| 11 | hémophilies et affections constitutionnelles de l'hémostase graves |
| 12 | Hypertension artérielle sévère |
| 13 | maladies coronaires |
| 14 | insuffisances respiratoires chroniques graves |
| 15 | maladies d'Alzheimer et autres démences |
| 16 | maladies de Parkinson |
| 17 | maladies métaboliques héréditaires nécessitant un traitement prolongé spécialisé |
| 18 | mucoviscidoses |
| 19 | néphropathies chroniques graves et syndrome néphrotique primitif |
| 20 | paraplégies |
| 21 | vascularites, lupus érythémateux systémique, sclérodermie systémique |
| 22 | Polyarthrite rhumatoïde évolutive |
| 23 | affections psychiatriques de longue durée |
| 24 | rectocolites hémorragiques et maladie de Crohn évolutives |
| 25 | scléroses en plaques |
| 26 | scolioses idiopathiques structurales évolutives |
| 27 | spondylarthrites graves |
| 28 | suites de transplantation d'organe |
| 29 | tuberculoses actives, lèpre |
| 30 | Tumeur maligne, affection maligne du tissu lymphatique ou hématopoïétique. |
| 31 | ALD « hors-liste » |
| 32 |  ALD « Polypathologies » : plusieurs affections entraînant un état pathologique invalidant |
| 88 | Valeur inconnue |
| 98 | Transcodage |
| 99 | Affections hors liste ou ALD non ventilées |

## Programmes
### Programme 1

Recenser les bénéficiaires inscrits dans un dispositif ALD en 2017 en reconstituant le numéro de leur ALD à l'aide des codes CIM-10

```sql
PROC SQL;
	CREATE TABLE ALD_referentiel2017 AS
		SELECT DISTINCT 	
				t2.ben_idt_ano,
				t2.ben_nai_ann, 
				t2.ben_sex_cod,
				t2.org_aff_ben,
				t1.imb_ald_num,
				t3.ald_030_cod,
				t1.imb_etm_nat
		FROM oravue.ir_imb_r AS t1 
	LEFT JOIN oravue.ir_ben_r AS t2 
ON (t1.BEN_NIR_PSA=t2.BEN_NIR_PSA AND t1.BEN_RNG_GEM=t2.BEN_RNG_GEM)
	LEFT JOIN oraval.ir_cim_v AS t3 
ON (substr(t1.med_mtf_cod,1,4)=substr(t3.cim_cod,1,4)) 
	/*les deux clés sont de type différent et la jointure ne fonctionne pas sans la fonction substr*/
		WHERE t1.imb_ald_dtd<='31Dec2017:0:0:0'dt
		AND (t1.imb_ald_dtf>='01Jan2017:0:0:0'dt OR t1.imb_ald_dtf='01Jan1600:0:0:0'dt) 
			/* On retient les bénéficiaires d'une ALD sur au moins un jour dans l'année */
			/*AND t2.org_aff_ben LIKE "01%"*/
		AND (imb_etm_nat in (41,43,45)) 
			/* On exclut les bénéficiaires d'une exonération au titre d'un accident du travail, d'une maladie pro ou d'une invalidité*/
		ORDER BY t2.ben_idt_ano
;
QUIT;
```

Le numéro de l'ALD peut donc être reconstitué à l'aide du code ald_030_cod pour les ALD sur liste, ainsi que la variable donnant le type de prise en charge (imb_etm_nat) pour les ALD hors-liste. La CNAM préconise de ne pas d'utiliser le code 45 pour coder les ALD 32, dites « polypathologies ».

```sql
DATA ALD_referentiel2017;
    SET ALD_referentiel2017;
    IF 0<imb_ald_num <33 THEN ald=imb_ald_num;
    ELSE IF 0<ald_030_cod<31 THEN ald=ald_030_cod;
    ELSE IF imb_etm_nat = 43 THEN ald=31;
    ELSE ald=99;
RUN;
```
Une étape supplémentaire peut permettre de restreindre le référentiel des bénéficiaires des ALD à certaines ALD seulement, ou retenir une indicatrice par ALD (voir programme bis).

```sql
PROC SQL; CREATE TABLE ALD_referentiel_ind17 AS
    SELECT DISTINCT ben_idt_ano,ben_nai_ann, ben_sex_cod
    FROM ALD_referentiel2017
    GROUP BY ben_idt_ano
;
QUIT; 
/* 13,9 millions d’individus en 2017 */ 
```


### Programme 2 

Exemple de code pour recenser les bénéficiaires consommants et exonérés au titre d'une ALD en 2017

```sql
PROC SQL;
	CREATE TABLE exo_uni_ald_2017 AS
	SELECT DISTINCT b.ben_idt_ano, a.ben_nir_psa, a.ben_rng_gem,
	CASE WHEN exo_mtf in (41,42) THEN 1 ELSE 0 END AS ald_liste,
	CASE WHEN exo_mtf in (43,44) THEN 1 ELSE 0 END AS ald_horsliste,
	CASE WHEN exo_mtf in (45,46) THEN 1 ELSE 0 END AS ald_poly
FROM oravue.ER_PRS_F a
	LEFT JOIN oravue.IR_BEN_R b
	ON a.ben_nir_psa=b.ben_nir_psa and a.ben_rng_gem=b.ben_rng_gem
	WHERE EXO_MTF IN (41,42,43,44,45,46)
	AND exe_soi_amd LIKE '2017%'	
AND flx_dis_dtd >= '01Feb2017:0:0:0'dt  
AND flx_dis_dtd <= '01Jun2018:0:0:0'dt 
	;
QUIT;
PROC SQL;
	CREATE TABLE exo_uni_ald_2017b AS
SELECT DISTINCT ben_idt_ano, max(ald_liste) as ald_liste, max(ald_horsliste) as ald_horsliste, max(ald_poly) as ald_poly
FROM exo_uni_ald_2017
GROUP BY ben_idt_ano;
QUIT;
/* 12,4 millions d’individus en 2017 */ 
```

### Programme 3 

Exemple de code pour recenser les bénéficiaires inscrits au référentiel et exonérés au titre d'une ALD en 2017

```sql
PROC SQL; CREATE TABLE ALD_actives_2017 AS
  SELECT DISTINCT exo.ben_idt_ano as nir_exo,exo.ald_liste, exo.ald_horsliste, exo.ald_poly,ref.*, 
  CASE WHEN ref.ben_idt_ano ne "" THEN 1 ELSE 0 END AS top_ref,
  CASE WHEN exo.ben_idt_ano ne "" THEN 1 ELSE 0 END AS top_exo,
  CASE WHEN (ref.ben_idt_ano ne "" and exo.ben_idt_ano ne "") THEN 1 ELSE 0 END AS top_ref_exo
  FROM ald_referentiel_ind17 ref
  FULL JOIN exo_uni_ald_2017b exo
  ON ref.ben_idt_ano=exo.ben_idt_ano;
QUIT;
/* 12,4 millions d’individus en 2017 
2,1 millions de bénéficiaires présents dans le référentiel et sans prestation exonérée au titre d’une ALD
600 000 bénéficiaires exonérés au titre d’une ALD et non présents dans le référentiel*/ 

```

### Programme bis 

Exemple de code pour avoir une table avec une ligne par individu et des indicatrices pour chaque ALD

(ALD remontée dans le référentiel médicalisé)

```sql
DATA ALD_referentiel;
SET ALD_referentiel;
ald_0 = (ald =0);
ald_1 = (ald =1);
ald_2 = (ald =2);
ald_3 = (ald =3);
ald_4 = (ald =4);
ald_5 = (ald =5);
ald_6 = (ald =6);
ald_7 = (ald =7);
ald_8 = (ald =8);
ald_9 = (ald =9);
ald_10 = (ald =10);
ald_11 = (ald =11);
ald_12 = (ald =12);
ald_13 = (ald =13);
ald_14 = (ald =14);
ald_15 = (ald =15);
ald_16 = (ald =16);
ald_17 = (ald =17);
ald_18 = (ald =18);
ald_19 = (ald =19);
ald_20 = (ald =20);
ald_21 = (ald =21);
ald_22 = (ald =22);
ald_23 = (ald =23);
ald_24 = (ald =24);
ald_25 = (ald =25);
ald_26 = (ald =26);
ald_27 = (ald =27);
ald_28 = (ald =28);
ald_29 = (ald =29);
ald_30 = (ald =30);
ald_31 = (ald =31);
ald_32 = (ald =32);
RUN;


PROC SQL; CREATE TABLE ALD_referentiel_ind AS
SELECT DISTINCT BEN_IDT_ANO,
max(ald_0) as ald_0,
max(ald_1) as ald_1,
max(ald_2) as ald_2,
max(ald_3) as ald_3,
max(ald_4) as ald_4,
max(ald_5) as ald_5,
max(ald_6) as ald_6,
max(ald_7) as ald_7,
max(ald_8) as ald_8,
max(ald_9) as ald_9,
max(ald_10) as ald_10,
max(ald_11) as ald_11,
max(ald_12) as ald_12,
max(ald_13) as ald_13,
max(ald_14) as ald_14,
max(ald_15) as ald_15,
max(ald_16) as ald_16,
max(ald_17) as ald_17,
max(ald_18) as ald_18,
max(ald_19) as ald_19,
max(ald_20) as ald_20,
```

## Annexe

### Les ALD non exonérantes

La reconnaissance d'une ALD non exonérante permet la prise en charge de l'Assurance Maladie, à 65 % du tarif de la Sécurité sociale des frais de déplacement en rapport avec son ALD ; et des frais de transport et frais de séjour liés aux cures thermales. 
Quelques exemples d'ALD non exonérantes : Hypertension artérielle, Hypothyroïdie, Arthrose, Hypercholestérolémie, Douleurs articulaires, Acné, Migraines.

### Table de valeur IR\_EXO\_V

| Code | Libellé |
| ---- | ------- |
|0|SANS OBJET|
|10|ASSURANCE|
|20|REGIMES|
|21|PENSION MILITAIRE D'INVALIDITE (ART. 115)|
|30|NATURE DE PRESTATION|
|41|BENEFICIAIRE ATTEINT D'UNE MALADIE LISTE - AFFECTION SANS RAPPORT|
|42|BENEFICIAIRE ATTEINT D'UNE MALADIE LISTE - AFFECTION EN RAPPORT|
|43|PATHOLOGIE HORS LISTE - AFFECTION SANS RAPPORT|
|44|PATHOLOGIE HORS LISTE - AFFECTION EN RAPPORT|
|45|POLYPATHOLOGIE HORS LISTE - AFFECTION SANS RAPPORT|
|46|POLYPATHOLOGIE HORS LISTE - AFFECTION EN RAPPORT|
|47|ARTICLE L324 NON EXONERANT (SAUF TRANSPORTS)|
|51|COEFFICIENT ET ACTE EN RAPPORT|
|54|DIAGNOSTIC ET TRAITEMENT DE LA STERILITE|
|55|6EME MOIS DE GROSSESSE|
|56|EDUCATION SPECIALISEE SANS RAPPORT|
|57|EDUCATION SPECIALISEE EN RAPPORT|
|62|AUTRE CAS D EXONERATION|
|63|HOSPIT PLUS 30 JOURS|
|81|PREVENTION|
|82|PREVENTION SOINS DE SUITE BUCCO-DENTAIRE|
|91|ACTES CCAM/NGAP EXONERANTS|
|92|SOINS EN RAPPORT AVEC UN ACTE CCAM EXONERANT|
|99|VALEUR INCONNUE|

## Références

- Point de repère CNAM sur les  
[bénéficaires du dispositif des ALD](https://www.ameli.fr/fileadmin/user_upload/documents/Points_de_repere_n_46_-_Beneficiaires_du_dispositif_des_ALD_2014.pdf)

::: tip Crédits
Le contenu original de cette fiche provient du document [2019-04-08_DREES-ARS_Bénéficiaires-ALD_MPL-2.0.docx](../files/DREES/2019-04-08_DREES-ARS_Beneficiaires-ALD/2019-04-08_DREES-ARS_Bénéficiaires-ALD_MPL-2.0.docx)) rédigé par Kristel JACQUIER, Claire-Lise DUBOST, Céline LEROY.

Cette fiche s'appuie fortement sur la présentation partagée par la CNAM lors d'un comité utilisateurs partenaires intitulé « Referentiel_médicalisé_IR_IMB_R_présentationCNAM » et que l'on retrouve sur le portail BO.
:::

::: tip Autre source
La Cnam a publié en octobre 2019 une [fiche sur les ALD](../files/Cnam/2019-10_Cnam_Programmes-SAS-ALD_MPL-2.0.doc).
:::


[^2] : L'absence du motif d'exonération au titre de l'ALD peut être dû à la présence d'un autre motif d'exonération qui a primé dans le codage. 
Par exemple, l'exonération liée au statut de détenu _(régime)_ est prioritaire sur l'exonération ALD.

[^3] : En pratique, la CNAM n'applique pas cette méthode dans toutes ses études. 
Par exemple, pour la cartographie des pathologies, le repérage des ALD ne se fait qu'à partir du référentiel médicalisé, sans vérification sur les exonérations liées à cette ALD.