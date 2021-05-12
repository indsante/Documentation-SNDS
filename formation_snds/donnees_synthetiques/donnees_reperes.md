# SNDS synthétique de REPERES
<!-- SPDX-License-Identifier: MPL-2.0 -->

Ce jeu de données a été généré de manière aléatoire sur la base de statistiques descriptives du SNDS ainsi qu’une série de règles métier et ressemble à une livraison DEMEX et ne contient aucune donnée de santé personnelle.
Ces données ne sont pas exhaustives, la liste des tables et variables disponibles est disponible dans ce [document](../../files/HDH/20201119_HDH_reperes_MLP-2.0.docx).

## Description
Le jeu de données de synthèse s’étend sur 4 ans (2015 à 2018 inclus) et représente une partie du DCIR et PMSI MCO. Dans les tables du DCIR `NUM_ENQ` est la variable identifiante, pour les tables du PMSI la variable identifiante est `NIR_ANO_17`.

## Accéder aux données
L’accès aux données de synthèse développés par l’équipe EA REPERES (dont les conditions sont décrites dans une convention entre l’équipe EA REPERES et le HDH) est soumis à la signature par tous les utilisateurs d’un [accord de confidentialité](../../files/HDH/20201119_HDH_acces_reperes_MLP-2.0.docx) signé avec le Health Data Hub.

Pour demander un accès vous pouvez envoyer un mail à <opensource@health-data-hub.fr>.

Les données sont mises à disposition via une plateforme dédiée qui permet aux utilisateurs de manipuler directement les données sous deux environnements : 
- jupyterhub pour le développement de programmes en langage python
- RStudio pour le développement de programmes en langage R
Cette plateforme contient aussi les données synthétiques du lab santé de la DREES dans un dossier dédié. 

L'accès à la plateforme se fait via une url avec identifiant et un mot de passe. Ces éléments ainsi que l’adresse IP de l’utilisateur sont enregistrés (ce traitement de données est répertorié sur le registre de traitements du Health Data Hub conformément à l’article 30 du RGPD). 

Pour toutes informations sur les traitements des données à caractère personnel, veuillez vous reporter à la politique de confidentialité du Health Data Hub disponible le site internet du Health Data Hub : https://www.health-data-hub.fr/page/politique-de-confidentialite

## Se former avec ces données
Ces données peuvent être utilisées pour se former au SNDS. 
Les mêmes [notebooks](../notebook.md) que ceux disponibles pour des données de la Drees ont été adaptés aux données Repères et sont disponibles via la plateforme dédiée.

### Citer les données
Pour toute publication autour des travaux réalisés sur ces données, merci de citer la base de données de la manière suivante : 
« Base de données développée par l’équipe EA REPERES [https://www.ea-reperes.com/](Recherche en Pharmaco-épidémiologie et recours aux soins, UPRES EA-7449) et propriété de l’Université de Rennes 1 »
