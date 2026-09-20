function changePage(page) {
  const content = document.querySelector(".content");

  if (page === "mail") {
    content.innerHTML = 
        "<h2>NAIBURN 메일</h2>" +
        "<p>메일이 없습니다. 친구도 없습니다.</p>";
  }

  if (page === "cafe") {
    content.innerHTML = 
        "<h2>NAIBURN 카페</h2>" +
        "<p>오늘도 카페로운 평화입니다.</p>";
  }

  if (page === "blog") {
    content.innerHTML = 
        "<h2>NAIBURN 블로그</h2>" +
        "<p>애완동물이 없어서 안 만들었습니다.</p>";
  }

  if (page === "news") {
    content.innerHTML = 
        "<h2>오늘의 뉴스</h2>" +
    "<p>NAIBURN이 전해드리는 오늘의 funfun한 소식입니다.</p>" +
    "<p>오늘은 funfun한 이야기가 없으므로 종료합니다.</p>";
  }

  if (page === "shopping") {
    content.innerHTML = 
        "<h2>NAIBURN 쇼핑</h2>" +
        "<p>돈 있으세요? 아껴쓰세요.</p>";
  }
}

let searchCount = 0;

function searchRun() {
  searchCount += 1;

  const button = document.querySelector("#searchButton");

  if (searchCount === 1) {
    button.style.transform = "translateX(100px)";
  }

  if (searchCount === 2) {
    alert("검색하지 말라니까요.");
  }
}

function login() {
  alert("저흰 회원 가입을 받지 않는데, 어떻게 로그인하시려고요;;");
}