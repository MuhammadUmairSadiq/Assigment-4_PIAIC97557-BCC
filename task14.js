var CurrentDate = new Date();
var hrs = CurrentDate.getHours();
console.log("Current Date:"+CurrentDate);
CurrentDate = new Date();
var Hours = CurrentDate.setHours(hrs-1) ;
console.log("Time One Hour Ago:"+CurrentDate);