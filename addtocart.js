const btn = document.querySelectorAll("button");

btn.forEach(function (cart, index) {
  cart.addEventListener("click", function (event) {
    {
      var btnItem = event.target;
      var product = btnItem.parentElement;
      var productImg = product.querySelector("img").src;
      var productName = product.querySelector("h1").innerText;
      var productPrice = product.querySelector("span").innerText;
      addcart(productPrice, productImg, productName);
      // console.log(product)
    }
  });
});
function addcart(productPrice, productImg, productName) {
  var addtr = document.createElement("tr");
  var trcontent =
    '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="' +
    productImg +
    '"alt="">' +
    productName +
    '</td><td><p><span class="' +
    productPrice +
    '">$20.0</span></p></td><td><input type="number" value="1" min="0"></td><td style="cursor: pointer;">Delete</td></tr>';
  addtr.innerHTML = trcontent;
  var cartTable = document.querySelector("tbody");
  cartTable.append(addtr);
  carttotal();
}
