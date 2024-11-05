//alert('hello world'); 
/*console.log(10);
let age = 17;
console.log(age);

/*Javascript data types 
Number : 1,2,3,etc
String: "text in singel or double quotes ("" '')"
Boolean : true / false (this is used to evalueate conditions
Null: Explicitly set a variable with no value 
Undefined: Values that have not yet been defined, and sometimes the browser automatically defines them 
Object: Complex data structures -Arrays, Dates, Literals etc
Symbols: Used with Objects*/  

//strings examples
/*console.log('Hello world');
let email = 'rz@isking';

//String concatenation (basically joining strings together)
let firstname = 'Ramish';
let lastname = 'Zaheri';
let fullname = firstname + ' ' + lastname;
console.log(fullname);

//getting characters/word/number (remember that the machine starts at 0 not 1, so the first character is 0)
console.log(fullname[0]);
//getting the length of a string
console.log(fullname.length);

// string methods/functions
console.log(fullname.toUpperCase());
let result =(fullname.toLowerCase());
console.log(result); *///

// "lastIndexOf" method/function (this function is used to find the a character close to the end as possible)
/*let email = 'ramish2007@icloud.com';
/*let result = email.lastIndexOf('i');*/

// "slice" method/function (this function is used to slice and put together parts of a word)
/*let result = email.slice(2,5);*/

// "substr" method/function (kinda like slice but the end number is from the start of the fisrt character)
/*let result = email.substring(4,10);*/

// "replace" method/function (this is used to replace a character with another, and if there are multiple of that character it will only replace the first it comes to)
/*let result = email.replace('r', 'v')*/

// Math operators +, -, *, /, **, %
/*let result = 10 + 5;
let result = 10 - 5;
let result = 10 * 5;
let result = 10 / 5;
let result = 10 ** 5;
let result = 10 % 5; */

// This is how you add a number into a string with it's variable.
/*let likes = 10;
/*likes = likes + 5;

// here's a method where you don't need to write the variable twice.
likes += 5;
likes -= 5;
likes *= 5;
likes /= 5;
likes **= 5;
likes %= 5;*/

// When you try to do math with a word the console will say "NaN" (Not a Number)

// template strings
/*const title = 'best reads of 2019'
const author = 'RZ'
const likes = 30;
// so now if we want to get these variables to be in a string, theres 2 different ways to do so, 1- "Concatenation" 2- "Templeta string way"

// concatenation way
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes '; // To add space simply do it inside the string. 

/* template string way (here we use backticks (``)  Not quotes(''))
let result = `The blog called ${title} by ${author} has ${likes} likes`;*/

// Arrays [] when you see squarebrakets [] it's a sign that it's an array.
/*an array is a special type of object used to store multiple values in a single variable.
Arrays allow you to group related data together and easily access or manipulate them.*/
/*let ninjas = ['shin', 'qio', 'RZ'];*/

/*loose vs strict comparisons*/
let age = 25;
console.log(age == 25);
console.log(age == '25');
/* loose comparison will return true because it's looking for the value of the variable, not the type, it converts the string into a number and then says it's the same as the other number.
(!=) that sign mean not equal,.*/
console.log(age != 25);
console.log(age != '25');
/*strict comparison will return false because it's looking for the value AND the type of the variable,*/
// strict comparison (different types cannot be equal) we use 3 equal (=) signs.*/

/*console.log(age === 25); /*true*/
/*console.log(age === '25'); /*false because in strict comparison different types cannot be equal.*/
/*console.log(age !== 25); /* this prints false because it is equal to 25*/
/*console.log(age !== '25'); /* were saying age is not equal to the string '25' and in strict comparison that's true.*/

/*Type conversion, if you want to add another value to another type, for example you've written a number but in string type, and you want to add to that number, then you need to first convert that string into a number.
this is how you convert it*/
let score = '100';
/*score = Number(score)/* so you use (Number) with capital N to convert a string into a number*/
/*console.log(score + 1); /* then you add on*/

/*console.log(typeof score); /* this is how you check the type off a variable*/
/* you cannot turn a string with letters to a number, not even in loose comparison*/
/* But you can turn a number into a string*/
let result = String(50);
console.log(result, typeof result);

