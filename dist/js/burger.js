let burger = function (data) {
  var menuButton = document.getElementById("menuButton");
  var burgerBg = document.querySelector(".burger__bg");
  menuButton.addEventListener("click", function (e) {
    menuButton.classList.toggle("is-active");
    burgerBg.classList.toggle("burger__bg--active");
    e.preventDefault();
  });
};

export { burger as burger };
