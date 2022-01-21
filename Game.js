class Game {
  constructor() {}

//ler o gameState apenas com getState , aula c37
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  //atualize o game.js
   update(state){
     database.ref("/").update({
       gameState:state
     });
   }

  //depois de criar as variaveis e a matriz de carros, crie um método start
  start(){
    player=new Player();
    playerCount=player.getCount();

    form=new Form();
    form.display();

  //criar os sprites dos carros
  car1=createSprite(width/2-50,height-100);
  car1.addImage("luiz:)",car1_img);

  car1.scale=0.050
  car2.scale=0.050

  car2=createSprite(width/2+100,height-100);
  car2.addImage("sarah:>)",car2_img);

  cars=[car1,car2];
  //o sprite deve ficar próximo ao centro da tela na direção x
  }
   
   

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }


  //Escrever um método PLAY para exibir os terrenos depois que receber as informações
  play(){
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers!=undefined){
      image(track,0,-height*5,width,height*6);

      drawSprites();
    }
  }
  
    //obter informações do banco de dados
  
    //Mostrar a pista conforme o carro vai se movendo
  
  
}
