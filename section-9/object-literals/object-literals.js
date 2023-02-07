"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  welcomeMessage(name) {
    return `Welcome ${name}, how can I help you?`;
  },
};

// console.log(restaurant)
console.log(restaurant.openingHours?.mon?.open);

const days = [...weekdays];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(
    `On ${day}, ${(open && `we open at: ${open}`) || `we're closed`}`
  );
}