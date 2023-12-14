// Listing 2-18.

function outerFunction(arg) {
    var variableInOuterFunction = arg;
    function bar() {
    console.log(variableInOuterFunction); // Access a variable from the outer scope
    }
    // Call the local function to demonstrate that it has access to arg
    bar();
    }