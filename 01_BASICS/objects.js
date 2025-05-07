// singleton
// Object.create

// Object Literals

const mySymbol = Symbol("key");

const myObj = {
    name : "Arbaaz",
    age : 22,
    location : "Mumbai",
    email : "abcd@gmail.com",
    [mySymbol] : "you"
}

console.log(myObj);
// console.log(myObj.name);
// console.log(myObj['location']);
// console.log(myObj[mySymbol]); // symbols ko object mein use krna hai aur print krna hai to aise karenge

myObj.email = "abz@gmail.com";

console.log(myObj);

// Object.freeze(myObj); // iske likhne ka baad object mein kuchh change nhi hoga

// myObj.name = "Ali";

// console.log(myObj);


myObj.greeting = function(){
    console.log("Hello JS");
    
}
console.log(myObj.greeting); // aise likhne se function execute nhi hoga , function ka reference milega

// console.log(myObj);

console.log(myObj.greeting());

myObj.greetingTwo = function(){
    console.log(`Hello Js, ${this.name}`); // same object ko refer krna hai aur uske ander k value ko access krna hai to this keyword se access kr sakte hai
}

console.log(myObj.greetingTwo());






