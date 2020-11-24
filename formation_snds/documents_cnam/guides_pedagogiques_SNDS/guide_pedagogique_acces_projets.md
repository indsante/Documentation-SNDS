# Guide accès sur projet
<!-- SPDX-License-Identifier: MPL-2.0 -->

::: tip
Cette fiche provient du guide pour les [accès sur projet](../../../files/Cnam/2019-07_Cnam_Guide_pedagogique_SNDS_acces_projet_MPL-2.0.docx) publié par la Cnam, sous licence MPL-2.0
:::


## Préambule et définitions

Ce guide pédagogique sous forme de fiches pratiques a été rédigé **pour tous les utilisateurs du SNDS porteurs d’un projet et demandant une extraction de données SNDS** pour rappeler de manière succincte les procédures, les conditions et les modalités pratiques d’accès aux données. 
Il s’adresse également **au Délégué à la Protection des Données des organismes** afin de préciser leur rôle et les conditions de sécurité des données SNDS à respecter.
Ce guide sera incrémenté au fur et à mesure des évolutions de procédures.

Voici quelques définitions pour la suite :

- **Autorité d’Enregistrement** (AE) : personne désignée pour habiliter les utilisateurs à accéder au portail et à ses données.


- **Délégué à la Protection des Données** (DPD) : personne chargée de la protection des données au sein de son organisation et du respect au RGPD.


- **Portail** : interface d’accès aux données du SNDS et services associés (outils d’exploration, documentation…).


- **SNDS** : ensemble des données qui constituent le Système National des Données de Santé mentionné à l’*Article 1461-1-1 de la loi de modernisation du système de santé du 26 janvier 2016*.


- **Système-fils** : système du SNDS élargi, mettant à disposition tout ou partie du SNDS à des fins de recherche, d’études ou d’évaluation et répondant aux mêmes critères de sécurité que ceux du portail SNDS.


- **Utilisateur** : toute personne qui dispose d’un droit d’accès aux données du SNDS.
  

- **Responsable de traitement** (RT) : Personne morale équivalant au « promoteur ». Le RT détermine l’objectif du projet et les moyens de l’atteindre. Il est juridiquement responsable du projet et l’autorisation CNIL est établie à son attention. 


- **Responsable de mise en œuvre** (RMO) : Également personne morale, le RMO est le responsable scientifique du projet, il est aussi appelé « l’investigateur coordonnateur ». Généralement, son représentant rédige le protocole scientifique et supervise la manipulation des données. 



## Qu’est-ce que le Système National des Données de Santé SNDS ? 


*Le SNIIRAM, créé par la loi de financement de la sécurité sociale du 23 décembre 1998, article L.161-28-1 du code de la Sécurité Sociale, est un entrepôt national de données médico-administratives anonymes regroupant les informations issues des remboursements effectués par l’ensemble des régimes d’assurance maladie pour les soins du secteur libéral dont les objectifs sont de contribuer à une meilleure gestion de l’Assurance maladie et des politiques de santé, d’améliorer la qualité des soins et de transmettre aux professionnels de santé les informations pertinentes sur leur activité.*


La loi du 26 janvier 2016 de modernisation de notre système de santé instaure d’une part, en son article 193, le Système national des données de santé (SNDS) qui constitue dans la continuité du Système national d’information inter-régime de l’Assurance Maladie (SNIIRAM), une base de données unique relevant du code de la Santé Publique et, d’autre part, revoit le circuit pour accéder aux données. 


Géré par la CNAM, le SNDS permet de chaîner :

- les données de l’assurance maladie (base SNIIRAM),
- les données des hôpitaux (base PMSI),
- les causes médicales de décès (base du CepiDC de l’Inserm),
- les données relatives au handicap (en provenance des MDPH - données de la CNSA),
- un échantillon de données en provenance des organismes complémentaires.

Les deux premières catégories de données sont déjà disponibles et constituent la première version du SNDS. 
Les causes médicales de décès alimentent le SNDS depuis le deuxième semestre 2017. 
Le SNDS a pour finalité la mise disposition de ces données afin de favoriser les études, recherches ou évaluation présentant un caractère d’intérêt public et contribuant à l’une des finalités suivantes :

- l’information sur la santé ainsi que sur l’offre de soins, la prise en charge médico-sociale et leur qualité, 
- la définition, à la mise en œuvre et à l’évaluation des politiques de santé et de protection sociale,
- la connaissance des dépenses de santé, des dépenses d’assurance maladie et des dépenses médico-sociales,
- l’information des professionnels, des structures et des établissements de santé ou médico-sociaux sur leur activité,
- la surveillance, à la veille et à la sécurité sanitaires,
- la recherche, aux études, à l’évaluation et à l’innovation dans les domaines de la santé et de la prise en charge médico-sociale.

Il est interdit de procéder à un traitement qui aurait comme finalité :

- la promotion en direction des professionnels de santé ou des établissements des produits de santé ;
- l’exclusion de garanties des contrats d’assurance ou la modification de cotisations ou de primes d’assurance pour un individu ou un groupe d’individus.


Pour garantir et protéger la confidentialité de ces données, un pseudonyme, code non signifiant obtenu par un procédé cryptographique irréversible du NIR, est associé aux données se rapportant à chaque personne. 

Ce procédé permet de relier, pour une même personne, l’ensemble de ses données au sein du SNDS. 
Il permet également d’apparier, pour une même personne, des données en provenance du SNDS et des données figurant dans d’autres systèmes, avec l’autorisation de la CNIL. 

Les données du SNDS sont conservées pendant une durée de dix-neuf ans, en plus de l’année au cours de laquelle elles ont été recueillies. 
Passé ce délai, ces données sont archivées pour une durée de dix ans.

L’accès aux données du SNDS et leur utilisation ne peut se faire que dans **des conditions respectant le référentiel de sécurité**, visant à garantir la confidentialité et l’intégrité des données et la traçabilité des accès et autres traitements.

Toutes les personnes traitant des données du SNDS sont soumises au secret professionnel dans les conditions et sous les peines prévues à l’*article 226-13 du code pénal*.

Par ailleurs, le SNDS étant constitué de données de santé à caractère personnel, les traitements de données qui en sont issues sont soumis aux dispositions du *chapitre IX de la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés*, notamment dans sa dimension pénale.



## Qui a accès au SNDS et à quelles données ?
Le SNDS assure la mise à disposition des données selon la nature des données et le risque de ré-identification des patients, en deux modalités distinctes :


- Les données pour lesquelles aucune ré-identification n’est possible sont accessibles et réutilisables par tous, en [open data :](http://open-data-assurance-maladie.ameli.fr/) 


- Les **données potentiellement ré-idenfiantes** sont accessibles en environnement maîtrisé, respectant le référentiel de sécurité, avec des accès aux données SNDS régulés :



    -  **Sur autorisation pérenne**, pour l’Etat et ses agences, des établissements publics et des organismes **chargés d’une mission de service public** (recherches, sphère santé,…) listés dans le décret n°2016-1871 du 26 décembre 2016 : **accès aux données du SNDS en déclinant les accès selon les niveaux d’agrégation des données** (individuelles/agrégées bénéficiaires, …) **et les historiques accessibles**,



    -  **Sur projet**, via des accès standards après avis favorables ou favorables avec recommandation de l’INDS (Institut National des Données de Santé) et du CEREES (Comité d’Expertise pour les Recherches, les Etudes et les Evaluations), et sur autorisation de la CNIL, ou via des accès simplifiés, **à des fins de recherche, d’étude et d’évaluation d’intérêt public dans le domaine de la santé, pour les demandeurs publics et privés** (intermédiaires nécessaires dans certains cas pour respecter les 2 finalités interdites qui sont la promotion des produits, et la modification des contrats d’assurance) :  **accès à une partie du SNDS (EGB) ou à des extractions de données du SNDS restituées dans des conditions de sécurité équivalente**.


![schema](../../../files/Cnam/Images_guide_acces_projets/SchemaFiche2.png)



**La procédure d’accès standard sur projet à une extraction de données du SNDS est la suivante :**


1. Déposer une demande auprès de l’Institut National des Données de Santé (INDS), qui assure le secrétariat unique de dépôt des recherches et **évalue l'intérêt public du projet** (au cas par cas) dans les délais impartis par la loi (7 jours) ;


2. Le Comité d'Expertise pour les Recherches, les Etudes et les Evaluations dans le domaine de la Santé (CEREES) se charge d’émettre un avis (sous un délai d’un mois) sur la **méthodologie retenue**, sur la nécessité du recours à des données à caractère personnel, sur la pertinence de celles-ci par rapport à la finalité du traitement, sur le périmètre demandé des données et, s'il y a lieu, sur la qualité scientifique du projet ;


3. La Commission Nationale de l’Informatique et des Libertés (CNIL), dont l’instruction est facilitée par l’avis du CEREES et l’évaluation de l’INDS, donne expressément **une autorisation sous un délai de 2 mois renouvelable** ;


4. En fonction de l’autorisation de la CNIL, une **convention** est signée entre la Cnam et le responsable du traitement des données afin de mettre en œuvre l’extraction des données sur le périmètre autorisé.


**La procédure d’accès simplifiée à l’EGB (Echantillon de données individuelles de consommation de soins) est la suivante :** 

La CNIL donne compétence à l’INDS pour approuver l’accès à l’EGB après examen des 5 conditions cumulatives :

- la finalité́ d'intérêt public de la recherche, de l’étude ou de l’évaluation dans le domaine de la santé,


- la justification apportée par le responsable de traitement pour démontrer la pertinence scientifique du projet,


- l’absence de croisement d’identifiants potentiels,


- la durée de l'accès au portail pour le traitement envisagé qui doit être limitée à̀ celle nécessaire à la réalisation de la recherche, l’étude ou l’évaluation,
  

- le respect des exigences applicables au SNDS (notamment référentiel de sécurité́).


La responsabilité de s’engager dans une procédure simplifiée ou standard sera portée par le responsable de traitement. 
L’INDS devra sous 15 jours soit notifier l’approbation, soit l’informer de la transmission de son dossier vers la procédure classique (CEREES – CNIL) auquel cas les délais de cette procédure s’appliqueront. 


**Pour les acteurs soumis à des dispositions spécifiques : l’accès des entreprises productrices de produits de santé (industriels de santé) et des assureurs en santé est plus fortement encadré.** 
**Ils doivent :**


*	soit passer par un bureau d’études ou un organisme de recherche indépendant : l’INDS vérifie que le bureau d’études choisi a fait un engagement de conformité au référentiel sur la transparence des bureaux d’études,

-  soit démontrer que les modalités techniques d’accès ne permettent en aucun cas d’utiliser le SNDS pour des finalités interdites identifiées dans la loi par un audit préalable du responsable de traitement.  



## Quelle est la sécurité au sein du SNDS ?


Le SNDS étant principalement constitué de données personnelles de santé, les traitements de données qui en sont issues doivent être strictement encadrés afin de protéger les libertés et droits fondamentaux des personnes. 
A ce titre, ces traitements sont soumis aux dispositions :


- de la Loi Informatique et Libertés ;

- du règlement européen sur la protection des données (à compter du 25 mai 2018) ;

- du code de la santé publique.


La Commission Nationale de l'Informatique et des Libertés (CNIL) est chargée de surveiller l’application de ces textes. 
En cas de méconnaissance de leurs dispositions, les responsables de traitement peuvent faire l’objet de sanctions administratives importantes.

Conformément à la loi n° 2016-41 du 26 janvier 2016 de modernisation de notre système de santé, les accès aux données du SNDS doivent s’effectuer dans « des conditions assurant la confidentialité et l'intégrité des données et la traçabilité des accès et des autres traitements ». 
**Un référentiel précise ces conditions en édictant les règles de sécurité que tout système utilisant des données du SNDS se doit de mettre en place. 
Les modalités d’application de ce référentiel sont indiquées dans l’arrêté du 22 mars 2017.**


En premier lieu, la sécurité des données est garantie par l’obligation pour chaque gestionnaire de système de réaliser une analyse de risque. 
C’est cette analyse qui permet au gestionnaire de s’assurer que les données sont correctement protégées par des mesures de sécurité adéquates.


Le référentiel s’appuie notamment sur les mesures techniques et organisationnelles suivantes pour garantir la sécurité des traitements, en imposant :


- **la pseudonymisation** : pour chaque individu, l’ensemble des informations permettant de facilement l’identifier (NIR, …) doit être remplacé par un pseudonyme, c’est-à-dire par un code alphanumérique irréversible ne permettant pas le rattachement à son identité ; La pseudonymisation systématique des données constitue une des mesures fondamentales du dispositif dans le but de conserver la confidentialité des données manipulées.

**La pseudonymisation des identifiants des patients ne rend pas les données du SNDS anonymes strictement ; le croisement de certaines variables, appelées « identifiants potentiels », peut permettre de ré-identifier les patients.** 
**Ce sont les données suivantes :**

1.  **Commune de résidence du bénéficiaire**
2.  **Année et mois de naissance**
3.  **Date de soins en jour, mois, année (et dérivés : date d’entrée, date de prescription …)**
4.  **Date de décès en jour, mois, année**
5.  **Commune de décès**


Ainsi, des **profils d’accès aux données ont été mis en place** afin de n’autoriser l’accès qu’à un seul identifiant potentiel à la fois **selon les autorisations décrites dans le décret**.


- **l’authentification** : elle permet d’une part de contrôler les accès et d’autre part d’imputer les actions effectuées sur le système à une personne désignée. Une authentification forte sur le portail SNDS sera donc mise en place dès mars 2019 à travers la concaténation d’au moins deux facteurs d’authentification ; 


- **la traçabilité** : l’ensemble des événements relatifs à la sécurité du système doit être tracé. Cette traçabilité (entrées, sorties, utilisateurs….) permet de contrôler l’utilisation de données et de disposer de preuves pouvant être instruites en justice ;


- **le contrôle** : il permet de s’assurer d’une utilisation des données conforme à la loi et au référentiel. Effectué a posteriori par le biais d’audits, de la revue annuelle des habilitations et de contrôles de la CNIL a posteriori, il est notamment rendu possible par l’utilisation conjointe de la traçabilité et de l’authentification. En cas de non-respect des conditions d’utilisation des données, des sanctions adéquates peuvent être prononcées, notamment la suspension de l’accès aux données pour tout l’organisme.


- **la sensibilisation et la formation des utilisateurs**  avec la mise en place d’un dispositif de formation aux données, certains modules rendus obligatoires, notamment ceux présentant le référentiel de sécurité du SNDS ainsi que ceux permettant l’accès aux données individuelles bénéficiaires (Cf fiche 6 : Quels sont les différents parcours de formation ?).


-  **Les Conditions Générales d’Utilisation** (CGU) qui formalisent l’engagement individuel au respect des conditions d’accès aux données doivent être signées en ligne dès la première utilisation du portail SNDS (Cf. fiche 4 : Quelles sont les conditions d’ouverture d’un compte ?).



**Hors portail d’accès aux données du SNDS, des systèmes fils autorisés et homologués au référentiel de sécurité peuvent accueillir des données du SNDS.**

En plus de ces règles spécifiques, les traitements de données du SNDS sont soumis à l’ensemble des référentiels généraux applicables aux systèmes d’information du Ministère des Affaires sociales et de la santé, à savoir : la Politique Générale de Sécurité des Systèmes d’Information en Santé (PGSSI-S), la Politique de Sécurité des Systèmes d’Information pour les ministères chargés des affaires sociales (PSSI MCAS), et le Référentiel Général de Sécurité (RGS).



## Quelles sont les conditions d’ouverture d’un compte ?


1. **Pour obtenir l’ouverture d’un compte SNDS, l’utilisateur doit avoir suivi les formations pré-requises** préalablement à l’attribution de droits d’accès aux données du SNDS :

  - Le module « **Données d’extraction DCIR pour les accès sur projet** » pour les utilisateurs d’extractions de données sur projet, ou la formation « **Architecture et données du SNIIRAM/SNDS** » pour les utilisateurs de l’EGB sur projet. C’est un prérequis **obligatoire** pour être habilité à accéder aux données du SNDS sur le portail SNDS. Cette formation est ouverte dès lors que le CEREES a formulé un avis favorable ou favorable avec recommandation sur le projet. 


  - Le module «**EGB**», produit de restitutions de données de consommation individuelles bénéficiaires échantillonnées. C’est également une formation **obligatoire** pour accéder aux données du SNDS, dès lors que le CEREES a formulé un avis favorable ou favorable avec recommandation ou que l’INDS en a autorisé l’accès simplifié ;


2. **L’utilisateur doit ensuite effectuer une demande d’ouverture de compte SNDS par l’intermédiaire de l’Autorité d’Enregistrement (AE)** : la création de compte ne s’effectue pas automatiquement après avoir participé à la formation. 
L’utilisateur doit être habilité nominativement par l’AE qui est le directeur de la Stratégie, des Etudes et des Statistiques de la Cnam. 
L’AE vérifie que cet utilisateur est désigné dans la convention passée entre le responsable du traitement du projet et la Cnam.


3. **L’utilisateur doit signer les Conditions Générales d’Utilisation** (CGU) du SNDS, à la première connexion au portail d’accès aux données, qui formalisent : 
  - l’engagement individuel de l’utilisateur au respect des conditions d’accès aux données :
    - le respect des finalités d’utilisation autorisées et interdites du SNDS,
    - l’absence d’action visant la ré-identification,
    - l’obligation de ne diffuser que des données anonymes,
    - l’engagement du respect du référentiel de sécurité.
    
  -  les conditions d’utilisation du portail et des services associés :

L’utilisateur a interdiction d’exporter du portail SNDS des données non anonymes du SNDS, sauf cas particulier d’exports de données dans un système-fils (SNDS élargi) respectant le même référentiel de sécurité : Il ne doit pas être possible, à partir des données, de déduire ou revenir à une information personnelle sur un individu.

L’utilisateur est informé que ses actions font l’objet de traces qui seront exploitées pour détecter tout comportement considéré comme anormal (dont non-respect des engagements pris).

Pour les données SNDS des systèmes-fils, ces CGU sont également signées lors de la convention passée avec la Cnam et annexée à celle-ci.


4. **L’utilisateur doit utiliser les données du SNDS dans un cadre sécurisé** qui respecte le référentiel de sécurité, dans le portail ou dans un système fils.


## Quels sont les rôles de l’Autorité d’Enregistrement ?


Dans le cas des **accès aux données du SNDS sur projet, l’habilitation temporaire est délivrée par la Cnam**, représentée par le directeur de la Stratégie, des Etudes et des Statiques. 

**La Cnam délivre un compte pour les utilisateurs demandant une extraction de données du SNDS ou un accès à une partie du SNDS (EGB), sous réserve qu’ils aient suivi les formations obligatoires adéquates.** 

**Ces comptes sont ouverts pour les seuls utilisateurs inscrits dans la convention passée entre la Cnam et le responsable du projet.** 
Un compte est ouvert par projet.

Cet accès se formalise :


-  pour les **utilisateurs d’extractions de données**, par un numéro de profil de connexion au portail (117) donnant accès à un espace projet permettant d’accéder aux données du projet ;

-  pour les **utilisateurs ayant un accès ponctuel à l’EGB**, cet accès se formalise par un numéro de profil de connexion au portail (38, 39, 40, 53 ou 104) donnant accès à l’EGB


**L’AE procède, en temps voulu, à la clôture des comptes des utilisateurs** (la date de fin de droit correspondant à la fin du projet, établi par la convention passée entre la Cnam et le responsable du traitement).


## Quels sont les différents parcours de formation ?


Dans le cadre d’un accès non permanent aux données du SNDS, pour être habilité à consulter une extraction de données du SNDS sur le portail, **le futur utilisateur doit obligatoirement suivre le module** de formation “**Données d’extraction DCIR pour les accès sur projet**” (réf. Institut 4.10 REQ-256-AM). 
Cette formation est accessible dès lors que le CEREES, au cours de la procédure standard de demande, a formulé un avis favorable ou favorable avec recommandation sur l’autorisation d’accès à une extraction de données du SNDS.

Dans le cas d’un accès ponctuel à l’EGB (Echantillon des bénéficiaires), en procédure standard ou simplifiée autorisée par l’Institut National des Données de Santé, **le futur utilisateur doit obligatoirement suivre le module** de formation “**Architecture et données du SNIIRAM/SNDS**” (réf. Institut 4.10 REQ-054-AM), puis la formation « **EGB** » (réf. Institut 4.10 REQ-086-AM) pour accéder à ces données.

En complément, une formation sur les données du PMSI accessibles dans le SNDS « **initiation au PMSI à travers le SNDS** » (réf. Institut 4.10 REQ-254-AM) peut être suivie.

**Parcours de formation pour les utilisateurs ayant un accès sur projet aux SNDS**


![schema](../../../files/Cnam/Images_guide_acces_projets/SchemaFiche6.png)


Les formations se déroulent en partenariat avec l’Institut 4.10, sur les sites de Paris, Lyon et Tours.

Pour choisir les formations et connaitre les modalités d’inscription, l’utilisateur peut consulter le fichier «Formations SNIIRAM/SNDS – Planning et descriptif - version Jour Mois Année » situé sur l’accueil du portail SNDS, ou consulter le planning directement [le site de l’Institut 4.10.](https://catalogue-quatredix.valsoftware.cloud/CATALOGUE/default.aspx) 



## Quelles sont les modalités de connexion sur le portail ?

-  Une fois habilité par l’AE, l’utilisateur dispose d’un compte identifiant qui est transmis par messagerie et une calculette qui lui est adressée par courrier. 
Ces éléments sont personnels et ne doivent pas être utilisés par un tiers.


-  Les droits d’un utilisateur sur les données du SNDS se traduisent par un numéro de profil de connexion au portail, tels qu’ils sont demandés par l’AE. 
**Ce numéro de profil de connexion au portail est le n°117 pour les personnes ayant un accès sur projet à une extraction de données DCIR, et le n°38, 39, 40, 53 ou 104 pour un accès sur projet à l’EGB**. 
Il permet d’accéder :


    -  aux données de l’extraction dans un espace projet accessible via SAS/Guide, ou à l’EGB,
    -  à l’ensemble de la documentation SNDS,
    -  au dictionnaire de données SNDS,
    -  aux forums dédiés à chacun des produits du SNDS, et en particulier au forum DCIR.


-  L’adresse URL du portail est la suivante : https://portail.sniiram.ameli.fr. 
Les données d’extraction ainsi que le produit EGB se situent dans l’onglet `STATISTIQUES` du portail SNDS où les tables autorisées sont accessibles et interrogeables par SAS guide.


![schema](../../../files/Cnam/Images_guide_acces_projets/SchemaFiche7.png)


-  Le guide d’utilisation du portail et la procédure d’installation de certains modules (certificats, citrix) sont disponibles sur l’accueil du portail.
  


## Quelles données du SNDS peuvent être exportées et importées ?


**Le référentiel de sécurité du SNDS impose l’interdiction de :**


- Exporter des données individuelles bénéficiaires et Professionnel de Santé non anonymes du portail SNDS

→ Le Référentiel Sécurité impose de ne pas de sortir de données tant que l’on n’a pas la certitude qu’elles sont anonymes c’est à dire qu’il ne doit pas être possible à partir de ces données de déduire une information personnelle sur un individu, bénéficiaire ou professionnel de santé.


::: tip

**Quelques bonnes pratiques** :

1. ne pas restituer de petits effectifs,
2. une information de santé sur un individu ne doit pas pouvoir être déduite à partir d'autres attributs, en particulier les données médicales (ALD, CIM10, GHS …)
3. **ne pas sortir les identifiants potentiels** (le croisement des identifiants potentiels peut permettre de ré-identifier un individu) 
4. **ne pas sortir d’identifiants de personnes bénéficiaires ou professionnels de santé**. Pour ces derniers, l’export n’est pas autorisé même avec un identifiant Professionnel de Santé crypté.


:::



- Importer dans le portail SNDS des données potentiellement identifiantes

→ L’import de données dans le portail SNIIRAM/SNDS n’est autorisé que pour des données anonymes.

→ En cas de besoin d’import de données non anonymes (par exemple ajout de données d’une cohorte), une autorisation CNIL est nécessaire.

**Une exigence de traçabilité de ces actions d’import / export de données permet d’identifier et d’agir contre les comportements frauduleux.**

Aussi, l’utilisateur doit-il changer ses habitudes de travail et traiter les données de détail dans le portail SNDS, puis exporter du portail des données agrégées.
Par ailleurs, pour éviter les imports des mêmes tables par de nombreux utilisateurs, une mise à disposition de tables dans RFCOMMUN est possible (si vous souhaitez mutualiser des tables utiles à tous les utilisateurs, contacter par mail : snds.cnam@assurance-maladie.fr)


**Une solution d’import/export est proposée sur le portail** dans la rubrique `TELECHARGEMENT DES FICHIERS DANS LE REPERTOIRE DOWNLOAD` de l’onglet `STATISTIQUE` du portail SNDS avec création d’un encart dédié; 


### Le processus d’import/export de fichiers du portail SNDS  

![schema](../../../files/Cnam/Images_guide_acces_projets/SchemaFiche8_1.png)


#### Le processus d’import de fichiers

![schema](../../../files/Cnam/Images_guide_acces_projets/SchemaFiche8_2.png)


#### Le processus d’export de fichiers

![schema](../../../files/Cnam/Images_guide_acces_projets/SchemaFiche8_3.png)



## Comment le Délégué à la Protection des Données doit-il remplir le document décrivant les caractéristiques des traitements portant sur des données individuelles ?


Conformément à l’arrêté du 6 avril 2017, un document-type est porté en modèle afin que le **Délégué à la Protection des Données** (DPD), présent dans chaque organisme, puisse **tenir un registre précisant les caractéristiques des traitements portant sur des données individuelles du SNDS**.
Le DPD doit veiller à la **traçabilité** des traitements réalisés par la tenue de ces registres (enregistrement des utilisateurs, des projets).

Ce dernier doit comporter a minima les informations suivantes, sur l’utilisation des données individuelles bénéficiaires, professionnels de santé ou établissements ainsi que les identifiants potentiels utilisés et pourra faire l’objet d’un contrôle par la CNIL :

![schema](../../../files/Cnam/Images_guide_acces_projets/SchemaFiche9.png)


## Quel accompagnement autour du SNDS ? 


La CNAM propose le dispositif d’accompagnement suivant en se connectant sur le portail SNDS et en se référant aux différents onglets et espaces. 
L’ensemble des profils permet d’interroger la documentation.


![schema](../../../files/Cnam/Images_guide_acces_projets/SchemaFiche10.png)


### Le Support

Pour exploiter les données du SNDS, le support aux utilisateurs est différent selon qu’il s’agit d’une aide fonctionnelle ou technique.

::: warning
1.	**S’il s’agit d’un besoin d’aide fonctionnelle** (sur la donnée, le contenu des bases, l’explication d’une méthode, d’une requête)

:::

::: tip
L’onglet `FORUM` propose des **forums sur chaque produit du SNDS** (DCIR-PMSI, EGB, datamarts AMOS, DAMIR…) ; ils permettent aux utilisateurs de trouver des réponses à leurs interrogations, d’échanger sur **un sujet d’ordre fonctionnel avec la communauté des utilisateurs.** 

Des experts-métiers y répondent également. 
Ces forums sont accessibles en se connectant sur le portail du SNDS, quel que soit le profil.

:::


::: warning

2.	**Si la question de l’utilisateur porte sur un problème technique d’accès aux données, ou une suspicion d’anomalie des données**

:::


::: tip

Le [`Portail du Support National`](https://portail.sniiram.ameli.fr) pour le régime général de l’assurance maladie ou **le mail** support-national@assurance-maladie.fr pour les partenaires et organismes des autres régimes d’assurance maladie permet de déposer **un Ticket de support**.
L’objet du message doit impérativement comporter les mots « *Création de demande – SNIIRAM/SNDS – Suivi du nom du produit* » car un automate traite dans un premier temps les messages reçus. 
Il est indispensable de préciser dans le corps du message son identifiant, son organisme, région et profil de connexion, le produit SNDS exploité. 
Un modèle de mail est proposé sur la page d’accueil du portail dans la rubrique « Pour votre Information ».

:::


::: warning

3.	Par ailleurs pour toutes questions **sur les formations ou la procédure d’obtention d’une habilitation**, vous pouvez écrire sur la boite aux lettres générique : 
**snds.cnam@assurance-maladie.fr**

:::



### La Documentation du portail


1.	L’onglet `DICTIONNAIRE` **vous permet d’ouvrir le Dictionnaire des données du SNDS en version WEB et d’interroger les informations et définition sur la donnée par produit, table ou variable.**


2.	Vous retrouverez toute la **‘documentation essentielle’ sur la page d’accueil du portail**, dans la rubrique `POUR VOTRE INFORMATION`, entre autres : 


-  **Le catalogue offre de service d’accompagnement** qui résume tout l’accompagnement proposé autour des produits du SNIIRAM/SNDS : formations et comités utilisateurs, selon le profil des utilisateurs et les objectifs suivis.

-  **Le planning des formations**

-  **Le récapitulatif des anomalies recensées** sur les produits de restitution du SNIIRAM/SNDS et leur statut de résolution.

-  **Les titres des principales actualités** (communiqués) des 2 derniers mois sont positionnés pour une 1ère information rapide.

-  **Les bonnes pratiques SAS et BO**.

-  Et **divers documents d’actualité forte** (par exemple évolutions dues à la mise en œuvre du référentiel sécurité, nouvelle version de SAS,…)

![schema](../../../files/Cnam/Images_guide_acces_projets/SchemaFiche10_2.png)


3.	En cliquant sur l’onglet `TABLEAUX ET REQUETES`, vous accédez à une **arborescence de documentations insérées dans Business Object**.

![schema](../../../files/Cnam/Images_guide_acces_projets/SchemaFiche10_3.png)


![schema](../../../files/Cnam/Images_guide_acces_projets/SchemaFiche10_4.png)


**La documentation est détaillée dans l’arborescence :**
Dossiers publics / SNIIRAM / _Documentation SNIIRAM


| Dans ces dossiers | Vous trouverez | 
|----|----|
|Actualités SNIIRAM-SNDS |	Tous les communiqués généraux d’information sur le SNIIRAM (nouveau produit, alerte sur une anomalie, …) |
Cartographie |	La méthodologie, la description des tables disponibles sur ORAVUE |
DCIR - DCIR simplifié |	Toute la documentation relative aux applications DCIR et DCIR simplifié : les informations, la liste des variables par table, les supports de formation et des comités utilisateurs, le niveau de chargement, les profils pour accéder à DCIR-DCIRS, la liste des données sensibles et médicales dans DCIR-DCIRS et une bibliothèque de requêtes. Vous y trouverez également la FAQ DCIR-PMSI*. |
Documentation |	Toute la documentation générale du SNIIRAM-SNDS : la liste et objectifs des produits de restitution, le Kwikly ‘K’atalgue des données du SNDS, les diaporamas des différents comités utilisateurs et amphis SNDS, la FAQ des datamarts BO*, les règles de gestion de la statistique mensuelle, la nomenclature des variables SNIIRAM, les profils pour accéder au portail/produits, les textes officiels  SNIIRAM-SNDS, les mises en œuvre du référentiel sécurité… |
EGB	| Toute la documentation relative à l’EGB et aux tables simplifiées de l’EGB : les informations spécifiques, la liste des variables par table, la documentation pour les tables du PMSI et BGNA intégrées, le niveau de chargement, les profils pour accéder à l’EGB, la liste des données sensibles et médicales dans l’EGB. Vous y trouverez également la FAQ EGB*. |
Formation |	Le planning des formations SNIIRAM / SNDS et les supports de cours et exercices des formations SNIIRAM / SNDS |
Manuels utilisateurs |	les manuels utilisateurs de tous les produits SNIIRAM / SNDS en dehors de DCIR, DCIR simplifié, EGB et PMSI (par exemple dénombrement des bénéficiaires et PS, tables EHPAD, les Causes médicales de décès tout récemment…) |
Offre de service |	Le fichier informant du niveau de chargement des produits agrégés bénéficiaires accessibles via BO WebI. |
PMSI |	Toute la documentation relative aux tables du PMSI : liste des variables, liste des profils pour y accéder, liste des données médicales et sensibles dans le PMSI…. |
	
*Les foires aux questions permettent de récapituler les demandes d’assistance


### La documentation collaborative du Health Data Hub 

Le [site public collaboratif du Health Data Hub](https://documentation-snds.health-data-hub.fr) met à disposition des utilisateurs de la documentation alimentée par des contributeurs qui utilisent la technologie du GitHub. 
  

## Comment signer une convention d’extraction des données SNDS avec la Cnam ?


L’accès **sur projet** à des données de santé potentiellement ré-idenfiantes est possible pour les demandeurs publics et privés, en environnement maîtrisé, respectant le référentiel de sécurité. 

Le projet doit suivre une finalité de recherche, d’étude et d’évaluation d’intérêt public dans le domaine de la santé : 


- pour accéder à une partie du SNDS (EGB)  sans croisement d’identifiants potentiels, après avis favorables de l’**INDS** (Institut National des Données de Santé) dans le cadre d’une procédure d’accès simplifiée.

- pour accéder à des extractions de données du SNDS (données DCIR chainées aux données PMSI et CépiDC) après avis favorable ou favorable avec recommandation du **CEREES** (Comité d’Expertise pour les Recherches, les Etudes et les Evaluations), et sur autorisation de la **CNIL**.


![schema](../../../files/Cnam/Images_guide_acces_projets/SchemaFiche11.png)


Le porteur de projet dépose un dossier dématérialisé sur la plateforme de dépôt de l’Inds qui a 7 jours pour rendre un avis sur l’intérêt public du projet. Le dossier est constitué des éléments suivants : 


- **le protocole scientifique** il doit être précis sur la méthodologie de l’étude et doit mentionner clairement les données nécessaires et leur circuit. Il doit justifier notamment l’utilité des identifiants potentiels et des causes de décès. Par défaut, l’extraction des données ne concerne que les données DCIR, PMSI et leurs référentiels, ou EGB le cas échéant.
- **la grille-résumé CEREES**
- **les déclarations publiques d’intérêt** des Responsable de traitement et Responsable de mise en œuvre
- **la demande d’autorisation CNIL** pré-remplie signée par le Responsable de traitement. 
 

Le CEREES émet un avis dans un délai de 1 mois sur la méthodologie retenue, sur la nécessité du recours à des données à caractère personnel, sur la pertinence de celles-ci par rapport à la finalité du traitement et, s'il y a lieu, sur la qualité scientifique du projet.
Une fois l’accord CNIL obtenu, après 2 mois renouvelable une fois (une absence de réponse vaut autorisation) la Cnam prend contact avec le responsable de traitement et recueille les éléments nécessaires à la rédaction de la **convention**.
La convention de mise à disposition des données est à valider et à signer entre le responsable de traitement (Commanditaire) et la CNAM (Directeur Général ou son délégué) et éventuellement le responsable de mise en œuvre du traitement. 



La convention précise :
- le périmètre des données transmises en adéquation avec l’autorisation CNIL
- les modalités de ciblage et/ou d’appariement des patients (direct/indirect)
- les modalités de mise à disposition des données (espace projet / EGB dans le portail ou système fils)
- les conditions de sécurité de transmission des données
- le cadre d’utilisation et de conservation conformément à l’autorisation de la CNIL et les engagements pris par le destinataire : propriété des données, publication des données (obligation de transparence)
- La liste des utilisateurs accédant aux données sur le portail SNDS (annexe 2)



## Quelles sont les étapes dans l’extraction des données du SNDS ?


Dès lors que le projet a reçu un accord de la CNIL, l’INDS qui assure un rôle de facilitateur dans les échanges entre tous les interlocuteurs, transmet à la Cnam le protocole scientifique, son résumé et l’avis CEREES.

La CNAM prend contact avec le responsable de traitement de l’extraction et recueille les éléments nécessaires à la rédaction de la convention. 

En parallèle de l’élaboration de la convention, la Cellule DEMEX de la CNAM met en œuvre le ciblage des patients pour réaliser l’extraction des données du SNDS et la mettre à disposition du responsable de traitement.


- **Les différents types d’extraction de données que peut réaliser la Cnam**
	
    - Appariement **direct** – sur l’identifiant bénéficiaire – avec des cohortes disposant du NIR 
    - Appariement **indirect** – sur diverses variables – avec  des cohortes  ne disposant pas du NIR
    - **Cohorte** pseudonyme sur critères d’inclusion - les critères d’inclusion doivent être formalisés dans un cahier des charges type 

- **Procédure de pseudonymisation des NIR dans le cas d’un appariement direct**  : 


Lorsqu’il y a un appariement direct entre les NIR du SNDS et les NIR dont dispose le porteur de projet, il faut procéder à une pseudonymisation avant extraction : 

Le porteur de projet transmet les composantes à pseudonymiser (NIR des assurés (13C), date de naissance (AAAAMMJJ), sexe (1C) et NIR du bénéficiaire (13C)) au CRIP (Centre Informatique) via une application sécurisée SAFE ; chaque NIR est associé à un Numéro de Sujet (nombre aléatoire associé au nom du projet).

Un traitement de pseudonymisation sur le NIR du porteur du projet se déclenche de façon automatique, jusqu’à sa transformation en NIR pseudonymisé correspondant à celui du SNDS : l’extraction des données du DCIR, PMSI et causes de décès peut alors être effectuée par la cellule DEMEX.

Cette dernière restitue les données de consommation mais ne fournit pas les NIR pseudonymisés : c’est le Numéro de Sujet affecté au NIR qui est affecté. 
Le porteur de projet a une autorisation de la CNIL pour disposer à la fois du numéro de sujet et du fichier de ses NIR dans une table de correspondance.

Le porteur de projet et les signataires de la convention peuvent accéder aux données d’extractions du SNDS dans un espace projet dédié sur le portail SNDS. 
Les données peuvent également être livrées (transfert sécurisé) par la cellule DEMEX dans une bulle sécurisée (système fils propre au porteur de projet respectant les mêmes conditions de sécurité que le portail).

Le porteur de projet peut de façon autonome ajouter des données externes à son extraction SNDS, uniquement si elles ont été listées au préalable dans le protocole scientifique. 
Pour cela il utilise la procédure d’importation des données du portail.



- **Recommandations dans le cas d’un appariement indirect** : 

Le porteur de projet transmet à la Cnam le Numéro de Sujet du projet et le plus possible de variables d’appariement, notamment sur les caractéristiques des patients (Sexe, Année et mois de naissance, Date de décès, Département ou Commune de résidence, etc…). 
Il est préconisé de fournir un nombre important de séjours ou de soins par patient (actes CCAM, établissement avec hospitalisation,…), de privilégier les variables très discriminantes telles que Date de décès, Codes CIM10 très spécifiques, Diagnostics associé, relié et/ou principal, et de minimiser les valeurs manquantes et le nombre d’erreur de saisie. 
Compléter avec un dictionnaire de variables est un plus pour réaliser l’appariement.



