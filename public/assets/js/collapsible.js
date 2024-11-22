(() => {
  // src/assets/js/collapsible.js
  var faqItems = Array.from(document.querySelectorAll(".cs-faq-item"));
  var sections = document.querySelectorAll(".cs-item-p");
  for (const item of faqItems) {
    const onClick = () => {
      item.classList.toggle("active");
    };
    item.addEventListener("click", onClick);
  }
  sections.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
})();
//# sourceMappingURL=collapsible.js.map
