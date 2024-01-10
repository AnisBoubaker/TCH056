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

    { //Exemple 2: 
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
    }
]
    