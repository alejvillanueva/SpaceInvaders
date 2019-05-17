function makeEnemies() {
	let enemies = [];
	let currX = 75;
	let currY = 75;

	const ROWS = 4;
	const COLS = 6;

	for(let i = 0; i < ROWS; i++){
		for(let j = 0; j < COLS; j++){
			let enemy = new Enemy(currX, currY);
			enemies.push(enemy);
			currX += 100
		}

		currX = 75;
		currY += 75;

	}

	return enemies;

}