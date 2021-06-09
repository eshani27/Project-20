var garden, gardenImg
var cat, catImg1, catImg2, catImg3
var mouse, mouseImg1, mouseImg2, mouseImg3
function preload() {
    //load the images here
gardenImg = loadImage("image/garden.png")
catImg1 = loadAnimation("image/cat1.png")
catImg2 = loadAnimation("image/cat2.png", "image/cat3.png")
catImg3 = loadAnimation("image/cat4.png")
mouseImg1 = loadAnimation("image/mouse1.png")
mouseImg2 = loadAnimation("image/mouse2.png", "image/mouse3.png")
mouseImg3 = loadAnimation("image/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600)
cat.addAnimation("cat1", catImg1)
cat.scale = 0.2
mouse = createSprite(200,600)
mouse.addAnimation("mouse1", mouseImg1)
mouse.scale = 0.15
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x < (cat.width-mouse.width)/2){
    cat.VelocityX = 0
    cat.addAnimation("cat3",catImg3)
    cat.scale = 0.2
    cat.x = 300
    mouse.addAnimation("mouse3", mouseImg3)
    mouse.scale = 0.15
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW ){
    cat.velocityX = -5
    cat.addAnimation("catAnimation", catImg2)

    mouse.addAnimation("mouseAnimation", mouseImg2)
    mouse.frameDelay = 25
}

}
