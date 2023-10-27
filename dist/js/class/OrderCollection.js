import { Product } from "./Order.js";

export class OrderCollection {
  #uri;
  #order;

  constructor() {
    this.#order = [];
    this.#uri = "";
  }

  async loadOrder(uri) {
    let response = await getRequest(uri);
    this.#uri = uri;

    response.forEach((order) => {
      this.addOrder(new Order(order.id, order.json));
    });

    return this.#order;
  }

  getOrders() {
    return this.#order;
  }

  addOrder(order) {
    if (order instanceof Order === true) this.#order.push(order);
  }

  removeOrder(order) {
    if (order instanceof Order === true) {
      let index = this.#order.indexOf(order);
      this.#order.splice(index, 1);
    }
  }
}
