export default class Walls {
    constructor(game)
    {
        this.width = game.width
        this.height = game.height

        this.game = game

        this.options = {
            isStatic : true,
            restitution : 1
        }

        this.bottomWall = game.Bodies.rectangle(this.width/2, this.height + 20, this.width, 80, this.options)
        this.topWall = game.Bodies.rectangle(this.width/2, -20, this.width, 80, this.options)
        this.leftWall = game.Bodies.rectangle(-20, this.height/2, 80, this.height, this.options)
        this.rightWall = game.Bodies.rectangle(this.width + 20, this.height/2, 80, this.height, this.options)

    }

    draw()
    {
        this.game.objects.push(this.leftWall, this.rightWall, this.bottomWall, this.topWall)
    }
}