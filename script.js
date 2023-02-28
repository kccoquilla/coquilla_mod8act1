var fname = prompt("Please enter your full name:");
var username = prompt("Please enter your username:");
if(confirm("What is your gender? \n Press OK if you are Male \n Cancel if your Female")==true){
    var gndr = "M";
    alert("Your profile gender is set to MALE");
}
else{
    var gndr = "F";
    alert("Your profile gender is set to FEMALE");
}

var desc = prompt("Please type a brief description of yourself:");
var year = prompt("Please enter your birth year:");
var age = 2023 - (year);

if(confirm("Do you want to use a custom profile picture?")){
    var ppic = prompt("Please enter the file name of the picture. (Ex: wow.jpg)");
    alert("Profile picture has been updated."); 
}
else{
    alert("No image has been set.");
}

document.getElementById("fname").innerHTML = fname;
document.getElementById("username").innerHTML = username;
document.getElementById("gender").innerHTML = gndr;
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = year;
document.getElementById("age").innerHTML = age;
document.getElementById("ppic").src = ppic;
