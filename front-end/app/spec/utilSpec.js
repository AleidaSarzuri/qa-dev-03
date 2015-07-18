//norma que termine espec
//utilSpec.js

//importando
var Util = require('./util.js');

//test suit Util
describe('Util', function(){
	//test cases
	it('Should say hello', function(){
		var util = new Util();
		var actRes = util.sayHello('Pepe');
		console.log(actRes);
		var exRes = 'Hello Pepe!';
		expect(actRes).toBe(exRes);
	} );
	it('Should say hello', function(){
		//verification
	} );
});
