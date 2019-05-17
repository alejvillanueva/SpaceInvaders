function preload(){
	let player;
	let enemies;
	let hitEdge;
	let hitBottom;
	let state;
}

function setup(){
	const myCanvas = createCanvas(1024, 768);
	const x = (windowWidth / 2) - 512;
	const y = (windowHeight / 2) - 384;
	myCanvas.position(x, y);

	player = new Player();
	enemies = makeEnemies();
	hitEdge = false;
	hitBottom = false;
	state = "mainMenu";
}

function draw(){
	background("#F2E8D5");

	switch (state){
		case "mainMenu":
			drawMainMenu();
			break;

		case "game":
			player.draw();
			player.update();

			enemies.forEach(function(enemy){
				enemy.draw();	
				enemy.update();

				if((enemy.xPos + enemy.radius / 2 > width) || (enemy.xPos - enemy.radius / 2) < 0){
					hitEdge = true
				}

				if(enemy.yPos + enemy.radius > 500){
					hitBottom = true;
				}

			})

			if (hitEdge){
				enemies.forEach(function(enemy){
					enemy.changeDirection();
			})
				hitEdge = false;
			}

			if (hitBottom){
				enemies.forEach(function(enemy){
					enemy.reset();
				})
				hitBottom = false;
			}


	}

}

function keyPressed(){
	if (keyCode === ENTER){
		state = "game";
	}

}