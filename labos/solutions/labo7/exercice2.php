<!--
    Créer une page Web en PHP qui affiche la table de multiplication des entiers de 1 à 10. Le résultat doit 
    s'afficher dans un tableau de 10 lignes et 10 colonne, en ajoutant une ligne d'en-tête. 
-->
<!DOCTYPE html>
<html>
<head>
	<title>Table de multiplication</title>
	<style type="text/css">
		table, th, td {
			border: 1px solid black;
			border-collapse: collapse;
			padding: 5px;
		}
	</style>
</head>
<body>
	<h1>Table de multiplication de 1 à 10</h1>
	<table>
		<thead>
			<tr>
				<th>&nbsp;</th>
				<?php for($i=1;$i<=10;$i++) { ?>
					<th><?php echo $i; ?></th>
				<?php } ?>
			</tr>
		</thead>
		<tbody>
			<?php for($i=1;$i<=10;$i++) { ?>
				<tr>
					<th><?php echo $i; ?></th>
					<?php for($j=1;$j<=10;$j++) { ?>
						<td><?php echo $i*$j; ?></td>
					<?php } ?>
				</tr>
			<?php } ?>
		</tbody>
	</table>
</body>
</html>
