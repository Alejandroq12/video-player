var database = [
    {
        username: "julio",
        password: "secret",
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "Learning JavaScript",
    },
    {
        username: "Sally",
        timeline: "JavaScript is so cool!",
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's you password?");

function signIn(username, password) {
    if (username === database[0].username &&
        password === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password!");
        }
}

signIn(userNamePrompt, passwordPrompt);