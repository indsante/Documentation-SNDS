# Statistique mensuelle
<!-- SPDX-License-Identifier: MPL-2.0 -->

Statistiques de dépenses par type de risque, publiées chaque mois par l'Assurance maladie. 

## Périmètre

La statistique mensuelle permet de reconstituer les postes de dépenses, via des requêtes dans l'univers [DAMIR](../glossaire/DAMIR.md). 

Elle est valable pour le [Régime Général](../glossaire/RG.md), [MSA](../glossaire/MSA.md) et [RSI](../glossaire/RSI.md),

Elle ne couvre pas les prestations hospitalières. 
 
## Comment lire cette maquette

Pour chaque poste de dépense, il est indiqué quelles sont les variables et modalités à prendre en compte dans l'univers DAMIR.

Dans chaque requête, un filtre préalable doit être appliqué, selon ce pseudo-code :

```
Grand Régime de Liquidation = 1,2,3 ET 
Nature d'Assurance = 10,30,40,50,80 ET 
Filtre Prestation pour Info (DPN_QLF<>71) ET
Organisme d'Affiliation <> 01C100, 01C888, 01C971, 01C972, 01C973, 01C974, 01C976, 01C980, 01C990, 01C991, 01C999, 02A971, 03A058, 03A059
```

## Références 

- [Page](https://www.ameli.fr/l-assurance-maladie/statistiques-et-publications/donnees-statistiques/depenses-d-assurance-maladie/depenses-par-type-de-risque/depenses-mensuelles-2019.php) de présentation et de publication sur le site de l'assurance maladie.