// singleton
// Object.create

// Object Literals

const mySymbol = Symbol("key");

const myObj = {
    name: "Arbaaz",
    age: 22,
    location: "Mumbai",
    email: "abcd@gmail.com",
    [mySymbol]: "you"
}

// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj['location']);
// console.log(myObj[mySymbol]); // symbols ko object mein use krna hai aur print krna hai to aise karenge

myObj.email = "abz@gmail.com";

// console.log(myObj);

// Object.freeze(myObj); // iske likhne ka baad object mein kuchh change nhi hoga

// myObj.name = "Ali";

// console.log(myObj);


myObj.greeting = function () {
    console.log("Hello JS");

}

// console.log(myObj.greeting); // aise likhne se function execute nhi hoga , function ka reference milega

// console.log(myObj);

// console.log(myObj.greeting());

myObj.greetingTwo = function () {
    console.log(`Hello Js, ${this.name}`); // same object ko refer krna hai aur uske ander k value ko access krna hai to this keyword se access kr sakte hai
}

// console.log(myObj.greetingTwo());

// const tinderUser = new Object();
// console.log(tinderUser);

const tinderUser = {}

tinderUser.id = 1234;
tinderUser.name = "shaikh",
tinderUser.email = "xyz@gmail.com"
// console.log(tinderUser);

const regularUser = {
    id: 1234,
    fullname: {
        userfullname: {
            firstname: "Arbaaz",
            lastname: "Shaikh"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2)
// Object.assign ki madad se hum objects ko merge kr sakte hai

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// database se jab data aat hai to kuchh is tarah se aata hai
const users = [
    {
        id:1,
        email:"1@gmail.com"
    },
    {
        id:2,
        email:"2@gmail.com"
    },
    {
        id:3,
        email:"3@gmail.com"
    }
]
// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // it will return array of keys
// console.log(Object.values(tinderUser)); // it will retrun array of values
// console.log(Object.entries(tinderUser)); // array return hoga aur array k ander ek ek key value pair ka array milega

// Object Destructuring
const course = {
    courseName : "Javascript",
    price : 499,
    courseInstructor : "Arbaaz"
}
console.log(course);

// const {courseName} = course
// console.log(courseName);

const {courseName : name} = course
console.log(name);
