// Listing 2-38.

var foo = {};
foo.__proto__.bar= 123;
console.log(foo.bar); // 123