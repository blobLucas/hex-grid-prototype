
//PIXI SHORTCUTS
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite;


//VARIABLES
let state;
let gridSize = new vector2(50,50);
let gridOrigin = new vector2(256,256);

//APP DECLARATION
let app = new Application({
    width: 512, 
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
});


//LOADING & SETUP
loader
    .on("progress", loadProgressHandler)
    .load(setup);

function loadProgressHandler(loader, resource) {
    console.log('loading : ' + resource.url);
    console.log("progress : " + loader.progress + "%");
}

function setup () {
    state = play;
    app.ticker.add(delta => GameLoop(delta));

    gridLayout = new Layout(Layout.flat, gridSize, gridOrigin);

    grid = [
        new hex(0,0),
        new hex(0,1),
        new hex(-1,1),
        new hex(1,-1),
        new hex(-1,0),
        new hex(0,-1),
        new hex(1,0),
        new hex(-1,-1),
        new hex(1,1),
        new hex(-2,0),
        new hex(0,-2),
        new hex(2,0),
        new hex(0,2)
    ]
    
    for (let i in grid) {
        grid[i].draw(gridLayout);
    }

}


//GAMELOOP & STATES
function GameLoop (delta) {
    state(delta);
}

function play (delta) {

}
