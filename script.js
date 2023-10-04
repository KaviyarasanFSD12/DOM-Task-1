// creating elements//
let divElement=document.createElement("div");
let anchorElement=document.createElement("a");

//Adding attributes//
divElement. setAttribute("class","js-class js-class2");
divElement. setAttribute("id", "id-js")
anchorElement.setAttribute("href", "https://google.com/");
anchorElement.setAttribute("target", "_blank");
//access element using id and classname/
let headElement= document.getElementById("heading");
let subHead = document.getElementsByClassName("head");
console.log(headElement);
console.log(subHead);
//short Task//
// create element p, a//
//set Attributes, href "google.com"//
//p class or id//

// Query selectors//
let queryElement = document.querySelector(".query-class");
queryElement.style.backgroundColor ="red";
console.log(queryElement);
// Query selector All//
let queryElementAll = document.querySelectorAll(".query-class");
console.log(queryElementAll);
const colors = ["yello"," orange", "blue", "brown", "violet"];
for (let i=0; i< queryElementAll.length; i++){
    console.log(queryElementAll [i]);
    queryElementAll[i].style.backgroundColor= colors[i];
}
divElement.innerText += `Hello I'm Div`;
divElement.innerHTML +=`<h2 class="head">New Heading</h2> 
<p>New para is created by using js</p>`
;

anchorElement.innerText = "google";
console.log(divElement);

queryElement.innerText +=
"Hello I'm innertext   and I'm with space";
queryElement.textcontent += "Hello I'm text html   and I'm added space";
console.log(queryElement.innerText);
console.log(queryElement.textcontent);

let newElement = document.createElement("div");
newElement .style.backgroundColor="green";
newElement.style.margin="30px";
document.body.append(newElement);

const append = newElement.append(divElement, anchorElement,"Appending Text");
console.log(append);
//appendchild (tradional method)
// const appendChild = newElements.appendChild(anchorElement);
// console.log(appendChild);

// diffence
//1. append - multiple nodes canbe appended not in appendchild
//2. appednchild - return's the node but append return the undefined.