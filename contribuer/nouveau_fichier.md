# Ajout de nouveaux fichiers
<!-- SPDX-License-Identifier: MPL-2.0 -->  

## Nouvelle page du site

Les pages du site internet sont des fichiers textuels, stockés dans différents dossiers à la racine, principalement `introduction` pour les tutoriels haut niveau, `fiches` pour les fiches thématiques, et `glossaire`.

Pour créer une nouvelle page de documentation, naviguer dans le dossier de votre choix, et sélectionnez **Nouveau fichier** dans le menu déroulant "Plus".

![Nouveau fichier](../files/images/tutoriel_gitlab/nouveau_fichier.png)

Écrivez alors votre fiche, en mettant cette ligne de commentaire après le titre.
```
<!-- SPDX-License-Identifier: MPL-2.0 -->
```

Enregistrez votre fichier, avec un nom en minuscule (sauf sigle), sans espace, et terminier par l'extention **.md** pour indiquer qu'il s'agit d'une page Markdown.

Pour la suite, enregistrez votre modification dans une branche et ouvrez une merge-request de la même façon que pour modifier un fichier (cf [Introduction GitLab](introduction_gitlab.md)).
 
## Nouveau fichier à télécharger

Des documents de tout format peuvent être partagés dans la documentation collaborative. 
Ils seront mis à disposition via un lien de téléchargement.

Pour ajoutez un nouveau fichier, merci de bien vouloir : 
- Vérifier que vous avez les droits pour le publier 
- Ajouter l'identifiant de licence `MLP-2.0` _dans_ le document, au début
- Le nommer selon le format **date_auteur_nom-du-fichier_MPL-2.0.extension**
    - `date` : a minima l'année, éventuellement le mois et le jour, au format AAAA-MM-JJ 
    - `auteur` : nom court de l'organisation détentrice des droits sur le document
    - `nom-du-fichier` : remplacer les tirets par des espaces
    - `extension` : par exemple `.csv`, `.pdf`, `.odp`. Préférer des formats interopérables ouverts.
- L'ajouter dans le dossier `files/` ([lien gitlab](https://gitlab.com/healthdatahub/documentation-snds/tree/master/files/)), sous-dossier au nom de votre organisation
- Ajouter ce fichier avec un nom de branche `ajout-fichier-NOM-FICHIER`, et ouvrez la merge request correspondante
- Ajouter un lien dans la page [ressources/README.md](../ressources/README.md) ([lien gitlab](https://gitlab.com/healthdatahub/documentation-snds/tree/master/ressources/README.md), puis se placer sur la branche précédente), 
en mentionnant le nom de l'organisation et la licence MPL-2.0.

::: warning Note
Bien **supprimer les espaces** dans les noms de fichiers, car ils compliquent les liens hypertexte (espace indiqué par `%20`). 

**Éviter également les accents**
:::

## Nouvelle image

Les images sont à ajouter dans le dossier `files/images/` ([lien gitlab](https://gitlab.com/healthdatahub/documentation-snds/tree/master/images)). 

Vous pouvez ensuite intégrer les images dans une page de documentation via un lien hypertexte (cf [tutoriel Markdown](tutoriel_markdown.md#lien-hypertexte)).

Si une image provient d'un document tierce, par exemple une présentation Powerpoint :
- Ajouter ce fichier (cf section précédente) pour permettre des évolutions de l'image en repartant du fichier.
- Mettre la ou les images issue du document dans un sous-dossier du même nom, à côté de l'image. 
