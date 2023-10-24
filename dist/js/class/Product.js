export class Product {
  #id;
  #name;
  #category;
  #price;
  #description;
  #image;
  #stock;
  #option;

  constructor(id, name, category, price, description, image, stock, option) {
    this.#id = id;
    this.#name = name;
    this.#category = category;
    this.#price = price;
    this.#description = description;
    this.#image = image;
    this.#stock = stock;
    this.#option = option;
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
    return this.#option;
  }
}
