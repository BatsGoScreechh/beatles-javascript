// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.


// object
// array

// const mother = {
//     Name: "Katrina"
// }

// const father = {
//     Name: "Jerry"
// }

// const brother = {
//     Name: "Casey"
// }

// const grandMother = {
//     Name: "Dianne"
// }

// const familyMembers = [mother, father, brother, grandMother]

// for(let i = 0; i < familyMembers.length; i++){
// console.log(familyMembers[i])
// }

// console.log(familyMembers)

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.


const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height)
console.log(wardrobe.manufacturer)
console.log(wardrobe.contents)
console.log(wardrobe.depth)
console.log(wardrobe.width)


// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.stories)
console.log(empireStateBuilding.height)
console.log(empireStateBuilding.eastWestLength)
console.log(empireStateBuilding.northSouthLength)
console.log(empireStateBuilding.squareFeet)

const address = empireStateBuilding.address
const date = empireStateBuilding.constructionDate
const cost2 = empireStateBuilding.cost
const owner2 = empireStateBuilding.owner
const arch = empireStateBuilding.architect
const dimensions = `${empireStateBuilding.height} by ${empireStateBuilding.eastWestLength} by ${empireStateBuilding.northSouthLength}`

console.log(dimensions)


console.log(address)
console.log(date)
console.log(cost2)
console.log(owner2)
console.log(arch)


// Lightning Exercise 1: Output the names of the instructors to the console.
// Lightning Exercise 2: Output the names of the career advisors to the console.

const newForce = {
    founded: 2018,
    instructors: {
        fullTime: ["Jordan", "Josh", "Kim"],
    },
    careerAdvisors: ["Natalie", "Kinsey"],
    address: "1000 5th Ave, Huntington, WV 25701"
}

console.log(newForce.instructors.fullTime)
console.log(newForce.careerAdvisors)

const instructorsArray = newForce.instructors.fullTime
const advisorArray = newForce.careerAdvisors

for(let i = 0; i < instructorsArray.length; i++){
    console.log(instructorsArray[i])
}

for(let h = 0; h < advisorArray.length; h++){
    console.log(advisorArray[h])
}