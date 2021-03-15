var canvas;
var music;
var surface1, surafce2, surface3, surface4, boxd;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(700,550,180,30);
    surface1.shapeColor = "#008080";
    surface2 = createSprite(500,550,180,30);
    surface2.shapeColor = "#FF5733";
    surface3 = createSprite(300,550,180,30);
    surface3.shapeColor = "#191970";
    surface4 = createSprite(100,550,180,30);
    surface4.shapeColor = "#DC143C";
    


    //create box sprite and give velocity
    box = createSprite(random(20,750),300,20,20);
    box.shapeColor = "white";
    box.velocityY = 2;
    box.velocityX = 2;
    

}

function draw() {
    background("black");

    music.play();

    if(box.x<0){
        music.stop();
        box.velocityX = 3;
    }else if(box.x>800){
        music.stop();
        box.velocityX = -3;
    }
    
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "#008080";
        box.velocityY = 0;
        box.velocityX = 0;
        music.stop();
    }
    
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "#FF5733";
        box.velocityY = 0;
        box.velocityX = 0;
        music.stop();
    }
    
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "#191970";
        box.velocityY = 0;
        box.velocityX = 0;
        music.stop();
    }
    
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "#DC143C";
        box.velocityY = 0;
        box.velocityX = 0;
        music.stop();
    }
    
    
 


    //create edgeSprite
    createEdgeSprites();
    
    
drawSprites();

    //add condition to check if box touching surface and make it box
}
