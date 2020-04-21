# Comment utiliser Gitlab pour contribuer

Toute personne souhaitant contribuer est invitée à le faire. Les contributions peuvent porter sur la correction des erreurs, la mise à jour de certains champs, compléter des pages existantes, et en créer de nouvelles. Toutes améliorations, même d'apparence mineure comme la correction de fautes d'orthographe, améliorent pour tous la qualité du contenu. Un processus de relecture et de validation a été mis en place afin de garantir un contenu de qualité. Merci de s'y [référer]() avant toute contribution. 

Il est possible de contribuer de plusieurs manières : 
- en créant un ticket pour signaler une erreur, proposer une nouvelle idée de fiche par exemple
- en modifiant une fiche 
- en créant une nouvelle fiche

## Créer un ticket
Les tickets sont des outils de communications autour du projet. Ils peuvent être attribués à une ou plusieurs personnes en désignant des assignés.

Des étiquettes peuvent être ajoutées pour décrire les tickets. Dans le cadre de la documentation collaborative, les étiquettes disponibles sont Rédaction, Développement, Bug, A faire, En cours, Prêt fusion

Les tickets peuvent être [visualisés]() sous la forme de liste, tableaux, ou encore par étiquettes.

### Comment créer un ticket

Pour créer un ticket : aller dans `Tickets` > `Nouveau ticket`. 
Une fenêtre s'ouvre, permettant de décrire le ticket à créer.

1. Donner un titre
2. Faire une courte description
3. Vous assigner pour retrouver facilement votre ticket et assigner les personnes avec qui vous collaborez
4. Ajouter des étiquettes (label)
5. Enregistrer le ticket

### Retrouver son ticket

### Naviguer dans le ticket créé





### 1- Ouvrir le fichier en édition

En  bas de chaque page de la documentation se trouve un lien, vous invitant à éditer le fichier sur GitLab.

<p style="text-align:center;">
<img src="../files/images/tutoriel_gitlab/editer_sur_gitlab.png" alt="Éditer sur GitLab" width="200"/>
</p>

Vous pouvez aussi naviguer en ligne dans [le dépôt sur gitlab.com](https://gitlab.com/healthdatahub/documentation-snds/), et  ouvrir l'interface d'édition avec le bouton `Edit`.

<p style="text-align:center;">
<img src="../files/images/tutoriel_gitlab/edition.png" alt="interface edition" width="600"/>
</p>


### 2- Enregistrer les modifications

Un formulaire en bas de page permet d'enregistrer vos modifications dans un commit. 
- Ecrivez un message décrivant les modifications apportées : une description courte, puis éventuellement une description plus longue séparée par une ligne vide.
- Choississez le nom d'une nouvelle branche de travail, **avec un nom explicite**.

<p style="text-align:center;">
<img src="../files/images/tutoriel_gitlab/commit.png" alt="commit" width="600"/>
</p>

### 3- Ouverture d'une merge-request

Dans l'étape précédente, l'option démarrer une nouvelle merge-request est cochée par défault par Gitlab. Afin de discuter et valider les modifications apportées, cette option est à conserver

Une page s'ouvre alors pour configurer cette merge-request.

- Vous pouvez directement soumettre votre merge-request en bas de page.
- Vous pouvez apporter des précisions, en clarifiant le titre ou en écrivant une description.
- Vous pouvez attribuer le travail de relecture à une personne ("Assignee"). 
- Vous pouvez indiquer que cette merge-request est un travail en cours, en débutant le titre par `WIP:`.

<p style="text-align:center;">
<img src="../files/images/tutoriel_gitlab/wip.png" alt="wip" width="600"/>
</p>

### 4- Prévisualisation d'une merge-request

Lorsqu'une merge-request est ouverte, un "`pipeline`" est démarré pour effectuer des tests sur les liens hypertextes, et construire une prévisualisation du site. 
Ces 2 étapes sont symbolisées par des icônes rondes.

Lorsque la prévisualisation est construite, la deuxième icône passe au vert. 
Cliquer dessus permet d'ouvrir la prévisalisation du site. 

![prévisualisation](../files/images/tutoriel_gitlab/preview.png)

À chaque nouveau commit sur la branche, le pipeline est relancé, et la prévisualisation est mise à jour avec la même url.

### 5- Ajouter des commits sur une branche existante

Il est possible d'ajouter des commits sur une branche de travail existante. 
Il faut pour cela sélectionner la branche de travail dans la vue fichier. 

<p style="text-align:center;">
<img src="../files/images/tutoriel_gitlab/switch_branch.png" alt="changer branche" width="400"/>
</p>

On peut alors éditer de nouveaux documents. Les nouveaux commits apparaîtront alors dans la merge request associée à cette branche.