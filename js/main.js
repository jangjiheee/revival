window.onload = function() {
  var changeI = document.querySelector(".proBtn");
  var hiddenL = document.querySelector(".project-list");
  var ghostBtn = document.querySelector(".ghost")
  var ghostList = document.querySelector(".ghost-list");

  
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
}