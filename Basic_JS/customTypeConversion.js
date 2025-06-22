//creating my own type conversion function
let value = prompt("Enter a value:");
console.log("Original value:", value, "| type:", typeof value);

let typeToConvertTo = prompt(
  "Enter the data type to convert to (number, boolean, string):"
);

function convert(value, targetType) {
  if (targetType === "number") {
    // return +value; //changes string into number using unary plus operator(+)
    return value - 0; // simple trick to force JS to convert the value into number using IMPLICIT coercion. What it does is:
    //Subtracts 0 from value
    // But if value is not already a number, JavaScript tries to coerce it into a number
    // This is called implicit type conversion (coercion)
  }
  if (targetType === "boolean") {
    return value === "" ? false : true;
  }
  return value;
}

const converted = convert(value, typeToConvertTo);
console.log("Converted value:", converted, "| type:", typeof converted);
