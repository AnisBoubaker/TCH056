<!--
   Créer une page HTML qui demande l'information sur la taille et le poids d'une personne. 
   En soumettant le formulaire (méthode GET), votre page doit afficher l'indice de masse corporelle
   de la personne (BMI) ainsi que l'état de la personne (maigreur, normale, en surpoids ou obèse). 
   Le calcul doit se faire côté serveur à l'aide d'un script PHP.
-->

<!DOCTYPE html>
<html>
<head>
	<title>Calcul de l'IMC</title>
</head>
<body>
	<h1>Calcul de l'IMC</h1>
	<form method="get" action="">
		<label for="taille">Taille en mètres :</label>
		<input type="number" name="taille" step="0.01" required><br><br>
		<label for="poids">Poids en kilogrammes :</label>
		<input type="number" name="poids" step="0.1" required><br><br>
		<input type="submit" value="Calculer">
	</form>
	<br>
	<?php
	if(isset($_GET['taille']) && isset($_GET['poids'])) {
		$taille = $_GET['taille'];
		$poids = $_GET['poids'];
		$imc = $poids / ($taille * $taille);
		echo "<p>Votre IMC est de : " . round($imc, 2) . "</p>";
		if($imc < 18.5) {
			echo "<p>Vous êtes en état de maigreur.</p>";
		} elseif($imc < 25) {
			echo "<p>Vous avez un poids normal.</p>";
		} elseif($imc < 30) {
			echo "<p>Vous êtes en surpoids.</p>";
		} else {
			echo "<p>Vous êtes obèse.</p>";
		}
	}
	?>
</body>
</html>
