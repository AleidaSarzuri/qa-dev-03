
var fs = require('fs');
var name = process.argv[2];

var getFileContentAsyn = function(fileName, callb){
	
	var callback = function(error, contentBuffer){
	if(error)
	{
		callb(error,null);
		
	};
	callb(null, contentBuffer.toString());
	
	};
	fs.readFile(fileName, callback);
}

 getFileContentAsyn(name,function(err,dat){
	 if(err)
		console.log('Error while the file', err);
	 
	console.log('The content of the file Asyncron is \n' );
	console.log(dat);
	console.log('I am done');
	 
	//
 });
 