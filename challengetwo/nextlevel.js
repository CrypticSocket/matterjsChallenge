export default class NextLevel {
    constructor(game)
    {
        this.game = game

        this.properties = {
            isStatic : true,
            render : {
                fillStyle : '#FAF'
            }
        }
        this.block1 = game.Bodies.rectangle(40, 40, 20, 5, {...this.properties, angle : -0.9})
        this.block2 = game.Bodies.rectangle(40, 54, 20, 5, {...this.properties, angle : 0.9})
        this.block3 = game.Bodies.rectangle(50, 40, 20, 5, {...this.properties, angle : 0.9})
        this.block4 = game.Bodies.rectangle(50, 54, 20, 5, {...this.properties, angle : -0.9})

        //  this.constraintprop1={
        //     bodyA : this.block1,
        //     bodyB : this.block3,
        //     stiffness : 1,
        //     length : 10
        // }

        // this.constraintprop2={
        //     bodyA : this.block2,
        //     bodyB : this.block4,
        //     stiffness : 1,
        //     length : 10
        // }

        // this.constraintprop3={
        //     bodyA : this.block1,
        //     bodyB : this.block2,
        //     stiffness : 1,
        //     length : 10
        // }

        // this.constraint1 = game.Constraint.create(this.constraintprop1)
        // this.constraint2 = game.Constraint.create(this.constraintprop2)
        // this.constraint3 = game.Constraint.create(this.constraintprop3)
        
        // this.compositeprop = {
        //     bodies : [this.block1, this.block2, this.block3, this.block4],
        //     constraints : [this.constraint1, this.constraint2, this.constraint3]
        // }

        // this.composite = game.Composite.create(this.compositeprop)
        
       
    }

    draw()
    {
        this.game.objects.push(this.block1, this.block2, this.block3, this.block4)
    }
}