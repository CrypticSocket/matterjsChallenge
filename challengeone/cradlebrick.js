export default class Brick {
    constructor(game)
    {
        this.width = 400
        this.height = 40
        this.game = game

        this.position = {
            x: game.width/2,
            y: game.height/2 - 200
        }

        this.options = {
            isStatic : true,
            render : {
                fillStyle : '#400'
            }
        }

        this.brick = this.game.Bodies.rectangle(this.position.x, this.position.y, this.width, this.height, this.options)
    }

    draw()
    {
        this.game.objects.push(this.brick)
    }
}