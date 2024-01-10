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
    }


]

    