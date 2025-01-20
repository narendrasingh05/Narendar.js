let identityCard = 123456789;{
    fullName = "Narendar Singh";
    fatherName = "Gokul Singh";
    age = 19;
    villege = "Lakhahi Putali Tara";
    district = "Bahraich";
    state = "Uttar Pradesh";
    pincode = 271871;
    console.table([identityCard, fullName, fatherName, age, villege, district, state, pincode]);
}
//you can print this code like this:
//console.table("My name is " + fullName + ". My father's name is " + fatherName + ". I am " + age + " years old. I live in " + villege + ", " + district + ", " + state + ". My pincode is " + pincode + ".");

let score = 100;{
    prompt("Enter your score: 0-100"); //it will prompt the user to enter the score
    if (score >= 100) {
        console.log("You have got A+ grade."); //if score is greater than or equal to 100 then it will print "You have got A+ grade."
    } else if (score >= 90) {
        console.log("You have got A grade."); //if score is greater than or equal to 90 then it will print "You have got A grade."
    } else if (score >= 80) {
        console.log("You have got B grade."); //if score is greater than or equal to 80 then it will print "You have got B grade."
    } else if (score >= 70) {
        console.log("You have got C grade."); //if score is greater than or equal to 70 then it will print "You have got C grade."
    } else if (score >= 60) {
        console.log("You have got D grade."); //if score is greater than or equal to 60 then it will print "You have got D grade."
    } else if (score >= 50) {
        console.log("You have got E grade."); //if score is greater than or equal to 50 then it will print "You have got E grade."
    } else {
        console.log("You have got F grade."); //if score is less than 50 then it will print "You have got F grade."
    }
}
