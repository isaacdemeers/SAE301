import { ProductCollection } from "./class/ProductCollection.js";
import { productRenderer } from "./renderer/ProductRenderer.js";
import { selectRenderer } from "./renderer/SelectRenderer.js";
import { productCart } from "./renderer/CartRenderer.js";

let filters = [];
let product = null;

let M = {
  productCollection: new ProductCollection(),
  productCart: new ProductCollection(),
  productFavorites: new ProductCollection(),
};

await M.productCollection.loadProducts("http://localhost:8888/api/products");


let V = {};

V.init = function () {
  document.querySelectorAll(".product__svg-label").forEach((btn) => {
    btn.addEventListener("click", C.addToFavorites);
  });

  document.querySelectorAll(".product__button").forEach((btn) => {
    btn.addEventListener("click", C.productHandler);
  });
};

V.renderProduct = function (data) {
  document.querySelector("#Products").innerHTML = productRenderer(data);
};

V.renderCart = function (data) {
  document.querySelector(".cart__items").innerHTML = productCart(data);
};

V.togglePopUp = function () {
  let target = document.querySelector(".popUp");
  if (target.classList.contains("popUp--visible")) {
    target.classList.remove("popUp--visible");
    document.body.style.overflow = "auto";

    target.innerHTML = "";
    product.delSelectedOptions();
  } else {
    target.classList.add("popUp--visible");
    

    // document.body.style.overflow = "hidden";
    
    // scroll to top

  }
};

let C = {};

C.init = function () {
  V.renderProduct(M.productCollection.getProducts());
  V.renderCart(M.productCart.getProducts());

  V.init();
};

C.productHandler = function (e) {
  let id = e.target.dataset.id;

  product = M.productCollection.getProductById(parseInt(id));
  V.togglePopUp();

  selectRenderer(product);
  document
    .querySelectorAll(".orderHandler__content__item")
    .forEach((element) => {
      element.addEventListener("click", C.itemHandler);
    });

  document
    .querySelector(".orderHandler__icons--close")
    .addEventListener("click", V.togglePopUp);

    document.querySelector(".orderHandler__button").addEventListener("click", C.addToCart);
};

C.itemHandler = function (e) {
  let target = e.currentTarget;
  console.log(product);
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
  if (e.target.classList.contains("filters__text")) {
    let type = e.target.dataset.type;
    let target = e.target;
    let targetClass = e.target.classList[1];

    if (target.classList.contains("filters__text--active")) {
      target.classList.remove("filters__text--active");
      


      filters.pop(type);
    } else {
      target.classList.add("filters__text--active");
      filters.push(type);
    }

    if (filters.length != 0) {
      V.render(M.productCollection.getProductsByCategory(filters));
    } else {
      V.render(M.productCollection.getProducts());
    }
  }
};

C.addToFavorites = function (e) {
  let id = e.currentTarget.getAttribute("data-id");
  let product = M.productCollection.getProductById(parseInt(id));

  M.productFavorites.addProduct(id);
  console.log("Added", product);

  console.log(M.productFavorites);
};

C.addToCart = function (e) {
  M.productCart.addProduct(product);
  V.renderCart(M.productCart.getProducts());
  console.log(M.productCart.getProducts());
  V.togglePopUp();
}

C.init();
