let button = document.querySelectorAll(".colorButton");

button.forEach((colorButton) => {
  //   console.log(colorButton);

  colorButton.addEventListener("click", (event) => {
    // console.log("event: ", event);
    // console.log("event.target: ", event.target); //<span class="colorButton" id="dark"></span>
    let colorId = event.target.id;
    document.querySelector("body").style.color = "black"; //default theme
    if (colorId == "dark") {
      document.querySelector("body").style.backgroundColor = "#212121";
      document.querySelector("body").style.color = "#ffe4c4";
    } else if (colorId == "light") {
      document.querySelector("body").style.backgroundColor = "#ffe4c4";
    } else if (colorId == "aqua") {
      document.querySelector("body").style.backgroundColor = "#00ffff";
    } else if (colorId == "purple") {
      document.querySelector("body").style.backgroundColor = "#8a2be2";
    }
  });
});
