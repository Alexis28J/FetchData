console.log('Ready to Fetch');

//FETCH
//La funzione fetch() in JavaScript serve per inviare richieste di rete al server in modo asincrono, consentendo di recuperare e caricare nuovi dati senza dover ricaricare l'intera pagina web.
//Promise è l'oggetto che gestisce il risultato di questa operazione asincrona. Le Promise sono il meccanismo fondamentale per gestire operazioni che richiedono tempo, come le chiamate di rete.
//fetch restituisce una Promise, che può avere successo o fallire. 
//Questo approccio consente al browser di continuare a eseguire altre operazioni mentre si attende la risposta del server, rendendo il codice più reattivo e moderno rispetto alle vecchie chiamate.

function manageResponse(response) {
    const jsonResult = response.json();  //response.json() è un metodo che legge il corpo della risposta e lo converte in JSON (anche questo restituisce una Promise). 
    return jsonResult;   //La funzione quindi prende la risposta, la trasforma in JSON e la ritorna.
}
//In pratica: prende la risposta grezza e la prepara come oggetto JavaScript.


function manageResult(result) {
    console.log(result);  //Riceve il risultato già convertito in JSON. e lo stampa nella console del browser.
}

//Serve solo a mostrare i dati per verificarli.

fetch('./Assets/Data.json').then(manageResponse).then(manageResult);
////fetch('./Assets/Data.json') fa una richiesta per leggere il file Data.json nella cartella Assets.
////il fetch restituisce una Promise che contiene un oggetto "Response"    
////url (anche relativo-interno) della risorsa che voglio utilizzare 
////.then per fare il callback
////.then(manageResponse) → quando la richiesta è completata, passa la response alla funzione manageResponse, che la converte in JSON.
////.then(manageResult) → quando il JSON è pronto, lo passa a manageResult, che lo stampa.

// È una catena di Promises:
//     fetch → ottieni la risposta.
//     manageResponse → converti in JSON.
//     manageResult → usa i dati (qui li stampa).
//Schema semplificato:  fetch → Response → JSON → console.log

///
//Ora riscriviamolo come lambda che è la forma in cui viene mostrata il maggior delle volte

// fetch('./Assets/Data.json')
// .then(resp => resp.json())
// .then(result => console.log(result));

///
//catch
//Il metodo .catch() in JavaScript serve a gestire gli errori che si verificano all'interno di un blocco di codice o di una Promise. 
//Viene utilizzato per intercettare le eccezioni (errori) e definire un comportamento da eseguire in caso di loro occorrenza, impedendo così che il programma si interrompa in modo anomalo.

// fetch('./Assets/Data.json')
// .then(resp => resp.json())
// .then(result => console.log(result))  //il passo intermedio (il risultato) deve essere gestito, gli altri, di solito, rimangono uguali
// .catch(err => console.error(err));

// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(resp => resp.json())
// .then(result => console.log(result))
// .catch(err => console.error(err));

// fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0')
// .then(resp => resp.json())
// .then(result => console.log(result))
// .catch(err => console.error(err));

/////////////

// fetch('./Assets/Data.json')
// .then(resp => resp.json())
// .then(dataCallback)   // adesso non
// .catch(err => console.error(err));

// function dataCallback(data){   //funzione che
// console.log(data);

// const bookCont = document.getElementById('book-container');

// for (const book of data) {
//     console.log(book.title + ' ' + book.author);
//     bookCont.innerHTML += '<p>Titolo: ' + book.title + 'Autore: ' + book.author + '</p>';
// }

// }

////

// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(resp => resp.json())
// .then(pokemonCallback)
// .catch(err => console.error(err));

// function pokemonCallback(data){

//     const pokemons = data.results;

//     //console.log(pokemons);

//     const pokeContainer = document.getElementById('pokemon-container');

//     for (const pokemon of pokemons) {

//         const pokeP = document.createElement('p');
//         pokeP.appendChild(document.createTextNode(pokemon.name));
//         pokeContainer.appendChild(pokeP);

//     }

// }


////////////////////////////////////////////

fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0')
.then(resp => resp.json())
.then(yugiohCallback)
.catch(err => console.error(err));
//offset - da vove inizia - in questo caso dalla prima pagina (0)
//num - quantità di dati che può mostrare per pagina
//I "meta" ci permettono di fare le cosiddette paginate




function yugiohCallback(result) {

    const yugiohCards = result.data; //array di carte //la proprietà "data" contiene l'array di carte
    //console.log(yugiohCards);

    const yugiohCont = document.getElementById('yugioh-container');

    for (const cards of yugiohCards) {

        const yugiohDiv = document.createElement('div');
        yugiohDiv.classList.add('yugiohDiv');
        yugiohCont.appendChild(yugiohDiv);

        const yugiohImg = document.createElement('img');
        yugiohImg.src = cards.card_images[0].image_url;
        //la proprietà "card_images" è un array di immagini, prendo la prima immagine e il suo URL
        //.src per impostare la sorgente dell'immagine
        yugiohImg.classList.add('yugiohImg');
        yugiohDiv.appendChild(yugiohImg);

        const yugiohName = document.createElement('p');
        yugiohName.appendChild(document.createTextNode(cards.name));
        yugiohDiv.appendChild(yugiohName);

        const yugiohType = document.createElement('p');
        yugiohType.appendChild(document.createTextNode("Type: " + cards.type));
        yugiohDiv.appendChild(yugiohType);

        const yugiohDesc = document.createElement('p');
        yugiohDesc.appendChild(document.createTextNode("Description: " + cards.desc));
        yugiohDiv.appendChild(yugiohDesc);

        const yugiohPrice = document.createElement('p');
        yugiohPrice.appendChild(document.createTextNode('Card Price: ' + cards.card_prices[0].cardmarket_price));
        //[0] perché "card_prices" è un array di prezzi da diversi mercati, prendo il primo prezzo (cardmarket_price)
        yugiohDiv.appendChild(yugiohPrice);
    }

}

