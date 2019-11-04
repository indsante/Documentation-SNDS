# Introduction au SNDS
<!-- SPDX-License-Identifier: MPL-2.0 -->

![le SNDS](../files/images/logo/logoSNDS.jpg)

**ATTENTION :** _La loi du 24 juillet 2019, relative à l'Organisation et la Transformation du Système de Santé (OTSS), modifie certains éléments présentés ici, en particulier en élargissant le périmètre du SNDS et en précisant les missions du Health Data Hub. La loi n'étant pas encore entièrement mise en application, nous nous concentrerons ici sur le SNDS "historique", déjà complexe, et sur les procédures d'accès correspondantes, qui n'ont évolué que légèrement depuis._

<br>

## Qu'est-ce que le SNDS ?

Le Système National des Données de Santé (SNDS) est un entrepôt de données médico-administratives pseudonymisées couvrant l'ensemble de la population française et contenant l'ensemble des soins présentés au remboursement. Créé en 2016 dans la continuité d'un entrepôt précédent, géré par la Caisse Nationale de l'Assurance Maladie (CNAM), il permet de chaîner :

- les données de l'assurance maladie (base SNIIRAM)
- les données des hôpitaux (base PMSI)
- les causes médicales de décès (base du CépiDC de l'Inserm)
- les données relatives au handicap (données de la CNSA) (à venir)
- certaines données des organismes complémentaires (à venir)

En quelques chiffres, le SNDS c'est plus de 3000 variables, et un flux annuel de  :

- 1,2 milliards de feuilles de soins
- 11 millions de séjours hospitaliers
- 500 millions d'actes
- 450 To de données

### À quoi ça peut servir ?

Le SNDS constitue l'une des bases les plus importantes du monde de données de santé et attire la recherche, grâce à sa quasi-exhaustivité à l'échelle de la population française, et grâce à son décloisonnement ville / hôpital permettant de travailler sur le parcours de soin complet des patients. Un enjeu majeur du SNDS est ainsi la mise à disposition de ces données afin de favoriser les études, recherches ou évaluations présentant un caractère d'intérêt public, et s'inscrivant dans l'une des finalités autorisées que sont :

- l'information sur la santé et l'offre de soins
- l'évaluation des politiques de santé
- l'évaluation des dépenses de santé
- l'information des professionnels de santé sur leur activité
- la veille et la sécurité sanitaires
- la recherche, les études, l'évaluation et l'innovation en santé

Il est en revanche interdit d'exploiter le SNDS pour l'une des finalités interdites que sont :

- la promotion des produits de santé auprès des professionnels de santé et des établissements de santé
- la modification des contrats d'assurance

### La création et l'évolution

Le SNDS s'inscrit naturellement dans la continuité du Système National d'Information Inter-Régime de l'Assurance Maladie (SNIIRAM), créé par la loi de financement de la sécurité sociale du 23 décembre 1998. La volonté était alors de constituer un entrepôt national de données médico-administratives de remboursement, dans l'objectif de contribuer à une meilleure gestion de l'Assurance Maladie (objectif ONDAM) et des politiques de santé, d'améliorer la qualité des soins et de transmettre aux professionnels de santé les informations pertinentes sur leur activité.

Le SNDS en tant que tel est créé le 26 janvier 2016 par la loi de modernisation du système de santé, et généralise le SNIIRAM (déjà enrichi du PMSI) en le liant au CépiDC et en revoyant le circuit d'accès aux données, avec pour enjeux l'ouverture des données de santé dans le respect de la vie privée du citoyen, l'amélioration de la santé des patients et l'analyse de la dépense publique en santé.

### Les données présentes et absentes

On trouve dans le SNDS les grandes catégories de données suivantes :

- Les dépenses et remboursements (prestations en soins de ville, en établissements de santé, et montants associés)
  - Consommations de soins de ville (consultations, actes techniques…)
  - Prescriptions (médicaments)
  - Dispositifs médicaux (aides techniques)
  - Autres prestations (cures, transports…)
  - Soins hospitaliers (hors séances)
  - Séjours hospitaliers (et diagnostics)
  - Indemnités journalières (maladie, ATMP, maternité) et invalidité
- Les Affections de Longue Durée (ALD)
- Des informations génériques sur les patients :
  - Âge, sexe, commune et département de résidence
  - CMU-C (Couverture Maladie Universelle Complémentaire) et ACS (Aide à la Complémentaire Santé)
  - Date, commune et causes médicales de décès
  - Médecin traitant
- Des informations sur les professionnels de santé (spécialité, mode d'exercice, sexe, âge, département d'implantation)

En revanche, on ne trouve dans le SNDS :

- Pas de résultat d'examen clinique (imagerie, données biologiques, …) ou paraclinique (tabagisme, tension, IMC …)
- Pas de motifs de consultation
- Pas de notion des facteurs de risque type : tabac, alcool, nutrition, ...
- Pas d'information sur les médicaments délivrés au cours des séjours hospitaliers
- Pas (ou très peu) de données sociales

### La sécurité et la confidentialité

Pour protéger l'identité des patients et garantir la confidentialité des données, chaque patient est repéré dans l'ensemble du SNDS par un pseudonyme, obtenu par l'application au NIR d'un procédé cryptographique irréversible appelé FOIN. Les données du SNDS sont conservées pour une durée totale de 20 ans, puis archivées pour une durée de 10 ans.

L'accès aux données du SNDS et leur analyse ne peut se faire que dans un cadre d'hébergement très restrictif respectant le [référentiel de sécurité du SNDS](https://www.legifrance.gouv.fr/eli/arrete/2017/3/22/AFSE1705146A/jo/texte), afin de garantir la traçabilité des accès et des traitements, la confidentialité des données et leur intégrité.

<br>

## Les bases du SNDS, de l'alimentation à la restitution des données

Le SNDS se décline en différentes bases :

- Des bases avec des données individuelles (DCIR, PMSI, CépiDC), quasi-exhaustives sur l'ensemble de la population française
- Un échantillon représentatif au 1/97e (EGB)
- Des bases thématiques avec des données agrégées (Datamarts BO)

### Le circuit d'alimentation

Les données viennent alimenter les différentes bases du SNDS à travers différents circuits. Elles peuvent ainsi transiter par :

- Les bases de données des régimes d'Assurance Maladie, pour les données du SNIIRAM :
  - Les soins remboursés par les Caisses Primaires d'Assurance Maladie grâce à la carte vitale, ou des feuilles de soins papier pour les soins de ville
  - Les bordereaux de facturation pour les cliniques privées
  - Les actes et consultations externes réalisés dans les hôpitaux publics
- L'ATIH, qui gère les différents sous-systèmes du PMSI (voir ci-dessous : MCO, SSR, HAD et RIM-P), pour les données de l'activité hospitalière
- Le circuit mairie - INSEE - INSERM pour les données des causes médicales de décès

### Les bases (quasi-exhaustives) avec des données individuelles

#### DCIR : Les soins de ville

Le _Datamart de Consommation Inter Régime_ contient l'ensemble des soins de ville remboursés pour les bénéficiaires de l'Assurance Maladie. Il permet de réaliser des études sur la consommation de soins des bénéficiaires et les pratiques des professionnels de santé.

#### PMSI : Les soins à l'hôpital

Le _Programme de Médicalisation des Systèmes d'Information_ recense l'activité des hôpitaux publics et privés afin d'évaluer et rémunérer l'activité des établissements, de répartir les ressources en fonction des besoins quantifiés et de réaliser des études de santé publique et épidémiologiques à travers 4 secteurs distincts :

- Hospitalisations de courte durée (MCO - Médecine, Chirurgie, Obstétrique)
- Soins de Suite et de Réadaptations (SSR)
- Hospitalisation À Domicile (HAD)
- Psychiatrie (RIM-P)

#### CépiDC : Les causes médicales de décès

Les informations fournies par le _Centre d'épidémiologie sur les causes de décès_ permettent au SNDS en plus de disposer de la date, de pouvoir connaître la cause initiale ainsi que l'ensemble des causes de décès du bénéficiaire.

Les années 2013 à 2015 sont pour le moment disponibles. A terme, les causes de décès de 2006 à Y-2  seront disponibles. Un délai minimum de deux années est toujours nécessaire par rapport à l'année en cours pour pouvoir effectuer le chargement des informations dans le SNDS.

### L'échantillon représentatif des personnes protégées

_L'Échantillon Généraliste des Bénéficiaires_ (EGB) est un échantillon représentatif au 1/97ème par sexe et par âge de la population protégée présente dans le DCIR. Il permet en particulier de réaliser des études longitudinales, car on y trouve à la fois les consommants et les non consommants de cette population (ce qui n'est pas le cas du DCIR ou ne figurent que les soins des consommants) sur un historique qui sera de 20 ans en 2023. Les données de consommations des bénéficiaires du DCIR et des PMSI MCO et HAD y figurent. L'EGB ne permet pas de réaliser des études régionales ou départementales, ni des études sur les maladies rares.

### Les datamarts BO : des bases thématiques avec des données agrégées

Elles permettent de restituer à un niveau agrégé les données des bases DCIR et PMSI.

Elles se déclinent en deux niveaux:

Les données agrégées des dépenses qui concernent :

- Le suivi des dépenses (DAMIR et requêtes prédéfinies)
- Les médicaments délivrés à l'hôpital (UCD)
- La biologie
- La pharmacie
- Les données de cadrage (PS, bénéficiaires…)

Les données individuelles de l'Offre de soins qui concernent notamment:

- L'offre de soins libérale (Univers Exécutant/Prescripteur + requêtes prédéfinies outil commission)
- Dispositifs médicaux (LPP)
- CCAM (prestations et associations)
- Centres de santé (CDS)
- Établissements privés (SNIREP)

### Les bases en Open Data

Une partie des informations mentionnées figurant dans les bases de données précitées sont accessibles en Open Data à un niveau beaucoup plus agrégé.

Sur [le site de l'Assurance Maladie](https://www.ameli.fr/l-assurance-maladie/statistiques-et-publications/index.php), des données de cadrage sont disponibles et actualisées régulièrement, notamment sur les dépenses d'Assurance Maladie et les données statistiques sur les Professionnels de Santé (activité et prescription des médecins, activité et prescription des chirurgiens dentistes...)

Certains accès se font sous forme de bases et sont fournies et actualisées par l'Assurance Maladie. Les principales bases en Open Data, [disponibles ici](http://open-data-assurance-maladie.ameli.fr), sont les suivantes :

- Open Damir : Ensemble des dépenses d'Assurance Maladie,tous régimes confondus, données nationales et par CPAM
- Open Medic:  Ensemble des prescriptions de médicaments délivrées en officine de ville, par classe anatomique et thérapeutique et par classe CIP
- Open Bio: Ensemble des données de biologie médicale, par groupe physiopathologique ou par code détaillé de la nomenclature

L'ATIH met également à disposition en Open Data des données à l'aide de l'outil [Scan Santé](http://www.scansante.fr/). Celui-ci permet de réaliser des analyses à travers les quatre secteurs du PMSI existants (MCO, SSR, HAD et PSY) pour:

- des données de synthèse telles que les statistiques médicales hospitalières sur les Groupes Homogènes de Malades (GHM), les diagnostics, les actes réalisés ou la consommation de médicaments délivrés en sus
- des indicateurs calculés et prêts à l'emploi tels que les indicateurs de performance Hospi-Diag, les case-mix par établissements, la cartographie des établissements...

Le CépiDc fournit en accès libre des données agrégées issues de la déclaration et de la codification des causes de décès collectées de manière officielle et régulière. Celles-ci sont interrogeables à l'aide d'un outil les recensant depuis 1979. Les effectifs de décès par année France entière, toutes causes confondues sont [disponibles ici](http://www.cepidc.inserm.fr/causes-medicales-de-deces/interroger-les-donnees-de-mortalite).

<br>

## Comment accéder au SNDS ?

En dehors de l'Open Data, présenté plus haut, deux types distincts d'accès aux données du SNDS sont possibles : les accès permanents, et les accès sur projet.

### Les accès permanents

Certains organismes chargés d'une mission de service public, [listés par décret](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000033702840&categorieLien=id), disposent d'un accès permanent aux données du SNDS. Cette autorisation pérenne concerne un périmètre spécifique des données, et se décline ainsi selon les niveaux d'agrégation (données individuelles/agrégées bénéficiaires, …) et les historiques accessibles.

### Les accès sur projet

Pour tous les demandeurs, publics comme privés, la loi prévoit la possibilité de demander un accès à une extraction de données du SNDS pour un projet d'intérêt public à des fins de recherche, d'étude et d'évaluation dans le domaine de la santé. Selon les cas, cette demande d'accès peut relever de différentes procédures.

#### La procédure standard

La procédure standard d'accès au SNDS, la plus courante, suit les étapes suivantes :

1. Le Responsable de Traitement (RT) dépose une demande d'autorisation auprès de l'Institut National des Données de Santé (INDS), qui valide la complétude du dossier, et peut s'auto-saisir pour examiner l'intérêt public du traitement (délai : 7 jours)
2. Le Comité d'Expertise pour les Recherches, les Etudes et les Evaluations dans le domaine de la Santé (CEREES) émet un avis sur la méthodologie scientifique du projet, et le recours à des données à caractère personnel (délai : 1 mois)
3. La Commission Nationale de l'Informatique et des Libertés (CNIL) prend connaissance des avis du CEREES et de l'INDS, et donne une autorisation pour le projet (délai : 2 mois, renouvelables une fois)
4. En fonction de l'autorisation CNIL, une convention est signée entre la CNAM et le RT, afin que la CNAM puisse extraire les données SNDS sur le périmètre autorisé (délai indicatif : 2 mois)

#### Les méthodologies de référence

Les méthodologies de référence (MR) sont des procédures simplifiées d'accès aux données, qui permettent dans certaines situations de réaliser une recherche en santé sans nécessiter d'autorisation CNIL ou d'avis du CEREES. Le Responsable de Traitement adresse alors à la CNIL une déclaration attestant la conformité du projet à la MR, puis inscrit son traitement dans le [r](https://www.indsante.fr/fr/repertoire-public-des-etudes-realisees-sous-mr)[épertoire public tenu par l'INDS](https://www.indsante.fr/fr/repertoire-public-des-etudes-realisees-sous-mr).

#### La procédure simplifiée d'accès à l'EGB

Début 2019, la CNIL a homologué une procédure d'accès simplifiée à l'EGB, en sa qualité d'échantillon représentatif. La CNIL donne ainsi compétence à l'INDS pour approuver (délai : 15 jours) l'accès à l'EGB après examen des 5 conditions suivantes :

- la finalité d'intérêt public du projet
- la justification par le RT de la pertinence scientifique du projet
- l'absence de croisements d'identifiants potentiels
- la durée d'accès aux données qui doit être limitée à celle nécessaire à la réalisation du projet
- le respect du référentiel de sécurité SNDS

#### Les assureurs et industriels de santé

L'accès des industriels de santé (entreprises productrices de produits de santé) et des assureurs en santé au SNDS est plus fortement encadré. Ces acteurs doivent :

- soit passer par un bureau d'études ou un organisme de recherche indépendant
- soit démontrer l'impossibilité d'utiliser le SNDS pour des finalités interdites

<br>

## La recherche avec le SNDS

Le SNDS représente une opportunité immense pour la recherche en santé, et les projets liés sont de plus en plus nombreux. En plus de sa quasi-exhaustivité sur les données médico-administratives de la population française, le SNDS présente un atout majeur : la possibilité de le chaîner (ou l'apparier) à d'autres bases de données.

### Les appariements

_vidéo sur les appariements de Mehdi Gabbas (meet up #1)_

Apparier ainsi le SNDS à d'autres sources de données décuple le potentiel de cet entrepôt pour la recherche en santé, en permettant bien souvent d'enrichir les données médico-administratives (du SNDS) par des données cliniques (venant d'autres bases). Ces appariements peuvent être de deux types :

- appariement direct (dit aussi _déterministe_), i.e. directement sur l'identifiant bénéficiaire, si la cohorte externe dispose du NIR (ou des données directement identifiantes permettant de le reconstruire)
- appariement indirect (dit aussi _probabiliste_), sur un certain nombre de variables communes aux deux bases, si la cohorte externe ne dispose pas du NIR (ou des données directement identifiantes permettant de le reconstruire)

### Quelques exemples

Ces exemples sont extraits de panoramas plus complets présentés sur le [site du SNDS](https://www.snds.gouv.fr/SNDS/Publications-par-thematique) et sur [le site de l'Assurance Maladie](https://www.ameli.fr/l-assurance-maladie/statistiques-et-publications/index.php).

#### Pathologies et parcours de soin

- _First hospitalization for heart failure in France in 2009: Patient characteristics and 30-day follow-up_, Tuppin P, Cuerq A, de Peretti C, Fagot-Campagna A, Danchin N, Juillière Y, Alla F, Allemand H, Bauters C, Drici MD, Hagège A, Jondeau G, Jourdain P, Leizorovicz A, Paccaud _F. Arch Cardiovasc_ Dis. 2013 Nov ; 106(11) : 570-85
- _Dépistage et diagnostic du cancer de la prostate et son traitement en France, selon le Sniiram (2009-2011)_, Tuppin P, Samson S, Fagot-Campagna A, Lukacs B, Alla F, Allemand H pour le groupe spécifique du conseil scientifique de la Cnamts. _Bull Epidémiol Hebd._ 2014 ; (9-10):163-71

#### Pharmaco-épidémiologie

- _Exposition à l'acide valproïque et ses dérivés au cours de la grossesse en France de 2007 à 2014 : une étude observationnelle sur les données du SNIIRAM_, rapport d'étude joint entre l'ANSM (F. Raguideau, C. Ehrhardt, R. Dray-Shapira, M. Zureik) et la CNAM (P.-O. Blotière, A. Weill, J. Coste), août 2016
- _Comparison of the short-term risk of bleeding and arterial thromboembolic events in nonvalvular atrial fibrillation patients newly treated with dabigatran or rivaroxaban versus vitamin K antagonists: a French nationwide propensity-matched cohort study_, Maura G, Blotière PO, Bouillon K, et al., _Circulation_. 2015;132(13):1252–1260. doi:10.1161/CIRCULATIONAHA.115.015710

#### Études médico-économiques

- _Tarification à l'activité : quel impact sur les réadmissions à l'hôpital ?_, E. Yilmaz & A. Vuagnat, Études & Résultats (DREES), numéro 922, juin 2015
- _Healthcare expenditure of multiple sclerosis patients in 2013: A nationwide study based on French health administrative databases_, Lefeuvre D, Rudant J, Foulon S, Alla F, Weill A.,  _Mult Scler J Exp Transl Clin_. 2017;3(3):2055217317730421. Published 2017 Sep 13. doi:10.1177/2055217317730421