var debug;
var gyro_c;

var settingsmenuState=
{
    create: function()
    {
        debug = false;
        gyro_c = false;
        
        var background = game.add.sprite(0,0, 'menuscreen');
        background.height = game.height;
        background.width = game.width;
        
        gyroButton = game.add.button(this.game.width/2, 75, 'bu_menu_gyro', this.gyroGeklickt, this);
        gyroButton.scale.set(0.2,0.2);
        gyroButton.anchor.setTo(0.5, 0.5);
        
        touchButton = game.add.button(this.game.width/2, 100, 'bu_menu_touch_down', this.touchGeklickt, this);
        touchButton.scale.set(0.2,0.2);
        touchButton.anchor.setTo(0.5, 0.5);
        
        var debugButton = game.add.button(this.game.width/2, 125, 'bu_menu_debug', this.debugGeklickt, this);
        debugButton.scale.set(0.2,0.2);
        debugButton.anchor.setTo(0.5, 0.5);
        
        var backButton = game.add.button(this.game.width/2, 160, 'bu_menu_back', this.backGeklickt, this);
        backButton.scale.set(0.2,0.2);
        backButton.anchor.setTo(0.5, 0.5);
    },
    
    gyroGeklickt: function()
    {
        if(!gyro_c)
        {
            gyroButton.loadTexture('bu_menu_gyro_down');
            touchButton.loadTexture('bu_menu_touch');
            gyro_c = true;
        }
        
        gyro_sound = game.add.audio('audio_menu_click');
        gyro_sound.play();
        //setTimeout(function(){ game.state.start('menu', true, false, gewaehlt); }, 2000);
    },
    
    touchGeklickt: function()
    {
        if(gyro_c)
        {
            gyroButton.loadTexture('bu_menu_gyro');
            touchButton.loadTexture('bu_menu_touch_down');
            gyro_c = false;
        }
        
        touch_sound = game.add.audio('audio_menu_click');
        touch_sound.play();
        //setTimeout(function(){ game.state.start('settingsmenu'); }, 2000);
    },
    
    debugGeklickt: function(debugButton)
    {
        if(!debug)
        {
            debugButton.loadTexture('bu_menu_debug_down');
            debug = true;
        }
        else
        {
            debugButton.loadTexture('bu_menu_debug');
            debug = false;
        }
        
        debug_sound = game.add.audio('audio_menu_click');
        debug_sound.play();
        //setTimeout(function(){ game.state.start('settingsmenu'); }, 2000);
    },
    
    backGeklickt: function(backButton)
    {
        backButton.loadTexture('bu_menu_back_down');
        back_sound = game.add.audio('audio_menu_click');
        back_sound.play();
        setTimeout(function(){ game.state.start('menu', true, false, debug, gyro_c); }, 1000);
    }
};