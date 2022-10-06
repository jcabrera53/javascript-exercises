let person = {
  name: "John",                //String
  lastname: "Doe",
  age: 35,                     //Number
  gender: "male",
  lucky_numbers: [ 7, 11, 13, 17], //Array
/*    significant_other: person2   //Object, yes the same variable/object defined after*/
};
let person2 = {
  name: "Jane",
  lastname: "Doe",
  age: 38,
  gender: "female",
  lucky_numbers: [ 2, 4, 6, 8],
/*    significant_other: person*/
};
let family = {
  lastname: "Doe",
  members: [person, person2]   //Array of objects, don't forget to add Jimmy
};
function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  let p1=0;
  let p2=0;
  let p3=0;
  for(let i=0;i<4;i++)
  {
    p1=person.lucky_numbers[i]+p1;
    p2=person2.lucky_numbers[i]+p2;
    p3=person3.lucky_numbers[i]+p3;
  }
  sumOfAllLuckyNumbers=p1+p2+p3;
  return sumOfAllLuckyNumbers;
}
//Enter all your code here:
person.lucky_numbers[3]=33;
let person3 = {
  name:"Jimmy",
  lastname:"Doe", age:13,
  gender:"male",
  lucky_numbers:[1,2,3,4],
/*    significant_other:null*/
};
family.members.push = (person3);
//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 