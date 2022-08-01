const btn = document.querySelector("menu");
const header = document.querySelector("header__content");

$(function () {
  $(".menu").click(function () {
    $(".header__content").toggleClass("active");
  });
});
