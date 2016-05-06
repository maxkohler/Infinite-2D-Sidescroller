var debug_gewaehlt;
var gyro_gewaehlt;

var menuState=
{
    init: function(debug, gyrocontrol)
    {
        debug_gewaehlt = debug;
        gyro_gewaehlt = gyrocontrol;
    },
    
    create: function()
    {
        var background = game.add.sprite(0,0, 'menuscreen');
        background.height = game.height;
        background.width = game.width;
        
        var playButton = game.add.button(this.game.width/2, this.game.height/2.4, 'bu_menu_play', this.playGeklickt, this);
        playButton.scale.set(0.3,0.3);
        playButton.anchor.setTo(0.5, 0.5);
        
        var settingsButton = game.add.button(this.game.width/2, this.game.height/1.6, 'bu_menu_settings', this.settingsGeklickt, this);
        settingsButton.scale.set(0.3,0.3);
        settingsButton.anchor.setTo(0.5, 0.5);
    },
    
    playGeklickt: function(playButton)
    {
        playButton.loadTexture('bu_menu_play_down');
        play_sound = game.add.audio('audio_menu_click');
        play_sound.play();
        setTimeout(function(){ game.state.start('charactermenu', true, false, debug_gewaehlt, gyro_gewaehlt); }, 1000);
    },
    
    settingsGeklickt: function(settingsButton)
    {
        settingsButton.loadTexture('bu_menu_settings_down');
        settings_sound = game.add.audio('audio_menu_click');
        settings_sound.play();
        setTimeout(function(){ game.state.start('settingsmenu'); }, 1000);
    }
    
};