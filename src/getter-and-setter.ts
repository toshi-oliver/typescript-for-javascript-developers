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
//TODO:ハムさんに質問
//Q.11行目~13行目getを付与しない場合、呼び出しはconsole.log(card.owner())
// 15行目~17行目getを付与する場合→呼び出しはconsole.log(card.owner)
// getをつけると引数（）を加えないのはなぜか
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 1111111;
console.log(card.debugPrint());
