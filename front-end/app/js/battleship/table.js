/**
 * Created by aleidasarzuri on 6/22/2015.
 */
var Table = function(size){
  this.size = size;
   this.ships = [];
  this.grid = [];

  this.initGrid();
  this.initShips();
};

Table.prototype.initGrid=function(size){
  for(var i=0;i<size;i++){
    var emptycell = '0';
    this.grid.push(emptycell);
  };
};
Table.prototype.initShips = function(){
  this.ships.push(new Ship(3[4,0]));
  for(var j=4;j<4+3;j++){
    this.grid[j] = 1; //1== first ship
  };

};