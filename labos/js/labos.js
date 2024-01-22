function creerElementExercice(exercice, num) {
    const container = document.createElement("div");
    container.className = "container";

    const titre = document.createElement("h3");
    titre.textContent = "Exercice " + num;
    container.appendChild(titre);

    const enonce = document.createElement("p");
    enonce.innerHTML = exercice.enonce;
    container.appendChild(enonce);

    // Gestion de l'attribut 'exemple'
    if (exercice.exemple) {
      const exempleTitre = document.createElement("p");
      exempleTitre.innerHTML = "<strong>Exemple d'utilisation:</strong>";
      container.appendChild(exempleTitre);

      // Ajouter les exemples de code
      if (exercice.exemple.html) {
        const exempleHtml = document.createElement("pre");
        exempleHtml.innerHTML = `<code class="html">${exercice.exemple.html}</code>`;
        container.appendChild(exempleHtml);
      }
      if (exercice.exemple.css) {
        const exempleCss = document.createElement("pre");
        exempleCss.innerHTML = `<code class="css">${exercice.exemple.css}</code>`;
        container.appendChild(exempleCss);
      }
      if (exercice.exemple.javascript) {
        const exempleJs = document.createElement("pre");
        exempleJs.innerHTML = `<code class="javascript">${exercice.exemple.javascript}</code>`;
        container.appendChild(exempleJs);
      }
    }

    // Créer un bouton pour afficher/masquer les indications
   const boutonIndications = document.createElement('button');
   boutonIndications.textContent = 'Afficher les indications';
   container.appendChild(boutonIndications);

    // Conteneur pour les indications
   const indications = document.createElement('div');
   indications.style.display = 'none'; // Masquer initialement
   container.appendChild(indications);

   // Ajouter la clé
   const cle = document.createElement('div');
   cle.className = 'cle';
   cle.innerHTML = "<pre><code class='javascript'>"+exercice.cle+"</code></pre>";
   indications.appendChild(cle);

    // Gérer le clic sur le bouton
    boutonIndications.addEventListener('click', function() {
        if (indications.style.display === 'none') {
            indications.style.display = 'block';
            boutonIndications.textContent = 'Masquer les indications/solution';
        } else {
            indications.style.display = 'none';
            boutonIndications.textContent = 'Afficher les indications/solution';
        }
    });

    return container;
  }

  function ajouterThemeAvecExercices(theme, debut = 1) {
    let compteur = 0;
    const containerPrincipal = document.querySelector("body");

    const titreTheme = document.createElement("h2");
    titreTheme.className = "theme";
    titreTheme.textContent = theme.theme;
    containerPrincipal.appendChild(titreTheme);

    theme.exercices.forEach((exercice) => {
      const elementExercice = creerElementExercice(
        exercice,
        debut + compteur
      );
      containerPrincipal.appendChild(elementExercice);
      compteur++;
    });

    return compteur;
  }

  function ajouterTousLesExercices(exercices) {
    debut = 1;
    exercices.forEach((theme) => {
      debut += ajouterThemeAvecExercices(theme, debut);
    });
  }

  