// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// 텍스트 밑줄 애니메이션

window.addEventListener("scroll", function () {
  // let titText = document.querySelectorAll(".tit_underline");
  let cycleText = document.querySelector(".recycle_underline");
  let proText = document.querySelector(".project_underline");
  let newsText = document.querySelector('.news_underline');
  let inqText = document.querySelector('.inquire_underline');
  let value = window.scrollY;
  // console.log('123');

  if (window.innerWidth >= 768) {
    // 첫 번째 섹션 스크롤이벤트
    if (value > 100) {
      cycleText.classList.add('active');
    } else {
      cycleText.classList.remove('active');
    };

    //두 번째 섹션 스크롤이벤트
    if (value > 1000) {
      proText.classList.add('active');
    } else {
      proText.classList.remove('active');
    };

    //세 번째 섹션 스크롤이벤트
    if (value > 1800) {
      newsText.classList.add('active');
    } else {
      newsText.classList.remove('active');
    };

    //네 번째 섹션 스크롤이벤트
    if (value > 2700) {
      inqText.classList.add('active');
    } else {
      inqText.classList.remove('active');
    }
  }

  //모바일사이즈

  if (window.innerWidth < 768) {
    // 첫 번째 섹션 스크롤이벤트
    if (value > 100) {
      cycleText.classList.add('active');
    } else {
      cycleText.classList.remove('active');
    };

    //두 번째 섹션 스크롤이벤트
    if (value > 1000) {
      proText.classList.add('active');
    } else {
      proText.classList.remove('active');
    };

    //세 번째 섹션 스크롤이벤트
    if (value > 1400) {
      newsText.classList.add('active');
    } else {
      newsText.classList.remove('active');
    };

    //네 번째 섹션 스크롤이벤트
    if (value > 2700) {
      inqText.classList.add('active');
    } else {
      inqText.classList.remove('active');
    }
  }
});