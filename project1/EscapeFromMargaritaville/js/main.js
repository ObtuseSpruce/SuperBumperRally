let config = {
    width: 800,
    height: 800,
    // backgroundColor: 0xabcdef,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [Scene2, Scene1, Scene3]
    // {
    //     preload: preload,
    //     create: create,
    //     update: update
    // }
};

var player;
var wall;
var racetrack;
var finishline;
var timerInt;
var timer;
var cursors;
var timernum = 0
var score = 0
var t;

function onEvent () {
    timernum++
    console.log(score)
}

let game = new Phaser.Game(config);
// game.scene.add('titleScene')
// game.scene.start('titleScene')


