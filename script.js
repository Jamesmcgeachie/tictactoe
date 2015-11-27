$(document).ready(function() {

  var board = $('div .box');
	var turn = 0;

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
		};


		addSymbol(this);
		checkWin();
	};


  board.on('click', processTurn);


});