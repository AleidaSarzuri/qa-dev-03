/**
 * Created by aleidasarzuri on 6/25/2015.
 */

var BattleShipGame = function(numPlayers, size)
{
    console.log('Starting the game for',numPlayers,'players');

    this.players = [];
    for (var i= 0; i<numPlayers;i++){
        var playername = 'Player'+1;
        var playertable = new Table(size);
        var player = new Player(playername,playertable);
        this.players.push(player);

    };
};