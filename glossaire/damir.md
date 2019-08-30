#DAMIR - Dépenses d’Assurance Maladie Inter-Régimes

##L'univers DAMIR dans le SNDS
Le DAMIR est un univers du SNIIRAM. C'est un outil pour l'analyse statistique macro-économique des grands postes de dépenses selon différents axes :
- Professionnels de santé exécutants ou prescripteurs
- Établissements exécutants ou prescripteurs
- Bénéficiaires des soins
- Période = année – mois
- Département du bénéficiaire, du PS, de l’établissement
- Régime / Organisme d’assurance maladie

##comment interroger le DAMIR?
Selon le profil de connexion utilisé dans le portail SNDS pour interroger l’univers DAMIR, les données restituées peuvent être limitées à une région de liquidation ou à un organisme de liquidation
- Via BO WebI: les profils 22 et 23. 
- Via SAS / Guide : table `MA_REM_FT` dans ORAVUE: pour les organismes autorisés à requêter sur DCIR, à partir des profils permettant d’accéder à DCIR. Pour tout utilisateur SNIIRAM sachant requêter sous SAS/Guide, à partir d’un profil spécifique (profil bordereau 9B, profil portail 28)Sous le profil 28 ou sous tous les profils DCIR, on trouve la table `MA_REM_F` (bibliothèque ORAVUE) qui correspond au DAMIR. 


#Références

Support de formation DAMIR de la CNAM (version de mai 2018)
