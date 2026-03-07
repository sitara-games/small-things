const FILEPATH = '/small-things/assets/audio/'

const BGM_FILES = [ // always .mp3
    "massobeats_falling",
    "massobeats_swing",
]

const SFX_FILES = [ // always .mp3
    "vine_boom",
]

function preloadAudio() {
    const _BGM = {}
    for (let filename of BGM_FILES) {
        const s = new Audio(FILEPATH + "bgm/" + filename + ".mp3")
        _BGM[filename] = s;
    }
    const _SFX = {}
    for (let filename of SFX_FILES) {
        const s = new Audio(FILEPATH + "sfx/" + filename + ".mp3")
        _SFX[filename] = s;
    }
    return [_BGM, _SFX]
}