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
}
