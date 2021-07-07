# Les bases du SNDS, de l'alimentation à la restitution des données
<!-- SPDX-License-Identifier: MPL-2.0 -->

Le SNDS se décline en différentes bases :

- Des bases avec des données individuelles ([DCIR](../glossaire/DCIR.md), [PMSI](../glossaire/PMSI.md), [CépiDC](../glossaire/CepiDC.md)), quasi-exhaustives sur l'ensemble de la population française
- Un échantillon représentatif au 1/97e ([EGB](../glossaire/EGB.md))
- Des bases thématiques avec des données agrégées (Datamarts BO)

## Le circuit d'alimentation

Les données viennent alimenter les différentes bases du SNDS à travers différents circuits.
Elles peuvent ainsi transiter par :

- Les bases de données des régimes d'Assurance Maladie, pour les données du [SNIIRAM](../glossaire/SNIIRAM.md) :
  - Les soins remboursés par les Caisses Primaires d'Assurance Maladie grâce à la carte vitale, ou des [feuilles de soins](../glossaire/feuille_soin.md) papier pour les soins de ville
  - Les bordereaux de facturation pour les cliniques privées
  - Les actes et consultations externes réalisés dans les hôpitaux publics
- L'ATIH, qui gère les différents sous-systèmes du [PMSI](../glossaire/PMSI.md) (voir ci-dessous : [MCO](../glossaire/MCO.md), [SSR](../glossaire/SSR.md), [HAD](../glossaire/HAD.md) et [RIM-P](../glossaire/RIM-P.md)), pour les données de l'activité hospitalière
- Le circuit mairie - INSEE - INSERM pour les données des causes médicales de décès

## Les bases (quasi-exhaustives) avec des données individuelles

### [DCIR](../glossaire/DCIR.md) : Les soins de ville

Le _Datamart de Consommation Inter Régime_ contient l'ensemble des soins de ville remboursés pour les bénéficiaires de l'Assurance Maladie.
Il permet de réaliser des études sur la consommation de soins des bénéficiaires et les pratiques des professionnels de santé.

### [PMSI](../glossaire/PMSI.md) : Les soins à l'hôpital

Le _Programme de Médicalisation des Systèmes d'Information_ recense l'activité des hôpitaux publics et privés afin d'évaluer et rémunérer l'activité des établissements, de répartir les ressources en fonction des besoins quantifiés et de réaliser des études de santé publique et épidémiologiques à travers 4 secteurs distincts :

- Hospitalisations de courte durée ([MCO](../glossaire/MCO.md) - Médecine, Chirurgie, Obstétrique)
- Soins de Suite et de Réadaptations ([SSR](../glossaire/SSR.md))
- Hospitalisation À Domicile ([HAD](../glossaire/HAD.md))
- Psychiatrie ([RIM-P](../glossaire/RIM-P.md))

### [CépiDC](../glossaire/CepiDC.md) : Les causes médicales de décès

Les informations fournies par le _Centre d'épidémiologie sur les causes de décès_ permettent au SNDS en plus de disposer de la date, de pouvoir connaître la cause initiale ainsi que l'ensemble des causes de décès du bénéficiaire.

Un délai de deux années est nécessaire par rapport à l'année en cours pour pouvoir effectuer la consolidation des données et leur chargement dans le SNDS.

## L'échantillon représentatif des personnes protégées

_L'Échantillon Généraliste des Bénéficiaires_ ([EGB](../glossaire/EGB.md)) est un échantillon représentatif au 1/97ème par sexe et par âge de la population protégée présente dans le [DCIR](../glossaire/DCIR.md).
Il permet en particulier de réaliser des études longitudinales, car on y trouve à la fois les consommants et les non consommants de cette population (ce qui n'est pas le cas du [DCIR](../glossaire/DCIR.md) ou ne figurent que les soins des consommants) sur un historique qui sera de 20 ans en 2023.
Les données de consommations des bénéficiaires du [DCIR](../glossaire/DCIR.md) et des [PMSI](../glossaire/PMSI.md) [MCO](../glossaire/MCO.md) et [HAD](../glossaire/HAD.md) y figurent.
L'[EGB](../glossaire/EGB.md) ne permet pas de réaliser des études régionales ou départementales, ni des études sur les maladies rares.

## Les datamarts BO : des bases thématiques avec des données agrégées

Elles permettent de restituer à un niveau agrégé les données des bases [DCIR](../glossaire/DCIR.md) et [PMSI](../glossaire/PMSI.md).

Elles se déclinent en deux niveaux:

Les données agrégées des dépenses qui concernent :

- Le suivi des dépenses ([DAMIR](../glossaire/DAMIR.md) et requêtes prédéfinies)
- Les médicaments délivrés à l'hôpital ([UCD](../glossaire/UCD.md))
- La biologie
- La pharmacie
- Les données de cadrage ([PS](../glossaire/PS.md), bénéficiaires…)

Les données individuelles de l'Offre de soins qui concernent notamment:

- L'offre de soins libérale (Univers Exécutant/Prescripteur + requêtes prédéfinies outil commission)
- Dispositifs médicaux ([LPP](../glossaire/LPP.md))
- [CCAM](../glossaire/CCAM.md) (prestations et associations)
- Centres de santé
- Établissements privés ([SNIREP](../glossaire/SNIREP.md))

## Les bases en Open Data

Une partie des informations mentionnées figurant dans les bases de données précitées sont accessibles en Open Data à un niveau beaucoup plus agrégé.

Pour plus d'informations à ce sujet, nous vous invitons à consulter la [section dédiée à l'open data](https://documentation-snds.health-data-hub.fr/open_data/).  


