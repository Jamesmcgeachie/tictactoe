$(document).ready(function() {

	var board = $('div .box');
	var turn = 0;

	function win(box1, box2, box3, symbol) {
		if ( $(box1).text() + $(box2).text() + $(box3).text() === symbol + symbol + symbol ) {
			$('#winbox').html( symbol + ' Player Wins!' );
			$('#gamestage').html('Game Over.');
			board.off('click');
			if ( symbol === 'X' ) {
				$(box1).addClass('winsquaresx');
				$(box2).addClass('winsquaresx');
				$(box3).addClass('winsquaresx');
			} else {
				$(box1).addClass('winsquareso');
				$(box2).addClass('winsquareso');
				$(box3).addClass('winsquareso');
			};
		};
	};

	function box(id) {
		return '#' + id;
	};


	function processTurn() {

		function addSymbol(square) {

			if (turn % 2 == 0) {
				$(square).html("X");
			} else {
				$(square).html("O");
			};
		  turn ++;
		  $(square).off('click');
		};

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

		function whoseTurn() {
			if (turn % 2 == 0 && turn < 9 ) {
				$('#gamestage').html('X player to move');
			} else if ( !(turn % 2 == 0) && turn < 9 ) {
				$('#gamestage').html('O player to move');
			} else {
				$('#gamestage').html('Tied Game');
			}
		};

		addSymbol(this);
		whoseTurn();
		checkWin();

	};

	board.on('click', processTurn);

});