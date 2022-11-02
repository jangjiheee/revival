window.onload = function() {
  var proBtn = document.querySelector(".project_flex");
  var changeI = document.querySelector(".flex_img");
  var hiddenL = document.querySelector(".project-list");
  proBtn.addEventListener("click", function () {
    changeI.classList.toggle("click");
  })

  if (!document.querySelector('.flex_img').classList.contains('click')) return;
  // {
  //   hiddenL.style.display = "none";
  // }
}

// function proBtn() {
//   var cngI = document.querySelector(".flex_img");
//   cngI.toggle.classList.add("click");
//   console.log(cngI);
// }