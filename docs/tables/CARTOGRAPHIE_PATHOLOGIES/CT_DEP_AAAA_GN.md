# CT_DEP_AAAA_GN

Table dépenses de la cartographie des pathologies pour l'année AAAA et l'algorithme N

Champ : Regime general


## Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|id_carto|chaîne de caractères|Identifiant bénéficiaire cartographie|||
|ben_sex_cod|nombre réel|Sexe du bénéficiaire|||
|ben_nai_ann|chaîne de caractères|Année de naissance du bénéficiaire|||
|age|nombre réel|Age du bénéficiaire|||
|cla_age_ct|chaîne de caractères|Classes d'âge du bénéficiaire (cartographie)|||
|cla_age_5|chaîne de caractères|Classes d'âge du bénéficiaire (quinquennales)|||
|old_cod_reg|chaîne de caractères|Région de résidence du bénéficiaire (ancien codage)|||
|new_cod_reg|chaîne de caractères|Région de résidence du bénéficiaire (nouveau codage)|||
|dpt|chaîne de caractères|Département de résidence du bénéficiaire|||
|regime|chaîne de caractères|Régime du bénéficiaire|||
|source|chaîne de caractères|Source de provenance du bénéficiaire|||
|cmu|nombre réel|Bénéficiaire de la Couverture Maladie Universelle complémentaire|||
|ben_acs_top|nombre réel|Bénéficiaire de l'aide à la complémentaire santé|||
|ben_aah_top|nombre réel|Bénéficiaire de l'allocation adulte handicapé|||
|ben_dcd_dte|nombre réel|Date de décès du bénéficiaire|||
|dcd_3112|nombre réel|Bénéficiaire décédé au 31 décembre de l'année N|||
|DEP_SDV_HONOGEN_MNT|nombre réel|Soins de généralistes remboursés|||
|DEP_SDV_HONOGEN_BSE|nombre réel|Soins de généralistes remboursables|||
|DEP_SDV_HONOSPE_MNT|nombre réel|Soins autres spécialistes remboursés|||
|DEP_SDV_HONOSPE_BSE|nombre réel|Soins autres spécialistes remboursables|||
|DEP_SDV_HONODENT_MNT|nombre réel|Soins dentaires remboursés|||
|DEP_SDV_HONODENT_BSE|nombre réel|Soins dentaires remboursables|||
|DEP_SDV_SAGEFEMME_MNT|nombre réel|Soins de sages-femmes remboursés|||
|DEP_SDV_SAGEFEMME_BSE|nombre réel|Soins de sages-femmes remboursables|||
|DEP_SDV_KINE_MNT|nombre réel|Soins de kinésithérapie remboursés|||
|DEP_SDV_KINE_BSE|nombre réel|Soins de kinésithérapie remboursables|||
|DEP_SDV_INFIRMIER_MNT|nombre réel|Soins infirmiers remboursés|||
|DEP_SDV_INFIRMIER_BSE|nombre réel|Soins infirmiers remboursables|||
|DEP_SDV_AUTRESAUXIL_MNT|nombre réel|Soins d'autres paramédicaux remboursés|||
|DEP_SDV_AUTRESAUXIL_BSE|nombre réel|Soins d'autres paramédicaux remboursables|||
|DEP_SDV_BIO_MNT|nombre réel|Biologie remboursée|||
|DEP_SDV_BIO_BSE|nombre réel|Biologie remboursable|||
|DEP_SDV_PHARMACIE_MNT|nombre réel|Médicaments remboursés|||
|DEP_SDV_PHARMACIE_BSE|nombre réel|Médicaments remboursables|||
|DEP_SDV_LPP_MNT|nombre réel|Autres produits de santé remboursés|||
|DEP_SDV_LPP_BSE|nombre réel|Autres produits de santé remboursables|||
|DEP_SDV_TRANSPORT_MNT|nombre réel|Transports remboursés|||
|DEP_SDV_TRANSPORT_BSE|nombre réel|Transports remboursables|||
|DEP_SDV_AUTRES_MNT|nombre réel|Autres dépenses de soins de ville remboursés|||
|DEP_SDV_AUTRES_BSE|nombre réel|Autres dépenses de soins de ville remboursables|||
|TOT_DEP_SDV_MNT|nombre réel|Total soins de ville remboursés|||
|TOT_DEP_SDV_BSE|nombre réel|Total soins de ville remboursables|||
|DEP_DGF_MCOSEJOUR_MNT|nombre réel|Hospitalisations séjour MCO secteur public remboursées|||
|DEP_DGF_MCOSEJOUR_BSE|nombre réel|Hospitalisations séjour MCO secteur public remboursables|||
|DEP_DGF_MCOSUS_MNT|nombre réel|Hospitalisations liste en sus MCO secteur public remboursées|||
|DEP_DGF_MCOSUS_BSE|nombre réel|Hospitalisations liste en sus MCO secteur public remboursables|||
|dep_OQN_MCOSEJOUR_MNT|nombre réel|Hospitalisations séjour MCO secteur privé remboursées|||
|dep_OQN_MCOSEJOUR_BSE|nombre réel|Hospitalisations séjour MCO secteur privé remboursables|||
|DEP_OQN_MCOSUS_MNT|nombre réel|Hospitalisations liste en sus MCO secteur privé remboursées|||
|DEP_OQN_MCOSUS_BSE|nombre réel|Hospitalisations liste en sus MCO secteur privé remboursables|||
|DEP_DGF_ACE_MNT|nombre réel|Actes et consultations externes MCO secteur public remboursés|||
|DEP_DGF_ACE_BSE|nombre réel|Actes et consultations externes MCO secteur public remboursables|||
|DEP_DGF_PSY_MNT|nombre réel|Hospitalisations en psychiatrie secteur public remboursées|||
|DEP_DGF_PSY_BSE|nombre réel|Hospitalisations en psychiatrie secteur public remboursables|||
|dep_OQN_PSY_MNT|nombre réel|Hospitalisations en psychiatrie secteur privé remboursées|||
|dep_OQN_PSY_BSE|nombre réel|Hospitalisations en psychiatrie secteur privé remboursables|||
|DEP_DGF_SSR_MNT|nombre réel|Hospitalisations en SSR secteur public remboursées|||
|DEP_DGF_SSR_BSE|nombre réel|Hospitalisations en SSR secteur public remboursables|||
|dep_OQN_SSR_MNT|nombre réel|Hospitalisations en SSR secteur privé remboursées|||
|dep_OQN_SSR_BSE|nombre réel|Hospitalisations en SSR secteur privé remboursables|||
|DEP_DGF_HAD_MNT|nombre réel|Hospitalisations en HAD secteur public remboursées|||
|DEP_DGF_HAD_BSE|nombre réel|Hospitalisations en HAD secteur public remboursables|||
|DEP_OQN_HAD_MNT|nombre réel|Hospitalisations en HAD secteur privé remboursées|||
|DEP_OQN_HAD_BSE|nombre réel|Hospitalisations en HAD secteur privé remboursables|||
|TOT_DEP_HOP_MNT|nombre réel|Total hospitalisations (tous secteurs) remboursées|||
|TOT_DEP_HOP_BSE|nombre réel|Total hospitalisations (tous secteurs) remboursables|||
|DEP_IJMALATMP_MNT|nombre réel|Indemnités journalières maladie et AT/MP remboursées|||
|DEP_IJMALATMP_BSE|nombre réel|Indemnités journalières maladie et AT/MP remboursables|||
|DEP_IJMATER_MNT|nombre réel|Indemnités journalières maternité et autres prestations remboursées|||
|DEP_IJMATER_BSE|nombre réel|Indemnités journalières maternité et autres prestations remboursables|||
|DEP_INVALID_MNT|nombre réel|Prestations d'invalidité remboursées|||
|DEP_INVALID_BSE|nombre réel|Prestations d'invalidité remboursables|||
|TOT_DEP_PRESESPECE_MNT|nombre réel|Total prestations en espèces remboursées|||
|TOT_DEP_PRESESPECE_BSE|nombre réel|Total prestations en espèces remboursables|||
|TOT_DEP_MNT|nombre réel|Total des dépenses remboursées|||
|TOT_DEP_BSE|nombre réel|Total des dépenses remboursables|||
|version|chaîne de caractères|Version de la cartographie|||
