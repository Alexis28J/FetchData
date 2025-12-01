console.log('Ready to Fetch');

//FETCH
//La funzione fetch() in JavaScript serve per inviare richieste di rete al server in modo asincrono, consentendo di recuperare e caricare nuovi dati senza dover ricaricare l'intera pagina web.


// function manageResponse(response){    
//          const jsonResult = response.json();    
//          return jsonResult;
// }


// function manageResult(result){
//     console.log(result);
// }


// fetch('./Assets/Data.json').then(manageResponse).then(manageResult);     
//url (anche relativo-interno) della risorsa che voglio utilizzare 
//.then per fare il callback

//Ora riscriviamolo come lambda che è la forma in cui viene mostrata il maggior delle volte

// fetch('./Assets/Data.json')
// .then(resp => resp.json())
// .then(result => console.log(result));


//catch
//Il metodo .catch() in JavaScript serve a gestire gli errori che si verificano all'interno di un blocco di codice o di una Promise. 
//Viene utilizzato per intercettare le eccezioni (errori) e definire un comportamento da eseguire in caso di loro occorrenza, impedendo così che il programma si interrompa in modo anomalo.

fetch('./Assets/Data.json')
.then(resp => resp.json())
.then(result => console.log(result))
.catch(err => console.error(err));


fetch('https://pokeapi.co/api/v2/pokemon')
.then(resp => resp.json())
.then(result => console.log(result))
.catch(err => console.error(err));

fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
.then(resp => resp.json())
.then(result => console.log(result))
.catch(err => console.error(err));