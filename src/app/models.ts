export class CustomInput {
  value: any;
  order: number;
  id: string;

  constructor(value, order, id) {
    this.id = id;
    this.order = order;
    this.value = value;
  }
}
