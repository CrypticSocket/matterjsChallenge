export default class Enemy {
    constructor(game)
    {

        this.game = game
        this.radius = 10,
        this.options = {
            restitution : 0,
            friction : 0, 
            frictionStatic : 0,
            frictionAir : 0
        }

        this.enemy = this.game.Bodies.circle(game.width - 40, 20, this.radius, this.options)
    }

    draw()
    {
        this.game.objects.push(this.enemy)
    }
}