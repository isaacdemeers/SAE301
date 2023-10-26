import { Product } from "../class/Product.js";
import { ProductCollection } from "./class/ProductCollection.js";

const templatePath = "./templates/card.html.inc";

// get the content of the template templatePath and store it in productTemplate
let productTemplate = "";
fetch(templatePath)
  .then((response) => response.text())
  .then((data) => (productTemplate = data));