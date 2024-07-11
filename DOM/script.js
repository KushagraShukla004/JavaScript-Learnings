function first() {
  alert("First Alert");
}

// document.getElementsByClassName("container")[0].style.background = "yellow";

// console.dir(document.getElementsByClassName("container")[0].style.background);

let div = document.querySelector("div");
//selects the first div only i.e DOM in JS Lesson:1

// console.dir(div);
let divAll = document.querySelectorAll("div");
console.log("divAll: ", divAll);

let p = (document.querySelector("p").innerHTML =
  "<i><b>Added italics tag using innerHTML inside p tag</b></i>");

let p1 = (document.querySelectorAll("p")[1].innerText =
  "Added just a text inside p tag using innerText");

let boxes = document.querySelectorAll(".box");
let index = 0;
for (box of boxes) {
  box.innerText = `Added new box: ${index}`;
  index++;
}

let newBtn = document.createElement("button");
newBtn.innerText = "click me !";

// document.getElementsByTagName("body")
// or
document.querySelector("body").prepend(newBtn);

console.log("body.childNodes :", document.querySelector("body").childNodes);

let hClass = document.querySelector("h1");

console.log("hClass.classList :", hClass.classList);

let addClass = hClass.classList.add("newh1");
