<!--
    Écrire une page qui affiche la liste des clients de la compagnie depuis la base de 
    données. La base de données contient les colonnes suivantes: (id),nom, prenom, courriel
-->
<!DOCTYPE html>
<html>
<head>
	<title>Liste des clients</title>
</head>
<body>
	<h1>Liste des clients</h1>
	<table>
		<tr>
			<th>ID</th>
			<th>Nom</th>
			<th>Prénom</th>
			<th>Courriel</th>
		</tr>
		<?php
			// Connexion à la base de données
			$conn = mysqli_connect("localhost", "utilisateur", "motdepasse", "ma_base_de_donnees");

			// Vérifier la connexion
			if (!$conn) {
				die("Erreur de connexion à la base de données : " . mysqli_connect_error());
			}

			// Construire la requête de sélection
			$sql = "SELECT * FROM clients";

			// Exécuter la requête
			$resultat = mysqli_query($conn, $sql);

			// Vérifier s'il y a des résultats
			if (mysqli_num_rows($resultat) > 0) {
				// Afficher les résultats
				while ($row = mysqli_fetch_assoc($resultat)) {
					echo "<tr>";
					echo "<td>" . $row['id'] . "</td>";
					echo "<td>" . $row['nom'] . "</td>";
					echo "<td>" . $row['prenom'] . "</td>";
					echo "<td>" . $row['courriel'] . "</td>";
					echo "</tr>";
				}
			} else {
				echo "<tr><td colspan='4'>Aucun client trouvé.</td></tr>";
			}

			// Fermer la connexion
			mysqli_close($conn);
		?>
	</table>
</body>
</html>
