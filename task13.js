var CurrentDate = new  Date();
console.log("Current Date:"+CurrentDate);
var MilliSeconds = new Date().getTime();
console.log("Elapsed MilliSeconds sine Jan 1,1970 :"+MilliSeconds);
var Minutes = new Date().getMinutes();
var diff = MilliSeconds - Minutes;
var diffMin = diff/(1000*60*60);
console.log("Elapsed Minutes sine Jan 1,1970 :"+diffMin);

