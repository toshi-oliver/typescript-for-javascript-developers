export {};

// 引数にアクセス修飾しをつけることで、引数で初期化処理が可能
class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('とし', 30);
console.log(me);
