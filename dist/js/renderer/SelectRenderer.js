import { Product } from "../class/Product.js";

const templatePath = "./templates/orderHandler/orderHandlerContent.html.inc";
const templateItemPath = "./templates/orderHandler/orderHandlerItem.html.inc";


let selectTemplate = "";
let itemTemplate = "";

fetch(templatePath)
  .then((response) => response.text())
  .then((data) => (selectTemplate = data));


fetch(templateItemPath)
  .then((response) => response.text())
  .then((data) => (itemTemplate = data));


let render = function (data) {
  console.log(itemTemplate);
  console.log(selectTemplate);

};

export { render as selectRenderer };


