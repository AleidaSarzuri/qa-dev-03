/**
 * Created by Aleida 6/22/2015.
 */

var practice = function()
{ };

var capicua = function(init, end)
{
    var size = init.toString().length;
    var end = end.toString();
    for(var j = init; j < end; j++)
    {
        var val = true;
        var ini = init.toString();
        for(var i = 0; i <= (size/2); i++)
        {
            if(ini[i] == ini[size-(i+1)])
            { i++;}
            else
            {
                init++;
                val = false;
                break;
            }
        }
        if(val)
        { return init; }
    }
};
var firstCapicua = function(offset, limit)
{
    for(var i = offset; i <= limit; i++)
    {
        if(this.isCapicua(i))
        {break;}
    }
    return i;
};
var isCapicua = function (n)
{
    return n == Number.parseInt(n.toString().split('').reverse().join(''));
};

practice.prototype.capicua = function(a, b)
{
    console.log('First capicua number between', a, ' and ',
        b, ' is ', firstCapicua(a, b));
};
var getFactorial = function(num)
{
    var fac = 1;
    for(var i = 1; i <= num; i++)
    {
        fac *= i;
    }
    return fac;
};
practice.prototype.factorial = function (number)
{
    console.log('The factorial ' + number + ' is ' + getFactorial(number));
};
var getOddNumber = function (range)
{
    var oddNumbers = [];
    for(var i = 1; i <= range * 2; i++)
    {
        if((i % 2) == 0)
        {
            continue;
        }
        oddNumbers.push(i);
    }
    return oddNumbers;
};
var getEvenNum = function (range)
{
    var evenNumbers = [];
    for(var i = 1; i <= range * 2; i++)
    {
        if((i % 2) != 0)
        {
            continue;
        }
        evenNumbers.push(i);
    }
    return evenNumbers;
};
practice.prototype.OddEvenNum = function(range)
{
    console.log('The fist '+ range + ' odd numbers are:' + getOddNumber(range));
    console.log('The first '+ range + ' even numbers are:' + getEvenNum(range));
};


practice = new practice();
