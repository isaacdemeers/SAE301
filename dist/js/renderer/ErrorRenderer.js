import { Product } from "../class/Product.js";

const templatePath = "./templates/alert.html.inc";


fetch(templatePath)
  .then((response) => response.text())
  .then((data) => (selectTemplate = data));

let selectTemplate = "";



let render = function (product, message) {

  fetch(templatePath)
    .then((response) => response.text())
    .then((data) => (selectTemplate = data));

  let target = document.querySelector('.popUp')


  selectTemplate = selectTemplate.replace("{{alertMessage}}", product.getName() + message);
  target.innerHTML = selectTemplate;

};

export { render as errorRenderer };


