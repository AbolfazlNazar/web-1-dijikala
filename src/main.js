const menuItems = document.querySelectorAll(".sub-menu-item-one");
const menuContents = document.querySelectorAll(".category-content");

let timer;

menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    clearTimeout(timer);

    const category = item.dataset.category;

    timer = setTimeout(() => {
      menuContents.forEach((content) => {
        content.style.display = "none";
      });

      const selectedContent = document.querySelector(
        `[data-content="${category}"]`
      );

      if (selectedContent) {
        selectedContent.style.display = "block";
      }
    }, 300);
  });
});
