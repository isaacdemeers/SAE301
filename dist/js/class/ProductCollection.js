import { Product } from "./Product.js";

export class ProductCollection {
  #products;

  constructor() {
    this.#products = [];
  }

  async loadProducts() {
    let response = await getRequest("http://localhost:8888/api/products");

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

  getProductByStock(stock) {
    return this.#products.filter((product) => product.getStock() === stock);
  }
}
