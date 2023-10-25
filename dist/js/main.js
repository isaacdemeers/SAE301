import { ProductCollection } from "./class/ProductCollection.js";

let products = new ProductCollection();
await products.loadProducts("http://localhost:8888/api/products");
let product = products.getProductByStock(
  Math.max(...products.getProducts().map((product) => product.getStock()))
)[0];
product.setPrice(product.getPrice() * 0.8);

console.log(product);
