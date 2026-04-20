// Create an object called myProfile with at least 4 properties: name,age,country and hobby.Then write a function displayProfile(person) that logs a sentence describing the person using their properties.

let myProfile = {name: "Ifeoma", age: 38, country:"Philippine", hobby:"Acting"}

function displayProfile(person) { console.log("My name is " + person.name + ", I am " + person.age + " years old, I am filipina from " + person.country + " and i am deeply into " + person.hobby + ".")}

displayProfile(myProfile)