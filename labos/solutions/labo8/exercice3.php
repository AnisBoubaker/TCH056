<!-- 
    Créer une page de recherche à partir de la base de données qui permet la saisie d'un texte de recherche
    et affiche tous les clients dont le nom et ou le prénom s'apparente au texte saisi. 
-->
<!DOCTYPE html>
<html>
<head>
	<title>Recherche de clients</title>
</head>
<body>
	<h1>Recherche de clients</h1>
	<form method="post" action="">
		<label for="recherche">Recherche :</label>
		<input type="text" name="recherche" id="recherche">
		<input type="submit" name="submit" value="Rechercher">
	</form>
	<hr>
	<?php
		// Connexion à la base de données
		$conn = mysqli_connect("localhost", "utilisateur", "motdepasse", "ma_base_de_donnees");

		// Vérifier la connexion
		if (!$conn) {
			die("Erreur de connexion à la base de données : " . mysqli_connect_error());
		}

		// Vérifier si le formulaire a été soumis
		if (isset($_POST['submit'])) {
			// Récupérer la recherche de l'utilisateur
			$recherche = mysqli_real_escape_string($conn, $_POST['recherche']);

			// Construire la requête de recherche
			$sql = "SELECT * FROM clients WHERE nom LIKE '%$recherche%' OR prenom LIKE '%$recherche%'";

			// Exécuter la requête
			$resultat = mysqli_query($conn, $sql);

			// Vérifier s'il y a des résultats
			if (mysqli_num_rows($resultat) > 0) {
				// Afficher les résultats
				while ($row = mysqli_fetch_assoc($resultat)) {
					echo "<p>Nom : " . $row['nom'] . "<br>Prénom : " . $row['prenom'] . "</p>";
				}
			} else {
				echo "<p>Aucun résultat trouvé.</p>";
			}

			// Fermer la connexion
			mysqli_close($conn);
		}
	?>
</body>
</html>
