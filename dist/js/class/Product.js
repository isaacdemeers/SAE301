export class Product {
  #id;
  #name;
  #category;
  #price;
  #description;
  #image;
  #stock;
  #option;
  #selectedOption;


  constructor(id, name, category, price, description, image, stock, option) {
    this.#id = id;
    this.#name = name;
    this.#category = category;
    this.#price = price;
    this.#description = description;
    this.#image = image;
    this.#stock = stock;
    this.#option = option;
    this.#selectedOption = [];
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

  setPrice(price) {
    this.#price = parseFloat(price.toFixed(2));
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

  getOptionById(id) {
    return this.#option.find((option) => option.id === id);
  }

  getSelectedOption() {
    return this.#selectedOption;
  }

  setSelectedOption(option) {
    this.#selectedOption.push(option);
  }

  delSelectedOptions() {
    this.#selectedOption = [];
  }

  delSelectedOption(id) {
    this.#selectedOption = this.#selectedOption.filter(option => option.id != id);
  }
}
