# Les bases du SNDS, de l'alimentation à la restitution des données
<!-- SPDX-License-Identifier: MPL-2.0 -->

Le SNDS se décline en différentes bases :

- Des bases avec des données individuelles (DCIR, PMSI, CépiDC), quasi-exhaustives sur l'ensemble de la population française
- Un échantillon représentatif au 1/97e (EGB)
- Des bases thématiques avec des données agrégées (Datamarts BO)

## Le circuit d'alimentation

Les données viennent alimenter les différentes bases du SNDS à travers différents circuits.
Elles peuvent ainsi transiter par :

- Les bases de données des régimes d'Assurance Maladie, pour les données du SNIIRAM :
  - Les soins remboursés par les Caisses Primaires d'Assurance Maladie grâce à la carte vitale, ou des feuilles de soins papier pour les soins de ville
  - Les bordereaux de facturation pour les cliniques privées
  - Les actes et consultations externes réalisés dans les hôpitaux publics
- L'ATIH, qui gère les différents sous-systèmes du PMSI (voir ci-dessous : MCO, SSR, HAD et RIM-P), pour les données de l'activité hospitalière
- Le circuit mairie - INSEE - INSERM pour les données des causes médicales de décès

## Les bases (quasi-exhaustives) avec des données individuelles

### DCIR : Les soins de ville

Le _Datamart de Consommation Inter Régime_ contient l'ensemble des soins de ville remboursés pour les bénéficiaires de l'Assurance Maladie.
Il permet de réaliser des études sur la consommation de soins des bénéficiaires et les pratiques des professionnels de santé.

### PMSI : Les soins à l'hôpital

Le _Programme de Médicalisation des Systèmes d'Information_ recense l'activité des hôpitaux publics et privés afin d'évaluer et rémunérer l'activité des établissements, de répartir les ressources en fonction des besoins quantifiés et de réaliser des études de santé publique et épidémiologiques à travers 4 secteurs distincts :

- Hospitalisations de courte durée (MCO - Médecine, Chirurgie, Obstétrique)
- Soins de Suite et de Réadaptations (SSR)
- Hospitalisation À Domicile (HAD)
- Psychiatrie (RIM-P)

### CépiDC : Les causes médicales de décès

Les informations fournies par le _Centre d'épidémiologie sur les causes de décès_ permettent au SNDS en plus de disposer de la date, de pouvoir connaître la cause initiale ainsi que l'ensemble des causes de décès du bénéficiaire.

Les années 2013 à 2015 sont pour le moment disponibles.
A terme, les causes de décès de 2006 à Y-2  seront disponibles.
Un délai minimum de deux années est toujours nécessaire par rapport à l'année en cours pour pouvoir effectuer le chargement des informations dans le SNDS.

## L'échantillon représentatif des personnes protégées

_L'Échantillon Généraliste des Bénéficiaires_ (EGB) est un échantillon représentatif au 1/97ème par sexe et par âge de la population protégée présente dans le DCIR.
Il permet en particulier de réaliser des études longitudinales, car on y trouve à la fois les consommants et les non consommants de cette population (ce qui n'est pas le cas du DCIR ou ne figurent que les soins des consommants) sur un historique qui sera de 20 ans en 2023.
Les données de consommations des bénéficiaires du DCIR et des PMSI MCO et HAD y figurent.
L'EGB ne permet pas de réaliser des études régionales ou départementales, ni des études sur les maladies rares.

## Les datamarts BO : des bases thématiques avec des données agrégées

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

## Les bases en Open Data

Une partie des informations mentionnées figurant dans les bases de données précitées sont accessibles en Open Data à un niveau beaucoup plus agrégé.

Sur [le site de l'Assurance Maladie](https://www.ameli.fr/l-assurance-maladie/statistiques-et-publications/index.php), des données de cadrage sont disponibles et actualisées régulièrement, notamment sur les dépenses d'Assurance Maladie et les données statistiques sur les Professionnels de Santé (activité et prescription des médecins, activité et prescription des chirurgiens dentistes...)

Certains accès se font sous forme de bases et sont fournies et actualisées par l'Assurance Maladie.
Les principales bases en Open Data, [disponibles ici](http://open-data-assurance-maladie.ameli.fr), sont les suivantes :

- Open Damir : Ensemble des dépenses d'Assurance Maladie,tous régimes confondus, données nationales et par CPAM
- Open Medic:  Ensemble des prescriptions de médicaments délivrées en officine de ville, par classe anatomique et thérapeutique et par classe CIP
- Open Bio: Ensemble des données de biologie médicale, par groupe physiopathologique ou par code détaillé de la nomenclature

L'ATIH met également à disposition en Open Data des données à l'aide de l'outil [Scan Santé](http://www.scansante.fr/).
Celui-ci permet de réaliser des analyses à travers les quatre secteurs du PMSI existants (MCO, SSR, HAD et PSY) pour:

- des données de synthèse telles que les statistiques médicales hospitalières sur les Groupes Homogènes de Malades (GHM), les diagnostics, les actes réalisés ou la consommation de médicaments délivrés en sus
- des indicateurs calculés et prêts à l'emploi tels que les indicateurs de performance Hospi-Diag, les case-mix par établissements, la cartographie des établissements...

Le CépiDc fournit en accès libre des données agrégées issues de la déclaration et de la codification des causes de décès collectées de manière officielle et régulière.
Celles-ci sont interrogeables à l'aide d'un outil les recensant depuis 1979.
Les effectifs de décès par année France entière, toutes causes confondues sont [disponibles ici](http://www.cepidc.inserm.fr/causes-medicales-de-deces/interroger-les-donnees-de-mortalite).