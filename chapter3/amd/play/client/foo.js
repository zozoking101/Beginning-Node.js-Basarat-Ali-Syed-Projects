// Listing 3-49

define([], function () {
    var foo = function () {
        console.log('foo was called');
    };
    return foo; // function foo is exported
});