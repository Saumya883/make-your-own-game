class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    form = new Form()
    //form.display();

    play(){
    if(gameState===1){
      if(keyIsDown(UP_ARROW) && player.index !== null&&gameState===1){
        player.distance +=10
        player.update();
        console.log(player.distance);
        console.log(gameState);
    }
if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
    jumpSound.play()
  }
    }
}
}