# Partage de documents
<!-- SPDX-License-Identifier: MPL-2.0 -->  
 
De nombreuses organisations ont documenté le SNDS pour des besoins internes. 
Ce travail n'est souvent pas accessible à la communauté plus large des utilisateurs du SNDS. 
Une contribution de grande valeur consiste donc à partager publiquement des documents existants dans votre organisation.

## Où publier des documents (hors programmes) ?
Vous avez deux options pour publier ces documents

- un dossier servant de [boite aux lettres](https://gitlab.com/healthdatahub/documentation-snds/-/tree/master/Boite_aux_lettres) est disponible sur Gitlab. Vous pouvez y déposer des documents. Nous nous occuperons de les placer dans les dossiers adéquats et les documents pourront être convertis en page de documentation si cela est jugé approprié. 

- ou directement dans le dossier de votre [organisme](https://gitlab.com/healthdatahub/documentation-snds/-/tree/master/ressourceses). Les documents pourront être également être convertis en page de documentation.

- sur le site internet de votre organisation.
Ils seront référencés par un lien hypertexte dans la section [ressources externes](../../aller_plus_loin/internet.md). 

::: tip
N'oubliez pas de renommer le fichier partagé. Le nom doit être sous la forme : Année-Mois-Jour_Organisation_nom-fichier_MLP-2.0.extension`
:::

## Partage de programmes
Le partage de programmes ou scripts d'analyses est très utile pour la communauté.

Dans les fiches de courtes sections de code sont souvent partagées.

Les programmes plus conséquents, par exemple un script complet d'analyse, sont partagés dans le dépôt dédié [programme-snds](https://gitlab.com/healthdatahub/programmes-snds). Les programmes partagés dans ce dépôt dédié sont sous licence APACHE 2.0. Une [fiche](../../formation_snds/programmes.md) les répertoriant est disponible sur le site de la documentation.

## Comment créer un nouveau dossier
Pour créer un nouveau dossier, naviguer dans le dossier de votre choix, et sélectionnez **Nouveau dossier** dans le menu déroulant `+`. 

<p align="center">
<img src="../../files/images/tutoriel_gitlab/2020-03-10_HDH_ajout-dossier_MLP-2.0.png" width="600px"/>
</p>

Nommez votre dossier, ajoutez un commit et enregistrez dans une branche.

## Comment téléverser un fichier

Des documents de tout format peuvent être partagés dans la documentation collaborative. 
Ils seront mis à disposition via un lien de téléchargement. Le processus de téléversement est le même que dans le cas d'une [image](inclure_image.md)

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
    
Pour ajouter un lien de téléchargement sur une page : 
    - Se placer sur la même branche
    - Trouver le fichier où vous souhaitez mettre le lien 
    - Ajouter le lien en utilisant le format [markdown](tutoriel_markdown.md#liens-hypertextes)
