# Bonnes pratiques SAS sur le portail SNDS
<!-- SPDX-License-Identifier: MPL-2.0 -->


## Introduction

Pour éviter tout abus lors de la création des programmes SAS sur le portail SNDS, certaines règles sont à suivre. Ces règles permettent une bonne exécution de l'ensemble des programmes SAS des utilisateurs sans blocage au niveau des serveurs.

## Régulations dans ORACLE

Les programmes SAS générant des traitements ORACLE sont régulés par les paramétrages positionnés.

Le paramètre « **nombre de sessions simultanées** » détermine la ressource disponible pour chaque utilisateur à un moment donné. Le calibrage est calculé pour que chaque utilisateur puisse avoir **3 requêtes ORACLE qui tournent simultanément** avec de bonnes performances. Il est donc recommandé de s'adapter à cette capacité.

Un incident relatif à une saturation des sessions se traduit par le message suivant :

::: danger
ORACLE connection error: ORA-02391: exceeded simultaneous SESSIONS_PER_USER limit
:::

Solution : Se limiter à 3 requêtes simultanées (lancées indifféremment en direct ou via SAS Asynchrone).

**L'espace de travail d'une requête ORACLE** est appelé « temporary tablespace ». Cet espace est utilisé dès qu'une requête fait des tris ou des calculs. Il est commun à tous les utilisateurs et fait 7 To.\
Il est nécessaire de respecter les consignes données en formation :

**Si les données interrogées sont non agrégées, filtrer la requête sur maximum 3 mois de traitement.**

**Bien encadrer les périodes interrogées en bornant les dates de mise à disposition des données (FLX_DIS_DTD dans DCIR).**

Un utilisateur ne respectant pas les règles d'interrogation peut saturer l'espace à lui tout seul et ainsi empêcher tous les autres de travailler dans des conditions optimales.

Un incident relatif à une saturation de l'espace temporaire se traduit par le message suivant :

::: danger
ORA-01652: impossible d'étendre le segment temporaire de .... dans le tablespace TEMPO_USERSAS
:::

Solution : Bien vérifier la qualité de sa requête avant de l'exécuter, optimiser les filtres, attendre que les requêtes très consommatrices soient terminées (des actions sont entreprises dans ce sens par les informaticiens).

## Utiliser SAS Asynchrone

Pour que les programmes soient pris en compte correctement par SAS Asynchrone, **les caractères spéciaux dans le nom des programmes doivent être bannis**. Seul le « _ » est toléré.

Les programmes contenant d'autres caractères spéciaux restent en file d'attente, sans pouvoir être traités par SAS. **Il n'y a pas de message d'erreur, ni de mail, ni de fichier log généré.**

Pour qu'un programme, dont le résultat se situe dans sasdata1, soit exécuté en asynchrone, il faut que la taille de cet espace personnel (sasdata1) soit suffisante.

Si ce n'est pas le cas, les droits d'écriture sont restreints et le journal est vide.

Une demande d'augmentation de la taille de sasdata1 peut être faite auprès de la CNAM.

## Informations complémentaires

Un fichier "*Bonnes Pratiques SAS_V1.6.doc*" est également disponible sur le portail, ce fichier contient des informations complémentaires à cette fiche.

## Références

::: tip Crédits
Cette fiche provient d'un [document publié](../files/Cnam/2019-10_Cnam_Recommandations-SAS_MPL-2.0.pdf) par la Cnam en octobre 2019
:::
