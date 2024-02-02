# Installation de l'environnement de développement LAMP avec Docker



## Procédure d’installation

1. Installer Docker Desktop: https://www.docker.com/products/docker-desktop/. L’installation requiert que vous redémarrez votre machine. Lancez Docker Desktop après le redémarrage et attendez que le service se lance.
2. Télécharger [les fichiers de configuration Docker](https://anisboubaker.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2FAnisBoubaker%2FTCH056%2Ftree%2Fmain%2Fdiapos%2Fch5_php%2Fdockerconf&noedit=1)
3. Dans votre dossier de travail (ex. Le dossier de votre TP), ajoutez les deux fichiers téléchargés (Dockerfile et docker-compose.yml)
4. Ouvrez la console (terminal) dans VSCode dans le dossier de votre projet et saisissez la commande suivante (puis attendez la fin du téléchargement):

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
2. Dans un navigateur, saisir l’URL suivante: http://localhost:8000. Vous obtiendrez la page index.html de votre site web. Si vous obtenez la page “Forbidden”, votre installation fonctionne, vous n’avez simplement pas de document index.html ou index.php dans votre dossier de projet.
