let employees=[]
function addEmployee(){
    let name=document.getElementById("name").value;
    let id=document.getElementById("id").value;
    let salary=parseFloat(document.getElementById("salary").value);
    let dept=document.getElementById("dept").value;
    let emp={
        name:name,
        id:id,
        salary:salary,
        department:dept
    };
    employees.push(emp);
    alert("Employee added successfully!");
}
function displayEmployees(){
    let output="";
    for(let i=0;i<employees.length;i++){
        output+="Name: "+employees[i].name+"<br/>";
        output+="ID: "+employees[i].id+"<br/>";
        output+="Salary: "+employees[i].salary+"<br/>";
        output+="Department: "+employees[i].department+"<br/><br/>";
    }
    document.getElementById("output").innerHTML=output;
}
function filterSalary(){
    let output="";
    for(let i=0;i<employees.length;i++){
        if(employees[i].salary>50000){
            output+="Name: "+employees[i].name+"-"+"Salary: "+employees[i].salary+"<br/>";
        }
    }
    document.getElementById("output").innerHTML=output;
}
function totalSalary(){
    let total=0;
    for(let i=0;i<employees.length;i++){
        total+=employees[i].salary;
    }
    document.getElementById("output").innerHTML="Total Salary: "+total;
}
function averageSalary(){
    let total=0;
    for(let i=0;i<employees.length;i++){
        total+=employees[i].salary;
    }
    let average=total/employees.length;
    document.getElementById("output").innerHTML="Average Salary: "+average;
}
function countDepartment(){
    let dept=prompt("Enter department name:");
    let count=0;
    for(let i=0;i<employees.length;i++){
        if(employees[i].department.toLowerCase()===dept.toLowerCase()){
            count++;
        }
    }
    document.getElementById("output").innerHTML="Number of employees in "+dept+" department: "+count;   
}