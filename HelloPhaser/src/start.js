var game = new Phaser.Game(500, 500, Phaser.AUTO, 'area', {
	preload: preload,
	create: create,
	update: update
});

function preload(){}

function create(){
	var hello = game.add.text(250, 250, 'Hello!', {
		fontSize: '32px',
		fill: '#00F'
	});
	hello.anchor.set(0.5, 0.5);
}

function update(){}