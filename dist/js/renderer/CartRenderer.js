import { Product } from "../class/Product.js";

const carttemplatePath = "./templates/cartitem.html.inc";

let cartproductTemplate = "";
fetch(carttemplatePath)
  .then((response) => response.text())
  .then((data) => (cartproductTemplate = data));

let cart = function (data) {
  let html = "";
  let all = "";

  if (data instanceof Array === false) {
    console.error("data has to be an array of Products");
    return all;
  }
  for (let p of data) {
    // on vérifie que p est bien un Product
    if (p instanceof Product) {
      html = cartproductTemplate;
      html = html.replace("{{name}}", p.getName());
      html = html.replace("{{price}}", p.getPrice() + " €");
      html = html.replace("{{description}}", p.getDescription());

      all += html;
    }
  }
  return all;
};
export { cart as productCart };
