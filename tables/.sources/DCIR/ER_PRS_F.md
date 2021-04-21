---
permalink: /tables/ER_PRS_F
---
# ER\_PRS\_F
<!-- SPDX-License-Identifier: MPL-2.0 -->
La table **ER_PRS_F** est au centre du modèle DCIR. 

Elle comprend d’une part toutes les prestations remboursées pour les soins de ville. Elle contient les informations sur le patient et les informations génériques associées à la prestation : nature, date de soin, professionnel de santé, etc. Les tables affinées, donnant l’information détaillée sur la prestation de soins, sont reliées à la table principale **ER_PRS_F** via les 9 clés de jointure. Pour plus d'informations, consulter la fiche dédiée [Requête type dans la table prestations du DCIR](https://documentation-snds.health-data-hub.fr/fiches/sas_prestation_dcir.html#requete-type-dans-la-table-prestations-du-dcir).

D’autre part, **ER_PRS_F** contient pour les soins en établissement :
- Les séjours facturés directement à l’assurance maladie (cliniques privées y compris [GHS](https://documentation-snds.health-data-hub.fr/glossaire/GHS.html) et une partie du secteur médico-social handicap).
- L’activité externe des établissement privés
- L’activité externe des hôpitaux publics (actes et consultations externes) pour information depuis 2009 (données non exhaustives et de qualité inconnue). Selon l’objectif de l’étude il faut ou non exclure ces lignes lors des exploitations, en filtrant sur `DPN_QLF <> 71` et `PRS_ DPN_QLP <> 71`. 
- L’activité externe des hôpitaux publics pour les établissements appliquant FIDES (facturation individuelle des établissements de santé). Ces établissements peuvent être repérés par la variable `ETE_IND_TAA=1` dans la table [ER_ETE_F](https://documentation-snds.health-data-hub.fr/tables/er_ete_f/) (table du détail des informations liées à l’exécution de la prestation dans un établissement). L’activité externe est alors exhaustive pour ces hôpitaux.
- L’activité externe des hôpitaux publics pour les actes des bénéficiaires [CMU_C](https://documentation-snds.health-data-hub.fr/glossaire/cmuc.html), [AME](https://documentation-snds.health-data-hub.fr/glossaire/ame.html) et migrants (en raison de la prise en charge particulière de ces patients). 
- Les médicaments et dispositifs facturés « en sus » des forfaits ([GHS](https://documentation-snds.health-data-hub.fr/glossaire/GHS.html)).

::: tip Crédits
Les informations ci-dessus sont tirées du document [*SNDS, ce qu'il faut savoir*](../../formation_snds/Sante_publique_France.md) constitué par Santé Publique France.
:::

<!-- ATTENTION : Ne pas supprimer ou modifier la ligne ci-dessous -->
#include "tables/.schemas/DCIR/ER_PRS_F.md"
<!-- ATTENTION : Ne pas supprimer ou modifier la ligne ci-dessus -->
