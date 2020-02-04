/***
Project 1 - A Random Quote Generator ***/
/*** 'random_bg_color' generates a random background color ***/
function random_bg_color() {
	/*** 'red' creates a random Red number value ***/
	var red = Math.floor( Math.random() * 256 );
	/*** 'green' creates a random Green number value ***/
	var green = Math.floor( Math.random() * 256 );
	/*** 'blue' creates a random Blue number value ***/
	var blue = Math.floor( Math.random() * 256 );
	/*** 'bgColor' concates the Red Green and Blue values into a readable rgb value ***/
	var bgColor = "rgb(" + red + "," + green + "," + blue + ")";
	/*** Replaces the background with the new color value ***/
	document.body.style.background = bgColor
}
/*** quotes` array is in (Quotes.js) ***/
/*** 'getRandomQuote` function calls an integer from the "quotes" array ***/
function getRandomQuote() {
	/*** getRandom calls an integer between 0 and the length of the array ***/
	var getRandom = Math.floor( Math.random() * quotes.length );
	/*** Returns the random integer within the array ***/
	return quotes[ getRandom ];
};
/*** `printQuote` function prints to the page the appopriate quote with information***/
function printQuote() {
	/*** Pulls the information from 'getRandomQuote' and puts it in 'storeQuote' ***/
	var storeQuote = ( getRandomQuote() );
	/*** Start string with opening paragraph tag with 'quote' ***/
	var string = "<p class='quote'>" + storeQuote.quote + "</p>";
	/*** Add the 'source' to 'string' ***/
	string += "<p class='source'>" + storeQuote.source;
	/*** If there is a 'citation' add it to 'string' ***/
	if ( storeQuote.citation ) {
		string += "<span class='citation'>" + storeQuote.citation + "</span>"
	};
	/*** If there is a 'year' add it to 'string' ***/
	if ( storeQuote.year ) {
		string += "<span class='year'>" + storeQuote.year + "</span>"
	};
	/*** If there is a 'tag' add it to 'string' ***/
	if ( storeQuote.tag ) {
		string += "<span class='tag'>" + storeQuote.tag + "</span>"
	};
	/*** Finish 'string' with closing paragraph tag ***/
	string += "</p"
	document.getElementById( 'quote-box' ).innerHTML = string;
};
/*** Every 5000 milliseconds (5 seconds) the printQuote will refresh the quote***/
setInterval( printQuote, 5000 );
/*** Every 5000 milliseconds (5 seconds) the random_bg_color will refresh the background color ***/
setInterval( random_bg_color, 5000 );
/*** Click event listener for the printQuote button and background color change to execute***/
document.getElementById( 'load-quote' ).addEventListener( "click", printQuote, false );
document.getElementById( 'load-quote' ).addEventListener( "click", random_bg_color, false );
