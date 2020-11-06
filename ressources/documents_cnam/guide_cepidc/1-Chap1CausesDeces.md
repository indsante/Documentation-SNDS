# I - Constitution des informations sur les causes médicales de décès
<!-- SPDX-License-Identifier: MPL-2.0 -->

Ce paragraphe vous présente, de façon très résumée, le circuit des informations qui permettent au CépiDc et à l’INSEE de produire les données sur les causes médicales de décès.

Lors de la survenue d’un décès sur le territoire français, un certificat de décès est établi par un médecin. Ce certificat peut être établi sur papier ou de façon électronique sur un site Internet sécurisé mais les informations contenues dans ces deux types de certificats sont identiques. 
Le certificat de décès est divisé en deux parties :
- une partie nominative comportant notamment le nom et les prénoms de la personne décédée, son adresse, la date et l’heure de son décès ;
- une partie médicale, non nominative, qui comporte les informations sur les causes médicales du décès. Les seules informations administratives qui figurent sur cette partie médicale sont la date de naissance, la date de décès, le nom et le code postal de la commune de naissance, le nom et le code postal de la commune de domicile. 
Dans les certificats sur papier, la partie médicale est cachetée par le médecin afin d’en garantir la confidentialité.

Le circuit des informations est alors le suivant :
- le certificat de décès est envoyé à la commune de décès qui conserve la partie nominative ;
- un bulletin de décès est établi par la mairie, il contient notamment les données d’état civil de la personne décédée ainsi que sa date et son lieu de naissance, sa date et son lieu de décès, son département et sa commune de domicile, son état matrimonial, sa profession ou sa catégorie socioprofessionnelle ;
- le bulletin de décès nominatif est envoyé à l’INSEE sans la partie médicale, ce qui permet à l’INSEE de rechercher le NIR de la personne décédée dans le répertoire national d’identification des personnes physiques RNIPP), d’enrichir le RNIPP avec la date et la commune de décès et de vérifier ou de corriger les informations administratives et socio-démographiques figurant sur le bulletin de décès ;
- dans le même temps, la mairie adresse la partie médicale du certificat de décès et les informations non nominatives du bulletin de décès au médecin de santé publique de l’agence régionale de santé (ARS) ou de la délégation territoriale du lieu de décès. L’ARS ou la délégation territoriale envoie ensuite ces deux documents au CépiDc ;
- le CépiDc procède alors à deux opérations :
    - il envoie à l’INSEE les informations administratives dont il dispose, sans aucune donnée médicale, afin de permettre à l’INSEE d’apparier ces informations avec les données des bulletins de décès et le RNIPP,
    - il procède au codage des causes médicales de décès et à la détermination de la cause initiale du décès, cause à l’origine du processus morbide ayant conduit au décès ;
- les informations administratives et socio-démographiques en provenance de l’INSEE sont alors chaînées avec les informations codées sur les causes médicales de décès. 
Ce chaînage peut prendre du temps et générer de nombreux échanges entre l’INSEE et le CépiDc ;
- lorsque toutes les opérations de codage et d’appariement sont réalisées, le CépiDc envoie à la CNAM les données des causes médicales de décès à intégrer dans le SNDS.

Chaque décès codé par le CépiDc est caractérisé par un identifiant non nominatif qui permet de le distinguer des autres. 
Cet identifiant non nominatif est également utilisé lors des échanges entre le CépiDc et l’INSEE pour améliorer la qualité des informations socio-démographiques des personnes décédées. 
Lorsque les modalités pratiques de la transmission du NIR des personnes décédées seront complètement arrêtées, l’INSEE enverra à la CNAM une table de correspondance entre le NIR pseudonymisé et l’identifiant non nominatif de chaque personne décédée, ce qui permettra à la CNAM d’associé le NIR pseudonymisé de chaque personne décédée à ses données de causes médicales de décès.
