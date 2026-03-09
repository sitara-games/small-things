class Line {
    constructor(speaker, display_text, sprite, flags = []) {
        this.speaker = speaker;
        this.display_text = display_text;
        this.sprite = sprite;
        this.flags = flags;
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
    "universal/save": [
        new Line(null, "Let me take a few moments to write some things down...", null),
        new Line(null, "(Game saved.)", null),
    ],
    "inspectFruit": [
        new Line(null, "It's the star-shaped fruit of the World Tree.", null),
        new Line(null, "Likely the last one Sitara will ever produce.", null),
        new Line(null, "Tomorrow, we'll be planting its magical seed at the star-shaped fruit festival.", null, 
            [['investigatedForest', true]]),
    ],
    "goTownBeforeInvestigating": [
        new Line(null, "Hmmm... I should probably take a quick look around here before I go into town.", null),
    ],
    

}

function updateScriptAndWorld() {
    if (FLAGS.investigatedForest) {
        let f = WORLD["forest"].interactables[1];
        f.action = 'move';
        f.action_to = 'town';
    }
}
