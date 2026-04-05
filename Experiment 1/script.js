function calculateResult(){

    let numSubjects = parseInt(document.getElementById("subjects").value);
    let total = 0;
    for(let i = 1; i <= numSubjects; i++){
        let marks = parseFloat(prompt("Enter marks for subject " + i));
        total = total + marks;
    }
    let average = total / numSubjects;
    let grade;
    if(average >= 90){
        grade = "A";
    }
    else if(average >= 75){
        grade = "B";
    }
    else if(average >= 50){
        grade = "C";
    }
    else{
        grade = "F";
    }

    let resultStatus;

    if(average >= 40){
        resultStatus = "PASS";
    }
    else{
        resultStatus = "FAIL";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + resultStatus;
}
