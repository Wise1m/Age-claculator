// // defining a function to display error message
// function printErrormsg(elemId, hintMsg) {
//     document.getElementById(elemId).innerHTML = hintMsg;
// }

// // defining a function to validate the form
// function validateForm() {
//     // Retrieving the values of form elements

//     var day = document.f1.Day.value;
//     var month = document.f1.Month.value;
//     var year = document.f1.Year.value;
// }

// // Defining error variables with a default value
// var dayError = monthError = yearError = true;

// // To validate day
// if(Day == "" ) {
//     printErrormsg("dayError", "This field is required!");
// }
// else {
//     var regex = /^[1-9]\d{9}$/;
//     if(regex.test(Day) === false) {
//         printErrormsg("dayError", "Please enter a valid date");
//     }
//     else {
//         printErrormsg("dayError", "");
//         dayError = false;
//     }
// }

// // to validate month
// if(Month == "") {
//     printErrormsg("monthError", "This field is required!");
// }
// else {
//     var regex = /^[1-9]\d{9}$/;
//     if(regex.test(Month) === false) {
//         printErrormsg("monthError", "Please enter a valid month");
//     }
//     else {
//         printErrormsg("monthError", "");
//         monthError = false;
//     }
// }

// // To validate year
// if(Year == "") {
//     printErrormsg("yearError", "This field is required!");
// }
// else {
//     var regex = /^[1-9]\d{9}$/;
//     if(regex.test(Year) === false) {
//         printErrormsg("yearError", "Please enter a valid year");
//     }
//     else {
//         printErrormsg("yearError", "");
//         yearError = false;
//     }
// }

// // Prevent the form from being submitted if there are any error
// // if((dayError || monthError || yearError) == true) {
// //     return false;
// // }

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function age() {
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    var date = new Date();
    var currentDay = date.getDate();
    var currentMonth = 1 + date.getMonth();
    var currentYear = date.getFullYear();
    var months = [31, isLeapYear(currentYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day > currentDay) {
        currentDay = currentDay + months[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }
    if (month > currentMonth){
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }

    var d = currentDay - day;
    var m = currentMonth - month;
    var y = currentYear - year;

    // day
    if (day == ""){
        document.getElementById('dayError').innerHTML = "This field can't be empty";
        document.getElementById('day').style.color = "red";
        document.getElementById('daylabel').style.color = "red";
    }
    else if (day < 1 || day > months[month - 1]){
        document.getElementById('dayError').innerHTML = "Invalid";
        document.getElementById('day').style.color = "red";
        document.getElementById('daylabel').style.color = "red";
    }
    else {
        document.getElementById('daysOld').innerHTML = d;
        document.getElementById('dayError').innerHTML = "";
    }

    // month
    if(month == ""){
        document.getElementById('monthError').innerHTML = "This field can't be empty";
        document.getElementById('month').style.color = "red";
        document.getElementById('monthlabel').style.color = "red";
    }
    else if (month < 1 || month > 12){
        document.getElementById('monthError').innerHTML = "Invalid";
        document.getElementById('month').style.color = "red";
        document.getElementById('monthlabel').style.color = "red";
    }
    else if(month === 2 && day === 29 && !isLeapYear(year)){
        document.getElementById('monthError').innerHTML = "Invalid";
        document.getElementById('month').style.color = "red";
        document.getElementById('monthlabel').style.color = "red";
    }
    else {
        document.getElementById('monthsOld').innerHTML = m;
        document.getElementById('monthError').innerHTML = "";
    }

    // Year
    if(year == ""){
        document.getElementById('yearError').innerHTML = "This field can't be empty";
        document.getElementById('year').style.color = "red";
        document.getElementById('yearlabel').style.color = "red";
    }
    else if (year < 1 || year > currentYear){
        document.getElementById('yearError').innerHTML = "Invalid";
        document.getElementById('year').style.color = "red";
        document.getElementById('yearlabel').style.color = "red";
    }
    else {
        document.getElementById('yearsOld').innerHTML = y;
        document.getElementById('yearError').innerHTML = "";
    }

// Prevent the form from being submitted if there are any error
    if((dayError || monthError || yearError) == "Invalid") {
        document.getElementById('daysOld').innerHTML = "";
        document.getElementById('monthsOld').innerHTML = "";
        document.getElementById('yearsOld').innerHTML = "";
    }

}