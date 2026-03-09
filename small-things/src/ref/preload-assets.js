const AUDIO_FILEPATH = "/small-things/assets/audio/";

const BGM_FILES = [ // always .mp3
    "massobeats-falling",
    "massobeats-swing",
]

const SFX_FILES = [ // always .mp3
    "vine-boom",
]

function preloadAudio() {
    const _BGM = {}
    for (let filename of BGM_FILES) {
        const f = new Audio(AUDIO_FILEPATH + "bgm/" + filename + ".mp3")
        _BGM[filename] = f;
    }
    const _SFX = {}
    for (let filename of SFX_FILES) {
        const f = new Audio(AUDIO_FILEPATH + "sfx/" + filename + ".mp3")
        _SFX[filename] = f;
    }
    return [_BGM, _SFX]
}

const IMG_FILEPATH = "/small-things/assets/img/";

const IMG_FILES = [ // always .png
    "bg/castle",
    "bg/forest",
    "bg/forest-house",
    "bg/mine",
    "bg/river",
    "bg/town",
    "cursor/default",
    "cursor/enter",
    "cursor/exit",
    "cursor/go-left",
    "cursor/go-right",
    "cursor/go-left-down",
    "cursor/go-right-down",
    "cursor/inspect",
    "cursor/save",
    "textbox/textbox",
    "textbox/nametag",
    "textbox/birbio/default",
    "textbox/birbio/angy",
    "textbox/birbio/hoppy",
]

function preloadImg() {
    let _IMG = {};
    for (let filename of IMG_FILES) {
        const f = loadImage(IMG_FILEPATH + filename + ".png");
        _IMG[filename] = f;
    }
    return _IMG;
}

const FONT_FILEPATH = "/small-things/assets/fonts/";

const FONT_FILES = [
    "Barrio/Barrio-Regular",
    "Indie_Flower/IndieFlower-Regular",
    "Schoolbell/Schoolbell-Regular"
]

function preloadFonts() {
    let _FONTS = {};
    for (let filename of FONT_FILES) {
        const f = loadFont(FONT_FILEPATH + filename + ".ttf");
        _FONTS[filename] = f;
    }
    return _FONTS;
}