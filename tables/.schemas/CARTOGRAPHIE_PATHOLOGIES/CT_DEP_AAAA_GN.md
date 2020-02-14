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
`id_carto`|
string|Identifiant bénéficiaire cartographie||
`ben_sex_cod`|
integer|Code sexe du bénéficiaire||
`ben_nai_ann`|
string|Année de naissance du bénéficiaire||
`age`|
integer|Age du bénéficiaire||
`cla_age_ct`|
string|Classes d&#x27;âge du bénéficiaire (cartographie)||
`cla_age_5`|
string|Classes d&#x27;âge du bénéficiaire (quinquennales)||
`old_cod_reg`|
string|Région de résidence du bénéficiaire (ancien codage)||
`new_cod_reg`|
string|Région de résidence du bénéficiaire (nouveau codage)||
`dpt`|
string|Département de résidence du bénéficiaire||
`regime`|
string|Régime du bénéficiaire||
`source`|
string|Source de provenance du bénéficiaire||
`cmu`|
integer|Bénéficiaire de la Couverture Maladie Universelle complémentaire||
`ben_acs_top`|
string|Top contrat ACS Tiers payant Intégral||
`ben_aah_top`|
integer|Bénéficiaire de l&#x27;allocation adulte handicapé||
`ben_dcd_dte`|
integer|Date de décès du bénéficiaire||
`dcd_3112`|
integer|Bénéficiaire décédé au 31 décembre de l&#x27;année N||
`DEP_SDV_HONOGEN_MNT`|
integer|Soins de généralistes remboursés||
`DEP_SDV_HONOGEN_BSE`|
integer|Soins de généralistes remboursables||
`DEP_SDV_HONOSPE_MNT`|
integer|Soins autres spécialistes remboursés||
`DEP_SDV_HONOSPE_BSE`|
integer|Soins autres spécialistes remboursables||
`DEP_SDV_HONODENT_MNT`|
integer|Soins dentaires remboursés||
`DEP_SDV_HONODENT_BSE`|
integer|Soins dentaires remboursables||
`DEP_SDV_SAGEFEMME_MNT`|
integer|Soins de sages-femmes remboursés||
`DEP_SDV_SAGEFEMME_BSE`|
integer|Soins de sages-femmes remboursables||
`DEP_SDV_KINE_MNT`|
integer|Soins de kinésithérapie remboursés||
`DEP_SDV_KINE_BSE`|
integer|Soins de kinésithérapie remboursables||
`DEP_SDV_INFIRMIER_MNT`|
integer|Soins infirmiers remboursés||
`DEP_SDV_INFIRMIER_BSE`|
integer|Soins infirmiers remboursables||
`DEP_SDV_AUTRESAUXIL_MNT`|
integer|Soins d&#x27;autres paramédicaux remboursés||
`DEP_SDV_AUTRESAUXIL_BSE`|
integer|Soins d&#x27;autres paramédicaux remboursables||
`DEP_SDV_BIO_MNT`|
integer|Biologie remboursée||
`DEP_SDV_BIO_BSE`|
integer|Biologie remboursable||
`DEP_SDV_PHARMACIE_MNT`|
integer|Médicaments remboursés||
`DEP_SDV_PHARMACIE_BSE`|
integer|Médicaments remboursables||
`DEP_SDV_LPP_MNT`|
integer|Autres produits de santé remboursés||
`DEP_SDV_LPP_BSE`|
integer|Autres produits de santé remboursables||
`DEP_SDV_TRANSPORT_MNT`|
integer|Transports remboursés||
`DEP_SDV_TRANSPORT_BSE`|
integer|Transports remboursables||
`DEP_SDV_AUTRES_MNT`|
integer|Autres dépenses de soins de ville remboursés||
`DEP_SDV_AUTRES_BSE`|
integer|Autres dépenses de soins de ville remboursables||
`TOT_DEP_SDV_MNT`|
integer|Total soins de ville remboursés||
`TOT_DEP_SDV_BSE`|
integer|Total soins de ville remboursables||
`DEP_DGF_MCOSEJOUR_MNT`|
integer|Hospitalisations séjour MCO secteur public remboursées||
`DEP_DGF_MCOSEJOUR_BSE`|
integer|Hospitalisations séjour MCO secteur public remboursables||
`DEP_DGF_MCOSUS_MNT`|
integer|Hospitalisations liste en sus MCO secteur public remboursées||
`DEP_DGF_MCOSUS_BSE`|
integer|Hospitalisations liste en sus MCO secteur public remboursables||
`dep_OQN_MCOSEJOUR_MNT`|
integer|Hospitalisations séjour MCO secteur privé remboursées||
`dep_OQN_MCOSEJOUR_BSE`|
integer|Hospitalisations séjour MCO secteur privé remboursables||
`DEP_OQN_MCOSUS_MNT`|
integer|Hospitalisations liste en sus MCO secteur privé remboursées||
`DEP_OQN_MCOSUS_BSE`|
integer|Hospitalisations liste en sus MCO secteur privé remboursables||
`DEP_DGF_ACE_MNT`|
integer|Actes et consultations externes MCO secteur public remboursés||
`DEP_DGF_ACE_BSE`|
integer|Actes et consultations externes MCO secteur public remboursables||
`DEP_DGF_PSY_MNT`|
integer|Hospitalisations en psychiatrie secteur public remboursées||
`DEP_DGF_PSY_BSE`|
integer|Hospitalisations en psychiatrie secteur public remboursables||
`dep_OQN_PSY_MNT`|
integer|Hospitalisations en psychiatrie secteur privé remboursées||
`dep_OQN_PSY_BSE`|
integer|Hospitalisations en psychiatrie secteur privé remboursables||
`DEP_DGF_SSR_MNT`|
integer|Hospitalisations en SSR secteur public remboursées||
`DEP_DGF_SSR_BSE`|
integer|Hospitalisations en SSR secteur public remboursables||
`dep_OQN_SSR_MNT`|
integer|Hospitalisations en SSR secteur privé remboursées||
`dep_OQN_SSR_BSE`|
integer|Hospitalisations en SSR secteur privé remboursables||
`DEP_DGF_HAD_MNT`|
integer|Hospitalisations en HAD secteur public remboursées||
`DEP_DGF_HAD_BSE`|
integer|Hospitalisations en HAD secteur public remboursables||
`DEP_OQN_HAD_MNT`|
integer|Hospitalisations en HAD secteur privé remboursées||
`DEP_OQN_HAD_BSE`|
integer|Hospitalisations en HAD secteur privé remboursables||
`TOT_DEP_HOP_MNT`|
integer|Total hospitalisations (tous secteurs) remboursées||
`TOT_DEP_HOP_BSE`|
integer|Total hospitalisations (tous secteurs) remboursables||
`DEP_IJMALATMP_MNT`|
integer|Indemnités journalières maladie et AT-MP remboursées||
`DEP_IJMALATMP_BSE`|
integer|Indemnités journalières maladie et AT-MP remboursables||
`DEP_IJMATER_MNT`|
integer|Indemnités journalières maternité et autres prestations remboursées||
`DEP_IJMATER_BSE`|
integer|Indemnités journalières maternité et autres prestations remboursables||
`DEP_INVALID_MNT`|
integer|Prestations d&#x27;invalidité remboursées||
`DEP_INVALID_BSE`|
integer|Prestations d&#x27;invalidité remboursables||
`TOT_DEP_PRESESPECE_MNT`|
integer|Total prestations en espèces remboursées||
`TOT_DEP_PRESESPECE_BSE`|
integer|Total prestations en espèces remboursables||
`TOT_DEP_MNT`|
integer|Total des dépenses remboursées||
`TOT_DEP_BSE`|
integer|Total des dépenses remboursables||
`version`|
string|Version de la cartographie||
`BEN_DCD_AME`|
string|Année et mois de décès du bénéficiaire||

