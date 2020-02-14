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
`ben_dcd_dte`|date|Date de décés du bénéficiaire||
`dcd_3112`|nombre entier|Bénéficiaire décédé au 31 décembre de l&#x27;année N||
`ben_acs_top`|chaîne de caractères|Top contrat ACS Tiers payant Intégral||
`ben_aah_top`|nombre entier|Bénéficiaire de l&#x27;allocation adulte handicapé||
`top_CvIDM_aig`|nombre entier|Syndrome coronaire aigu||
`top_CvCoron_chr`|nombre entier|Maladie coronaire chronique||
`sup_CvIDMCor_cat`|nombre entier|Maladie coronaire||
`top_CvAVC_aig`|nombre entier|Accident vasculaire cérébral aigu||
`top_CvAVC_seq`|nombre entier|Séquelle d&#x27;accident vasculaire cérébral||
`sup_CvAVC_cat`|nombre entier|Accident vasculaire cérébral||
`top_CvIC_aig`|nombre entier|Insuffisance cardiaque aiguë||
`top_CvIC_chr`|nombre entier|Insuffisance cardiaque chronique||
`sup_CvIC_cat`|nombre entier|Insuffisance cardiaque||
`top_CvAOMI_ind`|nombre entier|Artériopathie oblitérante du membre inférieur||
`top_CvTrRyC_ind`|nombre entier|Troubles du rythme ou de la conduction cardiaque||
`top_CvValve_ind`|nombre entier|Maladie valvulaire||
`top_CvEmbol_aig`|nombre entier|Embolie pulmonaire aiguë||
`top_CvAutre_ind`|nombre entier|Autres affections cardiovasculaires||
`sup_Cvaig_cat`|nombre entier|Maladies cardioneurovasculaires aigues||
`sup_Cvchr_cat`|nombre entier|Maladies cardioneurovasculaires chroniques||
`sup_Cv_cat`|nombre entier|Maladies cardioneurovasculaires||
`top_FAntiHTA_med`|nombre entier|Traitements antihypertenseurs (hors pathologies)||
`sup_FAntiHTA_med_nnexclu`|nombre entier|Traitements antihypertenseurs (avec ou sans pathologies)||
`top_FHypoLi_med`|nombre entier|Traitements hypolipémiants (hors pathologies)||
`sup_FHypoLi_med_nnexclu`|nombre entier|Traitements hypolipémiants (avec ou sans pathologies)||
`sup_FRV_cat`|nombre entier|Traitements du risque vasculaire (hors pathologies)||
`sup_FRV_cat_nnexclu`|nombre entier|Traitements du risque vasculaire (avec ou sans pathologies)||
`top_FDiabet_ind`|nombre entier|Diabète||
`sup_FInsul_ind`|nombre entier|Diabète insulino-traité||
`sup_FInsulNO_ind`|nombre entier|Diabète non insulino-traité||
`sup_FRVDiab_cat`|nombre entier|Diabète (avec ou sans pathologies) ou traitements du risque vasculaire (hors pathologies)||
`top_CanSeiF_act`|nombre entier|Cancer du sein de la femme actif||
`top_CanSeiF_sur`|nombre entier|Cancer du sein de la femme sous surveillance||
`sup_CanSeiF_cat`|nombre entier|Cancer du sein de la femme||
`top_CanColo_act`|nombre entier|Cancer du côlon actif||
`top_CanColo_sur`|nombre entier|Cancer du côlon sous surveillance||
`sup_CanColo_cat`|nombre entier|Cancer du côlon||
`top_CanPoum_act`|nombre entier|Cancer du poumon actif||
`top_CanPoum_sur`|nombre entier|Cancer du poumon sous surveillance||
`sup_CanPoum_cat`|nombre entier|Cancer du poumon||
`top_CanPros_act`|nombre entier|Cancer de la prostate actif||
`top_CanPros_sur`|nombre entier|Cancer de la prostate sous surveillance||
`sup_CanPros_cat`|nombre entier|Cancer de la prostate||
`top_CanAutr_act`|nombre entier|Autres cancers actifs||
`top_CanAutr_sur`|nombre entier|Autres cancers sous surveillance||
`sup_CanAutr_cat`|nombre entier|Autres cancers||
`sup_CanAct_cat`|nombre entier|Cancers actifs||
`sup_CanSur_cat`|nombre entier|Cancers sous surveillance||
`sup_Can_cat`|nombre entier|Cancers||
`top_Psychos_ind`|nombre entier|Troubles psychotiques||
`top_PDepNev_ind`|nombre entier|Troubles névrotiques et de l&#x27;humeur||
`sup_PTrBipo_ind`|nombre entier|Troubles maniaques et bipolaires||
`sup_PTrDHum_ind`|nombre entier|Dépression et autres troubles de l&#x27;humeur||
`sup_PTrNevr_ind`|nombre entier|Troubles névrotiques liés au stress et somatoformes||
`top_PRetard_ind`|nombre entier|Déficience mentale||
`top_PAddict_ind`|nombre entier|Troubles addictifs||
`sup_PAddAlc_ind`|nombre entier|Troubles addictifs liés à l&#x27;utilisation d&#x27;alcool||
`sup_PAddTab_ind`|nombre entier|Troubles addictifs liés à l&#x27;utilisation du tabac||
`sup_PAddCan_ind`|nombre entier|Troubles addictifs liés à l&#x27;utilisation du cannabis||
`sup_PAddAut_ind`|nombre entier|Troubles addictifs (hormis ceux liés à l&#x27;utilisation d&#x27;alcool, du tabac et du cannabis)||
`top_PTrEnfa_ind`|nombre entier|Troubles psychiatriques débutant dans l&#x27;enfance||
`top_PsyAutr_ind`|nombre entier|Autres troubles psychiatriques||
`sup_PsyPat_cat`|nombre entier|Maladies psychiatriques||
`top_PAntiDe_med`|nombre entier|Traitements antidépresseurs ou régulateurs de l&#x27;humeur (hors pathologies)||
`sup_PAntiDe_med_nnexclu`|nombre entier|Traitements antidépresseurs ou régulateurs de l&#x27;humeur (avec ou sans pathologies)||
`top_PNeurol_med`|nombre entier|Traitements neuroleptiques (hors pathologies)||
`sup_PNeurol_med_nnexclu`|nombre entier|Traitements neuroleptiques (avec ou sans pathologies)||
`top_PAnxiol_med`|nombre entier|Traitements anxiolytiques (hors pathologies)||
`sup_PAnxiol_med_nnexclu`|nombre entier|Traitements anxiolytiques (avec ou sans pathologies)||
`top_PHypnot_med`|nombre entier|Traitements hypnotiques (hors pathologies)||
`sup_PHypnot_med_nnexclu`|nombre entier|Traitements hypnotiques (avec ou sans pathologies)||
`sup_PsyMed_cat`|nombre entier|Traitements psychotropes (hors pathologies)||
`sup_PsyMed_cat_nnexclu`|nombre entier|Traitements psychotropes (avec ou sans pathologies)||
`sup_Psy_cat`|nombre entier|Maladies psychiatriques ou psychotropes||
`top_NDemenc_ind`|nombre entier|Démences (dont maladie d&#x27;Alzheimer)||
`sup_NDemAlz_ind`|nombre entier|Maladie d&#x27;Alzheimer||
`sup_NDemAut_ind`|nombre entier|Autres démences||
`top_NParkin_ind`|nombre entier|Maladie de Parkinson||
`sup_NDemPar_cat`|nombre entier|Maladies dégénératives (démences et Parkinson)||
`top_NSePlaq_ind`|nombre entier|Sclérose en plaque||
`top_NParapl_ind`|nombre entier|Paraplégie||
`top_NMyoMya_ind`|nombre entier|Myopathie ou myasthénie||
`top_NEpilep_ind`|nombre entier|Epilepsie||
`top_NAutres_ind`|nombre entier|Autres affections neurologiques||
`sup_Neuro_cat`|nombre entier|Maladies neurologiques||
`sup_NeuDeg_cat`|nombre entier|Maladies neurologiques ou dégénératives||
`top_ABPCOIr_ind`|nombre entier|Maladies respiratoires chroniques (hors mucoviscidose)||
`sup_ABPCOIr_ind_nnexclu`|nombre entier|Maladies respiratoires chroniques (avec ou sans mucoviscidose)||
`top_IRCrRCH_ind`|nombre entier|Maladies inflammatoires chroniques intestinales||
`top_IRPolyA_ind`|nombre entier|Polyarthrite rhumatoïde et maladies apparentées||
`top_IRSponA_ind`|nombre entier|Spondylarthrite ankylosante et maladies apparentées||
`top_IRautre_ind`|nombre entier|Autres maladies inflammatoires chroniques||
`sup_Inflam_cat`|nombre entier|Maladies inflammatoires chroniques||
`top_IRMMHer_ind`|nombre entier|Maladies métaboliques héréditaires ou amylose||
`top_IRMuco_ind`|nombre entier|Mucoviscidose||
`top_IRHemop_ind`|nombre entier|Hémophilie ou troubles de l&#x27;hémostase graves||
`sup_IRHemop_ind_exclu`|nombre entier|Hémophilie||
`sup_IRTrHemoSev_ind`|nombre entier|Autres troubles de l&#x27;hémostase graves||
`sup_Rares_cat`|nombre entier|Maladies rares||
`top_IRVih_ind`|nombre entier|VIH ou SIDA||
`sup_InfRarVIH_cat`|nombre entier|Maladies inflammatoires ou rares ou VIH ou SIDA||
`top_RDialyse_ind`|nombre entier|Dialyse chronique||
`sup_RHemDia_ind`|nombre entier|Hémodialyse chronique||
`sup_RDiaPer_ind`|nombre entier|Dialyse péritonéale chronique||
`top_Rtrans_aig`|nombre entier|Transplantation rénale||
`top_Rtrans_chr`|nombre entier|Suivi de transplantation rénale||
`sup_RDiaCou_ind`|nombre entier|Dialyse courte||
`sup_RIRCT_cat`|nombre entier|Insuffisance rénale chronique terminale||
`top_HFoiPan_ind`|nombre entier|Maladies du foie ou du pancréas (hors mucoviscidose)||
`sup_HFoiPan_ind_nnexclu`|nombre entier|Maladies du foie ou du pancréas (avec ou sans mucoviscidose)||
`sup_HFoi_ind`|nombre entier|Maladies du foie (hors mucoviscidose)||
`sup_HPan_ind`|nombre entier|Maladies du pancréas (hors mucoviscidose)||
`top_ALDAutr_ind`|nombre entier|Autres affections de longue durée (dont 31 et 32)||
`sup_ALDAutr_0_ind`|nombre entier|Autres affections de longue durée non retrouvées ou non ventilées||
`sup_ALDAutr_2_ind`|nombre entier|Autres affections de longue durée pour insuffisances médullaires et autres cytopénies chroniques||
`sup_ALDAutr_4_ind`|nombre entier|Autres affections de longue durée pour bilharziose compliquée||
`sup_ALDAutr_10_ind`|nombre entier|Autres affections de longue durée pour hémoglobinopathies, hémolyses chroniques constitutionnelles et acquises sévères||
`sup_ALDAutr_19_ind`|nombre entier|Autres affections de longue durée pour néphropathie chronique grave et syndrome néphrotique primitif (hors IRCT)||
`sup_ALDAutr_23_ind`|nombre entier|Autres affections de longue durée pour affections psychiatriques (anomalies chromosomiques)||
`sup_ALDAutr_26_ind`|nombre entier|Autres affections de longue durée pour scoliose structurale évolutive||
`sup_ALDAutr_29_ind`|nombre entier|Autres affections de longue durée pour tuberculose active, lèpre||
`sup_ALDAutr_30_ind`|nombre entier|Autres affections de longue durée pour tumeurs à évolution imprévisible ou inconnue||
`sup_ALDAutr_31_ind`|nombre entier|Autres affections de longue durée hors liste (31)||
`sup_ALDAutr_32_ind`|nombre entier|Autres affections de longue durée pour polypathologie (32)||
`sup_Patho_cat_exclu`|nombre entier|Au moins une pathologie||
`sup_Patho_cat_nnexclu`|nombre entier|Au moins une pathologie ou traitement||
`top_Materni_ind`|nombre entier|Maternité (avec ou sans pathologies)||
`sup_Materni_ind_exclu`|nombre entier|Maternité (hors pathologies et traitements)||
`sup_PatMat_cat`|nombre entier|Au moins une pathologie, traitement ou maternité||
`sup_hospit_ponct`|nombre entier|Hospitalisations ponctuelles (avec ou sans pathologies, traitements ou maternité)||
`sup_hospit_ponct_exclu`|nombre entier|Hospitalisations ponctuelles (hors pathologies, traitements ou maternité)||
`sup_PatMatHos_cat`|nombre entier|Au moins une pathologie, traitement, maternité ou hospitalisation||
`sup_Petit_Conso`|nombre entier|Pas de pathologies, traitements, maternité ou hospitalisations||
`sup_Arthros_med`|nombre entier|Traitement antalgique ou anti-inflammatoire (hors pathologies, traitements, maternité ou hospitalisations)||
`sup_AINS_med`|nombre entier|Traitement AINS (hors pathologies, traitements, maternité ou hospitalisations)||
`sup_Antalg_med`|nombre entier|Traitement antalgique (hors pathologies, traitements, maternité ou hospitalisations)||
`sup_ACorti_med`|nombre entier|Traitement corticoide (hors pathologies, traitements, maternité ou hospitalisations)||
`sup_Arthros_med_nnexclu`|nombre entier|Traitement antalgique ou anti-inflammatoire (avec ou sans pathologies, traitements, maternité ou hospitalisations)||
`sup_AINS_med_nnexclu`|nombre entier|Traitement AINS (avec ou sans pathologies, traitements, maternité ou hospitalisations)||
`sup_Antalg_med_nnexclu`|nombre entier|Traitement antalgique (avec ou sans pathologies, traitements, maternité ou hospitalisations)||
`sup_ACorti_med_nnexclu`|nombre entier|Traitement corticoide (avec ou sans pathologies, traitements, maternité ou hospitalisations)||
`sup_Petit_Conso_exclu`|nombre entier|Pas de pathologies, traitements, maternité, hospitalisations ou traitement antalgique ou anti-inflammatoire||
`sup_PopTot_cat`|nombre entier|Total consommants régime général + sections locales mutualistes||
`version`|chaîne de caractères|Version de la cartographie||
`BEN_DCD_AME`|année et mois|Année et mois de décès du bénéficiaire||

