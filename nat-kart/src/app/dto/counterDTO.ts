export class CounterDTO {
  public counter: number = 0;
  public name: string = '';

  constructor(counter: number, name: string) {
    this.counter = counter;
    this.name = name;
  }
}
