/***
Project 1 - A Random Quote Generator ***/
/*** quotes` array is in (Quotes.js) ***/
/*** 'getRandomQuote` function calls an integer from the "quotes" array ***/
function getRandomQuote() {
	/*** getRandom calls an integer between 0 and the length of the array ***/
	var getRandom = Math.floor(Math.random() * quotes.length);
	/*** Returns the random integer within the array ***/
	return quotes[getRandom];
};
/*** `printQuote` function prints to the page the appopriate quote with information***/
function printQuote() {
	/*** Pulls the information from 'getRandomQuote' and puts it in 'storeQuote' ***/
	var storeQuote = (getRandomQuote());
	/*** Start string with opening paragraph tag with 'quote' ***/
	var string = "<p class='quote'>" + storeQuote.quote + "</p>";
	/*** Add the 'source' to 'string' ***/
	string += "<p class='source'>" + storeQuote.source;
	/*** If there is a 'citation' add it to 'string' ***/
	if (storeQuote.citation) {
		string += "<span class='citation'>" + storeQuote.citation + "</span>"
	};
	/*** If there is a 'year' add it to 'string' ***/
	if (storeQuote.year) {
		string += "<span class='year'>" + storeQuote.year + "</span>"
	};
	/*** If there is a 'tag' add it to 'string' ***/
	if (storeQuote.tag) {
		string += "<span class='tag'>" + storeQuote.tag + "</span>"
	};
	/*** Finish 'string' with closing paragraph tag ***/
	string += "</p"
	document.getElementById('quote-box').innerHTML = string;
};
setInterval(printQuote(), 1000);
/*** Click event listener for the print quote button to execute***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
