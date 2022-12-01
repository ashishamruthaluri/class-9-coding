var ball;
function setup() {
  createCanvas(1000,1000)
 ball=createSprite(500,500,30,30)
}

function draw() 
{
  background(30);
if (keyIsDown(RIGHT_ARROW))
{
ball.x=ball.x+5
}
if (keyIsDown(LEFT_ARROW))
{
ball.x=ball.x-5
}
if(keyIsDown(UP_ARROW))
{
ball.y=ball.y-5
}
if(keyDown("down"))
{
ball.y=ball.y+5
}
drawSprites()
}




