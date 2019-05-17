//Main Menu text
function drawMainMenu(){
	
	textAlign(CENTER);
	fill("#F24738");

	//Title 
	textSize(85);
	textFont('Baloo Bhai');
	text('Space Invader', width / 2, height / 2 - 75);

	//Press to play
	textSize(40);
	textFont('Montserrat');
	text('press Enter to play', width / 2, height / 2);
}