class WorldScreen {
    interactables = [];
    constructor (id, bgImage = null) {
        this.id = id
        this.bgImage = bgImage ?? id
    }
    draw() {
        image(IMG[this.bgImage], 0, 0)
        this.interactables.forEach(v => v.draw());
    }
}

class Interactable {
    constructor(id, pos, corner, options = {}) {
        this.id = id;
        this.pos = pos;
        this.corner = corner;
        this.cursor = options.cursor ?? "inspect"
        if (options.action) {
            this.action = options.action;
            this.action_to = options.action_to ?? null; 
        }
    }
    get size() {
        return new V2(abs(this.corner.x-this.pos.x), abs(this.corner.y-this.corner.x))
    }
    draw() {
        if (
            OVERLAY == null &&
            mid(CURSOR_POS.x, this.pos.x, this.corner.x) === CURSOR_POS.x &&
            mid(CURSOR_POS.y, this.pos.y, this.corner.y) === CURSOR_POS.y
        ) {
            CURSOR_HOVER = this;
            CURSOR = this.cursor;
        }
    }
    onclick() {
        switch (this.action) {
            case "move":
                changeScreen(this.action_to);
                break
            case "convo": 
                runConvo(this.action_to)
                break
            case "save": 
                saveGame()
                runConvo("universal/save")
                break;
        }
    }
}

function drawOverlay() {
    switch (OVERLAY) {
        case undefined:
        case null: 
            return;
        case "textbox":
            
            TEXTBOX.draw();
            break;
    }
}

class Textbox {
    visible_characters = 0;
    convo = null; page = 0;
    constructor() {}
    draw() {
        image(IMG["textbox/textbox"], 0, 0);
        if (this.sprite) {
            image(IMG[`textbox/${this.sprite}`], 43, 467)
        }
        if (this.display_text) {
            if (this.speaker) {
                textFont(FONTS[SPEAKER_FONTS[this.speaker]]);
                textSize(22);
                textAlign(LEFT);
                text(this.display_text.slice(0, this.visible_characters), 329, 543, 631, 672);
            } else {
                textFont(FONTS[SPEAKER_FONTS['default']]);
                textSize(22);
                textAlign(LEFT);
                text(this.display_text.slice(0, this.visible_characters), 50, 543, 631, 672);
            }
            
            if (!this.display_text_done) { 
                this.visible_characters += SETTINGS.TEXT_SPEED;
            }
        }
        if (this.speaker) {
            image(IMG["textbox/nametag"], 250, 670)
            textSize(44);
            textAlign(CENTER);
            text(this.speaker, 250, 680, 250, 690);
        }
        if (this.display_text_done) {
            CURSOR_HOVER = this; 
        }
    }
    onclick() {
        if (SCRIPT[this.convo][this.page].flags.length > 0) {
            SCRIPT[this.convo][this.page].flags
                .forEach((v) => FLAGS[v[0]] = v[1]);
            updateScriptAndWorld();
        }
        if (this.display_text_done) {
            this.page ++; 
            this.visible_characters = 0;
        } 
        if (this.pages_done) {
            this.page = 0;
            OVERLAY = null;
        }
    }
    get sprite() {
        if (SCRIPT[this.convo]) return SCRIPT[this.convo][this.page]?.sprite;
        return undefined;
    }
    get display_text() {
        if (SCRIPT[this.convo]) return SCRIPT[this.convo][this.page]?.display_text;
        return undefined;
    }   
    get speaker() {
        if (SCRIPT[this.convo]) return SCRIPT[this.convo][this.page]?.speaker;
        return undefined;
    }   
    get display_text_done() {
        return (this.display_text && (this.visible_characters >= this.display_text.length))
    }
    get pages_done() {
        return (SCRIPT[this.convo].length <= this.page)
    }
}
const TEXTBOX = new Textbox();

function runConvo(convo) {
    TEXTBOX.convo = convo;
    TEXTBOX.page = 0;
    TEXTBOX.visible_characters = 0;
    OVERLAY = 'textbox';
}

function handleMouse(canvas_size, scale) {
    CURSOR_POS.x = mouseX/scale; CURSOR_POS.y = mouseY/scale;

    if (mid(mouseX, 0, canvas_size.x) === mouseX && mid(mouseY, 0, canvas_size.y) === mouseY) {
        document.body.style.cursor = "none";
        image(IMG[`cursor/${CURSOR}`] ?? IMG["cursor/default"], CURSOR_POS.x -32, CURSOR_POS.y -32);
    } else {
        document.body.style.cursor = "auto";
    }
    
    if (MOUSE_DOWN && CURSOR_HOVER) {
        CURSOR_HOVER.onclick();
    }

    MOUSE_DOWN = false;
}