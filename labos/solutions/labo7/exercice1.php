<!--
    Créer une page PHP qui génère le contenu de la page HTML automatiquement à partir d'un 
    ensemble de mots stockés dans un tableau. Les mots sont choisis de façon aléatoire et la 
    page doit contenir entre 500 et 800 mots (choix aléatoire).

    Voici un tableau contenant 100 mots à utiliser pour générer votre contenu: 
    $mots = array("chat", "chien", "maison", "soleil", "arbre", "pomme", "voiture", "ordinateur", "livre", "musique", "avion", "mer", "plage", "montagne", "fleur", "fruit", "paysage", "enfant", "école", "professeur", "amour", "hiver", "été", "printemps", "automne", "jour", "nuit", "heure", "minute", "seconde", "bouteille", "verre", "tasse", "assiette", "cuillère", "fourchette", "couteau", "pantalon", "robe", "chemise", "chaussure", "chapeau", "parapluie", "crayon", "stylo", "feutre", "gomme", "règle", "carnet", "agenda", "journal", "carte", "timbre", "téléphone", "télévision", "radio", "vélo", "moto", "train", "avion", "bateau", "bus", "voiture", "clé", "porte", "fenêtre", "table", "chaise", "canapé", "lampe", "plante", "cadre", "horloge", "miroir", "télécommande", "coussin", "couverture", "oreiller", "serviette", "sac", "valise", "parfum", "crème", "shampooing", "savon", "dentifrice", "brosse", "mousse", "lait", "eau", "jus", "café", "thé", "bière", "vin", "chocolat", "gateau", "bonbon", "glace");
-->
<?php
    $mots = array("chat", "chien", "maison", "soleil", "arbre", "pomme", "voiture", "ordinateur", "livre", "musique", "avion", "mer", "plage", "montagne", "fleur", "fruit", "paysage", "enfant", "école", "professeur", "amour", "hiver", "été", "printemps", "automne", "jour", "nuit", "heure", "minute", "seconde", "bouteille", "verre", "tasse", "assiette", "cuillère", "fourchette", "couteau", "pantalon", "robe", "chemise", "chaussure", "chapeau", "parapluie", "crayon", "stylo", "feutre", "gomme", "règle", "carnet", "agenda", "journal", "carte", "timbre", "téléphone", "télévision", "radio", "vélo", "moto", "train", "avion", "bateau", "bus", "voiture", "clé", "porte", "fenêtre", "table", "chaise", "canapé", "lampe", "plante", "cadre", "horloge", "miroir", "télécommande", "coussin", "couverture", "oreiller", "serviette", "sac", "valise", "parfum", "crème", "shampooing", "savon", "dentifrice", "brosse", "mousse", "lait", "eau", "jus", "café", "thé", "bière", "vin", "chocolat", "gateau", "bonbon", "glace");
?>
<!DOCTYPE html>
<html>
<head>
	<title>Page au contenu aléatoire</title>
</head>
<body>
	<header>
		<h1>Contenu aléatoire</h1>
	</header>

	<main>
		<p>
            <?php
            for ($i = 0; $i < 100; $i++) {
                echo($mots[array_rand($mots)]." ");
            }
            ?>
        </p>
	</main>
</body>
</html>