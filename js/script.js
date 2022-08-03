const header = document.getElementById("header__content");
const navigation = document.getElementById("navigation");
const btns = navigation.getElementsByClassName("navigation__item");

function toggleClass() {
  header.classList.toggle("active");
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("item-active");
    current[0].className = current[0].className.replace(" item-active", "");
    this.className += " item-active";
  });
}
