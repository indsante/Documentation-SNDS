# II - Appariement indirect entre les informations des causes de décès et les données de santé
<!-- SPDX-License-Identifier: MPL-2.0 -->

Les informations de chaque décès en provenance du CépiDc sont caractérisées par un identifiant non nominatif nommé `dcd_idt_enc`.
Il s’agit du numéro de certificat de décès pseudonymisé deux fois, une première fois par le CépiDC, une deuxième fois lors de l’arrivée des informations à la CNAM.

Dans le référentiel des bénéficiaires du SNDS IR_BEN_R, un individu est caractérisé par son identifiant synthétique `ben_idt_ano`. Cet identifiant est égal à :
- son NIR pseudonymisé `ben_nir_ano` lorsqu’il est alimenté dans le SNDS,
- la concaténation de son identifiant SNIIRAM pseudonymisé `ben_nir_psa` et de son rang de bénéficiaire `ben_rng_gem` lorsque son NIR pseudonymisé `ben_nir_ano` n’est pas alimenté.

En septembre 2020, le NIR pseudonymisé `ben_nir_ano` est alimenté dans 97 % des enregistrements du référentiel IR_BEN_R.

::: tip Rappel
L’identifiant SNIIRAM en clair d’un individu est égal à la concaténation du numéro de sécurité sociale de son ouvreur de droits, de sa propre date de naissance et de son propre code sexe. 
Cet identifiant est pseudonymisé trois fois dans le SNDS. 
Il est complété par le rang de bénéficiaire `ben_rng_gem` qui permet de distinguer les personnes ayant le même identifiant SNIIRAM (jumeaux, triplés … de même sexe en particulier). 
Un même individu a autant d’identifiants SNIIRAM qu’il a d’ouvreurs de droits.

Par contre, le NIR est attribué par l’INSEE à chaque individu dès sa naissance, il reste identique tout au long de sa vie. 
Un même individu a donc un seul NIR pseudonymisé `ben_nir_ano` dans le SNDS.
:::

L’INSEE n’envoie pas encore au SNDS le NIR pseudonymisé `ben_nir_ano` des personnes décédées. 
Afin de vous permettre d’associer la consommation de soins de ces personnes à leurs caractéristiques socio-démographiques et à leurs causes médicales de décès, il faut recourir à un appariement indirect pour faire correspondre un seul identifiant `ben_idt_ano` des données de santé à un seul identifiant `dcd_idt_enc` du CépiDc.

## Méthode d’appariement indirect des données de 2013 à 2015
Pour réaliser cet appariement, les informations du référentiel des bénéficiaires du SNDS IR_BEN_R ont été enrichies par la date de fin de séjour hospitalier pour motif de décès et le département de l’établissement géographique où a eu lieu ce séjour, provenant du PMSI ou des remboursements de soins de DCIR pour les années 2013 à 2015.
Le procédé utilisé pour rechercher ces informations supplémentaires est décrit en [Annexe 1](5-Annexe1-CausesDeces.md) de ce guide.

En effet, pour chacune des années 2013 à 2015, lorsque la date de décès est renseignée dans le référentiel IR_BEN_R et lorsque le patient est décédé au cours d’un séjour hospitalier, la date de fin de séjour est égale à la date de décès ou s’en écarte d’un jour dans plus de 99 % des cas.

La méthode d’appariement indirect entre les données de décès et d’autres systèmes d’informations a été mise au point par le CépiDc, elle a été adaptée au SNDS en collaboration entre la CNAM et le CépiDc.

Les données sur lesquelles porte l’appariement sont l’année de décès, le mois de décès, le jour de décès, le code sexe, l’année de naissance, le mois de naissance, le département de résidence, la commune de résidence et, lorsqu’il existe, le département de l’établissement hospitalier dans lequel le patient est décédé. 
Ce département, en provenance du PMSI ou de DCIR, est comparé au département de décès contenu dans les données du CépiDc. 


L’appariement utilise un algorithme qui se déroule en deux temps, en fonction des données disponibles. 
Dans son principe :
- il consiste à réaliser un appariement entre les données de décès et le référentiel IR_BEN_R sur tous les critères retenus, on parle d’appariement total sur les critères donnés en entrée ou, plus simplement, d’appariement total ;
- ensuite, pour les identifiants `dcd_idt_enc` de l’INSERM pour lesquels aucune correspondance avec un identifiant `ben_idt_ano` du SNDS n’a été trouvée, un appariement est réalisé tour à tour sur tous les critères sauf un, à l’exception de l’année de décès qui doit toujours coïncider dans les deux sources de données (tous les critères sauf le code sexe, tous les critères sauf le département de résidence, …). 
Ces appariements sont dits partiels ;
- lorsque l’appariement total ou les appariements partiels ont permis d’associer un seul identifiant `ben_idt_ano` à un seul identifiant `dcd_idt_enc`, on considère que les informations sur les causes de décès peuvent être rapprochées des données de consommation de soins et on introduit l’identifiant `ben_idt_ano` correspondant dans les tables des causes médicales de décès du SNDS.

 
L'algorithme décrit ci-dessus est utilisé dans les deux étapes suivantes :

**1ère étape - la date de décès du patient est renseignée dans le référentiel IR_BEN_R :**
- lorsque la date de fin de séjour pour cause de décès s’écarte d’au plus un jour de la date de décès, on réalise un appariement total puis des appariements partiels sur l’année, le mois, le jour de décès, le code sexe, l’année de naissance, le mois de naissance, le département de résidence, la commune de résidence et le département de l’établissement où a eu lieu le décès (comparé au département de décès des données du CépiDc) ;

- pour les décès où cet appariement n’a pas réussi ainsi que pour les autres individus du référentiel IR_BEN_R dont la date de décès est renseignée (personnes décédées hors d’un établissement hospitalier ou dont la date de fin de séjour pour cause de décès n’a pas pu être trouvée), on réalise les appariements total puis partiel sur tous ces critères, à l’exception du département de décès et, dans certains cas, de la commune de résidence.

**2ème étape – la date de décès n’est pas renseignée dans le référentiel IR_BEN_R mais la date de fin de séjour pour cause de décès est connue :**

La date de décès n’est pas toujours renseignée dans la table IR_BEN_R parce que, pour des raisons d’ordre technique, certains régimes ou organismes de sécurité sociale ne l’alimentent pas dans le SNDS. 
Dans un tel cas, elle est forcée au 1er janvier 1600. 
Par contre, en raison des résultats exposés en préambule, si une personne est décédée au cours d’un séjour hospitalier, on peut supposer que sa date de fin de séjour s’écarte d’au plus un jour de sa date de décès dans plus de 99 % des cas.

On va alors remplacer la date de décès de la table IR_BEN_R par la date de fin de séjour hospitalier, puis réaliser les appariements total puis partiels sur l’année, le mois, le jour de décès, le code sexe, l’année de naissance, le mois de naissance, le département de résidence, la commune de résidence et le département de l’établissement hospitalier (comparé au département de décès des données du CépiDc).

Vous pourrez retrouver facilement les personnes appariées dans cette seconde étape (près de 36 000 en 2013, environ 30 500 en 2014 et en 2015) car leur identifiant `ben_idt_ano` se trouvera dans les informations sur les causes de décès d’une part, leur  date de décès sera égale au 1er janvier 1600 dans la table IR_BEN_R d’autre part. 
Il est techniquement impossible de charger la date de fin de séjour hospitalier dans la table IR_BEN_R car les temps de traitement informatiques nécessaires à cette alimentation seraient colossaux. 
Si vous souhaitez retrouver la date de fin de séjour et le département de l’établissement hospitalier dans le PMSI ou DCIR, vous pouvez vous reporter à l’[annexe 1](5-Annexe1-CausesDeces.md) de ce guide.
 

::: warning Attention
Les données qui ont été appariées au cours de la seconde étape correspondent à des personnes décédées à l’hôpital et dont la date de décès n’est pas alimentée dans le référentiel IR_BEN_R. La raison principale de cette absence d’alimentation dans IR_BEN_R est que, pour des raisons de norme d’échange des données, le régime ou l’organisme de sécurité sociale de ces personnes ne transmet pas la date de décès au SNDS.

Si vous réalisez des études sur ces personnes, vous devez garder présent à l’esprit que la totalité des décès provenant de leur régime ou organisme de sécurité sociale n’a pas pu être appariée avec les données du CépiDc, d’une part parce qu’elles ne sont pas toutes décédées à l’hôpital, d’autre part parce que la date de fin d’hospitalisation pour cause de décès n’a pas toujours pu être trouvée (Cf. [annexe 1](5-Annexe1-CausesDeces.md) ).

Au total, sur l’ensemble des deux étapes d’appariement, la proportion de décès appariés survenus à l’hôpital risque d’être surévaluée par rapport à celle de l’ensemble des décès. La variable sur le lieu de décès, contenue dans les données du CépiDc, devrait vous permettre de mesurer la différence entre la proportion de décès appariés survenus à l’hôpital et la proportion correspondante dans l’ensemble des décès.
:::

Pour les décès survenus en 2013, sur l’ensemble des deux étapes d’appariement :
- 88,7 % des décès recensés par le CépiDc ont pu être appariés avec le référentiel des bénéficiaires du SNDS,
- 93,8 % des bénéficiaires éligibles du référentiel du SNDS ont pu être appariés avec les données de décès (personnes dont la date de décès est connue plus personnes dont la date de décès est inconnue mais décédées lors d’un séjour hospitalier) ;
- les proportions correspondantes sont respectivement de 90,1 % et 93,9 % pour 2014, de 90,1 % et 94 % pour 2015.



## Méthode d’appariement indirect des données de 2006 à 2012 puis à partir de 2016

Pour des raisons d’automatisation et en attente de l’appariement direct des données de CépiDc avec le SNDS via le NIR de l’INSEE, l’appariement des bases CépiDc de 2006 à 2012 et de 2016 n’a été réalisé que sur les référentiels IR_BEN_R et IR_BEN_R archivés, sans appel au DCIR et au PMSI. 
Les taux d’appariement sont bien plus faibles pour les années les plus anciennes car les données sont moins fiables (ceci est dû en partie aux processus d’alimentation de la date de décès qui sont propres à chaque régime et qui ont évolué au cours du temps). 
Vous pouvez réaliser des appariements avec PMSI et DCIR pour compléter mais seul un appariement direct sur le NIR pourra vraiment améliorer/fiabiliser les appariements.

Taux d’appariement pour les décès de l’année N avec les référentiels bénéficiaires IR_BEN_R et IR_BEN_R_ARC
| Année |	% |
|-------|-----|
|2006 | 34,27% |
|2007 |	39,61% |
|2008 | 48,75% |
|2009 |	57,95% |
|2010 | 62,74% |
|2011 |	68,34% |
|2012 | 76,79% |
|2016 |	83,28% |
