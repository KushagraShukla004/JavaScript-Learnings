function cardDetails(name, avatar, github_link) {
  let div = document.createElement("div");
  div.setAttribute("class", "card");

  let img = document.createElement("img");
  img.setAttribute("src", avatar);

  let details_div = document.createElement("div"); // Corrected the tag name here
  details_div.setAttribute("class", "details");
  let p_name = document.createElement("p");
  p_name.innerText = name;
  let link = document.createElement("a");
  link.setAttribute("href", github_link);
  link.innerText = "Github Link";

  div.appendChild(img); // append image tag to div
  div.appendChild(details_div); //append details_div to div
  details_div.appendChild(p_name); // append p tag to details
  details_div.appendChild(link); // append a tag details
  document.body.appendChild(div); // And append whole card div to body
}

let username;

document.querySelector("#search").addEventListener("click", (e) => {
  username = document.querySelector("#username").value; // Get the value from the input field
  console.log("Username:", username);

  const requestUrl = `https://api.github.com/users/${username}`;
  let response;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", requestUrl);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      response = JSON.parse(xhr.response);
      console.log("Response:", response);

      if (xhr.status == 200 && Object.keys(response).length !== 0) {
        let name = response.name;
        let avatar = response.avatar_url;
        let github_url = response.html_url;

        cardDetails(name, avatar, github_url);
      }
    }
  };

  xhr.send();
});
