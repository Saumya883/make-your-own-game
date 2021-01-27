class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.rank=0;
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
        });
      }

}
