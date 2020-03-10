# Dispositifs médicaux implantables en sus du GHS 
<!-- SPDX-License-Identifier: MPL-2.0 -->

Dans une première partie, nous présentons les dispositifs médicaux implantables (DMI) facturés en sus des [GHS](../glossaire/GHS.md) en MCO.  
Dans une seconde partie, nous expliquons comment extraire les dépenses associées à ces dispositifs à partir du PMSI MCO.  
Pour chaque partie, nous traiterons le cas des hôpitaux publics, puis le cas des hôpitaux privés.

## Présentation générale, réglementaire

D'après le [code de la santé publique (article L.5211-1)](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006072665&idArticle=LEGIARTI000006690281), on entend par dispositif médical implantable : 
"tout instrument, appareil, équipement, matière, produit, [...] destiné par le fabricant à être 
utilisé chez l’homme à des fins médicales [...] et conçu pour être implanté en totalité ou en 
partie dans le corps humain ou placé dans un orifice naturel". 

Dans le cadre de la [T2A](../glossaire/T2A.md), les hôpitaux reçoivent 
un paiement forfaitaire global de l’assurance maladie pour chaque séjour d’un patient.  
En principe, le paiement comprend l'intégralite des coûts associés à ce séjour.   
Dans certains cas, la prise en charge du patient nécessite la prescription de médicaments
ou dispositifs médicaux implantables innovants et coûteux qui sont, sous certaines conditions, intégralement remboursés par 
l'assurance maladie obligatoire en sus du GHS (*cf.* [fiche sur les médicaments de la liste en sus](../fiches/medicaments_de_la_liste_en_sus.md)). 

La liste initiale qui définit les dispositifs médicaux implantables pris en charge en sus des prestations d’hospitalisation en MCO 
a été publiée au [journal officiel le 10 mai 2005](https://www.legifrance.gouv.fr/eli/arrete/2005/3/2/SANS0520786A/jo), 
puis ponctuellement modifiée (inscriptions, radiations, modifications de tarifs ou de libellés, etc.).  

La liste (actualisée) des produits et prestations pris en charge en sus des prestations d’hospitalisation en MCO est téléchargeable sur le site de l'[ATIH](https://www.atih.sante.fr/dispositifs-medicaux-pris-en-charge-en-sus).  

L'ATIH restitue également des statistiques sur la consommation annuelle des dispositifs médicaux implantables en sus au niveau national.  
Ces synthèses, déclinées par année et par DM, sont disponibles au lien suivant : [https://www.scansante.fr/applications/synthese-dmi-mo-sus](https://www.scansante.fr/applications/synthese-dmi-mo-sus).  

## Identification dans le PMSI MCO des assurés implantés par un DMI

On peut retrouver dans le PMSI les DMI implantés depuis 2006 dans les hopitaux privés et depuis 2008 dans les hopitaux publics.
Ceci peut permettre d'identifier une population d'intérêt : le DMI constitue alors un critère de sélection de cette population d'étude.
Par exemple, on cherche les sujets ayant reçu la pose d'un stent en 2016 : on recherchera les assurés ayant eu un séjour en 2016 avec facturation d'un DMI du chapitre de la LPP : ENDOPROTHESES CORONAIRES DITES "STE
et la facturation dans le même séjour d'un acte correspondant à la pose d'un stent 
(par exemple acte de code CCAM 'DDAF006 : Dilatation intraluminale d'un vaisseau coronaire avec pose d'endoprothèse, par voie artérielle transcutanée')

En pratique, les informations sur les dispositifs médicaux implantables (DMI) facturés en sus du [GHS](../glossaire/GHS.md) 
lors de séjours en MCO à l'hôpital figurent dans des tables dédiées, différentes selon qu'ils ont été implantés et facturés dans un hopital public ou privé.

### Dans les hopitaux publics

Pour les hôpitaux publics, on utilisera la table `ORAVUE.T_MCOaaDMIP`.
La variable à utiliser pour identifier le DMI implanté lors du séjour est la variable `LPP_COD`.

::: warning Format
Attention au format de cette variable au moment de la requête (blanc devant)
::: 


### Dans les hopitaux privés

Pour les hôpitaux privés, on utilisera la table `ORAVUE.T_MCO&aa.FP`.
Les variables à utiliser diffèrent selon les années : 
Pour les années 2006 et 2007, les variables à utiliser sont les variables lpp_cod1 et lpp_cod2
A partir de l'année 2008, on utilisera la variable `LPP_COD`

::: warning Format
Attention au format de cette variable au moment de la requête (blanc avant)
::: 

## Dépenses associées aux DMI dans le PMSI MCO 

Une autre utilisation des informations de facturation des DMI dans le PMSI peut être de quantifier les dépenses associées à ces dispositifs.

Pour l'étude des dépenses associées à ces dispositifs, l'[ATIH](https://www.scansante.fr/applications/synthese-dmi-mo-sus) suggère d'appliquer les critères d'exclusion suivants :  
- Nombre DMI = 0 et prix d’achat ≥ 0
- Nombre DMI < 0 ou prix d’achat < 0
- Codes DMI erronés (à vide ou indéterminés)
- DMI posés hors période d’appartenance à la liste en sus 

On peut ensuite déduire le montant des dépenses à partir du prix tarifé multiplié par le nombre de dispositifs posés ; 
il est également possible d'utiliser la variable de montant total restitué (cf. variables ci-dessous).  

Les tarifications des DMI peuvent différer entre hôpitaux privés et hopitaux publics ; 
pour valoriser l'utilisation des DMI, on utilisera les prix tarifés indiqués dans les tables `ORAVUE.T_MCOaaDMIP` pour les hôpitaux publics et tables `ORAVUE.T_MCO&aa.FP` pour les hôpitaux privés.

### Pour les hôpitaux publics : 
Les variables disponibles sont :  
`NBR_POS`	: Nombre posé  
`NBR_POS_PI` : Prix d'achat multiplié par le nombre posé  

### Pour les hopitaux privés : 
Les variables disponibles sont :   
`FAC_MNT` : Montant total facturé  
`LPP_PRI_UNI` :	Prix d'achat unitaire
`LPP_PU_DEV` :	Tarif référence LPP/ Prix Unitaire sur devis
`LPP_QUA` :	Quantité

:::Tip Appartenance d'un DMI à la liste en Sus
Pour vérifier l'appartenance à la liste en sus : 
- on récupère le mois et l’année de pose du DMI (ou, par défaut, le mois et l’année de sortie du résumé de sortie anonyme [RSA](../glossaire/RSA.md))
- à l'aide de la liste (actualisée) des produits et prestations pris en charge en sus, 
  on vérifie que le DMI appartient bien à la liste en sus durant cette période
- pour les données de l’année N, on ne conserve que les dispositifs dont l’année de pose est égale à N, N-1 ou N-2
:::

## Références

::: tip Crédits
Cette fiche a été rédigée par Noémie Courtejoie (DREES).
La partie hopitaux privés a été complétée par Sandrine Colas (IQVIA).
:::