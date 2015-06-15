/**
 * Created by aleidasarzuri on 6/12/2015.
 */

//Make all these functions to be parts of a class (i.e. Calculator)
/*
Construct of Calculator class
 */
var Calculator;
Calculator = function (){
};

    /*Calculator.prototype.aval = function(){
        console.log('The sum is:',this.avgsum());
        console.log('The sum is:',this.sum());
        console.log('The sum is:',this.sum());
        console.log('The sum is:',this.sum());

    };
    */

    Calculator.prototype.sum = function(){

        var len =arguments.length-1;
            sumar = function (arg,len){
            var res=0;
            if(len>=0)
            {

                return res = parseInt(arg[len]) + sumar(arg,(len-1));

            }
            else{
                return res;
            }

            }
     console.log(sumar(arguments,len));


    };
//
    Calculator.prototype.avgsum = function (arg,len){
    var res=0;
    if(len>=0)
    {

        return res = parseInt(arg[len]) + this.avgsum(arg,(len-1));

    }
    else{
        return res;
    }

    };

    Calculator.prototype.avg = function (){
        var res=0;
        var len =arguments.length-1;
        if(len>=0){
            return res=(this.avgsum(arguments,len))/(len+1);

        }else{
        return res;
        }


    };

    Calculator.prototype.max = function (){
        var len =arguments.length-1;
       /*
       This method is recursive, gives number max as result
        */
        mx = function (arg,len){
            var res=0;
            if (len >= 0) {
                if (arg[len] >= mx(arg,len-1)) {
                    return res = arg[len];}
                else{return res = mx(arg,len-1);}
            }else{
                return res;
            }
        }
        console.log(mx(arguments,len));


    };



    Calculator.prototype.min = function (){
        var len =arguments.length-1;

        mn = function (arg,len){
            var res=arg[0];

            if (len >= 0) {
                if (arg[len] <= mn(arg, (len - 1))) {
                    return res = arg[len];
                } else {
                    return res = mn(arg,(len-1));
                }
            }else{
                return res;}
        }
        console.log(mn(arguments,len));

    };

