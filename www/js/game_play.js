var player;
var debug;
var gyro_gewaehlt;

var coin_type;
var spielerwahl

var game_theme;

var level_vg;
var level_hg;
var obs;
var go;

var lifes;
var star;

var obsgroupfront;
var obsgroupback;

var score = 0;
var coins;

var pausegame;

var scoreText;

var timer;
var timer2;;
var timer3;


var countDownText;

var spielPausiert = false;

var timerEvent;
var obstacleEvent;

var bool_links = false, bool_rechts = false, bool_runter = false, bool_hoch = false;

var playState=
{
    init: function(auswahl, debug_param, gyro_param)
    {
        spielerwahl = auswahl;
        debug = debug_param;
        gyro_gewaehlt = gyro_param;
    },
    
    create: function()
    {
        timer2 = 5;
        go = false;
        
        obstacleEvent = game.time.events.loop(Phaser.Timer.SECOND * 1.5, this.spawnObstacle);
        timerEvent = game.time.events.loop(Phaser.Timer.SECOND, this.countdownTimer);
        
        game.time.advancedTiming = true;
        
        level_hg = game.add.tileSprite(0, 0, 4096, 218, 'ts_level_hg');
        level_vg = game.add.tileSprite(0, 0, 4096, 218, 'ts_level_vg');
        
        obsgroupback = game.add.group();
        
        if(spielerwahl == 'plutka')
        {
            player = game.add.sprite(game.world.width/2, 200, 'sh_plutka');
            coin_type = 'ko_plutka';
            game.physics.p2.enable(player, debug);
            player.body.kinematic = true;
            player.animations.add('left', [0, 1, 2, 3], 10, true);
            player.animations.add('right', [4, 5, 6, 7], 10, true);
            player.anchor.x += 0.05;
            player.anchor.y += 0.45;
            player.body.clearShapes();
            player.body.addPolygon({}, [[-25, 0], [-25, 10], [25, 10], [25, 0]])
            lifes = 3;
        }
        else if(spielerwahl == 'kampmann')
        {
            player = game.add.sprite(game.world.width/2, 200, 'sh_kampmann');
            coin_type = 'ko_kampmann';
            game.physics.p2.enable(player, debug);
            player.body.kinematic = true;
            player.animations.add('left', [0, 1, 2, 3, 4, 5], 10, true);
            player.animations.add('right',[6, 7, 8, 9, 10, 11], 10, true);
            player.anchor.x += 0.05;
            player.anchor.y += 0.45;
            player.body.clearShapes();
            player.body.addPolygon({}, [[-25, 0], [-25, 10], [25, 10], [25, 0]])
            lifes = 5;
        }
        else if(spielerwahl == 'arndt')
        {
            player = game.add.sprite(game.world.width/2, 200, 'sh_arndt');
            coin_type = 'ko_arndt';
            game.physics.p2.enable(player, debug);
            player.body.kinematic = true;
            player.animations.add('left', [0, 1], 2, true);
            player.animations.add('right', [2, 3], 2, true);
            player.anchor.x += 0.05;
            player.anchor.y += 0.45;
            player.body.clearShapes();
            player.body.addPolygon({}, [[-25, 0], [-25, 10], [25, 10], [25, 0]])
            lifes = 3;
        }
        
        
        obsgroupfront = game.add.group();
        
        coins = game.add.group();
        
        for(var i = 1; i < lifes+1; i++)
        {
            var coin = coins.create(game.world.width-(40*i), 0, coin_type);
            coin.scale.set(0.5,0.5);
        }
        
        
        pausegame = game.add.button(0, 0, 'sh_pause', this.pausiert, this, 0, 0, 0);
        game.input.onDown.add(this.unpausiert, self);
        
        
        player.body.onBeginContact.add(this.blockHit, this);
        
        
        
        
        
        countDownText = game.add.text(game.width/2, game.height/2, timer);
        countDownText.anchor.set(0.5, 0.5);
        
        
        timer3 = game.time.create(true);
        
        
        
        
        
    },
    
    update: function()
    {
        
        if(go == true)
        {
            if(spielerwahl == 'arndt')
            {
                level_vg.tilePosition.x -= 3;
                level_hg.tilePosition.x -= 1.5;
                player.body.x -= 2;
            }
            if(spielerwahl == 'kampmann')
            {
                level_vg.tilePosition.x -= 2;
                level_hg.tilePosition.x -= 1;
                player.body.x -= 2;
            }
            if(spielerwahl == 'plutka')
            {
                level_vg.tilePosition.x -= 2;
                level_hg.tilePosition.x -= 1;
                player.body.x -= 2;
            }
            
        }
        
        
        obsgroupfront.forEach(function(item)
        {
            if(spielerwahl == 'arndt')
            {
                item.body.x -= 3;
            }
            else
            {
                item.body.x -= 2;
            }
            
            if(item.body.x < -50)
            {
                item.kill();
            }
        }, this);
        
        obsgroupback.forEach(function(item)
        {
            if(spielerwahl == 'arndt')
            {
                item.body.x -= 3;
            }
            else
            {
                item.body.x -= 2;
            }
                             
            if(item.body.x < -50)
            {
                item.kill();
            }
        }, this);
        
        
        if(player.body.x < -15)
        {
            this.gameover();
        }
        
        
        if(gyro_gewaehlt)
        {
             gyro.frequency = 10;
            
             gyro.startTracking(function(o)
             {

                                if(o.beta > 0)
                                {
                                    bool_links = true;
                                    bool_rechts = false;
                                }
                                else
                                {
                                    bool_rechts = true;
                                    bool_links = false;
                                }
                                
                                if(o.gamma < 0)
                                {
                                    bool_hoch = true;
                                    bool_runter = false;
                                }
                                else
                                {
                                    bool_runter = true;
                                    bool_hoch = false;
                                }
             });
              
            
        }
        else
        {
            if(Math.floor(game.input.pointer1.x) < Math.floor(player.body.x-10) && game.input.pointer1.isDown)
            {
                bool_links = true;
            }
            else
            {
                bool_links = false;
            }
            
            if(Math.floor(game.input.pointer1.x) > Math.floor(player.body.x+10) && game.input.pointer1.isDown)
            {
                bool_rechts = true;
            }
            else
            {
                bool_rechts = false;
            }
            
            if(Math.floor(game.input.pointer1.y) > Math.floor(player.body.y-10) && game.input.pointer1.isDown)
            {
                bool_runter = true;
            }
            else
            {
                bool_runter = false;
            }
            
            if(Math.floor(game.input.pointer1.y) < Math.floor(player.body.y+10) && game.input.pointer1.isDown)
            {
                bool_hoch = true;
            }
            else
            {
                bool_hoch = false;
            }
        }
        
        
        
        
        
        this.movement(bool_hoch, bool_runter, bool_links, bool_rechts);
        
        
    },
    
    
    spawnObstacle: function()
    {
        var spawn_ort = game.rnd.integerInRange(1,2);

        
        if(go == true)
        {
            switch(game.rnd.integerInRange(1,3))
            {
                
                case 1:
                {
                    if (spawn_ort == 1)
                    {
                        obs = obsgroupfront.create(game.world.width+50, 150, 'obs1');
                        
                        game.physics.p2.enable(obs, debug);
                        obs.body.clearShapes();
                        obs.body.loadPolygon('data_obs1col', 'obs1');
                        obs.body.data.shapes[0].sensor = true;
                    }
                    else
                    {
                        obs = obsgroupback.create(game.world.width+50, 110, 'obs1');
                        
                        game.physics.p2.enable(obs, debug);
                        obs.body.clearShapes();
                        obs.body.loadPolygon('data_obs1col', 'obs1');
                        obs.body.data.shapes[0].sensor = true;
                    }
                }
                break;
                    
                case 2:
                {
                    if (spawn_ort == 1)
                    {
                        obs = obsgroupfront.create(game.world.width+50, 180, 'obs2');
                        
                        game.physics.p2.enable(obs, debug);
                        obs.anchor.y -= 0.05;
                        obs.body.clearShapes();
                        obs.body.loadPolygon('data_obs2col', 'obs2');
                        obs.body.data.shapes[0].sensor = true;
                    }
                    else
                    {
                        obs = obsgroupback.create(game.world.width+50, 145, 'obs2');
                        
                        game.physics.p2.enable(obs, debug);
                        obs.anchor.y -= 0.05;
                        obs.body.clearShapes();
                        obs.body.loadPolygon('data_obs2col', 'obs2');
                        obs.body.data.shapes[0].sensor = true;
                    }
                }
                break;
                    
                case 3:
                {
                    if (spawn_ort == 1)
                    {
                        obs = obsgroupfront.create(game.world.width+50, 180, 'obs3');
                        
                        game.physics.p2.enable(obs, debug);
                        obs.body.clearShapes();
                        obs.body.loadPolygon('data_obs3col', 'obs3');
                        obs.body.data.shapes[0].sensor = true;
                    }
                    else
                    {
                        obs = obsgroupback.create(game.world.width+50, 170, 'obs3');
                        
                        game.physics.p2.enable(obs, debug);
                        obs.body.clearShapes();
                        obs.body.loadPolygon('data_obs3col', 'obs3');
                        obs.body.data.shapes[0].sensor = true;
                    }
                }
                break;
            }//switch
        }//if go true
    },
    
    movement: function(hoch, runter, links, rechts)
    {
        player.body.setZeroVelocity();
        
        if (hoch && player.body.y > 150)
        {
            player.body.y -= 2;
        }
        else if (runter && player.body.y < 210)
        {
            player.body.y += 2;
        }
        
        if (links)
        {
            player.animations.play('left');
            player.body.x -= 2;
        }
        else if (rechts && player.body.x < game.width)
        {
            player.animations.play('right');
            if(spielerwahl == 'kampmann')
            {
                player.body.x += 2;
            }
            else
            {
                player.body.x += 3;
            }
        }
        
        if(!hoch && !runter && !links && !rechts)
        {
            player.animations.stop();
            if(spielerwahl == 'plutka')
            {
                player.frame = 4;
            }
            if(spielerwahl == 'kampmann')
            {
                player.frame = 6;
            }
        }
    },
    
    blockHit: function (body, bodyB, shapeA, shapeB, equation)
    {
        
        //  The block hit something.
        //
        //  This callback is sent 5 arguments:
        //
        //  The Phaser.Physics.P2.Body it is in contact with. *This might be null* if the Body was created directly in the p2 world.
        //  The p2.Body this Body is in contact with.
        //  The Shape from this body that caused the contact.
        //  The Shape from the contact body.
        //  The Contact Equation data array.
        //
        //  The first argument may be null or not have a sprite property, such as when you hit the world bounds.
        if (body)
        {
            if(lifes > 0)
            {
                coins.getAt(lifes-1).kill();
                lifes--;
                hit_sound = game.add.audio('audio_game_hit');
                hit_sound.play();
                player.body.x -= 100;
            }
            if(lifes == 0)
            {
                this.gameover();
            }
        }
    },
    
    gameover: function()
    {
        game_theme.stop();
        game.state.start('gameover', true, false, spielerwahl, debug, gyro_gewaehlt);
    },
    
    countdownTimer: function()
    {
        var cd_sound = game.add.audio('audio_game_' + timer2);
        cd_sound.play();
        
        if (timer2 > 0)
        {
            timer2 -= 1;
        }
        
        
        if(timer2 === 0)
        {
            game.time.events.remove(timerEvent);
            game.world.remove(countDownText);
            go = true;
            timer3.start();
            game_theme = game.add.audio('audio_game_theme', 0.1);
            game_theme.play();
        }
        else
        {
            countDownText.setText(timer2);
        }
    },
    
    render: function()
    {
        game.debug.text('Score: ' + Math.floor(timer3.seconds), 0, 60);
        if(debug)
        {
            game.debug.pointer(game.input.pointer1);
            game.debug.text('FPS: '+ game.time.fps || '--', 2, 14, "#00ff00");
            game.debug.text('y: '+ Math.floor(player.body.y) + ' x: '+ Math.floor(player.body.x, 16, 16));
        }
    },
    
    
    pausiert: function()
    {
        game.paused = true;
        
        pausegame.setFrames(1,1,1);
    },
    
    unpausiert: function()
    {
        game.paused = false;
        pausegame.setFrames(0,0,0);
    }
    
};

