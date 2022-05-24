const container = document.getElementById("root");
let ajax = new XMLHttpRequest();
const NEW_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https:api.hnpwa.com/v0/item/@id.json";

const getData = (URL) => {
  ajax.open("GET", URL, false);
  ajax.send();

  return JSON.parse(ajax.response);
};

const NewsFeed = () => {
  const newsFeed = getData(NEW_URL);
  const newslist = [];
  newslist.push("<ul>");

  for (let i = 0; i < newsFeed.length; i++) {
    newslist.push(`
      <li>
        <a href="#${newsFeed[i].id}">
        ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
      </li>
    `); //innerHTML은 문자열 안에 태그(마크업 구조)가 들어있다면 태그를 DOM으로 인식을 하여 읽는다.
  }

  newslist.push("</ul>");

  container.innerHTML = newslist.join("");
};

const newsDetail = () => {
  // hash는 #, 좌표이다.
  const id = location.hash.substring(1);

  const newsContent = getData(CONTENT_URL.replace("@id", id));
  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    
    <div>
      <a href="/">목록으로</a>
    </div>
    `;
};

const router = () => {
  const routePath = location.hash;

  if (routePath === "") {
    NewsFeed();
  } else {
    newsDetail();
  }
};

window.addEventListener("hashchange", router);

router();
