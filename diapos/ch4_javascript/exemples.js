var codeHTMLBase = `
<header>
    <h1>Manipulation du DOM en JavaScript</h1>
</header>
<nav>
    <ul>
        <li><a href="#article1">Article 1</a></li>
        <li><a href="#article2">Article 2</a></li>
        <li><a href="#article3">Article 3</a></li>
    </ul>
</nav>
<main>
    <article id="article1">
        <h2>Titre de l'article 1</h2>
        <p>Contenu de l'article 1...</p>
    </article>
    <article id="article2">
        <h2>Titre de l'article 2</h2>
        <p>Contenu de l'article 2...</p>
    </article>
    <article id="article3">
        <h2>Titre de l'article 3</h2>
        <p>Contenu de l'article 3...</p>
    </article>
</main>
<aside>
    <h3>Informations supplémentaires</h3>
    <p>Quelques informations ici...</p>
</aside>
<footer>
    <p>© 2024 École de Technologie Supérieure. Tous droits réservés.</p>
</footer>`;

var codeCSSBase = `

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
    background-color: #f4f4f4;
}

header, nav, main, aside, footer {
    padding: 20px;
    margin: 10px;
}

header {
    background-color: #007bff;
    color: white;
    text-align: center;
}

nav {
    background: #333;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 10px;
}

nav a {
    text-decoration: none;
    color: white;
}

article {
    background-color: white;
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

aside {
    background-color: #e9ecef;
    padding: 15px;
}

footer {
    text-align: center;
    background-color: #007bff;
    color: white;
}

@media (max-width: 600px) {
    nav ul li {
        display: block;
        margin-bottom: 10px;
    }
}
`;

exemples = [
    { //Exemple 0: 
        files: [ {
            name: 'app.css',
            editable : true,
            content: codeCSSBase
        }, {
            name: 'app.html',
            editable : true,
            content: codeHTMLBase
        }, {
            name: 'app.js',
            editable : true,
            content: `

//console.log(document.getElementById('article1').innerHTML);
//console.log('----------');
//console.log(document.getElementById('article1').innerText);
//console.log('----------');
//console.log(document.getElementById('article1').textContent);
            `
        }],
        links: [],
        selected: 'app.js'
    }
]

    