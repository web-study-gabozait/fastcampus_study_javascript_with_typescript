const Reroot = document.getElementById("root");
let ajax = new XMLHttpRequest();
const NEW_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https:api.hnpwa.com/v0/item/@id.json";

const getData = (URL) => {
  ajax.open("GET", URL, false);
  ajax.send();

  return JSON.parse(ajax.response);
};

const newsFeed = getData(NEW_URL);

const ul = document.createElement("ul");
const content = document.createElement("div");

window.addEventListener("hashchange", () => {
  // hash는 #, 좌표이다.
  const id = location.hash.substring(1);

  const newsContent = getData(CONTENT_URL.replace("@id", id));
  const title = document.createElement("h1");

  title.innerHTML = newsContent.title;

  content.appendChild(title);
});

for (let i = 0; i < newsFeed.length; i++) {
  const div = document.createElement("div");
  const li = document.createElement("li");
  const a = document.createElement("a");

  div.innerHTML = `
    <li>
      <a href="#${newsFeed[i].id}">
      ${newsFeed[i].title} (${newsFeed[i].comments_count})
      </a>
    </li>
  `; //innerHTML은 문자열 안에 태그(마크업 구조)가 들어있다면 태그를 DOM으로 인식을 하여 읽는다.

  // a.href = `#${newsFeed[i].id}`;
  // a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;
  // li.appendChild(a);
  // console.log(div.children[i]); //배열의 형식
  ul.appendChild(div.firstElementChild);
}

Reroot.appendChild(ul);
Reroot.appendChild(content);
