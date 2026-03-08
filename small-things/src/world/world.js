function getWorld() {
    _WORLD = {}

    const screen1 = new WorldScreen("1", "bg/bg1");
    screen1.interactables = [
        new Interactable('testInspect', new V2(10, 290), new V2(111, 443)),
        new Interactable('testGo2', new V2(483, 154), new V2(600, 290), {
            cursor: 'go-right', action: 'move', action_to: '2'
        }),
        new Interactable('enterHouse', new V2(642, 588), new V2(741, 711), {
            cursor: 'enter', action: 'move', action_to: '1a'
        }),
    ]
    _WORLD["1"] = screen1;

    const screen1a = new WorldScreen("1a", "bg/bg1a");
    screen1a.interactables = [
        new Interactable('exitHouse', new V2(0, 671), new V2(1024, 766), {
            cursor: 'exit', action: 'move', action_to: '1'
        }),
    ]
    _WORLD["1a"] = screen1a;


    const screen2 = new WorldScreen("2", "bg/bg2");
    screen2.interactables = [
        new Interactable('testGo1', new V2(0, 562), new V2(210, 776), {
            cursor: 'go-left-down', action: 'move', action_to: '1'
        }),
    ]
    _WORLD["2"] = screen2;


    return _WORLD;
}
WORLD = getWorld();

function changeScreen(to) {
    SCREEN = WORLD[to]
}

// debug 
SCREEN = WORLD["1"];