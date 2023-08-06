class Game {
  constructor() { 

  }
    getStates ()
    {
      var gameStateref = database.ref('gameState');
    //this is a method to take/listen continuous changes in the database
  //read position reads the values 
  gameStateref.on("value", function(data){ 
    gameState = data.val();
  } );

  }

  update (state){
    database.ref("/").update({
      gameState: state
    })
  }

  start()
  {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount(); 
    car1 = createSprite(width/2-100, height/2);
    car1.addImage("C1", car1Image);
    car1.scale = 0.2;
    car2 = createSprite(width/2-60, height/2)
    car2.addImage("C2", car2Image);
    car2.scale = 0.2;
    cars = [car1,car2]; 
    
  }
  play()
  {
    form.hide();
    if (playerCount ===2){
        image(trackImg, width/2, height/2, width, height*10);
        var index = 0
    for (var pl in allplayers)
    {
      index += 1;
      var x = allplayer[pl].positionX;
      var y = allplayer[pl].positionY;
       //first car position assigned making index 0 
      cars[index-1].positionX = x;
      cars[index-1].positionY = y;
      if (keyDown(UP_ARROW)){
        player.positionY += 10;
        player.update(); 
        player.getplayerInfo();
      } 
    }

    }
    drawSprites; 
  }  


}
