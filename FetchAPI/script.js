const URL = "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector("#facts");
let btn = document.querySelector("#btn");

const getFacts = async () => {
  let response = await fetch(URL); //GET Request by default
  //   console.log(response); //but it is JSON format so we can't see our CAT FACT yet

  let data = await response.json();
  //   console.log("data:", data); //array of text facts so
  data.map((fact, index) => {
    // console.log("fact.text :", fact.text);
    let p = document.createElement("p");
    p.innerText = `${fact.text}`;
    factPara.append(p);
  });
};

btn.addEventListener("click", getFacts);
