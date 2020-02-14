## Schéma

- Titre : Table dépenses de la cartographie des pathologies pour l'année AAAA et l'algorithme N
<br />
- Clé(s) étrangère(s) : <br />
`id_carto` => table [CT_IDE_AAAA_GN](/tables/CT_IDE_AAAA_GN) [ `id_carto` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/CARTOGRAPHIE_PATHOLOGIES/CT_DEP_AAAA_GN.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`id_carto`|chaîne de caractères|Identifiant bénéficiaire cartographie||
`ben_sex_cod`|nombre entier|Code sexe du bénéficiaire||
`ben_nai_ann`|année|Année de naissance du bénéficiaire||
`age`|nombre entier|Age du bénéficiaire||
`cla_age_ct`|chaîne de caractères|Classes d&#x27;âge du bénéficiaire (cartographie)||
`cla_age_5`|chaîne de caractères|Classes d&#x27;âge du bénéficiaire (quinquennales)||
`old_cod_reg`|chaîne de caractères|Région de résidence du bénéficiaire (ancien codage)||
`new_cod_reg`|chaîne de caractères|Région de résidence du bénéficiaire (nouveau codage)||
`dpt`|chaîne de caractères|Département de résidence du bénéficiaire||
`regime`|chaîne de caractères|Régime du bénéficiaire||
`source`|chaîne de caractères|Source de provenance du bénéficiaire||
`cmu`|nombre entier|Bénéficiaire de la Couverture Maladie Universelle complémentaire||
`ben_acs_top`|chaîne de caractères|Top contrat ACS Tiers payant Intégral||
`ben_aah_top`|nombre entier|Bénéficiaire de l&#x27;allocation adulte handicapé||
`ben_dcd_dte`|date|Date de décès du bénéficiaire||
`dcd_3112`|nombre entier|Bénéficiaire décédé au 31 décembre de l&#x27;année N||
`DEP_SDV_HONOGEN_MNT`|nombre entier|Soins de généralistes remboursés||
`DEP_SDV_HONOGEN_BSE`|nombre entier|Soins de généralistes remboursables||
`DEP_SDV_HONOSPE_MNT`|nombre entier|Soins autres spécialistes remboursés||
`DEP_SDV_HONOSPE_BSE`|nombre entier|Soins autres spécialistes remboursables||
`DEP_SDV_HONODENT_MNT`|nombre entier|Soins dentaires remboursés||
`DEP_SDV_HONODENT_BSE`|nombre entier|Soins dentaires remboursables||
`DEP_SDV_SAGEFEMME_MNT`|nombre entier|Soins de sages-femmes remboursés||
`DEP_SDV_SAGEFEMME_BSE`|nombre entier|Soins de sages-femmes remboursables||
`DEP_SDV_KINE_MNT`|nombre entier|Soins de kinésithérapie remboursés||
`DEP_SDV_KINE_BSE`|nombre entier|Soins de kinésithérapie remboursables||
`DEP_SDV_INFIRMIER_MNT`|nombre entier|Soins infirmiers remboursés||
`DEP_SDV_INFIRMIER_BSE`|nombre entier|Soins infirmiers remboursables||
`DEP_SDV_AUTRESAUXIL_MNT`|nombre entier|Soins d&#x27;autres paramédicaux remboursés||
`DEP_SDV_AUTRESAUXIL_BSE`|nombre entier|Soins d&#x27;autres paramédicaux remboursables||
`DEP_SDV_BIO_MNT`|nombre entier|Biologie remboursée||
`DEP_SDV_BIO_BSE`|nombre entier|Biologie remboursable||
`DEP_SDV_PHARMACIE_MNT`|nombre entier|Médicaments remboursés||
`DEP_SDV_PHARMACIE_BSE`|nombre entier|Médicaments remboursables||
`DEP_SDV_LPP_MNT`|nombre entier|Autres produits de santé remboursés||
`DEP_SDV_LPP_BSE`|nombre entier|Autres produits de santé remboursables||
`DEP_SDV_TRANSPORT_MNT`|nombre entier|Transports remboursés||
`DEP_SDV_TRANSPORT_BSE`|nombre entier|Transports remboursables||
`DEP_SDV_AUTRES_MNT`|nombre entier|Autres dépenses de soins de ville remboursés||
`DEP_SDV_AUTRES_BSE`|nombre entier|Autres dépenses de soins de ville remboursables||
`TOT_DEP_SDV_MNT`|nombre entier|Total soins de ville remboursés||
`TOT_DEP_SDV_BSE`|nombre entier|Total soins de ville remboursables||
`DEP_DGF_MCOSEJOUR_MNT`|nombre entier|Hospitalisations séjour MCO secteur public remboursées||
`DEP_DGF_MCOSEJOUR_BSE`|nombre entier|Hospitalisations séjour MCO secteur public remboursables||
`DEP_DGF_MCOSUS_MNT`|nombre entier|Hospitalisations liste en sus MCO secteur public remboursées||
`DEP_DGF_MCOSUS_BSE`|nombre entier|Hospitalisations liste en sus MCO secteur public remboursables||
`dep_OQN_MCOSEJOUR_MNT`|nombre entier|Hospitalisations séjour MCO secteur privé remboursées||
`dep_OQN_MCOSEJOUR_BSE`|nombre entier|Hospitalisations séjour MCO secteur privé remboursables||
`DEP_OQN_MCOSUS_MNT`|nombre entier|Hospitalisations liste en sus MCO secteur privé remboursées||
`DEP_OQN_MCOSUS_BSE`|nombre entier|Hospitalisations liste en sus MCO secteur privé remboursables||
`DEP_DGF_ACE_MNT`|nombre entier|Actes et consultations externes MCO secteur public remboursés||
`DEP_DGF_ACE_BSE`|nombre entier|Actes et consultations externes MCO secteur public remboursables||
`DEP_DGF_PSY_MNT`|nombre entier|Hospitalisations en psychiatrie secteur public remboursées||
`DEP_DGF_PSY_BSE`|nombre entier|Hospitalisations en psychiatrie secteur public remboursables||
`dep_OQN_PSY_MNT`|nombre entier|Hospitalisations en psychiatrie secteur privé remboursées||
`dep_OQN_PSY_BSE`|nombre entier|Hospitalisations en psychiatrie secteur privé remboursables||
`DEP_DGF_SSR_MNT`|nombre entier|Hospitalisations en SSR secteur public remboursées||
`DEP_DGF_SSR_BSE`|nombre entier|Hospitalisations en SSR secteur public remboursables||
`dep_OQN_SSR_MNT`|nombre entier|Hospitalisations en SSR secteur privé remboursées||
`dep_OQN_SSR_BSE`|nombre entier|Hospitalisations en SSR secteur privé remboursables||
`DEP_DGF_HAD_MNT`|nombre entier|Hospitalisations en HAD secteur public remboursées||
`DEP_DGF_HAD_BSE`|nombre entier|Hospitalisations en HAD secteur public remboursables||
`DEP_OQN_HAD_MNT`|nombre entier|Hospitalisations en HAD secteur privé remboursées||
`DEP_OQN_HAD_BSE`|nombre entier|Hospitalisations en HAD secteur privé remboursables||
`TOT_DEP_HOP_MNT`|nombre entier|Total hospitalisations (tous secteurs) remboursées||
`TOT_DEP_HOP_BSE`|nombre entier|Total hospitalisations (tous secteurs) remboursables||
`DEP_IJMALATMP_MNT`|nombre entier|Indemnités journalières maladie et AT-MP remboursées||
`DEP_IJMALATMP_BSE`|nombre entier|Indemnités journalières maladie et AT-MP remboursables||
`DEP_IJMATER_MNT`|nombre entier|Indemnités journalières maternité et autres prestations remboursées||
`DEP_IJMATER_BSE`|nombre entier|Indemnités journalières maternité et autres prestations remboursables||
`DEP_INVALID_MNT`|nombre entier|Prestations d&#x27;invalidité remboursées||
`DEP_INVALID_BSE`|nombre entier|Prestations d&#x27;invalidité remboursables||
`TOT_DEP_PRESESPECE_MNT`|nombre entier|Total prestations en espèces remboursées||
`TOT_DEP_PRESESPECE_BSE`|nombre entier|Total prestations en espèces remboursables||
`TOT_DEP_MNT`|nombre entier|Total des dépenses remboursées||
`TOT_DEP_BSE`|nombre entier|Total des dépenses remboursables||
`version`|chaîne de caractères|Version de la cartographie||
`BEN_DCD_AME`|année et mois|Année et mois de décès du bénéficiaire||

