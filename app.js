const poker = require('poker-hands');

function createDeck() {
    var naipes = ['H', 'C', 'D', 'S'];
    var categorias = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    var deck = [];
    
    for(var naipesCounter = 0; naipesCounter < 4; naipesCounter++) {
        for(var categoriasCounter = 0; categoriasCounter < 13; categoriasCounter++) {
            deck.push(categorias[categoriasCounter] + naipes[naipesCounter]);
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for(var i = 0; i < 52; i++) {
        var tempCard = deck[i];
        var randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
}

var counter = 0;

//cria um loop que embaralha um baralho, remove as primeiras 5 cartas e determina a força da mão
do {
    var testDeck = createDeck();
    shuffleDeck(testDeck);
    
//cria uma mão de pôquer de 5 cartas com as primeiras 5 cartas em nosso baralho embaralhado
    var fiveCardHand = testDeck.splice(0, 5);
    /* console.log(fiveCardHand); */
    
    
//converte a matriz de 5 cartas em uma string, com cada carta separada por um espaço
    var fiveCardHandString = fiveCardHand.join(' ');
    console.log(fiveCardHandString);
    
    
//instale a biblioteca de mãos de pôquer e use seus métodos para identificar uma mão de pôquer
    console.log('the hand is ' + poker.getHandStrength(fiveCardHandString));
    counter++;
} while(poker.getHandStrength(fiveCardHandString) > 0);

// conte quantas vezes fazemos loop até obter um royal flush
console.log('it look ' + counter + 'times!')

