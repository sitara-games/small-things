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
    "bg/bg1",
    "bg/bg1a",
    "bg/bg2",
    "bg/bg2a",
    "cursor/default",
    "cursor/enter",
    "cursor/exit",
    "cursor/go-left",
    "cursor/go-right",
    "cursor/go-left-down",
    "cursor/go-right-down",
    "cursor/inspect",
]

function preloadImg() {
    let _IMG = {};
    for (let filename of IMG_FILES) {
        const f = loadImage(IMG_FILEPATH + filename + ".png");
        _IMG[filename] = f;
    }
    return _IMG;
}