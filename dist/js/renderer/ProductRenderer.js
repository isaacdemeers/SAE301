import { Product } from "../class/Product.js";

const cardtemplatePath = "./templates/card.html.inc";

// get the content of the template templatePath and store it in productTemplate
let cardproductTemplate = "";
fetch(cardtemplatePath)
  .then((response) => response.text())
  .then((data) => (cardproductTemplate = data));

function findProductsWithMostStock(data) {
  let maxStock = 0;
  let productsWithMaxStock = [];

  for (let p of data) {
    // on vérifie que p est bien un Product
    if (p instanceof Product) {
      if (p.getStock() > maxStock) {
        maxStock = p.getStock();
        productsWithMaxStock = [p];
      } else if (p.getStock() === maxStock) {
        productsWithMaxStock.push(p);
      }
    }
  }

  return productsWithMaxStock;
}

// data attend un tableau de Product
let render = function (data) {
  let html = "";
  let all = "";
  // on vérifie que data est bien est tableau
  if (data instanceof Array === false) {
    console.error("data has to be an array of Products");
    return all;
  }

  let highStock = findProductsWithMostStock(data);

  for (let p of data) {
    // on vérifie que p est bien un Product
    if (p instanceof Product) {
      html = cardproductTemplate;
      html = html.replace("{{name}}", p.getName());
      html = html.replaceAll("{{id}}", p.getId());
      html = html.replace("{{category}}", p.getCategory());
      html = html.replaceAll("{{imgUrl}}", "./assets/img/" + p.getImage());
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
      }
      // si le p est dans highStock
      else if (highStock.includes(p)) {
        html = html.replace(
          "{{price}}",
          (p.getPrice() * 0.8).toFixed(2) + " €"
        );

        html = html.replace(
          "{{stock}}",
          "banner--visible " + "banner--highStock"
        );
      }

      html = html.replace("{{price}}", p.getPrice() + " €");

      all += html;
    }
  }
  return all;
};

export { render as productRenderer };
