# La cartographie des pathologies de la CNAM
<!-- SPDX-License-Identifier: MPL-2.0 -->
La **cartographie des pathologies et des dépenses** s’appuie sur les données issues du SNDS (système national des données de santé), dont le PMSI (programme de médicalisation des systèmes d'Information).  
Elle concerne environ 57 millions de bénéficiaires du **régime général** (sections locales mutualistes comprises) ayant eu recours à des soins remboursés dans l’année. Des algorithmes permettent de repérer les patients ayant une pathologie chronique, un traitement chronique ou un événement de santé, à partir des diagnostics mentionnés dans le *PMSI à la suite d'une hospitalisation*, ou du diagnostic ayant donné lieu à une prise en charge pour *affection de longue durée* [(ALD)](../fiches/beneficiaires_ald.html) , ou d'*actes ou médicaments spécifiques* de pathologies, donc à partir d’un recours à des soins spécifiques et remboursés.

## Maladies cardioneurovasculaires (sup_Cv_cat)
### Syndrome coronaire aigu (SCA) (top_CvIDM_aig)

**Description du top :**

Personnes hospitalisées l’année n pour cardiopathie ischémique aigüe (DP d’un des RUM).   

Codes CIM10 utilisés dans le PMSI :
* I21 (Infarctus aigu du myocarde) ;
* I22 (Infarctus du myocarde à répétition) ;
* I23 (Certaines complications récentes d'un infarctus aigu du myocarde) ;
* I24 (Autres cardiopathies ischémiques aiguës).
 

**Code SQL SAS**

```sas
PROC SQL; CREATE TABLE top_coro_aigu 
    AS SELECT 
        DISTINCT b.nir_ano_17,c.ben_nir_psa, c.ben_rng_gem,e.*
            FROM ORAVUE.T_MCO16UM a
            LEFT JOIN ORAVUE.T_MCO16C b
            ON a.RSA_NUM=b.RSA_NUM AND a.ETA_NUM=b.ETA_NUM
                LEFT JOIN ORAVUE.IR_BEN_R c
                ON b.NIR_ANO_17=c.BEN_NIR_PSA
                    LEFT JOIN ORAVUE.CT_IDE_2016_G5 d
                    ON c.BEN_NIR_PSA=d.BEN_NIR_PSA and c.BEN_RNG_GEM=d.BEN_RNG_GEM
                        LEFT JOIN ORAVUE.CT_IND_2016_G5 e
                        ON d.ID_CARTO=e.ID_CARTO
    WHERE a.DGN_PAL LIKE "I21%" OR a.DGN_PAL LIKE "I22%" OR
    a.DGN_PAL LIKE "I23%" OR
    a.DGN_PAL LIKE "I24%" ;
QUIT;

```

**Résultats :** 

79563 tops reconstruits en 2016   
99,98% des tops pathos retrouvés sur le régime général

[Lien vers la fiche pathologie](https://www.ameli.fr/fileadmin/user_upload/documents/Syndrome_coronaire_aigu.pdf)

## Références

::: tip Crédit
Le contenu original de cette fiche provient du document [Méthode médicale Cartographie ](https://www.ameli.fr/fileadmin/user_upload/documents/Methode_medicale_Cartographie.pdf) disponible sur le site Ameli.  
Les codes ont été reconstitués par Claire-Lise Dubost (DREES).
:::

