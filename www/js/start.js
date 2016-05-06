var startState=
{
    create: function()
    {
        var background = game.add.sprite(0,0, 'startscreen');
        background.height = game.height;
        background.width = game.width;
        
        var startButton = game.add.button(this.game.width/2, this.game.height/1.2, 'bu_start', this.startGeklickt, this);
        startButton.scale.set(0.3,0.3);
        startButton.anchor.setTo(0.5, 0.5);
        
        navigator.splashscreen.hide();
    },
    
    startGeklickt: function(startButton)
    {
        startButton.loadTexture('bu_start_down');
        start_sound = game.add.audio('audio_start_start');
        start_sound.play();
        setTimeout(function(){ game.state.start('menu', true, false, false, false); }, 1000);
    }
};