// btn1.onclick = (e) => {
//   console.log(e.type); //click
//   console.log(e.target);
// };

// btn1.addEventListener("click", (e) => {
//   console.log("handler1");
//   console.log("e.type :", e.type);
//   console.log("e.target :", e.target);
// });
// btn1.addEventListener("click", (e) => {
//   console.log("handler2");
// });
let modeBtn = document.querySelector(".mode");
let currMode = "light-mode";

modeBtn.addEventListener("click", (e) => {
  let body = document.querySelector("body");
  if (currMode == "light-mode") {
    currMode = "dark-mode";
    // body.setAttribute("class", "dark-mode");
    //or
    //using .classList.add()
    // body.classList.add("dark-mode");
    // console.log("body.classList :", body.classList);
    //or
    //without using CSS
    document.querySelector("body").style.color = "white";
    document.querySelector("body").style.backgroundColor = "#222";
  } else {
    currMode = "light-mode";
    // body.classList.remove("dark-mode");
    // console.log("body.classList(dark-mode) :", body.classList);
    // or
    //without using CSS
    document.querySelector("body").style.color = "black";
    document.querySelector("body").style.backgroundColor = "white";
  }
});
