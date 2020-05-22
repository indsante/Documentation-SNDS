# Tutoriel Markdown
<!-- SPDX-License-Identifier: MPL-2.0 -->

La documentation est rédigée en texte brut, avec des balises **Markdown** pour indiquer la mise en forme. Cette page présente les balises les plus courantes. 

Un tutoriel interactif en anglais est disponible sur le site [commonmark.org](https://commonmark.org/help/).

## Titres
 
Les titres sont balisés par un ou plusieurs dièses `#` en début de ligne.

```
# Titre de premier niveau
## Titre de second niveau
### Titre de troisième niveau
```

## *Italique*, **Gras**

Encadrer du texte par *une étoile* `*` pour le mettre en italique, 
par *deux étoiles* `**` pour le mettre en gras.

```
*italique*
**gras**
```

## Retours à la ligne, changements de paragraphe

*Attention : Les retour à la ligne simples sont ignorés.*

Ajouter 2 espaces en fin de ligne pour un simple retour à la ligne.  
Sauter une ligne pour changer de paragraphe.

## Listes
### Listes à puces
```
* élément 1
    * sous-élément 1
    * sous-élément 2
* élément 2
```
Résultat : 
* élément 1
    * sous-élément 1
    * sous-élément 2
* élément 2

### Listes numérotées
```
1. élément 1
    1. sous-élément 1
    2. sous-élément 2
2. élément 2
```
Résultat : 
1. élément 1
    1. sous-élément 1
    2. sous-élement 2
2. élément 2

## Lignes horizontales
```
----
```
Résultat :

----


## Introduire du code
Pour introduire du code au **sein d'un paragraphe**, il faut encadrer ledit code par des **accents graves** (*backquotes*) `` ` ``.
```
`PRS_NAT_REF`
```
Résultat : ``` PRS_NAT_REF ```.

Pour introduire un **bloc de code**, il faut encadrer ledit code par deux groupes de trois accents graves et préciser le langage de programmation pour une coloration syntaxique adaptée.

````
```sql
PROC SQL;
    %connectora;
    CREATE TABLE orauser.cmuc as select * from connection to oracle (
        SELECT DISTINCT ben_idt_ano
        FROM ir_orc_r
        WHERE ben_cta_typ=89
        AND mll_cta_ds < to_date ('20180101','YYYYMMDD')
        AND (mll_cta_dsf > to_date('20170101','YYYYMMDD') OR mll_cta_dsf is null));
    disconnect from oracle;
QUIT;
```
````

Résultat :
```sql
PROC SQL;
    %connectora;
    CREATE TABLE orauser.cmuc as select * from connection to oracle (
        SELECT DISTINCT ben_idt_ano
        FROM ir_orc_r
        WHERE ben_cta_typ=89
        AND mll_cta_ds < to_date ('20180101','YYYYMMDD')
        AND (mll_cta_dsf > to_date('20170101','YYYYMMDD') OR mll_cta_dsf is null));
    disconnect from oracle;
QUIT;
```

## Liens hypertextes
Pour ajouter un lien, mettre le texte à afficher entre crochets puis le lien entre parenthèses. Exemples avec des liens externes et internes :

### Liens externes
Utiliser l'URL du site pour une page web hors documentation, par exemple vers le site de la Drees :
```
[texte du lien](https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/)
```
Résultat : [texte du lien](https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/)

### Liens internes
Utiliser les chemins **relatifs** pour une page, un fichier ou image de la documentation.

Rappel : `../` remonte d'un cran dans l'arborescence, `../..` de deux crans etc.

```
[texte du lien](../glossaire/GHM.md)
```
Résultat : [texte du lien](../../glossaire/GHM.md)

::: warning Lien vers tables
Les chemins des pages de description des tables ne sont pas faciles à trouver.
Le plus simple est d'utiliser les **permaliens** "/tables/" + nom de la table
```
[Lien vers la page de la table ER_PRS_F](/tables/ER_PRS_F)
```
Résultat : [Lien vers la page de la table ER_PRS_F](/tables/ER_PRS_F)
:::

### Inclure une image
Pour inclure une image, il faut tout d'abord la téléverser dans Gitlab (voir fiche [Ajouter des fichiers](https://documentation-snds.health-data-hub.fr/contribuer/nouveau_fichier.html)). 

1. Pour afficher une image, ajouter un **point d'exclamation** devant son chemin ou son URL.

```
![texte alternatif de l'image](../../files/images/logo/logoSNDS.jpg)
```
Résultat : ![texte alternatif de l'image](../../files/images/logo/logoSNDS.jpg)

2. Pour préciser les dimensions de l'image, il faut utiliser des balises html.
```
<img src="../../files/images/logo/logoSNDS.jpg" alt="Éditer sur GitLab" width="100px"/>
```
Résultat : <img src="../../files/images/logo/logoSNDS.jpg" alt="Éditer sur GitLab" width="100px"/>

3. Légende

Pour ajouter une légende[^legende], on écrit une ligne de texte en italique sous l'image.
Pour que ce texte soit **en dessous** de l'image, insérer deux espaces à la fin de la ligne d'insertion de l'image.

[^legende]: Mardown n'a pas à proprement parler de notion de légende.

```
![texte alternatif de l'image](../../files/images/logo/logoSNDS.jpg)    
*Logo SNDS* 
```
Résultat :

![Editer sur Gitlab](../../files/images/logo/logoSNDS.jpg)  
*Logo SNDS* 

4. Pour centrer l'image, des balises html doivent également être utilisées :
```
<p align="center">
<img src="../../files/images/logo/logoSNDS.jpg" width="100px"/>
</p>
```
Résultat :

<p style="text-align:center;">
<img src="../../files/images/logo/logoSNDS.jpg" alt="Éditer sur GitLab" width="100"/>
</p>

### Visualiser un pdf
La visualisation de pdf n'est pas supporté par le format Markdown. Une solution consiste à utiliser les balises HTML suivante: 

```
<p style="text-align: center;">
<object data="../../files/images/tutoriel_gitlab/2020-03-30_HDH_Cheatsheet-markdown_MLP-2.0.pdf" type="application/pdf" width="500px" height="450px">
    <embed src="../../files/images/tutoriel_gitlab/2020-03-30_HDH_Cheatsheet-markdown_MLP-2.0.pdf" type="application/pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="../../files/images/tutoriel_gitlab/2020-03-30_HDH_Cheatsheet-markdown_MLP-2.0.pdf">Download PDF</a>.</p>
    </embed>
</object>
</p>
```
Un exemple de visualisation est disponible dans la section [Cheat Sheet](Cheat_Sheet.md)

## Notes de bas de page
Il est possible d'ajouter des notes de bas de page dans la documentation. Les notes de bas de page sont principalement à utiliser pour les références bibliographiques. Pour des usages tels que les définitions, préférer des liens vers des fiches de glossaire.

1. Note de bas de page courte (chiffre ou lettre)  
`[^id]` à l’endroit d’insertion. `id` peut être n'importe quel texte ou nombre (sans espace). Il est possible d'avoir plusieurs points d'insertion dans une note.

2. Note de bas de page longue (paragraphe)  
`[^contenu de la note]`. Les paragraphes suivants sont indentés, pour indiquer qu'ils appartiennent à la note. 

## Tableaux
Pour écrire des tableaux, le plus simple est de copier-coller les cellules du tableau dans GitLab depuis un outil de tableur tel qu'Excel. 

Il est aussi possible d'utiliser des outils dédiés comme [Markdown tables generator](https://www.tablesgenerator.com/markdown_tables#) pour générer la table.

Les `|` indiquent les colonnes et les `-` la délimitation entre la ligne des noms de colonnes et le reste du tableau.
```
| Colonne 1 | Colonne 2 | Colonne 3 |
|-----------|-----------|-----------|
| cellule 1 | cellule 2 | cellule 3 |
|           |           |           |
|           |           |           |
```
Résultat :

| Colonne 1 | Colonne 2 | Colonne 3 |
|-----------|-----------|-----------|
| cellule 1 | cellule 2 | cellule 3 |
| cellule 4 | cellule 5 | cellule 6 |
| cellule 7 | cellule 8 | cellule 9 |

## Les blocs

**Note** : cette syntaxe est utilisée par VuePress, mais pas GitLab

Elle fonctionne sur le site de documentation en ligne et lors de la prévisualisation des branches, mais pas dans l'onglet `Preview` de GitLab.

````
::: tip Titre
Texte
:::

::: warning Titre
Texte
:::

::: danger Titre
Texte
:::

::: details Titre
Texte
:::
````
Résultat :

::: tip Titre
Texte
:::

::: warning Titre
Texte
:::

::: danger Titre
Texte
:::

::: details Titre
Texte
:::


