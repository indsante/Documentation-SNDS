# Data Santé
<!-- SPDX-License-Identifier: MPL-2.0 -->

[DataSanté](https://www.atlasante.fr/accueil/presentation_du_projet/659_573/datasante) est une base de données mise à disposition par les Agences Régionales de Santé (ARS) via le projet [AtlaSanté](https://www.atlasante.fr/accueil). L'entrepôt a été construit pour stocker et partager des informations provenant de différentes sources de données, ainsi qu'alimenter les produits AtlaSanté (cartes intéractives Prodige, observatoire Géoclip)

Les données restituées dans DataSanté sont publiques et sont mises à jour au fil de l'eau en fonction des publications des producteurs de données. Elles sont également directement intégrées sur le portail SNDS de la CNAM et la plateforme gérée par l’ATIH.

Chaque table est décrite dans un dictionnaire des données (source de données, champs de la table, …). Des mémos chiffrés sont également mis à disposition pour restituer quelques dénombrements principaux.

## Tables disponibles
### t_geo_com
[Référentiel géographique](https://www.data.gouv.fr/fr/datasets/referentiel-geographique-t-geo-com/) qui fait correspondre à  chaque commune / arrondissement municipal qui existe ou qui a existé depuis 2010 son appartenance aux découpages administratifs, aux EPCI, aux découpages nationaux de l'Insee (bassins de vie, zones d'emploi, ...) et aux découpages nationaux utilisés en Ars (territoires de démocratie en santé, codes géographiques PMSI, ...).
Mise à jour annuelle à partir des données publiées par l'Insee

### t_finess
[Référentiel des structures Finess](https://www.data.gouv.fr/fr/datasets/referentiel-finess-t-finess/) qui fait correspondre à chaque structure Finess, juridique ou géographique, qui existe ou qui a existé depuis 2004, ses principales caractéristiques : statut juridique, catégorie, adresse, ...
Mise à jour bimestrielle à partir des extractions Finess publiées sur [data.gouv.fr](https://www.data.gouv.fr/).

### t_popmun_com
[Table](https://www.data.gouv.fr/fr/datasets/population-municipale-t-popmun-com/) qui restitue par commune / arrondissement municipal, âge et sexe la population municipale.
Mise à jour annuelle à partir des données du recensement de la population publiée par l'Insee.

### t_actsoins_finess
[Table](https://www.data.gouv.fr/fr/datasets/actvites-de-soins-autorisees-et-mises-en-oeuvre-au-sein-des-structures-finess-t-actsoins-finess/) qui recense - à différentes dates - les activités de soins (médecine, chirurgie,  obstétrique, urgences, SSR, ...) autorisées et mises en oeuvre au sein des structures Finess.
Mise à jour bimestrielle à partir des extractions Finess publiées par [data.gouv.fr](https://www.data.gouv.fr/).

### t_eml_finess
[Table](https://www.data.gouv.fr/fr/datasets/equipements-et-materiels-lourds-mis-en-oeuvre-au-sein-des-structures-finess-t-eml-finess/) qui recense - à différentes dates - les équipements et matériels lourds (scanner, IRM, ...) autorisés et mis en oeuvre au sein des structures Finess.
Mise à jour bimestrielle à partir des extractions Finess publiées par [data.gouv.fr](https://www.data.gouv.fr/).

### t_actms_finess
[Table](https://www.data.gouv.fr/fr/datasets/equipements-sociaux-et-medico-sociaux-actifs-des-structures-finess-t-actms-finess/) qui recense - à différentes dates - les équipements sociaux et médico-sociaux, actifs au sein des structures Finess.
Mise à jour bimestrielle à partir des extractions Finess publiées sur [data.gouv.fr](https://www.data.gouv.fr/).

### t_corresp_com
[Table](https://www.data.gouv.fr/fr/datasets/correspondance-entre-le-libelle-dune-commune-et-son-code-commune-t-corresp-com/) de correspondance entre un libellé de commune et son code-commune Insee. A un code-commune correspond plusieurs orthographes du libellé de la commune (avec ou sans article, avec ou sans accents, avec ou sans trait d'union, ...).
Mise à jour annuelle à partir des données publiées par l'Insee.

### t_corresp_cp
[Table](https://www.data.gouv.fr/fr/datasets/correspondance-code-postal-communes-2019-t-corresp-cp/) de correspondance entre un code postal et la liste des communes 2019 couvertes par ce code postal. Mise à jour annuelle à partir des données publiées sur dataNOVA (le portail Open Data du Groupe La Poste).

