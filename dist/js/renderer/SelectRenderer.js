import { Product } from "../class/Product.js";

const templatePath = "./templates/orderHandler/orderHandlerContent.html.inc";
const templateItemPath = "./templates/orderHandler/orderHandlerOption.html.inc";


let selectTemplate = "";
let itemTemplate = "";

fetch(templatePath)
  .then((response) => response.text())
  .then((data) => (selectTemplate = data));


fetch(templateItemPath)
  .then((response) => response.text())
  .then((data) => (itemTemplate = data));


let render = function (product) {

  fetch(templatePath)
  .then((response) => response.text())
  .then((data) => (selectTemplate = data));


fetch(templateItemPath)
  .then((response) => response.text())
  .then((data) => (itemTemplate = data));

  let target = document.querySelector('.popUp')


  selectTemplate = selectTemplate.replace("{{mealImage}}", product.getImage());
  selectTemplate = selectTemplate.replace("{{mealName}}", product.getName());
  selectTemplate = selectTemplate.replace("{{des}}", product.getDescription());


  let options = product.getOptions();
  let optionHtml = "";
  options.forEach(option => {
    optionHtml += itemTemplate.replace("{{name}}", option.name).replace("{{optionId}}", option.id);
  });
  selectTemplate = selectTemplate.replace("{{orderHandlerContent}}", optionHtml);
  target.innerHTML = selectTemplate;

};

export { render as selectRenderer };


