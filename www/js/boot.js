var bootState =
{
	preload: function()
	{
		
	},
	
	create: function()
	{
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.physics.startSystem(Phaser.Physics.P2JS);
        screen.lockOrientation('landscape-primary');

		game.state.start('load');

	}
};


