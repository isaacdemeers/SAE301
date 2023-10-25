import { ProductCollection } from "./class/ProductCollection.js";
import { productRenderer } from "./renderer/ProductRenderer.js";

let filters = []


let M = {
  productCollection: new ProductCollection(),
};

await M.productCollection.loadProducts("http://localhost:8888/api/products");

let V = {};

V.init = function () {
  document.body.addEventListener("click", C.clickHandler);
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

C.clickHandler = function (e) {
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

