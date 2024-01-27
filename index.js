
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


// spread operator

let arr = [1,2,3,4];
let arr2 = [...arr];
console.log(arr);
console.log(arr2);
console.log(arr===arr2);
console.log(typeof arr);
console.log(typeof arr2);
console.log(Array.isArray(arr));
console.log(Array.isArray(arr2));