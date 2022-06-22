// In TypeScript tuple is fixed-length array.
var person = {
    name: "Robin",
    age: 34,
    role: [1, "Software Engineer"]
};
person.role[0] = 10;
console.log(person.role);
