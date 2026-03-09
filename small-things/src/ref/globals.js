const INITIAL_CANVAS_SIZE = new V2(1024, 768);
let CANVAS_SIZE = INITIAL_CANVAS_SIZE
let BGM = {}; let SFX = {}; let IMG = {}; let FONTS = {};
let CURSOR = 'default';
let CURSOR_HOVER = null; 
let CURSOR_POS = new V2(0, 0);
let OVERLAY = null;
let SCENE = null;
let SCREEN = null;
let WORLD = {};
let MOUSE_DOWN = false;
let DEBUG = true;
let SETTINGS = {
    "TEXT_SPEED": 1
}
let FLAGS = { 
    investigatedForest: false
}