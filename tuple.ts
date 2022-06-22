// In TypeScript tuple is fixed-length array.

const person: {
  name: string;
  age: number;
  role: [number, string];
} = {
  name: "Robin",
  age: 34,
  role: [1, "Software Engineer"],
};

person.role[0] = 10;
console.log(person.role); //output [10, 'Software Engineer']

