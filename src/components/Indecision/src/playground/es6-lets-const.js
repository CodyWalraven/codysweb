var nameVar = "Cody"
var nameVar = "Dog"
console.log(`Hi my nameVar is ${nameVar}`)

let nameLet = "Jen"
console.log(nameLet);

const nameConst = "Bodacious"
console.log(nameConst);


// Block scoping

const fullName = "Cody Walraven"
let firstName

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName);
}

console.log(firstName);