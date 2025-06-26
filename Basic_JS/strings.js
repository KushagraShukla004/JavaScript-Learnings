const name = "Kush";

let name1 = new String("Kushagra");
console.log(name1);
/*
("Kush");
0: "K"
1: "u"
2: "s"
3: "h"
*/

// console.log(name1.__proto__);

console.log(name1.charAt(2));
console.log(name1.indexOf("s"));

const newString = name1.substring(0, 3); //0,1,2 kus
console.log(newString);

const secondString = name1.slice(0, 3); //0,1,2 kus

// in slice u can use negative values but not in substring

const anotherString = "  Kushagra Shukla ";
console.log(anotherString);
console.log(anotherString.trim("")); // trim ONLY removes whitespaces from start and end not from middle

const url = "http://localhost.com/kush%20shukla";

console.log(url.replace("%20", "-")); //replaces %20 with -

console.log(url.includes("kush")); // searches for 'kush' in url if found prints true if not then false

const string1 = "Kushagra Shukla w/o spaces yeah";

// console.log(string1.split(" ")); //[ 'Kushagra', 'Shukla', 'w/o', 'spaces', 'yeah' ]
console.log(string1.split("s")); //[ 'Ku', 'hagra Shukla w/o ', 'pace', ' yeah' ] (notice it only took lowercase "s" and not "S")
