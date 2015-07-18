/**
 * Created by Aleida 6/22/2015.
 */
//expresiones regulares
var expressions = function()
{ };

var date = function()
{
    var date = new Date();
    var day = date.getDay();
    var listDays = ['Sunday', 'Mon', 'Tue', 'Wed', 'Thurs', 'Frid', 'Sat'];

    var hour = date.getHours() > 12 ? (date.getHours() -12) + " pm" : (date.getHours()) + " am";

    console.log('Today is: ', listDays[day]);

    console.log('The time is: ', hour, ':', date.getMinutes(),':', date.getSeconds());
};
var countWords = function(paragraph)
{
    var len = paragraph.split(' ');
    return len.length;
};

var isValidYear = function(arg)
{
    return /[0-2]{1}[0-9]{3}\-((0)[1-9]{1}|(1)[0-2]{1})\-((0)[1-9]{1}|(1-3)[0-9]{1})/;

};
expressions.prototype.validYear = function()
{
    console.log('The year', arguments[0], 'is valid:', isValidYear(arguments[0]));
};

expressions.prototype.countWords = function()
{
    console.log ('The paragraph has ', countWords(arguments[0]), ' words');
};

expressions.prototype.date = function()
{
    console.log(date());
};



expressions = new expressions();




