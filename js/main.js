var c = {
    ShowHide: function(obj, boolean, time, callBack) {
        // 显示隐藏
        if (!time) time = 500;
        if (!callBack) callBack = Function;
        if (boolean) {
            game.add
                .tween(obj)
                .to({alpha: 1, visible: true}, time, 'Linear', true)
                .onComplete.add(function() {
                    callBack();
                });
        } else {
            game.add
                .tween(obj)
                .to({alpha: 0, visible: false}, time, 'Linear', true)
                .onComplete.add(function() {
                    callBack();
                });
        }
    },
    Text: function(y, text, style) {
        var name = game.add.text(game.world.centerX, y, text, style);
        name.alpha = 0;
        name.anchor.set(0.5);
        return name;
    },
    addImg: function(x, y, name) {
        var img = game.add.image(x, y, name);
        img.alpha = 0;
        return img;
    },
    twinkle: function(obj, callBack) {
        var sum = 0;
        var time = setInterval(function() {
            if (sum % 2 == 0) {
                obj.alpha = 1;
            } else {
                obj.alpha = 0;
            }
            if (sum == 4) {
                clearInterval(time);
                setTimeout(function() {
                    callBack();
                }, 1000);
                return;
            }
            sum++;
        }, 300);
    }
};
var mainState = function(game) {
    var audio = document.getElementById('audio');
    var sum = 0;
    audio.play();
    this.init = function() {
        $('#music').on('click', function() {
            if (sum % 2 === 0) {
                audio.pause();
                $('#music').attr('src', './images/music1.png');
            } else {
                audio.play();
                $('#music').attr('src', './images/music2.png');
            }
            sum++;
        });
    };
    this.create = function() {
        main1();

        function main1() {
            var img01 = game.add.image(0, 0, 'img01');
            var img02 = c.addImg(0, 0, 'img02');
            img01.scale.set(0.5);
            img02.scale.set(0.5);
            img02.anchor.set(1);
            img02.x = img02.width;
            img02.y = img02.height;
            setTimeout(function() {
                var style = {
                    font: '28px Arial',
                    fill: '#05cfaf',
                    fontWeight: '400'
                };
                var text1 = c.Text(
                    400,
                    '工作在外总有不如意，而家却是永恒的港湾，',
                    style
                );
                var text2 = c.Text(450, '风雨再大，家也要固若金汤！', style);
                var text3 = c.Text(520, '但你的家，是否足够安全陪你走向远方?', {
                    font: '32px Arial',
                    fill: '#05cfaf',
                    fontWeight: '400'
                });

                text3.addColor('#e7b222', 9);
                text3.addColor('#05cfaf', 11);
                c.ShowHide(img02, true, '', function() {
                    img01.alpha = 0;
                    c.ShowHide(text1, true, 750, function() {
                        c.ShowHide(text2, true, 750, function() {
                            c.ShowHide(text3, true, 750, function() {
                                setTimeout(function() {
                                    var groupText = game.add.group();
                                    groupText.add(text1);
                                    groupText.add(text2);
                                    groupText.add(text3);
                                    c.ShowHide(groupText, false, '');
                                    game.add
                                        .tween(img02.scale)
                                        .to({x: 1, y: 1}, 1000, 'Linear', true)
                                        .onComplete.add(function() {
                                            main2();
                                        });
                                }, 1500);
                            });
                        });
                    });
                });
            }, 500);
        }
        function main2() {
            var img03 = c.addImg(0, 0, 'img03');
            var img04 = c.addImg(78, 249, 'img04');
            var img05 = c.addImg(132, 260, 'img05');
            c.ShowHide(img03, true, '');
            var door = game.add.sprite(372, 641, 'door');
            door.animations.add('door', [0, 1, 2, 1]);
            door.play('door', 3, true);
            setTimeout(function() {
                img04.alpha = 1;
                // c.ShowHide(img04, true, 0, function() {
                var text1 = game.add.text(
                    174,
                    395,
                    '开卧室门时，\n门把手\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t，\n使用不便。',
                    {
                        font: '26px Arial',
                        fill: '#000',
                        fontWeight: '400'
                    }
                );
                var text2 = game.add.text(258, 442, '松动脱落', {
                    font: '32px Arial',
                    fill: '#ea3862',
                    fontWeight: '400'
                });
                text1.lineSpacing = 15;
                text1.alpha = 0;
                text2.alpha = 0;
                c.ShowHide(text1, true, '');
                c.ShowHide(text2, true, '', function() {
                    c.twinkle(img05, function() {
                        main3();
                    });
                });
                // });
            }, 500);
        }
        function main3() {
            var lamp;
            var img06 = c.addImg(0, 0, 'img06');
            var img07 = c.addImg(224, 408, 'img07');
            c.ShowHide(img06, true, '', function() {
                setTimeout(function() {
                    lamp = game.add.sprite(0, 0, 'lamp');
                    lamp.animations.add('lamp', [0, 2, 1, 2, 1, 2, 0, 0]);
                    lamp
                        .play('lamp', 5, false, true)
                        .onComplete.add(function() {
                            // setTimeout(function() {
                                img07.alpha = 1
                                // c.ShowHide(img07, true, 1000, function() {
                                    var text1 = game.add.text(
                                        300,
                                        502,
                                        '一开灯，灯光忽闪上演\t“\t\t\t\t\t\t\t\t\t\t\t”，\n关灯滋滋异响还',
                                        {
                                            font: '26px Arial',
                                            fill: '#000',
                                            fontWeight: '400'
                                        }
                                    );
                                    text1.lineSpacing = 15;
                                    var text2 = game.add.text(
                                        580,
                                        500,
                                        '鬼片',
                                        {
                                            font: '36px Arial',
                                            fill: '#ea3862',
                                            fontWeight: '400'
                                        }
                                    );
                                    var text3 = game.add.text(
                                        482,
                                        547,
                                        '忽然跳闸！',
                                        {
                                            font: '36px Arial',
                                            fill: '#ea3862',
                                            fontWeight: '400'
                                        }
                                    );
                                    text1.alpha = 0;
                                    text2.alpha = 0;
                                    text3.alpha = 0;
                                    c.ShowHide(text1, true, '');
                                    c.ShowHide(text2, true, '');
                                    c.ShowHide(text3, true, '');
                                    var img08 = c.addImg(656, 413, 'img08');
                                    c.twinkle(img08, function() {
                                        main4();
                                    });
                                // });
                            // }, 0);
                        });
                }, 500);
            });
        }
        function main4() {
            var img09 = c.addImg(0, 0, 'img09');
            c.ShowHide(img09, true, '', function() {
                var cabinet = game.add.sprite(287, 211, 'cabinet');
                cabinet.animations.add('cab', [0, 1, 2, 1, 2, 3, 4, 5, 4, 5]);
                cabinet.play('cab', 6, false).onComplete.add(function() {
                    var img10 = game.add.image(12, 450, 'img10');
                    var text1 = game.add.text(76, 537, '拿衣服时，橱柜门', {
                        font: '26px Arial',
                        fill: '#000',
                        fontWeight: '400'
                    });
                    var text2 = game.add.text(74, 585, '错位松垮、推拉不畅。', {
                        font: '36px Arial',
                        fill: '#ea3862',
                        fontWeight: '400'
                    });
                    text1.alpha = 0;
                    text2.alpha = 0;
                    c.ShowHide(text1, true, '');
                    c.ShowHide(text2, true, '', function() {
                        var img08 = c.addImg(408, 422, 'img08');
                        c.twinkle(img08, function() {
                            main5();
                        });
                    });
                });
            });
        }
        function main5() {
            var img11 = c.addImg(0, 0, 'img11');
            c.ShowHide(img11, true, '', function() {
                var water = game.add.sprite(183, 793, 'water');
                water.animations.add('water', [0, 1, 2]);
                water.play('water', 3, true);
                var img12 = game.add.image(60, 343, 'img12');
                var text1 = game.add.text(
                    150,
                    407,
                    '用水时，\n水龙头出水\n刺鼻难闻偶尔还流出',
                    {
                        font: '26px Arial',
                        fill: '#000',
                        fontWeight: '400'
                    }
                );
                text1.lineSpacing = 15;
                var text2 = game.add.text(280, 451, '浑浊发黄，', {
                    font: '36px Arial',
                    fill: '#ea3862',
                    fontWeight: '400'
                });
                var text3 = game.add.text(152, 554, '不明异物！', {
                    font: '36px Arial',
                    fill: '#ea3862',
                    fontWeight: '400'
                });
                text1.alpha = 0;
                text2.alpha = 0;
                text3.alpha = 0;
                c.ShowHide(text1, true, '');
                c.ShowHide(text2, true, '');
                c.ShowHide(text3, true, '', function() {
                    var img08 = c.addImg(408, 354, 'img08');
                    c.twinkle(img08, function() {
                        main6();
                    });
                });
            });
        }
        function main6() {
            var img13 = c.addImg(0, 0, 'img13');
            c.ShowHide(img13, true, '', function() {
                var pond = game.add.sprite(0, 697, 'pond');
                pond.animations.add('pond', [0, 1, 2, 3, 4, 5, 6, 7]);
                pond.play('pond', 5, false).onComplete.add(function() {
                    var img04 = game.add.image(4, 167, 'img04');
                    var text1 = game.add.text(
                        90,
                        301,
                        '关水后，台盆\n如沙漏，堵塞严重\n让人着急抓狂！',
                        {
                            font: '26px Arial',
                            fill: '#000',
                            fontWeight: '400'
                        }
                    );
                    text1.lineSpacing = 15;
                    var text2 = game.add.text(246, 291, '下水慢', {
                        font: '36px Arial',
                        fill: '#ea3862',
                        fontWeight: '400'
                    });
                    text1.alpha = 0;
                    text2.alpha = 0;
                    c.ShowHide(text1, true, '');
                    c.ShowHide(text2, true, '', function() {
                        var img08 = c.addImg(416, 240, 'img08');
                        c.twinkle(img08, function() {
                            main7();
                        });
                    });
                });
            });
        }
        function main7() {
            $('#img').attr('src', './images/ewm.jpg');
            var img14 = c.addImg(0, 0, 'img14');
            var icon1 = c.addImg(4, 184, 'icon1');
            var icon2 = c.addImg(130, 74, 'icon2');
            var icon3 = c.addImg(298, 32, 'icon3');
            var icon4 = c.addImg(468, 74, 'icon4');
            var icon5 = c.addImg(604, 184, 'icon5');
            var icon6 = c.addImg(26, 301, 'icon6');
            var icon7 = c.addImg(166, 474, 'icon7');
            c.ShowHide(img14, true, '', function() {
                c.ShowHide(icon1, true, 400, function() {
                    c.ShowHide(icon2, true, 400, function() {
                        c.ShowHide(icon3, true, 400, function() {
                            c.ShowHide(icon4, true, 400, function() {
                                c.ShowHide(icon5, true, 400, function() {
                                    c.ShowHide(icon6, true, '', function() {
                                        var text1 = game.add.text(
                                            172,
                                            428,
                                            '房屋小问题是不是让你不胜其烦？',
                                            {
                                                font: '26px Arial',
                                                fill: '#ea3862',
                                                fontWeight: '400'
                                            }
                                        );
                                        text1.alpha = 0;
                                        c.ShowHide(icon7, true, '');
                                        c.ShowHide(text1, true, '', function() {
                                            setTimeout(function() {
                                                $('img').fadeIn(1000);
                                            }, 2000);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
    };
};
