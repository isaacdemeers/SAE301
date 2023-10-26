import { Product } from "../class/Product.js";

const templatePath = "./templates/card.html.inc";

// get the content of the template templatePath and store it in productTemplate
let productTemplate = "";
fetch(templatePath)
  .then((response) => response.text())
  .then((data) => (productTemplate = data));

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
      html = html.replace("{{id}}", p.getId());
      html = html.replace("{{category}}", p.getCategory());
      html = html.replaceAll("{{imgUrl}}", "./assets/img/" + p.getImage());
      html = html.replace("{{price}}", p.getPrice() + " €");
      html = html.replace(
        "{{description}}",
        p.getDescription() ? p.getDescription().slice(0, 40) + "..." : ""
      );

      if (p.getStock() <= 0) {
        html = html.replace(
          "{{stock}}",
          "banner--visible " + "banner--noStock"
        );
      } else if (p.getStock() < 5) {
        html = html.replace(
          "{{stock}}",
          "banner--visible " + "banner--lowStock"
        );
      } else {
        html = html.replace("{{stock}}", "test");
      }
      all += html;
    }
  }
  return all;
};

export { render as productRenderer };
