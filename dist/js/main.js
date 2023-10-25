import { ProductCollection } from "./class/ProductCollection.js";
import { productRenderer } from "./renderer/ProductRenderer.js";

let filters = []


let M = {
  productCollection: new ProductCollection(),
};

await M.productCollection.loadProducts("http://localhost:8888/api/products");

let V = {};

V.init = function () {
  document.querySelector('.main__filters').addEventListener("click", C.filterHandler);
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

C.filterHandler = function (e) {
  let target = e.target;
    if (target.classList.contains("filters__checkbox") || target.classList.contains("filters__text")) {

      if (target.parentElement.children[0].checked && target.classList.contains("filters__text")) {
        target.parentElement.children[0].checked = false;
      }
      else if (!target.parentElement.children[0].checked && target.classList.contains("filters__text")) {
        target.parentElement.children[0].checked = true;
      }

      let parentType = target.parentElement.dataset.type;

      if (target.parentElement.children[0].checked) {
        filters.push(parentType);
      } else {
        filters = filters.filter(item => item !== parentType);

      }

      console.log(filters); 


      if (filters.length != 0) {
        V.render(M.productCollection.getProductsByCategory(filters));
  
      } else {
        V.render(M.productCollection.getProducts());
      }

    }


    

   if (target.classList.contains('filters__option')) {
    let value = target.value;
    console.log(value);
  }
};

C.init();

