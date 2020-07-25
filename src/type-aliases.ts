export {};

type Mojiretsu = string;

const foostring: string = 'Hello';
const foosMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  lastname: 'furukawa',
  firstname: 'toshiaki',
  age: 34,
};

type profile = {
  name: string;
  age: number;
};

const example2: profile = {
  name: 'Toshi',
  age: 32,
};

type profile2 = typeof example1;
