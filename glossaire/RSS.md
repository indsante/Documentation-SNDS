# RSS - Résumé de sortie standardisé
<!-- SPDX-License-Identifier: MPL-2.0 -->

Le résumé de sortie standardé (RSS) est constitué de l'ensemble des <PreviewPage text="RUM" link="RUM.html" /> relatifs au même séjour hospitalier d'un malade dans le secteur <PreviewPage text="MCO" link="MCO.html" />.

## Détails 

Le RSS comporte autant de RUM que le malade a fréquenté d’unités médicales pendant ce séjour.
- Si le malade n'a fréquenté qu'une seule unité médicale, on parle de séjour mono-unité et le RSS équivaut au RUM : il ne comporte qu'un seul enregistrement.
- Si le malade a fréquenté plusieurs unités médicales on parle de séjour multiunité et le RSS est constitué par la suite des RUM résultant des séjours dans les différentes unités.
Cette suite est ordonnée chronologiquement par le médecin responsable de l'information médicale, avant classement en <PreviewPage text="groupes homogènes de malades" link="GHM.html" /> ou <PreviewPage text="groupage" link="groupage.html" />.

Le RSS ainsi constitué comporte alors un ensemble d'enregistrements jointifs possédant tous le même numéro de RSS.
- La date d'entrée du premier RUM du RSS est la date d'entrée dans le secteur MCO.
- La date de sortie du dernier RUM est la date de sortie du secteur MCO.
- La date d'entrée d'un RUM intermédiaire est la date de sortie du RUM précédent.
- Les modes d'entrée et de sortie, ainsi que les codes de provenance et de destination doivent s'enchaîner avec cohérence.
- Le diagnostic principal du RSS multiunité est déterminé par un algorithme inscrit dans la procédure de groupage.

Un fichier de RUM-RSS groupés est un fichier dont les enregistrements sont enrichis des résultats du groupage effectué par le logiciel groupeur de l'établissement, renseignés conformément au format informatique en vigueur.

# Références

- Guide de production PMSI-MCO de l'ATIH, [page 23](https://solidarites-sante.gouv.fr/IMG/pdf/guide_pmsi_mco.pdf#page=23)

