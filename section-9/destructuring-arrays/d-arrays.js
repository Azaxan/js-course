"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, , third, ...restCategories] = restaurant.categories; // Returns 1, 3 & rest of categories

// console.log(third, restCategories);

const [starterFood, mainFood] = restaurant.order(2, 0);

// console.log(starterFood, mainFood);

const nested = [2, 4, [5, 6]];

const [i, ,[j, k] ] = nested;

console.log(`${i} ${j} ${k}`);
