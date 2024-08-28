let guestList = ["Faraz","Huzaifa","Haroon" ]
let invitedBy = "Talha Khan"
for(let i = 0;i<guestList.length;i++){
 console.log(`${guestList[i]} you have invited for dinner by ${invitedBy} tonight and also bring your family!ok`);
 
    
}


console.log(` I am really sorry ${guestList[2]} that you can't attened my dinner`);


guestList[2] = "Sardar"

guestList.forEach((val)=>{
    console.log(`${val} you are still invited by ${invitedBy}`);
    

})