/*eslint-env browser*/

//STEP 1
/*var username = window.prompt("Please enter your name");
window.alert("The lenght is: " + username.length);*/
//STEP 2
/*var username = window.prompt("Please enter your name");
var uservalue = window.prompt("Please enter a number");
window.alert(username.charAt(uservalue));*/
//STEP 3
/*var firstname = window.prompt("Please enter your first name");
var lastname = window.prompt("Please enter your last name");
window.alert("Your name is: " + firstname.concat(lastname));*/
//STEP 4
/*var text = "The quick brown fox jumps over the lazy dog";
window.alert("The index is: " + text.indexOf("fox"));*/
//STEP 5
/*var text = "The quick brown fox jumps over the lazy fox";
window.alert("The index is: " + text.lastIndexOf("fox"));*/
//STEP 6
/*var text = "The quick brown fox jumps over the lazy dog";
var username = window.prompt("Please enter your full name");
window.alert(text.replace("the lazy dog", username));*/
//STEP 7
/*var text = "The quick brown fox jumps over the lazy dog";
var userword = window.prompt("Please enter a word");
window.alert(text.search(userword));*/
//STEP 8
/*var oldString = "The quick brown fox jumps over the lazy dog";
var i = oldString.lastIndexOf("the");
var j = oldString.length;
var newString = oldString.slice(i, j);
window.alert(newString.toUpperCase());*/
//STEP 9
/*var text = "   THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG   ";
window.alert(text.trim().toLowerCase());*/
//STEP 10
var text = "the quick brown fox jumps over the lazy dog";
var firstletter = text.charAt(0);
window.alert(firstletter.toUpperCase().concat(text.slice(1,text.length)));


