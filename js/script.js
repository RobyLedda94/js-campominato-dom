// TRACCIA  
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// RECUPERO L'ELEMENTO BUTTON DAL DOM

const btn = document.getElementById('start');

// RECUPERO L'ELEMENTO CON ID GRID DAL DOM

const grid = document.getElementById('grid');



// DEFINISCO LE VARIABILI DEL GIOCO

let bombsArray = [];
let score = 0;
let gameOver = false;

// DEFINISCO LA FUNZIONE PER GENERARE 16 NUMERI CASUALI RANDOMICI

function generateBombs(){
    bombsArray = [];
    while (bombsArray.length < 16){
        // GENERO UN NUMERO CASUALE RANDOMICO DA 1 A 100
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);
        // CREO UNA CONDIZIONE DI CONTROLLO, ASSICURA ASSICURA CHE NON CI SIANO DUPLICATI
        if (!bombsArray.includes(randomNumber)){
            // AGGIUNGO LE BOMBE NELL'ARRAY
            bombsArray.push(randomNumber);
            
        } 
    }
    console.log(bombsArray);
}

// DEFINISCO LA FUNZIONE CHE CREA I QUADRATI NELLA GRIGLIA
function createSquare(numero){
        // VARIABILE CREAZIONE ELEMENTO
    let currentSquare = document.createElement('div');
        // ASSEGNO LA CLASSE SQUARE ALL'ELEMENTO CREATO
    currentSquare.classList.add('square');
        // VARIABILE PER CREARE IL TESTO ALL'INTERNO DELL'ELEMTO CREATO
    currentSquare.innerText = numero;
        // AGGIUNGO L'EVENTO CLICK ALLA CELLA (FUNZIONE ANONIMA)
    currentSquare.addEventListener('click', function (){
        // EVITO ULTERIORI CLICK SE IL GIOCO E' FINITO
        if (gameOver) return;
        // STABILISCO LA CONDIZIONE NEL CASO IN CUI TROVO UNA BOMBA 
        if (bombsArray.includes(numero)){
            // LA CELLA CLICCATA DIVENTA ROSSA 
            this.style.backgroundColor = 'red';
            // MESSAGGIO ALL'UNTENTE CHE HA PERSO
            alert(`Hai perso! Il tuo punteggio finale è ${score}`);
            // RESET DELLO SCORE QUANDO L'UTENTE PERDE
            score = 0;
            gameOver = true;
        } else { // STABILISCO LA CONDIZIONE NEL CASO IN CUI L'UTENTE NON TROVA LA BOMBA
            this.style.backgroundColor = 'lightblue';
            // INCREMENTO DEL PUNTEGGIO
            score++;
            // CONDIZIONE CHE STABILISCE LA VITTORIA DEVO STABILIRE CHE TUTTE LE BOMBE PRESENTI NON SONO STATE CLICCATE
            if (score === 100 - 16){
            // MESSAGGIO ALL'UNTENTE CHE HA VINTO
            alert(`Hai vinto! Il tuo punteggio finale è ${score}`);
            gameOver = true;
            }
        }
    });
    return currentSquare;

}

// DICO AL BOTTONE DI RESTARE IN ATTESA DELL'EVENTO 'CLICK'

btn.addEventListener('click', function(){
    // RICHIAMO LA FUNZIONE generateBombs ALL'INTERNO DELL'EVENTO CLICK
    generateBombs();
    // PULISCO LA GRIGLIA PRIMA DI CREARNE UNA NUOVA
    grid.innerHTML = '';
    // RESET DELLE VARIABILI DI GIOCO
    score = 0;
    gameOver = false;
    // ESEGUO UN CICLO DI 100 ITERAZIONI PER CREARE UNA GRIGLIA 10X10
    for (let i = 0; i<100; i++){
        let square = createSquare(i);
        // APPENDO ALL'ELEMENTO GRID GLI ELEMENTI CREATI TRAMITE VARIABILE NEL FILE JS
        grid.append(square);    
    }
})






