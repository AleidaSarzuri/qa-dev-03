//Module: NodeJSSamples

module.export = function(name)
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
	console.log('Hello' + name + '!');
	
};
