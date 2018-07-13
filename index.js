/// Javascript code 

// Print table function
var printTimesTable = function(num){
    // print table 
    var idx = 1;
    while(idx <=10){
        console.log(num +' * ' +idx+' = ',num*idx);
        ++idx;
    }
}

// call function
console.log(printTimesTable(5));
