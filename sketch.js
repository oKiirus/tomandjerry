var bgImg
var end = 0
function preload() {
    bgImg = loadImage("images/bg.jpg")

    tomImg1 = loadAnimation("images/tomOne.png")

    tomAn1 = loadAnimation("images/tomTwo.png", "images/tomThree.png")
    
    tomImg2 = loadAnimation("images/tomFour.png")

    jerryImg1 = loadAnimation("images/jerryOne.png")

    jerryAn1 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png")
    
    jerryImg2 = loadAnimation("images/jerryFour.png")

    

}

function setup(){
    createCanvas(600,600);

    end = 0

    
    

    tom = createSprite(500, 500, 20, 20)
    
   
    
    
    tom.scale = 0.1

    jerry = createSprite(100, 500, 20, 20)
   
    

    jerry.scale = 0.1

    
    

}

function draw() {

    

    background(bgImg);
if(end === 0){


    if(abs(tom.x - jerry.x) <= tom.width/2 - 80 + jerry.width/2){
        end = 1
       
        
    }

    else{
        tom.addAnimation("sit", tomImg1)
        tom.changeAnimation("sit", tomImg1)
        jerry.addAnimation("stand", jerryImg1)
        jerry.changeAnimation("stand", jerryImg1)
    }

    tom.velocityX = 0
    if(keyDown(LEFT_ARROW) ){
        tom.velocityX = -5
        tom.addAnimation("walking", tomAn1)
        tom.changeAnimation("walking", tomAn1)
        jerry.addAnimation("walk", jerryAn1)
        jerry.changeAnimation("walk", jerryAn1)
    }
}

if(end === 1){
    tom.velocityX = 0
        tom.addAnimation("end", tomImg2)     
        tom.changeAnimation("end", tomImg2)
        jerry.addAnimation("end", jerryImg2)
        jerry.changeAnimation("end", jerryImg2)
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
