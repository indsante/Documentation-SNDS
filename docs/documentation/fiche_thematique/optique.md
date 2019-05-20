# L'optique médicale

Dans le SNDS, les dépenses en optique sont regroupées sous les codes prestations ci-dessous (variable PRS_NAT_REF):
3523, 3524, 3525, 3526, 3527, 3528, 3529, 3530, 3531, 3532, 3533, 3534, 3535, 3536, 3537, 3538, 3539, 3553, 3554, 3555, 3556, 3557, 3581, 3582, 3583, 5101, 5102, 5103, 5104, 5105, 5106, 5107

Le détail de ces prestations est donné par le code LPP. 
Le libellé des codes LPP donne les caractéristiques de verres.
- Adultes ou enfants
- Verre blanc ou teinté
- Unifocal ou multifocal
- Sphériques ou sphéro-cylindriques ainsi que l'intensité de cette correction

On trouve les codes LPP dans la variable TIP_PRS_IDE dans la table de prestation affinée des dispositifs médicaux : ER_TIP_F. 
Il faut donc effectuer une jointure entre la table prestation ER_PRS_F et ER_TIP_F pour avoir le détail par codes LPP

## Jointure entre la table prestation (ER\_PRS\_F) et la table affinée dispositifs médicaux (ER\_TIP\_F)

On effectue la jointure (INNER JOIN ON) sur les 9 clé de jointures du DCIR. **Selon ce critère** , on trouve parfois 1 ligne sur la table des prestations (ER_PRS_F=t1) et n lignes sur la table affinée dispositifs médicaux (ER_TIP_F=t2). Dans ce cas-là, **les valeurs de la seule ligne disponible sur t1 sont dupliquées pour les n lignes de t2. Ainsi, la variable montant(PRS_PAI_MNT) est doublonnée**. Ci-dessous un exemple à partir du DCIRS (En violet, les données de la table prestation, en orange les données de la table affinées) :


Pour un même acte (même bénéficiaire, même professionnel de santé et une même date de soins) et une même prestation (3533 ici), on a un code LPP (TIP_PRS_IDE) différent avec une base de remboursement différente (TIP_ACT_PRU) ce qui donne lieu à une ligne supplémentaire sur la table affinée. La variable de numéro séquentiel(TIP_SEQ_NUM) indique le nombre de lignes dans la table affinée pour un acte (cette variable n'est disponible que dans le DCIRS). Les informations de la ligne unique de la table prestation ont été dupliquées lors de la jointure, notamment le montant total (prs_pai_mnt) de 400,8€.

Pour éviter de surestimer le montant de l'acte, on peut diviser le montant agrégé par le nombre de lignes correspondantes dans la table affinée. 
Ou on peut choisir de poser un filtre sur la variable tip_ord_num. En effet, tip_ord_num donne le nombre de ligne de la table affinée correspondant à une ligne dans la table prestation. 
Avec le filtre tip_ord_num<2 la jointure ne dédoublonne pas les informations de la table prestation car on s'assure d'avoir le même nombre de lignes sur la table prestation et la table affinée. 
Cependant, on perd quelques informations que la table affinée aurait pu nous donner.

Une dernière méthode est donnée par le programme mis à disposition par Mathis Haradji (DSS):
https://gitlab.com/DREES_code/public/gu-snds/programmes-sas-gu-snds



