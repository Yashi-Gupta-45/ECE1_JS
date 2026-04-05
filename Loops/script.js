var i ;
for( i = 0 ; i < 3 ; i = i + 1 )
{
    console.log(i);
} 

const person = {
    fname: "Ajay",
    lname: "Singh",
    age: 25

};
for(let x in person){
    console.log("person details:"+ x + ":" + person[x])
}