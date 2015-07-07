/**
 * Created by aleidasarzuri on 6/29/2015.
 */
var HangManGame = function(){
        this.guessWords = ['play' , 'swim' , 'read' , 'write','drink','sleep'];
        this.anyWord= parseInt(Math.random()*this.guessWords.length);
        this.word = this.guessWords[this.anyWord];
        this.wordguessing = [];
    this.fillword();
    };


HangManGame.prototype.guessChar = function(char){
    for(var i = 0 ; i<this.word.length ; i++)
    {
        if(char==this.word[i]){
            this.wordguessing[i] = char;
        }
    }
};

HangManGame.prototype.inputChar = function(){
    var intents = 10;
    var status = 'You Lose';
    this.shownWord();
    for(var l=intents;l>0;l--) {
        var character = prompt('Please inputs one char, you have '+l+' intent(s)', '');
        this.guessChar(character);
        this.shownWord();
        if(this.areEquals()){
            status = 'You win';
            break;
        }
    }
    console.log(status);
};


HangManGame.prototype.fillword = function(){
    for(var k = 0 ; k < this.word.length ; k++)
    {
        this.wordguessing.push('_');
    }
};
HangManGame.prototype.shownWord = function(){
    console.log(this.wordguessing);

};
HangManGame.prototype.areEquals=function(){
    for(var x=0;x<this.word.length;x++)
    {
        var res = true;
        if(this.word[x]!=this.wordguessing[x])
        {
            res =  false;
        }
    }
    return res;
};

(function()
{
    var res = prompt('Do you want to play a HangMan Game, input "y" or "n"', '');
    if(res=='y')
    {var newGame = new HangManGame();
        console.log('Welcome HangMan Game, guesses a verb');
    newGame.inputChar();}

})();


