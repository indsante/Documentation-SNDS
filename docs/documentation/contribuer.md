# Contribuer

Bienvenue sur le guide de contribution !

La documentation du SNDS est hébergée sur [GitHub](https://github.com/indsante/Documentation-SNDS).

GitHub est une plateforme très riche, d'abord conçue pour collaborer sur du code informatique. 

Son premier abord peut être effrayant, d'autant plus que l'interface n'est disponible qu'en anglais. Cette page vous guidera pour contribuer au projet, des aspects les plus simples aux plus avancés.

## Canaux de contributions
### Email

Le canal le plus simple pour contribuer est d'écrire un email aux mainteneurs du projet
([lien](mailto:olivier.defresnoye@indsante.fr,pierre-alain.jachiet@sante.gouv.fr?subject=[documentation-snds]%20Titre)). 

Ils se chargeront d'intégrer votre contribution, via une "issue" ou une "pull-request".  
Merci de structurer votre proposition en commençant par une description succinte.

Les mainteneurs actuels sont :
- Pierre-Alain Jachiet - DREES <<pierre-alain.jachiet@sante.gouv.fr>>
- Olivier de Fresnoye - INDS <<olivier.defresnoye@indsante.fr>>

### Issues

En créant un compte sur github.com, vous pourrez utiliser le système de tickets appelés **issues**, accessible dans cet 
[onglet](https://github.com/indsante/Documentation-SNDS/issues). 

Les issues sont le canal à privilégier pour remonter une erreur ou proposer une idée.  
Chaque issue est l'occasion d'une discussion ouverte pour résoudre le "problème" évoqué.

### Pull-Request

GitHub permet à chacun de proposer des modifications via des **pull-request**, listées dans cet 
[onglet](https://github.com/indsante/Documentation-SNDS/pulls). 

Une formation est préférable pour manipuler facilement les pull-request. 
Contacter nous pour organiser une rapide formation à distance ou lors d'une réunion physique. N'hésitez pas ! 

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

Par défaut, une branche est réservée à son auteur initial pour éviter les conflits d'édition. Se mettre sinon d'accord, par exemple lors de relectures.

- `pull-request` : Les pull-request permettent d'intégrer une branche de travail dans la branche principale.
 
Les modifications seront discutées et validées avant d'être publiées.

D'éventuels conflits d'éditions sont gérés par les mainteneurs. Pour limiter ces conflits, le principe est d'intégrer rapidement les modifications. Proposez plutôt plusieurs petites contributions, simples à valider, que des grosses contributions qui demanderont plus de travail.

### Édition avec github.com

La solution la plus simple pour éditer la documentation est d'utiliser le site web github.com.

Les fichiers se trouvent dans le dossier [docs/documentation](https://github.com/indsante/Documentation-SNDS/tree/master/docs/documentation). Pour éditer un fichier, ouvrir l'interface d'édition symbolisée par un crayon.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_github/edition.png" alt="interface edition" width="300"/>
</p>

Un formulaire en bas de page permet d'enregistrez vos modifications dans un commit. Remplissez une description concise des modifications, et choississez le nom de la branche de travail.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_github/commit.png" alt="commit" width="600"/>
</p>


GitHub vous propose alors directement d'ouvrir une pull-request. Indiquer des détails complémentaire nécessaires à la relecture.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_github/pull_request.png" alt="pull-request" width="600"/>
</p>

Tant qu'elle n'a pas été fusionnée dans la branche principale, il est possible d'ajouter des commit à une une pull-request. Il faut pour cela sélectionner la branche correspondante.

<p style="text-align:center;">
<img src="/assets/img/tutoriel_github/switch_branch.png" alt="changer branche" width="400"/>
</p>

### Édition avec GitHub Desktop

Vous pouvez aussi modifier les fichiers sur vos ordinateurs, avec votre éditeur de texte préféré, puis envoyer vos modifications à GitHub. 

Les développeurs font cela en routine lorsqu'ils développent du code informatique. 
Le programme [GitHub Desktop](https://desktop.github.com/) simplifie la gestion des commits, branches et pull-request, sans nécessiter d'écrire des commandes dans une console.

### Markdown

La documentation est rédigé en texte brut, avec des balises de mise en forme selon le standard **Markdown**. Voici un mémo sur les balises les plus courantes ([exemples supplémentaires](https://fr.wikipedia.org/wiki/Markdown#Quelques_exemples)).

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

Pour un lien vers un fichier interne au projet, indiquer le chemin relatif depuis le dossier 
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
- `.vuepres/public/assets` : ressources fichiers ou images
- `.vuepress/config.js` : configuration du site, notamment des barres de navigation 

### Ajout de ressources

Lorsque vous ajoutez des ressources, merci de bien vouloir : 
- Vérifier que vous avez les droits pour publier cette ressource et y ajouter la licence CC BY SA. 
- Nommer les fichiers : ANNEE AUTEUR NOM DU FICHIER
- Ajouter la référence dans le liste du README en mentionnant la licence CC BY SA 
