export class Order {
  #id;
  #json;

  constructor(id, json) {
    this.#id = id;
    this.#json = json;
  }

  getId() {
    return this.#id;
  }

  getJson() {
    return this.#json;
  }
}
