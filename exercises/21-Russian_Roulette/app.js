
// firePosition will be the position in which the gun will fire.
var firePosition = 1;

// The output of spinChamber will be a number and it can be passed as a parameter to the fireGun function.
function spinChamber(min,max){
    let randomNumber = Math.random()*10;
    chamberPosition = Math.floor(Math.random(randomNumber)*(max-min)+min);
    return chamberPosition;
}
// Remove the // below and complete the commented lines
function fireGun(firePosition,chamberPosition){
    if (firePosition == chamberPosition)
    {
    return ("You're dead!");
    } 
    else
    {
    return ("Keep playing :)");
    }
}
console.log(fireGun(spinChamber(1,6)));