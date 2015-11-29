$(document).ready(function() {

	// Sets up board as a collection of all divs with the class of box and setting turn # to 0.
	var board = $('div .box');
	var turn = 0;

	// Checks if a string of 3 box values will equal a string of 3 of the symbol within the box.
	function win(box1, box2, box3, symbol) {
		if ( box1.text() + box2.text() + box3.text() === symbol + symbol + symbol ) {
			$('#gamestage').html( symbol + ' Player Wins!' ).css({'color': 'orange', 'fontWeight': 'bold'});
			board.off('click');
			if ( symbol === 'X' ) {
				box1.addClass('winsquaresx');
				box2.addClass('winsquaresx');
				box3.addClass('winsquaresx');
			} else {
				box1.addClass('winsquareso');
				box2.addClass('winsquareso');
				box3.addClass('winsquareso');
			};
		};
	};

	// Takes a given id and returns a JQuery object for the element with that id
	function box(id) {
		return $('#' + id);
	};

	// Wraps the actions that will be taken in each turn
	function processTurn() {

		// Populates clicked element with an X or O dependent on turn #,
		// increments the turn and turns off click event
		function addSymbol(square) {

			if (turn % 2 == 0) {
				$(square).html("X");
			} else {
				$(square).html("O");
			};
		  turn ++;
		  $(square).off('click');
		};

		// Uses the win function to check every winning combination
		function checkWin() {
			win(box('1'), box('2'), box('3'), 'X');
			win(box('4'), box('5'), box('6'), 'X');
			win(box('7'), box('8'), box('9'), 'X');
			win(box('1'), box('4'), box('7'), 'X');
			win(box('2'), box('5'), box('8'), 'X');
			win(box('3'), box('6'), box('9'), 'X');
			win(box('1'), box('5'), box('9'), 'X');
			win(box('3'), box('5'), box('7'), 'X');
			win(box('1'), box('2'), box('3'), 'O');
			win(box('4'), box('5'), box('6'), 'O');
			win(box('7'), box('8'), box('9'), 'O');
			win(box('1'), box('4'), box('7'), 'O');
			win(box('2'), box('5'), box('8'), 'O');
			win(box('3'), box('6'), box('9'), 'O');
			win(box('1'), box('5'), box('9'), 'O');
			win(box('3'), box('5'), box('7'), 'O');
		};

		// Displays whose turn it is, up until turn 9 at which point
		// if the game hasn't ended it will display tied game.
		function whoseTurn() {
			if (turn % 2 == 0 && turn < 9 ) {
				$('#gamestage').html('X player to move');
			} else if ( !(turn % 2 == 0) && turn < 9 ) {
				$('#gamestage').html('O player to move');
			} else {
				$('#gamestage').html('Tied Game').css({'color': 'grey', 'fontWeight': 'bold'});
			}
		};

		// Calls the 3 functions defined in the processTurn function
		addSymbol(this);
		whoseTurn();
		checkWin();

	};

	// Listens for a click on any element stored in the board
	// variable and runs processTurn when event fired
	board.on('click', processTurn);

});