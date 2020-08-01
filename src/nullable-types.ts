export {};

// Nullable Types
//　オブジェクトが決定していない場合、どうすれば良いか
// tsconfig.jsonの"strictNullChecks": falseにすることでどんな変数にもnullが許容できてしまう
// 結論: ユニオン型「|」を使おう
let profile: { name: string; age: number | null } = {
  name: 'Toshi',
  age: null,
};
