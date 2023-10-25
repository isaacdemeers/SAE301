import { ProductCollection } from "./class/ProductCollection.js";
import { productRenderer } from "./renderer/ProductRenderer.js";

let M = {
  productCollection: new ProductCollection(),
};

let V = {};

V.render = function (data) {
  document.querySelector("#Products").innerHTML = productRenderer(data);
};

let C = {};

C.init = async function () {
  console.log(
    await M.productCollection.loadProducts("http://localhost:8888/api/products")
  );
  V.render(M.productCollection.getProducts());
};

C.init();
