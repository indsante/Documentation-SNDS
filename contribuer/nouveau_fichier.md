# Ajout de nouveaux fichiers
<!-- SPDX-License-Identifier: MPL-2.0 --> 

L'ajout de nouveaux fichiers demande un peu d'attention. Ne pas hésiter à demander de l'aide ! 

## Nouvelle page du site

Les pages du site internet sont des fichiers textuels, stockés dans différents dossiers à la racine, principalement `introduction` pour les tutoriels haut niveau, et `fiches` pour les fiches thématiques.

Pour créer une nouvelle page de documentation, copier le contenu du modèle présent dans le fichier [modele_markdown.md](modele_markdown.md) 
([fichier brut à copier sur gitlab](https://gitlab.com/healthdatahub/documentation-snds/raw/master/contribuer/modele_markdown.md)).

Si vous partez d'une page vierge, pensez à ajouter une ligne contenant l'identifiant de licence MPL-2.0 après le titre.
```
<!-- SPDX-License-Identifier: MPL-2.0 -->
```
 
Pour faire apparaître la nouvelle page dans le menu de navigation du site internet, 
il faut ajouter un lien dans la variable `sidebar` du fichier de configuration 
`.vuepress/config.js`
([lien gitlab](https://gitlab.com/healthdatahub/documentation-snds/tree/master/.vuepress/config.js)).

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
- L'ajouter dans le dossier `files/` ([lien gitlab](https://gitlab.com/healthdatahub/documentation-snds/tree/master/files/)) avec un nom de branche `ajout-fichier-nom-simplifie`.
- Ajouter un lien dans la page [ressources/README.md](../ressources/README.md) ([lien gitlab](https://gitlab.com/healthdatahub/documentation-snds/tree/master/ressources/README.md), puis se placer sur la branche précédente), 
en mentionnant le nom de l'organisation et la licence MPL-2.0.

::: warning Note
Bien **supprimer les espaces** dans les noms de fichiers, car ils compliquent les liens hypertexte (espace indiqué par `%20`). 

**Éviter également les accents**
:::

## Nouvelle image

Les images sont à ajouter dans le dossier `images/` ([lien gitlab](https://gitlab.com/healthdatahub/documentation-snds/tree/master/images)). 

Vous pouvez ensuite intégrer les images dans une page de documentation via un lien hypertexte (cf [tutoriel Markdown](tutoriel_markdown.md#lien-hypertexte)).

Si une image provient d'un document tierce, par exemple une présentation Powerpoint :
- Ajouter ce fichier (cf section précédente) pour permettre des évolutions de l'image en repartant du fichier.
- Mettre la ou les images issue du document dans un sous-dossier du même nom. 
Voici un exemple d'arborescence obtenue :
    - images
      - **2019_INDS_trouver-la-doc-sur-le-portail-snds_MPL-2.0**
        - image1.png
        - image2.png
    - files
      - **2019_INDS_trouver-la-doc-sur-le-portail-snds_MPL-2.0**.pptx
