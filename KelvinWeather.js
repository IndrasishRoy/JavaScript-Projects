//creating a constant variable kelvin and assigning its value
const kelvin = 293;
//creating another variable celsius and assigning it's value which is kelvin - 273 = result(value)
var celsius = kelvin-273;
//creating another variable fahrenheit and assigning it's result as value using the equation Fahrenheit = Celsius * (9/5) + 32
var fahrenheit = Math.floor(celsius*(9/5)+32);//to get the value in integer using Math.floor()
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);