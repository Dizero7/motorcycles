const instagram = document.querySelector(".instagram__carousel");
const instagramContent = Array.from(instagram.children);
instagramContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidder", true);
  instagram.appendChild(duplicateNode);
});