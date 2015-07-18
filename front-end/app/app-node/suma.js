//suma

var getSum = function()
{
	var len = process.argv.length;
	var _res = 0;
	for(var i=2;i<len;i++){
		_res += parseInt(process.argv[i]);

	}
	return _res;
	console.log(arguments);
};
console.log('Sum:'+ getSum());