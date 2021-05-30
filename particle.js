class Particle{
constructor(x,y,r){
var op={
    restitution:1.0,
    density:1000000000000.0,
    friction:3.0
}
this.body=Bodies.circle(x,y,10);
this.r=20;
this.color=color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body);
}
display(){
var pos=this.body.position
rectMode(CENTER);
fill(this.color)
ellipse(pos.x,pos.y,20);

}


}