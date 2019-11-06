# Les dépenses des établissements de santé dans le SNDS

## L’hôpital public

Nous vous présentons tout d'abord comment exclure l'information concernant les hôpitaux publics dans le DCIR et le DCIRS, afin
de privilégier leur étude via le PMSI. 

### Comment exclure les actes et consultations externes du DCIR et DCIRS

Les remontées des hôpitaux publics ne sont pas exhaustives dans le DCIR.
Il est donc conseillé de les exclure et d’utiliser les données du PMSI uniquement pour ceux-ci. 

Sont remontées dans le DCIR des lignes « pour information » relatives aux transmissions des **consultations externes et des 
séjours des établissements publics** qui ne sont pas encore passés en facturation directe.  

Pour les exclure, il faut appliquer le filtre `DPN_QLF NE 71` (qualificatif de la dépense n'est pas "pour information (soins externes)".  

La CNAM recommande d’appliquer ce filtre pour toutes les requêtes effectuées sur le DCIR. Ces lignes ont été exclues du DCIRS.

En effet, on trouve dans le DCIR les **actes et consultations externes** (ACE) en facturation directe. 

En effet, depuis septembre 2011, certains établissements publics ont basculé leur activité ACE en facturation directe. 
Cela concernait 335 établissements géographiques (268 FINESS juridiques) à fin septembre 2015, d’autres sont passés en 
facturation directe depuis, mais il reste encore des établissements pour lesquels les ACE sont sur leur budget global. 
Ainsi, l’information est partielle, tandis qu’elle est remontée de façon exhaustive dans le PMSI.

Pour exclure les Actes et Consultations Externes générés par les établissements Ex Dotation Globale (ex DG), il est conseillé d’utiliser 
le filtre ci-dessous:

-	On exclut la prestation :
	- si elle concerne de la T2A dans le public **OU** 
    - si elle n’est dans pas un établissement en T2A mais que l’établissement est public et que la catégorie de l’établissement exécutant est un CHR,
un CH, un CH spécialité de lutte contre le cancer, un hôpital local, un établissement de soins obstétriques et chirurgico-gynécologiques,
un établissement de soins pluridisciplinaires, un établissement de soins chirurgicaux ou un établissement de soins médicaux et que le code 
du mode de traitement indique que la prestation est en hospitalisation complète, consultation et soins externes ou urgence (ou sans objet) **OU**
    -	si l’indicateur de T2A est manquant, que l’indicateur du caractère privé ou public de l’établissement est manquant, 
que la catégorie de l’établissement exécutant est manquant et que le mode de  traitement est manquant 

Le code SAS correspondant est le suivant :
```
NOT (T2.ETE_IND_TAA= 1  
    OR (T2.ETE_IND_TAA= 0 AND T2.PRS_PPU_SEC=1 
        AND T2.ETE_CAT_COD in (101,355,131,106,122,365,128,129) AND T2.MDT_COD in (0,3,7,10)))
    OR (T2.ETE_IND_TAA is null AND T2.PRS_PPU_SEC is null 
        AND T2.ETE_CAT_COD is null AND T2.MDT_COD is null)
```

### Comment exclure l'hôpital public des études sur le DCIR et le DCIRS à partir du classement de la catégorie juridique privé / public

On peut créer une variable qui permet d’obtenir le lieu d’exécution de la prestation et de classer ce lieu en fonction de s’il s’agit
d’un établissement en public et privé. 

Si la variable `ETB_EXE_FIN` est égale à 0, aucun établissement n’est lié à la prestation, alors il s’agit d’une prestation de ville. 

Parmi les soins associés à un FINESS, certains peuvent être classés dans les soins de ville selon la logique suivante. 
La variable `ETB_CAT_RG1` du référentiel des établissements (`IR_CET_V`) permet de regrouper les établissements 
(la variable `ETB_CAT_COD` offre une nomenclature plus fine). 

Si les deux premiers caractères de la variable de code de regroupement de l’établissement `ETB_CAT_RG1`  
est égale à 21 (à l'exclusion des établissements relevant de la loi hospitalière, `ETE_CAT_COD`== 698) ou 22, alors il s’agit de prestations que l'on peut classer en "ville", à savoir les cabinets libéraux et 
autres établissements de soins et de prévention. 



La variable `PRS_PPU_SEC` nous permet d'avoir de l'information sur la caractéristique privé ou public de la prestation. 
La variable `PRS_PPU_SEC` est construite comme suit. L’établissement est public :

    - 	si le type d’établissement est public ( `ETE_TYP_COD` vaut 1, 2 ou 3]) et 
    - 	si le numéro  du PS exécutant n’est pas renseigné (`PFS_EXE_NUM` est manquant ou vaut ‘00000000’)
    -	sinon l’établissement est privé 

Si le code `PRS_PPU_SEC` est égal à 1 alors on peut classer la prestation en lieu d'exécution "Public".
Sinon les prestations sont classées en lieu d’exécution "Prive".

Pour résumer en pseudo-code:
```
IF substr(ETB_CAT_RG1,1,2) IN (21,22) AND ETE_CAT_COD<>698:
    THEN lieu_exec = "ville"
ELSE IF PRS_PPU_SEC == 1:
    THEN lieu_exec = "public"
ELSE : 
    lieu_exec = "prive"
```

Pour avoir plus de détail sur la catégorie juridique de l'établissement, on peut se référer à la variable `ETE_TYP_COD` qui est le code du type 
de l'établissement exécutant. 
Dans le DCIR, il faut aller chercher les variables `PRS_PPU_SEC` et `ETE_TYP_COD` dans la table `ER_ETE_F` qui n'est pas la table centrale; 
dans le DCIRS ces informations sont dans la table centrale `NS_PRS_F` (table de nomenclature `IR_TYE_V`).


Un poste particulier est à dégager qui peut concerner l'hôpital public et qui devrait être retenus avec les soins de ville, 
à savoir les **rétrocessions**.
Les rétrocessions correspondent à de la pharmacie hospitalière en établissement. Le code prestation `PRS_NAT_REF` est parmi 
3317, 3318, 3319, 3351, 3352, 3353, 3354, 3355, 3356, 3357, 3330 (table de valeur `IR_NAT_V`). 


Lorsque l’on travaille sur les **soins de ville**, il est recommandé d’exclure les prestations en établissements publics qui 
ne sont pas des rétrocessions. On peut donc exclure les prestations pour lesquels `lieu_exec` == 'public' sauf si la `PRS_NAT_REF` 
correspond à de la rétrocession.

### Les dépenses en établissement public dans le PMSI

Il existe quatre types de spécialités hospitalières : 
- MCO
- SSR
- PSY
- HAD
Pour plus de détail sur ce spécialités, se reporter par exemple au Panorama des établissements de santé de la DREES
(https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/panoramas-de-la-drees/article/les-etablissements-de-sante-edition-2019)
ou à la documentation de l'ATIH sur le sujet.

Nous décrivons ici comment trouver les dépenses de l'assurance maladie par séjour en établissement public.
Pour avoir les dépenses complètes par séjour, il faut ajouter le montant du reste à charge après assurance maladie obligatoire.
Pour plus d'informations sur le calcul du reste à charge, se référer à la fiche correspondante (WIP).

#### Filtres à appliquer pour le PMSI MCO

Sur la partie séjour, les filtres à poser à partir des variables 
de la table `t_mcoANNEE.b` sous ORAVUE sont les suivants : 

- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) (en utilisant la variable `ETA_NUM`)
- Exclusion des séjours en erreur (en utilisant la variable `GRG_GHM`)
- Exclusion des prestations inter établissement (en utilisant la variable `SOR_MOD`)
- Exclusion des prestations pour lesquelles un résumé de séjour n'a pas été généré: la dialyse, l'activité externe des médecins salariés ou 
des FFM, ATU, SE (attention cependant, la variable `TYP_GEN_RSA` n'est disponible qu'à partir de 2015)

Le code SAS correspondant est le suivant :

```
WHERE 
ETA_NUM not in (   '600100093','600100101','620100016','640790150','640797098','750100018','750806226', 
                   '750100356','750802845','750801524','750100067','750100075','750100042','750805228',
                   '750018939','750018988','750100091','750100083','750100109','750833345','750019069',
                   '750803306','750019028','750100125','750801441','750019119','750100166','750100141',
                   '750100182','750100315','750019648','750830945','750008344','750803199','750803447',
                   '750100216','750100208','750833337','750000358','750019168','750809576','750100299',
                   '750041543','750100232','750802258','750803058','750803454','750100273','750801797',
                   '750803371','830100012','830009809','910100015','910100031','910100023','910005529',
                   '920100013','920008059','920100021','920008109','920100039','920100047','920812930',
                   '920008158','920100054','920008208','920100062','920712551','920000122','930100052',
                   '930100037','930018684','930812334','930811294','930100045','930011408','930811237',
                   '930100011','940018021','940100027','940100019','940170087','940005739','940100076',
                   '940100035','940802291','940100043','940019144','940005788','940100050','940802317',
                   '940100068','940005838','950100024','950100016','130808231','130809775','130782931',
                   '130806003','130783293','130804305','130790330','130804297','130783236','130796873',
                   '130808520','130799695','130802085','130808256','130806052','130808538','130802101',
                   '130796550','130014558','130784234','130035884','130784259','130796279','130792856',
                   '130017239','130792534','130793698','130792898','130808546','130789175','130780521',
                   '130033996','130018229','90787460','690007422','690007539','690784186','690787429',
                   '690783063','690007364','690787452','690007406','690787486','690784210','690799416',
                   '690784137','690007281','690799366','690784202','690023072','690787577','690784194',
                   '690007380','690784129','690029194','690806054','690029210','690787767','690784178',
                   '690783154','690799358','690787817','690787742','690784152','690784145','690783121',
                   '690787478','690007455','690787494','830100558','830213484') 
AND GRG_GHM not like '90%' 
AND ENT_MOD<>'0' and SOR_MOD<>'0'
AND TYP_GEN_RSA = '0' 
```

En complément, des filtres peuvent être appliqués sur les dates d'entrée et de sortie pour se 
concentrer sur les séjours ayant eu lieu à une période donnée. 
Les variables à utiliser sont `EXE_SOI_DTD` et `EXE_SOI_DTF` dans la table de chaînage `t_mcoANNEE.c` sous ORAVUE.
  
Enfin, pour étudier les dépenses, il faut exclure les séjours non valorisés à partir de la variable `VALO` de la table `t_mcoANNEE.valo` de valorisation du séjour, 
qui prend les valeurs suivantes :
  * 0 : si le séjour n’est pas valorisé 
  * 1 : si le séjour est valorisé 
  * 2 : dans le cas d’un séjour non valorisé avec prélèvement d’organes. Dans ce cas, seuls les prélèvements d’organe sont valorisés pour le séjour. 
  * 3 : si le séjour est en AME (Aide Médicale d'Etat)
  * 4 : si le séjour est en Soins urgents (SU)
  * 5 : si le patient est un détenu  
A minima, il faut exclure les séjours pour lesquels `VALO` prend la valeur 0, ou est manquante.

#### Les tables à considérer pour étudier l'activité en hôpital public 

##### En MCO

Pour connaitre le montant de la dépense de l'assurance maladie, on utilise la table de valorisation des séjours `t_mcoANNEE.valo` sous ORAVUE. 
La variable de montant est `MNT_TOT_AM`. Il s'agit du montant présenté à l'assurance maladie puisqu'il n'y a pas de dépassements à l'hôpital public.  
Il est conseillé de considérer `MNT_TOT_AM` de la table valo corrigée par l'ATIH et non la variable
`TOT_MNT_AM` de la table STC qui est l'information brute des établissements.  
Pour un même séjour, ces deux montants ne sont pas calculés selon la même base de remboursement : 
- `MNT_TOT_AM` est calculée sur la base des GHS
- tandis que `TOT_MNT_AM` est calculée sur la base des tarifs journaliers de prestation (TJP) 

Pour joindre les deux tables `valo` et `stc` il faut passer par la table de chainage patients (`t_mcoANNEE.c` toujours sous ORAVUE).
La clef de chaînage est le couple (`RSA_NUM`, `ETA_NUM`). `RSA_NUM` est le numéro du patient et `ETA_NUM` l'identifiant de l'établissement.
Dans la table patients, on trouve l'identifiant bénéficiaire `NIR_ANO_17` (cf. fiche Identifiant des bénéficiaires pour plus d'informations).

L'information concernant les établissements se trouve dans la table `t_mcoANNEE.e`. On peut joindre cette table aux précédentes 
avec `ETA_NUM`. 

Les dépenses d'actes et consultations externes (ACE) des établissements publics et ESPIC se trouvent dans la table de valorisation des ACE 
sous `t_mcoANNEE.valoace`. 
Cette table contient une ligne par ACE (valorisé ou non). 
On peut obtenir des détails sur la nature de l'ACE (ATU, FFM, Dialyse, SE, FTN, NGAP, CCAM, DM Externe) à l'aide de la variable `ACT_COD` de la table `t_mcoANNEE.fbstc`. 
Pour plus d'informations sur les ACE, se reporter à la fiche correspondante. 
La variable de montant de dépense est `mnt_br`, soit la base de remboursement de la sécurité sociale. En effet, 
comme évoqué précédemment, il n'existe pas de dépassements à l'hôpital public. 
La table patients correspondante est `t_mcoANNEE.cstc`, on peut les chaîner toujours via le couple (`RSA_NUM`,`ETA_NUM`). La table
patients contient également l'identifiant bénéficiaire `NIR_ANO_17`.

Tout comme pour les séjours de MCO, il faut veiller à appliquer les filtres suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) (en utilisant la variable `ETA_NUM`)
- Exclusion des ACE réalisées en dehors de la période d'étude (en utilisant les variable `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des ACE non valorisées (en utilisant la variable `VALO`)

L'information sur la pharmacie de la liste en sus, les dispositifs médicaux implantables, les médicaments soumis à autorisation temporaire d'utilisation (ATU)
et les médicaments thrombolytiques se trouve dans les tables suivantes. 

Pour l'hôpital public en MCO: 
- `t_mcoANNEE.med` : contient les médicaments en sus
- `t_mcoANNEE.medatu` : contient les médicaments soumis à autorisation temporaire d’utilisation
- `t_mcoANNEE.medthrombo` : contient les médicaments thrombolytiques pour le traitement de l’AVC ischémique
- `t_mcoANNEE.dmip` : contient les dispositifs médicaux implantables  

Pour les ACE en MCO, l'information se trouve dans la table `FHSTC` : médicaments en sus.

On peut déduire le montant des dépenses à partir du prix d'achat multiplié par le nombre administré ou posé (pour les médicaments et dispositifs respectivement).  

Pour l'étude des médicaments et dispositifs de la liste en SUS, l'ATIH suggère d'appliquer les critères d'exclusion suivants :     
(https://www.scansante.fr/applications/synthese-dmi-mo-sus)  
- Nombre UCD = 0 et prix d’achat > 0
- Nombre UCD = 0 et prix d’achat = 0
- Nombre UCD < 0 ou prix d’achat < 0
- Codes UCD erronés (à vide ou indéterminés)
- Molécules administrées hors période d’appartenance à la liste en sus
- Nombre DMI = 0 et prix d’achat ≥ 0
- Nombre DMI < 0 ou prix d’achat < 0
- Codes DMI erronés (à vide ou indéterminés)
- DMI posés hors période d’appartenance à la liste en sus

#### En SSR

À partir de 2017, on peut utiliser la variable `MNT_TOT_AM` de la table de valorisation des séjours (corrigée par l'ATIH) `t_ssrANNEE.valo` sous ORAVUE.  
Avant 2017, nous ne disposons que de la table de facturation transmise par les établissements `t_ssrANNEE.stc`, dans laquelle la variable `TOT_MNT_AM` n'est pas est calculée sur la base des GMT mais des TJP. 
La table de chainage patients se nomme `t_ssrANNEE.c`.
La table `t_ssrANNEE.b` de description du sejour permet d'extraire des informations sur le mode d'hospitalisation (complète/partielle, variable `HOS_TYP_UM`), ainsi que sur le GME (variable `GR_GME`).

Les filtres sur les séjours sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) (en utilisant la variable `ETA_NUM`)
- Exclusion des séjours en erreur (en utilisant la variable `GRG_GME`)
- Exclusion des prestations inter établissement (en utilisant la variable `SOR_MOD`)
- Exclusion des séjours hors période d'étude (variables `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des séjours non valorisés (variable `VALO` dans `t_ssrANNEE.valo` ou `FAC_SEJ_AM` dans `t_ssrANNEE.stc`)  
  
Les actes et consultations externes en SSR se trouvent dans la table `t_ssrANNEE.cstc`. 
Tout comme en MCO, on peut obtenir des détails sur la nature de l'ACE (ATU, FFM, Dialyse, SE, FTN, NGAP, CCAM, DM Externe) à l'aide de la variable `ACT_COD` de la table `t_mcoANNEE.fbstc`.  
Les deux tables peuvent se joindre par la clef (`ETA_NUM`, `SEQ_NUM`).
Pour plus d'informations, se référer à la fiche sur les ACE.
On peut utiliser la table de facturation `t_ssrANNEE.fastc` pour calculer le montant total des dépenses (somme de `PH_MNT` et `HON_MNT`),
ainsi que le montant remboursé par l'AM (somme de `PH_AMO_MNR`, `HON_AM_MNR`). 
Avec `PH_MNT`, le montant total facture pour PH; `HON_MNT`, le total honoraire facture; `PH_AMO_MNR`, le total remboursable AMO prestation hospitalieres; `HON_AM_MNR`, le total honoraire remboursable AM.  

Tout comme en MCO, il faut veiller à appliquer les filtres suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) (en utilisant la variable `ETA_NUM`)
- Exclusion des ACE réalisées en dehors de la période d'étude (en utilisant les variable `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des ACE non valorisées


Les informations sur les médicaments en sus et les médicaments soumis à autorisation temporaire d'utilisation (ATU) se trouvent dans les tables :
- `t_ssrANNEE.med`: médicaments en sus
- `t_ssrANNEE.medatu`: médicaments soumis à ATU

On peut déduire le montant des dépenses à partir du prix d'achat multiplié par le nombre administré.  

Pour l'étude des médicaments et dispositifs de la liste en SUS, l'ATIH suggère d'appliquer les critères d'exclusion suivants :   
(https://www.scansante.fr/applications/synthese-dmi-mo-sus)  
- Nombre UCD = 0 et prix d’achat > 0
- Nombre UCD = 0 et prix d’achat = 0
- Nombre UCD < 0 ou prix d’achat < 0
- Nombre UCD >=100
- Codes UCD erronés (à vide ou indéterminés)
- Molécules administrées hors période d’appartenance à la liste en sus
  

#### En HAD

À partir de 2017, on peut utiliser la variable `MNT_TOT_AM` de la table de valorisation des séjours (corrigée par l'ATIH) `t_hadANNEE.valo` sous ORAVUE.  
Avant 2017, nous ne disposons que de la table de facturation transmise par les établissements `t_hadANNEE.stc`, dans laquelle la variable `TOT_MNT_AM` n'est pas est calculée sur la base des GHT mais des TJP. 
La table de chainage patients se nomme `t_hadANNEE.c`.
Des informations sur le GHPC se trouvent dans la table `t_hadANNEE.grp` (variable `PAP_GRP_GHPC`).

Les filtres sur les séjours sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) (en utilisant la variable `ETA_NUM`)
- Exclusion des séjours en erreur (en utilisant la variable `PAP_GRP_GHPC`)
- Exclusion des séjours hors période d'étude (variables `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des séjours non valorisés (variable `VALO` dans `t_hadANNEE.valo` ou `FAC_SEJ_AM` dans `t_hadANNEE.stc`)  


Il n'y a pas d'ACE en HAD. 

L'information sur la dépense que représente la pharmacie de la liste en sus, les médicaments ATU et les médicaments coûteux hors liste en sus et
hors ATU est contenue dans:
- `t_hadANNEE.med` : médicaments en sus
- `t_hadANNEE.medatu` : médicaments soumis à autorisation temporaire d’utilisation
- `t_hadANNEE.medhcl` : médicaments coûteux hors liste en SUS et hors ATU

On peut déduire le montant des dépenses à partir du prix d'achat multiplié par le nombre administré.  

Pour l'étude des médicaments et dispositifs de la liste en SUS, l'ATIH suggère d'appliquer les critères d'exclusion suivants : 
(https://www.scansante.fr/applications/synthese-dmi-mo-sus)  
- Nombre UCD = 0 et prix d’achat > 0
- Nombre UCD = 0 et prix d’achat = 0
- Nombre UCD < 0 ou prix d’achat < 0
- Nombre UCD >=100
- Codes UCD erronés (à vide ou indéterminés)
- Molécules administrées hors période d’appartenance à la liste en sus
  

#### En PSY



L'information sur la dépense que représente la pharmacie de la liste en sus et les médicaments ATU est contenue dans

-    `MED` : médicaments en sus
-    `MEDATU` : médicaments soumis à autorisation temporaire d’utilisation


## Les établissements privés dans le DCIR et le DCIRS

Les séjours en établissements privés sont facturés directement à l’Assurance Maladie ce qui garantit l’**exhaustivité des remontées d’information sur ce champ**.
Cela concerne toutes les prestations en établissement privé, que l'établissement soit de nature non lucratif ou lucratif.
Le PMSI contient des tables de facturation des séjours privés mais il n’est pas certain qu’elles correspondent aux montants réellement facturés et 
remboursés par l’assurance maladie.
Il est donc **recommandé d'analyser les dépenses des établissements privés dans le DCIR ou le DCIRS plutôt que dans le PMSI**. 

### Les filtres à poser avant d'analyser les établissements privés

Avant d'analyser ce champ dans le DCIR ou le DCIRS, les filtres à poser sont les suivants : 

-	`DPN_QLF NE 71` : on exclut les remontées d'information "pour information (soins externes)", afin d'écart les ACE à l'hôpital public.

-	`ASU_NAT` = 10,30,40 : Maladie, maternité, AT/MP, décès et invalidité sont les 5 risques pris en charge par l’assurance maladie.
Si les caisses ont effectué des remboursements pour d’autres risques, ceux-ci ne sont pas censés être pris en charge. Par exemple la nature
d'assurance 22 qui correspond à des soins aux invalides de guerre (CNMSS).
On sélectionne les prestations qui correspondent aux risques maladie (10), maternité (30) et AT/MP (40) et on exclut décès et invalidité. 

-	`ETE_TYP_COD` NOT IN (1,2,3) : ce filtre nous permet de se concentrer sur les prestations qui ont lieu dans un établissement privé.
Se référer au tableau de nomenclature `ETE_TYE_V` pour obtenir la classification des établissements.
Se référer à la nomenclature pour savoir quel filtre exact appliquer sur `ETE_TYP_COD` en fonction de la catégorie de prestations ciblée.

-	 `ETE_CAT_COD` NOT IN (125, 130, 132, 133, 134, 142, 223, 224, 228, 230, 268, 269, 289, 297, 347, 413, 414, 433, 438, 439,700). 
On filtre sur la catégorie de l’établissement exécutant afin d'exclure les centres de santé.

On exclut les centres de santé car ceux-ci sont catégorisés en soins de ville comme dans les Comptes de la Santé
(https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/panoramas-de-la-drees/article/les-depenses-de-sante-en-2018-resultats-des-comptes-de-la-sante-edition-2019)
ainsi que dans la statistique mensuelle de la CNAM.

- `MFT_COD` NOT IN (4,6). On filtre sur le motif du code de fixation des tarifs. 
On exclut ainsi ETABLISSEMENTS PRIVES A BUT NON LUCRATIF PARTICIPANT AU SERVICE PUBLIC HOSPITALIER (PSPH)
et ETABLISSEMENT DE SANTE ET MEDICAUX SOCIAUX NON CONVENTIONNE AVEC L AIDE SOCIALE ET NON CONVENTIONNE AVEC L ASSURANCE MALADIE (TARIF D AUTORITE). Voir
nomenclature pour plus de précisions sur le filtre sur le motif du code de fixation des tarifs à appliquer. 



### Ventiler les établissements privés selon la nature juridique

Comme précisé ci-dessus, on peut construire cette ventilation avec la variable `ETE_TYP_COD`.

|  ETB_TYP_COD |ETB_PPU_SEC   | ETB_TYP_LIB  |
|---|---|---|
| 99 | 9 | VALEUR INCONNUE  |
| 0 | 2 | AMBULATOIRE SECTEUR LIBERAL  |
| 1 | 1 | PUBLIC PROPREMENT DIT  |
| 2 | 1 | PSPH PRIVE A BUT NON LUCRATIF PARTICIPANT AU SERVICE PUBLIC HOSPITALIER  |
| 3 | 1 | EX PJP AYANT OPTE POUR LE BG  |
| 4 | 2 | PRIVE LUCRATIF CONVENTIONNE  |
| 5 | 2 | PRIVE NON LUCRATIF CONVENTIONNE  |
| 6 | 2 | PRIVE NON LUCRATIF CONVENTIONNE  |
| 7 | 2 | PRIVE NON LUCRATIF NON CONVENTIONNE  |
| 8 | 2 | OQN NON LUCRATIF CONVENTIONNE  |
| 9 | 2 | OQN LUCRATIF CONVENTIONNE  |

L’Objectif quantifié national (OQN) résulte d'un accord du 4 avril 1991 entre l'État, les organismes d'assurance maladie et l'UHP. 
Cet accord a été retranscrit dans le Code de la Sécurité sociale (art. L. 162-22-2, R. 162-41 et D. 162-4). 
L’OQN concerne les activités de psychiatrie et de soins de suite ou de réadaptation exercées par les établissements de santé privés.  

Conventionné : To be continued


### Ventiler les établissements privés selon la discipline (PSY, SSR, MCO et HAD)

Dans le DCIR et le DCIRS,  il y a les équivalents des discipline de prestation des différents PMSI pour les établissements privés. 
Pour ce faire, il faut regarder la variable `DDP_COD` de `NS_PRS_F` pour le DCIRS et `DDP_COD` de la table `ER_ETE_F` pour le DCIR.
Cette variable de code de la discipline de prestations a pour table de nomenclature `IR_DDP_V`, et dans cette nomenclature on trouve
la variable `DDP_GDE_COD` qui nous renseigne sur la discipline de prestations.

| DDP_GDE_COD | discipline de prestation |
| ----------- | --------------------------|
| 4 | SSR |
| 6 | PSY |
| 0,1,2,3 | MCO et HAD|
| 0 | sans objet |
| 1 | médecine |
| 2 | chirurgie | 
| 3 | obstétrique |
 

La HAD se repère avec le Groupe Homogène de Tarif, on peut la repérer à l'aide 
de la nomenclature fournie (cf. paragraphe suivant) construite sur la statistique mensuelle de la CNAM sur les établissements sanitaires privés.

Il n'existe pas d'activité externe en établissement privé lucratif, elle est considérée comme du soin de ville libéral. 
Afin de distinguer le lieu d'exécution de la prestation, on peut utiliser la variable `lieu_exec` présentée ci-dessus.


### Catégoriser les prestations des établissements privés

Nous proposons une nomenclature avec une entrée par `PRS_NAT_REF` construite à 
partir de la statistique mensuelle sur les établissements privés de la CNAM.
Nous avons repris la catégorisation en postes. Ainsi à une `PRS_NAT_REF` correspond 
le libellé de la CNAM dans la nomenclature ainsi que les filtres associés (`DPN_QLF`,
`RGO_ASU_NAT`, `CPL_FJH_TYP`, etc.).

Rajouter table avec liste des catégories 


### Etudier le secteur médico-social et handicap

Une partie des séjours du secteur médico-social et handicap est facturée directement à l’Assurance Maladie. 
Ces séjours peuvent être retrouvés dans le DCIR via le type d’établissement. Il faut effectuer une jointure 
avec la table établissement `ER_ETE_F` et utiliser la variable `ETE_CAT_COD` (dans le DCIRS, la même variable
dans la table de prestations centrale comme mentionné ci-dessus). Une jointure avec `IR_CET_V` (du répertoire ORAVAL)
permet d’avoir les libellés des différents établissements.

**L’information sur ces séjours n’est pas exhaustive et doit être traitée avec précaution**. 


Auteurs: Kristel Jacquier, Raphaële Adjerad

*Sources* 
-	« Maquette Stat mens Etablissements prives – version du 28 mai 2010 Regles de gestion du Regime General pour constituer la statistique mensuelle pour le suivi des depenses des etablissements prives » disponible sur le portail SNDS (Dossiers publics>SNIIRAM>_Documentation SNIIRAM- SNDS> Documentation>maquettes Stat Mens>ancienne maquette stat mens)
-	Supports de Formation DCIRS et PMSI
-	Code de Jérôme Brocca (ARS)
-	Code de Mathis Haradji (DSS)


