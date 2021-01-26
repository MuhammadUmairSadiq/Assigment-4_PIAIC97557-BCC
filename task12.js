var DayofMonth = parseInt(prompt("Enter Your Day Number"));

if (DayofMonth <=  15) {
    alert("First 15th Day of a Month");
} 
else if (DayofMonth <=  31) {
    alert("Last 15th Day of a Month");
}
else {
    alert("Invalid Day Number.Day Number Should be lesser than 31");
}