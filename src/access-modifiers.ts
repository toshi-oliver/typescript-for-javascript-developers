export {};

class Person {
  public name: string; // 普通publicは書かない
  private age: number; // アクセス修飾子、クラス内でしか呼び出せない。
  protected nationality: string; // 子クラスから呼び出すことができる。

  // constructorは戻り値がないので、型を定義する必要がない。
  // 仕様としてvoidも書いてはいけない。
  // 引数には型定義が必要
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');

console.log(taro.name);
// メソッドからprivateに設定してageを呼び出すことができる
console.log(taro.profile());
