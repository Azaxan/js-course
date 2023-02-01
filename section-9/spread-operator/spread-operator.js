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

  orderPasta: function (...ingredients) {
    console.log(`Here is your delicious pasta with ${[...ingredients]}`);
  },
};

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci", "Kebab"];
// console.log(newMenu);

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: [], strings, maps, sets
const str = "Jonas";
const letters = [...str];
// console.log(letters);

// const ingredients = ["parmesan", "bacon", "aspargus"];
restaurant.orderPasta('bomba', 'dynamit', 'c4', 'menel');

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// Rest Pattern & Parameters
// SPREAD, because on RIGHT SIDE of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of = { takes rest of elements and put in a new array }
const [a, b, ...others] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// Functions
const add = function (...params) {
  let sum = 0;
  for (let i = 0; i < params.length; i++) sum += params[i];
  // console.log(sum)
  return sum;
};

const x = [23, 5, 7];
add(...x)
