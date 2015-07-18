
var Util = function()
{
	
};

Util.prototype.sayHello = function(name)
{
	/*var name = 'world';
	if(process.argv[2])
	{
		name = process.argv[2];
	}
	console.log('Hello'+ name + '!');*/
	if(!name)
	{
		name = 'world';
	}
	/*else{
		if(process.argv[2])
		name = process.argv[2].toString();
		}*/
	//console.log('Hello ' + name + '!');
	return 'Hello ' + name + '!';
	
};
Util.prototype.sum = function()
{
	var _sum = 0;
	for(var i=2;i<process.argv.length;i++)
	{
		_sum += parseInt(process.arg[i]);
	}
	return _sum;
};
Util.doSomething = function()
{
	//metodo estatico
};


//case 1 : export  a class
module.exports = Util; //definition not execution Util and Util() are not same

//case 2 : export method of class --
//module.exports = Util.prototype.sayHello;

//case 3:  export a object
//module.exports = new Util();

 //case 4 : export a object
 //creando un objeto a partir JSON
 /*var pepe = {
	name:'Pepe',
	eat: function(){
		console.log(this.name, 'is eating')
	}
 } ;
 module.exports = pepe;*/