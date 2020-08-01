export {};
//静的メンバ－
// newメソッドでインスタンスを作らなくても、直接メンバーを呼び出せる。
class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'toshiaki';
  static lastName: string = 'furukawa';

  static work() {
    return `Hey, guys! This is ${this.firstName} Are you interested in TS ?`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
