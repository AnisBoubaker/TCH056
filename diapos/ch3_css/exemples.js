exemples = [
    { //Exemple 0: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.boxes{
    border: 3px solid lightgrey;
}
.box{
    width: 5rem;
    height: 5rem;
}
.un{
    background-color: gold;
}

.deux{
    background-color: dodgerblue;
}

.trois{
    background-color: tomato;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="boxes">
    <div class="box un"></div>
    <div class="box deux"></div>
    <div class="box trois"></div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    }, 

    { //Exemple 1: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.boxes{
    border: 3px solid lightgrey;
}
.box{
    width: 5rem;
    height: 5rem;
}
.un{
    background-color: gold;
}

.deux{
    background-color: dodgerblue;
    position: relative;
    left: 3rem;
    top: -2rem;
    /* Remarquez que l'espace normalement occupé par le div selon 
    le flux normal reste réservé, mais vide.*/
}

.trois{
    background-color: tomato;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="boxes">
    <div class="box un"></div>
    <div class="box deux"></div>
    <div class="box trois"></div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    }, 

    { //Exemple 2: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.boxes{
    border: 3px solid lightgrey;
    /*IMPORTANT: Le conteneur doit avoir une position relative pour que le 
    positionnement absolute fonctionne!*/
    position: relative;
}
.box{
    width: 5rem;
    height: 5rem;
}
.un{
    background-color: gold;
}

.deux{
    background-color: dodgerblue;
    position: absolute;
    right: 0;
    bottom: 0;
    /* Remarquez que l'espace normalement occupé par le div selon 
    le flux normal n'est PAS réservé.*/
}

.trois{
    background-color: tomato;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="boxes">
    <div class="box un"></div>
    <div class="box deux"></div>
    <div class="box trois"></div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    },

    { //Exemple 3: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.body{
    height: 800px;
}
.boxes{
    border: 3px solid lightgrey;
    height: 50rem;
    margin: 10px;
}
.box{
    width: 5rem;
    height: 5rem;
}
.un{
    background-color: gold;
}

.deux{
    background-color: dodgerblue;
    position: fixed;
    top: 0;
    left: 2rem;
    right: 2rem;
    width: auto;
}

.trois{
    background-color: tomato;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="boxes">
    <div class="box un"></div>
    <div class="box deux"></div>
    <div class="box trois"></div>
</div>
<div class="boxes">
    <div class="box un"></div>
    <div class="box trois"></div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    } ,

    { //Exemple 4: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.une_image{
    height: 5rem;
    width: 5rem;
    background-color: gold;
    float: left;
}

            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <div class="une_image"></div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Libero necessitatibus adipisci tempore distinctio nisi, quidem 
    animi numquam et molestias alias hic nemo facilis atque amet a
    similique maiores quisquam consequatur saepe sunt. Distinctio 
    libero aperiam totam commodi alias, modi temporibus quis quas? 
    Ratione quos assumenda ut at exercitationem nemo quibusdam officia tempore, 
    fugiat aspernatur recusandae voluptatem velit, blanditiis a sed minima suscipit 
    aliquam soluta autem nihil fugit veniam doloribus? Porro architecto officiis cumque 
    odit cum nisi et eligendi, possimus, consequatur ratione, eveniet dicta error itaque. 
    Provident nobis eum beatae rerum laboriosam dolorum voluptate, necessitatibus 
    sed tempore quas architecto odio omnis qui quo minus maiores rem praesentium 
    optio ea dolores! Sed, consequatur amet. Veniam distinctio voluptate ipsam ad 
    voluptates ducimus minima dolorem sed magnam earum placeat perferendis sint quis 
    quidem, minus et voluptatibus? Nesciunt cum perspiciatis, praesentium earum impedit 
    esse numquam odit rerum modi dolore possimus animi illo exercitationem. Animi aut 
    voluptate optio. Nisi quidem laboriosam modi enim esse quo necessitatibus, 
    quisquam odit! Autem adipisci eaque maiores impedit alias nobis quo eum reiciendis, 
    ab explicabo sapiente id doloribus, atque quia molestias voluptatibus. 
    Magnam accusamus voluptates, inventore, modi dolores debitis praesentium 
    aliquam perferendis eveniet, porro culpa animi tenetur vitae dolorem veniam incidunt.</p>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    } ,

    { //Exemple 5: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    padding: 10px;
    border: 1px solid lightcoral;
    display: flex;
    flex-direction: row;
    justify-content: flex-start; /* Valeur par défaut */
    /*Expérimentez avec les valeurs: 
    - flex-start
    - flex-end
    - center
    - space-between
    - space-around
    - space-evenly*/
}
.boite{
    width: 5rem;
    height: 5rem; 
    margin: 10px;
    background-color: gold;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <div class="boite">A</div>
    <div class="boite">B</div>
    <div class="boite">C</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    } ,

    { //Exemple 6: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    height: 50vh;
    padding: 10px;
    border: 1px solid lightcoral;
    display: flex;
    flex-direction: row;
    justify-content: flex-start; 
    align-items: start;
    /* Expérimentez avec les valeurs: 
    - start
    - end
    - center
    - stretch
    - normal*/
}
.boite{
    width: 5rem;
    margin: 10px;
    padding: 1rem;
    background-color: gold;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <div class="boite">A</div>
    <div class="boite">B</div>
    <div class="boite">C</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    } ,

    { //Exemple 7: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    height: 50vh;
    padding: 10px;
    border: 1px solid lightcoral;
    display: flex;
    flex-direction: row;
    justify-content: flex-start; 
    align-items: center;
}
.boite{
    width: 5rem;
    margin: 10px;
    padding: 1rem;
    background-color: gold;
}

.delinquante{
    align-self: start;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <div class="boite">A</div>
    <div class="boite delinquante">B</div>
    <div class="boite">C</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    },

    { //Exemple 8: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    height: 50vh;
    padding: 10px;
    border: 1px solid lightcoral;
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: start;
    /* Décommentez et expérimentez avec les lignes ci-dessous */
    /*
    flex-wrap: wrap; 
    align-content: center;
    */
}
.boite{
    width: 5rem;
    margin: 10px;
    padding: 1rem;
    background-color: gold;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <div class="boite">A</div>
    <div class="boite">B</div>
    <div class="boite">C</div>
    <div class="boite">D</div>
    <div class="boite">E</div>
    <div class="boite">F</div>
    <div class="boite">G</div>
    <div class="boite">H</div>
    <div class="boite">I</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    } ,

    { //Exemple 9: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    height: 50vh;
    padding: 10px;
    border: 1px solid lightcoral;
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: start;
}
.boite{
    /* Remarquez que les boites font 10rem de large,
    bien que width spécifie 5rem.*/
    flex-basis: 10rem;
    width: 5rem;
    margin: 10px;
    padding: 1rem;
    background-color: gold;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <div class="boite">A</div>
    <div class="boite">B</div>
    <div class="boite">C</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    },

    { //Exemple 10: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    height: 50vh;
    padding: 10px;
    border: 1px solid lightcoral;
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: start;
}
.boite{
    /* Remarquez que les boites font 10rem de large,
    bien que width spécifie 5rem.*/
    flex-basis: 3rem;
    width: 5rem;
    margin: 10px;
    padding: 1rem;
    background-color: gold;
}

.un{
    flex-grow: 1;
    flex-shrink: 1;
}

.deux{
    flex-grow: 2;
    flex-shrink: 0;
}

.trois{
    /* flex: grow shrink basis*/
    flex: 1 1 4rem;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <div class="boite un">A</div>
    <div class="boite deux">B</div>
    <div class="boite trois">C</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    },

    { //Exemple 11: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    border: 1px solid lightcoral;
    display: grid;
    grid-template-rows: 5rem 20rem 5rem;
    grid-template-columns: 20% 80%;
    /* Ou avec une ligne grid-template: */
    /*grid-template: 5rem 20rem 5rem / 20% 80%; */
}
.boite{
    background-color: gold;
    font-weight: bold;
    text-align: center;
    border: 1px solid black;
}

            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <div class="boite">A</div>
    <div class="boite">B</div>
    <div class="boite">C</div>
    <div class="boite">D</div>
    <div class="boite">E</div>
    <div class="boite">F</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    },

    { //Exemple 12: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    border: 1px solid lightcoral;
    display: grid;
    grid-template: 5rem 20rem 5rem / 20% 80%; 
    
    /* Notez que la valeur par défaut ici c'est stretch, ce qui grossit
    l'élément pour atteindre la taille de la cellule (sauf si l'élément a
    une taille déjà définie.) */
    justify-items: center;
    align-items: end;
}
.boite{
    height: 3rem;
    width: 3rem;
    background-color: gold;
    font-weight: bold;
    text-align: center;
    border: 1px solid black;
    
    /* Il est aussi possible de le faire l'alignement directement dans 
    la cellule concernée avec ces deux déclarations */
    /*justify-self: center;
    align-self: center;*/
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <div class="boite">A</div>
    <div class="boite">B</div>
    <div class="boite">C</div>
    <div class="boite">D</div>
    <div class="boite">E</div>
    <div class="boite">F</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    } ,

    { //Exemple 13: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    border: 1px solid lightcoral;
    display: grid;
    height: 35rem;
    grid-template: 5rem 20rem 5rem / 20% 40%; 
    
    justify-items: center;
    align-items: end;

    /* Utilisez l'inspecteur pour afficher l'overlay de la grille 
    pour bien apprécier ce qui se passe */
    justify-content: center;
    align-content: top;
}
.boite{
    height: 3rem;
    width: 3rem;
    background-color: gold;
    font-weight: bold;
    text-align: center;
    border: 1px solid black;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <div class="boite">A</div>
    <div class="boite">B</div>
    <div class="boite">C</div>
    <div class="boite">D</div>
    <div class="boite">E</div>
    <div class="boite">F</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    },

    { //Exemple 14: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    width: 20rem;
    border: 1px solid lightcoral;
    display: grid;
    grid-template-rows: 5rem 20rem 5rem;
    /* 
    Constatez que la grille dépasse les limtes du conteneur
    (qui a un bord couleur corail)
    Remplacez les % par des fr et observez
    le résultat*/
    grid-template-columns: 100px 20% 80%; 
}
.boite{
    background-color: gold;
    font-weight: bold;
    text-align: center;
    border: 1px solid black;
}    
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <div class="boite">A</div>
    <div class="boite">B</div>
    <div class="boite">C</div>
    <div class="boite">D</div>
    <div class="boite">E</div>
    <div class="boite">F</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    } ,

    { //Exemple 15: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    width: 20rem;
    border: 1px solid lightcoral;
    display: grid;
    grid-template-rows: 5rem 20rem 5rem;
    grid-template-columns: 100px 20fr 80fr; 
}
.boite{
    background-color: gold;
    font-weight: bold;
    text-align: center;
    border: 1px solid black;
}    

.boite-a{
    grid-column: 2 / 4;
    grid-row: 1;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <div class="boite boite-a">A</div>
    <div class="boite">B</div>
    <div class="boite">C</div>
    <div class="boite">D</div>
    <div class="boite">E</div>
    <div class="boite">F</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    } ,

    { //Exemple 16: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    height: 100vh;
    border: 1px solid lightcoral;
    display: grid;
    grid-template-rows: 4rem auto 4rem;
    grid-template-columns: 100px 80fr 20fr; 
    grid-template-areas: 
        "entete entete    entete"
        "menu   principal connexe"
        "bas    bas       connexe"
}
.zone-page{
    background-color: gold;
    font-weight: bold;
    text-align: center;
    border: 1px solid black;
}    

.entete{
    grid-area: entete;
}

.navigation{
    grid-area: menu;
}

.connexe{
    grid-area: connexe;
}

.pied-page{
    grid-area: bas;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <header class="zone-page entete">En-tête</header>
    <nav class="zone-page navigation">Menu du site</nav>
    <main class="zone-page principal">Section principale du site</main>
    <aside class="zone-page connexe">Liens et informations connexes à la page</aside>
    <div class="zone-page pied-page">Pied de page</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    },

    { //Exemple 17: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
.conteneur{
    height: 100vh;
    border: 1px solid lightcoral;
    display: grid;
    grid-template-rows: 4rem auto 4rem;
    grid-template-columns: 100px 80fr 20fr; 
    grid-template-areas: 
        "entete entete    entete"
        "menu   principal connexe"
        "bas    bas       connexe"
}
.zone-page{
    background-color: gold;
    font-weight: bold;
    text-align: center;
    border: 1px solid black;
}    

.entete{
    grid-area: entete;
    display: flex;
    justify-content: space-between;
    align-items: center
}

.logo{
    align-self: start;
    margin-left: 1rem;
}

.login_links{
    align-self: start;
    margin-right: 1rem;
}

.navigation{
    grid-area: menu;
}

.connexe{
    grid-area: connexe;
}

.pied-page{
    grid-area: bas;
}
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <header class="zone-page entete">
        <div class='logo'>Logo</div>
        <div>Titre du site</div>
        <div class='login_links'>Login</div>
    </header>
    <nav class="zone-page navigation">Menu du site</nav>
    <main class="zone-page principal">Section principale du site</main>
    <aside class="zone-page connexe">Liens et informations connexes à la page</aside>
    <div class="zone-page pied-page">Pied de page</div>
</div>
            `
        }],
        links: [],
        selected: 'app.css'
    }  ,

    { //Exemple 18: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: `
@media screen
{
    .conteneur{
        /*height: 100vh;*/
        border: 1px solid lightcoral;
        display: grid;
        grid-template-rows: 4rem auto auto auto 4rem;
        grid-template-columns: auto; 
        grid-template-areas: 
            "entete"
            "principal"
            "menu"
            "connexe"
            "bas"
    }
    .zone-page{
        background-color: gold;
        font-weight: bold;
        text-align: center;
        border: 1px solid black;
    }    

    .entete{
        grid-area: entete;
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    .logo{
        display: none;
    }

    .login_links{
        margin-right: 1rem;
    }

    .navigation{
        grid-area: menu;
    }

    .connexe{
        grid-area: connexe;
    }

    .pied-page{
        grid-area: bas;
    }
}

@media screen and (min-width: 600px)
{
    .conteneur{
        height: 100vh;
        border: 1px solid lightcoral;
        display: grid;
        grid-template-rows: 4rem auto 4rem;
        grid-template-columns: 100px 80fr 20fr; 
        grid-template-areas: 
            "entete entete    entete"
            "menu   principal connexe"
            "bas    bas       connexe"
    }
    .zone-page{
        background-color: gold;
        font-weight: bold;
        text-align: center;
        border: 1px solid black;
    }    

    .entete{
        grid-area: entete;
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    .logo{
        align-self: start;
        margin-left: 1rem;
    }

    .login_links{
        align-self: start;
        margin-right: 1rem;
    }

    .navigation{
        grid-area: menu;
    }

    .connexe{
        grid-area: connexe;
    }

    .pied-page{
        grid-area: bas;
    }
}         
            `
        }, {
            name: 'app.html',
            content: `
<div class="conteneur">
    <header class="zone-page entete">
        <div class='logo'>Logo</div>
        <div>Titre du site</div>
        <div class='login_links'>Login</div>
    </header>
    <nav class="zone-page navigation">Menu du site</nav>
    <main class="zone-page principal">
        <h2>
        Section principale du site
        </h2>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus facere, numquam alias doloribus amet quam nostrum, blanditiis ea voluptatem et possimus minus id voluptas omnis quae pariatur distinctio eum sapiente. Voluptatum reprehenderit aperiam quasi dolores impedit cum nam, nostrum commodi voluptas pariatur veritatis blanditiis, expedita nulla doloremque iste ad maiores!
        </p>
    </main>
    <aside class="zone-page connexe">Liens et informations connexes à la page</aside>
    <div class="zone-page pied-page">Pied de page</div>
</div>
            
            `
        }],
        links: [],
        selected: 'app.css'
    }  ,
    { //Exemple 19: (Exercice 1) 
        files: [ {
            name: 'app.css',
            editable : true,
            content: ``
        }, {
            name: 'app.html',
            editable : false,
            content: `

<h1 id="titre-principal">Bienvenue sur Mon Site Web</h1>
<p class="info">Ceci est une information importante.</p>
<p class="alerte">Attention à ce message d'alerte !</p>
<p class="succes">Vous avez réussi l'action demandée.</p>
<ul>
    <li>Élément 1</li>
    <li>Élément 2</li>
    <li>Élément 3</li>
</ul>
<button id="bouton-action">Cliquez ici</button>
            
            `
        },{
            name: 'instructions.txt',
            editable : false,
            content: `
==== EXERCICE 1 ====

Questions :

1) Sélectionnez le <h1> par son ID et changez sa couleur en "violet".
2) Appliquez une marge de "15px" à tous les paragraphes <p>.
3) Utilisez un sélecteur de classe pour colorer le texte du paragraphe 
avec la classe "alerte" en "orange".
4) Donnez une couleur de fond "gris clair" à tous les éléments de liste <li>.
5) Sélectionnez le bouton par son ID et changez son texte en gras.

            `
        }],
        links: [],
        selected: 'instructions.txt'
    } ,
    { //Exemple 20: (Exercice 2) 
        files: [ {
            name: 'app.css',
            editable : true,
            content: ``
        }, {
            name: 'app.html',
            editable : false,
            content: `
<div class="conteneur">
    <h1>Bienvenue</h1>
    <p>Ceci est le paragraphe principal de la section.</p>
    <div class="sous-section">
        <p>Ceci est un paragraphe dans la sous-section.</p>
        <ul>
            <li>Liste Item 1</li>
            <li>Liste Item 2
                <ul>
                    <li>Sous-liste Item 1</li>
                    <li>Sous-liste Item 2</li>
                </ul>
            </li>
            <li>Liste Item 3</li>
        </ul>
    </div>
</div>
<p>Ceci est un paragraphe en dehors de .conteneur.</p>            
            `
        },{
            name: 'instructions.txt',
            editable : false,
            content: `
==== EXERCICE 2 ====

Questions :

1) Utilisez un sélecteur descendant pour changer la couleur 
du texte de tous les <p> à l'intérieur de la classe .conteneur 
en bleu.

2) Appliquez une bordure de 1px en pointillés aux <ul> qui 
sont des descendants directs de .sous-section.

3) Changez la couleur de fond de tous les <li> qui sont des 
descendants de .sous-section en jaune clair.

4) Utilisez un sélecteur descendant pour changer la couleur 
du texte de tous les <li> à l'intérieur des sous-listes <ul> 
de .sous-section en rouge.

5) Assurez-vous que le <p> qui est en dehors de .conteneur 
ne soit pas affecté par les styles appliqués aux <p> à 
l'intérieur de .conteneur.
            `
        }],
        links: [],
        selected: 'instructions.txt'
    },
    { //Exemple 21: (Exercice 3) 
        files: [ {
            name: 'app.css',
            editable : true,
            content: ``
        }, {
            name: 'app.html',
            editable : false,
            content: `
<h1>Titre Principal</h1>
<p class="important">Ce paragraphe est important.</p>
<p>Ce paragraphe est standard.</p>
<p class="important">Un autre paragraphe important.</p>
<a href="https://exemple.com" target="_blank">Lien Externe</a>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
            `
        },{
            name: 'instructions.txt',
            editable : false,
            content: `
==== EXERCICE 3 ====

Questions :

1) Utilisez le sélecteur de frère adjacent (+) pour changer la 
couleur du paragraphe qui suit immédiatement un paragraphe avec 
la classe "important" en vert.

2) Appliquez un style aux liens (<a>) qui s'ouvrent dans un nouvel 
onglet (attribut target="_blank") pour qu'ils soient en gras.

3) Changez la couleur du premier élément de la liste (<li>) en rouge 
en utilisant une pseudo-classe.
            `
        }],
        links: [],
        selected: 'instructions.txt'
    },
    { //Exemple 22: (Exercice 4) 
        files: [ {
            name: 'app.css',
            editable : true,
            content: ``
        }, {
            name: 'app.html',
            editable : false,
            content: `
<div class="conteneur">
    <h2>Titre de la Section</h2>
    <p>Paragraphe 1</p>
    <p>Paragraphe 2</p>
    <p class="special">Paragraphe Spécial</p>
</div>
<p>Paragraphe hors de .conteneur</p>
<input type="checkbox" id="check1">
<label for="check1">Cliquez moi</label>
            `
        },{
            name: 'instructions.txt',
            editable : false,
            content: `
==== EXERCICE 4 ====

Questions :

1) Utilisez le sélecteur de frère général (~) pour changer 
la couleur de tous les paragraphes suivant le <h2> en orange.

2) Appliquez un style au paragraphe avec la classe "special" 
pour qu'il ait une bordure en pointillés.

3) Changez la couleur du texte du label lorsque la case à cocher 
associée est cochée (utilisez une pseudo-classe).
            `
        }],
        links: [],
        selected: 'instructions.txt'
    } ,
    { //Exemple 23: (Exercice 5) 
        files: [ {
            name: 'app.css',
            editable : true,
            content: ``
        }, {
            name: 'app.html',
            editable : false,
            content: `
<div class="flex-container">
    <div class="box">Boîte 1</div>
    <div class="box">Boîte 2</div>
    <div class="box">Boîte 3</div>
</div>
            `
        },{
            name: 'instructions.txt',
            editable : false,
            content: `
==== EXERCICE 5 ====

Questions :

0) Donnez une couleur de fond "lightcoral" aux 
boites (box) de la page. 


1) Faites en sorte que .flex-container soit un 
conteneur Flexbox.

2) Utilisez justify-content pour répartir les 
boîtes (box) de manière égale dans le conteneur.

3) Appliquez align-items pour aligner les boîtes 
au centre du conteneur sur l'axe orthogonal.

4) Définissez flex-basis pour la deuxième boîte 
(Boîte 2) à 200px.
            `
        }],
        links: [],
        selected: 'instructions.txt'
    },
    { //Exemple 24: (Exercice 6) 
        files: [ {
            name: 'app.css',
            editable : true,
            content: ``
        }, {
            name: 'app.html',
            editable : false,
            content: `
<div class="grid-container">
    <header class="header">En-tête</header>
    <aside class="sidebar">Barre latérale</aside>
    <main class="main-content">Contenu principal</main>
    <footer class="footer">Pied de page</footer>
</div>
            `
        },{
            name: 'instructions.txt',
            editable : false,
            content: `
==== EXERCICE 6 ====

Questions :

1) Transformez .grid-container en un conteneur de grille 
avec deux colonnes et trois lignes.

2) Utilisez grid-template-areas pour structurer la grille 
de la manière suivante :

  a. La première ligne contient l'en-tête (header) qui 
  s'étend sur deux colonnes.

  b. La deuxième ligne contient la barre latérale (sidebar) 
  dans la première colonne et le contenu principal (main-content) 
  dans la seconde.

  c. La troisième ligne contient le pied de page (footer) qui 
  s'étend sur deux colonnes.

3) Assurez-vous que chaque zone de la grille correspond à sa 
classe respectivement nommée (par exemple, la zone "header" pour l'en-tête).
            `
        }],
        links: [],
        selected: 'instructions.txt'
    }
]

    