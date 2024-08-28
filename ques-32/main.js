"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Adam Levin", "Robert Downy", "Tony stark", "Oppenhimer"];
let new_users = ["Jira", "Adam Levin", "Michael", "Oppenhimer", "Eric"];
// for(let i = 0;i<new_users.length;i++){
//     // console.log(new_users[i]);
//     if(new_users[i] ===  ("Adam Levin") || new_users[i] ===("Oppenhimer")){
//         console.log("the user name is already available please try somehing new");
//     }
//     else{
//         console.log(new_users[i]);
//     }
// }
let case_sensitive = current_users.map((val) => {
    return val.toLowerCase();
});
for (let i = 0; i < new_users.length; i++) {
    let caseSensitive = new_users[i].toLocaleLowerCase();
    if (case_sensitive.includes(caseSensitive)) {
        console.log(`the user name ${new_users[i]} is already taken please try somehing new`);
    }
    else {
        console.log("the username is available ");
    }
}
