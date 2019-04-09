# Contribuer
<!-- SPDX-License-Identifier: MPL-2.0 -->

Bienvenue sur le guide de contribution !

La documentation du SNDS est hébergée sur [GitHub](https://github.com/indsante/Documentation-SNDS).

GitHub est une plateforme très riche, d'abord conçue pour collaborer sur du code informatique. 

Son premier abord peut être effrayant, d'autant plus que l'interface n'est disponible qu'en anglais. Cette page vous guidera pour contribuer au projet, des aspects les plus simples aux plus avancés.

Une formation générale sur GitHub est disponible [sur le site OpenClassrooms](https://openclassrooms.com/fr/courses/2342361-gerez-votre-code-avec-git-et-github).

## Canaux de contributions
### Email

Le canal le plus simple pour contribuer est d'écrire un email aux mainteneurs du projet
([lien](mailto:olivier.defresnoye@indsante.fr,ld-lab-github@sante.gouv.fr?subject=[documentation-snds]%20Titre)). 

Ils se chargeront d'intégrer votre contribution, via une "issue" ou une "pull-request".  
Merci de structurer votre proposition en commençant par une description succinte.

Les mainteneurs actuels sont :
- Lab santé - DREES <<ld-lab-github@sante.gouv.fr>>
- Olivier de Fresnoye - INDS <<olivier.defresnoye@indsante.fr>>

### Issues

En créant un compte sur github.com, vous pourrez utiliser le système de tickets appelés **issues**, dans cet 
[onglet](https://github.com/indsante/Documentation-SNDS/issues). 

Les issues sont le canal à privilégier pour remonter une erreur ou proposer une idée.  
Chaque issue est l'occasion d'une discussion ouverte pour résoudre le problème évoqué.

### Pull-Request

GitHub permet à chacun de proposer des modifications via des **pull-request**, listées dans cet 
[onglet](https://github.com/indsante/Documentation-SNDS/pulls). 

Une formation est préférable pour manipuler facilement les pull-request. 
Contacter nous pour organiser une formation, à distance ou lors d'une réunion physique. N'hésitez pas ! 

Nous proposons ci-dessous un bagage technique minimal pour les autodidactes.

## Explications techniques

### Concepts clés de GitHub

- `commit` : Un commit est un ensemble de modifications sur un ou plusieurs fichiers
([exemple](https://github.com/indsante/Documentation-SNDS/commit/553cdd3b07bd2853e7f642b077f48e493413c00e)). 

À chaque commit est associé une description concise. 
L'enchaînement des commits représente l'[historique](https://github.com/indsante/Documentation-SNDS/commits/master) des modifications.  

- `branche` : Les branches permettent de gérer plusieurs versions parallèles. 

Le site web de la documentation publie la branche principale, appelée `master`. 
Les branches de travail sont nommées selon l'objet des modifications apportées. 

- `pull-request` : Les pull-request (PR) permettent d'intégrer une branche de travail dans la branche principale.
 
Les modifications seront discutées et validées avant d'être publiées.  
Pour cela, les relecteurs commenteront directement chaque ligne dans l'onglet *Files changed*, ou la PR dans son ensemble dans l'onglet *Conversation*. 

Par défaut, seul l'auteur initial enregistre de nouveaux commits sur sa branche. Si un relecteur souhaite ajouter des commits plutôt que des commentaires, il en demande d'abord le droit à l'auteur afin d'éviter des conflits d'édition.

Lors de l'intégration d'une PR à la branche master, d'éventuels conflits d'éditions sont gérés par les mainteneurs. Pour limiter ces conflits, le principe est d'éviter la divergence des branches de travail, en les intégrant rapidement à la branche master. On découpera donc plutôt sur les contributions en petit morceaux cohérents, rapides à valider et intégrer.

### Édition avec github.com

La solution la plus simple pour éditer la documentation est d'utiliser le site web github.com.

**1- Ouvrir le fichier en édition**

En  bas de chaque page de la documentation se trouve un lien, vous invitant à éditer le fichier sur github.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_github/editer_sur_github.png" alt="Éditer sur GitHub" width="200"/>
</p>


Vous pouvez aussi naviguer dans les fichiers du dossier [docs/documentation](https://github.com/indsante/Documentation-SNDS/tree/master/docs/documentation), et  ouvrir l'interface d'édition symbolisée par un crayon.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_github/edition.png" alt="interface edition" width="300"/>
</p>


**2- Enregistrer les modifications**

Un formulaire en bas de page permet d'enregistrez vos modifications dans un commit. Remplissez une description concise des modifications, et choississez le nom de la branche de travail.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_github/commit.png" alt="commit" width="600"/>
</p>


**3- Ouverture d'une pull-request**
GitHub vous propose alors directement d'ouvrir une pull-request. Indiquer des détails complémentaires nécessaires à la relecture.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_github/pull_request.png" alt="pull-request" width="600"/>
</p>

**4- Ajouter des commits sur une branche existante**

Il est possible d'ajouter des commit à une pull-request ouverte. Il suffit pour cela de sélectionner la branche correspondante et d'enregistrer de nouveaux commits.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_github/switch_branch.png" alt="changer branche" width="400"/>
</p>

### Édition avec GitHub Desktop

Vous pouvez aussi modifier les fichiers sur vos ordinateurs, avec votre éditeur de texte préféré, puis envoyer vos modifications à GitHub. 

Les développeurs font cela en routine lorsqu'ils développent du code informatique. 
En installant [GitHub Desktop](https://desktop.github.com/), vous pourrez créer vos commits, branches et pull-request directement depuis votre ordinateur et sans ligne de commande.

### Markdown

La documentation est rédigée en texte brut. 
La mise en forme est indiquée par des balises **Markdown**. 
Nous présentons ici les balises les plus courantes de ce standard. 
Voir aussi la page [wikipedia](https://fr.wikipedia.org/wiki/Markdown#Quelques_exemples) ou ce [mémo complet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

#### Titres
 
Les titres sont balisés par un ou plusieurs dièses `#` en début de ligne.

```
# Titre de premier niveau
## titre de second niveau
```

#### *Italique*, **Gras**

Encadrer du texte par *une étoile* `*` pour le mettre en italique, 
par *deux étoiles* `**` pour le mettre en gras.

```
*italique*
**gras**
```

#### Retour à la ligne, Changement de paragraphe

*Attention : Les retour à la ligne simples sont ignorés.*

Ajouter 2 espaces en fin de ligne pour un simple retour à la ligne.  
Sauter une ligne pour changer de paragraphe.

#### Lien hypertexte

Pour ajouter un lien, mettre son texte entre crochets, suivi du lien entre parenthèses.

```
[texte du lien](http://www.monlien.fr)
```

Pour un lien vers un fichier interne au projet, indiquer le chemin relatif depuis le dossier _caché_
[docs/.vuepress/public](https://github.com/indsante/Documentation-SNDS/tree/master/docs/.vuepress/public).

```
[lien vers docs/.vuepress/public/assets/img/logoSNDS.jpg](/assets/img/logoSNDS.jpg)
```

Ajouter un point d'exclamation `!` devant le lien pour afficher une image.

```
![texte alternatif de l'image](/assets/img/logoSNDS.jpg)
```

Utiliser des balises html si vous souhaitez préciser les dimensions de l'image.

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

Les fichiers de documentation textuels sont stockés dans le dossier [docs/documentation](https://github.com/indsante/Documentation-SNDS/tree/master/docs/documentation).

Pour créer une nouvelle page de documentation, copier le contenu du modèle présent dans le fichier `modele_markdown.md`.

Pour que votre nouvelle page apparaisse dans le menu de navigation, 
il faut l'ajouter dans la variable `sidebar` du fichier de configuration 
[docs/.vuepress/config.js](https://github.com/indsante/Documentation-SNDS/tree/master/docs/.vuepress/config.js). 

### Nouveau fichier non textuel

Des fichiers dans un format non textuel peuvent être partagés dans la documentation collaborative. 
Ils seront mis à disposition via un lien de téléchargement.

Note : Préférer tant que possible des pages de documentation textuelles. 
Elle permettent de collaborer efficacement via GitHub pour les améliorer. 
De plus, elles sont directement lisible dans le navigateur, sans téléchargement qui est un frein à la consultation.

Pour ajoutez un nouveau fichier, merci de bien vouloir : 
- Vérifier que vous avez les droits pour le publier 
- Ajouter l'identifiant de licence `MLP-2.0` _dans_ le document, au début
- Le nommer selon le format `date`_`auteur`_`nom-du-fichier`_MPL-2.0.`extension`
    - `date` : a minima l'année, éventuellement le mois et le jour, au format AAAA-MM-JJ 
    - `auteur` : nom court de l'organisation détentrice des droits sur le document
    - `nom-du-fichier` : sans espace, car les liens devront sinon utiliser `%20`
    - `extension` : par exemple `.csv`, `.pdf`, `.odp`. Préférer des formats interopérables ouverts.
- L'ajouter dans le dossier _caché_ [docs/.vuepress/public/assets/src](https://github.com/indsante/Documentation-SNDS/tree/master/docs/.vuepress/public/assets/src).
- Ajouter un lien dans la page `docs/documentation/ressources.md`, en mentionnant la licence MPL-2.0

### Nouvelle image

Les images sont stockées dans le dossier _caché_ [docs/.vuepress/public/assets/img](https://github.com/indsante/Documentation-SNDS/tree/master/docs/.vuepress/public/assets/img). 

Vous pouvez afficher une image dans une page de documentation via un lien hypertexte (cf section [Markdown](#markdown)).

Si une image provient d'un document tierce, par exemple une présentation powerpoint :
- Enregistrer ce fichier pour permettre des évolutions de l'image (cf section précédente).
- Mettre la ou les images issue du document dans un sous-dossier du même nom. 
Voici un exemple d'arborescence obtenue sous le dossier`docs/.vuepress/public`:
    - assets
        - img
            - **2019_INDS_trouver-la-doc-sur-le-portail-snds_MPL-2.0**
              - image1.png
              - image2.png
        - src
            - **2019_INDS_trouver-la-doc-sur-le-portail-snds_MPL-2.0**.pptx

