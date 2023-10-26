import { ProductCollection } from "./class/ProductCollection.js";
import { productRenderer } from "./renderer/ProductRenderer.js";
<<<<<<< Updated upstream
import { productCart } from "./renderer/CartRenderer.js";
=======
import { selectRenderer } from "./renderer/SelectRenderer.js";

let filters = []
let product = null;
>>>>>>> Stashed changes

let filters = [];

let M = {
  productCollection: new ProductCollection(),
  productCart: new ProductCollection(),
  productFavorites: new ProductCollection(),
};

<<<<<<< Updated upstream
await M.productCollection.loadProducts("http://localhost:8888/api/products");
await M.productCart.loadProducts("http://localhost:8888/api/products"); // À MODIFIER

let V = {};

V.init = function () {
  // document.body.addEventListener("click", C.clickHandler);

  document.querySelectorAll(".product__svg-label").forEach((btn) => {
    btn.addEventListener("click", C.addToFavorites);
  });
};
=======

let V = {};

V.init = async function () {
  await M.productCollection.loadProducts("http://localhost:8888/api/products");

  V.render(M.productCollection.getProducts());
  document.querySelector('.main__filters').addEventListener("click", C.filtersHandler);
  document.querySelectorAll('.product__button').forEach(element => {
    element.addEventListener("click", C.productHandler);
  });

};  

>>>>>>> Stashed changes
V.render = function (data) {
  document.querySelector("#Products").innerHTML = productRenderer(data);
  document.querySelector(".cart__items").innerHTML = productCart(data);
};


V.togglePopUp = function () {
  let target = document.querySelector('.popUp');
  if (target.classList.contains("popUp--visible")) {
    target.classList.remove("popUp--visible");
    target.innerHTML = "";
  } else {
    target.classList.add("popUp--visible");
  }

}



let C = {};

C.init = function () {
<<<<<<< Updated upstream
  V.render(M.productCollection.getProducts());
  V.init();
};

C.clickHandler = function (e) {
=======
  V.init();
};




C.productHandler = function (e) {
  let id = e.target.dataset.id;

  product = M.productCollection.getProductById(parseInt(id));
  V.togglePopUp();

  selectRenderer(product);
  document.querySelectorAll('.orderHandler__content__item').forEach(element => {
    element.addEventListener("click", C.itemHandler)
  });

  document.querySelector('.orderHandler__icons--close').addEventListener("click", V.togglePopUp);

}

C.itemHandler = function(e) {
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

}


C.filtersHandler = function (e) {
>>>>>>> Stashed changes
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
  console.log("Removed product from favorites: ", product);

  console.log(M.productFavorites.getProducts());
};

C.init();
