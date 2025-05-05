const name = "Arbaaz";
const repoCount = 13

// console.log(name + " " + repoCount );

console.log(`My name is ${name} and my repo count is ${repoCount}`); // it is preferable

const newName = new String("Arbaaz Ali Shaikh");

console.log(newName[0]);
console.log(newName.length); // length of string
console.log(newName.__proto__); // it returns {}


console.log(newName.split(' ')); // it split the string on the basis of space and it returns array of the element
console.log(newName.slice(0, 8)); // ek range mein value return krta hai aur end value include nhi krta hai

console.log(newName.charAt(8)); // uss particular index pr konsa hai character hai woh batata hai
console.log(newName.indexOf('l')); // particular character konse index pr hai woh batata hai mtlb index batata hai

const anotherName = "    Shahid     ";
console.log(anotherName);
console.log(anotherName.trim()); // trim whitespace ko remove krta hai aur new string return krta hai

const url = "abc@gmail.com";
console.log(url.includes('z'));
console.log(url.replace('abc', 'abcd'));





