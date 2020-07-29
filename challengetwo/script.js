import Construct from "./construction.js"

export default class Game {
    constructor()
    {
        this.Bodies = Matter.Bodies
        this.Engine = Matter.Engine
        this.Render = Matter.Render
        this.World = Matter.World
        this.Constraint = Matter.Constraint
        this.Body = Matter.Body
        this.Composite = Matter.Composite

        this.engine = this.Engine.create()

        this.width = window.innerWidth - 20,
        this.height = window.innerHeight - 20

        this.engine.world.gravity.y = 1

        this.render = this.Render.create({
            element : document.body,
            engine : this.engine,
            options : {
                width : this.width,
                height: this.height,
                wireframes: false,
                hasBounds: true
            }
        })

        // this.box = this.Bodies.rectangle(400, 200, 200, 400)
        this.objects = []
        new Construct(this)

        this.World.add(this.engine.world, this.objects)

        this.Engine.run(this.engine)
        this.Render.run(this.render)
    }
}

let x = new Game()