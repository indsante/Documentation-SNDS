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
[texte du lien](http://example.com/)
```

Pour un lien vers une autre page, un fichier ou une image, utiliser des chemins relatifs.

```
[lien vers images/logo/logoSNDS.jpg depuis introduction/snds.md](../files/images/logo/logoSNDS.jpg)
```

Ajouter un point d'exclamation `!` devant le lien pour afficher une image.

```
![texte alternatif de l'image](../files/images/logo/logoSNDS.jpg)
```

Utiliser des balises html si vous souhaitez préciser les dimensions de l'image.

## Tableaux

Pour écrire des tableaux, le plus simple est d'utiliser un outil, par exemple 
[Markdown tables generator](https://www.tablesgenerator.com/markdown_tables#).
