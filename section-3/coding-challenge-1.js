('use strict');
const bills = [1, 20, 170, 300, 310, 1000];

const calcTip = (billValue) => {
  let tipValue;
  if (billValue > 50 && billValue < 300) {
    tipValue = billValue * 0.85;
  } else {
    tipValue = billValue * 0.8;
  }
  return tipValue;
}

let taxedBills = [];

bills.forEach((bill) => {
  taxedBills.push(`${calcTip(bill)}$`);
})

console.log(taxedBills);