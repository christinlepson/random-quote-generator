var quotes = [
    {
        quote: 'Courage is resistance to fear, mastery of fear, not absence of fear.',
        source: 'Mark Twain',
        citation: 'BrainyQuote'
    },
    {
        quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
        source: 'Dr. Seuss',
        year: '1968'
    },
    {
        quote: 'I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.',
        source: 'Herbert Bayard Swope'
    },
    {
        quote: 'Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.',
        source: 'Lucille Ball'
    },
    {
        quote: 'Love is a serious mental disease.',
        source: 'Plato'
    },
];

var getRandomQuote = function(array) {
    // generate a random number with quote array length
    var randomNumber = Math.floor( Math.random() * array.length );
    // use the random number to `return` a random quote object
    return array[randomNumber];
};

var printQuote = function() {
    //use the properties of the quote object stored in the variable to create HTML string
    var quote = getRandomQuote(quotes);
    var html = '<p class="quote">';
    html += quote.quote + '</p>';
    html += '<p class="source">' + quote.source;
    // use conditionals to make sure the year property exists before they are added to the HTML string
    if (quote.citation) {
        html += '<span class="citation">' + quote.citation + '</span>';
    }
    if (quote.year) {
        html += '<span class="year">' + quote.year + '</span>';
    }
    html += '</p>';
    // set the `innerHTML` of the `quote-box` div to the HTML string
    document.getElementById('quote-box').innerHTML = html;
};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);