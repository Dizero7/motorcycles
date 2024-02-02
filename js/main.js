// Instagram carousel
const instagram = document.querySelector(".instagram__carousel");
const instagramContent = Array.from(instagram.children);

instagramContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidder", true);
  instagram.appendChild(duplicateNode);
});

// Header navigation adaptive
const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");
const navBtnIcon = navBtn.querySelector("i");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  navBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navBtnIcon.setAttribute("class", "ri-menu-line");
});
