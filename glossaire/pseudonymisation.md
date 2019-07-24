# Pseudonymisation
<!-- SPDX-License-Identifier: MPL-2.0 -->

La pseudonymisation est un traitement de [données à caractère personnel](https://fr.wikipedia.org/wiki/Donn%C3%A9es_personnelles) qui consiste à remplacer les informations "directement" identifiantes par un identifiant pseudonyme artificiel. 
Les données directement identifiantes qui sont remplacées sont, par exemple, les noms, prénoms, adresses, [numéro de sécurité sociale](NIR.md), numéro de téléphone, etc.

La pseudonymisation est une procédure de protection des données personnelles, car les données pseudonymisées sont "moins" identifiantes. 
Il n'est en effet pas possible d'attribuer une donnée pseudonymisée à une personne physique sans avoir recours à des informations supplémentaires. 

## Intérêt

L'intérêt de la pseudonymisation est que les données produites conservent tout leur potentiel d'analyse, ou de chaînage avec d'autres données pseudonymisées selon la même procédure (cf [FOIN](FOIN.md)). 


## Limite

La principale limite de la pseudonymisation est qu'il reste techniquement possible de réattribuer les identifiants pseudonymes à des personnes physiques ; bien que cette opération soit généralement interdite et lourdement sanctionnée [Référence nécessaire]. 

Ainsi, toute séquence temporelle de positions géographiques constitue rapidement une trace unique, que ce soit une succession de visites dans des établissements de santé ou une série de paiements bancaires. 
Il est alors facile de réidentifier un individu, du moins en théorie puisque c'est interdit, pour peu que l'on connaisse des informations le concernant. 
Il est également possible de réidentifier un ensemble d'individus pour lesquels on possèderai des positions GPS issues de téléphones mobiles.  
 
# Références

- [Page wikipedia](https://fr.wikipedia.org/wiki/Pseudonymisation)
- [Page wikipedia anglophone](https://en.wikipedia.org/wiki/Pseudonymization)
- [Unique in the Crowd: The privacy bounds of human mobility](https://www.nature.com/articles/srep01376 ), Nature 2013, *Yves-Alexandre de Montjoye, César A. Hidalgo, Michel Verleysen & Vincent D. Blondel*
- [Données de santé : anonymat et risque de ré-identification](https://drees.solidarites-sante.gouv.fr/IMG/pdf/dss64-2.pdf#page=9), DREES, 2015 - page 9
