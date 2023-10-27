export class Order {
  #id;
  #product;
  #status;

  constructor(id, product) {
    this.#id = id;
    this.#product = product;
    this.#status = 0;
  }

  getId() {
    return this.#id;
  }

  getProduct() {
    return this.#product;
  }

  setProduct(product) {
    this.#product = product;
  }


}
