function Player(){
	this.xPos = width / 2;


	this.draw = function(){
		fill("#F24976");
		noStroke();
		rect(this.xPos, 630, 50, 50, 15);
	}

	this.update = function(){
		this.xPos = constrain(this.xPos, 0, width - 50);

		if(this.xPos < width){
			if (keyIsDown(RIGHT_ARROW)){
				this.xPos += 5;
			}
		}


		if (keyIsDown(LEFT_ARROW)){
			this.xPos -= 5;
		}
	}
}