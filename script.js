var a = { name: "Person 1", age:5 };
var b = { age:5, name: "Person 1" };

//Getting the values of the object

var a = Object.values(a);
var b =  Object.values(b);

if(a.length == b.length)
{ 
  console.log("True");
}else{
  console.log("false");
}


//question 2
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flags); 
    }
  }
  // question 3

//   var request = new XMLHttpRequest();

// request.open("GET","https://restcountries.com/v2/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);
//     for(let i = 0 ; i< result.length ; i++){
//         console.log(result[i].name);
//         console.log(result[i].region);
//         console.log(result[i].subregion); 
//         console.log(result[i].population);    

// }
// }