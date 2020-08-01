export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}
// indexシグネチャー
// 未知のプロパティを追加してもエラーにならない
let profile: Profile = { name: 'toshi', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'japan';
