function getColor(colorNumber=0)
{
colorNumber = parseInt(colorNumber);
switch(colorNumber){
case 1: return "red"; break;
case 2: return "yellow"; break;
case 3: return "blue"; break;
case 4: return "green"; break;
default: return "black"; break;
}
}
function getAllStudentColors(){
function generateRandomInt(min, max)
{
let randomNumber = Math.random()*10;
return Math.floor(Math.random(randomNumber)*(max-min)+min);
}
return getColor(generateRandomInt(1,4));
}
for(var i = 0; i < 10; i++)
{
console.log(getAllStudentColors());
}