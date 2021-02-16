# Travaux pratiques formation GitLab
<!-- SPDX-License-Identifier: MPL-2.0 -->

Cette page contient les travaux pratiques des formations GitLab pour contribuer à la documentation.

Le support de formation ci-dessous peut être ouvert en [suivant ce lien](https://frama.link/formation-gitlab). 

<style>
.responsive-wrap iframe{ max-width: 95%; }
</style>
<div class="responsive-wrap">
<p style="text-align:center;">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSCZjdOn5mObOv8bnkKdLfyLA0lLg9h0q0vW48sAfj_DMcbooNuLv6cTO8t06h8k-GcK0GRjSETP_RE/embed?start=false&loop=false&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
</iframe>
</p>
</div>

::: tip Note
Se rendre sur le **site de formation** et sur le **projet GitLab de formation** pour les TPs :
- [**formation-gitlab**.documentation-snds.health-data-hub.fr/](https://formation-gitlab.documentation-snds.health-data-hub.fr/).
- [gitlab.com/healthdatahub/**formation**/documentation-snds](https://gitlab.com/healthdatahub/formation/documentation-snds).
:::

## TP 1 : Explorer les outils

- Forum d’entraide : [entraide.health-data-hub.fr/](https://entraide.health-data-hub.fr/)
  - Exploration
    - Quel sujet a le plus de réponses ? et de vue ?
    - Quelle [catégorie](https://entraide.health-data-hub.fr/categories) du forum a le plus de questions ?
  - Recherche 
    - Comment identifier les consultations dans le cadre du suivi de grossesse ?
    - Comment identifier les Forfait Prestation Intermédiaire (FPI) dans le PMSI ?
  - Bonus : Créer un compte
    - Un compte vous abonnera aux nouveautés par un email hebdomadaire (configurable).
    - Un compte vous permet de contribuer : mettre un cœur sur une réponse qui vous paraît utile. 

- Dictionnaire interactif : [health-data-hub.shinyapps.io/dico-snds/](https://health-data-hub.shinyapps.io/dico-snds/)
  - En quelle année a été créée la variable `TOP_AVASTIN` ?
  - Quelles variables utilisent la nomenclature `IR_SLM_V` ?
  - Dans quelles nomenclatures peut-on retrouver le terme `otite` ?
  - Quelle est la clé de jointure entre `IR_IMB_R` et `IR_BEN_R` ?

## TP 2 : Rédiger au format Markdown

Reproduire sur l'[éditeur CodiMD](https://demo.codimd.org/) la présentation affichée à l'écran. 

Utiliser le document CodiMD partagé, en suivant lien donné en formation. 


## TP 3 : Naviguer dans l'interface GitLab

1. Se connecter à [gitlab.com](https://gitlab.com/).

1. Aller sur le projet Gitlab `programmes-SNDS` : [gitlab.com/healthdatahub/programmes-sdns](https://gitlab.com/healthdatahub/programmes-snds)
    - Combien d'organisations ont partagé des programmes sur ce projet ?
    - Quand a été créé le dossier de Santé publique France ?
    
1. Aller sur le projet GitLab `documentation-snds` : [gitlab.com/healthdatahub/documentation-snds](https://gitlab.com/healthdatahub/documentation-snds) 
    - Note : on est exceptionnellement ici sur le projet **principal**, **pas** celui de formation
    - Trouver la fiche `cartographie_pathologies.md`
        - Quelle est la 2ème ligne de texte brut de cette fiche ?
        - Quelle modification a eu le 25 juin 2019 ? 
    - Quelle est la dernière issue ouverte ?
    - Quelle est la dernière issue fermée ?
    - Quels sont les derniers fichiers modifiés dans la branche `ecriture_fiche_foin` ?


1. Explorer le site de documentation, **version de formation** : [**formation-gitlab**.documentation-snds.health-data-hub.fr/](https://formation-gitlab.documentation-snds.health-data-hub.fr/)
    - Quelles sont les 6 sections de la documentation ?
    - Quel est le titre du document partagé par Santé publique France ?
    - Quel est le sujet de la première présentation du 3ème Meetup ?
    - Quelles différences y a t-il entre les dossiers sur GitLab et le sommaire du site de documentation ?

1. Proposer une modification 
    - Parcourez les pages du site de documentation, en particulier les fiches de glossaire
    - Chercher une **proposition d'amélioration simple** à faire : ajout d'une phrase, faute d'orthographe, référence à ajouter, etc.
    - Assurer vous d'être sur le **site de formation** (l'adresse web commence par `formation-gitlab`)
    - Utiliser le bouton de bas de page `Proposer une modification`
        - Compléter la description
        - Préciser éventuellement le titre
        - S'assigner soi même
        - Ignorer les autres options
        - Soumettre l'issue
 

## TP 4 : Modifier un document - commit

Allez sur la page pour laquelle vous avez proposé une modification à l'exercice précédent.
 
::: tip
Si vous n'avez pas proposé de modification, choisissez une fiche sur laquelle faire une modification simple.
:::

1. Cliquer sur le bouton `Éditer` en bas de page
1. Réalisez la modification simple proposée
1. Enregistrer la modification dans un `commit` en bas de page
    - `Commit message` : Écrire une description courte (60 caractères) mais explicite. 
        - Exemple "*Correction 2ème étape algorithme FOIN*"
    - `Target Branch` : Choisir un nom de branche court, sans espace ni caractère spéciaux, mais explicite. 
        - Exemple "*precision-fiche-foin*"
    - Garder cochée la case `Start a new merge request with these changes`
    - Cliquer sur le bouton `Commit changes`

1. Remplir le formulaire de `merge-request`
    - Corriger si besoin le titre
    - Ajouter si utile une description détaillée
    - Assigner à la merge-request à votre binôme
    - Ne pas se préocuper de toutes les autres options 
    - Enregistrer en bas de page

::: tip Bravo ! 
Votre première modification est prête à être publiée en ligne après relecture de votre binôme
:::

::: tip Conseil : Cent fois sur le métier remettez votre ouvrage
Reproduisez l'exercice sur une nouvelle fiche.
:::

## TP 5 : Relire une merge-request

Ci-dessous :
- MR_1 : désigne la MR que vous avez ouvert
- MR_2 : désigne la MR que votre binôme a ouvert et vous a assigné pour relecture

1. Relire la merge-request de votre binôme (MR_2)
    - Ouvrir l'onglet `Changes`
    - Faire un commentaire (bulle bleu à gauche) associé à une ligne demandant une modification
    - Bonus : Faire un 2ème commentaire avec l'option `suggestion`  

1. Prendre en compte la relecture qui a été faite sur votre merge request (MR_1)
    - Onglet `Changes` > Bouton crayon `Edit file` pour ouvrir le bon fichier dans la bonne branche
    - Réaliser les modifications et enregistrer dans un commit avec un titre clair
    - Vérifier que toutes les fils de discussions (`thread`) sont traités dans l'onglet `Overview`. Appliquer éventuellement les suggestions.
 
1. Relire à nouveau la merge-request de votre binôme, puis la valider (MR_2)
    - Cliquer sur le bouton `Approve` pour signifier que vous valider le travail
    - Dé-assigner l'auteur et le relecteur de la MR
    - Assigner un mainteneur pour la fusion ([liste](https://gitlab.com/healthdatahub/formation/documentation-snds/-/project_members?search=&sort=access_level_desc))
    - Aller voir la version de prévisualisation (attendre que ce soit prêt = 2ème cercle en vert)


## TP 6 : Créer une merge-request depuis une issue
 
1. Ouvrir une issue  sur le [projet gitlab de formation](https://gitlab.com/healthdatahub/formation/documentation-snds) 
proposant une modification simple
    - Passer par l'onglet "board" (> filtre "Rédaction" > 1ère colonne)
    - **Titre** : Soyez clair ! il doit être compréhensible d'un coup d'oeil. Indiquer le nom de la fiche et le sujet
    - **Corps de description** : Soyez précis ! Expliquer le problème, donner le lien hypertexte vers la page, proposez la solution
    - Assigner l'issue à vous **et** à votre binôme qui sera chargé de la relire
    
1. Relire l'issue de votre binôme
    - Si besoin, ajouter un commentaire pour demander des précisions
    - Après éventuelle discussion, quand tout est clair, déplacer l'issue dans la colonne "À faire" (ou de façon équivalente, ajouter l'étiquette "À faire" 
    
1. Ouvrir la merge-request pour traiter l'issue de votre binôme
    1. Dans la page de l'issue, cliquer sur le bouton `Create merge request` 
    1. Cette action créé une branche et une MR vide
        - Comment est construit le nom de la branche ?
        - Et le titre de la MR ? 
    1. S'assigner à soi-même la MR
    1. Bonus
        - Cliquer sur le lien vers l'issue. La basculer au statut"En cours"
        - Cliquer sur le lien pour revenir à la MR
        - Modifier la description de la MR avec un résumé de l'issue

1. Modifier le fichier pour répondre à l'issue
    1. **Se placer sur la bonne branche**
    1. Retrouver le fichier
    1. L'éditer
    1. Enregistrer la modification dans un commit avec un résumé clair
        - vérifier que le nom de la branche est bon. Si c'est le nom par défaut `patch-X`, votre travail ne sera pas enregistré sur la branche de la MR.

1. Demander une relecture
    1. Retirer le tag `WIP:` => les relectures sont ouvertes !
    1. Assigner un relecteur 
        - dans ce cas d'exercice, choisissez votre binôme, auteur initial de l'issue

## TP 7 : Faire des modifications plus complexes

- Choisir une fiche pour faire les exercices suivants.
- Faîtes tous ces exercices sur la même branche 
    - Toujours bien repartir de cette branche avant une modification
    - La merge-request associée à la branche évoluera sans besoin d'en recréer 
- Pas besoin de créer une issue au préalable

### Ajouter un lien externe vers une ressource web

Première modification assez simple, au cours de laquelle on créée la branche et la merge-request.

### Ajouter un lien interne vers une autre page du site

Il faut pour cela utiliser un chemin relatif, en utilisant un double point pour remonter d'un répertoire

Exemple : `[CMU-C](../fiches/cmu_c.md)` pour [CMU-C](../../fiches/cmu_c.md)

### Ajouter un fichier en téléchargement 

- Suivre le tutoriel pour [ajouter un nouveau fichier](partage_document.md) dans le dossier `files`
- Insérer un lien relatif vers ce fichier pour permettre de le télécharger

### Ajouter une image

- Ajouter un fichier image dans le dossier `file` (suite du tutoriel `nouveau fichier`) 
- Inserer l'image dans la fiche
    - vérifier que la prévisualisation markdown affiche l'image
    

### Ajouter un encart
- Regarder les pages existantest pour la syntaxe Markdown spécifique pour faire des encarts verts, orange ou rouge


## TP 8 : Ajouter des programmes

TP optionnel : 
- Créer un dossier pour votre organisation dans le projet [programmes-snds](https://gitlab.com/healthdatahub/programmes-snds)
- Ajouter un README selon les consignes du fichier CONTRIBUTING.md
- Ajouter un programme documenté

## TP 9 : Créer une nouvelle fiche de glossaire

:::tip Note
Pour cet exercice, voir aussi la [page de documentation dédiée](Creer_une_fiche.md)
:::

Ecrire une issue demandant à créer une fiche de glossaire sur une notion non abordée.

Créer la merge-request résolvant cette issue.
 
Créer un nouveau fichier dans le dossier `glossaire`
- nom en minuscule, sans espace ni caractères spéciaux, avec l'extension `.md` 
- copier-coller le contenu d'une autre fiche plus complète pour reprendre la structure 


## TP 10 : Utiliser le Web IDE ou l'édition distante

La fonction Web IDE est un autre mode d'édition, qui permet d'éditer plusieurs fichiers simulanément. 

S'en servir pour, dans des commits successifs :
- renommer un fichier
- déplacer un bout de texte d'un fichier vers un autre
