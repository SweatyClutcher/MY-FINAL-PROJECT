class SpaceShip{
    constructor(x, y, width, height){
        var options={isStatic : true, 
            frictionAir : 0,
            restitution : 0
        }
        this.image = loadImage("images/SpaceShip.png")
        this.bulletImg = loadImage("images/SpaceShipBullet.png")
        this.image1 = loadImage("images/Hatchling.png")
        this.image2 = loadImage("images/PrimoGeovishap.png")
        this.image3 = loadImage("images/Azdaha.png")
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    move(){
        if (GameState === 1){
            if(keyDown(UP_ARROW)){
                this.body.position.y -= 10
            }
            if(keyDown(DOWN_ARROW)){
                this.body.position.y += 10
            }
            if(keyDown(32)){
                if(frameCount % 20 === 0){
                    bullet = createSprite(200, 200, 30, 30);
                    bullet.addImage(this.bulletImg);
                    bullet.velocityX += 10
                    bullet.y = this.body.position.y
                    bullet.scale = 0.1
                }
            }
            if(frameCount % 50 === 0){
                a1 = createSprite(1100, random(100, displayWidth - 100), 30, 30);
                a1.addImage(this.image1);
                a1.velocityX -= 4
                a1.scale = 0.1
            }
        }
        drawSprites();
    }
}