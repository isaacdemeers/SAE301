
export class OrderCollection {
  #uri;
  #order;

  constructor() {
    this.#order = [];
    this.#uri = "";
  }

  getOrders() {
    return this.#order;
  }

  addOrder(order) {
    this.#order.push(order);
  }

  removeOrder(order) {
    let index = this.#order.indexOf(order);
    this.#order.splice(index, 1);
  }
}

