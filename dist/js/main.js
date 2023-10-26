import { ProductCollection } from "./class/ProductCollection.js";
import { productRenderer } from "./renderer/ProductRenderer.js";
import { selectRenderer } from "./renderer/SelectRenderer.js";

let filters = []


let M = {
  productCollection: new ProductCollection(),
};

await M.productCollection.loadProducts("http://localhost:8888/api/products");

let V = {};

V.init = function () {
  document.querySelector('.main__filters').addEventListener("click", C.filtersHandler);
}
;
V.render = function (data) {
  document.querySelector("#Products").innerHTML = productRenderer(data);
};

let C = {};

C.init = function () {
  V.init();
  V.render(M.productCollection.getProducts());


  
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

C.init();

