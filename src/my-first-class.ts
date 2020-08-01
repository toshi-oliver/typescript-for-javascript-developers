export {};

class Person {
  name: string;
  age: number;

  // constructorは戻り値がないので、型を定義する必要がない。
  // 仕様としてvoidも書いてはいけない。
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
// let hanako = new Person();
console.log(taro.profile());
