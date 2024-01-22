const exercices = [
    {
      theme: "Introduction à Javascript",
      exercices: 
      [
        {
          enonce:
            "Écrivez un programme qui calcule et affiche le produit de deux nombres stockés dans des variables.",
          cle: `
          let num1 = 5; 
          let num2 = 10; 
          console.log(num1 * num2);`,
        },
        {
          enonce:
            "Utilisez une boucle for pour afficher les nombres de 5 à 15.",
          cle: `
          for (let i = 5; i <= 15; i++) { 
            console.log(i); 
          }`,
        },
        {
          enonce:
            "Écrivez un programme qui utilise une structure conditionnelle pour vérifier si un nombre est positif, négatif ou zéro.",
          cle: `
          let number = [valeur]; 
          if (number > 0) { 
            console.log('Positif'); 
          } else if (number < 0) { 
            console.log('Négatif'); 
          } else { 
            console.log('Zéro'); 
          }`,
        },
        {
          enonce:
            "Créez un programme qui utilise une boucle while pour compter de 10 à 1 à rebours.",
          cle: `
          let i = 10; 
          while (i > 0) { 
            console.log(i); 
            i--; 
          }`,
        },
        {
          enonce:
            "Écrivez un programme qui calcule la moyenne de trois nombres.",
          cle: `
          let a = 10, b = 20, c = 30; 
          console.log((a + b + c) / 3);`,
        },
        {
          enonce:
            "Utilisez une boucle for pour calculer la somme des nombres de 1 à 100.",
          cle: `
          let sum = 0; 
          for (let i = 1; i <= 100; i++) { 
            sum += i; 
           } 
           console.log(sum);`,
        },
        {
          enonce:
            "Écrivez un programme qui détermine si un nombre est divisible par 2, 3, les deux, ou aucun.",
          cle: `
          let num = [value]; 
          if (num % 2 === 0 && num % 3 === 0) { 
            console.log('Divisible par 2 et 3'); 
          } else if (num % 2 === 0) { 
            console.log('Divisible par 2'); 
          } else if (num % 3 === 0) { 
            console.log('Divisible par 3'); 
          } else { 
            console.log('Non divisible par 2 ou 3'); 
          }`,
        },
        {
          enonce:
            "Écrivez un programme qui calcule la puissance d'un nombre (sans utiliser la fonction Math.pow).",
          cle: `
          function power(base, exponent) { 
            let result = 1; 
            for (let i = 0; i < exponent; i++) { 
                result *= base; 
            } 
            return result; 
          }`,
        },
        {
          enonce:
            "Écrivez un programme qui compare trois nombres et détermine le plus grand.",
          cle: `
          let x = 5, y = 10, z = 7; 
          console.log(Math.max(x, y, z));`,
        },
      ],
    },
    {
        theme: "Objets et tableaux",
        exercices: 
        [
            {
                enonce: "Définissez un objet voiture avec des propriétés pour la marque, le modèle et l'année, puis affichez ces informations.",
                cle: `
                let voiture = { marque: 'Toyota', modele: 'Corolla', annee: 2020 }; 
                console.log(voiture);`
            },
            {
                enonce: "Écrivez un programme qui crée un tableau de nombres, puis calcule et affiche leur somme.",
                cle: `
                let nombres = [1, 2, 3]; 
                let somme = nombres.reduce((acc, val) => acc + val, 0); 
                console.log(somme);`
            },
            {
                enonce: "Créez un objet personne et accédez à ses propriétés pour afficher son nom et son âge.",
                cle: `
                let personne = { nom: 'Alice', age: 25 }; 
                console.log(personne.nom, personne.age);`
            },
            {
                enonce: "Utilisez une boucle for pour parcourir un tableau de chaînes de caractères et afficher chaque élément.",
                cle: `
                let chaines = ['a', 'b', 'c']; 
                for (let i = 0; i < chaines.length; i++) { 
                    console.log(chaines[i]); 
                }`
            },
            {
                enonce: "Ajoutez une nouvelle propriété à un objet existant et affichez l'objet modifié.",
                cle: `
                let objet = { a: 1 }; 
                objet.b = 2; 
                console.log(objet);`
            },
            {
                enonce: "Écrivez un programme qui recherche un élément spécifique dans un tableau et affiche s'il est présent ou non.",
                cle: `
                let elements = [1, 2, 3]; 
                let recherche = 2; 
                console.log(elements.includes(recherche) ? 'Présent' : 'Absent');`
            },
            {
                enonce: "Créez un objet livre avec une méthode pour afficher le titre et l'auteur du livre.",
                cle: `
                let livre = { 
                    titre: '1984', 
                    auteur: 'George Orwell', 
                    afficher: function() { 
                        console.log(this.titre + ' par ' + this.auteur); 
                    } 
                }; 
                livre.afficher();`
            },
            {
                enonce: "Utilisez la méthode filter pour créer un nouveau tableau à partir d'un tableau existant, contenant uniquement des nombres pairs.",
                cle: `
                let nums = [1, 2, 3, 4]; 
                let pairs = nums.filter(num => num % 2 === 0); 
                console.log(pairs);`
            },
            {
                enonce: "Créez un tableau contenant plusieurs objets, chacun représentant une personne avec un nom et un âge, puis affichez ces informations.",
                cle: `
                let personnes = [{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }]; 
                personnes.forEach(p => console.log(p.nom, p.age));`
            },
            {
                enonce: "Écrivez une fonction pour mélanger aléatoirement les éléments d'un tableau.",
                cle: `
                function melangerTab(arr) { 
                    for (let i = arr.length - 1; i > 0; i--) { 
                        let j = Math.floor(Math.random() * (i + 1)); 
                        let tmp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = tmp;
                    } 
                }`
            }
        ]
    }, {
        theme: "Chaines de caractères",
        exercices: 
        [
            {
                enonce: "Écrivez un programme qui concatène deux chaînes de caractères.",
                cle: `
                let str1 = 'Hello'; 
                let str2 = 'World'; 
                console.log(str1 + ' ' + str2);`
            },
            {
                enonce: "Créez un programme qui affiche la longueur d'une chaîne de caractères donnée.",
                cle: `
                let str = 'Hello'; 
                console.log(str.length);`
            },
            {
                enonce: "Utilisez une méthode pour extraire une partie d'une chaîne de caractères et l'afficher.",
                cle: `
                let str = 'Hello World'; 
                console.log(str.substring(0, 5));`
            },
            {
                enonce: "Écrivez un programme qui inverse l'ordre des caractères d'une chaîne.",
                cle: `
                let str = 'Hello'; 
                console.log(str.split('').reverse().join(''));`
            },
            {
                enonce: "Créez un programme qui remplace un mot spécifique dans une chaîne par un autre mot.",
                cle: `
                let str = 'Bonjour le monde'; 
                console.log(str.replace('Bonjour', 'Salut'));`
            },
            {
                enonce: "Écrivez un programme qui convertit une chaîne en majuscules, puis en minuscules.",
                cle: `
                let str = 'Hello'; 
                console.log(str.toUpperCase()); 
                console.log(str.toLowerCase());`
            },
            {
                enonce: "Comparez deux chaînes de caractères pour vérifier si elles sont identiques.",
                cle: `
                let str1 = 'test'; 
                let str2 = 'test'; 
                console.log(str1 === str2);`
            },
            {
                enonce: "Créez un programme qui compte le nombre de fois qu'un caractère apparaît dans une chaîne.",
                cle: `
                let str = 'Hello'; 
                let char = 'l'; 
                console.log(str.split(char).length - 1);`
            },
            {
                enonce: "Convertissez une chaîne de caractères en un tableau de ses mots.",
                cle: `
                let str = 'Hello World'; 
                console.log(str.split(' '));`
            },
            {
                enonce: "Écrivez un programme qui formate une date stockée dans une chaîne en format AAAA-MM-JJ vers le format JJ/MM/AAAA.",
                cle: `
                let dateStr = '2024-01-21'; 
                console.log(dateStr.split('-').reverse().join('/'));`
            }
        ]        
    }, 
    {
      theme: "Fonctions",
      exercices: 
      [
        {
            enonce: "Écrivez une fonction qui calcule et retourne l'aire d'un cercle à partir de son rayon.",
            cle: `
            function aireCercle(rayon) { 
              return Math.PI * rayon * rayon; 
            }`,
            exemple: {
                javascript: `console.log(aireCercle(5)); // Affiche l'aire d'un cercle de rayon 5`
            }
        },
        {
          enonce: "Écrire une fonction <em>carre</em> qui prend en paramètre un nombre et retourne son carré.",
          cle : `
            let carre = function(nb){
              return nb*nb;
            }
          `,
          exemple: {
            javascript: `
            console.log(carre(5)); // Output : 25
            console.log(carre(3)); // Output : 9`
          }
        },
        {
            enonce: "Créez une fonction qui prend une chaîne de caractères et la retourne inversée.",
            cle: `
            function inverserChaine(str) { 
              return str.split('').reverse().join(''); 
            }`,
            exemple: {
                javascript: `console.log(inverserChaine('Hello')); // Affiche 'olleH'`
            }
        },
        {
          enonce: "Écrire une fonction <em>moyenne</em> qui prend en paramètre un tableau de nombres et retourne leur moyenne.",
          cle: `
          `,
          exemple: {
            javascript: `
            console.log(moyenne([1, 2, 3])); // Output : 2
            console.log(moyenne([4, 5, 6])); // Output : 5
            `
          }
        },
        {
            enonce: "Élaborez une fonction qui détermine si un nombre est premier ou non.",
            cle: `
            function estPremier(num) { 
              for(let i = 2; i < num; i++) 
                if(num % i === 0) 
                  return false; 
              return num > 1; 
            }`,
            exemple: {
                javascript: `console.log(estPremier(7)); // Affiche true si 7 est premier`
            }
        },
        {
            enonce: "Développez une fonction qui convertit les degrés Celsius en Fahrenheit.",
            cle: `
            function celsiusToFahrenheit(celsius) { 
              return (celsius * 9/5) + 32; 
            }`,
            exemple: {
                javascript: `console.log(celsiusToFahrenheit(0)); // Convertit 0°C en Fahrenheit`
            }
        },
        {
            enonce: "Écrivez une fonction qui trouve le plus grand commun diviseur de deux nombres.",
            cle: `
            function pgcd(a, b) { 
              while(b != 0) { 
                let t = b; 
                b = a % b; 
                a = t; 
              } 
              return a; 
            }`,
            exemple: {
                javascript: `console.log(pgcd(48, 18)); // Affiche le PGCD de 48 et 18`
            }
        },
        {
            enonce: "Utilisez une fonction d'ordre supérieur pour filtrer les nombres pairs d'un tableau.",
            cle: `
            function filtrerPairs(arr) { 
              return arr.filter(num => num % 2 === 0); 
            }`,
            exemple: {
                javascript: `console.log(filtrerPairs([1, 2, 3, 4])); // Affiche [2, 4]`
            }
        },
        {
            enonce: "Créez une fonction d'ordre supérieur qui applique une fonction de transformation à chaque élément d'un tableau.",
            cle: `
            function appliquerTransformation(arr, transform) { 
              return arr.map(transform); 
            }`,
            exemple: {
                javascript: `console.log(appliquerTransformation([1, 2, 3], x => x * 2)); // Affiche [2, 4, 6]`
            }
        },
        {
            enonce: "Élaborez une fonction d'ordre supérieur qui réduit un tableau de nombres en leur somme.",
            cle: `function sommeElements(arr) { 
              return arr.reduce((acc, val) => acc + val, 0); 
            }`,
            exemple: {
                javascript: `console.log(sommeElements([1, 2, 3, 4])); // Affiche 10`
            }
        },
        {
            enonce: "Écrivez une fonction qui génère les n premiers nombres de la suite de Fibonacci.",
            cle: `
            function fibonacci(n) { 
              let fib = [0, 1]; 
              for (let i = 2; i < n; i++) { 
                fib[i] = fib[i - 1] + fib[i - 2]; 
              } 
              return fib; 
            }`,
            exemple: {
                javascript: `console.log(fibonacci(5)); // Affiche [0, 1, 1, 2, 3]`
            }
        },
        {
            enonce: "Développez une fonction qui calcule la factorielle d'un nombre donné.",
            cle: `
            function factorielle(n) { 
              return n < 2 ? 1 : n * factorielle(n - 1); 
            }`,
            exemple: {
                javascript: `console.log(factorielle(5)); // Affiche 120`
            }
        }
      ]
    },
  ];