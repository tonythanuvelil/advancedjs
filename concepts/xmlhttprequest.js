/* XMLHttpRequest (Ajax in Jquery) with Promise */

//Run this in browser console

var myPromise = new Promise(function(res, rej){
    var request = new XMLHttpRequest();
    request.open('get', 'http://forms.datacol.in/output.json', true);
    request.onload = res;
    request.onerror = rej;
    request.send();
})

myPromise.then(function(data){
    data = data.target.response;
    console.log(data);
}).catch(function(){
   console.log('There was an error!'); 
});