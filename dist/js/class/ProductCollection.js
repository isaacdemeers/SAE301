import { Product } from "./Product.js";

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
