/**
 * Created by aleidasarzuri on 6/25/2015.
 */

var BattleShipGame = function(numPlayers, size)
{
    console.log('Starting the game for',numPlayers,'players');

    this.players = [];
    this.init();
    this.start();

};
BattleShipGame.prototype.init=function(){
    for (var i= 0; i<numPlayers;i++){
        var playername = 'Player'+1;
        var playertable = new Table(size);
        var player = new Player(playername,playertable);
        this.players.push(player);

    };
};
BattleShipGame.prototype.start=function(){
    //loop
    this.printTable();
    var input = window.prompt('Shot?');//o,1
    console.log('Shot is ',input);
    //end loop
};
BattleShipGame.prototype.printTable=function(){
    //loop
    console.log('Table',this.players[0].table1.grid.join('-'));
    //end loop
};
