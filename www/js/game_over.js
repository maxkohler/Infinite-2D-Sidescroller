var gewaehlt;
var debug;
var gyro_control;

var gameoverState=
{
    init: function(choice, debug_param, gyro_gew_param)
    {
        gewaehlt = choice;
        debug = debug_param;
        gyro_control = gyro_gew_param;
    },
    
	preload: function()
	{

	},

	create: function()
	{
        var background = game.add.sprite(0,0, 'go_'+ gewaehlt);
        background.height = game.height;
        background.width = game.width;
        
        var go_sound = game.add.audio('audio_game_over');
        go_sound.play();
        
        var replay_button = game.add.button(this.game.width/2, this.game.height/1.4, 'bu_playagain', this.replayGeklickt, this);
        replay_button.scale.set(0.3,0.3);
        replay_button.anchor.setTo(0.5, 0.5);
        
        var exit_button = game.add.button(this.game.width/2, this.game.height/1.2, 'bu_exit', this.exitGeklickt, this);
        exit_button.scale.set(0.3,0.3);
        exit_button.anchor.setTo(0.5, 0.5);

	},
    
    replayGeklickt: function(replay_button, go_sound)
    {
        replay_button.loadTexture('bu_playagain_down');
        var replay_sound = game.add.audio('audio_start_start');
        replay_sound.play();
        setTimeout(function(){ game.state.start('play', true, false, gewaehlt, debug, gyro_control); }, 1000);
    },
    
    exitGeklickt: function(exit_button, go_sound)
    {
        exit_button.loadTexture('bu_exit_down');
        var exit_sound = game.add.audio('audio_game_over_quit');
        exit_sound.play();
        setTimeout(function(){ game.state.start('menu', true, false, false, false); }, 2000);
    }
    
    
};