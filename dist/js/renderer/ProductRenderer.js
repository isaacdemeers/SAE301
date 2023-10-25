import { Product } from "../class/Product.js";

const productTemplate = document.querySelector("#ProductsTemplate").innerHTML;

// data attend un tableau de Product
let render = function (data) {
  let html = "";
  let all = "";
  // on vérifie que data est bien est tableau
  if (data instanceof Array === false) {
    console.error("data has to be an array of Products");
    return all;
  }
  for (let p of data) {
    // on vérifie que p est bien un Product
    if (p instanceof Product) {
      html = productTemplate.replace("{{id}}", p.getId());
      html = html.replace("{{name}}", p.getName());
      html = html.replace("{{category}}", p.getCategory());
      html = html.replaceAll("{{imgUrl}}", "./assets/img/" + p.getImage());
      html = html.replace("{{price}}", p.getPrice() + " €");

      all += html;
    }
  }

  return all;
};

export { render as productRenderer };
