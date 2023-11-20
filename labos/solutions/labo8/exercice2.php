<!--
    Complétez le code précédent en ajoutant une page d'ajout de client. Cette page affiche un formulaire
    permettant la saisie des informations d'un client. Une fois le formulaire transmis, les informations
    soumises doivent être validées (voir laboratoire 7). Si les informations sont erronées, des erreurs 
    sont affichées et on laisse à l'usager la possibilité de corriger les erreurs et de re-soumettre, 

    Si les informations saisies sont valides, celles-ci sont ajoutées à la table des clients en base de 
    données et la page de liste des clients est affichée (utiliser une redirection). 
-->
<!DOCTYPE html>
<html>
<head>
	<title>Ajout d'un client</title>
</head>
<body>
	<h1>Ajout d'un client</h1>
	<?php
		// Vérifier si le formulaire a été soumis
		if ($_SERVER["REQUEST_METHOD"] == "POST") {
			// Récupérer les données du formulaire
			$nom = $_POST["nom"];
			$prenom = $_POST["prenom"];
			$courriel = $_POST["courriel"];

			// Vérifier si les données sont valides
			$erreurs = array();
			if (empty($nom)) {
				$erreurs[] = "Le nom est obligatoire.";
			}
			if (empty($prenom)) {
				$erreurs[] = "Le prénom est obligatoire.";
			}
			if (empty($courriel)) {
				$erreurs[] = "Le courriel est obligatoire.";
			} elseif (!filter_var($courriel, FILTER_VALIDATE_EMAIL)) {
				$erreurs[] = "Le courriel n'est pas valide.";
			}

			// Si les données sont valides, les ajouter à la base de données
			if (count($erreurs) == 0) {
				// Connexion à la base de données
				$conn = mysqli_connect("localhost", "utilisateur", "motdepasse", "ma_base_de_donnees");

				// Vérifier la connexion
				if (!$conn) {
					die("Erreur de connexion à la base de données : " . mysqli_connect_error());
				}

				// Construire la requête d'insertion
				$sql = "INSERT INTO clients (nom, prenom, courriel) VALUES ('$nom', '$prenom', '$courriel')";

				// Exécuter la requête
				if (mysqli_query($conn, $sql)) {
					// Rediriger vers la liste des clients
					header("Location: liste_clients.php");
					exit();
				} else {
					echo "Erreur lors de l'ajout du client : " . mysqli_error($conn);
				}

				// Fermer la connexion
				mysqli_close($conn);
			} else {
				// Afficher les erreurs
				echo "<div class='erreurs'>";
				foreach ($erreurs as $erreur) {
					echo "<p>$erreur</p>";
				}
				echo "</div>";
			}
		}
	?>
	<form method="post">
		<label for="nom">Nom :</label>
		<input type="text" name="nom" id="nom" value="<?php echo isset($nom) ? $nom : ''; ?>" required>
		<br>
		<label for="prenom">Prénom :</label>
		<input type="text" name="prenom" id="prenom" value="<?php echo isset($prenom) ? $prenom : ''; ?>" required>
		<br>
		<label for="courriel">Courriel :</label>
		<input type="email" name="courriel" id="courriel" value="<?php echo isset($courriel) ? $courriel : ''; ?>" required>
		<br>
		<input type="submit" value="Ajouter">
	</form>
</body>
</html>
