# Médicaments de la liste en sus 
<!-- SPDX-License-Identifier: MPL-2.0 -->

Dans une première partie, nous présentons les médicaments facturés en sus des tarifs des séjours hospitaliers.   
Dans une seconde partie, nous expliquons comment extraire du PMSI les dépenses associées aux médicaments de la liste en sus.

## Présentation

### Médicaments financés « en sus » des tarifs des séjours hospitaliers

En principe, pour chaque séjour d’un patient, les hôpitaux reçoivent de l’assurance maladie un paiement forfaitaire global qui comprend notamment le coût des médicaments administrés lors de ce séjour.
Dans certains cas, la prise en charge du patient nécessite la prescription de médicaments innovants et coûteux.  
Le caractère innovant d’un médicament est apprécié par un critère appelé « amélioration du service médical rendu » (ASMR), permettant d’évaluer l’apport du médicament par rapport aux autres thérapies existantes (et notamment de celles qui peuvent être prises en charge par les tarifs hospitaliers).  
La HAS évalue l’ASMR d’un médicament en le qualifiant de majeur (I), important (II), modéré (III), mineur (IV) ou inexistant (V).  
Si l’ASMR est jugé majeur, important ou modéré, le médicament est remboursé à l’hôpital à 100 %, en plus du forfait d’hospitalisation à chaque fois qu’un patient le recevra dans l’indication considérée. C'est également le cas des médicaments avec un niveau mineur d'ASMR (IV) en l'absence d’alternative thérapeutique.  

Ce dispositif vise à favoriser l’accès aux traitements innovants et coûteux à travers un financement dérogatoire, en garantissant à l’établissement de santé de pouvoir administrer ces traitements sans que cela ne lui impute trop son budget global.  
La liste des médicaments bénéficiant de ce financement dérogatoire s’appelle la « liste en sus », car il s’agit de traitements financés « en sus » des tarifs des séjours hospitaliers.

En pratique, au-delà de l’ASMR, qui est une condition nécessaire, il y a un second critère prix qui joue : un médicament pourra être inscrit sur la liste en sus si son prix est trop élevé pour être intégré au tarif du séjour hospitalier. 
Ainsi, si des médicaments génériques ou biosimilaires d’un médicament référent inscrit sur la liste en sus arrivent sur le marché, ils seront de facto ASMR V mais ajoutés à la liste en sus si leur prix reste élevé.

*Source >* [site du Ministère de la santé](https://solidarites-sante.gouv.fr/archives/archives-presse/archives-breves/article/prise-en-charge-des-medicaments-a-l-hopital-precisions-sur-le-decret-liste-en)

### Unités communes de dispensation (UCD) prises en charge 

La liste en sus définit un ensemble d’unités communes de dispensation (UCD), *i.e.* le plus petit conditionnement pharmaceutique, auxquelles correspondent un code (7 caractères numériques) et un libellé.
Le contenu de la liste en sus est dynamique.  
La liste initiale a été publiée au journal officiel de la république française le 10 mai 2005 : 
« Arrêté du 4 avril 2005 pris en application de l'article L. 162-22-7 du code de la sécurité sociale et fixant la spécialités pharmaceutiques prises en charge par l'assurance maladie en sus des prestations d'hospitalisation ». 
Cette liste est ensuite mise à jour par des arrêtés modificatifs.  
Sur le [site de l’ATIH](https://www.atih.sante.fr/unites-communes-de-dispensation-prises-en-charge-en-sus), vous trouverez le fichier historique qui permet de retracer toutes les modifications apportées à cette liste (inscription, radiation, modification de tarifs, modification du libellé UCD, etc.), ainsi que la date de prise d’effet de ces modifications.  
Un tarif de responsabilité est fixé pour chaque UCD par le Comité économique des produits de santé, conformément à l’accord du 30 mars 2004, sous la forme d’avis publiés dans le journal officiel de la république française. Il est à noter qu’il y a un décalage dans le temps entre l’inscription sur la liste et la fixation d’un tarif de responsabilité.

L'ATIH restitue également des [statistiques sur la consommation annuelle des médicaments en sus au niveau national](https://www.atih.sante.fr/unites-communes-de-dispensation-prises-en-charge-en-sus), déclinées par année et par molécule.

*Sources >* 
- [ATIH : UCD prises en charge](https://www.atih.sante.fr/unites-communes-de-dispensation-prises-en-charge-en-sus)
- [ATIH : synthèses nationales](https://www.atih.sante.fr/unites-communes-de-dispensation-prises-en-charge-en-sus)

### Prescription de médicaments « en sus » des tarifs des séjours hospitaliers

Les médicaments de la liste en sus peuvent être prescrits au cours de séjours (dans le public et privé) en MCO, HAD et SSR, ainsi qu’au cours d’actes et consultations externes MCO et SSR (dans le public).  
 
En plus des médicaments de la liste en sus au sens strict, on trouve d’autres types de médicaments qui sont remboursés en sus du GHS.   
- les médicaments soumis à autorisation temporaire d’utilisation (ATU) (en MCO, SSR et HAD)
- les médicaments thrombolytiques pour le traitement de l’AVC ischémique (MCO) 
- les médicament coûteux hors liste en sus et hors ATU (HAD)

*Pour plus d'information >* [ATIH](https://www.atih.sante.fr/nomenclatures-de-recueil-de-l-information/medicaments#Medicaments%20spe%20en%20SSR) : informations sur les UCD communes aux champs MCO, HAD, SSR, spécifiques à HAD ou SSR, ainsi que sur les médicaments en ATU.


## Les médicaments de la liste en sus dans le PMSI 

Dans cette partie, nous montrons comment extraire le montant des dépenses en sus, dans le public et le privé, à partir des tables du PMSI.  
Pour le privé, il est aussi possible d’extraire le montant des dépenses en sus à partir du DCIR (ou DCIRS). Nous n'en parlons pas dans la présente fiche. 

### Les tables et variables à considérer

Les tables se trouvent sous ORAVUE. 
Nous indiquons le libellé des variables à extraire de chaque table, mais par leur nom car le nom d’une même variable peut être différent d’un champ du PMSI à l’autre. 
Exemple : le nombre de séjours impliqués est indiqué par la variable `NBR_SEJ` en MCO en et `SEJ_NBR` en HAD. 
Se référer au [dictionnaire des variables du SNDS](https://drees.shinyapps.io/dico-snds/) pour plus d’informations.

#### Tables et variables communes aux champs MCO, SSR et HAD

- `T_MCOaaMED`, `T_HADaaMED`, `T_SSRaaMED` :  médicaments en sus (ES publics)  
    o	Numéro FINESS de l’établissement  
    o	Numéro séquentiel du séjour   
    o	Code UCD  
    o	Code LES (indication des spécialités pharmaceutiques inscrites sur la liste en sus), (cette variable n'existe pas en SSR)  
    o	Prix d'achat multiplié par le nombre administré  
    o	Nombre administré éventuellement fractionnaire  
    o	Année de la date d'administration  
    o	Mois de la date d'administration  
    o	Nombre de séjours impliqués (pour MCO et HAD)  
- `T_MCOaaMEDATU`, `T_HADaaMEDATU`, `T_SSRaaMEDATU` : médicaments soumis à autorisation temporaire d’utilisation (ES publics et privés)  
    o	Numéro FINESS de l’établissement  
    o	Numéro séquentiel du séjour  
    o	Code UCD  
    o	Prix d'achat multiplié par le nombre administré  
    o	Nombre administré éventuellement fractionnaire  
    o	Année de la date d'administration  
    o	Mois de la date d'administration  
- `T_MCOaaFH`, `T_HADaaFH`, `T_SSRaaFH`: médicaments en SUS (ES privés)  
    o	Numéro FINESS de l’établissement  
    o	Numéro séquentiel du séjour  
    o	Code UCD  
    o	Code LES (indication des spécialités pharmaceutiques inscrites sur la liste en sus), (cette variable n'existe pas en SSR)  
    o	Prix d'achat unitaire TTC  
    o	Prix unitaire facturé  
    o	Quantité  
    o	Montant total facturé TTC  
    o	Coefficient de fractionnement  
    o	Année de début du séjour  
    o   Mois de début du séjour  

#### Tables et variables spécifiques MCO

- `T_MCOaaMEDTHROMBO` : médicaments thrombolytiques pour le traitement de l’AVC ischémique (ES publics)  
Mêmes variables que pour `T_MCOaaMEDATU`.
- `T_MCOaaFHSTC` : médicaments en SUS ACE (ES publics)  
    o	Numéro FINESS de l’établissement  
    o	Numéro séquentiel de l’ACE  
    o	Code UCD  
    o	Prix d'achat unitaire TTC  
    o	Quantité  
    o	Montant total facturé TTC   
    o	Coefficient de fractionnement  
    o	Année de début du séjour  
    o	Mois de début du séjour  

#### Tables et variables spécifiques HAD

- `T_MCOaaMEDCHL` : médicament coûteux hors liste en sus et hors ATU (ES publics)  
Mêmes variables que pour `T_HADaaMEDATU`.

### Les filtres à appliquer

#### Filtres à appliquer aux dépenses en sus en cours de séjour en ES public

Si non précisé, ces filtres s’appliquent à toutes les tables (`MED`, `MEDATU`, `methrombo` et `medchl`).

La plupart de ces filtres sont issus de la documentation de l’ATIH.

*Source >* 
[ATIH](https://www.scansante.fr/applications/synthese-dmi-mo-sus) : méthodes d'analyse des dépenses liées aux molécules onéreuses et dispositifs implantables (PMSI MCO, SSR et HAD)  



##### Critères de suppression

- Nombre UCD = 0 et prix d’achat > 0
- Nombre UCD = 0 et prix d’achat = 0
- Nombre UCD < 0 ou prix d’achat < 0
- Nombre UCD >=100 (l’ATIH ne recommande d’utiliser ce filtre qu’en SSR)
- Codes UCD erronés (à vide ou indéterminés)
- Année d’administration < N-2


##### Critère de suppression (spécifique table `MED`)

- Molécules administrées hors période d’appartenance à la liste en sus

##### Vérification de l'appartenance à la liste en sus (spécifique table `MED`)

On récupère le mois et l’année d’administration pour vérifier si ces médicaments étaient bien dans la liste en sus à cette période.  
On utilise pour cela le [document où se trouvent les dates d'inscription et de radiation de chaque UCD dans la liste en sus](https://www.atih.sante.fr/unites-communes-de-dispensation-prises-en-charge-en-sus) (fichier historique). 
Si le mois et l’année d’administration sont à vide, l'ATIH recommande d'utiliser le mois et l’année de sortie de l'hôpital.  
On ne conserve ensuite que les molécules appartenant à la liste en sus durant cette période.  

##### Cas particulier de certains médicaments

On trouve de l'Avastin (codes UCD : `9261104` et `9261110`) à la fois dans les tables `MED` et `MEDATU`.  
Depuis 2016, l'ATIH recommande (communication personnelle) de rassembler toutes les dépenses liées à l’Avastin et de les compter avec les dépenses de la table `MED`.  
Il faut donc :
- aller chercher les dépenses liées à l'Avastin dans `MEDATU`
- les ajouter aux dépenses liées à l'Avastin dans `MED`
- supprimer les doublons entre les dépenses issues des deux tables (identification des doublons sur la base des variables : séjour, code UCD, mois, année, indication)


##### Ne conserver que les séjours effectivement valorisés 

Pour identifier les séjours valorisés, il faut utiliser les tables de valorisation ou de prise en charge : 
- `VALO` ou `STC` pour les séjours en ES public
- `FA` pour les séjours en ES privés
- `VALOACE` ou `FASTC` pour les ACE 

La clef de chaînage avec ces tables est le couple (numéro FINESS de l’établissement, numéro séquentiel du séjour ou de l’ACE), qui permet de ne conserver que les dépenses en sus associées à des séjours/consultations valorisés.  
*cf.* fiches sur les dépenses de santé dans les ES de santé [publics](../fiches/depenses_hopital_public.md) et [privés](../fiches/fiche_etab_prives.md) pour plus d’informations sur la valorisation des séjours.

::: warning Attention  
Pour les médicaments en autorisation temporaire d’utilisation, ce filtre permet également de sélectionner les dépenses associées à des séjours en ES publics ou privés.   
En effet, la table `MEDATU` est la seule à contenir à la fois des infos sur les ES publics et privés.  
Le chaînage avec la table de valorisation / facturation en ES publics ou privés permet de ne conserver que les informations spécifiques à chaque type d’établissements.
:::

##### Filtres supplémentaires sur les prix (spécifiques table `MED`) 

Le remboursement est borné par le tarif de responsabilité.  
Si un montant aberrant est renseigné par l’établissement, ce n’est pas ce qui sera remboursé.  
L'ES arrive souvent à descendre au-dessous du tarif de responsabilité par négociation avec les laboratoires (puis l'établissement et et l'AM se partagent les bénéfices).  
Dans les tables on a le prix d’achat négocié.   

*cf.* documentation avec les [tarifs de responsabilité par code UCD](https://www.atih.sante.fr/unites-communes-de-dispensation-prises-en-charge-en-sus) (et leur historique car les tarifs évoluent dans le temps).  
 

*Suggestion :* ajouter un filtre pour remplacer le prix par le tarif de responsabilité si le prix est supérieur au tarif de responsabilité, avec une différence de prix de plus de 10 %.  

##### Filtres supplémentaires sur les prix

::: warning Attention  
Enfin, avant de sommer les montants des différentes lignes pour obtenir des montants par UCD, par séjour ou par bénéficiaire, il faut diviser les quantités et prix d’achat par la variable « nombre de séjours impliqués » (ce qui n’est pas le cas sur la plateforme des données hospitalières ATIH).  
Cette variable existe pour MCO et HAD mais pas pour SSR.  
Raison : plusieurs numéros de RSA sur le même numéro administratif (répétition d'une même ligne sur plusieurs RSA dans le cas de séances de chimiothérapie par exemple).
:::

#### Filtres à appliquer dépenses en sus en cours de séjour en ES privé et pour les ACE en ES publics

Ces filtres s’appliquent aux tables `FHSTC` et `FH`.

##### Critères de suppression

- Nombre UCD = 0 ou Nombre UCD = . ou Montant facturé = .
- Coefficient de fractionnement = 0 
- Codes UCD erronés (à vide ou indéterminés)
- Molécules administrées hors période d’appartenance à la liste en sus (à vérifier de la même façon que pour la table `MED`)


::: tip Crédits  
Cette fiche a été rédigée par Noémie Courtejoie (DREES).
:::


