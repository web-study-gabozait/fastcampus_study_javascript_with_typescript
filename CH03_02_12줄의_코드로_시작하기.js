const container = document.getElementById("root");
let ajax = new XMLHttpRequest();
const NEW_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https:api.hnpwa.com/v0/item/@id.json";
const content = document.createElement("div");
const store = { currentPage: 1 };

const getData = (URL) => {
  ajax.open("GET", URL, false);
  ajax.send();

  return JSON.parse(ajax.response);
};

const NewsFeed = () => {
  const newsFeed = getData(NEW_URL);
  const newslist = [];
  newslist.push("<ul>");

  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    newslist.push(`
      <li>
        <a href="#/show/${newsFeed[i].id}">
        ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
      </li>
    `); //innerHTML은 문자열 안에 태그(마크업 구조)가 들어있다면 태그를 DOM으로 인식을 하여 읽는다.
  }

  newslist.push("</ul>");
  newslist.push(`
    <div>
      <a href="#/page/${
        store.currentPage > 1 ? store.currentPage - 1 : 1
      }" style= "color:${
    store.currentPage > 1 ? "#333" : "#c4c4c4"
  }; font-size: 30px;">이전 페이지</a>
      <a href="#/page/${
        store.currentPage < 3 ? store.currentPage + 1 : 3
      }" style= "color:${
    store.currentPage < 3 ? "#333" : "#c4c4c4"
  }; font-size: 30px;">다음 페이지</a>
    </div>
  `);

  container.innerHTML = newslist.join("");
};

const newsDetail = () => {
  // hash는 #, 좌표이다.
  const id = location.hash.substring(7);
  const newsContent = getData(CONTENT_URL.replace("@id", id));

  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
      <a href="#/page/${store.currentPage}">목록으로</a>
    </div>
    `;
};

const router = () => {
  const routePath = location.hash;

  if (routePath === "") {
    NewsFeed();
  } else if (routePath.indexOf("#/page/") >= 0) {
    store.currentPage = Number(routePath.substring(7)); // 숫자로 변환해줄때는 Number() and parseInt
    NewsFeed();
  } else {
    newsDetail();
  }
};

window.addEventListener("hashchange", router);

router();
