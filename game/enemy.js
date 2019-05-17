function Enemy(xPos, yPos){
	this.xPos = xPos;
	this.yPos = yPos; 
	this.radius = 50;
	this.xDir = 1;

	this.draw = function () {
		fill("#038C5A");
		noStroke();
		ellipse(this.xPos, this.yPos, this.radius);
	}

	this.update = function () {
		this.xPos += this.xDir;
	}

	this.changeDirection = function() {
    	this.xDir *= -1;
    	this.yPos += this.radius / 2;
}

}