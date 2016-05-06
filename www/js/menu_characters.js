var debug_gew;
var gyro_gew;

var charactermenuState=
{
    init: function(debug, gyro)
    {
        debug_gew = debug;
        gyro_gew = gyro;
    },
    
    create: function()
    {
        var background = game.add.sprite(0,0, 'menuscreen');
        background.height = game.height;
        background.width = game.width;
        
        var arndtbutton = game.add.button(this.game.width/2-100, this.game.height/2, 'po_arndt', this.arndtGeklickt, this);
        arndtbutton.anchor.setTo(0.5,0.5);
        arndtbutton.scale.set(1,1);
        
        var kampmannbutton = game.add.button(this.game.width/2, this.game.height/2, 'po_kampmann', this.kampmannGeklickt, this);
        kampmannbutton.anchor.setTo(0.5,0.5);
        kampmannbutton.scale.set(1,1);
        
        var plutkabutton = game.add.button(this.game.width/2+100, this.game.height/2, 'po_plutka', this.plutkaGeklickt, this);
        plutkabutton.anchor.setTo(0.5,0.5);
        plutkabutton.scale.set(1,1);
        
        var cyw_sound = game.add.audio('audio_menu_cyw');
        cyw_sound.play();
    },
    
    arndtGeklickt: function(arndtbutton)
    {
        arndtbutton.loadTexture('po_arndt_down');
        start_sound = game.add.audio('audio_start_start');
        start_sound.play();
        setTimeout(function(){ game.state.start('play', true, false, 'arndt', debug_gew, gyro_gew); }, 1000);
    },
    
    kampmannGeklickt: function(kampmannbutton)
    {
        kampmannbutton.loadTexture('po_kampmann_down');
        start_sound = game.add.audio('audio_start_start');
        start_sound.play();
        setTimeout(function(){ game.state.start('play', true, false, 'kampmann', debug_gew, gyro_gew); }, 1000);
    },
    
    plutkaGeklickt: function(plutkabutton)
    {
        plutkabutton.loadTexture('po_plutka_down');
        start_sound = game.add.audio('audio_start_start');
        start_sound.play();
        setTimeout(function(){ game.state.start('play', true, false, 'plutka', debug_gew, gyro_gew); }, 1000);
    }
};