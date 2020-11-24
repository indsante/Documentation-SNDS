# Amphi SNDS
<!-- SPDX-License-Identifier: MPL-2.0 -->

Les Amphi SNDS sont des séminaires organisés par la Cnam, en partenariat avec le Health Data Hub, l’ATIH et l’INSERM.

Ils sont destinés à présenter des travaux sur le SNDS et sont ouverts aux personnes ayant accès aux données individuelles bénéficiaires du SNDS, par un accès permanent ou sur projet.



## 2020.03.24 Amphi SNDS 3

- Méthodologie Bigdata : travaux dans le domaine de la pharmacovigilance - Cnam
- SNDS, apprentissage profond et analyse de données de mortalités en causes multiples - INSERM
- Impact de la durée moyenne de séjour sur les réadmissions, analyse préliminaire des pratiques dans le cadre des expérimentations article 51 de la LFSS, projet Episode de soins (EDS) - ATIH
- Contribution du Système national des données de santé à la construction de la cascade de prise en charge de l’hépatite C chronique - Santé publique France
- Outils d’accompagnement des utilisateurs du SNDS - HDH / Cnam

::: warning Report
Au vu de la crise sanitaire, cet amphi est reporté à une date ultérieure.
::: 

Les résumés de chaque étude sont consultables ci-dessous.

### Méthodologie Bigdata : travaux dans le domaine de la pharmacovigilance - Cnam 
Présenté par : Fanny Leroy, Cnam DSES/DATA.D/Pôle Bigdata
::: details Résumé 
Un partenariat entre l'Ecole Polytechnique et la CNAM a été conclu en 2015 et renouvelé en 2018 afin d'aider la CNAM à prendre en main et à tirer profit des technologies "Big Data" le plus rapidement possible. 
Dans ce cadre, une nouvelle infrastructure machine, "horizontale", plus adaptée à la recherche méthodologique, a été mise en place. 
Cette nouvelle "machine" s'accompagne d'une nouvelle organisation des données et d'une nouvelle architecture logicielle basées sur des technologies open-source. 
A partir de cette nouvelle méthodologie fonctionnelle et toujours dans le cadre du partenariat, des travaux ont été réalisés dans le domaine de la pharmacovigilance et plus précisément pour la détection de signaux faibles à partir du SNDS. 
La première étape de ce travail a été de reproduire une étude de cohorte réalisée par la CNAM en 2011 afin de tester et de valider les technologies nouvellement mises en place. 
Cette étude s'est intéressée à l'association entre l'exposition à la Pioglitazone et le risque de survenue d'un cancer de la vessie chez les patients diabétiques. 
Pour la deuxième étape de ce travail, une nouvelle méthode de détection de signal (ConvSCCS) basée sur les bases de données administratives a été développée par l'équipe de l'Ecole Polytechnique. 
Cette nouvelle méthodologie a été appliquée aux cas de cancer de la vessie afin de retrouver le signal entre l'exposition à la Pioglitazone et l'effet indésirable d'intérêt. 
Un nouveau projet, toujours dans le domaine de la pharmacovigilance, a ensuite été décidé. 
Nous nous intéressons désormais à l'association entre une exposition médicamenteuse (anxiolytiques, hypnotiques, antidépresseurs et neuroleptiques) et la survenue d'une chute chez les personnes âgées de plus de 65 ans. 
La survenue d'une fracture est utilisée comme meilleur proxy d'une chute dans le SNDS et un algorithme de détection des fractures dans le SNDS a été défini en collaboration avec un orthopédiste. 
Nous appliquons à nouveau le modèle ConvSCCS pour étudier cette problématique. 
Au cours de cet exposé, nous présenterons l’ensemble de ces travaux réalisés jusqu'à aujourd'hui dans le domaine de la pharmacovigilance.
:::


### SNDS, apprentissage profond et analyse de données de mortalités en causes multiples - INSERM
Présenté par : Louis Falissard, INSERM/CépiDc
::: details Résumé
Les statistiques de mortalités par cause sont de nos jours encore produites par l'analyse d'experts sur une grande quantité de certificats de décès à l’échelle nationale. 
Plusieurs tentatives d’automatisation de ce coûteux processus, par le biais de systèmes experts, ont été proposées par le passé, avec des performances permettant au mieux une assistance aux experts humains. 
Les récentes avancées en apprentissage automatique ont permis l’automatisation de tâches complexes dans tout un spectre d’applications, avec des performances sensiblement supérieures aux systèmes experts, tout particulièrement en présence de jeux de données d’apprentissage massifs. 
Ce travail explore le potentiel des méthodes d’apprentissage machine, et en particulier d’apprentissage profond au problème du codage de la cause initiale de décès, à partir de la base de données du CépiDc, contenant plus de 9 millions de certificats de décès et de toutes les causes déclarées.
:::

### Impact de la durée moyenne de séjour sur les réadmissions, analyse préliminaire des pratiques dans le cadre des expérimentations article 51 de la LFSS, projet Episode de soins (EDS) - ATIH
Présenté par : Marc-Antoine Sanchez, ATIH
::: details Résumé
**Introduction** La mise en place des paiements au parcours de type épisode de soins (EDS), dans le cadre de l'article 51 de la loi de financement de la sécurité sociale (LFSS) 2018 est susceptible d'impacter la qualité des soins, et notamment le taux de réadmissions des établissements de santé. 
L'objectif est d'étudier le lien entre durée moyenne séjour (DMS) et réadmissions permettant d'estimer l'impact sur le coût global du parcours.
 
**Méthodes** Une étude observationnelle a été réalisée à partir des données du système national des données de santé (SNDS) sur la période de 2014-2016 ayant servie à la définition des parcours et au calcul des forfaits par l'agence technique de l'information sur l'hospitalisation (ATIH). 
Nos analyses portent sur l'ensemble des séjours composant le parcours EDS colectomie. 
L'analyse comporte deux volets. 
Le premier représente la relation entre la DMS et le taux de réadmission, à l'aide d'une régression segmentée. 
Le second permet de calculer le ratio coût marginal du séjour de réadmission sur coût marginal du séjour inaugural.
 
**Résultats** La durée moyenne de séjour était de 12,5 jours (valeurs comprises entre 0 et 321 jours). 
Nous traduisons l'effet d'une journée d'hospitalisation supplémentaire lors du séjour inaugural, sur la diminution de la probabilité de réadmission et sur le coût total du parcours. 
L'effet compensatoire varie de 8,15% dans la base complète à 12,29% dans le sous-échantillon. 
Pour des durées de séjours très courtes (entre 1 et 5 jours), l'effet est majoré, allant de 7,7 à 30,5%.
 
**Discussion/Conclusion** Ce travail s'inscrit dans l'évaluation des modes de tarification innovants des expérimentations EDS. 
Il donne un éclairage de l'impact de la DMS sur les réadmissions, ainsi que sur la dépense globale du parcours. 
Ce nouveau mode de paiement pourrait permettre une modification des pratiques visant à diminuer les réadmissions.
:::

### Contribution du Système national des données de santé à la construction de la cascade de prise en charge de l’hépatite C chronique - Santé publique France
Présenté par : Cécile Brouard, Santé publique France
::: details Résumé
**Introduction** La disponibilité, depuis 2014, de nouveaux traitements de l’hépatite C chronique, reposant sur les antiviraux à action directe (AAD) de seconde génération, extrêmement efficaces et bien tolérés, a conduit l’Organisation mondiale de la Santé (OMS) à fixer, en 2016, un objectif d’élimination de l’hépatite C chronique à l’horizon 2030. 
Pour atteindre cet objectif, 90% des infections chroniques doivent être diagnostiquées et 80% des personnes éligibles au traitement traitées. 
La France s’est engagée à atteindre cet objectif pour l’hépatite C d’ici 2025. 
Ce travail a pour but d’estimer la cascade de prise en charge de l’hépatite C chronique en France métropolitaine : 
1) en 2011, afin d’évaluer l’impact des antiviraux à action directe (AAD) sur la cascade ; 
2) en 2016, afin de disposer d’un point pour le suivi de l’élimination au moment du lancement du plan d’action de l’OMS.

**Matériels et méthodes** Ont été estimés pour 2011 et 2016, les nombres de personnes : 1) ayant une hépatite C chronique, 2) ayant connaissance de leur infection, 3) prises en charge pour une hépatite C chronique au cours de l’année, 4) en cours de traitement antiviral au cours de l’année.  
Une analyse des données individuelles du Système national des données de santé (SNDS) a été réalisée pour réaliser les estimations 3) et 4) : 
- en construisant, pour 3), un algorithme d’identification des personnes avec au moins un recours aux soins pour une hépatite C chronique dans l’année (actes de biologie, actes médicaux, traitement antiviral, hospitalisation, affection de longue durée) ; 
- en prenant en compte l’ensemble des traitements antiviraux (bithérapie pégylée, AAD de 1ère ou de 2nde génération) pour 4).


Les estimations 1) et 2) reposaient sur une enquête transversale pour 2016 et sur des modélisations pour 2011.
Les estimations concernent les personnes âgées de 18-75 ans en 2016 et de 18-80 ans en 2011 vivant en France métropolitaine.

**Résultats** Entre 2011 et 2016, le nombre de personnes ayant une hépatite C chronique a diminué de 31%, passant de 192 700 (Intervalle de crédibilité à 95% : 150 900-246 100) à 133 500 (Intervalle de confiance (IC) à 95% : 56 900 – 312 600). 
Le nombre de personnes ayant connaissance de leur infection est resté stable (111 300 en 2011 [Intervalle de plausibilité : 76 100-158 000] et 107 600 en 2016 [IC95% : 59 000-127 600]), tandis que leur proportion a augmenté (de 58% à 81%). 
Entre 2011 et 2016, le nombre de personnes identifiées comme prises en charge pour leur infection dans l’année est passé de 28 000 (15% des personnes infectées) à 34 300 (26% des personnes infectées), soit une augmentation de 22%. 
Le nombre de personnes en cours de traitement est passé de 12 900 en 2011 à 16 100 en 2016 (+25%), tandis que leur proportion par rapport au nombre de personnes infectées est passé de 7% en 2011 à 12% en 2016.

**Conclusion** Ce travail a permis, pour la 1ère fois, d’estimer la cascade de prise en charge de l’hépatite C chronique en France métropolitaine, avant et après l’introduction des AAD. 
Il suggère un impact important de ceux-ci sur la cascade de soins. 
Pour autant, l’accès aux soins et au traitement des personnes infectées restait insuffisant en 2016, notamment au regard des objectifs d’élimination.
:::


###  Outils d’accompagnement des utilisateurs du SNDS
Présenté par : Anne Cuerq (HDH) & Laure de Martini (Cnam)
::: details Résumé
Présentation conjointe des outils d'accompagnement proposé par la Cnam et le Health Data Hub, et démonstration.
::: 


## 2019.03.25 Amphi SNDS 2
-	Quelle utilisation du SNDS en ARS - ARS Centre-Val de Loire et Normandie
-	La cartographie des pathologies et des dépenses - CNAM/DSES
-	Quantification des inégalités sociales en années de vie perdues - Inserm-Curie
-	Parcours de soins ville-hôpital pour certaines pathologies - ATIH
-	Mortalité des personnes suivies en psychiatrie - IRDES


## 2018.03.23 Amphi SNDS 1

SNDS et sécurité :

- Présentation du Référentiel Sécurité SNDS -  Anne Poisson, Stéphanie Naux, Cnam
- Conditions de sécurité requises dans les systèmes fils -  Alexandre Ducreux, Cnam
- Présentation de la bulle sécurisée HEVA - Alexandre Vainchtock, Héva

Retour d’expériences sur l’utilisation des données du SNDS :

- Appariement indirect entre cohorte et SNIIRAM, illustration avec le projet ERMES - Professeur Racineux, président de l’IRSR et Mehdi Gabbas, Cnam 
- Lieux de décès et recours aux soins palliatifs un an avant un décès en 2013 -   Philippe Tuppin, Cnam
- Causes médicales de décès : Mode de production et exemples d'exploitation - Walid Ghosn, Inserm, CepiDC
- Identifier les hospitalisations en lien avec le cancer en MCO et en SSR - Françoise Bourgoin (ATIH) et Christine Le Bihan (INCa)

