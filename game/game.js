function preload(){
	//creates variables that are needed in setup
	let player;
	let enemies;
	let hitEdge;
	let hitBottom;
	let state;
}

function setup(){
	//Creating and styling the canvas
	const myCanvas = createCanvas(1024, 768);
	const x = (windowWidth / 2) - 512;
	const y = (windowHeight / 2) - 384;
	myCanvas.position(x, y);

	//Creating player and enemies
	player = new Player();
	enemies = makeEnemies();

	//Cases
	hitEdge = false;
	hitBottom = false;
	state = "mainMenu";
}

function draw(){
	background("#F2E8D5");

	//Main Menu or Game
	switch (state){
		case "mainMenu":
			drawMainMenu();
			break;

		case "game":
			//Handling player
			player.draw();
			player.update();

			//Handling enemy
			enemies.forEach(function(enemy){
				enemy.draw();	
				enemy.update();

				//Have enemies hit a left or right edge/boundary?
				if((enemy.xPos + enemy.radius / 2 > width) || (enemy.xPos - enemy.radius / 2) < 0){
					hitEdge = true
				}

				//Have enemies reached the bottom?
				if(enemy.yPos + enemy.radius > 500){
					hitBottom = true;
				}

			})

			//Enemy did hit edge!
			if (hitEdge){
				enemies.forEach(function(enemy){
					enemy.changeDirection();
				})
				
				hitEdge = false;
			}

			//Enemy did reach bottom!
			if (hitBottom){
				enemies.forEach(function(enemy){
					enemy.reset();
				})
				
				hitBottom = false;
			}


	}

}

//Enter to switch cases
function keyPressed(){
	if (keyCode === ENTER){
		state = "game";
	}

}