# Les bases du SNDS, de l'alimentation à la restitution des données
<!-- SPDX-License-Identifier: MPL-2.0 -->

Le SNDS se décline en différentes bases :

- Des bases avec des données individuelles (<PreviewPage text="DCIR" link="../glossaire/DCIR.html" />, <PreviewPage text="PMSI" link="../glossaire/PMSI.html" />, <PreviewPage text="CépiDC" link="../glossaire/CepiDC.html" />), quasi-exhaustives sur l'ensemble de la population française
- Un échantillon représentatif au 1/97e (<PreviewPage text="EGB" link="../glossaire/EGB.html" />)
- Des bases thématiques avec des données agrégées (Datamarts BO)

## Le circuit d'alimentation

Les données viennent alimenter les différentes bases du SNDS à travers différents circuits.
Elles peuvent ainsi transiter par :

- Les bases de données des régimes d'Assurance Maladie, pour les données du <PreviewPage text="SNIIRAM" link="../glossaire/SNIIRAM.html" /> :
  - Les soins remboursés par les Caisses Primaires d'Assurance Maladie grâce à la carte vitale, ou des <PreviewPage text="feuilles de soins" link="../glossaire/feuille_soin.html" /> papier pour les soins de ville
  - Les bordereaux de facturation pour les cliniques privées
  - Les actes et consultations externes réalisés dans les hôpitaux publics
- L'ATIH, qui gère les différents sous-systèmes du <PreviewPage text="PMSI" link="../glossaire/PMSI.html" /> (voir ci-dessous : <PreviewPage text="MCO" link="../glossaire/MCO.html" />, <PreviewPage text="SSR" link="../glossaire/SSR.html" />, <PreviewPage text="HAD" link="../glossaire/HAD.html" /> et <PreviewPage text="RIM-P" link="../glossaire/RIM-P.html" />), pour les données de l'activité hospitalière
- Le circuit mairie - INSEE - INSERM pour les données des causes médicales de décès

## Les bases (quasi-exhaustives) avec des données individuelles

### <PreviewPage text="DCIR" link="../glossaire/DCIR.html" /> : Les soins de ville

Le _Datamart de Consommation Inter Régime_ contient l'ensemble des soins de ville remboursés pour les bénéficiaires de l'Assurance Maladie.
Il permet de réaliser des études sur la consommation de soins des bénéficiaires et les pratiques des professionnels de santé.

### <PreviewPage text="PMSI" link="../glossaire/PMSI.html" /> : Les soins à l'hôpital

Le _Programme de Médicalisation des Systèmes d'Information_ recense l'activité des hôpitaux publics et privés afin d'évaluer et rémunérer l'activité des établissements, de répartir les ressources en fonction des besoins quantifiés et de réaliser des études de santé publique et épidémiologiques à travers 4 secteurs distincts :

- Hospitalisations de courte durée (<PreviewPage text="MCO" link="../glossaire/MCO.html" /> - Médecine, Chirurgie, Obstétrique)
- Soins de Suite et de Réadaptations (<PreviewPage text="SSR" link="../glossaire/SSR.html" />)
- Hospitalisation À Domicile (<PreviewPage text="HAD" link="../glossaire/HAD.html" />)
- Psychiatrie (<PreviewPage text="RIM-P" link="../glossaire/RIM-P.html" />)

### <PreviewPage text="CépiDC" link="../glossaire/CepiDC.html" /> : Les causes médicales de décès

Les informations fournies par le _Centre d'épidémiologie sur les causes de décès_ permettent au SNDS en plus de disposer de la date, de pouvoir connaître la cause initiale ainsi que l'ensemble des causes de décès du bénéficiaire.

Un délai de deux années est nécessaire par rapport à l'année en cours pour pouvoir effectuer la consolidation des données et leur chargement dans le SNDS.

## L'échantillon représentatif des personnes protégées

_L'Échantillon Généraliste des Bénéficiaires_ (<PreviewPage text="EGB" link="../glossaire/EGB.html" />) est un échantillon représentatif au 1/97ème par sexe et par âge de la population protégée présente dans le <PreviewPage text="DCIR" link="../glossaire/DCIR.html" />.
Il permet en particulier de réaliser des études longitudinales, car on y trouve à la fois les consommants et les non consommants de cette population (ce qui n'est pas le cas du <PreviewPage text="DCIR" link="../glossaire/DCIR.html" /> ou ne figurent que les soins des consommants) sur un historique qui sera de 20 ans en 2023.
Les données de consommations des bénéficiaires du <PreviewPage text="DCIR" link="../glossaire/DCIR.html" /> et des <PreviewPage text="PMSI" link="../glossaire/PMSI.html" /> <PreviewPage text="MCO" link="../glossaire/MCO.html" /> et <PreviewPage text="HAD" link="../glossaire/HAD.html" /> y figurent.
L'<PreviewPage text="EGB" link="../glossaire/EGB.html" /> ne permet pas de réaliser des études régionales ou départementales, ni des études sur les maladies rares.

## Les datamarts BO : des bases thématiques avec des données agrégées

Elles permettent de restituer à un niveau agrégé les données des bases <PreviewPage text="DCIR" link="../glossaire/DCIR.html" /> et <PreviewPage text="PMSI" link="../glossaire/PMSI.html" />.

Elles se déclinent en deux niveaux:

Les données agrégées des dépenses qui concernent :

- Le suivi des dépenses (<PreviewPage text="DAMIR" link="../glossaire/DAMIR.html" /> et requêtes prédéfinies)
- Les médicaments délivrés à l'hôpital (<PreviewPage text="UCD" link="../glossaire/UCD.html" />)
- La biologie
- La pharmacie
- Les données de cadrage (<PreviewPage text="PS" link="../glossaire/PS.html" />, bénéficiaires…)

Les données individuelles de l'Offre de soins qui concernent notamment:

- L'offre de soins libérale (Univers Exécutant/Prescripteur + requêtes prédéfinies outil commission)
- Dispositifs médicaux (<PreviewPage text="LPP" link="../glossaire/LPP.html" />)
- <PreviewPage text="CCAM" link="../glossaire/CCAM.html" /> (prestations et associations)
- Centres de santé
- Établissements privés (<PreviewPage text="SNIREP" link="../glossaire/SNIREP.html" />)

## Les bases en Open Data

Une partie des informations mentionnées figurant dans les bases de données précitées sont accessibles en Open Data à un niveau beaucoup plus agrégé.

Pour plus d'informations à ce sujet, nous vous invitons à consulter la [section dédiée à l'open data](https://documentation-snds.health-data-hub.fr/open_data/).  


