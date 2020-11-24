# Annexe 1 – fin de séjour hospitalier pour cause de décès dans le PMSI et DCIR
<!-- SPDX-License-Identifier: MPL-2.0 -->

La date de fin de séjour pour cause de décès et le département de l’établissement de décès sont recherchés d’abord dans le PMSI qui couvre les séjours des établissements publics et privés, puis dans DCIR qui couvre essentiellement les séjours privés. 
Dans le PMSI, on recherche ces informations d’abord dans le champ MCO, puis dans le champ HAD, puis dans le champ SSR. 
On n’a pas recherché les données dans le PMSI de psychiatrie car les fins de séjours hospitaliers pour cause de décès y sont très peu nombreuses.


## Dans le PMSI annuel

Quel que soit le champ du PMSI (MCO, HAD ou SSR) :
- les séjours qui se terminent pour causes de décès sont caractérisés par la valeur 9 du mode de sortie `sor_mod`. 
Cette variable se trouve dans la table « B » des séjours hospitaliers ;
- la date de fin de séjour se trouve dans la table « C » du chaînage des patients, il s’agit du champ `exe_soi_dtf`.

On recherche les séjours dans le PMSI annuel (tables t_mcoAAx, t_hadAAx, t_ssrAAx, AA représentant le millésime de l’année) car les données du PMSI annuel sont scellées par l’ATIH  et on dispose de la totalité des séjours d’une année donnée.


### PMSI MCO

- On commence par exclure les séjours des établissements géographiques de l’APHP, de l’APHM et des HCL car ils sont en doublons avec ceux des établissements juridiques correspondants. Pour cela, on sélectionne les séjours pour lesquels les établissements `eta_num` de la table « C » se trouvent également dans la table des établissements « E » ;
- on se limite aux séjours {eta_num ; rsa_num} pour lesquels on est assuré de la qualité des données, en particulier sur les éléments de l’identifiant SNIIRAM des individus `nir_ano_17`. 
Pour cela, on sélectionne les séjours de la table « C » du chaînage des patients pour lesquels les 9 codes retours `nir_ret`, `nai_ret`, `sex_ret`, `sej_ret`, `pms_ret`, `fho_ret`, `dat_ret`, `coh_nai_ret` et `coh_sex_ret` sont égaux à 0 (zéro) ;
- pour les séjours ainsi sélectionnés, on recherche les séjours {eta_num ; rsa_num} de la table « B » pour lesquels le mode de sortie `sor_mod` est égal à 9 ;
- pour ces séjours {eta_num ; rsa_num}, on recherche l’établissement géographique `eta_num_geo` de la table « UM » des résumés d’unités médicales correspondant au numéro d’ordre de RUM `um_ord_num` le plus élevé. 
Les deux premiers caractères du code eta_num_geo correspondent au département de cet établissement, département que l’on va assimiler au département de décès. 
On le fera précéder d’un 0 (zéro) avant de le comparer à la table des circonstances et de la cause initiale du décès KI_CCI_R, excepté pour la Corse que l’on codera 201 ou 202 ;
- s’il existe plusieurs séjours pour un même individu identifié par son identifiant SNIIRAM `nir_ano_17`, on retient celui dont la date de fin `exe_soi_dtf` est la plus récente ;
- on apparie les données avec le référentiel IR_BEN_R afin de ne conserver que les séjours des individus qui n’ont pas de jumeau, triplé, … dans ce référentiel (il faut donc se limiter aux cas où il n’y a qu’une seule ligne pour un même identifiant SNIIRAM `ben_nir_psa` dans la table IR_BEN_R) ;
- enfin, on exclut les séjours pour lesquels le département de l’établissement de décès est inconnu (exclusion des séjours pour lesquels les deux premiers caractères de l’établissement géographique `eta_num_geo` est égal à 0).


### PMSI HAD

La démarche est analogue à celle du PMSI MCO : on recherche soit le département de l’EHPAD du patient s’il est hospitalisé en EHPAD, soit son code postal s’il n’est pas hospitalisé en EHPAD et on en déduit son département de décès.

Le numéro d’EHPAD `eta_num_ehpa` et le code postal du patient `bdi_cod` se trouvent dans la table « B » des séjours en HAD. Pour un même séjour {eta_num_epmsi ; rhad_num}, on sélectionne :
- les informations correspondant à la dernière sous-séquence de chaque séjour (variable `sseq_sej_der` égale à 1 dans la table « B ») et pour lesquels le mode de sortie `sor_mod` est égal à 9 (décès) ;
- les séjours pour lesquels la date de fin de séjour `exe_soi_dtf` est renseignée dans la table « C » et dont l’année de fin de séjour correspond à l’année des décès que l’on veut étudier (le PMSI de 2014 contient des séjours qui se terminent en 2014 ou en 2015, on s’est limité à ceux de 2014) ;
- s’il existe plusieurs séjours pour un même patient identifié par le champ `nir_ano_17`, on ne conserve que le séjour correspondant à la date de fin la plus récente ;
- on ne conserve que les séjours des patients pour lesquels il n’y a ni jumeau, ni triplé, … dans le référentiel IR_BEN_R et pour lesquels le département de décès issu du code postal ou de l’EHPAD est renseigné.

N.B. : comme pour le PMSI MCO, dans la table du chaînage des patients « C » du PMSI HAD, vous devez sélectionner les séjours pour lesquels les 9 codes retours `nir_ret`, …, `coh_sex_ret` sont égaux à 0 (zéro).


### PMSI SSR

Même démarche que pour le PMSI MCO et HAD, ne pas oublier de sélectionner les séjours pour lesquels les 9 codes retours `nir_ret`, …, `coh_sex_ret` de la table « C » du chaînage des patients sont égaux à 0 :
- pour un même séjour {eta_num ;rha_num}, les informations à sélectionner correspondent à la valeur la plus élevée du numéro séquentiel de résumé hebdomadaire `rhs_num` de la table « B », avec un mode de sortie `sor_mod` égal à 9 (décès). 
L’établissement géographique de décès `eta_num_geo` se trouve également dans la table « B ».
On s’est limité aux décès survenus en 2014 (année de la date de fin de séjour `exe_soi_dtf` de la table « C » égale à 2014) ;
- s’il y a plusieurs séjours pour un même patient, on ne conserve que celui dont la date de fin est la plus élevée ;
- On se limite aux séjours dont le département de l’établissement géographique de décès `eta_num_geo` est connu et pour lesquels il n’y a ni jumeau, ni triplé, … dans le référentiel IR_BEN_R.


## Dans DCIR

Le numéro de l’établissement géographique du décès `etb_exe_fin` et le motif de fin de séjour `ete_nat_fsj` se trouvent dans la table des soins réalisés en établissement ER_ETE_F. Lorsque le code `ete_nat_fsj` vaut « D », cela signifie que le séjour s’est terminé pour cause de décès du patient.

Pour séléctionner les séjours se terminant au cours d’une année donnée pour cause de décès, vous devez relier la table des prestations ER_PRS_F et la table des soins réalisés en établissement ER_ETE_F, puisque la date de fin de séjour `exe_soi_dtf` se trouve dans la table ER_PRS_F, le numéro de l’établissement et le motif de fin de séjour pour décès se trouve dans la table ER_ETE_F.

Pour rechercher les séjours se terminant au cours d’une année donnée pour cause de décès, nous vous conseillons d’effectuer une sélection sur 18 mois de traitement. 
Pour l’année 2014 par exemple, les séjours se terminant en 2014 pour cause de décès (année de la date `exe_soi_dtf` = 2014) ont été recherchés pour une date de traitement `flx_trt_dtd` allant du 1er janvier 2014 au 30 juin 2015 (condition équivalente à la condition sur la date de mise à disposition des données `flx_dis_dtd` : `flx_dis_dtd` comprise entre le 1er février 2014 et le 1er juillet 2015).

S’il existe plusieurs séjours pour un même patient, identifié par son couple {identifiant SNIIRAM `ben_nir_psa` ; rang de bénéficiaire `ben_rng_gem`}, on ne conserve que le séjour dont la date de fin `exe_soi_dtf` est la plus récente.
