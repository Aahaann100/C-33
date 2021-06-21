class SlingShotter{
constructor(bodyA,pointB){
var chain_options={
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.04,
    
    
    
}
this.sling1 = loadImage("sprites/sling1.png");
this.sling2 = loadImage("sprites/sling2.png");
this.sling3 = loadImage("sprites/sling3.png");

this.pointB=pointB
    this.chain=Constraint.create(chain_options)
    World.add(world,this.chain)
}
display(){

    if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position
var pointB=this.pointB
push()
strokeWeight(5.5)
stroke(48,22,8)//rgb

    //line(pointA.x,pointA.y,pointB.x,pointB.y)
    if(pointA.x<220){
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
    line(pointA.x-20,pointA.y,pointB.x+30,pointB.y)
    image(this.sling3,pointA.x-30,pointA.y-10,15,30.5)
    }else{
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y)
        image(this.sling3,pointA.x+25,pointA.y-10,15,30.5)
    }
    pop()
    
    }
    image(this.sling1,200,20)
    image(this.sling2,170,20)

    

}

fly(){
    this.chain.bodyA=null

}
attach(body){
    this.chain.bodyA=body
}
}