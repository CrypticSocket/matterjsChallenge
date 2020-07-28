export default class Platforms {
    constructor(game)
    {
        this.game = game

        this.options = {
            isStatic : true,
            restitution : 0,
            render : {
                fillStyle : '#400'
            }
        }
        this.p1 = game.Bodies.rectangle(500, 150, 1000, 40, {...this.options, angle : 0.1})
        this.p2 = game.Bodies.rectangle(game.width - 500, 300, 1000, 40, {...this.options, angle : -0.1})
        this.p3 = game.Bodies.rectangle(500, 450, 1000, 40, {...this.options, angle : 0.1})
        this.p4 = game.Bodies.rectangle(game.width - 500, 600, 1000, 40, {...this.options, angle : -0.1})

    }

    draw()
    {
        this.game.objects.push(this.p1, this.p2, this.p3, this.p4)
    }
}