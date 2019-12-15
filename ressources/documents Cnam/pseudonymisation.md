# Consignes pour la Pseudonymisation des Identifiants Bénéficiaires
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Préambule

Pour commencer, rappelons que les consignes suivantes s'adressent à toute personne ayant accès aux données individuelles bénéficiaires du SNDS, produits SAS **(hors extractions DEMEX)**.

Posons également la définition suivante : 

*  Pseudonyme : Terme désignant tout identifiant de bénéficiaire, ayant subi une [pseudonymisation](../../glossaire/pseudonymisation.md), afin d’empêcher la possibilité d'identification directe de l'individu auquel il se rattache (ex : BEN_NIR_PSA, BEN NIR_ANO, BEN_NIR_IDT, …).


## Contexte

Le référentiel de sécurité du SNDS définit des **règles strictes** concernant la gestion des pseudonymes du bénéficiaire. 
**Ainsi, un changement de pseudonymisation des identifiants bénéficiaires aura lieu environ tous les deux ans**. 
Le dernier en date a eu lieu en août 2019.

Afin de faciliter les futurs traitements et de faire en sorte que les tables puissent être régulièrement migrées sans problèmes dans les espaces de travail, **des consignes de base sont à suivre impérativement** dès maintenant. 

**Ces consignes sont valables quelque soit le type de fichier (SAS, Citrix, Excel, R …) et pour tout outil d’exploitation : SAS, R, …**

## Consignes à respecter

1.	Ne pas renommer les identifiants bénéficiaires : conserver dans vos tables le nom initial des variables des pseudonymes tels que trouvés dans les bases du SNDS.

2.	La concaténation des variables BEN_NIR_PSA||BEN_RNG_GEM doit être renommée en BEN_NIR_TOT. 

3.	Eviter de créer des champs composites (concaténation de plusieurs variables).

4.	Respecter les règles de nommage SAS :

-	Ne pas mettre de caractères spéciaux et espaces dans vos noms de répertoires, tables ou variables car le traitement de pseudonymisation ne les détecte pas. (NB : le underscore « _ » est toléré).
-	Ne pas commencer un nom de variable par un chiffre.

5.	Supprimer régulièrement les tables que vous n’utilisez pas. Cela facilitera le processus futur et réduira la taille de vos dossiers.
	

## Contact

Vous pouvez à tout moment adresser vos remarques et vos questions sur la pseudonymisation à la boite mail suivante : ddu_snds.cnam@assurance-maladie.fr

## Références

::: tip 
Télécharger la fiche au format Word [consignes sur la pseudonymisation des identifiants bénéficiaires](../../files/Cnam/2019-10_Cnam_Consigne_pseudonymisation_identifiants_MPL-2.0.docx) [Cnam, MPL-2.0]
:::

