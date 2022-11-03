window.onload = function() {
  var changeI = document.querySelector(".proBtn");
  var hiddenL = document.querySelector(".project-list");
  
  changeI.addEventListener("click", function () {
    this.classList.toggle("click");
    if (changeI.classList.contains('click')) {
      hiddenL.style.display = "block";
      hiddenL.style.height = "100%";
      hiddenL.style.marginTop = "20px";
    } else {
      hiddenL.style.height = "0px";
      hiddenL.style.marginTop = "0";
    }
  })

  const ghostBtn = document.getElementById("ghostMenu");
  const menuList = document.querySelector(".ghost-list");
  const mob = document.querySelectorAll(".mob");
  
  let subToggle = true;
  ghostBtn.addEventListener("click", function () {
    if (subToggle) {
      menuList.style.setProperty('height', 'calc(100% - 60px)');
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