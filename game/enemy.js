function Enemy(xPos, yPos){
	
	//Enemy's position
	this.xPos = xPos;
	this.yPos = yPos; 

	//Used in reset()
	//Initial positions
	this.initialX = xPos;
	this.initialY = yPos;

	//Radius of enemy
	this.radius = 50;

	//Direction
	this.xDir = 1;

	//Draw the enemy
	this.draw = function () {
		fill("#038C5A");
		noStroke();
		ellipse(this.xPos, this.yPos, this.radius);
	}

	//Move the enemy
	this.update = function () {
		this.xPos += this.xDir;
	}

	//Change direction of enemy when hits edge
	this.changeDirection = function() {
    	this.xDir *= -1;
    	this.yPos += this.radius;
	}

	//Resets position of enemy when reaches bottom
	this.reset = function(){		
		this.xPos = this.initialX;
		this.yPos = this.initialY;
	}

}