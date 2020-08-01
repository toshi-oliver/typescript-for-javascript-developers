export {};
// constアサーション
let name = 'toshiaki';

name = 'oliver';

let nickname = 'oliver' as const;
nickname = 'oliver';

// 変数の値を変えたくない場合、1箇所にas constを書くことで属性にわざわざ修飾子readonlyをセットする必要がなくなる。
let profile = {
  name: 'toshiaki',
  height: 176,
} as const;

// profile.name = 'oliver';
// profile.height = 180;
