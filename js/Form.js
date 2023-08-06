class Form {
  constructor() {
    this.titleimg = createImg ("../assets/title.png", "GAMETITLE");
    this.input = createInput ("").attribute("placeholder","Enter your Name " );
       this.playButton = createButton ("PLAY");
       this.greeting = createElement ("h2");
      
  }

  setposition ()
  {
    this.titleimg.position (width/2-800, height/2-500);
    this.input.position (width/2-70, height/2-180);
    this.playButton.position (width/2- 10, height/2 - 90);
    this.greeting.position (width/2-100, height/2);

  }

    hide()
  {
    this.playButton.hide();
    this.greeting.hide();
    this.input.hide();
  }
 
  bymousePressed()
  {
    this.playButton.mousePressed (() =>{
      this.input.hide();
      this.playButton.hide();
      var message = ` Welcome ${this.input.value()} </br>wait for another player to join`;
      this.greeting.html(message);
      playerCount += 1; player.name = this.input.value(); player.index = playerCount; player.updateCount(playerCount);
      player.addPlayer();
      player.getDistance();
    })
  }
  display()
  {
  this.setposition ();
  this.bymousePressed(); 

  }

}
