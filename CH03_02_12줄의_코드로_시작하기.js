const Reroot = document.getElementById("root");
let ajax = new XMLHttpRequest();
const NEW_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https:api.hnpwa.com/v0/item/@id.json";

ajax.open("GET", NEW_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);

const ul = document.createElement("ul");
const container = document.createElement("div");

window.addEventListener("hashchange", () => {
  // hash는 #, 좌표이다.
  const id = location.hash.substring(1);

  ajax.open("GET", CONTENT_URL.replace("@id", id), false);
  ajax.send();

  const newsContent = JSON.parse(ajax.response);
  const title = document.createElement("h1");

  title.innerHTML = newsContent.title;

  container.appendChild(title);
});

for (let i = 0; i < newsFeed.length; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = `#${newsFeed[i].id}`;
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;
  li.appendChild(a);
  ul.appendChild(li);
}

Reroot.appendChild(ul);
Reroot.appendChild(container);
