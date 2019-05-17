// Player Object
function Player(){
	//Player's x position
	this.xPos = width / 2;

	this.playerSpeed = 5; 

	//Draw player on canvas
	this.draw = function(){
		fill("#F24738");
		noStroke();
		rect(this.xPos, 630, 50, 50, 15);
	}

	this.update = function(){
		//Handles player input/movement 
		//Makes left and right edge the boundaries
		this.xPos = constrain(this.xPos, 0, width - 50);

		//Move to the right
		if (keyIsDown(RIGHT_ARROW)){
			this.xPos += this.playerSpeed;
		}

		//Move to the left
		if (keyIsDown(LEFT_ARROW)){
			this.xPos -= this.playerSpeed;
		}
	}
}