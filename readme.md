## Js Summary
### introduction
- what is heck is JavaScript
    - A Web-based programming language:
        - add interactive behavior to webpages
        - build web and mobile applications
        - create command line tools
        - develop games
- Java is not equal to JavaScript
- knowing Html & Css is helpful , but not necessary until much later DOM (document object model)
```
console.log("Hello world");
console.log("it's really good!")
window.alert("i really love pizza");
// this one line comment
/*
this multiple line comment
*/
```
### variables
- A variable is a container for storing data
- a variable behaves as if it was the value that it contains
- Two steps :
    1. Declaration  (let , const , var)
    2. Assignment ( = Assignment Operator)
```
let firstName = "John";
let age = 30;
let student = true;
age=age+1;
console.log("Hello",firstname)
console.log("You are",age,"years old");
console.log("Enrolled",student);
document.getElementById('p1').innerHTML="Hello "+firstname;
document.getElementById('p2').innerHTML="You are"+age +"years old";
document.getElementById('p3').innerHTML="Enrolled: "+student;
```
### Arithmetics operations 
 * Arithmetic expression is a combination of ...
 * operands (values , variables,ets.)
 * operators (+ - * / %)
 * ex y=x+5
 * operator precedence 
    * parenthesis()
    * exponents
    * multiplication & division
    * addition & subtraction
```
let student=20;
student= student +1 ;
let result=1+2 * (3+4); 
console.log(student)
console.log(result);
```
### User input 
* how yo accept user input
  * Easy way with a window prompt

  ```
    let username=window.prompt("What's Your Name?");
  ```
  * Difficult way with html text
  
```
  document.getElementById("sumbit_user_name").onclick=    function(){
     username=document.getElementById("username").value;
     document.getElementById("label").innerHTML=username;
     console.log("Your name is",username);
}
``` 

### Type conversion
- Converting one type of data to another type
- String to Number
- Number to String
```
 let age=window.prompt("How old are you? ");
 console.log(typeof(age));// string
 age= Number(age);
 console.log(typeof(age));// number
 age += 1;
 console.log("Happy birthday you are",age,"years old");
```
- Ex-2:
```
let x ; 
let y ;
let z ;
x = Number("3.14");
y = String(3.14);
console.log(x,typeof x);//number
console.log(y,typeof y);//string 
console.log(z,typeof z);// undefined
```
### Const 
- Const is a variable that can't be changed give security to our code 
```
const PI=3.14159;
PI=343;// give error can't reassign const 
console.log(PI);
```
### Js Math
- Math is a built in object that contains properties and methods for mathematical constants and functions
```
let x = 3.14;
let y = 5;
let z = 9;
let max;
let min;
n1 =Math.round(x);
console.log(n1);// n1 = 3
n2=Math.floor(x); // n2 = 3 floor الأرضية  
console.log(n2); // n
n3=Math.ceil(x); //n3 =4  round up 
console.log(n3);
n4=Math.pow(x,2);
console.log(n4);
n5=Math.sqrt(n3);
console.log(n5);
n6=Math.abs(-1*x); // only positive numbers 
console.log(n6);
max= Math.max(x,y,z);
min= Math.min(x,y,z);
console.log(min);
console.log(max);
x=Math.PI; // constant in Math 
console.log(x)
```
### Ex-1 Triangle side C
- Js Code 
```
let a; 
let b;
let c;
//take input from window prompt
/*a= window.prompt("Enter Side A ")
a=Number(a);
b= window.prompt("Enter Side b ")
b=Number(b);
c= Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log(c);*/
//take input from html
document.getElementById("submit").onclick= function(){
    a= document.getElementById("aside").value;
    a=Number(a);
    b= document.getElementById("bside").value;
    b=Number(b);
    c= Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("p3").innerHTML="Side C: "+c;
}
```
- Html Code 
```
<input type="text" id="aside" placeholder="Enter Side A">
<input type="text" id="bside" placeholder="Enter Side B">
<button id="submit">Submit</button>
<p id="p3"></p>
```
### Ex-2 Counter programmer
- Js Code
```
 let count = 0;
 document.getElementById('increase').onclick = function(){
     count=count+1;
     document.getElementById('countable').innerHTML=count;
 }
 document.getElementById('decrease').onclick = function(){
     if(count>0){
         count=count-1;
         document.getElementById('countable').innerHTML=count;
     }
 }
 document.getElementById('reset').onclick = function(){
     count=0;
     document.getElementById('countable').innerHTML=count;
 }
```
- Html Code
```
<button id="increase">Increase</button>
<button id="decrease">Decrease</button>
<button id="reset">Reset</button>
<p id="countable">0</p>
```
###  ex- 3 rolling dice guessing game
- Js Code
```
  let x,y,z;
  document.getElementById("rollbutton").onclick= function(){
  x = Math.floor((Math.random()*6))+1  ;// random number between 1 and 6
  y = Math.floor((Math.random()*6))+1  ;// random number between 1 and 6
  z = Math.floor((Math.random()*6))+1  ;// random number between 1 and 6
  document.getElementById("xlabel").innerHTML=x;
  document.getElementById("ylabel").innerHTML=y;
  document.getElementById("zlabel").innerHTML=z;
  }
```
- Html Code
```
    <label for="" id="xlabel"></label>
    <br>
    <label for="" id="ylabel"></label>
    <br>
    <label for="" id="zlabel"></label>
    <br>
    <button type="button" id="rollbutton">Roll</button>
```
### useful string properties & methods 
```
 let username="    Adhamaaa   ";
 let phonenumber="123-456-7890"
 console.log(username.length)
 console.log(username.charAt(0));
 console.log(username.indexOf("a"));
 console.log(username.lastIndexOf('a'));
 username=username.trim()
 username=username.toLowerCase();
 username=username.toUpperCase();
 phonenumber=phonenumber.replaceAll("-",'/')
 console.log(phonenumber);
 console.log(username)
```
- slice() extracts a section of a string and return it as a new string without modifying the original string not be realistic to do that with hand automatically
```
 let fullname="adham elganzoury";
 let firstname;
 let lastname;
 lastname=fullname.slice(6)
 console.log(lastname)
 firstname=fullname.slice(0,5)
 console.log(firstname)
 lastname=fullname.slice(fullname.indexOf(" ")+1);
 console.log(lastname)
 firstname=fullname.slice(0,fullname.indexOf(" "))
 console.log(firstname)
```
### method chaining
- calling one method after another in one continuous line of code
```
 let  username= "adham"
 let letter=username.charAt(0).toUpperCase().trim();
 console.log(letter);
```
### if statement control flow
- if statement = a basic form of decision making
  - if a condition is true then do something
  - if a condition is false then do         something else
```
 let age  = 21
 if(age>=18){
     console.log("you are an adult")
 }
 else if(age<0){
     console.log("you are not born yet") 
 }
 else{
     console.log("you are not an adult")
 }
 let online=true;
 if(online){
     console.log("you are online")
 }
 else { 
     console.log("you are offline")
 }
```
### checked property
- html code
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <label for="mycheckbox">Subscribe</label>
    <input type="checkbox" id="mycheckbox"><br>
    <label for="visabtn">Visa</label>
    <input type="radio" name="card" id="visabtn">
    <label for="mastercard">Mastercard</label>
    <input type="radio" name="card" id="mastercard">
    <label for="paypal">Paypal</label>
    <input type="radio" name="card" id="paypal"><br>
    <button id="mybutton">submit</button>
    <script src="main.js"></script>
</body>
</html>
``` 
- js code
```
document.getElementById('mybutton').onclick=function(){
    const mycheckbox=document.getElementById('mycheckbox').checked
    const visabtn=document.getElementById('visabtn').checked
    const mastercard=document.getElementById('mastercard').checked
    const paypal=document.getElementById('paypal').checked
    if(mycheckbox){
        console.log("you are subscribed")
    }
    else{
        console.log("you are not subscribed")
    }
    if(visabtn){
        console.log("you are using visa")
    }

    else if(mastercard){
        console.log("you are using mastercard")
    }

    else if(paypal){
        console.log("you are using paypal")
    }
    else{
        console.log("You must select a payment method")
    }

}
```
### Switch statement
- statement that examines a value or a match against many case clauses.
-more efficient that many "else if" statements
```
let grade="Ab";
switch(grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Below Average");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log(grade,"Invalid Grade");
        break;
}
```
### Or & And & not 
- give us the ability to check more than 1 condition concurrently 
- && = and (both conditions must be true)
- || = or (at least one condition must be true)
- ! = not (reverse the result)
```
let a = true;
let b = false 
console.log(a||b)// true 
console.log(a&&b) // false
console.log(!a) // false
```
### while loop
 - while loop = repeat some code while some condition is true potentially infinite
 ```
let username= "";
while(username=="" || username==null){
    username=window.prompt("Enter your name");
}
console.log(username);
 ``` 
### Do while loop 
- do something then check the condition repeat if condition is true execute at least once 
```
let username="";
do{
    username=window.prompt("Enter your name");
}
while(username=="" || username==null)
console.log(username);
```
### for loop
- repeat some code a certain amount of times 
```
for(let i=0;i<10;i++){
    console.log(i);
}
```
### break & continue
- break = stop the loop 
- continue = skip the current iteration of the loop
```
for(let i=0;i<10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}
for(let i=0;i<10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
```
### nested loop
- html 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <label id="myrectangle"></label>
    <script src="main.js"></script>
</body>
</html>
```
- js code 
```
let symbol= window.prompt("Enter symbol");
let rows = window.prompt("Enter number of rows");
let cols= window.prompt("Enter number of columns");
for(let i=1;i<=rows;i++){
    for(let j=1;j<=cols;j++){
        document.getElementById("myrectangle").innerHTML += symbol;
    }
    document.getElementById("myrectangle").innerHTML += "<br>";
}
```
### functions 
- Define code once , and use it many times.
- to perform some code, call the function
```
function myfunction(){
    console.log("Hello");
}
myfunction();
```
### return statement
- used to return a value from a function
```
function myfunction(){
    return "Hello";
}
let result = myfunction();
console.log(result);
```
### ternary operator
- Shortcut for an 'if/else statement'
    - Takes 3 operands 
        - condition
        - value if true
        - value if false
- condition? expertrue:experfalse
```
let a = 5;
let b = 10;
let c = a > b ? "a is greater than b" : "b is greater than a";
console.log(c);
```
### variable scope 
- where a variable is accessible 
- let = variable are limited to block scope {}
- var = variable are global scope(){} `javascript hoisting`
- global variable = is declared outside any function
    - if global,var will change browser window properties
```
for (var i =0;i<=3;i++){
    console.log(i);
}
console.log(i);// if we use let instead of var we will get an error
```
### Template Literals
- delimited with (`) instead of double or single quotes allows embedded variables and expressions ${ }
```
let username= "bro";
let items =3;
let total =75;
// console.log("hello " + username + " you have " + items + " items and your total is " + total);
console.log(`Hello ${username} you have ${items} items and your total is ${total}`);
```
### format currency
- toLocaleString () = returns a string with a language representations of this number
- number.toLocaleString(locale,{options})
- 'locale'= specify that language (undefined = default )
-  'options'=object with formatting options
```
let mynum= 123456.798;
// mynum=mynum.toLocaleString("en-US");
// mynum=mynum.toLocaleString("hi-IN");
// mynum=mynum.toLocaleString("en-US", {style:"currency", currency:"USD"});
let mynum2=0.5;
mynum2=mynum2.toLocaleString(undefined,{style:"percent"});
let mynum3=55;
mynum3=mynum3.toLocaleString(undefined,{style:"unit", unit:"celsius"});
console.log(mynum3);
```
### simple guessing game

- Html 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Number Guessing Game</h1>
    <p>Pick a # between 1 - 10</p>
    <label for="">Enter a guess</label>
    <input type="text" id="guess">
    <input type="submit" id="submit_btn">
    <script src="main.js"></script>
</body>
</html>
```
- Js Code
```
const answer= Math.floor(Math.random() * 10 + 1);
let guesses=0;
document.getElementById('submit_btn').onclick = function(){
    let guess = document.getElementById('guess').value;
    guesses++;
    if(guess==answer){
        alert(`${answer} is the #. it took you ${guesses} guesses`);
    }else if(guess>answer){
        alert("Too high");
    }
    else{
        alert("Too low");
    }
    }
```
### convert temperature
- html code
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <label >Enter a temperature</label>
    <input type="text" id="temp_box">
    <br>
    <label >Convert TO:</label><br>
    <input type="radio" id="cbutton" name="unit">
    <label >Celsius</label>
    <input type="radio" id="fbutton" name="unit">
    <label >Fahrenheit</label>
    <br>
    <button type="submit" id="submit_btn">Convert</button>
    <p id="result"></p>
    <script src="main.js"></script>
</body>
</html>
```
- JS code
```
function converttof(temp){
    return (temp*9/5)+32
}
function converttoc(temp){
    return (temp-32)*(5/9)
}
document.getElementById('submit_btn').onclick = function(){
    let input_temp=document.getElementById('temp_box').value;
    input_temp=Number(input_temp);
    if(document.getElementById('cbutton').checked)
    {
        document.getElementById('result').innerHTML=converttoc(input_temp) +"C";
    }
    else if(document.getElementById('fbutton').checked){
        document.getElementById('result').innerHTML=converttof(input_temp) +"F";
    }
    else {
        document.getElementById('result').innerHTML="Please select a unit";
    }
}
```
### arrays 
```
// array  = think of it as a variable that can store multiple values
let fruits = ["apple","banana","mango"];
console.log(fruits)
console.log(fruits[0])// access single element
fruits[1] = "orange"
console.log(fruits)//update value
fruits.push("lemon");//add element at end
console.log(fruits)
fruits.pop();//remove element
console.log(fruits)
fruits.unshift("kiwi");//add element at the beginning
console.log(fruits)
fruits.shift();//remove element from beginning
console.log(fruits)
let length=fruits.length;
let index=fruits.indexOf("mango");// return index but -1 if not found 
console.log(index)
console.log(length)
```
### Iterate over arrays
```
let prices=[100,200,300,400,500];
//! standard
// for(let i=0;i<prices.length;i++){
//     console.log(prices[i]);
// }
//! new way
for(let price of prices){
    console.log(price);
}
```
### array sorting
```
let fruits=['apple','banana','mango','orange'];
fruits.sort().reverse();
for (let fruit of fruits){
    console.log(fruit);
}
```
## array of arrays 2D
```
// 2D array = an array of arrays
let fruits=['apple','mango','banana'];
let vegetables=['carrot','onion','potato'];
let meats=['chicken','beef','pork'];
let food=[fruits,vegetables,meats];
// lets say we want to replace apple with banana
food[0][0]='banana';
food[0][2]= 'apple';
console.log(food);
for (let i=0;i<food.length;i++)
{   
    console.log('----------');
    for(let one of food[i]){
        console.log(one);
    }
}
```
### Spread Operator 
// spread operator = allow an iterable such as an array or string to be expanded in places where zero or more arguments are expected (unpacks the elements)
```
//! usecase 1 
// spread operator = allow an iterable such as an array or string to be expanded in places where zero or more arguments are expected (unpacks the elements)
// let username="Adham"
// let numbers = [1,2,3,4,5,6,7]
// console.log(...username);
// x=Math.max(...numbers)
// console.log(x);

//! usecase 2 
// let class1 = ['Adham', 'Ahmed', 'Hossam'];
// let class2 = ['Ahmed', 'salah', 'Amr'];
// class1.push(...class2)
// console.log(...class1)

//! usecase 3 
// const numbers = [1, 2, 3];
// const sum = (a, b, c) => a + b + c;
// console.log(...numbers)
// const result = sum();
// console.log(result); // الناتج سيكون 6

```
### rest parameters
- allow function to accept an indefinite number of arguments as an array
```
let a = 1; 
let b = 2;
let c = 3;
let d = 4; 
console.log(sum(a,b,c,d));
function sum(...numbers){
    let total= 0;
    for( let number of numbers){
        total+=number;
    }
    return total;
}
```
### Callback function
- A function passed as an argument to another function
- Ensure that a function is not going to run before a task is completed helps us develop asynchronous code.
(when one function has to wait for another function) that helps us avoid errors and potential problems Ex. wait for a file to load
```
// callback = a function passed as an argument to another function
displayconsole(sum(2,3));
function sum(x,y){
    let result= x+y;
    return result
}
function displayconsole(output){
    console.log(output)
}

```
### array.foreach() 
- executes a provided callback function once for each array element
```



let students=["sana","sara","sana","sara","sana","sara"];
students.forEach(capitalize);
students.forEach(print);
function capitalize(element,index,array){
    array[index]=element[0].toUpperCase()+element.slice(1);

}

function print(element){
    console.log(element)
}
```
### arraymap Vs arrayforeach
- array.map() = executes a provided callback function once for each array element and creates a new array
```
let numbers = [1,2,3,4,5];
let squares=numbers.map(square)
squares.forEach(print);
function square(element){
    return Math.pow(element,2);
}
function print(element){
    console.log(element)
}
```
- array.forEach() = executes a provided callback function once for each array element but apply on the same place
```
numbers.forEach(square2);
numbers.forEach(print);
function print(element){
    console.log(element)
}
function square2(element,index,array){
    array[index]=Math.pow(element,2);
}
```
### array.filter()
-  creates a new array with all elements that pass the test provided by a function
```
let ages = [3, 10, 18, 20,33, 40, 50];
let adults=ages.filter(check_age);
adults.forEach(element => console.log(element));
function check_age(age){
    return age>18
}
```
### array.reduce()
- array.reduce() = reduces an array to a single value
- accumulator(storage point), current value
- 0 -> initial value for the accumulator
```

let prices=[5,10,15,20];

let total= prices.reduce(checkout,0);
console.log(total);
function checkout(total,element){
    return total + element;
}
```
### sort() 
- sort without callback function will sort based on UTF-16 code units
```
let grades = [100,50 ,90,60,80,70];
grades = grades.sort(descendingsort);
grades.forEach(print);
function descendingsort(x,y){
    return y-x;
}
function ascendingsort(x,y){
    return x-y;
}
function print(element){
    console.log(element)
}
```
### Function Expression
- function without a name (anonymous function) avoid polluting the global scope with names Write it, then forget about it 
> EX-1
```
const greeting= function (){
     console.log("Hello!");
}
greeting();
```
Ex-2 Without Anonymous Function
- Html Code
```
    <label for="" id="countable">0</label>
    <button id="add">+</button>
    <button id="sub">-</button>
```
- js Code
```
let count=0;
function increase(){
    count++;
    document.getElementById('countable').innerHTML=count
}

function decrease(){
     count--;
     document.getElementById('countable').innerHTML=count
}
document.getElementById('add').onclick=increase
document.getElementById('sub').onclick=decrease
document.getElementById('sub').onclick=decrease
```
- Ex-3 With Anonymous Function
- Html Code
```
    <label for="" id="countable">0</label>
    <button id="add">+</button>
    <button id="sub">-</button>
```
- js Code
```
let count=0;
document.getElementById('add').onclick= function(){
    count++;
    document.getElementById('countable').innerHTML=count
}
document.getElementById('sub').onclick= function(){
    count--;
    document.getElementById('countable').innerHTML=count
}
```
### Arrow Function 
- arrow function = compact alternative to a traditional function =>
- note you can't use function keyword like this function(name)
```
const greeting = (name)=> console.log(`Hello ${name}`);
```
### Shuffle Array
```
let cards= ["queen", "queen", "king", "king", "jack", "jack"];
length= cards.length;
for (let i=0;i<length;i++){
    let random= Math.floor(Math.random()*length);
    let temp=cards[i];
    cards[i]=cards[random];
    cards[random]=temp;
}
console.log(cards)
```
### Nested Function
- function inside other functions.
outer function have access to inner function but inner function are "hidden" from outside
```
let username="admin"
let password=1234;
function login(username,password){
    function check_username_password(){
        if(username=="admin" && password == 1234){
            return true 
        }
        else {
            return false
        }
    }
    let auth=check_username_password();
    function auth_check(){
        if(auth == true){
            console.log( "login success")
        }
        else {
            console.log( "login failed")
        }
    }
    auth_check()

}
login(username,password)
```
### Map 
- object that holds key-value pairs of any data type
```
const store = new Map([
    ["t-shirt",20],
    ["Jeans",30],
    ["socks",20],
]);
let shoppingcart =0;
shoppingcart +=store.get("t-shirt"); // get value of key
shoppingcart +=store.get("Jeans");
console.log(shoppingcart)
store.set("hat",40); // add new key value pair
store.delete("hat"); // delete element from map
store.has("hat");// return true if it exists false if not 


console.log(store.size); // 3 rows
store.forEach((value,key) => console.log(`${key} : ${value}`))
```
### Object 
- A group of properties and methods properties = what an object has methods = what an object can do use to access properties/methods
```
const car = {
    model:"Mustang",
    color:"red",
    year:2023,
    drive: function (){
        console.log("You Drive this car ")
    }
}
console.log(car.model)
console.log(car.color)
car.drive();
```
### this 
- This = reference to a particular object 
- The object depends on the immediate context 
```
const car = {
    model:"Mustang",
    color:"red",
    year:2023,
    drive: function (){
        console.log("You Drive this car ")
    },
    info: function (){
        console.log(car.model) 
        console.log(this.color)// this = car refers to the class
        // console.log(model)// model is not defined
    }
}
car.info();
```

