/*eslint-env browser*/

//STEP 1
/*var day = new Date();
window.console.log(day.getDate());*/

//STEP 2
/*var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = new Date();
window.console.log(months[day.getMonth()]);*/
//STEP 3
/*var day = new Date();
window.console.log(day.getDay());*/
//STEP 4
/*var namesDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = new Date();
if (day.getDay() === 0) {
    window.console.log(namesDays[6]);
} else {
    window.console.log(namesDays[day.getDay() - 1]);
}*/

//STEP 5
var namesDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = new Date();
window.console.log(namesDays[day.getDay()].charAt(0));
