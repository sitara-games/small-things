class Scene {
    constructor (id, draw_fn) {
        this.id = id;
        this.draw_fn = draw_fn
    }
    draw() {
        this.draw_fn();
    }
}

SCENES = {
    "game": new Scene("game", gameSceneDraw)
}

// debug 
SCENE = SCENES["game"];