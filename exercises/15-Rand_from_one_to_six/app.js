function generateRandomInt(min, max)
{
let randomNumber = Math.random()*10;
return Math.floor(Math.random(randomNumber)*(max-min)+min);
}
console.log(generateRandomInt(1,6));