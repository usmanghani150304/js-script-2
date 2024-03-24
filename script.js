// input btn for clear statement 
document.getElementById("clearStatement").onclick = function(){
    document.getElementById("statement").innerHTML = " "
}

// clear output box 
document.getElementById("clearOutput").onclick = function(){
    document.getElementById("output").innerHTML = " "
}
// Consatenate Strings

    document.getElementById("Consatenate").onclick= function(){
    let message = "Any Type of Text in this String"
    let userName = "Usman Ghani"
    let banger = "!"
    let sum = (message + " " + userName + banger)
    document.getElementById("statement").innerHTML = '<p>"Any Type of Text in this String" + " " + "Usman Ghani" + "!"</p>'
    document.getElementById("output").innerHTML = sum;
}

// Ask for User name 

document.getElementById("Ask Name From User").onclick = function(){
    let firstName = prompt("please enter your first name")
    let lastName = prompt("please enter your last name")
    let fullName = `${firstName} ${lastName}`
    document.getElementById("statement").innerHTML = `first name = ${firstName} <br> last name = ${lastName} <br> full name = first name + last name`
    document.getElementById("output").innerHTML = `full name = ${fullName}`
}

// Comparison operator

document.getElementById("Comparison Operators").onclick = function(){
    let firstnumber = prompt("please enter First Value")
    let secondnumber = prompt("please enter Second value")
   if(firstnumber==secondnumber)
   {
    document.getElementById("statement").innerHTML = "firstnumber == secondnumber"
    document.getElementById("output").innerHTML = "<span class='text-success'>Condition is true &#128522;<span/>"
   }
   else{
    document.getElementById("statement").innerHTML ="firstnumber !== secondnumber"
        document.getElementById("output").innerHTML = "<span class='text-danger'>Condition is False &#128554;<span/>"
   }
}
// If esle if
document.getElementById("If else if").onclick = function(){
document.getElementById("statement").innerHTML = " ";
document.getElementById("statement").innerHTML = "If marks >= 90 Congratulations! you got A+ Grade<br> else if  marks >= 80 Congratulations! you got A Grade<br> esle if marks >= 70 Congratulations! you got B Grade<br> else marks <= 70 You Are Fail<br> "
let marks = +prompt("please enter your marks")
if (marks >= 90){
   
    document.getElementById("output").innerHTML = "<span class='text-success'>Congratulations! you got A+ Grade</span> "
}
else if (marks >=80){
    document.getElementById("output").innerHTML = "<span class='text-success'>Congratulations! you got A Grade</span>"
}
else if (marks >=70){
    document.getElementById("output").innerHTML = "<span class='text-warning'>you got B Grade</span>"
}
else {
    document.getElementById("output").innerHTML = "<span class='text-danger'>You Are Fail. &#128554;</span>"
}
}
// sets of conditions 
document.getElementById("Testing Sets of Conditions").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    document.getElementById("statement").innerHTML = "If age <= 10 && weight <= 25  you are a baby <br> esle if age <= 18 && weight <= 50 you are teenager and healthy <br> esle if age <= 25 && weight <= 60 you are a youngman and fatty <br> esle if age <= 30 && weight <= 59 you are a youngman and healthy <br> esle you are a Senior Citizen and fatty"
    let age = prompt("please enter your age")
    let weight = prompt("please enter your weight")
    if (age <= 10 && weight <= 25) {
        document.getElementById("output").innerHTML = "you are a baby"
    }
    else if (age <= 18 && weight <= 50) {
        document.getElementById("output").innerHTML = "you are teenager and healthy"
    }
    else if (age <= 25 && weight <= 60) {
        document.getElementById("output").innerHTML = "you are a youngman and fatty"
    }
    else if (age <= 30 && weight <= 59) {
        document.getElementById("output").innerHTML = "you are a youngman and healthy"
    }
    else {
        document.getElementById("output").innerHTML = "you are a Senior Citizen and fatty"
    }

}

// if statement nested 
document.getElementById("If statement Nested").onclick = function(){
    document.getElementById("statement").innerHTML = " ";
    let userName = prompt("please enter username")
    if(userName === "admin"){
        let password = prompt("please enter password")
        if(password == 123){
            document.getElementById("output").innerHTML = "<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>"
        }
        else{
            document.getElementById("output").innerHTML = `<span class='text-danger'>${password}</span> is incorrect password. <br> correct password is <span class='text-success'>123</span>`
        }
    }
    else{
        document.getElementById("output").innerHTML = `<span class='text-danger'>${userName} </span> is incorrect user name. <br> correct user name is <span class='text-success'> "admin"</span>`
    }
}
// login 
document.getElementById("Login").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    let userName = prompt("please enter username")
    let passWord = +prompt("please enter password")
    if (userName === "admin" && passWord === 123 ){
        document.getElementById("output").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
        document.getElementById("output").innerHTML = `<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>`
    }
    else {
        document.getElementById("output").innerHTML = "Try using username = admin <br> password = 123"
    }

}