export default class Services {
  services = [];
  constructor(services) {
    this.services = services;
  }

  get countActive() {
    return this.services.filterBy('active', true).length;
  }

  get sumActive() {
    let services = this.services.filterBy('active', true);
    let result = 0;
    services.forEach((s) => {
      result += s.price;
    });
    return result;
  }
}
