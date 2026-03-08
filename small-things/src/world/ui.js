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
        }
    }
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