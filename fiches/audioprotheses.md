# Audioprothèses
<!-- SPDX-License-Identifier: MPL-2.0 -->

Dans le SNDS, les dépenses en audioprothèse sont regroupées sous 2 codes prestations (variable PRS_NAT_REF) :

- 3541 : APPAREILS ELECTRONIQUES DE SURDITE  (CHAP 3.)
- 3547 : APPAREILS ELECTRONIQUES DE SURDITE (CONSOMMABLES Y.C. PILES)

Ces dépenses comprennent l'achat d'appareil auditif à proprement parler ainsi que l'entretien et la réparation de l'appareil. 
Le détail est donné par le code [LPP](../glossaire/LPP.md) des [audioprothèses](http://www.codage.ext.cnamts.fr/codif/tips//chapitre/index_chap.php?p_ref_menu_code=53&amp;p_site=AMELI)

Ces codes sont donnés par la variable TIP_PRS_IDE dans la table de prestation affinée des dispositifs médicaux : [ER_TIP_F](../tables/DCIR/ER_TIP_F.md). 
Il faut donc effectuer une jointure entre la table prestation ER_PRS_F et ER_TIP_F pour avoir le détail par codes LPP.

## Répartition des achats par codes LPP

| **LPP** | **Libellé** | **% des dépenses** | **% des prestations** |
| --- | --- | --- | --- |
| **2335791** | AUDIOPROTHESE, APPAREIL DE CLASSE D, > OU = 20 ANS | 83,5% | 27,6% |
| **2340119** | AUDIOPROTHESE, ENTRETIEN & REPARATIONS, ALLOCATION FORFAITAIRE ANNUELLE | 6,8% | 61,8% |
| **2355084** | AUDIOPROTHESE, APPAREIL DE CLASSE D, < 20 ANS | 4,1% | 1,4% |
| **2343856** | AUDIOPROTHESE, ENTRETIEN ET REPARATIONS, MICROPHONE | 2,1% | 1,1% |
| **2369471** | AUDIOPROTHESE, APPAREIL DE CLASSE C, > OU = 20 ANS | 1,4% | 1,2% |
| **2357338** | AUDIOPROTHESE, ENTRETIEN ET REPARATIONS, > OU = 20 ANS, EMBOUT | 0,8% | 2,5% |
| **2344100** | AUDIOPROTHESE, ENTRETIEN ET REPARATIONS, ECOUTEUR | 0,7% | 2,4% |
| **2351548** | AUDIOPROTHESE, APPAREIL DE CLASSE A, > OU = 20 ANS | 0,2% | 0,3% |
| **2346441** | AUDIOPROTHESE, LUNETTES AUDITIVES, > OU = 20 ANS | 0,1% | 0,0% |
| **2312927** | AUDIOPROTHESE, ENTRETIEN ET REPARATIONS, >OU= 2 ANS &amp; < 20 ANS OU CECITE, EMBOUT | 0,1% | 0,8% |
| **2340208** | PROTHESE OSTEO-INTEGREE, COCHLEAR, BAHA, PROCESSEUR | 0,1% | 0,0% |
| **2352097** | AUDIOPROTHESE, ENTRETIEN ET REPARATIONS, POTENTIOMETRE | 0,0% | 0,1% |
| **2383933** | AUDIOPROTHESE, APPAREIL DE CLASSE B, > OU = 20 ANS | 0,0% | 0,0% |
| **2341449** | AUDIOPROTHESE, BOITIER AVEC ACCESSOIRES, > OU = 20 ANS | 0,0% | 0,0% |
| **2392079** | AUDIOPROTHESE, LUNETTES AUDITIVES, < 20 ANS | 0,0% | 0,0% |

*Source : DCIR (Base école), extraction mars 2018*

En part des achats, on trouve 30% d'appareil auditif et 70% de dépenses d'entretien et réparation. Les entretiens et réparations coutent moins de 260€ dans 98% des cas.

L'achat d'appareils auditifs représente 89% des dépenses totales (seulement 11% pour les dépenses d'entretien et réparations)

Pour exclure la partie entretien et réparation, appliquer le filtre TIP_PRS_TYP NOT IN (2,5).

TIP_PRS_TYP = Type de Prs Fournie LPP (table de valeur IR_PRF_V).

## Prix d'un appareil auditif 

Codes 2335791, 2355084 et 2369471

|   | **Fréquence** | **%** | **Fréquence cumulée** | **%** |
| --- | --- | --- | --- | --- |
| **strictement inférieur à 1000€** | 3819 | 9 | 3819 | 9 |
| **entre 1000€ et 1999€** | 32974 | 77,9 | 36793 | 86,9 |
| **entre 2000€ et 2999€** | 3532 | 8,3 | 40325 | 95,3 |
| **plus de 2999€** | 2004 | 4,7 | 42329 | 100 |

*Source  : DCIR (Base école)*

**Prix moyen**

Si l'on considère l'ensemble du poste audioprothèse, on a un prix moyen de 812€.
- Achat d'appareil auditif seulement : 2528,3€
- Entretien et réparation : 124,8€

## Exemple de code pour extraire les dépenses d'audioprothèses

Ce code fonctionne sur les bases école du DCIR

```sql
PROC SQL;
  CREATE TABLE audiop AS
  SELECT  t1.prs_nat_ref,
          t1.prs_pai_mnt,
          t1.pse_spe_cod,
          t1.exe_soi_amd,
          t1.pse_act_nat,
          t2.tip_prs_ide
  FROM (oravue.ere_prs_f t1 
    INNER JOIN oravue.ere_tip_f t2
    ON   (t1.DCT_ORD_NUM = t2.DCT_ORD_NUM AND 
          t1.FLX_DIS_DTD = t2.FLX_DIS_DTD AND 
          t1.FLX_EMT_NUM = t2.FLX_EMT_NUM AND 
          t1.FLX_EMT_ORD = t2.FLX_EMT_ORD AND 
          t1.FLX_EMT_TYP = t2.FLX_EMT_TYP AND 
          t1.FLX_TRT_DTD = t2.FLX_TRT_DTD AND 
          t1.ORG_CLE_NUM = t2.ORG_CLE_NUM AND 
          t1.PRS_ORD_NUM = t2.PRS_ORD_NUM AND 
          t1.REM_TYP_AFF = t2.REM_TYP_AFF)
  )
  WHERE t1.prs_nat_ref in ( **3541** , **3547** )
        AND t1.dpn_qlf <> 71
  ;
QUIT;
```

## Références
- Documentation sur ameli [https://www.ameli.fr/assure/remboursements/rembourse/optique-audition/protheses-auditives](https://www.ameli.fr/assure/remboursements/rembourse/optique-audition/protheses-auditives)
- Point de repère CNAMTS : 
[https://www.ameli.fr/fileadmin/user_upload/documents/Points_de_repere_n_47___Le_marche_de_l_audioprothese_en_2015.pdf](https://www.ameli.fr/fileadmin/user_upload/documents/Points_de_repere_n_47___Le_marche_de_l_audioprothese_en_2015.pdf)

::: tip Crédits
Le contenu original de cette fiche provient du document [2019-03-22_DREES_Audioprothèses_MLP-2.0.docx](../files/DREES/2019-03-22_DREES_Audioproth%C3%A8ses_MPL-2.0.docx) rédigé par Kristel JACQUIER.
:::