export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 19;
// ifで型をチェックしている。タイプガード
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 19;
}
