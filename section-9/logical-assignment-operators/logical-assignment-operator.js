const restaurant1 = {
    name: 'Capri',
    numGuests: 0,
};

const restaurant2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;

// Result will be the same as restaurant1.numGuests = restaurant1.numGuests || 10;
restaurant1.numGuests ||= 10;

// When obj.numGuests is undefined || null -> value changes to 10
restaurant1.numGuests ??= 10;

restaurant1.owner &&= 'Anonymous';
restaurant2.owner &&= 'Anonymous';

console.log(restaurant1)
console.log(restaurant2)