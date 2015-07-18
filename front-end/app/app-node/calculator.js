//calculator.js

var Calculator = function(){
	Calculator.prototype.sum= function(a ,b){
		if(isNaN(a) || isNaN(b))
		throw 'Error: invalid argument';
	
		return a +b;
	};
	Calculator.prototype.sub= function(a ,b){
		return b-a;
	};
	
	
};

module.exports= Calculator;