export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('とし');
console.log(myVisaCard.owner);
// myVisaCard = 'ベーコン';
