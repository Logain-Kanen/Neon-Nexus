let popupDiv = document.querySelector(".popup-div");


function openCart() {
  popupDiv.style.display = "flex";
  cart.forEach(e => {
    `
      <div class="cart-item">
      <h2></h2>
      <p></p>
    `
  });
}
