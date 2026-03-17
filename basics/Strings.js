const name = new String("hitesh")
// const repoCount = 50 

// console.log(name + repoCount + " Value"); //hitesh50 value

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //the variable is 
// defined using `${}`

const gameName = new String('hitesh hc-com') //string declaration using object
console.log(typeof gameName); //object 

// console.log(gameName.blink);


// console.log(gameName[0]); //h
// console.log(gameName.__proto__); //{}

// console.log(gameName.substring(2,8)); // tesh h //gets string  content from starting value to ens as per input argument

// console.log(gameName.length); //13
// console.log(gameName.toUpperCase()); //HITESH-HC-COM
// console.log(gameName.charAt(2)); //t
// console.log(gameName.repeat(4)); //repeat string 4 times
// console.log(gameName.toUpperCase(gameName));

// const newString = gameName.substring(0, 4) //does not include 4th string value
// console.log(newString); //hite
 
//slice(start,end)  negative number indicate the reading  from reverse order
// const anotherString = gameName.slice(6, -4) //slice is used to get subset of string from main string
// console.log(anotherString); //-hc    hitesh-hc-com 0-1-2-3-4-5-6-7-8-9-10-11-12-13
// (6,-4) here the value from arr[6] to the length-4 is printed

// const newStringOne = "   hitesh    "
// console.log(newStringOne);  //   hitesh  //the spaces also count
// console.log(newStringOne.trim()); // does not count the unnecessary spacing

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //false

 let n = console.log(gameName.split('-')); 
 console.log(typeof n);
 