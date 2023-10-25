import { ProductCollection } from "./class/ProductCollection.js";
import { productRenderer } from "./renderer/ProductRenderer.js";

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
    if (target.classList.contains("filters__text--active")) {

    } else {
      V.render(M.productCollection.getProducts());
    }

    e.target.classList.add("filters__text--active");

  }
};

C.init();

