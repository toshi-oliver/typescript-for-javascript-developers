export {};

// 抽象クラスを継承した際に、抽象メソッドを定義し忘れていることを教えてくれる
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrr';
  }
}
