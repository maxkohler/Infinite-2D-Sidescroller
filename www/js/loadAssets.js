var loadState=
{
	
	preload: function()
	{
        game.load.image('ts_level_vg', 'assets/img/tilesprite_level_vordergrund.png');
        game.load.image('ts_level_hg', 'assets/img/tilesprite_level_hintergrund.png');
        
        game.load.spritesheet('sh_pause', 'assets/img/spritesheet_pause.png', 50,50);
        game.load.spritesheet('sh_plutka', 'assets/img/spritesheet_plutka_v2.png', 47, 86);
        game.load.spritesheet('sh_kampmann', 'assets/img/spritesheet_kampmann_v2.png', 164, 86);
        game.load.spritesheet('sh_arndt', 'assets/img/spritesheet_arndt_v2.png', 135, 103);

	    game.load.image('ko_arndt', 'assets/img/kopf_arndt.png');
	    game.load.image('ko_kampmann', 'assets/img/kopf_kampmann.png');
	    game.load.image('ko_plutka', 'assets/img/kopf_plutka.png');

	    game.load.image('bu_start', 'assets/img/button_start.png');
        game.load.image('bu_start_down', 'assets/img/button_start_down.png');
        game.load.image('bu_playagain', 'assets/img/button_playagain.png');
        game.load.image('bu_playagain_down', 'assets/img/button_playagain_down.png');
        game.load.image('bu_exit', 'assets/img/button_exit.png');
        game.load.image('bu_exit_down', 'assets/img/button_exit_down.png');
        game.load.image('bu_menu_play', 'assets/img/button_menu_play.png');
        game.load.image('bu_menu_play_down', 'assets/img/button_menu_play_down.png');
        game.load.image('bu_menu_settings', 'assets/img/button_menu_settings.png');
        game.load.image('bu_menu_settings_down', 'assets/img/button_menu_settings_down.png');
        
        game.load.image('bu_menu_gyro', 'assets/img/buttons_settings_gyro.png');
        game.load.image('bu_menu_gyro_down', 'assets/img/buttons_settings_gyro_down.png');
        game.load.image('bu_menu_touch', 'assets/img/buttons_settings_touch.png');
        game.load.image('bu_menu_touch_down', 'assets/img/buttons_settings_touch_down.png');
        game.load.image('bu_menu_debug', 'assets/img/buttons_settings_debug.png');
        game.load.image('bu_menu_debug_down', 'assets/img/buttons_settings_debug_down.png');
        game.load.image('bu_menu_back', 'assets/img/buttons_menu_back.png');
        game.load.image('bu_menu_back_down', 'assets/img/buttons_menu_back_down.png');

	    game.load.image('po_arndt', 'assets/img/portrait_arndt.png');
        game.load.image('po_arndt_down', 'assets/img/portrait_arndt_down.png');
	    game.load.image('po_kampmann', 'assets/img/portrait_kampmann.png');
        game.load.image('po_kampmann_down', 'assets/img/portrait_kampmann_down.png');
	    game.load.image('po_plutka', 'assets/img/portrait_plutka.png');
        game.load.image('po_plutka_down', 'assets/img/portrait_plutka_down.png');

	    game.load.image('obs3', 'assets/img/obstacle3.png');
	    game.load.image('obs2', 'assets/img/obstacle2.png');
	    game.load.image('obs1', 'assets/img/obstacle1.png');
        
        game.load.image('startscreen', 'assets/img/startscreen_16x9_v2.png');
        game.load.image('menuscreen', 'assets/img/menu_hintergrund.png');
        game.load.image('go_arndt', 'assets/img/gameover_arndt.png');
        game.load.image('go_kampmann', 'assets/img/gameover_kampmann.png');
        game.load.image('go_plutka', 'assets/img/gameover_plutka.png');

	    game.load.physics('data_obs3col', 'assets/physics/obs3coldata.json');
	    game.load.physics('data_obs2col', 'assets/physics/obs2coldata.json');
	    game.load.physics('data_obs1col', 'assets/physics/obs1coldata.json');
        
        game.load.audio('audio_start_start', 'assets/sound/start_start.mp3');
        game.load.audio('audio_menu_cyw', 'assets/sound/menu_cyw.mp3');
        game.load.audio('audio_menu_click', 'assets/sound/menu_click.mp3');
        game.load.audio('audio_game_theme', 'assets/sound/game_theme.mp3');
        game.load.audio('audio_game_hit', 'assets/sound/game_hit.mp3');
        game.load.audio('audio_game_over', 'assets/sound/game_over.mp3');
        game.load.audio('audio_game_over_quit', 'assets/sound/game_over_quit.mp3');
        
        
        game.load.audio('audio_game_1', 'assets/sound/game_1.mp3');
        game.load.audio('audio_game_2', 'assets/sound/game_2.mp3');
        game.load.audio('audio_game_3', 'assets/sound/game_3.mp3');
        game.load.audio('audio_game_4', 'assets/sound/game_4.mp3');
        game.load.audio('audio_game_5', 'assets/sound/game_5.mp3');
	},

	create: function()
	{
		game.state.start('start');
	}
};