/**
 * 加载资源
 */
var loaderState = function(game) {
    var progressText, logo1, logo2;
    this.init = function() {
        logo = game.add.image(0, 276, 'logo');
        logo.x = (game.world.width - logo.width) / 2;
        progressText = game.add.text(0, 900, '0%  ', {
            fill: '#000',
            font: '28px Arial',
            align: 'center'
        });
        progressText.x = (game.world.width - progressText.width) / 2;
        // var quan = game.add.sprite(logo.x, 276, 'quan');
        // quan.animations.add('quan', [0, 1, 2, 3]);
        // quan.play('quan', 3, true);
        loading_line = game.add.tileSprite(
            100,
            game.world.centerY + 360,
            1,
            10,
            'loading_line'
        );
    };
    this.preload = function() {
        game.load.atlasXML(
            'door',
            'images/elf-door/sprites.png',
            'images/elf-door/sprites.xml'
        );
        game.load.atlasXML(
            'lamp',
            'images/elf-lamp/sprites.png',
            'images/elf-lamp/sprites.xml'
        );
        game.load.atlasXML(
            'cabinet',
            'images/elf-cabinet/sprites.png',
            'images/elf-cabinet/sprites.xml'
        );
        game.load.atlasXML(
            'water',
            'images/elf-water/sprites.png',
            'images/elf-water/sprites.xml'
        );
        game.load.atlasXML(
            'pond',
            'images/elf-pond/sprites.png',
            'images/elf-pond/sprites.xml'
        );
        game.load.image('img01', 'images/img01.jpg');
        game.load.image('img02', 'images/img02.jpg');
        game.load.image('img03', 'images/img03.jpg');
        game.load.image('img04', 'images/img04.png');
        game.load.image('img05', 'images/img05.png');
        game.load.image('img06', 'images/img06.jpg');
        game.load.image('img07', 'images/img07.png');
        game.load.image('img08', 'images/img08.png');
        game.load.image('img08', 'images/img08.png');
        game.load.image('img09', 'images/img09.jpg');
        game.load.image('img10', 'images/img10.png');
        game.load.image('img11', 'images/img11.jpg');
        game.load.image('img12', 'images/img12.png');
        game.load.image('img13', 'images/img13.jpg');
        game.load.image('img14', 'images/img14.jpg');
        game.load.image('icon1', 'images/icon1.png');
        game.load.image('icon2', 'images/icon2.png');
        game.load.image('icon3', 'images/icon3.png');
        game.load.image('icon4', 'images/icon4.png');
        game.load.image('icon5', 'images/icon5.png');
        game.load.image('icon6', 'images/icon6.png');
        game.load.image('icon7', 'images/icon7.png');
        game.load.onFileComplete.add(function(progress) {
            progressText.text = progress + '%';
            loading_line.width += 21;
        });
    };
    this.create = function() {
        game.state.add('mainState', mainState);
        game.state.start('mainState');
    };
};
