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
//-------------------------Practica en clase  diapo 4
//http://rubular.com/---> para verificar expresiones regulares
///^[0-9]{4}$/.test(1234)
//true
//re = new RegExp(/^The value .+ is not a valid e-mail.$/)
  //  /^The value .+ is not a valid e-mail.$/
//re.test(123)

var year = 2015;
var isValidYear = function(yearToTest){
    return /^[0-9]{4}$/.test(yearToTest);
}
var day = 30;
var isValidDay = function(day){
    return /^[0-3]{1}[0-9]{1}$/.test(day);
}
var month = 10;
var month = function(month){
    return /^[0-1]{1}[0-9]{1}$/.test(month);
}
    Console.log('The value ',year,'is',isvalidyear(year)?'valid':'invalid');


//---ejercicio numero capicua
var initRange = 20;
var endRange = 50;
/*var getFirstCapicua= function(offset,limit){
        var cadena = 0;
    for(var )
}
*/
console.log('First capicua between',initRange, 'and', endRange, 'is',
            getFirstCapicua(initRange,endRange));
