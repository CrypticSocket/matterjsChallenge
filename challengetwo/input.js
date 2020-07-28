export default class InputHandler{
    constructor(gBodies)
    {
        document.addEventListener('keydown', key => {
            // alert(key.keyCode)
            switch(key.keyCode)
            {
                case 37 : gBodies.player.goLeft()
                break;
                case 39 : gBodies.player.goRight()
                break;

                case 38: gBodies.player.jump()
            }
        })

        document.addEventListener('keyup', key => {
            switch(key.keyCode)
            {
                case 37 : if(gBodies.player.velocity.x < 0)
                            gBodies.player.stop()
                break;
                case 39 : if(gBodies.player.velocity.x > 0)
                            gBodies.player.stop()
                break;
                case 38 : if(gBodies.player.velocity.y < 0)
                            gBodies.player.stopJump()
                break;
            }
        })
    }
}