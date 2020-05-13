# Partage de documents
<!-- SPDX-License-Identifier: MPL-2.0 -->  
 
## Téléverser un fichier

Des documents de tout format peuvent être partagés dans la documentation collaborative. 
Ils seront mis à disposition via un lien de téléchargement.

Pour ajouter un nouveau fichier, merci de bien vouloir : 
- Vérifier que vous avez les droits pour le publier 

- Le renommer en local au format **date_auteur_nom-du-fichier_MPL-2.0.extension**
    - `date` : a minima l'année, éventuellement le mois et le jour, au format AAAA-MM-JJ 
    - `auteur` : nom court de l'organisation détentrice des droits
    - `nom-du-fichier` : remplacer les espaces par des tirets `-`
    - `MPL-2.0` : identifiant de licence
    - `extension` : par exemple `.csv`, `.pdf`, `.odp`.

::: warning Note
- **Supprimer les espaces** dans les noms de fichiers, car ils compliquent les liens hypertextes (l'espace doit être indiqué par le caractère `%20`). 
- **Ne pas utiliser d'accents ou de caractères spéciaux**
:::

- Ouvrir le dossier où ajouter le fichier 
    - dossier `files/` ([lien gitlab](https://gitlab.com/healthdatahub/documentation-snds/tree/master/files/)), 
    - sous-dossier au nom de votre organisation

- Téléverser le fichier
    - Bouton `+` > `Upload file` 
    - Remplir une description de commit explicite
    - Donner un nom de branche explicite, par exemple `upload-NOM-FICHIER`
    - Ouvrez une merge-request à partir de cette branche
    
- Ajouter un lien de téléchargement sur une page
    - Se placer sur la même branche
    - Trouver le fichier où vous souhaitez mettre le lien 
        - sans doute une page de votre organisation dans la partie [Ressources](../../ressources/README.md)
    - Mentionner le nom de l'organisation et la licence MPL-2.0.


## Nouvelle image

Les images sont un type particulier de fichier, à ajouter comme expliqué ci-dessus.

Les images peuvent être ajoutées dans le dossier `files` ([lien gitlab](https://gitlab.com/healthdatahub/documentation-snds/tree/master/files)), ou dans le dossier générique `images`. 

Vous pouvez ensuite intégrer les images dans une page de documentation via un lien hypertexte précédé d'un point d'exclamation `!` 
(cf [tutoriel Markdown](tutoriel_markdown.md#liens-hypertextes)).

Si une image provient d'un document tierce, par exemple une présentation Powerpoint :
- Ajouter ce document tierce pour permettre des évolutions de l'image en repartant du fichier
- Mettre l'image dans le même dossier, ou dans un sous-dossier du même nom s'il y a plusieurs images

::: warning Attention
L'extension d'une image doit être en **minuscule**, sinon [l'image n'est pas reconnue](https://github.com/vuejs/vuepress/issues/625#issuecomment-401614539). 

Utiliser `.png` ou `.jpg`, **pas** `.PNG` ou `.JPG`.
:::