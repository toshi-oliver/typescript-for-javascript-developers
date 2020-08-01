export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  // owner(): string {
  //   return this._owner;
  // }
  get owner(): string {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('とし', 1233455);
// console.log(card.owner());
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 1111111;
console.log(card.debugPrint());
