'use strict';
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

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas'); // 3
console.log(false || 'Jonas'); // Jonas
console.log('' || 'Jonas'); // Jonas cuz empty string is FALSE
console.log(true || 0); // true
console.log(undefined || null); // null - both false
console.log(undefined || null || 'Jonas'); // Jonas
console.log(undefined || null || '' || 'Jonas' || 23 || true); // Jonas

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1)

const guests2 =  restaurant.numGuests || 10;
// console.log(guests2)

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect)

// && short-circuiting
console.log(0 && 'Marek') // false -> 0
console.log(7 && 'Marek') // true -> 7 -> Marek
console.log(7 && 23 && null && 'Marek')


restaurant.orderPasta && restaurant.orderPasta('mushrooms', 'cheese', 'parmesan');