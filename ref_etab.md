# Le numéro FINESS dans le SNDS

Tous les établissements sanitaires et sociaux sont enregistrés dans le répertoire Finess (fichier national des établissements sanitaires et sociaux).

## Construction du numéro Finess

Un numéro Finess est composé de 9 caractères.  
Les 2 premiers caractères correspondent au département d'implantation de l'établissement.
Pour les DOM-TOM, les 2 premiers caractères sont 97 et le 4e caractère les distingue : 1-Guadeloupe, 2-Martinique, 3-Guyane, 4-Réunion, 5-St Pierre et Miquelon.  
Les établissements de Mayotte ont un nunéro Finess qui commence par 98.  

## Définitions et concepts 

### Les entités juridiques : Finess juridique
	
Une entité juridique correspond à la notion de personne morale. Une entité juridique détient des droits (autorisations, agréments, conventions…) 
lui permettant d'exercer ses activités dans des établissements. A chaque entité juridique est associé un statut juridique classifié en grands agrégats 
qui sont :

* Organismes et établissements publics
    * Etat et collectivités territoriales
    * Etablissement public
* Organismes privés
    * Organisme privé à but non lucratif
    * Organisme privé à caractère commercial
* Personne morale de droit étranger

### Les établissements : Finess établissement (ou Finess géographique)

Un établissement correspond à une implantation géographique. Il est obligatoirement relié à une entité juridique. 
Chaque établissement est rattaché à une catégorie d'établissement (centre de santé, centre hospitalier, etc) 
qui caractérise le cadre réglementaire dans lequel s'exerce l'activité de l'établissement.

Les catégories d'établissements sont classifiées en grands agrégats qui sont :
* Etablissements relevant de la loi hospitalière.
* Autres établissements de soins et de prévention.
* Autres établissements à caractère sanitaire.
* Etablissements et services sociaux d'accueil, hébergement, assistance, réadaptation.
* Etablissements et services sociaux d'aide à la famille.
* Etablissements de formation des personnels sanitaires et sociaux.

A chaque établissement sont associées les activités exercées. 
Particularités :
* Plusieurs activités dépendant de budgets distincts au sein d'un même établissement, font l'objet d'immatriculations : 
autant d'établissements dans le même lieu que de budgets distincts.
* Une entité juridique gérant sur un même lieu un « Centre Hébergement et Réinsertion sociale » et une « Maisons-Relais » aura, dans FINESS, 
deux établissements à la même adresse correspondant à chacune des deux catégories d'établissements.

## En pratique, dans le SNDS

### Le numéro FINESS dans le PMSI

Dans les tables du PMSI, on retrouve systématiquement 2 types de numéro Finess :
* le FINESS PMSI (utilisé par l'établissement de santé pour la transmission de ses données) : il s'agit du Finess juridique pour les établissements 
publics (type CH, CHU) et du Finess géographique pour les établissements privés (lucratifs ou non lucratifs). Cependant pour les établissements 
psychiatriques privés (type association, fondation) qui peuvent avoir un grand nombre de Finess géographiques, des transmissions cumulées sous un seul 
Finess PMSI sont pour l'instant tolérées ;
* le FINESS établissement (ou Finess géographique) : depuis 2013, il est contrôlé à partir d'ARHGOS pour que seuls les Finess géographiques détenant 
les autorisations appropriées soient acceptés (exemple : un Finess géographique avec uniquement des autorisations de MCO ne peut pas être retrouvé dans 
les tables SSR).  

### Le numéro FINESS dans le DCIR/S

::: tip Attention
Le champ du DCIR ne couvre qu'une infime partie de l'activité des établissements publics. 
Le DCIR contient en revanche l'ensemble des prestations réalisées en établissement privé.
:::

Dans la table centrale du DCIR, la table des prestations (`ER_PRS_F`), lorsqu’une prescription est associée à un établissement, 
la variable `ETB_PRE_FIN` est non vide. La variable contient un code à 8 chiffres, il s'agit du FINESS de l'établissement prescripteur, sans clef.   
Dans le cas des prestations executées par un établissement, il faut joindre `ER_PRS_F` avec la table affinée établissement `ER_ETE_F` sur les 9 clés de jointure afin de récupérer le numéro FINESS sans clé de l'établissement exécutant (`ETB_EXE_FIN`).  

Dans le DCIRS, les variables `ETB_PRE_FIN` et `ETB_EXE_FIN` sont disponibles dans la table prestation `NS_PRS_F`
et correspondent respectivement aux FINESS de l'établissement prescripteur et exécutant. 
Lorsqu'une prestation est prescrite en ville la variable ne sera pas vide comme dans le cas du DCIR mais contiendra 8 zéros.

Il est possible de recourir à un référentiel d’établissement afin d'obtenir davantage de détail sur les établissements.
Pour cela on utilise le numéro FINESS à 8 chiffres comme clé de jointure.


## Les référentiels d'établissements


### La base établissements référentiel (BERF) du SNDS

Le SNDS met à disposition un référentiel d’établissement, la table `BE_IDE_R` de la bibliothèque ORAVUE

Elle synthétise deux sources d'information: 
- Les informations issues des bases établissements des CARSAT/CRAM portant sur les établissements relevant de la loi hospitalière (hôpitaux, cliniques…) 
 et les établissements relevant de la loi sur les institutions sociales et médico-sociales pour lesquels l’Assurance Maladie intervient financièrement 
- Les informations issues des fichiers des CPAM portant sur les centres de santé, les centres dentaires, les centres de PMI…

La variable ‘origine administrative’ (IDE_NAT_ORI) permet de distinguer l’origine des informations : CARSAT/CRAM ou CPAM. 


Elle contient une ligne pour chaque FINESS juridique et une ligne pour chaque FINESS géographique.  
Ainsi un Finess juridique avec 4 sites sera représenté sur 5 lignes : 1 pour le Finess juridique et 4 pour chacun des Finess géographiques.  

Cette table contient notamment les variables suivantes :  

| Nom variable | Libellé variable | Table de valeurs |
|--------------|------------------|------------------|
| ide_psh_cat | Catégorie d’établissement (code à 3 chiffres) | IR_CET_V |
| ide_psh_stj | Statut Juridique de l'entité juridique | IR_SJE_V |
| ide_eta_nom | Raison sociale de l’établissement |
| ide_eta_nu8 | Finess sans clef (8 caractères) |
| ide_eta_num | Finess (9 caractères) |
| ide_ges_num | Finess (9 caractères) |
| ide_rsd_lib | Libellé de la commune |
| ide_bdi_cod | Code postal |


Les variables `IDE_ETA_NUM` et `IDE_ETA_NU8` correspondent au même numéro FINESS, avec ou sans clef. 
Ces variables correspondent soit à un Finess juridique,  
soit à un Finess géographique ; elles sont toujours renseignées dans `BE_IDE_R`. 
La variable `IDE_ETA_TYP` permet de distinguer entre les FINESS juridique (`IDE_ETA_TYP` = 1) et FINESS géographique (`IDE_ETA_TYP` = 2).  

La jointure avec la table `ER_PRS_F` se fait sur `ETB_PRE_FIN` = `IDE_ETA_NU8`.

La BERF a été mise à jour en mai 2020. Cette nouvelle version est alimentée à partir d’ETANAT (référentiel établissement utilisé pour la tarification). Seuls les établissements avec un FINESS géographique sont mis à jour (`IDE_ETA_TYP` = 2 ) tandis que les établissements avec FINESS juridique sont ceux qui étaient déjà présents dans les précédentes données en restitution (2014).
Se référer au communiqué du 18 juin 2020 pour plus d'information.

### La table Atlasanté DATASANTE_T_FINESS 

Atlasanté produit un référentiel des structures Finess qui fait correspondre à chaque structure Finess, juridique ou géographique, 
qui existe ou qui a existé depuis 2004, ses principales caractéristiques : statut juridique, catégorie, adresse, ...
Mise à jour bimestrielle à partir des extractions Finess publiées sur data.gouv.fr
[Pour plus d'information](https://static.data.gouv.fr/resources/referentiel-finess-t-finess/20200207-125732/t-finess-doc.pdf).

Cette table est disponible sur le portail dans le répertoire `RFCOMMUN.DATASANTE_T_FINESS`.
Elle dispose d'une variable `finess8` permettant de faire le lien directement avec les tables
du SNDS. 

### Le référentiel FINESSGEO de l'ATIH

Dans le répertoire nomenclatures générales de la plateforme ATIH on trouve le référentiel `finessgeo` qui contient les variables suivantes:
| Nom variable | Libellé variable | Modalité|
|--------------|------------------|------------------|
| finessgeo | Finess géographique |  |
| finess_pmsi | Finess PMSI du finess géographique |  |
| finessj | Finess juridique du finess géographique |
| niveau_pmsi | Niveau du Finess PMSI |'J' si le finess PMSI correspond au finess juridique de l'établissement; 'G' si le finess PMSI correspond au finess géographique de l'établissement|
| categ_geo| code de la catégorie du finess géographique |
| mco | 1 si au moins un jour d'autorisation MCO dans l'année; 0 sinon |
| ssr | 1 si au moins un jour d'autorisation SSR dans l'année; 0 sinon |
| psy | 1 si au moins un jour d'autorisation PSY dans l'année; 0 sinon |
| had | 1 si au moins un jour d'autorisation HAD dans l'année; 0 sinon |



## Sources
Manuel utilisateur de l'univers BERF  
Pour aller plus loin: Code de la santé publique. livre 1er [articles L6111-1 à L6163-10](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031929304/)
