# Ajout de nouveaux fichiers
<!-- SPDX-License-Identifier: MPL-2.0 --> 

L'ajout de nouveaux fichiers demande un peu d'attention. Ne pas hésiter à demander de l'aide ! 

## Nouvelle page du site

Les pageq du site internet sont des fichiers textuels, stockés dans le dossier [docs/documentation](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/documentation).

Pour créer une nouvelle page de documentation, copier le contenu du modèle présent dans le fichier [modele_markdown.md](https://gitlab.com/healthdatahub/documentation-snds/raw/master/docs/contribuer/modele_markdown.md).

Si vous partez d'une page vierge, pensez à ajouter une ligne contenant l'identifiant de licence MPL-2.0 après le titre.
```
<!-- SPDX-License-Identifier: MPL-2.0 -->
```
 
Pour faire apparaître la nouvelle page dans le menu de navigation du site internet, 
il faut ajouter un lien dans la variable `sidebar` du fichier de configuration 
[docs/.vuepress/config.js](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/.vuepress/config.js)
(`.vuepress` est un dossier caché). 

## Nouveau fichier à télécharger

Des documents de tout format peuvent être partagés dans la documentation collaborative. 
Ils seront mis à disposition via un lien de téléchargement.

Pour ajoutez un nouveau fichier, merci de bien vouloir : 
- Vérifier que vous avez les droits pour le publier 
- Ajouter l'identifiant de licence `MLP-2.0` _dans_ le document, au début
- Le nommer selon le format date_auteur_nom-du-fichier_MPL-2.0.extension
    - `date` : a minima l'année, éventuellement le mois et le jour, au format AAAA-MM-JJ 
    - `auteur` : nom court de l'organisation détentrice des droits sur le document
    - `nom-du-fichier` : sans espace, car les liens devront sinon utiliser `%20`
    - `extension` : par exemple `.csv`, `.pdf`, `.odp`. Préférer des formats interopérables ouverts.
- L'ajouter dans le dossier _caché_ [docs/.vuepress/public/assets/src](https://gitlab.com/healthdatahub/documentation-snds/tree/master/docs/.vuepress/public/assets/src).
- Ajouter un lien dans la page `docs/documentation/ressources.md`, 
en mentionnant le nom de l'organisation et la licence MPL-2.0

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

