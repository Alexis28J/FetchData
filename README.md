# FetchData

Lunedì 1 dicembre 2025: Inizione lezione di Fetch Data

N.B.:
- Il metodo .json() in JavaScript viene utilizzato per analizzare e convertire una risposta HTTP testuale in un oggetto JavaScript. Questo è fondamentale quando si recuperano dati da un server tramite una richiesta API, in quanto la risposta viene solitamente ricevuta come una stringa di testo in formato JSON, che deve essere trasformata in un formato comprensibile e manipolabile da JavaScript.

- Una Promise in JavaScript è un oggetto che rappresenta il risultato futuro (successo o fallimento) di un’operazione asincrona. In altre parole, è un “patto” che il codice fa: ti promette che prima o poi avrai un valore (oppure un errore), anche se non è disponibile subito.

Caratteristiche principali

    Stati possibili:

        pending → la promessa è in corso, non ha ancora un risultato.
        fulfilled → l’operazione è riuscita, la promessa ha un valore.
        rejected → l’operazione è fallita, la promessa ha un motivo di errore


    Gestione dei risultati:

       .then() → usato per gestire il caso di successo.
       .catch() → usato per gestire il caso di errore.
       .finally() → eseguito sempre, indipendentemente dal risultato.   


- Un’API (Application Programming Interface) è un insieme di regole e strumenti che permettono a due programmi o sistemi diversi di comunicare tra loro. In pratica, è come un “ponte” che consente a un software di usare funzionalità o dati di un altro software senza dover sapere come è costruito internamente.

 Caratteristiche principali

    Interfaccia → definisce come un programma può “parlare” con un altro (quali funzioni può chiamare, quali dati può inviare o ricevere).

    Astrazione → nasconde la complessità interna: tu usi l’API senza conoscere i dettagli tecnici del sistema dietro.

    Standardizzazione → segue regole precise (ad esempio REST, GraphQL, SOAP) per garantire che diversi sistemi possano capirsi.