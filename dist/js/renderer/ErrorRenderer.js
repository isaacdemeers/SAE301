import { Product } from "../class/Product.js";

const templatePath = "./templates/alert.html.inc";


fetch(templatePath)
  .then((response) => response.text())
  .then((data) => (selectTemplate = data));

let selectTemplate = "";



let render = function (product, message, subMessage) {

  fetch(templatePath)
    .then((response) => response.text())
    .then((data) => (selectTemplate = data));

  let target = document.querySelector('.popUp')

  if (product instanceof Product) {
    selectTemplate = selectTemplate.replace("{{alertMessage}}", product.getName() + message);
  } else {
    selectTemplate = selectTemplate.replace("{{alertMessage}}", message);
  }

  selectTemplate = selectTemplate.replace("{{textMessage}}", subMessage);



  target.innerHTML = selectTemplate;

};

export { render as errorRenderer };


