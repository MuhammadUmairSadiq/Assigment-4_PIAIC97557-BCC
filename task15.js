var age = parseInt(prompt("Enter your Age"));
console.log("Your Age:"+age);
var date = new Date;
var year = date.getFullYear()-age;
console.log("Your Birth Year is:"+year);