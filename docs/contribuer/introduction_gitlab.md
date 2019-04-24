# Introduction à GitLab
<!-- SPDX-License-Identifier: MPL-2.0 -->

La documentation du SNDS est réalisée collaborativement sur [GitLab](https://gitlab.com/healthdatahub/documentation-snds).

Une formation est préférable pour manipuler facilement cette plateforme.
Les mainteneurs du projet organisent de telles formations (gratuites). N'hésitez pas à nous solliciter !

Nous présentons ici une introduction à GitLab pour les autodidactes.  

## Texte Markdown

`git` permet de collaborer facilement sur du contenu textuel _"brut"_.  

La mise en forme du texte brut est indiquée avec des balises **Markdown**. 
Ce texte est alors automatiquement mis sous la forme d'un site internet statique avec VuePress.
 
Se référer au [tutoriel Markdown](tutoriel_markdown.md) pour plus de détails. 

 
## Concepts clés de git et GitLab

- `commit` : Un commit est un ensemble de modifications sur un ou plusieurs fichiers
([exemple](https://gitlab.com/healthdatahub/documentation-snds/commit/553cdd3b07bd2853e7f642b077f48e493413c00e)). 

À chaque commit est associé une description concise. 
L'enchaînement des commits représente l'[historique](https://gitlab.com/healthdatahub/documentation-snds/commits/master) des modifications.  

- `branche` : Les branches permettent de gérer plusieurs versions de travail parallèles. 

Le site web de la documentation publie la branche principale, appelée `master`. 
Les branches de travail sont nommées selon l'objet des modifications apportées. 

- `merge-request` : Les merge-request (MR) permettent d'intégrer une branche de travail dans la branche principale.
 
Les modifications proposée dans la branche de travail sont discutées et validées avant d'être publiées. 
Pour cela, les relecteurs commentent la MR dans l'onglet *Discussion*, ou font des remarques ligne par ligne dans l'onglet *Changes*. 

Par défaut, seul l'auteur initial d'une branche en modifie le contenu, afin d'éviter des conflits d'édition. 
Si un relecteur souhaite ajouter des modifications (=commits) sur une branche, il en fait d'abord la demande. 

Lors de l'intégration d'une MR à la branche master, d'éventuels conflits d'éditions sont gérés par les mainteneurs. 
Pour limiter ces conflits, il faut limiter la divergence des branches de travail par rapport à la branche master. 
On découpera donc les contributions en petit morceaux cohérents, rapides à valider et intégrer.

## Édition en ligne sur gitlab.com

La solution la plus simple pour éditer la documentation est d'utiliser le site web gitlab.com.

::: tip GitLab Web IDE
Nous décrivons ici le mode d'édition simple, fichier par fichier.
Gitlab offre une interface d'édition plus aboutie, appelée `Web IDE`, que nous vous invitons à tester également.
:::

::: tip Interface en français 
Il est possible de paramétrer GitLab en français dans l'onglet `Preferences` des `Settings` de votre compte. 
Ce guide se base sur la version anglaise de l'interface, plus courante.
:::

**1- Ouvrir le fichier en édition**

En  bas de chaque page de la documentation se trouve un lien, vous invitant à éditer le fichier sur GitLab.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_gitlab/editer_sur_gitlab.png" alt="Éditer sur GitLab" width="200"/>
</p>

Vous pouvez aussi naviguer dans les fichiers du dossier [docs/documentation](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/documentation), et  ouvrir l'interface d'édition avec le bouton `Edit`.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_gitlab/edition.png" alt="interface edition" width="600"/>
</p>


**2- Enregistrer les modifications**

Un formulaire en bas de page permet d'enregistrez vos modifications dans un commit. 
- Ecrivez un message décrivant les modifications apportées : une description courte, puis éventuellement une description plus longue séparée par une ligne vide.
- Choississez le nom d'une nouvelle branche de travail.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_gitlab/commit.png" alt="commit" width="600"/>
</p>

**3- Ouverture d'une merge-request**

Dans l'étape précédente, GitLab coche par défaut l'option de démarrer une nouvelle merge-request. 

Une page s'ouvre alors pour configurer cette merge-request.

- Vous pouvez directement soumettre votre merge request en bas de page.
- Vous pouvez apporter des précisions, en clarifiant le titre ou en écrivant une description.
- Vous pouvez attribuer le travail de relecture à une personne ("Assignee"). 
- Vous pouvez indiquer que cette merge-request est un travail en cours, en débutant le titre par `WIP:`.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_gitlab/wip.png" alt="wip" width="600"/>
</p>


**4- Ajouter des commits sur une branche existante**

Il est possible d'ajouter des commits sur une branche de travail existante. 
Il faut pour cela sélectionner la branche de travail dans la vue fichier. 

<p style="text-align:center;">
<img src="/assets/img/tutoriel_gitlab/switch_branch.png" alt="changer branche" width="400"/>
</p>

On peut alors éditer de nouveaux documents, a priori ceux du dossier [docs/documentation](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/documentation). 
 Les nouveaux commits apparaîtront alors dans la merge request associée à cette branche.
