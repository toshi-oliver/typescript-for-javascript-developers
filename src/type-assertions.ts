export {};
// アサーション
// 互換性がある型のみ対応。(string→numberは不可)
let name: any = 'toshi';

// jsxでは<>が紛らわしくなるので、以下の書き方は推奨されていない
// let length = (<string>name).length;

// let length: number = name.length;
let length = (name as string).length;

// length = 'foo';
