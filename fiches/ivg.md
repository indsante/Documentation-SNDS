# Interruptions volontaires de grossesse
<!-- SPDX-License-Identifier: MPL-2.0 -->

Les IVG peuvent être réalisées en établissement de santé de façon médicamenteuse ou chirurgicale, et en cabinet libéral ou en centre de santé, centre de planification et d’éducation familiale, de façon médicamenteuse uniquement.  
Les IVG **hospitalières** sont comptabilisées dans le [PMSI](../glossaire/PMSI.md) et les IVG réalisées **hors établissement** sont comptabilisées dans la table des prestations du [DCIR](../glossaire/DCIR.md).  
## Les IVG en établissement hospitalier
Les IVG en établissement hospitalier s'identifient grâce au [GHM](../glossaire/GHM.md) calculé par le générateur de [RSA](../glossaire/RSA.md)  dans la base [T_MCOaaB](/tables/T_MCOaaB).  
Il faut retenir le code `GRG_GHM`=14Z08Z.  

Dans la table des actes ([T_MCOaaA](../tables/PMSI/PMSI MCO/T_MCOaaA.md)) la variable `CDC_ACT` donne le type de l'IVG : 
*  les IVG *médicamenteuses* correspondent au code **JNJP001** 
*  les IVG *instrumentales* correspondent au code **JNJD002**.

## Les IVG hors établissement hospitalier
Les IVG hors établissement hospitalier correspondent à la prestation « forfait médicament IVG ville » (`PRS_NAT_REF`=3329) dans la table des prestations ([ER_PRS_F](../tables/DCIR/ER_PRS_F.md)).  
La catégorie de l’établissement (`ETE_CAT_COD`) dans la table [ER_ETE_F](../tables/DCIR/ER_ETE_F.md) permet de distinguer les IVG selon le lieu de réalisation.

Pour obtenir cette information, il faut donc faire une jointure entre la table de prestations et la table des établissements selon les 9 variables habituellement utilisées.  

Quand aucune modalité n’est précisée il s’agit d’une IVG en cabinet libéral.   
En dehors des cabinets libéraux, les IVG médicamenteuses peuvent être réalisées dans les lieux suivants :

| `ETE_CAT_COD` | *Lieu* |
| ---- | ------- | 
| 124 | centre de santé |		
| 130	| centre de soins médicaux |
| 223 | service départemental de protection maternelle infantile |
| 228	| centre de planification et d’éducation familiale |
| 230 |	établissement de consultation de protection infantile |
| 297 |	dispensaire polyvalent |
| 347 |			centre d’examens de santé |
| 439 |	centre de santé polyvalent|

La nature d’activité du professionnel (`PSE_ACT_NAT`) permet d’identifier les IVG réalisées par des **sage-femmes** (modalité **21**).  
Lorsqu’il s’agit d’un **médecin**, la spécialité médicale du praticien ayant réalisé l’IVG (`PSE_SPE_COD`) est précisée :

|`PSE_SPE_COD`|*Spécialité médicale*|
| --- | ------- |
|0 ou 99 |		inconnue|
|1 ou 22|		médecine générale|
|4|			chirurgie générale|
|7|			gynécologie obstétrique|
|9|			médecine interne|
|42|			endocrinologie|
|70|			gynécologie médicale|
|79|			gynécologie obstétrique et médicale|


## Exemple de programme de calcul du nombre d’IVG
Pour les régimes hors régime spécial des indépendants, de la SNCF et des militaires de carrières, on prend le **département de caisse** (03A,04A et 08A à partir de `ORG_AFF_BEN`) quand le **département de résidence** est inconnu.
Le nombre d’IVG est pondéré par la quantité d’acte (`PRS_ACT_QTE`) pour tenir compte des corrections (avec -1 pour supprimer certaines lignes).


Programme pour déterminer le nombre de forfaits IVG en 2018 comme dans cet [Études et Résultats](https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/etudes-et-resultats/article/224-300-interruptions-volontaires-de-grossesse-en-2018)
```sql
proc sql;
create table ivg2018 AS
select 	t2.DCT_ORD_NUM,
		t2.FLX_DIS_DTD,
		t2.FLX_EMT_NUM,
		t2.FLX_EMT_ORD,
		t2.FLX_EMT_TYP,
		t2.FLX_TRT_DTD,
		t2.ORG_CLE_NUM, 
		t2.PRS_ORD_NUM,
		t2.REM_TYP_AFF, /* 9 clés de jointure  */
		t2.BEN_CDI_NIR,
		t2.BEN_NIR_PSA,
		t2.BEN_RES_DPT,
		t2.BEN_AMA_COD,
		t2.EXE_LIE_COD,
		t2.PRS_NAT_REF,
		t2.BEN_RES_COM,
		t2.EXE_SOI_AMD,
		t2.PSE_ACT_NAT,
		t2.PSE_SPE_COD,
		t2.PSE_STJ_COD,
		t2.PFS_EXE_NUM,
		t2.ORG_AFF_BEN,
		t2.PRS_ACT_QTE,

		et.ETE_CAT_COD,
		et.ETB_EXE_FIN

FROM oravue.ER_PRS_F AS t2 left join oravue.ER_ETE_F AS et  
on (t2.DCT_ORD_NUM = et.DCT_ORD_NUM and t2.FLX_DIS_DTD = et.FLX_DIS_DTD and t2.FLX_EMT_NUM = et.FLX_EMT_NUM and
t2.FLX_EMT_ORD = t2.FLX_EMT_ORD and t2.FLX_EMT_TYP = et.FLX_EMT_TYP and t2.FLX_TRT_DTD = et.FLX_TRT_DTD and
t2.ORG_CLE_NUM = et.ORG_CLE_NUM and t2.PRS_ORD_NUM = et.PRS_ORD_NUM and t2.REM_TYP_AFF = et.REM_TYP_AFF)

WHERE (t2.CPL_MAJ_TOP<2 & t2.PRS_NAT_REF=3329 & t2.EXE_SOI_AMD LIKE '2018%'
& t2.flx_dis_dtd > '31dec2017:0:0:0'dt 
& t2.dpn_qlf ne 71 & t2.prs_dpn_qlp ne 71);
```

N'hésitez pas à également consulter le programme [NORMANDIE_IVG_territo.sas](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/ARS/P%C3%A9rinatalit%C3%A9/NORMANDIE_IVG_territo.sas) partagé par l'ARS Normandie permettant d'estimer le nombre d'IVG en hôpital et en soins de ville pour sa région (adaptable à d'autres départements ou à la France entière).


## Références

::: tip Crédits
Cette fiche a été rédigée par **Annick Vilain** (DREES) [(Études et Résultats)](https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/etudes-et-resultats/article/224-300-interruptions-volontaires-de-grossesse-en-2018). Elle a été mise à jour par **Elodie Baril** (Ined) et **Pierre-Louis Bithorel** (Ined).
:::
