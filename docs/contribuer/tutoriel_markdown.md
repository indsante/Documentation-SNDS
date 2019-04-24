# Tutoriel Markdown
<!-- SPDX-License-Identifier: MPL-2.0 -->

La documentation est rédigée en texte brut, avec des balises **Markdown** pour indiquer la mise en forme. Cette page présente les balises les plus courantes. 

Un tutoriel interactif en anglais est disponible sur le site [commonmark.org](https://commonmark.org/help/).

## Titres
 
Les titres sont balisés par un ou plusieurs dièses `#` en début de ligne.

```
# Titre de premier niveau
## titre de second niveau
```

## *Italique*, **Gras**

Encadrer du texte par *une étoile* `*` pour le mettre en italique, 
par *deux étoiles* `**` pour le mettre en gras.

```
*italique*
**gras**
```

## Retour à la ligne, Changement de paragraphe

*Attention : Les retour à la ligne simples sont ignorés.*

Ajouter 2 espaces en fin de ligne pour un simple retour à la ligne.  
Sauter une ligne pour changer de paragraphe.

## Lien hypertexte

Pour ajouter un lien, mettre son texte entre crochets, suivi du lien entre parenthèses.

```
[texte du lien](http://www.monlien.fr)
```

Pour un lien vers un fichier interne au projet, indiquer le chemin relatif depuis le dossier _caché_
[docs/.vuepress/public](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/.vuepress/public).

```
[lien vers docs/.vuepress/public/assets/img/logoSNDS.jpg](/assets/img/logoSNDS.jpg)
```

Ajouter un point d'exclamation `!` devant le lien pour afficher une image.

```
![texte alternatif de l'image](/assets/img/logoSNDS.jpg)
```

Utiliser des balises html si vous souhaitez préciser les dimensions de l'image.
