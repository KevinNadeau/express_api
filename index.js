const express = require('express');
const fs = require('fs').promises;

const app = express();
const v1 = express.Router();

app.use('/api/v1', v1);

//Request: requête Http (reçu du client)
//réponse: réoponse Http (à envoyer au client, en retour)
v1.get('/message', async(request, response) => {
    /*response.send([{
            "quote": "Tous les mêmes",
            "author": "Kevin Nadeau",
            "id": 1
        },
        {
            "quote": "Tous les couler",
            "author": "Ratpi",
            "id": 2
        }
        
    ])
       */
    const quotes = await fs.readFile('./data/quotes.json');
    //response.setHeader('content-type', 'application/json');
    response.send(JSON.parse(quotes));
});

v1.get('/message/:id', async(request, response) => {
    const quotes = await fs.readFile('./data/quotes.json');
    const quotesArray = JSON.parse(quotes);
    //récupérer la citation qui correspond à l'id transmis
    const id = request.params.id;
    const quote = quoteArray.find(function(currentQuote) {

    });
    response.send(quote);
});

app.listen(3000, () => {
    console.log('Server listennig on port 3000');
})