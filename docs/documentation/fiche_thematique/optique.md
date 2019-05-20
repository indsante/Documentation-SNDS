# L'optique médicale


Le programme est conçu pour être utilisé sur le DCIR. Les tables du DCIR se trouvent dans la bibliothèque ORAVUE.

Il s'agit d'extraire toutes les dépenses d'optique médicale de l'année 2015. Pour cela nous utilisons le code LPP. Ces codes sont donnés par la variable TIP_PRS_IDE dans la table de prestation affinée des dispositifs médicaux : ER_TIP_F.

Le libellé des codes LPP donne les caractéristiques de verres.

- Adultes ou enfants
- Verre blanc ou teinté
- Unifocal ou multifocal
- Sphériques ou sphéro-cylindriques ainsi que l'intensité de cette correction

Nous ajoutons un filtre sur le code prestations (PRS_NAT_REF) afin de bien sélectionner seulement les dépenses  d'optique.

Dans le DCIR, les données sont partitionnées via la date de remontée de flux (FLX_DIS_DTD). Pour optimiser le temps de traitement, il est nécessaire de créer un filtre sur cette variable lorsqu'on effectue une requête. Il est fortement recommandé d'extraire les données mensuellement et de les fusionner ensuite pour créer une table annuelle ou pluriannuelle. Pour cela, nous proposons le macro-programme Tables_MENSUELLES.

Le macro-programme Tables_MENSUELLES a trois arguments : un indice (donnant le nom des différentes tables créées), la date de remontée de flux et l'année en date de soins.

Ici on chercher à extraire tous les dépenses d'optique de l'année 2015. L'indice correspond à la date de remontée de flux, le macro-programme crée 17 tables qui correspondent à 11 mois de remontée de flux en 2015 et 6 mois de remontée de flux en 2016.

## Jointure entre la table prestation (ER\_PRS\_F) et la table affinée dispositifs médicaux (ER\_TIP\_F)

On effectue la jointure (INNER JOIN ON) sur les 9 clé de jointures du DCIR. **Selon ce critère** , on trouve parfois 1 ligne sur la table des prestations (ER_PRS_F=t1) et n lignes sur la table affinée dispositifs médicaux (ER_TIP_F=t2). Dans ce cas-là, **les valeurs de la seule ligne disponible sur t1 sont dupliquées pour les n lignes de t2. Ainsi, la variable montant(PRS_PAI_MNT) est doublonnée**. Ci-dessous un exemple à partir du DCIRS (En violet, les données de la table prestation, en orange les données de la table affinées) :


Pour un même acte (même bénéficiaire, même professionnel de santé et une même date de soins) et une même prestation (3533 ici), on a un code LPP (TIP_PRS_IDE) différent avec une base de remboursement différente (TIP_ACT_PRU) ce qui donne lieu à une ligne supplémentaire sur la table affinée. La variable de numéro séquentiel(TIP_SEQ_NUM) indique le nombre de lignes dans la table affinée pour un acte (cette variable n'est disponible que dans le DCIRS). Les informations de la ligne unique de la table prestation ont été dupliquées lors de la jointure, notamment le montant total (prs_pai_mnt) de 400,8€.

Pour éviter de surestimer le montant de l'acte, on peut diviser le montant agrégé par le nombre de lignes correspondantes dans la table affinée.