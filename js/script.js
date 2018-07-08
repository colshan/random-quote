// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

const quotes = [{'quote': 'Remember: the car is you, you are the car. Okay? Let\'s ride!', 'source': 'Memphis Raines', 'citation': "Gone in Sixty Seconds", 'tags': ['movie', 'Nicholas Cage']},
				{'quote': "I want you to go back out there on the track and hit the pace car.", 'source': 'Harry Hogge', 'citation': 'Days of Thunder'},
				{'quote': "I'm dropping the hammer.", 'source': "Cole Trickle", 'citation': 'Days of Thunder'},
				{'quote': "You're lucky that hundred shot of NOS didn't blow the welds on the intake", 'source': 'Dom Toretto', 'year':2026, 'citation':'Fast and Furious'}];
let timer;


function randomSelect(arr) {
	return arr[Math.floor(Math.random()*arr.length)];
}

function getRandomQuote() {
	return randomSelect(quotes);
}

function getRandomColor() {
	const colors = ['red', 'purple', 'green', 'blue'];
	return randomSelect(colors);
}

function printQuote() {
	clearInterval(timer);
	timer = setInterval(printQuote, 10000);

	const currentQuote = getRandomQuote();

	let res = `<p class="quote">${currentQuote.quote}</p>
<p class="source"> ${currentQuote.source}`;

	if (currentQuote.citation){
		res += `<span class="citation"> ${currentQuote.citation} </span>`;
	}
	if (currentQuote.year){
 		res += `<span class="year"> ${currentQuote.year} </span>`;
 	}

 	res += '</p>';

 	if (currentQuote.tags){
 		res += `<p class="tags">Tags: ${currentQuote.tags.join(', ')} </p>`;
 	}

 	document.body.style.backgroundColor = getRandomColor();
	document.getElementById('quote-box').innerHTML = res;
}