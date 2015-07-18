//calculatorSpec

/*
List requirements
	Calculator
		sum
		subtract
		multiply
		divide
First Spec	
	Calculator should be able to:
	-Sum 5 and 5
	-Subtract 5 from 8
	-Multiply 5 and 4
	-Divide 
Second
Calculator  
	Validation for sum param
Third Specs
	Calculator should throw an error when adding 1 and 3
*/
var Calculator = require('./calculator.js');
describe('Calculator', function()
{
	var calculator;
	beforeEach(function(){
		//do something before each spec/it() call
		calculator = new Calculator();
	});
	afterEach(function(){
		//do something after each spec/it() call
		calculator = null;
	});
	
	it('Calculator should be able add 1 and 3:', function(){
	//spect
	var actRes = calculator.sum(1,3);
	var expRes = 4;
	expect(actRes).toBe(expRes);
	});
	
	//no es buena practica crear variables para un solo uso
	it('Calculator should be able substract 1 from 3:', function(){
	var actRes = calculator.sub(1,3);
	var expRes = 2;
	expect(actRes).toBe(expRes);//expect(actRes).toBe(expRes)
	});
	
	
	it('Calculator should throw an error when adding 1 and "a"', function(){
	//spect
	expect(function(){calculator.sum(1,'a');}
	).toThrow('Error: invalid argument');// if fn throws exeption
	});

});