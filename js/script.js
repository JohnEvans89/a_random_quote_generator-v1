/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
/***
 * `quotes` array
 ***/
var quotes = [{
	quote: '“Believe nothing you hear, and only one half that you see.”',
	source: "Edgar Allan Poe",
	citation: "",
	year: "1902"
}, {
	quote: '“Lord, what fools these mortals be!”',
	source: "William Shakespeare",
	citation: "A Midsummer Night's Dream",
	year: ""
}, {
	quote: '“You are a manipulator. I like to think of myself more as an outcome engineer.”',
	source: "J.R. Ward",
	citation: "Lover Eternal",
	year: ""
}, {
	quote: '"When I was a kid my parents moved a lot, but I always found them."',
	source: "Rodney Dangerfield",
	citation: "",
	year: ""
}, {
	quote: '"Rice is great when you’re hungry and you want 2000 of something."',
	source: "Mitch Hedberg",
	citation: "",
	year: ""
}];
/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
	var getRandom = Math.floor(Math.random() * quotes.length);
	return quotes[getRandom];
};
console.log(getRandomQuote());
/***
 * `printQuote` function
 ***/
function printQuote() {
	var storeQuote = (getRandomQuote());
	var string = "<p class='quote'>" + storeQuote.quote + "</p>";
	string += "<p class='source'>" + storeQuote.source;
	if (storeQuote.citation) {
		string += "<span class='citation'>" + storeQuote.citation + "</span>"
	};
	if (storeQuote.year) {
		string += "<span class='year'>" + storeQuote.year + "</span>"
	};
	string += "</p"
	document.getElementById('quote-box').innerHTML = string;
};
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
