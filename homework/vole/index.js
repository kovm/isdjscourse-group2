alert("Do you need nickname for GitHub? This program will help to create one");

let firstName, secondName, nickName;

function createNickname () {
    firstName = prompt("What is your first name?");
    secondName = prompt("What is your second name?");
    nickName= (firstName.slice(0,2) + secondName.slice(0,2));
}
createNickname();

alert("Your nickname is: " +  nickName.toLowerCase());