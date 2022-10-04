/*Exercise closely resembles 11 - consider introducing another concept here? */
function getRandomInt(min,max)
{
let randomNumber = Math.random()*10;
return Math.floor(Math.random(randomNumber)*(max-min)+min);
}
console.log(getRandomInt(1,10));