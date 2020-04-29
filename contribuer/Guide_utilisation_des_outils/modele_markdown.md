# Modèle Markdown
<!-- SPDX-License-Identifier: MPL-2.0 -->

Description du contenu de la page

## Mise en page courante

### Italique et gras

Texte en *italique*

Texte en **gras**

### Listes

Liste à puce
- premier niveau
- premier niveau
    - second niveau
    - second niveau
- premier niveau

Liste numerotée
1. premier niveau
1. premier niveau
    1. second niveau
    1. second niveau
1. premier niveau

## Inclure des liens

### Liens externes 

Lien vers url externe
[texte du lien](http://example.com/)

### Liens internes

Lien vers document interne
[texte du lien](../../glossaire/GHM.md)

## Inclure des images

Pour afficher une image, ajouter un point d'exclamation devant son
chemin ou son URL.  
![texte alternatif de l'image](../../files/images/logo/logoSNDS.jpg)

Utilisez des balises html, pour une image centrée et de largeur 100px fixée.
<p style="text-align:center;">
<img src="../files/images/logo/logoSNDS.jpg" width="100"/>
</p>

## Inclure du code
Pour introduire du code au sein d’un paragraphe, il faut encadrer le dit code par des accents graves.  
*Exemple:*  `PRS_NAT_REF` 

Pour introduire un bloc de code, il faut encadrer ledit code par deux groupes de trois accents graves et préciser le langage de programmation pour une coloration syntaxique adaptée.

*Exemple:* 
```sql
SELECT * 
FROM SNDS
```
