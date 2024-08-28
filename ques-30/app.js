var userNames = ["Jira", "Eric", "Michael", "Donaldson", "David Hansan", "Admin"];
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] === "Admin") {
        console.log("Hello ".concat(userNames[i], ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(userNames[i], ", thank you for logging in again."));
    }
}
