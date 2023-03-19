var previewContainer = document.querySelector(".products-preview");
var previewBox = previewContainer.querySelectorAll(".preview");
var btn = document.querySelectorAll(".cart");

document.querySelectorAll(".product-container .product").forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = "flex";
    var name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      var target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
  };
});
