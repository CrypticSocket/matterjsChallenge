import Walls from "./walls.js"
import Player from "./player.js"
import Platforms from "./platforms.js"
import InputHandler from "./input.js"

export default class Construct {
    constructor(game){
        this.game = game

        this.wall = new Walls(this.game)
        
        // New stuff here

        this.player = new Player(this.game)
        this.platforms = new Platforms(this.game)
        
        new InputHandler(this)

        // End new stuff

        this.objects = [this.wall, this.player, this.platforms]
        this.draw()

    }

    draw()
    {
        this.objects.forEach(item =>
                item.draw()
            )
    }
}