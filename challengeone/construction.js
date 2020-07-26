import Walls from "./walls.js"
import Brick from "./cradlebrick.js"
import Balls from "./balls.js"

export default class Construct {
    constructor(game){
        this.game = game

        this.wall = new Walls(this.game)
        
        // New stuff here

        this.brick = new Brick(game)
        this.balls = new Balls(game, this)

        // End new stuff

        this.objects = [this.wall, this.brick, this.balls]
        this.draw()

    }

    draw()
    {
        this.objects.forEach(item =>
                item.draw()
            )
    }
}