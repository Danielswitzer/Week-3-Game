<!DOCTYPE html>
<html>
<head>
	<title>Psychic Game</title>
</head>
<body>
<header>Psychadelic</header>


<!-- This is where the code will go that we created. -->
<div id="game">
	<p>Guess what letter I am thinking of</p>
</div>

<script type="text/javascript">

var randomLetter = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Declares the tallies to 0 
var wins = 0;
var losses = 0;
var ties = 0;


document.addEventListener('keyup', function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// This sets the computer guess equal to the random.
	var computersChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];

</script>
</body>
</html>


