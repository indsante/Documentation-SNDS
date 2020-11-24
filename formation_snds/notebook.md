# Notebooks pour la prise en main du SNDS à partir des données synthétiques
<!-- SPDX-License-Identifier: MPL-2.0 -->  

## Notebooks mis à disposition par le Health Data Hub
:::tip Notebook
Un notebook est un cahier électronique qui, dans un même document, peut rassembler du texte et du code informatique exécutable. 
:::

Les notebooks produits par le Health Data Hub se destinent aux primo-utilisateurs du SNDS et permettent de gagner une première sensation des données disponibles dans le SNDS et de leur structure, en attendant d'avoir accès aux données réelles. Ils reposent sur les [données synthétiques](donnees_synthetiques.md) et sont consultables et téléchargeables sur le [Gitlab du Health Data Hub]( https://gitlab.com/healthdatahub/formation/exercices-snds/-/tree/master/notebooks).

Les notebooks du Health Data Hub sont disponibles dans les langages *R* et *Python* et se composent d’exercices simples accompagnés de textes explicatifs sur les opérations réalisées. Chaque notebook aborde de manière élémentaire une thématique différente : suivi d’une cohorte, calcul d’indicateurs hospitaliers, identification de diagnostics hospitaliers, etc.

## Les points d’attention
Il est important de garder en tête que les exercices des notebooks reposent sur des données fictives et que les codes sont :
-	*Incomplets* : certains filtres de nettoyage de moindre importance ne sont pas présents (pour plus d’information, reportez-vous à la rubrique dédiée sur la documentation : [Filtres de qualité](../fiches/scalpel_pipeline.md)).
-	*Simplifiés* en termes d’approche méthodologique (dans un but de pédagogie)
-	*Adaptés* à la structure des données fictives qui ne reflète pas nécessairement celle du vrai SNDS (pour plus d’information, reportez-vous à la rubrique dédiée sur la documentation : [SNDS synthétique](donnees_synthetiques.md)).
-	*Non optimisés* pour gagner en temps de requête ; cela peut s’avérer nécessaire lorsqu’on travaille sur le SNDS.


Par conséquent, **le code des exercices ne peut être utilisé tel quel et nécessitera des modifications pour répondre à la réalité du SNDS.**


## Utilisation d’un notebook
Les notebooks pré-exécutés sont entreposés sous format *.ipynb* sur le [Gitlab du Health Data Hub]( https://gitlab.com/healthdatahub/formation/exercices-snds/-/tree/master/notebooks). Vous pouvez directement les consulter sur Gitlab mais vous ne pourrez ni exécuter, ni modifier le code. Pour une utilisation optimale des notebooks, il vous faut télécharger le(s) fichier(s) *.ipynb* et les ouvrir dans un environnement approprié. Si vous n’êtes pas familier avec ce type de fichier, vous pouvez les importer dans une des applications gratuites suivantes disponibles sur internet : [Google Colaboratory]( https://colab.research.google.com/notebooks/intro.ipynb) ou [JupyterLab](https://jupyter.org/try).


:::tip Remerciements
Merci à Céline Le Roy (ARS), Jérôme Brocca (ARS), Philéas Condemine (Drees), Julien Brand (CNAM) et Laure Fernandez de Martini (CNAM) pour leur relecture et leurs propositions d’amélioration.
Certains exercices ont été librement inspirés par les [programmes-snds](programmes.md) sous *.sas* partagés par différentes institutions. L'adaptation en R et Python a été faite par l'équipe data du HDH. 
:::