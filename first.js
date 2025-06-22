console.log(first());

function first(name = "Hoisted") {
  console.log(name, "inside function");
  return name;
}

console.log(first("After function initialized"));

// OUTPUT:
// Hoisted inside function
// Hoisted
// After function initialized inside function
// After function initialized

// Hence, we can see the order is
// function is executed first when called even though it was Hoisted.
// then the result of Hoisted(BEFORE the function is actually declared) function is executed.
// then the result of called funtion AFTER the function is declared.
