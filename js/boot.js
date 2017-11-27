/**
 * 引动页面
 */
var bootState = function (game) {

    this.init = function () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.stage.setBackgroundColor(0xffffff);
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
    }
    this.preload = function () {
        game.load.image('logo', 'images/logo.png');
		// game.load.image('logo2', 'images/logo2.png');
        game.load.image('loading_line', 'images/loading_line.jpg');
        game.load.atlasXML('quan', 'images/elf-quan/sprites.png', 'images/elf-quan/sprites.xml')
    }
    this.create = function () {
        game.state.add('loader', loaderState)
        game.state.start('loader');
        shareOption({
			title: '送您一份免费房屋体检服务，请查收！',
			link: 'http://saas.zeego.cn/Project/GreenCityH5/index.html',
			pic: 'http://saas.zeego.cn/Project/GreenCityH5/images/my.jpg',
            desc: '房屋生病需体检，早治早好更健康！',
			success: function() {
				// 成功回调
			},
			cancel: function() {
				// 失败回调
			}
		})
    }
}