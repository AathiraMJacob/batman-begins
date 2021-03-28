class Drops extends BaseClass{
    constructor(x,y,r){
     super(x,y,10);
    
    }

    update(){
     
        if (this.body.position.y>1200){
            this.body.position.y = 0;
          
        }
         console.log("horse");
    }
   
  
    display(){
      super.display();
      //this.body.velocityY=8;
      //  this.body.velocityX=0;
     /* var maxDrops=100;
      for(var i=1;i<maxDrops;i++){
        drops.push[new createDrop(random(0,400),random(0,400),10)];
      } */  
      }  
}