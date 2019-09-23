# Prestations paramédicales
<!-- SPDX-License-Identifier: MPL-2.0 -->

De façon générale, les professionnels qui exercent dans ce milieu paramédical ne peuvent agir que si un médecin fait préalablement une prescription, 
leur permettant d’exercer des soins particuliers et d’accompagner les patients. Ils ont aussi accès, selon leur formation du paramédical,
aux différents appareillages permettant d’accompagner les patients qui ont besoin de rééducation.\
Cependant, ils ne peuvent délivrer d’ordonnance (sauf cas particuliers), car ils ne sont pas habilités à le faire comme les médecins diplômés d’État. 

## Généralités

Les paramédicaux exercent principalement leurs pratiques dans des établissements de soins (privés ou hospitaliers) ou en ayant une activité libérale.

Le secteur paramédical regroupe un vaste champ d'intervenants paramédicaux.
Par commodité, on peut les répartir en trois catégories :
* Professions paramédicales dites de soins :  Aide-soignant, Auxiliaire de puériculture, Infirmier, Infirmier de bloc opératoire, Infirmier anesthésiste, Infirmier en puériculture,Infirmiers psychiatrie
* Professions paramédicales dites de rééducation et de réadaptation: Audioprothésiste, Diététicien, Ergothérapeute,Masseur-Kinésithérapeute, Opticien-lunétier, Orthophoniste, Orthoptiste, Pédicure-Podologue, Psychomotricien,Prothésistes, Orthésiste
* Professions paramédicales dites médico-techniques : Ambulancier - Ambulancier indépendant, Manipulateur en électroradiologie médicale, Techniciens de laboratoires, Préparateur en pharmacie

## Identification des prestations paramédicales dans le SNIIRAM

>*Forum EGB* – actes paramédicaux – 26 octobre 2010 – **Laurence DE ROQUEFEUIL (CNAMTS)** :  
>Les actes des professionnels de santé paramédicaux se trouvent, comme ceux des médecins, dans la table des prestations *eb_prs_f*.  
>Vous pouvez connaître le numéro de la spécialité du prescripteur *psp_spe_cod* et celui de la spécialité de l'exécutant *pse_spe_cod*.  
>Pour connaître le libellé de la spécialité du prescripteur ou de l'exécutant, vous pouvez utiliser la table de valeurs du SNIIR-AM *spdval.ir_spe_v* pour les 
spécialités médicales et l'orthodontie, et la table *spdval.ir_act_v* pour les spécialités paramédicales
(chirurgiens-dentistes, infirmiers, sage-femmes, orthopédistes, orthoptistes ...).

En résumé, pour les prestations des professionnels du paramédical, il faut croiser 2 informations : la nature de la prestation et la spécialité du praticien. 

### Nature de la prestation
La nature de la prestation est renseignée dans la variable **Prs_nat_ref** de la table PRS (prestation).\
Les modalités de cette variable sont référencées dans la Table de valeur **IR_NAT_V**.

### Spécialité du praticien 
La spécialité du praticient (exécutant PSE ou prescripteurs PSP) est renseignée dans 2 variables de la table PRS qui sont complémentaires :
* __psE ou psP_spe_cod__, qui correspond à la spécialité médicale des praticiens médecins et orthodontistes.
Les modalités de cette variable sont référencées dans la table de valeur **IR_SPE_V**.
* __psE ou psP_act_nat__, qui correspond à la nature d’activité des autres praticiens, c'est à dire les praticiens paramédicaux. 
Les modalités de cette variable sont référencées dans la table de valeur **IR_ACT_V**.
* Dans l'EGB cependant, une seule variable regroupe les 2 variables ci-dessus : **psE ou psP_act_spe**.

## Exemple : prestations infirmiers

Les actes infirmiers peuvent ainsi être identifiés dans la table prestation par :  
`prs_nat_ref in (3111, 3112, 3115, 3116, 3117, 3118, 3119) and pse_act_spe=24`

**Tableau 1 : Extrait de la table de référence IR_NAT_V pour les prestations infirmiers**

| PRS_NAT | PRS_NAT_LIB                                                                          |
|---------|--------------------------------------------------------------------------------------|
| 3111    | ACTES EN AMI                                                                         |
| 3112    | ACTES INFIRMIERS DE SOINS (AMI3-AMI13, AMI16)                                        |
| 3115    | DEMARCHE INFIRMIER                                                                   |
| 3116    | MAJORATION POUR ACTE UNIQUE                                                          |
| 3117    | MAJORATION DE COORDINATION ET D'ENVIRONNEMENT DE SOIN INFIRMIER                      |
| 3118    | REMUNERATION VACCINATION GRIPPE A PAR INFIRMIERS LIBERAUX                            |
| 3119    | REMUNERATION VACCINATION GRIPPE A PAR INFIRMIER RETRAITE OU SALARIE HORS OBLIGATIONS | 

## Références
::: tip Crédits
Rédigé par l'équipe [**PELyon**](http://www.pelyon.fr/)
:::




