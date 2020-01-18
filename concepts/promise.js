/* Promises */

var myPromise = new Promise(function(resolved, rejected){
    if(true)
        resolved(1234);
    else
        rejected();
});

myPromise.then(function(value){
    console.log("The value is: "+value);
}).catch(function(){
    console.log("Your promise failed!");
});
