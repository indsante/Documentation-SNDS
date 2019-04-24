# Ajout de nouveaux fichiers
<!-- SPDX-License-Identifier: MPL-2.0 --> 

## Nouvelle page de documentation textuelle

Les fichiers de documentation textuels sont stockés dans le dossier [docs/contribuer](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/contribuer).

Pour créer une nouvelle page de documentation, copier le contenu du modèle présent dans le fichier `modele_markdown.md`.

Si vous partez d'une page vierge, pensez à ajouter une ligne contenant l'identifiant de licence MPL-2.0 après le titre.
```
<!-- SPDX-License-Identifier: MPL-2.0 -->
```
 
Pour que votre nouvelle page apparaisse dans le menu de navigation, 
il faut l'ajouter dans la variable `sidebar` du fichier de configuration 
[docs/.vuepress/config.js](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/.vuepress/config.js). 

## Nouveau fichier non textuel

Des fichiers dans un format non textuel peuvent être partagés dans la documentation collaborative. 
Ils seront mis à disposition via un lien de téléchargement.

::: tip Note
Préférer tant que possible des pages de documentation textuelles. 
Elle permettent de collaborer efficacement via GitLab pour les améliorer. 
De plus, elles sont directement lisible dans le navigateur, sans téléchargement qui est un frein à la consultation.
:::

Pour ajoutez un nouveau fichier, merci de bien vouloir : 
- Vérifier que vous avez les droits pour le publier 
- Ajouter l'identifiant de licence `MLP-2.0` _dans_ le document, au début
- Le nommer selon le format `date`_`auteur`_`nom-du-fichier`_MPL-2.0.`extension`
    - `date` : a minima l'année, éventuellement le mois et le jour, au format AAAA-MM-JJ 
    - `auteur` : nom court de l'organisation détentrice des droits sur le document
    - `nom-du-fichier` : sans espace, car les liens devront sinon utiliser `%20`
    - `extension` : par exemple `.csv`, `.pdf`, `.odp`. Préférer des formats interopérables ouverts.
- L'ajouter dans le dossier _caché_ [docs/.vuepress/public/assets/src](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/.vuepress/public/assets/src).
- Ajouter un lien dans la page `docs/documentation/ressources.md`, en mentionnant la licence MPL-2.0

## Nouvelle image

Les images sont stockées dans le dossier _caché_ [docs/.vuepress/public/assets/img](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/.vuepress/public/assets/img). 

Vous pouvez afficher une image dans une page de documentation via un lien hypertexte (cf page [tutoriel Markdown](tutoriel_markdown.md#lien-hypertexte)).

Si une image provient d'un document tierce, par exemple une présentation powerpoint :
- Enregistrer ce fichier pour permettre des évolutions de l'image (cf section précédente).
- Mettre la ou les images issue du document dans un sous-dossier du même nom. 
Voici un exemple d'arborescence obtenue sous le dossier `docs/.vuepress/public`:
    - assets
        - img
            - **2019_INDS_trouver-la-doc-sur-le-portail-snds_MPL-2.0**
              - image1.png
              - image2.png
        - src
            - **2019_INDS_trouver-la-doc-sur-le-portail-snds_MPL-2.0**.pptx

