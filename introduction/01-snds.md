# Qu'est-ce que le SNDS ?
<!-- SPDX-License-Identifier: MPL-2.0 -->

Le Système National des Données de Santé (SNDS) est un entrepôt de données médico-administratives pseudonymisées couvrant l'ensemble de la population française et contenant l'ensemble des soins présentés au remboursement.
Créé en 2016 dans la continuité d'un entrepôt précédent, géré par la Caisse Nationale de l'Assurance Maladie ([CNAM](../glossaire/Cnam.md)), il permet de chaîner :

- les données de l'assurance maladie (base [SNIIRAM](../glossaire/SNIIRAM.md))
- les données des hôpitaux (base [PMSI](../glossaire/PMSI.md))
- les causes médicales de décès (base du [CépiDC](../glossaire/CepiDC.md) de l'Inserm)
- les données relatives au handicap (données de la [CNSA](../glossaire/CNSA.md)) (à venir)
- certaines données des organismes complémentaires (à venir)

En quelques chiffres, le SNDS c'est plus de 3000 variables, et un flux annuel de  :

- 1,2 milliards de [feuilles de soins](../glossaire/feuille_soin.md)
- 11 millions de séjours hospitaliers
- 500 millions d'actes
- 450 To de données

## À quoi le SNDS peut-il servir ?

Le SNDS constitue l'une des bases de données de santé les plus importantes du monde.
Il attire la recherche grâce à sa quasi-exhaustivité à l'échelle de la population française, et grâce à son décloisonnement ville - hôpital permettant de travailler sur le parcours de soin complet des patients.
Un enjeu majeur du SNDS est ainsi la mise à disposition de ces données afin de favoriser les études, recherches ou évaluations présentant un caractère d'intérêt public, et s'inscrivant dans l'une des finalités autorisées que sont :

- l'information sur la santé et l'offre de soins
- l'évaluation des politiques de santé
- l'évaluation des dépenses de santé
- l'information des professionnels de santé sur leur activité
- la veille et la sécurité sanitaires
- la recherche, les études, l'évaluation et l'innovation en santé

Il est en revanche interdit d'exploiter le SNDS pour l'une des finalités interdites que sont :

- la promotion des produits de santé auprès des professionnels de santé et des établissements de santé
- la modification des contrats d'assurance

## La création et l'évolution

Le SNDS s'inscrit naturellement dans la continuité du Système National d'Information Inter-Régime de l'Assurance Maladie ([SNIIRAM](../glossaire/SNIIRAM.md)), créé par la loi de financement de la sécurité sociale du 23 décembre 1998.
La volonté était alors de constituer un entrepôt national de données médico-administratives de remboursement, dans l'objectif de contribuer à une meilleure gestion de l'Assurance Maladie (objectif [ONDAM](../glossaire/ONDAM.md)) et des politiques de santé, d'améliorer la qualité des soins et de transmettre aux professionnels de santé les informations pertinentes sur leur activité.

Le SNDS en tant que tel est créé le 26 janvier 2016 par la loi de modernisation du système de santé, et généralise le [SNIIRAM](../glossaire/SNIIRAM.md) (déjà enrichi du [PMSI](../glossaire/PMSI.md)) en le liant au [CépiDC](../glossaire/CepiDC.md) et en revoyant le circuit d'accès aux données, avec pour enjeux l'ouverture des données de santé dans le respect de la vie privée du citoyen, l'amélioration de la santé des patients et l'analyse de la dépense publique en santé.

## Les données présentes et absentes

On trouve dans le SNDS les grandes catégories de données suivantes :

- Les dépenses et remboursements (prestations en soins de ville, en établissements de santé, et montants associés)
  - Consommations de soins de ville (consultations, actes techniques…)
  - Prescriptions (médicaments)
  - Dispositifs médicaux (aides techniques)
  - Autres prestations (cures, transports…)
  - Soins hospitaliers (hors séances)
  - Séjours hospitaliers (et diagnostics)
  - Indemnités journalières (maladie, ATMP, maternité) et invalidité
- Les Affections de Longue Durée ([ALD](../glossaire/ALD.md))
- Des informations génériques sur les patients :
  - Âge, sexe, commune et département de résidence
  - [CMU-C](../fiches/cmu_c.md) (Couverture Maladie Universelle Complémentaire) et [ACS](../glossaire/ACS.md) (Aide à la Complémentaire Santé)
  - Date, commune et causes médicales de décès
  - Médecin traitant
- Des informations sur les professionnels de santé (spécialité, mode d'exercice, sexe, âge, département d'implantation)

En revanche, on ne trouve dans le SNDS :

- Pas de résultat d'examen clinique (imagerie, données biologiques, …) ou paraclinique (tabagisme, tension, IMC …)
- Pas de motifs de consultation
- Pas de notion des facteurs de risque type : tabac, alcool, nutrition, ...
- Pas d'information sur les médicaments délivrés au cours des séjours hospitaliers
- Pas (ou très peu) de données sociales

## La sécurité et la confidentialité

Pour protéger l'identité des patients et garantir la confidentialité des données, chaque patient est repéré dans l'ensemble du SNDS par un [pseudonyme](../glossaire/pseudonymisation.md), obtenu par l'application au [NIR](../glossaire/NIR.md) d'un procédé cryptographique irréversible appelé [FOIN](../glossaire/FOIN.md).
Les données du SNDS sont conservées pour une durée totale de 20 ans, puis archivées pour une durée de 10 ans.

L'accès aux données du SNDS et leur analyse ne peut se faire que dans un cadre d'hébergement très restrictif respectant le [référentiel de sécurité du SNDS](https://www.legifrance.gouv.fr/eli/arrete/2017/3/22/AFSE1705146A/jo/texte), afin de garantir la traçabilité des accès et des traitements, la confidentialité des données et leur intégrité.
