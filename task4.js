var email = prompt("Enter your E-mail  Address");
var n = false;
if (email.indexOf("@") !== -1) {
    for (let m = 0; m < email.length; m++) {
        if (email.charAt(m) === (email.charAt(65-90) || email.charAt(97-122))) {
            if ((email.slice(indexof("@")+1,(email.length())-indexOf("@"))) === 
                (email.charAt(65-90 || email.charAt(97-122) ))) {
                n = true;
                break;
}   
        }
    }
    alert("Valid E-mail ID.");
}
else {
    n = false;
    alert("Invalid E-mail ID.");
}