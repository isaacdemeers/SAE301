import { ProductCollection } from "./class/ProductCollection.js";
import { OrderCollection } from "./class/OrderCollection.js";
import { Order } from "./class/Order.js";

import { productRenderer } from "./renderer/ProductRenderer.js";
import { selectRenderer } from "./renderer/SelectRenderer.js";
import { errorRenderer } from "./renderer/ErrorRenderer.js";
import { productCart } from "./renderer/CartRenderer.js";
import { checkoutRenderer } from "./renderer/CheckoutRenderer.js";
import { renderAccueil, renderCheckout } from "./renderer/pageRenderer.js";

let filters = [];
let product = null;

// creer un id unique
let id = 0;
function createId() {
  return id++;
}

let M = {
  productCollection: new ProductCollection(),
  productCart: new ProductCollection(),
  productFavorites: new ProductCollection(),
  orderCollection: new OrderCollection(),
};

M.paymentInfos = {};

const form = document.querySelector(".pay");
const validate = document.querySelector(".pay__validate");

validate.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the form from submitting

  // Retrieve values from the form elements
  const firstName = form.querySelector('input[placeholder="Prénom"]').value;
  const lastName = form.querySelector('input[placeholder="Nom"]').value;
  const phoneNumber = form.querySelector(
    'input[placeholder="Numéro de Tel"]'
  ).value;
  const email = form.querySelector('input[placeholder="Email"]').value;
  const coupon = form.querySelector(".pay__coupon--input").value;
  const acceptCheckbox = form.querySelector("#checkbox").checked;

  // add all the information to M.paymentInfos = {};
  M.paymentInfos.firstName = firstName;
  M.paymentInfos.lastName = lastName;
  M.paymentInfos.phoneNumber = phoneNumber;
  M.paymentInfos.email = email;
  M.paymentInfos.coupon = coupon;
  M.paymentInfos.acceptCheckbox = acceptCheckbox;

  console.log(M.paymentInfos);

  // You can now process the form data or submit it to a server.
});

await M.productCollection.loadProducts("http://localhost:8888/api/products");

let V = {};

V.init = function () {
  document.querySelectorAll(".product__svg-label").forEach((btn) => {
    btn.addEventListener("click", C.addToFavorites);
  });

  document.querySelectorAll(".product__button").forEach((btn) => {
    btn.addEventListener("click", C.productHandler);
  });

  document.querySelectorAll(".filters__item").forEach((btn) => {
    btn.addEventListener("click", C.filtersHandler);
  });
};

V.renderPage = function (template) {
  if (template == "checkout") {
    renderCheckout();
  } else {
    renderAccueil();
  }
};
V.delCartItem = function () {
  document.querySelectorAll(".cart__item--modify").forEach((btn) => {
    btn.addEventListener("click", C.delCartItem);
  });
};

V.cartListner = function () {
  document.querySelectorAll(".cart__item--counter-btn").forEach((btn) => {
    btn.addEventListener("click", C.updateCart);
  });
  document
    .querySelector(".cart__validate--active")
    .addEventListener("click", V.checkOut);
};

V.checkOut = function () {
  errorRenderer(
    "",
    "Panier validé !",
    "Nouveau ? Voici un code promo de 10% : BIENVENUE10"
  );
  V.togglePopUp();
  let order = new Order(createId(), M.productCart.getProducts());
  M.orderCollection.addOrder(order);
  console.log(M.orderCollection.getOrders());
};

V.renderProduct = function (data) {
  document.querySelector("#Products").innerHTML = productRenderer(data);
  V.init();
};

V.renderCart = function (data) {
  document.querySelector(".cart__items").innerHTML = productCart(data);
  V.delCartItem();
};

V.closeListener = function () {
  document.querySelectorAll(".btn--close").forEach((element) => {
    element.addEventListener("click", V.togglePopUp);
  });
};

V.togglePopUp = function () {
  V.closeListener();
  let target = document.querySelector(".popUp");
  if (target.classList.contains("popUp--visible")) {
    target.classList.remove("popUp--visible");
    document.body.style.overflow = "auto";
    target.innerHTML = "";
  } else {
    target.classList.add("popUp--visible");
    product.delSelectedOptions();

    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  }
};

let C = {};

C.init = function () {
  V.renderPage("accueil");
  V.renderProduct(M.productCollection.getProducts());
  V.renderCart(M.productCart.getProducts());

  V.init();
  C.emptyCart();
};

C.productHandler = function (e) {
  let id = e.target.dataset.id;

  product = M.productCollection.getProductById(parseInt(id));
  V.togglePopUp();

  if (product.getStock() > 0) {
    selectRenderer(product);
  } else {
    errorRenderer(product, " est temporairement indisponible.", "");
  }

  V.closeListener();

  document
    .querySelectorAll(".orderHandler__content__item")
    .forEach((element) => {
      element.addEventListener("click", C.itemHandler);
    });

  document
    .querySelector(".orderHandler__button")
    .addEventListener("click", C.addToCart);
};

C.itemHandler = function (e) {
  let target = e.currentTarget;
  let optionId = parseInt(target.dataset.id);

  if (target.classList.contains("orderHandler__content__item--selected")) {
    target.classList.remove("orderHandler__content__item--selected");
    product.delSelectedOption(optionId);
  } else {
    target.classList.add("orderHandler__content__item--selected");
    product.setSelectedOption(product.getOptionById(optionId));
  }
};

C.filtersHandler = function (e) {
  if (e.currentTarget.classList.contains("filters__item")) {
    let target = e.currentTarget;
    let favType = target.dataset.fav;

    if (target.classList.contains("filters__item--selected")) {
      target.classList.remove("filters__item--selected");
      target.querySelector(".filters__checkbox").checked = false;
      filters = filters.filter((item) => item !== favType);
    } else {
      target.classList.add("filters__item--selected");
      target.querySelector(".filters__checkbox").checked = true;
      filters.push(favType);
    }

    if (filters.length != 0) {
      let products = M.productCollection.getProductsByCategory(filters);
      if (filters.includes("0")) {
        products.push(M.productFavorites.getProducts());
      }
      V.renderProduct(products.flat());
    } else {
      V.renderProduct(M.productCollection.getProducts());
    }
  }
};

C.addToFavorites = function (e) {
  let id = e.currentTarget.getAttribute("data-id");
  let product = M.productCollection.getProductById(parseInt(id));

  M.productFavorites.addProduct(product);
};

C.addToCart = function (e) {
  M.productCart.addProduct(product);
  V.renderCart(M.productCart.getProducts());
  C.emptyCart(); // Permet de remettre le bouton valider le panier en mode normal
  V.cartListner(); // Permet de récuperer les bouton plus et moins
};

C.emptyCart = function (e) {
  let target = document.querySelector(".cart__validate");
  if (M.productCart.getProducts().length == 0) {
    target.classList.add("cart__validate--disabled");
    target.classList.add("cart__validate--active");
  } else if (M.productCart.getProducts().length > 0) {
    target.classList.remove("cart__validate--disabled");
    target.classList.add("cart__validate--active");
  }
};

C.updateCart = function (e) {
  let id = e.currentTarget.getAttribute("data-id");
  let value = e.currentTarget.getAttribute("data-value");
  let prod = M.productCart.getProductById(parseInt(id));
  let stock = prod.getStock();
  console.log(stock);
  let userstock = document.querySelector(
    `li[data-id="${id}"].cart__item--counter-amount`
  );
  let userstockint = parseInt(userstock.innerHTML);
  console.log(userstockint);
  // get product by his id and update his quantity
  if (value == "plus") {
    if (userstockint < stock) {
      let intuserstock = parseInt(userstock.innerHTML);
      intuserstock++;
      // convert intuserstock to string
      userstock.innerHTML = intuserstock.toString();
    }
  } else if (value == "minus") {
    if (userstockint > 1) {
      let intuserstock = parseInt(userstock.innerHTML);
      intuserstock--;
      // convert intuserstock to string
      userstock.innerHTML = intuserstock.toString();
    }
  }
  if (value == "minus" && userstockint == 1) {
    errorRenderer(prod, " a été retiré du panier.", "");
    V.togglePopUp();
    let intuserstock = parseInt(userstock.innerHTML);
    intuserstock--;
    M.productCart.removeProduct(prod);
    V.renderCart(M.productCart.getProducts());
    C.emptyCart();
  }
  V.cartListner();
};

C.delCartItem = function (e) {
  let id = e.currentTarget.dataset.id;
  console.log(id);
  let prod = M.productCart.getProductById(parseInt(id));

  M.productCart.removeProduct(product);
  V.renderCart(M.productCart.getProducts());
  C.emptyCart();
  V.cartListner();

  errorRenderer(prod, " a été retiré du panier.", "");
  V.togglePopUp();
};

C.init();
