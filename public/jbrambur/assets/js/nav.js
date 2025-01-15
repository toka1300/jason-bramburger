(() => {
  // src/assets/js/nav.js
  var CSbody = document.querySelector("body");
  var CSnavbarMenu = document.querySelector("#cs-navigation");
  var CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
  CShamburgerMenu.addEventListener("click", function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
  });
  function ariaExpanded() {
    const csUL = document.querySelector("#cs-expanded");
    const csExpanded = csUL.getAttribute("aria-expanded");
    if (csExpanded === "false") {
      csUL.setAttribute("aria-expanded", "true");
    } else {
      csUL.setAttribute("aria-expanded", "false");
    }
  }
  document.addEventListener("scroll", (e) => {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
      document.querySelector("body").classList.add("scroll");
    } else {
      document.querySelector("body").classList.remove("scroll");
    }
  });
  var dropDowns = Array.from(document.querySelectorAll("#cs-navigation .cs-dropdown"));
  for (const item of dropDowns) {
    const onClick = () => {
      item.classList.toggle("cs-active");
    };
    item.addEventListener("click", onClick);
  }
})();
//# sourceMappingURL=nav.js.map
