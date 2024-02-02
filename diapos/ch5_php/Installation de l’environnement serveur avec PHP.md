
## Procédure d’installation

1. Installer Docker Desktop: https://www.docker.com/products/docker-desktop/. L’installation requiert que vous redémarrez votre machine. Lancez Docker Desktop après le redémarrage et attendez que le service se lance.
1. Dans votre dossier de travail (ex. Le dossier de votre TP), créez deux fichiers: Dockerfile et docker-compose.yml
2. Copier le contenu des deux fichiers depuis le repo suivant: https://github.com/AnisBoubaker/TCH056-20241/tree/main/cours08
3. Ouvrez la console (terminal) dans VSCode et saisissez la commande suivante et attendez la fin du téléchargement:
```bash
docker-compose up -d
```
Cette commande sera celle que vous utiliserez pour démarrer le serveur. Le serveur restera en fonction jusqu’à que vous l’arrêtez ou que vous arrêtez le service de Docker.

Pour arrêter le serveur, saisir la commande suivante dans le terminal:
```bash
docker-compose down
```

## Validation de l’installation:

1. Dans un navigateur, saisir l’URL suivante: http://localhost:8080. Vous deviez obtenir le site de gestion de la base de données PhpMyAdmin
2. Dans un navigateur, saisir l’URL suivante: http://localhost:8000. Vous obtiendrez la page index.html de votre site web. Si vous obtenez la page “Forbidden”, votre installation fonctionne, vous n’avez simplement pas de document index.html dans votre dossier de projet.

