console.log('Hola mundo');

var sayhello = function(name) {
    if(name == undefined) {

        name = 'World';
    }
    console.log('Say hello'+ name);
};
//create clase one

var Person = function(name){
    this.name = name;
    this.eat = function (){
      console.log(this.name + ' is eating..')
    };

};
var paco = new Person('Paco');
var pepe = new Person('pepe');

//create clase one

var Persona = function(name){
    this.name = name;
    Persona.prototype.eat = function (){
        console.log(name + ' is eating..')
    };
    //metodo estatico
    Persona.play=function(){
        console.log('play');
    };

};
var age='';
var calculateAge = function(bornyear){
    var age = 2015 - bornyear;
    return age;
};
var calculate = function(num1,num2){


};

var say = function(name) {

    console.log('Say hello'+ name);
};