import { ProductCollection } from "./class/ProductCollection.js";

let product = new ProductCollection();

await product.loadProducts();

//console.log(product.);

window.p = product;
