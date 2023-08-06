class Player {
  constructor() {
   this.name = null;
   this.index = null;
   this.positionX = 0;
   this.positionY = 0;

  }
  getCount ()
  {
    var playerCountref = database.ref('playerCount');
  //this is a method to take/listen continuous changes in the database
//read position reads the values 
playerCountref.on("value", function(data){ 
  playerCount = data.val();
} );

}
updateCount (count){
  database.ref("/").update({
    playerCount: count
  });
}

addPlayer()
{
    var plyrIndex = "players/player"+ this.index; 
  if (this.index === 1)
  {
    this.positionX = width/2 -50;
    
  }
  else 
  { 
    this.positionX = width/2 + 50;
  }
      database.ref('plyrIndex').set(
    {
      name: this.name, 
      positionX: this.positionX,
      positionY: this.positionY

    }
  );
 
}

update(){
  var playerIndex = "players/player"+ this.index;
  database.ref('plyrIndex').update({
    positionX: this.positionX,
    positionY: this.positionY
    
  })
}

static getplayerInfo()
{
   var playerInforef = database.ref('players');
   playerInforef.on("value", data=>{
     //collected values
     var playerInfo = data.val();
   }) 
}

//helps to get the location of the car
getDistance()
{
  var playerdistanceref = database.ref('players/player'+ this.index);
  playerdistanceref.on("value", data=>{
    //collected values
    var playerDistance = data.val();
    //write the values from line 5 & 6
    this.positionX = playerDistance.positionX;
    this.positionY = playerDistance.positionY;
  })

}
}
