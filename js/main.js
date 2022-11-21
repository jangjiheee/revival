window.onload = function () {
  var changeI = document.querySelector(".project_flex");
  var hiddenL = document.querySelector(".project-list");
  var paBtn = document.querySelector(".proBtn");

  changeI.addEventListener("click", function () {
    paBtn.classList.toggle("click");
  })

  const ghostBtn = document.getElementById("ghostMenu");
  const menuList = document.querySelector(".ghost-list");
  const mob = document.querySelectorAll(".mob");

  let subToggle = true;
  ghostBtn.addEventListener("click", function () {
    if (subToggle) {
      menuList.style.setProperty('height', 'calc(100vh - 60px)');
    } else {
      menuList.style.setProperty('height', '0px');
    }
    subToggle = !subToggle;
  })

  for (let i = 0; i < mob.length; i++) {
    mob[i].addEventListener("click", function () {
      ghostBtn.checked = false;
      menuList.style.setProperty('height', '0px');
      subToggle = !subToggle;
    })
  }

  //brand tab

  const tabList = document.querySelectorAll(".tab_menu .tab_list");
  const cont = document.querySelectorAll(".tab_cont .cont");
  for (let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener("click", function (e) {
      e.preventDefault();
      for (let i = 0; i < cont.length; i++) {
        cont[i].classList.remove("is_on");
        tabList[i].classList.remove("on");
      }
      cont[i].classList.add("is_on");
      tabList[i].classList.add("on");
    });
  }

  //brand QnA
  let label = document.querySelectorAll(".accrodion-label");
  let accrodion = document.querySelectorAll(".accrodion-container");

  for (i = 0; i < label.length; i++) {
    label[i].addEventListener("click", function () {
      var next = this.parentNode;
      if (!next.classList.contains("on")) {
        for (j = 0; j < accrodion.length; j++) {
          accrodion[j].classList.remove("on");
        }
        next.classList.add("on");
      } else {
        next.classList.remove("on");
      }
    });
  }

  //brand gallery
  loadModal();

  activeItemGallery();

  $(".gallery_modal .close").on("click", function () {
    closeModal();
  });

  $(".gallery_modal .next").on("click", function () {
    if ($(".gallery_modal .item.active").is(":last-child")) {
      nextFirst();
    } else {
      next();
    }
  });

  $(".gallery_modal .prev").on("click", function () {
    if ($(".gallery_modal .item.active").is(":first-child")) {
      prevLast();
    } else {
      prev();
    }
  });

  function activeItemGallery() {
    $(".case_gallery .item").on("click", function () {
      // $('.case_gallery .item').removeClass('active');
      // $(this).addClass('active');
      var indexActive = $(this).index();

      $(".gallery_modal .item").removeClass("active");

      $(".gallery_modal .item").each(function () {
        var indexModalItem = $(this).index();
        if (indexActive === indexModalItem) {
          $(this).addClass("active");
        }
      });

      openModal();
    });
  }

  function loadModal() {
    var gallery = $(".case_gallery").clone().removeClass("case_gallery");
    $(".gallery_modal .gallery_slide_wrap").append(gallery);
  }

  function openModal() {
    $(".gallery_modal").addClass("active");
  }

  function closeModal() {
    $(".gallery_modal .item").each(function () {
      $(this).removeClass("active");
    });

    $(".gallery_modal").removeClass("active");
  }

  function next() {
    $(".item.active").next().addClass("active");
    $(".item.active").prev().removeClass("active");
  }

  function prev() {
    $(".item.active").prev().addClass("active");
    $(".item.active").next().removeClass("active");
  }

  function nextFirst() {
    $(".item").removeClass("active");
    $(".item:first-child").addClass("active");
  }

  function prevLast() {
    $(".item").removeClass("active");
    $(".item:last-child").addClass("active");
  }


}
