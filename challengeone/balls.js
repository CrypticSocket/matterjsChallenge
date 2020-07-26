export default class Balls {
    constructor(game, construct)
    {
        this.game = game
        this.radius = 25
        this.position = {
            x : game.width,
            y : game.height
        }
        this.objects = []

        this.options = {
            restitution : 1,
            friction : 0,
            frictionStatic : 0,
            frictionAir : 0,
            inertia : Infinity
        }

        for(let i = 0; i < 5; i++)
        {
            // this.ball = game.Bodies.circle(200, 200, 200)
            if(i==0)
            {
                this.ball = game.Bodies.circle(this.position.x/2 - 300 + i * 50 , this.position.y/2 - 150, this.radius, this.options)
            }
            else{
                this.ball = game.Bodies.circle(this.position.x/2 - 100 + i * 50 , this.position.y/2, this.radius, this.options)
            }
            this.constraints = {
                bodyA: construct.brick.brick,
                bodyB: this.ball,
                pointA: {x : -100 + i* 50, y : 0},
                // pointB: {x : 10, y : 10},
                length : 250,
                render : {
                    strokestyle : 'red'
                }
            }
            var constraintBall = game.Constraint.create(this.constraints)
            this.objects.push(this.ball, constraintBall)
        }

    }

    draw()
    {
        // this.objects.forEach(item => {
        //     this.game.objects.push(item)
        // })
        this.game.objects.push(... this.objects)
    }
}