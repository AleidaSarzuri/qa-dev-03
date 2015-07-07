/**
 * Created by aleidasarzuri on 6/29/2015.
 */

var countVowels = function(paragraph)
{
    var numbersOfA = 0;
    var numbersOfE = 0;
    var numbersOfI = 0;
    var numbersOfO = 0;
    var numbersOfU = 0;
    for(var i = 0 ; i<paragraph.length ; i++) {
        if (paragraph[i] == 'a'){
            numbersOfA ++;
        }
        if (paragraph[i] == 'e'){
            numbersOfE ++;
        }
        if (paragraph[i] == 'i'){
            numbersOfI ++;
        }
        if (paragraph[i] == 'o'){
            numbersOfO ++;
        }
        if (paragraph[i] == 'u'){
            numbersOfU ++;
        }
    }

    console.log('There are :' + numbersOfA + ' a' + numbersOfE + ' e' + numbersOfI + ' i' + numbersOfO + ' o' + numbersOfU + ' u');
};