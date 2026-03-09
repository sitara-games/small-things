function getWorld() {
    _WORLD = {}

    const screenForest = new WorldScreen("forest", "bg/forest");
    screenForest.interactables = [
        new Interactable('goRiver', new V2(0, 435), new V2(135, 600), {
            cursor: 'go-left', action: 'move', action_to: 'river'
        }),
        new Interactable('goTown', new V2(924, 526), new V2(1024, 670), {
            cursor: 'go-right', action: 'move', action_to: 'town'
        }),
    ]
    _WORLD["forest"] = screenForest;

    const screenRiver = new WorldScreen("river", "bg/river");
    screenRiver.interactables = [
        new Interactable('goForest', new V2(770, 580), new V2(1024, 766), {
            cursor: 'go-right-down', action: 'move', action_to: 'forest'
        }),
        new Interactable('goCastle', new V2(0, 166), new V2(122, 350), {
            cursor: 'go-left', action: 'move', action_to: 'castle'
        }),
        
    ]
    _WORLD["river"] = screenRiver;

    const screenCastle = new WorldScreen("castle", "bg/castle");
    screenCastle.interactables = [
        new Interactable('goRiver', new V2(900, 566), new V2(1024, 766), {
            cursor: 'go-right-down', action: 'move', action_to: 'river'
        }),
    ]
    _WORLD["castle"] = screenCastle;

    const screenTown = new WorldScreen("town", "bg/town");
    screenTown.interactables = [
        new Interactable('goForest', new V2(0, 607), new V2(170, 766), {
            cursor: 'go-left-down', action: 'move', action_to: 'forest'
        }),
        new Interactable('goMine', new V2(740, 337), new V2(811, 416), {
            cursor: 'go-right', action: 'move', action_to: 'mine'
        }),
    ]
    _WORLD["town"] = screenTown;

    const screenMine = new WorldScreen("mine", "bg/mine");
    screenMine.interactables = [
        new Interactable('goTown', new V2(0, 607), new V2(170, 766), {
            cursor: 'go-left-down', action: 'move', action_to: 'town'
        }),
    ]
    _WORLD["mine"] = screenMine;

    return _WORLD;

    
}
WORLD = getWorld();

function changeScreen(to) {
    SCREEN = WORLD[to]
}

// debug 
SCREEN = WORLD["forest"];