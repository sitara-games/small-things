class Line {
    constructor(speaker, display_text, sprite) {
        this.speaker = speaker
        this.display_text = display_text
        this.sprite = sprite
    }
}

SPEAKER_FONTS = {
    default: "Indie_Flower/IndieFlower-Regular",
    "Birbio": "Barrio/Barrio-Regular",
}

SCRIPT = {
    "debug": [
        new Line("Birbio", "Hello. I'm Birbio!", "birbio/hoppy"),
        new Line("Birbio", "I'm here for debug purposes.", "birbio/default"),
        new Line("Birbio", "That's all I have to say.", "birbio/default"),
    ],
    "debugInspect": [
        new Line(null, "This is something on the screen.", null),
    ],
}

