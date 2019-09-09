# Optique médicale

Dans le SNDS, les dépenses en optique sont regroupées sous les codes prestations ci-dessous (variable `PRS_NAT_REF`):
3523, 3524, 3525, 3526, 3527, 3528, 3529, 3530, 3531, 3532, 3533, 3534, 3535, 3536, 3537, 3538, 3539, 3553, 3554, 3555, 3556, 3557, 3581, 3582, 3583, 5101, 5102, 5103, 5104, 5105, 5106, 5107

Le détail de ces prestations est donné par le code [LPP](../glossaire/LPP.md).
 
Le libellé des codes LPP donne les caractéristiques de verres:
- Adultes ou enfants
- Verre blanc ou teinté
- Unifocal ou multifocal
- Sphériques ou sphéro-cylindriques ainsi que l'intensité de cette correction

On trouve les codes LPP dans la variable `TIP_PRS_IDE` de la table de prestation affinée des dispositifs médicaux : [ER_TIP_F](../tables/DCIR/ER_TIP_F.md). 

Il faut donc effectuer une jointure entre la table prestation [ER_PRS_F](../tables/DCIR/ER_PRS_F.md) et `ER_TIP_F` pour avoir le détail par codes LPP.

## Exemple de code pour extraire les dépenses d'optique médicale

Le programme est conçu pour être utilisé sur le DCIR. Les tables du DCIR se trouvent dans la bibliothèque ORAVUE. 

```sql
%macro Tables_MENSUELLES (indice, ddmmaaaa_flux, annee);

PROC SQL;
CREATE TABLE base_opt&indice. AS SELECT
    t1.BEN_NIR_PSA,
	t1.BEN_RNG_GEM,
	t1.EXE_SOI_AMD,
	t1.PRS_ACT_QTE, 
	t1.BEN_NAI_ANN,
	t1.BEN_CMU_TOP,
	t1.BEN_CMU_ORG, 
    t1.BSE_REM_BSE, 
    t1.BSE_REM_MNT, 
    t1.EXE_SOI_DTD, 
    t1.PRS_PAI_MNT,  
    t1.PRS_NAT_REF, 
    t1.RGO_REM_TAU,
	t1.pfs_exe_num,
	t2.TIP_PRS_IDE,
	t2.tip_ord_num,
	t2.TIP_ACT_QSN
FROM ORAVUE.ER_PRS_F AS t1 INNER JOIN ORAVUE.ER_TIP_F AS t2
ON (t1.DCT_ORD_NUM = t2.DCT_ORD_NUM AND t1.FLX_DIS_DTD = t2.FLX_DIS_DTD AND 
	t1.FLX_EMT_NUM = t2.FLX_EMT_NUM AND   t1.FLX_EMT_ORD = t2.FLX_EMT_ORD AND t1.FLX_EMT_TYP = t2.FLX_EMT_TYP AND t1.FLX_TRT_DTD = t2.FLX_TRT_DTD AND  t1.ORG_CLE_NUM = t2.ORG_CLE_NUM AND t1.PRS_ORD_NUM = t2.PRS_ORD_NUM AND t1.REM_TYP_AFF = t2.REM_TYP_AFF)
WHERE t1.exe_soi_amd LIKE '&annee.%'
	AND  t1.FLX_DIS_DTD = DHMS(mdy(input(substr(put(&ddmmaaaa_flux.,8.),3,2),2.),input(substr(put(&ddmmaaaa_flux.,8.),1,2),2.),input(substr(put(&ddmmaaaa_flux.,8.),5,4),4.)),0,0,0)
	AND t1.DPN_QLF ne 71 and t1.PRS_DPN_QLP ne 71
	AND t1.PRS_NAT_REF in (3523,3524,3525,3526,3527,3528,3529,3530,3531,3532,3533,3534,3535,3536,3537,3538,3539,3553,3554,3555,3556,3557,3581,3582,
							3583,5101,5102,5103,5104,5105,5106,5107)
;
QUIT;
%mend;
OPTIONS MPRINT;

%MACRO boucle (annee) ;
%let anb=%eval(&annee+1);

/* Flux de soins remontés en 2015 pour les soins de l'année 2015 */
%do i = 2 %to 12 ;
      data _null_; call symput ('j',put(%eval(&i),z2.));run;
      %Tables_MENSUELLES(&annee.&i.,01&j.&annee.,&annee.) ;
%end ;
/* Flux de soins remontés en 2016 pour les soins de l'année 2015: 6 mois de remontée de flux après décembre 2015*/
%do i = 1 %to 6 ;
      data _null_; call symput ('j',put(%eval(&i),z2.));run;
      %Tables_MENSUELLES(&anb.&i.,01&j.&anb.,&annee.) ;
%end ;
%MEND ;
%boucle(2015);

/*On crée la table annuelle à partir des tables mensuelles*/
%MACRO crea_table;

	DATA libopttb.extraction_optique_2015_NEW;
	SET 
		%DO annee=2015 %TO  2016;
			%if &annee = 2016 %then %do;
				%DO i= 1 %TO 6; base_opt&&annee.&i. %END;
			%END;
			%else %do;
				%DO i= 2 %TO 12; base_opt&&annee.&i. %END;
			%END;
		%END;
	; 
	RUN;

%MEND;
%crea_table;

/*Marché de l'optique remboursable en 2015 : 5 842 721 868€*/
PROC SQL;
		CREATE TABLE dep_totale_2015 AS 
		SELECT sum(prs_pai_mnt)
		FROM libopttb.extraction_optique_2015_NEW
		WHERE tip_ord_num=1
		;
QUIT;
```
La variable `tip_ord_num` donne le nombre de ligne de la table affinée correspondant à une ligne dans la table prestation. Lorsque `tip_ord_num` est supérieur à 1, cela signifie que pour une ligne de la table prestation, on a `n` lignes sur la table affinée. 

Il faut donc être prudent, car les informations de la table prestations sont dupliquées sur ces lignes. Notamment le montant de l'acte qui se trouve dans la table prestation.

Pour éviter de surestimer le montant de l'acte, on peut au choix :
- Diviser le montant agrégé par le nombre de lignes correspondantes dans la table affinée. 
- Utiliser la méthode donnée par le [programme mis à disposition par Mathis Haradji (DSS)](https://gitlab.com/DREES_code/public/gu-snds/programmes-sas-gu-snds/blob/master/Optique_-_DCIR_-_DSS.sas)

## Références

::: tip Crédits
Le contenu original de cette fiche provient du document [2019-06-28_DSS_Optique_MPL-2.0.docx](../files/DSS/2019-06-28_DSS_Optique_MPL-2.0.docx)) rédigé par Kristel JACQUIER.
:::
