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
  //for(..NUM SHIPS){}
  var shipId = 1; //1== first ship
  var shipSize = this.getShipRandomSize();
  var shipInitPos = this.getShipRandomPos(shipSize); //returns new axis (4,5)
  var Ship = new Ship(shipSize,shipPos);
  this.ships.push(Ship);

  for(var j=shipInitPos.column;j<shipInitPos.column+shipSize;j++) {
    this.grid[j] = shipId;
  };
};
Table.prototype.getShipRandomSize = new function()
{
  return parseInt((Math.random()*2)+1);
};
Table.prototype.getShipRandomPos = function(shipSize)
{
  var column;

  do {
    column = parseInt(Math.random()*(this.size-shipSize));
    var counter = 0;
    for(var i=column; i<column+shipSize; i++){
      if(this.grid[i]!='0'){
        break;
      }
    }
    if(i==column+shipSize){
      break;
    }
  }while(true)

  return new Axis(column,0);
};