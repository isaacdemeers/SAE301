class Product {
  #id;
  #name;
  #category;
  #price;
  #description;
  #image;
  #stock;
  #options;

  constructor(id, name, category, price, description, image, stock, options) {
    this.#id = id;
    this.#name = name;
    this.#category = category;
    this.#price = price;
    this.#description = description;
    this.#image = image;
    this.#stock = stock;
    this.#options = options;
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  getCategory() {
    return this.#category;
  }

  getPrice() {
    return this.#price;
  }

  getDescription() {
    return this.#description;
  }

  getImage() {
    return this.#image;
  }

  getStock() {
    return this.#stock;
  }

  getOptions() {
    return this.#options;
  }
}
