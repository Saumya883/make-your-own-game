class Form {
    constructor() {
      this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h3');
    }
    hide(){
      this.greeting.hide()
      this.input.hide()
      this.button.hide()
    }
  
    display(){
      var title = createElement('h2')
      title.html("Racers");
      title.position(130, 0);
      
     /* var input = createInput("Name");
      var button = createButton('Play');*/
      
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(function(){
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        
       
       
        
        
        //var greeting = createElement('h3');
        this.greeting.html("Hello " + player.name )
        this.greeting.position(130, 160)
      });
  
    }
  }
  