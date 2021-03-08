export default class contacts {
  datas;

  constructor(data) {
    this.datas = data;
  }

  get contacts() {
    return this.datas.filterBy('isDeleted', false);
  }

  get contactsCount() {
    return this.contacts.length;
  }

  get deleteds() {
    return this.datas.filterBy('isDeleted', true);
  }

  get deletedsCount() {
    return this.deleteds.length;
  }
}
