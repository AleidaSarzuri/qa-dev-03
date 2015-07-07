/**
 * Created by aleidasarzuri on 6/29/2015.
 */

var PrintFrame = function(){

this.arrayWord = [];
this.maxWord = 0;

    //volverlo array

};


PrintFrame.prototype.star = function()
{
    this.convertArray(arguments);
    this.maxWord = this.measureWords(this.arrayWord.length);

    this.printLine(this.maxWord);
    this.printWords();
    this.printLine(this.maxWord);
};

PrintFrame.prototype.convertArray = function(arg){

    for(var i=0;i<arg.length;i++){
        this.arrayWord.push(arg[i]);
    }

};
PrintFrame.prototype.measureWords = function(len){
    var  lenWord= 0;
    for(var j = 0 ; j<len ; j++){
        if(lenWord<this.arrayWord[j].length)
        {
            lenWord = this.arrayWord[j].length;
        }
    }
return lenWord;
};
PrintFrame.prototype.printWords = function(){

    for(var k=0;k<this.arrayWord.length;k++){
        var word ='*';
        word =  word.concat(this.arrayWord[k]);
        if(this.maxWord>this.arrayWord[k].length){
            for(var l=0;l<this.maxWord-this.arrayWord[k].length;l++){
                word = word.concat('_');
            }
        }

        var printWord  = word.concat('*');
        console.log(printWord);
    }

};
PrintFrame.prototype.printLine = function(len){
    var asterisc = '';
    for(var m=0; m<len+2 ;m++){
        asterisc  = asterisc.concat('*');
    }
    console.log(asterisc);
};





