import { Product } from "./Product.js";
import { getRequest } from "../api-queries.js";

export class ProductCollection {
  #uri;
  #products;

  constructor() {
    this.#uri = "";
    this.#products = [];
  }

  async loadProducts(uri) {
    let response = await getRequest(uri);
    this.#uri = uri;

    response.forEach((product) => {
      this.addProduct(
        new Product(
          product.id,
          product.name,
          product.category,
          product.price,
          product.description,
          product.image,
          product.stock,
          product.option
        )
      );
    });

    return this.#products;
  }

  getProducts() {
    return this.#products;
  }

  addProduct(product) {
    if (product instanceof Product === true) this.#products.push(product);
  }

  removeProduct(product) {
    if (product instanceof Product === true) {
      let index = this.#products.indexOf(product);
      this.#products.splice(index, 1);
    }
  }

  getProductById(id) {
    return this.#products.find((product) => product.getId() === id);
  }

  getProductByName(name) {
    return this.#products.find((product) => product.getName() === name);
  }

  getProductByCategory(category) {
    return this.#products.filter(
      (product) => product.getCategory() === category
    );
  }

  getProductsByCategory(categories) {
    //category = ['1', '2', '3'];
    let html = [];
    categories.forEach((element) => {
      element = parseInt(element);
      html.push(this.getProductByCategory(element));
    });
    return html.flat();
  }

  getProductByStock(stock) {
    return this.#products.filter((product) => product.getStock() === stock);
  }
}
