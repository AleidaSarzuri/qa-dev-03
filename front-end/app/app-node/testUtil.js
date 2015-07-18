//TestUtil.js
//cases1 : export a class 

var Util = require('./util.js');
//metodo estatico
//MyUtil.doSomething();
//instancia
var myUtil = new Util();
myUtil.sayHello('Pepe');

/*//cases 2 : import a method of class
var sayHello = require('./util.js');
sayHello('Pepe');
*/
//case 3: import a object
//var myUtil = require('./util.js');
//myUtil.sayHello('Pepe');

//case 4: Object

//var pepe = require('./util.js');
//pepe.eat();


