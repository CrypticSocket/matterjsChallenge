export default class Player {
    constructor(game)
    {
        this.game = game
        this.radius = 20;
        this.position = {
            x: 20, 
            y: game.height - 20
        }

        this.velocity = {
            x : 0,
            y : 0
        }

        this.options = {
            restitution : 0,
            friction : 0,
            frictionAir : 0,
            frictionStatic : 0,
            inertia : 0
        }

        // this.player = game.Bodies.circle(200, 200, this.radius, this.options)
        this.player = game.Bodies.circle(this.position.x, this.position.y, this.radius, this.options)
        game.Body.setVelocity(this.player, this.velocity)
        game.Body.setMass(this.player, 10000)
    }

    draw()
    {
        this.game.objects.push(this.player)
    }

    goLeft()
    {
        this.velocity = this.player.velocity
        this.velocity.x = -10
        this.game.Body.setVelocity(this.player, this.velocity)
        // this.game.Body.applyForce(this.player, {x : 0, y : 0}, this.velocity)
    }

    goRight()
    {
        this.velocity = this.player.velocity
        this.velocity.x = 10
        this.game.Body.setVelocity(this.player, this.velocity)
        // this.game.Body.applyForce(this.player, {x : 0, y : 0}, this.velocity)
    }

    jump()
    {
        this.velocity = this.player.velocity
        this.velocity.y = -20
        this.game.Body.setVelocity(this.player, this.velocity)
    }

    stop()
    {
        this.velocity.x = 0
        this.game.Body.setVelocity(this.player, this.velocity)
        // this.game.Body.applyForce(this.player, {x : 0, y : 0}, this.velocity)
    }

    stopJump()
    {
        this.velocity = this.player.velocity
        this.velocity.y = 0
        this.game.Body.setVelocity(this.player, this.velocity)
    }
}