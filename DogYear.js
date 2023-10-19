//storing my age in a variable
var myAge = 20;
//creating a changable variable and assigning value 2
var earlyYears = 2;
earlyYears *= 10.5;
//creating a variable and storing it's value which will be the result of myAge-2
var laterYears = myAge-2;
//to get 'dog years' we have to use this equation laterYears *= 4
laterYears *= 4;
console.log(earlyYears, laterYears);
//storing the results of earlyYears + laterYears into a new variable
var myAgeInDogYears = earlyYears+laterYears;
//storing my name into a variable after changing it's case
var myName = 'Indrasish'.toLowerCase();
//now printing the results
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);