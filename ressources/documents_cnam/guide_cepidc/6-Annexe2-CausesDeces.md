# Annexe 2 – Sélection des informations des bénéficiaires décédés dans le référentiel IR\_BEN\_R et le référentiel archivé IR\_BEN\_R\_ARC
<!-- SPDX-License-Identifier: MPL-2.0 -->

Cette annexe complète le [chapitre III](3-Chap3CausesDeces.md) dans lequel on vous explique comment relier les causes médicales de décès aux données de santé (remboursements de soins et PMSI).

Dans les tables des causes médicales de décès, lorsqu’un bénéficiaire est apparié avec les données de santé, son top d’appariement `dcd_idt_top` vaut 1. Vous disposez alors dans ces tables de l’identifiant synthétique du bénéficiaire `ben_idt_ano` et, s’il existe, de son NIR pseudonymisé `ben_nir_ano`.

Les identifiants `ben_idt_ano` se trouvent dans le référentiel des bénéficiaires du SNIIRAM et pour certaines personnes décédées, dans le référentiel archivé IR_BEN_R_ARC. Cette table archivé contient notamment tous les couples {identifiant SNIIRAM `ben_nir_psa` ; rang de bénéficiaire `ben_rng_gem`} pour lesquels aucun remboursement de soins n’a eu lieu depuis le 1er janvier 2013.

Comme il vous est conseillé dans le [chapitre III](3-Chap3CausesDeces.md), lorsque vous souhaitez faire une étude où vous reliez les cause médicales de décès aux données de santé :
- dans la table IR_BEN_R, vous commencez par recherchez tous les couples {identifiant SNIIRAM ben_nir_psa ; rang de bénéficiaire ben_rng_gem} associés aux identifiants `ben_idt_ano` de la table des circonstances et de la cause initiale du décès  KI_CCI_R ;
- lorsque l’identifiant `ben_idt_ano` de la table KI_CCI_R ne se trouve pas dans le référentiel IR_BEN_R, il se trouve dans le référentiel archivé IR_BEN_R_ARC. Vous sélectionnez alors les couples {ben_nir_psa ; ben_rng_gem} correspondants dans cette table IR_BEN_R_ARC.

A titre d’exemple, pour les causes de décès de 2013, 12 930 identifiants `ben_idt_ano` proviennent de la table archivée IR_BEN_R_ARC, contre 202 en 2014 et seulement 6 en 2015. Plus vous remonterez dans le temps, plus le nombre de bénéficiaires dont les identifiants se trouvent dans la table archivée IR_BEN_R_ARC sera important.


