# TCH056 - Programmation Web

## 1. Description du cours (annuaire)

Ce cours vise à initier l’étudiant aux rudiments de la programmation Web. Au terme de ce cours, l’étudiant sera en mesure de :

* développer des applications Web dynamiques;
* expliquer les particularités d’une application Web et ses modèles de communication;
* exploiter les langages côté client : balisage HTML, feuilles de styles et manipulation
dynamique du modèle-objet (DOM) de façon programmatique;
* mettre en place une architecture typique n-tiers comprenant un serveur Web et un
serveur de base de données;
* implémenter la logique métier de l’application en exploitant des langages côté serveur;
* créer des applications interagissant de façon synchrone et asynchrone avec le serveur;
* utiliser un cadriciel (« framework ») pour une conception rapide et structurée d’une
application Web.

Principales technologies nécessaires à la conception et au déploiement d’applications Web. Architecture générique, protocoles et langages d’une application Web. Balisage HTML, feuilles de styles et manipulation dynamique du modèle-objet (DOM). Serveur Web et serveur de base de données. Cadriciel (« framework »).

## 2. Plan du cours

Le cours comprend 13 séances de cours théorique et 12 séances de laboratoire. Il est donné en format accéléré à raison de deux séances de cours et deux séances de laboratoire par semaine. Les 12 première séances de cours, réparties sur 6 sémaines, sont consacrées à la présentation de la matière et les évaluations continues. La 13e et dernière séance de cours est dédiée à l'évaluation finale.  

Le cours adopte une approche d'enseignement orientée par la pratique: les étudiant-e-s devront mettre en pratique immédiatement les concepts enseignés. Ainsi, tout au long de la session, nous développerons une application durant les séances de cours et de laboratoire. Nous développerons collectivement des modules de l'application durant les séances de cours. Celle-ci devra être complétée/bonifée par les étudiant-e-s durant les séances de laboratoire. De plus, un projet de session d'application Web devra être réalisé par équipes en deux étapes (revues au laboratoire 7 et au laboratoire 12).  

### Séances 1 et 2: Introduction au développement Web et le langage HTML

* Qu’est-ce que le Web et la programmation Web? 
* Les (multiples) langages du Web
* Le modèle client/serveur et le protocole HTTP
* Structurer l’information - Le langage HTML : 
  * Notion de balisage 
  * Structure d’une page HTML – Introduction à l’arborescence d’une page Web
* Les principales balises HTML5 (réf. : [MDN-HTML](https://developer.mozilla.org/fr/docs/Web/HTML)) : 
  * Organisation sémantique d’un document HTML / Moteurs de recherche
  * En-tête du document et balises de méta-données
  * La racine du document (body) et les balises de sectionnement
  * Balises d’organisation du contenu textuel (paragraphe, citation, …)
  * Balises sémantiques du contenu textuel (liens, …)
  * Contenu embarqué (médias, iframe, scripts, svg …)
  * Contenu tabulaire
  * Les formulaires
* Validation d’un document HTML

**Séances de laboratoire:** 

* Prise en main des outils de développement
* Concevoir un document HTML structuré sémantiquement à partir d’un texte.
* Validation d'un document HTML
  

### Séances 3, 4 : Mise en forme d’un document HTML – Les feuilles de style en cascade (CSS)

* HTML vs CSS
* Approches de définition de style : en-ligne, fichier de style. 
* Concept de règle et syntaxe de base d'une règle de style CSS:  
* Définition d'une règle: 
	* Les Sélecteurs
	* Les éléments de style
	* Dimensions et unités
	* Parcours du site de référence ([MDN-CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Reference#concepts))
* Le positionnement (*Flexbox*, *Grid*)
* Conception réactive (*responsive design*)
* Outils contemporains de développement CSS
	* Les limites de CSS : code verbeux, enchevêtrement des règles et maintenabilité, pas d’héritage, ... 
	* Le cadriciel de développment CSS Bootstrap
	* Concept de pré-processeur CSS et introduction à SASS/LESS
	
**Séances de laboratoire:** 
* Mise en forme de l'interface client du projet de manière itérative: 
	* CSS de base: Mise en forme et positionnement;
	* Interface réactive;
	* Utilisation de pré-processeurs.

### Séances 5 et 6 : Modification dynamique du document Web: Le langage Javascript et le *Document Object Model* (DOM)

* Le _Document Object Model_  (DOM)
* Les bases du langage _Javascript_
* La sélection et la modification de contenu des noeuds du DOM
* Les événements et la programmation événementielle
  * Déclenchement d'événements
  * Intercepter des événements 
  * Notion de fonction de rappel
* Utilisation du cadriciel _JQuery_ pour cibler et modifier des noeuds du DOM

	
**Séances de laboratoire:** 
* Mise en forme de l'interface client du projet de manière itérative: 
	* CSS de base: Mise en forme et positionnement;
	* Interface réactive;
	* Utilisation de pré-processeurs.

### Séance 7: Examen Intra (3h)



### Séances 8 et 9: Générer des documents Web Dynamiquement - Programmation côté serveur

* Introduction au langage PHP
* Rappels: Le modèle de communication client/serveur et le cycle de vie d'une requête
* Interrogation d'une bases de données
	* Connexion à une base de données 
	* Rappels: langage SQL pour l'interrogation et la modification des données (SELECT, INSERT, UPDATE et DELETE)
	* Correspondance Objet/Relationnel (ORM) et biliothèques disponibles
* Préserver un état entre les requêtes: notion de session et fichiers témoins
* Formulaires pour l'ajout et la mise à jour de données
* Communication asynchrone (*Ajax*)
  * l'objet Javascript *XMLHttpRequest* 
  * Requêtes asynchrones avec *JQuery*

**Séances de laboratoire:** 
* Création d'une page générée dynamiquement côté serveur
* Construction du contenu d'une page à partir de données stockées dans une base de données
* Ajout de l'authentification à l'application
* Validation du contenu d'un formulaire à travers des requêtes asynchrones

### Séances 10,11,12: Utilisation de cadriciels modernes pour le développement de l'application client

* Les avantages et les inconvénients de l'utilisation d'un cadriciel de développement
* Développement de la vue par composants
* Introduction au cadriciel Vue.js

**Séances de laboratoire:** 
* Création d'une page générée dynbamiquement côté serveur
* Construction du contenu d'une page à partir de données stockées dans une base de données
* Ajout de l'authentification à l'application
* Validation du contenu d'un formulaire à travers des requêtes asynchrones

### Séance 13: Compléments de cours et révision

## 3. Évaluations


| Évaluation        | Pondération | Séance             | Notes                        |
|-------------------|-------------|--------------------|------------------------------|
| Examen Intra      | 15%         | 7                  |                              |
| Laboratoires      | 15%         | Toutes             | 10 meilleures notes/12       |
| Projet de session | 30%         | Labos 4 à 12       | Revues aux labos 7 et 12     |
| Examen final      | 40%         | Période des finaux |                              |

**Ce cours adopte le double seuil:** L'obtention d'une note pondérée de 50% à l'ensemble des évaluations à caractère inidividuel est une condition nécessaire (mais pas suffisante) pour la résussite du cours.


## Références

### Références obligatoires: 
Aucune

### Références optionnelles (en construction):
* [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web)
* [DevDocs](https://devdocs.io)
* [CSS Reference](https://cssreference.io)
* [You don't know JS Yet](https://github.com/getify/You-Dont-Know-JS)