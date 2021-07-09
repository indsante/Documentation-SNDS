---
tags:
    - Covid
    - Prestations
---

# Prestations liées au Covid-19 dans le SNDS
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

Suite à la crise COVID-19, de nombreuses actions ont dû être menées dans les  bases du SNDS afin de pouvoir mettre en œuvre les actions préconisées par le gouvernement. En voici les étapes, récapitulées pour trois catégories de prestations, présentées en nomenclature codée B2 (lettre clé) et PS5 (sur 4 chiffres, présente dans le SNDS).

## Les téléconsultations
Le gouvernement a préconisé la mise en avant de la téléconsultation au dépend de la consultation standard, afin de limiter tout risque de transmission de la maladie.

Comment retrouver ces téléconsultations dans les bases ?

Dans la statistique mensuelle, le poste « téléconsultations » contient les prestations de téléconsultations mais aussi celles de télé-expertises et de télésurveillances suivantes : 

| Code PS5 (PRS_NAT) | code B2 (PRS_NAT_CB2 | Libellé (PRS_NAT_LIB)                             | Commentaires                                                                                                         |
|--------------------|----------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| 1191               | TC                   | TELECONSULTATION TOUTES SPECIALITES               | Autorisées à avoir un coefficient 2 pour des séances de préparation à la naissance et 2,5 pour l’entretien prénatal. |
| 1192*              | TCG                  | TELECONSULTATION GENERALISTE                      | Les prestations TCG et TC seront compatibles avec le matricule anonyme pour IVG pour les mineures                    |
| 1157               | TCP                  | ACTE DE TELECONSULTATION                          |                                                                                                                      |
| 1097               | TDT                  | TELE EXPERTISE DOSSIER TRAITANT                   |                                                                                                                      |
| 1193               | TE1                  | TELE EXPERTISE DE NIVEAU 1                        |                                                                                                                      |
| 1194               | TE2                  | TELE EXPERTISE DE NIVEAU 2                        |                                                                                                                      |
| 1158               | TEP                  | ACTE DE TELE EXPERTISE                            |                                                                                                                      |
| 1164               | TLC                  | TÉLÉ CONSULTATION - ALD ET / OU EHPAD             |                                                                                                                      |
| 1165               | TLE                  | TÉLÉ EXPERTISE - ALD ET/OU EHPAD                  |                                                                                                                      |
| 1172               | TSA                  | TELESURVEILLANCE : PS EFFECTUANT L'ACCOMPAGNEMENT |                                                                                                                      |
| 3593               | TSF                  | TELESURVEILLANCE : FOURNISSEUR DE LA SOLUTION     |                                                                                                                      |
| 1174               | TSM                  | TELESURVEILLANCE : MEDECIN TELESURVEILLANT        |                                                                                                                      |
| 1096               | TTE                  | TELECONSULTATION MEDECIN TRAITANT AVEC EHPAD      |                                                                                                                      |
| 3105               | TLD                  | TELECONSULTATION DOMICILE                         |                                                                                                                      |
| 3104***            | TLL                  | TELECONSULTATION LIEU DEDIE                       |                                                                                                                      |
| 3103               | TLS                  | TELECONSULTATION LORS D'UN SOIN                   |                                                                                                                      |

Pour prendre en considération les majorations et les forfaits liés, il faut ajouter les natures de prestation suivantes :

| Code PS5 (PRS_NAT) | code B2 (PRS_NAT_CB2) | Libellé (PRS_NAT_LIB)                 |
|--------------------|-----------------------|---------------------------------------|
| 1166               | TEC                   | FORFAIT COMPLÉMENTAIRE TÉLÉ EXPERTISE |
| 3308**             | TLM                   | CODE TRACEUR TELECONSULTATION         |
| 1190               | TSP                   | TELESURVEILLANCE : PRIME VARIABLE     |


Les majorations MIC et MSH pour les téléconsultations facturées en urgence avec Médecin Traitant déclaré ont été autorisées.

\* ouverture des actes TCG téléconsultations aux  sages-femmes dans le cadre de l’épidémie.  

** Afin de permettre de tracer la téléconsultation en officine pharmaceutique par transmission du PS consulté en tant que prescripteur du code traceur de téléconsultation, il est demandé d’élargir les spécialités des prescripteurs à tout médecin libéral conventionné, quel que soit son secteur d’exercice et quelle que soit sa spécialité médicale,	aux salariés d’établissement de santé,	aux salariés de centres de santé et aux sages-femmes.  

*** Les infirmiers pourront coter l’acte d’accompagnement à la téléconsultation TLL (TéLéconsultation Lieu dédié) ainsi que les  Masseurs-kinésithérapeutes.

## Les actes de vaccinations
Dans le cadre de la lutte contre le Covid-19, la campagne de vaccination a débuté le 27 décembre 2020.  La rémunération des professionnels de santé assurant cette phase essentielle se fait de la manière suivante :

### Entre le 27 décembre 2020 et le 04/01/2021, dans l'attente de la prise en compte du code VAC (1929) :

- consultation pré-vaccinale G (1109), GS (1110), CS (1112) + majoration forfaitaire MPC (1116), et l’équivalent pour la visite : appliquée avec un tarif de 25€ et un motif d’exonération à 100% autre (62), le cas échéant l'indicateur de parcours de soins à U (urgence).
- acte d'injection côté K5 (1312).

Ces cas de facturation sont extrêmement marginaux et le sont très majoritairement via les codes vacation VMR (1962) et VIR (3144).

### A partir du 04/01/2021

1. **Création de la prestation VAC (1929)** utilisé en en cas de consultation ou de visite médicale préalable à la vaccination (avec ou sans l’injection) ou pour l’injection seule

Tarif du code VAC comportant la première injection si elle est réalisée dans le même temps :  
| VAC (prix unitaire) | Métropole | DROM     |
|---------------------|-----------|----------|
| Médecin             | 25,00 €   | 29,60 €  |
| Sage femme          | 25,00 €   | 27,30 €  |

\+ A cela peuvent s’ajouter des éventuels compléments Dimanche et Jours fériés, et les majorations et indemnités de déplacement suivantes : MD, MDD, Forfaitaires (ID, IF, IFA), Kilométriques (IK, IKM, IKP, IKS).

\+ NIR Fictif = 46 si bénéficiaires non connus dans nos bases. 


2. **Création de la prestation VCO (1928)** pour rémunérer le [PS](../glossaire/PS.md) de la saisie de chaque vaccination saisie dans le télé-service « Vacin Covid » (rémunération forfaitaire de 5,40 €).

\+ NIR Fictif = 08 ou 00 ou 47

3. **Réutilisation des prestations VIR (3144) et VMR (1962)** pour les PS, pour la rémunération de vacation si déplacement du PS (infirmier et médecin) en EHPAD pour plusieurs patients ou en centre de vaccination. 

\+ NIR fictif = 47 

### À partir du 23/02/2021
1. **Création de la prestation INJ (1930)** qui permet de facturer les actes d’injection vaccinale effectués. Le code VAC est maintenu pour la facturation des consultations /visites avec ou sans injection. 

| INJ (prix unitaire)                 | Métropole | DROM    |
|-------------------------------------|-----------|---------|
| Médecin                             | 9,60 €    | 9,60 €  |
| Infirmiers                          | 6,30 €    | 6,60 €  |
| Pharmacien en pharmacie             | 7,90 €    | 8,20 €  |
| Pharmacien en centre de vaccination | 6,30 €    | 6,60 €  |
| Sage femme                          | 9,60 €    | 9,60 €  |

\+ Éventuelles majorations et indemnités de déplacement qui suivent le statut des codes VAC et INJ à l’égard du parcours de soins.
\+  NIR-FIC=46 si bénéficiaires non connus dans nos bases

2. **Réutilisation du code KGP (3403)** pour :
- **Rémunération des pharmaciens** pour stockage et livraison aux EHPAD : 70€*nombre de livraisons (indépendante du nombre de flacons délivrés) par même établissement EHPAD prescripteur

*NB : Cette prestation s’étant mise en place tardivement, il a été demandé aux pharmaciens de bloquer les factures ce qui explique la facturation de plusieurs forfaits Ehpad le cas échéant*

\+  NIR-FIC=47 si bénéficiaires non connus dans nos bases

 - **Identification des délivrances des vaccins des officines aux PS libéraux** : nombre de flacon identifié à partir du prix unitaire (par exemple 3,45€ TTC le flacon de 10 doses pour le vaccin AstraZeneca + 0,10€ par flacon supplémentaire)

### A partir du 15/03/2021

-	Utilisation du **code KGP (3403)** pour la **délivrance des vaccins aux Sages-Femmes et aux établissements non connus** au FNPS


### A partir du 25/03/2021
- Plusieurs mises à jour de tarifs ont eu lieu pour les prestations concernant la vaccination autorisée aux Sages-Femmes (VAC et INJ), aux Pharmaciens (INJ), aux Infirmiers (INJ)
- Le tarif de la prestation VIR est mis à jour afin de rémunérer les vacations des Sages-Femmes, des pharmaciens et des PS non connus au référentiel (utilisation du NIR du PS et du n° AM fictif selon la catégorie de PS qui sont restitués avec un code nature activité =24 Infirmier)

| Catégorie                        | n° AM       | Nom exercice                             |
|------------------------------------|-------------|------------------------------------------|
| Retraité                           | 29699110 2  | PS RETRAITE SPECIFIQUE                   |
| Etudiant hors remplaçant                | 29699120 1  | PS ETUDIANT SPECIFIQUE                   |
| Remplaçant exclusif (sans activité libérale en tant que titulaire et n'intervenant pas en remplacement d'un PS titulaire)         | 29699130 0  | PS REMPLACANT SPECIFIQUE                 |
| Professionnel de santé sans activité       | 29699140 9  | PS SANS ACTIVITE SPECIFIQUE              |
| Professionnel de santé salarié ou fonctionnaire intervenant en dehors de son contrat de travail ou de ses obligations de service  | 29699150 8  | PS SALARIES OU FONCT HORS TEMPS TRAVAIL  |
| Autre profession      | 29699160 7  | PS NON CONV AUTRES PROF                  |

Un dénombrement de ces PS non connus peut être réalisé en utilisant le NIR du PS.

### A partir du 30/03/2021
Les professionnels de santé (médecins, sages-femmes, pharmaciens, infirmiers.)exerçant en maisons de santé pluriprofessionnelles (MSP) ou dans un centre de santé (CDS) peuvent désormais bénéficier d’une rémunération via un « forfait équipe ». 
Cette rémunération est versée à la structure en lieu et place de la rémunération individuelle versée à chaque professionnel composant l’équipe de vaccination.

-	**Utilisation de la prestation VCO (1928) pour rémunérer le forfait équipe dans les centres de santé et maisons de santé pluriprofessionnelles (MSP)** (rémunération forfaitaire de 195,00 € pour réalisation de 10 injections)

### A partir du 15 avril 2021 

- **La possibilité de facturer à l’acte (Via VAC ou INJ) en centre de vaccination est supprimée**

- Ouverture du code VIR (3144) aux dentistes et laboratoires  

### A partir de mai 2021
- Dépassements autorisés pour le code VIR (3144)
- Suppression de la présence du prescripteur pour l'acte VCO 

### A partir de juin 2021
- Exclusion du code prestation VMR (1962) de la transmission aux organismes complémentaires 

### A venir 

- Prise en compte des tests sérologiques antigéniques rapides nommés TROD (orientation diagnostique) dans le tarif du code INJ (1930) dans le cadre d’un parcours de vaccination monodose.
- ouverture du code VIR aux kinés et ambulancier

### Conclusion 

| Pour cibler                     | Sélectionner                |
|-------------------------------------|--------------------------------|
| Facturation des actes de consultations pré-vaccinale (avec ou sans injection), consultation avec injection et injection seule | Codes VAC (1929) ou INJ (1930) |
| Facturation des vacations                                                                                                      | VIR (3144) ou VMR (1962)       |
| Facturation saisie SI-VAC et « forfait équipe » en MSP et centres de santé                                                     | VCO (1928)                     |

## Les actes de biologie 

Les actes de dépistage du COVID-19 réalisés en laboratoire de biologie médicale correspondent aux prestations affinées suivantes inscrites à la NABM Nomenclature des actes de biologie médicale. 

| Code prestation (BIO_PRS_IDE) |                                                                                                      | Date de création  | Commentaire                                                             |
|-------------------------------|------------------------------------------------------------------------------------------------------|-------------------|-------------------------------------------------------------------------|
| 5271                          | DETECTION DU GENOME DU SARS-COV-2 PAR LES TECHNIQUES D'AMPLIFICATION GENIQUE REALISEE LORS DU DIAGNO | 09/03/2020        | Tests RT-PCR                                                            |
| 9006                          | FORFAIT DU TRAITEMENT DES DONNEES ADMINISTRATIVES DU COVID-19 CE FORFAIT COMPREND : -LA VERIFICATION | 10/05/2020        | Forfait d’enregistrement des données administratives dans la base SIDEP |
| 4719, 4720, 4721, 4722        | LES TESTS SEROLOGIQUES PEUVENT ETRE REALISES A PARTIR DE J+7 POUR LES PATIENTS SYMPTOMATIQUES GRAVES | 20/05/2020        | Tests sérologiques                                                      |
| 4274                          | LA DETECTION DES ANTIGENES DU SARS-COV-2 PAR LES TECHNIQUES DE DIAGNOSTIC RAPIDE EST REALISEE        | 16/10/2020        | Tests antigénique (en laboratoire)                                      |
| 9007                          | FORFAIT SEQUENCAGE                                                                                   | 08/02/2021        | Forfait séquençage                                                      |

Les prélèvements nasopharyngés au titre des tests RT-PCR peuvent être réalisés par de nombreux professionnels de santé.
Plus de 99% des prélèvements sont réalisés par des médecins biologistes, des Infirmiers diplômés d’Etat (IDE) ou des laboratoires. 

Ces prélèvements sont remboursés à 100% par l’assurance maladie. 
Il est important d’indiquer cette condition dans la requête afin de pouvoir retracer précisément ces actes.

| Code B2  | Code prestation PS5 | Coefficient de l’acte  | Nature activité du PS | Commentaire                     |
|----------|---------------------|------------------------|-----------------------|---------------------------------|
| AMI      | 3111                | 3,1                    | 24                    | Prélèvement IDE en cabinet      |
| AMI      | 3111                | 4,2                    | 24                    | Prélèvement IDE domicile        |
| KB       | 3221                | 5                      | 30,39,40              | Prélèvement laboratoire         |
| KMB      | 3225                | 5                      | 30,39,40              | Prélèvement laboratoire         |
| TB       | 3223                | 3,8                    | 30,39,40              | Prélèvement laboratoire         |
| K        | 1312                | 5                      | 0 et pse_spe_cod = 38 | Prélèvement médecins biologiste |





## Références
::: tip Ressources
Ce document a été rédigé par la Cnam et a été converti en Markdown pour être publié ici, et servir plus facilement de ressources pour d'autres fiches. Il est [téléchargeable ici](../files/Cnam/20210628_Fiche_Thematique_Prestations_COVID_MPL-2.0.docx) dans sa version d'origine.
:::

