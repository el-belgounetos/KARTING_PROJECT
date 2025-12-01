export class CounterDTO {
  public nConsole: number = 0;
  public console: string = '';

  constructor(n: number, c: string) {
    this.nConsole = n;
    this.console = c;
  }
}
