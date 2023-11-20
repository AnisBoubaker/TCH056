<!--
    Écrire un script PHP qui valide le contenu d'un formulaire côté serveur. 
    Le formulaire doit contenir les informations suivantes: 
        - Nom et prénom
        - Adresse de courriel
        - Année de naissance
    
    Votre script doit s'assurer que: 
        - Le nom et le proénom ne sont pas vides et contiennent au moins 2 caractères
        - L'adresse courriel n'est pas vide et contient une valeur du type xxx@xxxx.xxx
        - L'année de naissance est une valeur numérique comprise entre 1900 et l'année courante.
    
    Si les informations sont valide, une alerte doit s'afficher annoçant que les données sont valides et contenu du
    formulaire effacé. Sinon, vous devez afficher un message d'erreur en face du ou des champs erronés et préserver
    les informations saisies pas l'usager. 
-->

<?php
if(isset($_POST['submit'])) {
    $nom = trim($_POST['nom']);
    $prenom = trim($_POST['prenom']);
    $email = trim($_POST['email']);
    $anneeNaissance = trim($_POST['anneeNaissance']);

    // Validation du nom et du prénom
    if(empty($nom) || empty($prenom) || strlen($nom) < 2 || strlen($prenom) < 2) {
        $errors[] = "Le nom et le prénom doivent contenir au moins 2 caractères.";
    }

    // Validation de l'adresse courriel
    if(empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Veuillez saisir une adresse courriel valide.";
    }

    // Validation de l'année de naissance
    $anneeCourante = date("Y");
    if(empty($anneeNaissance) || !is_numeric($anneeNaissance) || $anneeNaissance < 1900 || $anneeNaissance > $anneeCourante) {
        $errors[] = "Veuillez saisir une année de naissance valide.";
    }

    // Si tout est valide
    if(empty($errors)) {
        echo '<script>alert("Les données sont valides.");</script>';
        // Effacer le contenu du formulaire
        $_POST = array();
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Validation de formulaire en PHP</title>
</head>
<body>
    <?php if(!empty($errors)): ?>
        <ul>
            <?php foreach($errors as $error): ?>
                <li><?php echo $error; ?></li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
    <form method="post" action="">
        <label for="nom">Nom:</label>
        <input type="text" name="nom" value="<?php echo isset($_POST['nom']) ? htmlspecialchars($_POST['nom']) : ''; ?>"><br>

        <label for="prenom">Prénom:</label>
        <input type="text" name="prenom" value="<?php echo isset($_POST['prenom']) ? htmlspecialchars($_POST['prenom']) : ''; ?>"><br>

        <label for="email">Adresse courriel:</label>
        <input type="text" name="email" value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>"><br>

        <label for="anneeNaissance">Année de naissance:</label>
        <input type="text" name="anneeNaissance" value="<?php echo isset($_POST['anneeNaissance']) ? htmlspecialchars($_POST['anneeNaissance']) : ''; ?>"><br>

        <input type="submit" name="submit" value="Soumettre">
    </form>
</body>
</html>
