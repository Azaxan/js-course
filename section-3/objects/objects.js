const person = {
  firstName: "Aleksander",
  lastName: "Oleszkiewicz",
  birthYear: 2003,

  getAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
};

console.log(person.getAge(), person.age);
