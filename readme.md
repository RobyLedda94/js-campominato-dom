Esercizio di oggi: *Campo Minato*


nome repo: *js-campominato-dom*


*Consegna*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


<!-- PSEUDO CODICE -->

1 - SUDDIVIDO IN 2 MACRO AREE LA STRUTTURA HTML (HEADER - MAIN)
2 - NELLA PARTE HEADER CREO UN ELEMENTO BOTTONE CHE AVVIA IL GIOCO
3 - NELLA PARTE MAIN CREO UN CONTENITORE GRIGLIA DOVE VERRA MOSTRATO IL LAYOUT
4 - RECUPERO NEL FILE JS GLI ELEMENTI DAL DOM (BOTTONE E GRID)
5 - ASSEGNO L'EVENTO CLICK AL BOTTONE RECUPERATO NEL DOM

6 - CREO UN CICLO FOR CON 100 ITERAZIONI 
6.1 - ALL'INTERNO DEL CICLO FOR CREO UNA VARIABILE CHE MI CONSENTE DI CREARE UN ELEMENTO CHE RAPPRESENTERA' A LAYOUT I QUADRATI DELLA GRIGLIA
6.2 - SEMPRE DENTRO AL CICLO FOR APRO UNA VARIABILE CHE INNIETTA DEL TESTO ALL'INTERNO DEGLI ELEMENTI CREATI
6.3 - APPENDO ALL'ELEMENTO GRID I QUADRATI CHE LO COMPONGONO
6.4 - ASSEGNO LA CLASSE SQUARE ALL'ELEMENTO CREATO
7 - DEFINISCO LA FUNZIONE CHE CREA I QUADRATI
8 - PULISCO LA GRIGLIA PRIMA DI CREARNE UNA NUOVA
9 - AGGIUNGO L'EVENTO CLICKED ALLA CELLA
9.1 - AGGIUNGO IL TOGGLE ALL'EVENTO CLICKED DELLA CELLA
<!-- A QUESTO PUNTO NEL LAYOUT VERRANNO RAPPRESENTATI SOLAMENTE UNA SEQUENZA DI NUMERI DA 1 FINO A 100 -->

10 - STILIZZO NEL FILE CSS L'ELEMENTO GRID
11 - STILIZZO LA CLASSE SQUARE
12 - CREO LA CLASSE CLICKED


<!-- PSEUDO CODICE CAMPO MINATO -->

1 - DEFINISCO LE VARIABILI DI GIOCO
1.1 CREO UN ARRAY VUOTO CHE CONTIENE LE POSIZIONI DELLE BOMBE
1.2 DEFINISCO LA VARIABILE CHE INDICA IL PUNTEGGIO DEL GIOCATORE
2 - DEFINISCO LA FUNZIONE PER GENERARE 16 NUMERI CASUALI 
2.1 - ALL'INTERNO DELLA FUNZIONE DEFINISCO UN CICLO WHILE
