var number = 2.5349;
if (number > 0) {
    console.log(number);
    var roundOf = Math.round(number);
    console.log("Round of Value:"+roundOf);
    var num1 = Math.floor(number);
    console.log("Floor Value:"+num1);
    var num2 = Math.ceil(number);
    console.log("Ceil Value:"+num2);
} 
else {
    alert("Enter the positve number");
}