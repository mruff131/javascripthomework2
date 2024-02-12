//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name
    this.age = age 

    // Use an arrow to create the printInfo method
    this.printInfo = () => `${this.name} is ${this.age} years old.`
    
    // a method that increments the persons age by 1 each time the method is called.
    this.increaseAge = () => {
        this.age += 1
        return this.age;
        
    }
}

// Adding to the age 
let john = new Person('John', 18)
let hailey = new Person('Hailey', 27)
console.log(john.printInfo())
console.log(hailey.printInfo())
console.log(hailey.increaseAge())
console.log(hailey.increaseAge())
console.log(hailey.increaseAge())
console.log(hailey.printInfo())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkString = (str) => {
    return new Promise ( (resolve, reject) => {
        if (str.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

checkString('Hellooooooo')

.then( (result) => {
    console.log('Big word')
})
.catch( (error) => {
    console.log('Small Number')
})
