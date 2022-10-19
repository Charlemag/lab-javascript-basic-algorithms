// Iteration 1: Names and Input

let hacker1 = "Amanda";
let hacker2 = "Esther";

console.log(`The drivers name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//
// Iteration 2: Conditionals

if (hacker1.length > hacker1.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
  } 
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  };

// Iteration 3: Loops

let spacedHacker1 = " "
 for(const letter of hacker1) {
  spacedHacker1 = spacedHacker1 + letter + ' '

}
console.log(spacedHacker1.toUpperCase());

let reversed = ""
for (let i = (hacker1.length); i>=0; i--) {
  reversed = reversed + hacker1.charAt(i)
  
}
console.log(reversed);

let order = hacker1.localeCompare('hacker2'); {
  if (order = -1) {
    console.log("The driver's name goes first.");
  } else if (order = 1) {
    console.log("Yo, the navigator goes first definitely.")
  } else  {
    console.log("What?! You both have the same name?")
  }
}
