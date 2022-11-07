var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 텍스트 밑줄 애니메이션

let titText = document.querySelectorAll(".tit_underline");
let proText = document.querySelectorAll(".project_underline");
let newsText = document.querySelectorAll('.news_underline');
let inqText = document.querySelectorAll('.inquire_underline');


window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log('123');

  // 첫 번째 섹션 스크롤이벤트
  if (value > 100) {
    proText[0].classList.add('active');
  } else {
    proText[0].classList.remove('active');
  };

  //두 번째 섹션 스크롤이벤트
  if (value > 1100) {
    newsText[0].classList.add('active');
  } else {
    newsText[0].classList.remove('active');
  };

  //세 번째 섹션 스크롤이벤트
  if (value > 2100) {
    inqText[0].classList.add('active');
  } else {
    inqText[0].classList.remove('active');
  }
});