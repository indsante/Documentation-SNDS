# Travaux pratiques formation GitLab
<!-- SPDX-License-Identifier: MPL-2.0 -->

Cette page contient les travaux pratiques des formations GitLab.

Le support de formation ci-dessous peut être ouvert en [suivant ce lien](http://frama.link/gitlab-snds5). 

<style>
.responsive-wrap iframe{ max-width: 95%; }
</style>
<div class="responsive-wrap">
<p style="text-align:center;">
<iframe 
    src="https://docs.google.com/presentation/d/1oYQksP4GwsWrbSBlJcMukk-jlx7YUM7NEmz4_kCUrCA/embed?start=false&loop=false&delayms=1000" 
    frameborder="0" width="700" height="430" 
    allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"
></iframe>
</p>
</div>


::: tip Note
Les exercices sont à réaliser sur le projet GitLab dédié à la formation [gitlab.com/healthdatahub/**formation**/documentation-snds](https://gitlab.com/healthdatahub/formation/documentation-snds).

Les modifications du projet de **formation** sont visibles à cette adresse [**formation-gitlab**.documentation-snds.health-data-hub.fr/](https://formation-gitlab.documentation-snds.health-data-hub.fr/).



:::

## TP 1 : Explorer les outils

- Forum d’entraide : [entraide.health-data-hub.fr/](https://entraide.health-data-hub.fr/)
  - Quelles sont les [catégories](https://entraide.health-data-hub.fr/categories) du forum ?
  - Comment identifier les Forfait Prestation Intermédiaire (FPI) dans le PMSI ?
  - Bonus
    - Créer un compte. Cela vous permettra de contribuer, et vous abonnera aux nouveautés par un email hebdomadaire (configurable).
    - Mettre un cœur sur une réponse qui vous paraît utile. 

- Dictionnaire interactif : [drees.shinyapps.io/dico-snds/](https://drees.shinyapps.io/dico-snds/)
  - Quelle est la clé de jointure entre `IR_IMB_R` et `IR_BEN_R` ?
  - Dans quelle nomenclature peut-on retrouver le terme `otite` ?
  - Quelle année a été créée la variable `TOP_AVASTIN` ?

- Documentation collaborative : [documentation-snds.health-data-hub.fr/](https://documentation-snds.health-data-hub.fr/)
  - Quelles sont les 6 sections de la documentation ?
  - Quel est le titre du document partagé par Santé publique France ?
  - Quel est le sujet de la première présentation du 3ème Meetup ?
  
- Programmes SNDS : [gitlab.com/healthdatahub/programmes-sdns](https://gitlab.com/healthdatahub/programmes-sdns)
  - Combien d'organisations ont partagé des programmes ?

## TP 2 : Rédiger au format Markdown

Reproduire sur l'[éditeur CodiMD](https://demo.codimd.org/) la présentation affichée à l'écran. 

Utiliser le document CodiMD partagé, en suivant lien donné en formation. 


## TP 3 : Naviguer dans l'interface GitLab

1. Se connecter à [gitlab.com](https://gitlab.com/).

1. Aller sur le projet de **formation** : [gitlab.com/healthdatahub/**formation**/documentation-snds](https://gitlab.com/healthdatahub/formation/documentation-snds)
    - Trouver la fiche `cartographie_pathologies.md`
        - Quelle est la 2ème ligne de texte brut de cette fiche ?
        - Quelle modification a eu le 25 juin 2019 
    
- Aller sur le projet principal (pas de formation) : [gitlab.com/healthdatahub/documentation-snds](https://gitlab.com/healthdatahub/documentation-snds)
    - Quelle est la différence dans l'adresse du projet GitLab ? 
    - Quelle est la dernière issue (ticket) ouverte ?
    - Quelle est la dernière issue fermée ?
    - Quels sont les derniers fichiers modifiés dans la branche `ecriture_fiche_foin`?

- Quelles différences y a t-il entre les dossiers sur GitLab et le sommaire du site de documentation ?


## TP 4 : Modifier un document - commit

1. Parcourez le glossaire sur le [site de formation](https://formation-gitlab.documentation-snds.health-data-hub.fr/glossaire)
    - Choissez une fiche à modifier 
    - Cliquer sur `Éditer sur GitLab` en bas de page

1. Rédiger une courte modification, par exemple l'ajout d'une phrase.


1. Enregistrer les modificiations dans un `commit` en bas de page
    - `Commit message` : Écrire une description courte (60 caractères) mais explicite. Exemple "*Correction 2ème étape algorithme FOIN*"
    - `Target Branch` : Choisir un nom de branche court, sans espace ni caractère spéciaux, mais explicite. Exemple "*precision-fiche-foin*"
    - Garder cochée la case `Start a new merge request with these changes`
    - Cliquer sur le bouton `Commit changes`

1. Remplir le formulaire de `merge-request`
    - Corriger si besoin le titre
    - Ajouter si utile une description détaillée
    - Assigner à un mainteneur du projet présent à la formation ([liste](https://gitlab.com/healthdatahub/formation/documentation-snds/-/project_members?search=&sort=access_level_desc))
    - Ne pas se préocuper de toutes les autres options 
    - Enregistrer en bas de page

::: tip Bravo ! 
Votre première modification est prête à être publiée en ligne

Il suffit maintenant de la valider. Rendez-vous au TP 7. 
:::


## TP 5 : Proposer une modification - issue
 
1. Réfléchir à une modification à apporter sur une fiche existante
   - Choissez une modification simple à expliquer et rapide à réaliser
   - Exemples : correction d'une erreur, ajout d'un lien, demande d'une précision

1. Ouvrir une issue  sur le [projet gitlab de formation](https://gitlab.com/healthdatahub/formation/documentation-snds) 
proposant cette modification
    - Passer par l'onglet "board" (> filtre "Rédaction" > 1ère colonne)
    - **Titre** : Soyez clair ! il doit être compréhensible d'un coup d'oeil. Indiquer le nom de la fiche et le sujet
    - **Corps de description** : Soyez précis ! Expliquer le problème, donner le lien hypertexte vers la page, proposez la solution
    - Assigner l'issue à vous **et** à votre binôme qui sera chargé de la relire
    
1. Relire l'issue de votre binôme
    - Si besoin, ajouter un commentaire pour demander des précisions
    - Après éventuelle discussion, quand tout est clair, déplacer l'issue dans la colonne "À faire" (ou de façon équivalente, ajouter l'étiquette "À faire" 

## TP 6 : Traiter une issue - merge-request

1. Ouvrir la merge-request pour traiter l'issue
    1. Aller sur l'issue que vous avez relue
    1. Cliquer sur le bouton `Create merge request` 
    1. Cette action créé une branche et une MR vide
        - Comment est construit le nom de la branche ?
        - Et le titre de la MR ? 
    1. S'assigner à soi-même la MR
    1. Bonus
        - Cliquer sur le lien vers l'issue. La basculer au statut"En cours"
        - Cliquer sur le lien pour revenir à la MR
        - Modifier la description de la MR avec un résumé de l'issue

1. Modifier le fichier selon l'issue
    1. **Se placer sur la bonne branche**
    1. Retrouver le fichier
    1. L'éditer
    1. Enregistrer la modification dans un commit avec un résumé clair
        - vérifier que le nom de la branche est bon. Si c'est le nom par défaut `patch-X`, votre travail ne sera pas enregistré sur la branche de la MR.

1. Demander une relecture
    1. Retirer le tag `WIP:` => les relectures sont ouvertes !
    1. Assigner un relecteur 
        - dans ce cas d'exercice, choisissez votre binôme, auteur initial de l'issue)

## TP 7 : Vie d’une merge-request - relecture et ajouts

Ci-dessous :
- MR_1 : désigne la MR que vous avez ouvert
- MR_2 : désigne la MR que votre binôme a ouvert, et vous a assigné

1. Relire la MR_2
    - Ouvrir l'onglet `Changes`
    - Faire un commentaire (bulle bleu à gauche) associé à une ligne demandant une modification
    - Bonus : Faire un 2ème commentaire avec l'option `suggestion`  

1. Prendre en compte la relecture qui a été faite par votre binôme sur la MR_1
    - Onglet `Changes` > Bouton crayon `Edit file` pour ouvrir le bon fichier dans la bonne branche
    - Réaliser les modifications et enregistrer dans un commit avec un titre clair 
 
1. Relire à nouveau, puis valider la MR_2
    - Aller voir la version de prévisualisation (attendre que ce soit prêt = 2ème flèche en vert)
    - Cliquer sur le bouton `Approve` pour signifier que vous valider le travail
    - Dé-assigner l'auteur et le relecteur de la MR 
    - Assigner un mainteneur pour la fusion ([liste](https://gitlab.com/healthdatahub/formation/documentation-snds/-/project_members?search=&sort=access_level_desc))

## TP 8 : Ajouter une image

1. Suivre le tutoriel pour [ajouter une image](nouveau_fichier.md) à la documentation.
1. Créer la merge-request associée.
1. Modifier une fiche pour y intégrer l'image
    - bien partir de la même branche
    - vérifier que la prévisualisation markdown affiche l'image
    
Bonus : tester plusieurs fonctionnalités Markdown
- ajouter un lien interne vers une autre page du site
- ajouter un lien externe vers une ressource web
- ajouter une image via un lien externe
- ajouter un fichier dans le dossier `files` et insérer un lien dans la page vers ce fichier
- trouver la syntaxe Markdown spécifique pour faire des encarts verts, orange ou rouge

## TP 9 : Ajouter des programmes

TP optionnel : 
- Créer un dossier pour votre organisation dans le projet [programmes-snds](https://gitlab.com/healthdatahub/programmes-sdns)
- Ajouter un README selon les consignes du fichier CONTRIBUTING.md
- Ajouter un programme documenté

## TP 10 : Créer une nouvelle fiche de glossaire

:::tip Note
Pour cet exercice, voir aussi la [page de documentation dédiée](nouvelle_page.md)
:::

Ecrire une issue demandant à créer une fiche de glossaire sur une notion non abordée.

Créer la merge-request résolvant cette issue.
 
Créer un nouveau fichier dans le dossier `glossaire`
- nom en minuscule, sans espace ni caractères spéciaux, avec l'extension `.md` 
- copier-coller le contenu d'une autre fiche plus complète pour reprendre la structure 


## TP 11 : Utiliser le Web IDE ou l'édition distante

La fonction Web IDE est un autre mode d'édition, qui permet d'éditer plusieurs fichiers simulanément. 

S'en servir pour, dans des commits successifs:
- renommer un fichier
- déplacer un bout de texte d'un fichier vers un autre
