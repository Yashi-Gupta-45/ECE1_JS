// Loops with key in object .
// Run no. of key times .

const person = {
    fname: "Ajay",
    lname: "Singh",
    age: 25

};
for(let x in person){
    console.log("person details:"+ x + ":" + person[x])
}