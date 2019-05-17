let player; 
let enemies;
let hitEdge;

function setup(){
	const myCanvas = createCanvas(1024, 768);
	const x = (windowWidth / 2) - 512;
	const y = (windowHeight / 2) - 384;
	myCanvas.position(x, y);
	player = new Player();
	enemies = makeEnemies();
}

function draw(){
	background("#F2E8D5");
	player.draw();
	player.update();

	enemies.forEach(function(enemy){
		enemy.draw();	
		enemy.update();

		if((enemy.xPos + enemy.radius / 2 > width) || (enemy.xPos - enemy.radius / 2) < 0){
			hitEdge = true
		}
	})

	if (hitEdge){
		enemies.forEach(function(enemy){
		enemy.changeDirection();
	})
		hitEdge = false;
	}
}