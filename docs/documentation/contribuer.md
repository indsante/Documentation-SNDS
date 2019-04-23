# Contribuer
<!-- SPDX-License-Identifier: MPL-2.0 -->

Bienvenue sur le guide de contribution !

La documentation du SNDS est réalisée collaborativement sur [GitLab](https://gitlab.com/healthdatahub/documentation-snds).

Nous présentons d'abord le type de contributions que vous pouvez apporter. Nous expliquons ensuite selon quelles modalités, puis nous entrons dans des considérations techniques plus avancées.

## Types de contributions

### Partage de documents existants

De nombreux organismes ont documenté le SNDS pour des besoins internes. Ce travail n'est pas accessibles à la communauté plus large des utilisateurs du SNDS. Une première contribution de grande valeur consiste donc à partager publiquement ces documents existants.

Vous pouvez publier des documents sur le site internet de votre organisation. Nous les référencerons via un lien hypertexte dans la section des [ressources externes](ressources#autres-ressources-disponibles-en-ligne). 

Vous pouvez également publier des documents sur ce projet GitLab. Nous ajouterons un lien de téléchargement dans la section des [documents partagés via ce projet](ressources#documents-partages-sur-cette-documentation).


::: tip Note
Une **licence MPL-2.0** est appliquée sur tous les contenus de ce projet : documents, textes, images, etc. 

Cette licence autorise une libre réutilisation des contenus. Elle impose cependant que toute nouvelle version d'un contenu doit citer la source, et doit être publiée sous la même licence afin de garantir les mêmes droits (propriété [copyleft](https://fr.wikipedia.org/wiki/Copyleft)). 
:::

### Création de nouvelles pages de documentation collaborative

Les documentations existantes sont éclatées dans de multiples formats : pdf, word, excel, powerpoint, etc. Ces formats rendent difficiles la navigation, la mise à jour et la collaboration. La documentation collaborative est rédigée en texte brut, sur lequel il est facile de collaborer via GitLab. 

Une excellente contribution consiste donc à créer de nouvelles pages de documentation textuelles, par exemple à partir du contenu de documents déjà partagés. Nous organiserons progressivement les pages ainsi crées selon des thématiques cohérentes.   

### Amélioration des pages de documentation collaborative 

Les contributions visant à corriger des erreurs ou à compléter des contenus existants sont très précieuses. Toute amélioration, même d'apparence mineure comme la correction de fautes d'orthographe, améliorera pour tous la qualité du contenu.


## Canaux de contributions
### Email

Pour contribuer à la documentation, le plus simple est d'écrire un email aux mainteneurs du projets :
- Lab santé - DREES <<ld-lab-github@sante.gouv.fr>>
- Olivier de Fresnoye - INDS <<olivier.defresnoye@indsante.fr>>

### Issues

En créant un compte sur gitlab.com, vous pourrez utiliser le système de tickets appelés **issues**, dans cet 
[onglet](https://gitlab.com/healthdatahub/documentation-snds/issues). 

Les issues sont le canal à privilégier pour remonter une erreur ou proposer une idée.  
Chaque issue est l'occasion d'une discussion ouverte pour résoudre le problème évoqué.

### Merge-Request

GitLab permet à chacun de proposer des modifications via des **merge-request**, listées dans cet 
[onglet](https://gitlab.com/healthdatahub/documentation-snds/merge_requests). 

Une formation est préférable pour manipuler facilement cette fonctionnalité. 
Contacter nous pour organiser une formation, à distance ou lors d'une réunion physique. N'hésitez pas ! 

Pour les autodidactes, nous proposons ci-dessous un bagage technique minimal.

## Explications techniques

### Markdown

La mise en forme du texte brut est indiquée avec des balises **Markdown** (cf [Tutoriel Markdown](tutoriel_markdown.md)). Ce texte est alors automatiquement publié sous la forme d'un site internet statique avec VuePress. 


### Concepts clés de git et GitLab

- `commit` : Un commit est un ensemble de modifications sur un ou plusieurs fichiers
([exemple](https://gitlab.com/healthdatahub/documentation-snds/commit/553cdd3b07bd2853e7f642b077f48e493413c00e)). 

À chaque commit est associé une description concise. 
L'enchaînement des commits représente l'[historique](https://gitlab.com/healthdatahub/documentation-snds/commits/master) des modifications.  

- `branche` : Les branches permettent de gérer plusieurs versions de travail parallèles. 

Le site web de la documentation publie la branche principale, appelée `master`. 
Les branches de travail sont nommées selon l'objet des modifications apportées. 

- `merge-request` : Les merge-request (MR) permettent d'intégrer une branche de travail dans la branche principale.
 
Les modifications seront discutées et validées avant d'être publiées.  
Pour cela, les relecteurs commenteront la MR dans son ensemble dans l'onglet *Discussion*, ou ligne par ligne dans l'onglet *Changes*. 

Par défaut, on considère que seul l'auteur initial d'une branche enregistre de nouveaux commits dessus. Si un relecteur souhaite ajouter des commits plutôt que des commentaires, il en demande d'abord le droit à l'auteur afin d'éviter des conflits d'édition.

Lors de l'intégration d'une MR à la branche master, d'éventuels conflits d'éditions sont gérés par les mainteneurs. Pour limiter ces conflits, le principe est d'éviter la divergence des branches de travail, en les intégrant rapidement à la branche master. On découpera donc plutôt sur les contributions en petit morceaux cohérents, rapides à valider et intégrer.

### Édition avec gitlab.com

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

En  bas de chaque page de la documentation se trouve un lien, vous invitant à éditer le fichier sur gitlab.

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

Il est possible d'ajouter des commits sur une branche existante. Il apparaîtront alors dans la merge request associée à la branche 

Il faut pour cela sélectionner la branche correspondante dans la vue fichier.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_gitlab/switch_branch.png" alt="changer branche" width="400"/>
</p>

On peut alors éditer de nouveaux documents, a priori ceux du dossier [docs/documentation](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/documentation), et enregistrer de nouveaux commits. 

### Développement local

Les développeurs peuvent lancer une version locale du site internet avec les commandes suivantes

- `yarn install` : installer les modules npm 
- `yarn docs:dev` : démarrer le serveur de développement 
- Votre navigateur reproduira alors en temps réel vos modifications sur le texte

Voici les principaux emplacements à éditer

- `docs/documentation` : fichiers de documentation
- `docs/.vuepress/public/assets` : ressources fichiers ou images
- `docs/.vuepress/config.js` : configuration du site, notamment des barres de navigation 

## Ajout de nouveaux fichiers

Ne pas hésiter à demander de l'aide pour ces opérations. 

### Nouvelle page de documentation - texte

Les fichiers de documentation textuels sont stockés dans le dossier [docs/documentation](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/documentation).

Pour créer une nouvelle page de documentation, copier le contenu du modèle présent dans le fichier `modele_markdown.md`.

Pour que votre nouvelle page apparaisse dans le menu de navigation, 
il faut l'ajouter dans la variable `sidebar` du fichier de configuration 
[docs/.vuepress/config.js](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/.vuepress/config.js). 

### Nouveau fichier non textuel

Des fichiers dans un format non textuel peuvent être partagés dans la documentation collaborative. 
Ils seront mis à disposition via un lien de téléchargement.

Note : Préférer tant que possible des pages de documentation textuelles. 
Elle permettent de collaborer efficacement via GitLab pour les améliorer. 
De plus, elles sont directement lisible dans le navigateur, sans téléchargement qui est un frein à la consultation.

Pour ajoutez un nouveau fichier, merci de bien vouloir : 
- Vérifier que vous avez les droits pour le publier 
- Ajouter l'identifiant de licence `MLP-2.0` _dans_ le document, au début
- Le nommer selon le format `date`_`auteur`_`nom-du-fichier`_MPL-2.0.`extension`
    - `date` : a minima l'année, éventuellement le mois et le jour, au format AAAA-MM-JJ 
    - `auteur` : nom court de l'organisation détentrice des droits sur le document
    - `nom-du-fichier` : sans espace, car les liens devront sinon utiliser `%20`
    - `extension` : par exemple `.csv`, `.pdf`, `.odp`. Préférer des formats interopérables ouverts.
- L'ajouter dans le dossier _caché_ [docs/.vuepress/public/assets/src](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/.vuepress/public/assets/src).
- Ajouter un lien dans la page `docs/documentation/ressources.md`, en mentionnant la licence MPL-2.0

### Nouvelle image

Les images sont stockées dans le dossier _caché_ [docs/.vuepress/public/assets/img](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/.vuepress/public/assets/img). 

Vous pouvez afficher une image dans une page de documentation via un lien hypertexte (cf page [tutoriel Markdown](tutoriel_markdown.md#lien-hypertexte)).

Si une image provient d'un document tierce, par exemple une présentation powerpoint :
- Enregistrer ce fichier pour permettre des évolutions de l'image (cf section précédente).
- Mettre la ou les images issue du document dans un sous-dossier du même nom. 
Voici un exemple d'arborescence obtenue sous le dossier `docs/.vuepress/public`:
    - assets
        - img
            - **2019_INDS_trouver-la-doc-sur-le-portail-snds_MPL-2.0**
              - image1.png
              - image2.png
        - src
            - **2019_INDS_trouver-la-doc-sur-le-portail-snds_MPL-2.0**.pptx

