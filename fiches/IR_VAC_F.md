---
tags:
    - Bénéficiaires
    - Covid
---

# Patients vaccinés contre le Covid-19 
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

*Mise à disposition de la table IR_VAC_F des patients vaccinés contre le Covid-19 (18 Juin 2021)*


Afin de réaliser des études sur les populations qui ont reçu une vaccination contre le COVID-19 et de décrire la réalisation des différentes injections de vaccin Covid-19 par un professionnel de santé, une table IR_VAC_F, avec le code CIP13 du vaccin, a été mise à disposition.

Cette table, mise à jour hebdomadairement, contient l’identifiant bénéficiaire `BEN_NIR_ANO` et le pseudonyme SNDS `BEN_NIR_PSA` pour permettre aux utilisateurs habilités, de faire le chainage des données avec les tables du DCIR, du PMSI et des Causes médicales de décès ou des référentiels, et avoir ainsi une vision globale sur le parcours de soins des patients, leur profil, leur régime de couverture, leur pathologie et le suivi de la vaccination. 
Des analyses territoriales peuvent être réalisées en utilisant la commune de résidence du bénéficiaire et tous les regroupements possibles à partir des communes. 

La base *IR_VAC_F* contient une ligne par patient et injection réalisée et est accessible sur le portail SNDS (répertoire CONSOPAT).

Comme pour toutes les données du SNDS, la sortie de données non strictement anonymes est interdite.

Voici la liste des variables restituées :


|-|VARIABLE|NOM VARIABLE RESTITUÉE (_CRY pour la variable cryptée)|
|---------|---------|---------|
|**BÉNÉFICIAIRE**|Pseudo NIR|BEN_NIR_PSA|
|**BÉNÉFICIAIRE**|Identifiant bénéficiaireR|BEN_NIR_ANO|
|**BÉNÉFICIAIRE**|Age réel du bénéficiaire à la date d’injection|BEN_AGE_ANN|
|**BÉNÉFICIAIRE**|Sexe du bénéficiaire|BEN_SEX_COD|
|**BÉNÉFICIAIRE**|Statut du dossier vaccinal|BEN_STA_VAC|
|**PRESCRIPTION**|Date de la prescription|PRE_PRE_DTD|
|**PRESCRIPTION**|Date de prescription en année-mois|PRE_PRE_AMD|
|**PRESCRIPTION**|Numéro du PS prescripteur|PFS_PRE_NUM (PFS_PRE_CRY)|
|**PRESCRIPTION**|Numéro de l’établissement prescripteur|ETB_PRE_FIN|
|**PRESCRIPTION**|Catégorie du PS prescripteur|PFS_PRE_CAT|
|**PRESCRIPTION**|Spécialité du PS prescripteur|PSP_SPE_COD|
|**INJECTIONS**|Date d’injection |EXE_SOI_DTD|
|**INJECTIONS**|Date d’injection en année – mois|EXE_SOI_AMD|
|**INJECTIONS**|Nom du vaccin|INJ_VAC_NOM|
|**INJECTIONS**|Code CIP du vaccin|PHA_PRS_C13|
|**INJECTIONS**|Numéro du Professionnel de Santé (PS) exécutant|PFS_EXE_NUM (PFS_EXE_CRY)|
|**INJECTIONS**|Numéro de l’établissement exécutant|ETB_EXE_FIN|
|**INJECTIONS**|Catégorie du PS exécutant|PFS_EXE_CAT|
|**INJECTIONS**|Spécialité du PS exécutant|PSE_SPE_COD|
|**INJECTIONS**|Catégorie du lieu de vaccination|ETB_VAC_CAT|
|**INJECTIONS**|Numéro du centre de vaccination|ETB_VAC_FIN|


La variable `BEN_STA_VAC` permet de savoir à quel stade le patient se trouve de son cycle de vaccination :
- ‘CO’ : En cours, il lui reste au moins une injection à faire ; 
- ‘TE’ : Terminé (le patient ne peut avoir qu’une seule injection et avoir terminé son cycle de vaccination, mais il peut aussi avoir 2 voire 3 injections).

Voici le libellé des différentes catégories de lieu  de vaccination :
| ETB_VAC_CAT | Libellé de la catégorie du lieu                                                    |
|-------------|------------------------------------------------------------------------------------|
| 1           | EHPAD                                                                              |
| 11          | Dans un centre de vaccination                                                      |
| 2           | USLD                                                                               |
| 3           | Résidence autonomie                                                                |
| 4           | Résidence service senior                                                           |
| 12          | Maison d'accueil spécialisée ou foyer d'accueil médicalisé                         |
| 5           | Dans un autre établissement médico-social                                          |
| 6           | Etablissement de santé (CHU, CH, CHR, …)                                           |
| 7           | Cabinet, en officine ou dans la structure d'exercice (hors établissement de santé) |
| 8           | Au domicile du patient                                                             |
| 13          | Service de Santé au Travail (SST)                                                  |
| 9           | Foyer migrant                                                                      |
| 10          | Autre                                                                              |

Le référentiel des centres de vaccination, disponible sur [data.gouv.fr](https://www.data.gouv.fr/fr/datasets/lieux-de-vaccination-contre-la-covid-19/), est mis à disposition sur le portail SNDS dans le répertoire SAS / RFCOMMUN : centres_vaccination.  



Les variables sur les dates de prescription et d’injection en jour/mois/année ainsi que les numéros de PS (prescripteur / exécutant) sont soit non restituées, soit restituées (en clair ou cryptées) selon le profil d’accès de l'utilisateur au portail SNDS. 

    
## Références
::: tip Ressources
Ce document a été rédigé par la Cnam et a été converti en Markdown pour être publié ici, et servir plus facilement de ressources pour d'autres fiches. Il est [téléchargeable ici](../files/Cnam/20210621_Cnam_Communique-IR_VAC_F_Miseajour_sansprofils_MPL-2.0.docx) dans sa version d'origine.

Il a été initialement publié sur le portail SNDS de la Cnam le 18 juin 2021. 

Il a été mis à jour le 29 juin 2021 avec l'ajout de deux nouvelles variables liées à l'injection (`ETB_VAC_CAT` et `ETB_VAC_FIN`).
:::




