// var myName = "David";
// let numberOfPets = 1;
// const socialSecurity = 312457798;

// console.log("Hi, my name is ", myName, "and I have ", numberOfPets, "pet and my social security number is", socialSecurity)

// const bio = `${myName} has ${numberOfPets} pet and his social security number is ${socialSecurity}.`

// console.log(bio)

const hasPets = false;
if(hasPets){
    alert("What are your pet's names?")
} else {
    alert("You should get some pets.")
}

const age = 19;
const isCitizen = true;
if(age >= 21 && isCitizen === true){
    console.log("You can drink and vote!");
} else if (age >= 18 && isCitizen === true) {
    console.log ("You can vote, but not drink!")
} else {
    console.log("You can't do anything fun.")
}