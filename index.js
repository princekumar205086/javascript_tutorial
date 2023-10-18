
var text = document.getElementById("aparna");
text.style.color = "purple";
text.style.backgroundColor = "red";
text.style.fontSize = "50px"


// intraction with button
var hi = document.getElementById("prince");
// defining function here
hi.onclick = function(){
    text.innerHTML = "<h1>Hello, Aparna!</h1>";
}
// function greet(){
//     text.innerHTML = 
// }