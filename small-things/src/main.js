const INITIAL_CANVAS_SIZE = new V2(1024, 768);
let CANVAS_SIZE = INITIAL_CANVAS_SIZE
let BGM = {}; let SFX = {};

function init() {
    [BGM, SFX] = preloadAudio();
}

function setup() {
    init();
    createCanvas(CANVAS_SIZE.x, CANVAS_SIZE.y);
    updateWindowSize();
}

function draw() {
    background(67);
    SCALE = CANVAS_SIZE.x / INITIAL_CANVAS_SIZE.x
    scale(SCALE);

    noStroke();
    fill('#e07d1f');
    square(0, 0, 1022);
    resizeScreen()
}

function mouseClicked() {
    // SFX["vine_boom"].play();
}

function updateWindowSize() { // do not call every frame, gets slow
    resizeCanvas(windowWidth, windowWidth*CANVAS_SIZE.y/CANVAS_SIZE.x);
    scale(windowWidth/CANVAS_SIZE.x)
}

function resizeScreen() {
    // resize screen?
    let originalWidth = CANVAS_SIZE.x;
    if (windowWidth * 3 <= windowHeight * 4) {
        CANVAS_SIZE = new V2(windowWidth, windowWidth * (3/4));
    } else {
        CANVAS_SIZE = new V2(windowHeight*(4/3), windowHeight);
    }

    if (originalWidth != CANVAS_SIZE.x) {
        resizeCanvas(CANVAS_SIZE.x, CANVAS_SIZE.y);
    }
}
