## Schéma

- Titre : Table pathologies de la cartographie des pathologies pour l'année AAAA et l'algorithme N
<br />
- Clé(s) étrangère(s) : <br />
`id_carto` => table [CT_IDE_AAAA_GN](/tables/CT_IDE_AAAA_GN) [ `id_carto` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/CARTOGRAPHIE_PATHOLOGIES/CT_IND_AAAA_GN.json"  
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
`ben_dcd_dte`|
integer|Date de décés du bénéficiaire||
`dcd_3112`|
integer|Bénéficiaire décédé au 31 décembre de l&#x27;année N||
`ben_acs_top`|
string|Top contrat ACS Tiers payant Intégral||
`ben_aah_top`|
integer|Bénéficiaire de l&#x27;allocation adulte handicapé||
`top_CvIDM_aig`|
integer|Syndrome coronaire aigu||
`top_CvCoron_chr`|
integer|Maladie coronaire chronique||
`sup_CvIDMCor_cat`|
integer|Maladie coronaire||
`top_CvAVC_aig`|
integer|Accident vasculaire cérébral aigu||
`top_CvAVC_seq`|
integer|Séquelle d&#x27;accident vasculaire cérébral||
`sup_CvAVC_cat`|
integer|Accident vasculaire cérébral||
`top_CvIC_aig`|
integer|Insuffisance cardiaque aiguë||
`top_CvIC_chr`|
integer|Insuffisance cardiaque chronique||
`sup_CvIC_cat`|
integer|Insuffisance cardiaque||
`top_CvAOMI_ind`|
integer|Artériopathie oblitérante du membre inférieur||
`top_CvTrRyC_ind`|
integer|Troubles du rythme ou de la conduction cardiaque||
`top_CvValve_ind`|
integer|Maladie valvulaire||
`top_CvEmbol_aig`|
integer|Embolie pulmonaire aiguë||
`top_CvAutre_ind`|
integer|Autres affections cardiovasculaires||
`sup_Cvaig_cat`|
integer|Maladies cardioneurovasculaires aigues||
`sup_Cvchr_cat`|
integer|Maladies cardioneurovasculaires chroniques||
`sup_Cv_cat`|
integer|Maladies cardioneurovasculaires||
`top_FAntiHTA_med`|
integer|Traitements antihypertenseurs (hors pathologies)||
`sup_FAntiHTA_med_nnexclu`|
integer|Traitements antihypertenseurs (avec ou sans pathologies)||
`top_FHypoLi_med`|
integer|Traitements hypolipémiants (hors pathologies)||
`sup_FHypoLi_med_nnexclu`|
integer|Traitements hypolipémiants (avec ou sans pathologies)||
`sup_FRV_cat`|
integer|Traitements du risque vasculaire (hors pathologies)||
`sup_FRV_cat_nnexclu`|
integer|Traitements du risque vasculaire (avec ou sans pathologies)||
`top_FDiabet_ind`|
integer|Diabète||
`sup_FInsul_ind`|
integer|Diabète insulino-traité||
`sup_FInsulNO_ind`|
integer|Diabète non insulino-traité||
`sup_FRVDiab_cat`|
integer|Diabète (avec ou sans pathologies) ou traitements du risque vasculaire (hors pathologies)||
`top_CanSeiF_act`|
integer|Cancer du sein de la femme actif||
`top_CanSeiF_sur`|
integer|Cancer du sein de la femme sous surveillance||
`sup_CanSeiF_cat`|
integer|Cancer du sein de la femme||
`top_CanColo_act`|
integer|Cancer du côlon actif||
`top_CanColo_sur`|
integer|Cancer du côlon sous surveillance||
`sup_CanColo_cat`|
integer|Cancer du côlon||
`top_CanPoum_act`|
integer|Cancer du poumon actif||
`top_CanPoum_sur`|
integer|Cancer du poumon sous surveillance||
`sup_CanPoum_cat`|
integer|Cancer du poumon||
`top_CanPros_act`|
integer|Cancer de la prostate actif||
`top_CanPros_sur`|
integer|Cancer de la prostate sous surveillance||
`sup_CanPros_cat`|
integer|Cancer de la prostate||
`top_CanAutr_act`|
integer|Autres cancers actifs||
`top_CanAutr_sur`|
integer|Autres cancers sous surveillance||
`sup_CanAutr_cat`|
integer|Autres cancers||
`sup_CanAct_cat`|
integer|Cancers actifs||
`sup_CanSur_cat`|
integer|Cancers sous surveillance||
`sup_Can_cat`|
integer|Cancers||
`top_Psychos_ind`|
integer|Troubles psychotiques||
`top_PDepNev_ind`|
integer|Troubles névrotiques et de l&#x27;humeur||
`sup_PTrBipo_ind`|
integer|Troubles maniaques et bipolaires||
`sup_PTrDHum_ind`|
integer|Dépression et autres troubles de l&#x27;humeur||
`sup_PTrNevr_ind`|
integer|Troubles névrotiques liés au stress et somatoformes||
`top_PRetard_ind`|
integer|Déficience mentale||
`top_PAddict_ind`|
integer|Troubles addictifs||
`sup_PAddAlc_ind`|
integer|Troubles addictifs liés à l&#x27;utilisation d&#x27;alcool||
`sup_PAddTab_ind`|
integer|Troubles addictifs liés à l&#x27;utilisation du tabac||
`sup_PAddCan_ind`|
integer|Troubles addictifs liés à l&#x27;utilisation du cannabis||
`sup_PAddAut_ind`|
integer|Troubles addictifs (hormis ceux liés à l&#x27;utilisation d&#x27;alcool, du tabac et du cannabis)||
`top_PTrEnfa_ind`|
integer|Troubles psychiatriques débutant dans l&#x27;enfance||
`top_PsyAutr_ind`|
integer|Autres troubles psychiatriques||
`sup_PsyPat_cat`|
integer|Maladies psychiatriques||
`top_PAntiDe_med`|
integer|Traitements antidépresseurs ou régulateurs de l&#x27;humeur (hors pathologies)||
`sup_PAntiDe_med_nnexclu`|
integer|Traitements antidépresseurs ou régulateurs de l&#x27;humeur (avec ou sans pathologies)||
`top_PNeurol_med`|
integer|Traitements neuroleptiques (hors pathologies)||
`sup_PNeurol_med_nnexclu`|
integer|Traitements neuroleptiques (avec ou sans pathologies)||
`top_PAnxiol_med`|
integer|Traitements anxiolytiques (hors pathologies)||
`sup_PAnxiol_med_nnexclu`|
integer|Traitements anxiolytiques (avec ou sans pathologies)||
`top_PHypnot_med`|
integer|Traitements hypnotiques (hors pathologies)||
`sup_PHypnot_med_nnexclu`|
integer|Traitements hypnotiques (avec ou sans pathologies)||
`sup_PsyMed_cat`|
integer|Traitements psychotropes (hors pathologies)||
`sup_PsyMed_cat_nnexclu`|
integer|Traitements psychotropes (avec ou sans pathologies)||
`sup_Psy_cat`|
integer|Maladies psychiatriques ou psychotropes||
`top_NDemenc_ind`|
integer|Démences (dont maladie d&#x27;Alzheimer)||
`sup_NDemAlz_ind`|
integer|Maladie d&#x27;Alzheimer||
`sup_NDemAut_ind`|
integer|Autres démences||
`top_NParkin_ind`|
integer|Maladie de Parkinson||
`sup_NDemPar_cat`|
integer|Maladies dégénératives (démences et Parkinson)||
`top_NSePlaq_ind`|
integer|Sclérose en plaque||
`top_NParapl_ind`|
integer|Paraplégie||
`top_NMyoMya_ind`|
integer|Myopathie ou myasthénie||
`top_NEpilep_ind`|
integer|Epilepsie||
`top_NAutres_ind`|
integer|Autres affections neurologiques||
`sup_Neuro_cat`|
integer|Maladies neurologiques||
`sup_NeuDeg_cat`|
integer|Maladies neurologiques ou dégénératives||
`top_ABPCOIr_ind`|
integer|Maladies respiratoires chroniques (hors mucoviscidose)||
`sup_ABPCOIr_ind_nnexclu`|
integer|Maladies respiratoires chroniques (avec ou sans mucoviscidose)||
`top_IRCrRCH_ind`|
integer|Maladies inflammatoires chroniques intestinales||
`top_IRPolyA_ind`|
integer|Polyarthrite rhumatoïde et maladies apparentées||
`top_IRSponA_ind`|
integer|Spondylarthrite ankylosante et maladies apparentées||
`top_IRautre_ind`|
integer|Autres maladies inflammatoires chroniques||
`sup_Inflam_cat`|
integer|Maladies inflammatoires chroniques||
`top_IRMMHer_ind`|
integer|Maladies métaboliques héréditaires ou amylose||
`top_IRMuco_ind`|
integer|Mucoviscidose||
`top_IRHemop_ind`|
integer|Hémophilie ou troubles de l&#x27;hémostase graves||
`sup_IRHemop_ind_exclu`|
integer|Hémophilie||
`sup_IRTrHemoSev_ind`|
integer|Autres troubles de l&#x27;hémostase graves||
`sup_Rares_cat`|
integer|Maladies rares||
`top_IRVih_ind`|
integer|VIH ou SIDA||
`sup_InfRarVIH_cat`|
integer|Maladies inflammatoires ou rares ou VIH ou SIDA||
`top_RDialyse_ind`|
integer|Dialyse chronique||
`sup_RHemDia_ind`|
integer|Hémodialyse chronique||
`sup_RDiaPer_ind`|
integer|Dialyse péritonéale chronique||
`top_Rtrans_aig`|
integer|Transplantation rénale||
`top_Rtrans_chr`|
integer|Suivi de transplantation rénale||
`sup_RDiaCou_ind`|
integer|Dialyse courte||
`sup_RIRCT_cat`|
integer|Insuffisance rénale chronique terminale||
`top_HFoiPan_ind`|
integer|Maladies du foie ou du pancréas (hors mucoviscidose)||
`sup_HFoiPan_ind_nnexclu`|
integer|Maladies du foie ou du pancréas (avec ou sans mucoviscidose)||
`sup_HFoi_ind`|
integer|Maladies du foie (hors mucoviscidose)||
`sup_HPan_ind`|
integer|Maladies du pancréas (hors mucoviscidose)||
`top_ALDAutr_ind`|
integer|Autres affections de longue durée (dont 31 et 32)||
`sup_ALDAutr_0_ind`|
integer|Autres affections de longue durée non retrouvées ou non ventilées||
`sup_ALDAutr_2_ind`|
integer|Autres affections de longue durée pour insuffisances médullaires et autres cytopénies chroniques||
`sup_ALDAutr_4_ind`|
integer|Autres affections de longue durée pour bilharziose compliquée||
`sup_ALDAutr_10_ind`|
integer|Autres affections de longue durée pour hémoglobinopathies, hémolyses chroniques constitutionnelles et acquises sévères||
`sup_ALDAutr_19_ind`|
integer|Autres affections de longue durée pour néphropathie chronique grave et syndrome néphrotique primitif (hors IRCT)||
`sup_ALDAutr_23_ind`|
integer|Autres affections de longue durée pour affections psychiatriques (anomalies chromosomiques)||
`sup_ALDAutr_26_ind`|
integer|Autres affections de longue durée pour scoliose structurale évolutive||
`sup_ALDAutr_29_ind`|
integer|Autres affections de longue durée pour tuberculose active, lèpre||
`sup_ALDAutr_30_ind`|
integer|Autres affections de longue durée pour tumeurs à évolution imprévisible ou inconnue||
`sup_ALDAutr_31_ind`|
integer|Autres affections de longue durée hors liste (31)||
`sup_ALDAutr_32_ind`|
integer|Autres affections de longue durée pour polypathologie (32)||
`sup_Patho_cat_exclu`|
integer|Au moins une pathologie||
`sup_Patho_cat_nnexclu`|
integer|Au moins une pathologie ou traitement||
`top_Materni_ind`|
integer|Maternité (avec ou sans pathologies)||
`sup_Materni_ind_exclu`|
integer|Maternité (hors pathologies et traitements)||
`sup_PatMat_cat`|
integer|Au moins une pathologie, traitement ou maternité||
`sup_hospit_ponct`|
integer|Hospitalisations ponctuelles (avec ou sans pathologies, traitements ou maternité)||
`sup_hospit_ponct_exclu`|
integer|Hospitalisations ponctuelles (hors pathologies, traitements ou maternité)||
`sup_PatMatHos_cat`|
integer|Au moins une pathologie, traitement, maternité ou hospitalisation||
`sup_Petit_Conso`|
integer|Pas de pathologies, traitements, maternité ou hospitalisations||
`sup_Arthros_med`|
integer|Traitement antalgique ou anti-inflammatoire (hors pathologies, traitements, maternité ou hospitalisations)||
`sup_AINS_med`|
integer|Traitement AINS (hors pathologies, traitements, maternité ou hospitalisations)||
`sup_Antalg_med`|
integer|Traitement antalgique (hors pathologies, traitements, maternité ou hospitalisations)||
`sup_ACorti_med`|
integer|Traitement corticoide (hors pathologies, traitements, maternité ou hospitalisations)||
`sup_Arthros_med_nnexclu`|
integer|Traitement antalgique ou anti-inflammatoire (avec ou sans pathologies, traitements, maternité ou hospitalisations)||
`sup_AINS_med_nnexclu`|
integer|Traitement AINS (avec ou sans pathologies, traitements, maternité ou hospitalisations)||
`sup_Antalg_med_nnexclu`|
integer|Traitement antalgique (avec ou sans pathologies, traitements, maternité ou hospitalisations)||
`sup_ACorti_med_nnexclu`|
integer|Traitement corticoide (avec ou sans pathologies, traitements, maternité ou hospitalisations)||
`sup_Petit_Conso_exclu`|
integer|Pas de pathologies, traitements, maternité, hospitalisations ou traitement antalgique ou anti-inflammatoire||
`sup_PopTot_cat`|
integer|Total consommants régime général + sections locales mutualistes||
`version`|
string|Version de la cartographie||
`BEN_DCD_AME`|
string|Année et mois de décès du bénéficiaire||

