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
          product.options
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

  getProductByPrice(price) {
    return this.#products.filter((product) => product.getPrice() === price);
  }

  getProductByDescription(description) {
    return this.#products.filter(
      (product) => product.getDescription() === description
    );
  }

  getProductByImage(image) {
    return this.#products.filter((product) => product.getImage() === image);
  }

  getProductByStock(stock) {
    return this.#products.filter((product) => product.getStock() === stock);
  }

  getProductByOptions(options) {
    return this.#products.filter((product) => product.getOptions() === options);
  }
}
