class SlingShotter{
constructor(bodyA,pointB){
var chain_options={
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.04,
    
}

this.pointB=pointB
    this.chain=Constraint.create(chain_options)
    World.add(world,this.chain)
}
display(){

    if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position
var pointB=this.pointB
strokeWeight(5.5)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }


}

fly(){
    this.chain.bodyA=null
}
}