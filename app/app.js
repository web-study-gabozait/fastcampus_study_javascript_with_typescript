let ajax = new XMLHttpRequest();
const NEW_URL = "https://api.hnpwa.com/v0/news/1.json";

ajax.open("GET", NEW_URL, false);
ajax.send();

// console.log(ajax.response);

const newsFeed = JSON.parse(ajax.response);

// console.log(newsFeed);

const ul = document.createElement("ul");

for (let i = 0; i < newsFeed.length; i++) {
  const li = document.createElement("li");

  li.innerHTML = newsFeed[i].title;

  ul.appendChild(li);
}

const root = document.getElementById("root").appendChild(ul);
