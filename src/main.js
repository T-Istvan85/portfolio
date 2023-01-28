let elem = document.getElementById("navli");
let elemchild = elem.querySelectorAll(".hamburger");
const checkbox = document.getElementById("nav-checkbox");
for (i = 0; i < elemchild.length; i++) {
  elemchild[i].addEventListener("click", function () {
    if (checkbox.checked === true) {
      checkbox.checked = false;
    }
  });
}
