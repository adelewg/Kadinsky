function setup()
{
	//create your canvas here
    createCanvas(512,512)
}

function draw()
{
	
    //do your drawing here
    background(250,235,215)
    
    //blue greenish triangle
    strokeWeight(1)
    fill(100,150,255,80)
    triangle(20,-300,500,500,400,550)
    
    //orange, yellow triangle
    strokeWeight(1)
    fill(255,165,0,80)
    triangle(500,-100,10,500,80,550)
    
    fill(255,100,0,150)
    ellipse(260,280,200,200)
    
    fill(205,0,255,100)
    ellipse(180,150,120,120)
    
    fill(100,0,255,100)
    ellipse(150,230,100,100)
    
    fill(255,0,0,150)
    ellipse(260,180,120,120)
    
        
    fill(255,80,0,100)
    ellipse(260,180,120,120)
    
    fill(100,0,255,100)
    ellipse(380,150,80,80)
    
    fill(255,255,0,100)
    ellipse(350,200,140,140)
            
    //this is the empty circle that I am using as a template
    fill(0,0,0,200)
    ellipse(300,250,50,50)
    
    strokeWeight(5)
    fill(255,0,0,200)
    ellipse(260,20,20,20)
    
    strokeWeight(5)
    fill(0,0,255,200)
    ellipse(100,400,20,20)
    
    strokeWeight(1)
    line(100,120,450,120)
    
    strokeWeight(1)
    line(100,80,450,200)
    
    strokeWeight(1)
    line(100,180,450,350)
    
    strokeWeight(1)
    line(100,200,450,410)
    
    strokeWeight(1.5)
    line(100,250,410,430)
    
    strokeWeight(1)
    line(350,400,400,350)
    
    strokeWeight(1)
    line(350,410,400,365)
    
    strokeWeight(1)
    line(350,420,400,370)
    
    strokeWeight(1)
    line(400,80,100,420)
    
    strokeWeight(1)
    line(300,80,50,350)
    
    strokeWeight(20)
    fill(255,255,255,0)
    ellipse(260,250,500,500)
}