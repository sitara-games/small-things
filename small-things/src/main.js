function preload() {
    [BGM, SFX] = preloadAudio();
    IMG = preloadImg();
    FONTS = preloadFonts();
}

function setup() {
    createCanvas(CANVAS_SIZE.x, CANVAS_SIZE.y);
    updateWindowSize();
}

function draw() {
    background(67);
    resizeScreen()
    SCALE = CANVAS_SIZE.x / INITIAL_CANVAS_SIZE.x;
    scale(SCALE);

    CURSOR = 'default'
    CURSOR_HOVER = null;
    noStroke();
    
    if (SCENE) SCENE.draw();
    if (DEBUG) debugDraw();

    handleMouse(CANVAS_SIZE, SCALE);
}

function mouseClicked() {
    MOUSE_DOWN = true;
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

function debugDraw() {
    textFont('null');
    textSize(22);
    textAlign(LEFT);
    text(`Mouse POS: ${mouseX/SCALE} / ${mouseY/SCALE}`, 10, 20);
}

function makeSaveData() {
    return JSON.stringify({
        "SCREEN_ID": SCREEN.id,
        "SETTINGS": SETTINGS,
        "FLAGS": FLAGS, 
    })
}

function saveGame() {
    localStorage.setItem("saveData", makeSaveData());
}

function loadGame() {
    const saveData = JSON.parse(localStorage.getItem("saveData"));
    if (!saveData) return;
    SETTINGS = saveData.SETTINGS;
    FLAGS = saveData.FLAGS;
    SCREEN = WORLD[saveData.SCREEN_ID];
    OVERLAY = null;
    updateScriptAndWorld();
}