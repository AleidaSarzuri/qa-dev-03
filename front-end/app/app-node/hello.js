// hello.js

console.log(1, process.argv[0]);
console.log(2, process.argv[1]);
console.log(3, process.argv[2]);

var name = 'World';
if(process.argv[2]){
	
	name = process.argv[2];
	
}
console.log('hello World' + name);
