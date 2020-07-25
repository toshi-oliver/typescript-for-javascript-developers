export {};

let number1: number[] = [1, 2, 3];

let number2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['Typescript', 'javascript', 'CoffeScript'];

let nijigenHairetsu: number[][] = [
  [500, 100],
  [150, 500],
];
// ユニオン型
let hairetsu: (string | number | boolean)[] = [1, false, 'japan'];
