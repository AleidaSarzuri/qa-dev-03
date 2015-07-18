
//Sycrono
var fs = require('fs');
var name = process.argv[2];
var getFilesContentSync =  function(fileName)
{
	var contentBuffer = fs.readFileSync(fileName);
	
	var num = contentBuffer.toString().split('\n');
	//return contentBuffer.toString();
	return num.length;
};

console.log('The content of the file is\n',getFilesContentSync(name));


