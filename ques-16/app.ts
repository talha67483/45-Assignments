let guestList = ["Faraz","Huzaifa","Haroon" ]
let invitedBy = "Talha Khan"
for(let i = 0;i<guestList.length;i++){
 console.log(`${guestList[i]} you have invited for dinner by ${invitedBy} tonight and also bring your family!ok`);
 
    
}
console.log("-------------------------------------------------------------------------------------------------------");



console.log(` I am really sorry ${guestList[2]} that you can't attened my dinner`);


guestList[2] = "Sardar"

guestList.forEach((val)=>{
    console.log(`${val} you are still invited by ${invitedBy}`);
    

})
console.log(("-------------------------------------------------------------------------------------------------------"));


guestList.unshift("Yasir")
guestList.splice(2,0,"Sheryar")
guestList.push("Asad")


guestList.forEach((val)=>{
    console.log(`${val} you are invited by the ${invitedBy} for the dinner `);
    
})

console.log(" I can make large table for dinner so more guest i required ");


console.log(("-------------------------------------------------------------------------------------------------------"));
console.log("you can only invite only two people for dinner");


for( let i = 0; i<=3;i++){
     let lis =guestList.pop()
    console.log(" I am sorry you cant invite to dinner",lis);
    
}
console.log(("-------------------------------------------------------------------------------------------------------"));

for(let i of guestList){
    console.log(`${i} you are still invited`);
    
}

console.log(("-------------------------------------------------------------------------------------------------------"));

guestList.pop()
guestList.pop()

console.log(guestList);
