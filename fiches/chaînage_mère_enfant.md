# Chaînage Mère-enfant
<!-- SPDX-License-Identifier: MPL-2.0 -->

Dans le PMSI, il est parfois nécessaire de relier la facture du nouveau-né à celle de sa mère (c'est ce qu'on appelle le chaînage mère-enfant). Depuis 2012, le numéro anonyme mère-enfant (`NIR_ANO_MAM` dans le PMSI) permet cela (avant ce chaînage était possible uniquement de manière probabiliste). La description de cette variable fait l'objet de la première partie.

La deuxième et la troisième parties décrivent respectivement comment retrouver les séjours d'accouchement et les séjours de naissances vivantes dans le PMSI.

## Le numéro anonyme mère-enfant

### De 2012 à 2018

Le numéro anonyme mère-enfant `NIR_ANO_MAM` est décrit de manière précise dans le document [Aide à l'utilisation des informations de chaînage](https://atih.sante.fr/aide-lutilisation-des-informations-de-chainage) publié par l'ATIH. Depuis 2012, une nouvelle variable est ajoutée **au niveau de l'hôpital**: le numéro de facture de la mère. Elle permet la construction d'une variable anonyme permettant de chaîner le séjour de la mère et de l'enfant dans le PMSI: 

1. dans le séjour du nouveau-né, le numéro de séjour de la mère est indiqué dans la variable **numéro administratif de séjour de la mère**;
2. en consultant le séjour de la mère, on retrouve son numéro anonyme;
3. le **numéro anonyme mère-enfant**, qui sera présent dans les deux séjours (celui du nouveau-né et celui de la mère) est alors obtenu en cryptant le numéro anonyme de cette dernière, le résultat faisant toujours 32 caractères.

Dans le PMSI le numéro anonyme mère-enfant porte le nom `NIR_ANO_MAM`.

Il existe plusieurs cas particuliers:

* Si le **numéro administratif de séjour de la mère** `SEJ_NUM` n'est pas renseigné, la variable `NIR_ANO_17` a une valeur vide (32 caractères espaces);
* S'il n'existe aucun séjour correspondant au **numéro administratif de séjour de la mère**, la valeur du numéro anonyme mère-enfant est ABABABABABABABABABABABABABABABAB. 

### Depuis 2018

La procédure change pour la dernière étape: c'est désormais le **numéro administratif de séjour de la mère** qui est crypté afin d'obtenir le **numéro anonyme mère-enfant**. Une nouvelle variable de chaînage mère-enfant sera introduite pour l'occasion `ID_MAM_ENF`. Il y a cependant eu des problèmes de fiabilité lors de sa mise en œuvre, il faut pour l'instant continuer à utiliser `NIR_ANO_MAM` (qui est amenée à disparaître).

### Remarques

Il est important de s'assurer que les neufs codes retours dans le PMSI aient comme valeur 0 afin de s'assurer que la procédure décrite ait un sens (`NIR_RET`, `NAI_RET`, `SEX_RET`, `SEJ_RET`, `FHO_RET`, `PME_RET`, `DAT_RET`, `COH_NAI_RET` et `COH_SEX_RET`).

Concrètement, pour chaîner les séjours de naissances aux séjours d'accouchements on utilise le numéro anonyme mère-enfant `NIR_ANO_MAM`, le FINESS de l'établissement `ETA_NUM` et la date de début de séjour `EXE_SOI_DTD`. Cela permet par exemple de dissocier les séjours pour une même mère accouchant deux fois la même année. En ce qui concerne le début de séjour, il est recommandé d'accepter un jour d'écart (accouchements de nuit) et de faire attention à ce que l'âge en jours de l'enfant (`AGE_JOU`) soit bien nul; dans le cas contraire, il est possible de le retrancher à la variable `EXE_SOI_DTD` pour le chaînage.

Dans le cas de naissances multiples, plusieurs séjours de nouveau-né correspondent à un séjour d'accouchement. Afin de les différencier et s'assurer qu'il ne s'agit pas de doublons, il existe une variable renseignant le rang de naissance `RNG_NAI`. D'expérience elle n'est pas très fiable, il est plus commode d'utiliser le poids de naissance `POI_NAI` et le sexe `COD_SEX`.

## Retrouver les séjours d'accouchements

Pour retrouver les **séjours d'accouchement**, on suit les recommandations du document [ScanSanté - Indicateurs de santé périnatale - FFRSP -ATIH](https://scansante.fr/sites/default/files/content/312/notice_indicateurs_de_sante_perinatale_20191100.pdf). Il faut que le séjour respecte **toutes** les conditions suivantes:

- Un acte d'accouchement (voir en annexe pour la liste CCAM des actes d'accouchement) OU un code Z3900="Soins et examens immédiatement après un accouchement hors d'un établissement de santé" en diagnostic principal ou associé;
- Code commençant par Z37 en diagnostic associé.

En langage PMSI cela donne: 

- `CDC_ACT` dans la liste des actes d'accouchement OU `DGN_PAL` = Z3900;
- `ASS_DGN` commence par Z37.

## Retrouver les séjours de naissance 

Pour retrouver les **séjours de naissance**, on suit les recommandations du document [ScanSanté - Indicateurs de santé périnatale - FFRSP -ATIH](https://scansante.fr/sites/default/files/content/312/notice_indicateurs_de_sante_perinatale_20191100.pdf). Il faut que le séjour respecte **toutes** les conditions suivantes:

- Séjour de la CMD 15;
- Âge en jours de 0;
- Mode d'entrée 8="Domicile";
- Poids de naissance supérieur ou égal à 500 grammes OU âge gestationnel supérieur ou égal à 22 semaines.

En langage PMSI, cela donne:

- `GRG_GHM` commençant par 15;
- `AGE_JOU` = 0;
- `ENT_MOD` = 8;
- (`POI_NAI` ≥ 500) OU (`AGE_GES` ≥ 22).



Si on désire se limiter aux **séjours d'enfants nés vivants**, il faut rajouter la condition:

- Diagnostic principal différent de P95="Mort foetale de cause non précisé" (`DGN_PAL` ≠ P95). Il est recommandé de ne pas se limiter au diagnostic principal quand on élimine les diagnostics P95.  

## Annexe: liste des actes CCAM d'accouchement

|Code|Libellé|
|:---------:|:---------:|
|**JQGA002**|Accouchement par césarienne programmée, par laparotomie|
|**JQGA003**|Accouchement par césarienne au cours du travail, par laparotomie|
|**JQGA004**|Accouchement par césarienne en urgence en dehors du travail, par laparotomie|
|**JQGA005**|Accouchement par césarienne, par abord vaginal|
|**JQGD001**|Accouchement unique par le siège par voie naturelle, chez une multipare|
|**JQGD002**|Accouchement multiple par voie naturelle, chez une primipare|
|**JQGD003**|Accouchement unique par le siège par voie naturelle avec petite extraction, chez une primipare|
|**JQGD004**|Accouchement unique par le siège par voie naturelle, chez une primipare|
|**JQGD005**|Accouchement unique par le siège par voie naturelleavec grande extraction, chez une multipare|
|**JQGD007**|Accouchement multiple par voie naturelle, chez une multipare|
|**JQGD008**|Accouchement unique par le siège par voie naturelle avec petite extraction, chez une multipare|
|**JQGD010**|Accouchement céphalique unique par voie naturelle, chez une primipare|
|**JQGD012**|Accouchement céphalique unique par voie naturelle, chez une multipare|
|**JQGD013**|Accouchement unique le siège par voie naturelle avec grande extraction, chez une primipare|


## Références

::: tip Crédits
Cette fiche a été rédigée par *Arnaud Lecoules* (DREES) :::
