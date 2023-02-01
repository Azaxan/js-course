"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterMenuIndex = 1,
    mainMenuIndex = 0,
    time,
    address,
  }) {
    console.log(
      `✔️  Order received! ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

// Assigning a object properties to own var
const {
  name: restaurantName,
  categories: tags,
  openingHours: hours,
} = restaurant;

// console.log(restaurantName, tags, hours);

// Default values when destructuring
const { menu = [], starterMenu = [] } = restaurant;
// console.log(menu, starterMenu);

let a = 111;
let b = 999;

const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj);

// console.log(a, b);

const {
  sat: { open, close },
} = hours;
console.log(open, close);

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainMenuIndex: 2,
  starterMenuIndex: 2,
});
