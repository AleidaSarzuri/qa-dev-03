(function (){
    console.log('Hello world');

});


(function (name){
    console.log('Hello '+name+'!');

})('Pepe');

/**
var sayhello =function(name){

    console.log('Name'+name);
};
 */

/**
var getSayHello = function(){
    console.log('Execution say hello');
    return function(name){
    console.log('Hello ' + name);
    };
};
var sayHello = getSayHello();
sayHello('Pepe');
*/


var sayHello = (function(){
    console.log('Execution say hello');
    return function(name){
        console.log('Hello ' + name);
    };
})();
sayHello('Pepe');


