import { ProductCollection } from "./class/ProductCollection.js";
import { productRenderer } from "./renderer/ProductRenderer.js";

let M = {
  products: new ProductCollection(),
};

let V = {};

V.render = function (data) {
  // le produits sont affichés dans section
  document.getElementById("Products").innerHTML = productRenderer(data);
};

let C = {};

C.init = async function () {
  let nb = await M.products.load("http://localhost:3000/api/products");
  console.log(nb + " products added in the ProductCollection");
  V.render(M.products.findAll());
};

C.init();
