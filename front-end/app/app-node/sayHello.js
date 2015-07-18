//Module: NodeJSSamples

module.exports = function(name)
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
	else{
		if(process.argv[2])
		name = process.argv[2].toString();
		}
	console.log('Hello ' + name + '!');
	
};
