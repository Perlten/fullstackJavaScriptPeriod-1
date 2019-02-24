# fullstackJavaScriptPeriod-1

### Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

java strongly typed langue meaning that you need to define what type each variable has, and are unable to change type thereafter. because of this it gives you alot of error at compile time, which can help catch bugs.

Javascript on the other hand is interpreted at runtime and is dynamically typed, and can therefore not give you as much help at finding bugs before you run the code as java. javascript is also the "only" langue that can run on the browser

### Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers

Because some browser havent cathed up to es6 and up, we need something to transpile or code to a older version if we want to use new javascript features. Two of the biggest technologies to so is typescript and bable. Bable can only transpile the code, where typescript also is a superset of javascript and therefor implements things such as types

### Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.  
node runs in the chromes v8 engines and is written in c++. It allows us to write javascript and run it from other places then the browser, for instance on a server or iot. Npm stands for node package manager, and is the largest of its kind. It allows everyone to publish there code for other programmers to use.

### Explain about the Event Loop in Node.js
javascript is non blocking and single threaded. However we still need to be able handle parallelle programming, to do this we use the eventloop. if we want to make a request to another server we dont want the main thread to wait for a response since this can take some time. 
When the response comes back it ends up in the eventqueue, and when the stack is empty, then it calls the callback method assign to the request.

### Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises
Babel can transpile javascript code to at older version, and webpack can compress all our javascript files into a single file
### Explain the purpose of “use strict” and Linters, exemplified with ESLint 
You can declare a functions or a file strict. This means that there are certain restrictions on things such as var names, and use of undeclared variables.

```javascript
"use strict";
//Throws error
x = 3.14
```
```javascript
//Is okay and creates a global variable x
x = 3.14
```
### Variable/function-Hoisting

Here its prints undefined and not a error beacuse x is hoistet to the top of the function
```javascript
function testHoist(){
    console.log(x)
    
    if(false){
        var x = 5
    }
}
```

Now that we use let it dosent hoist and we get a error when we try to print x
```javascript
function testHoist(){
    console.log(x)
    
    if(false){
        let x = 5
    }
}
```

### this in JavaScript and how it differs from what we know from Java/.net.
The big difference between java and javascript when i comes to this, is that in java it consistently refers to the object it belongs to. This is not the case for javascript. Here it is much more dependent on in which context it us used in. If a functions "belongs" to a object, this referes to the object, however if the function does not "belong" to a object this refers to either window in the browser or global in node. 

```javascript
const person = {
    name: "Perlt",
    age: 23,
    printPerson() {
        console.log(this.name, this.age);
    },
    printPersonWithDelay(){
        setTimeout(function(){
            console.log(this.name, this.age);
        },1000)
    }
}

person.printPerson(); //Perlt 23
person.printPersonWithDelay() // undefined undefined
```
### Function Closures and the JavaScript Module Pattern
Closures can be used to create "private" variables in javascript

```javascript
function outer() {
   var b = 10;
   function inner() {
        
         var a = 20; 
         console.log(a+b);
    }
   return inner;
}
```
### Immediately-Invoked Function Expressions (IIFE)
```javascript
(function(){
    console.log("IIFE")
})()
```
### JavaScripts Prototype
```javascript
const array = [1, 2, 3, 4, 5]
Array.prototype.printForFun = () => console.log("Hej med jer");

array.printForFun()
```
### User-defined Callback Functions (writing your own functions that take a callback)
```javascript

function filterArray(arr, callback){
    const res = []
    for (e of arr){
        if(callback(e)){
            res.push(e)
        }
    }
    return res;
}

const array = [1, 3, 5 ,6 ,8 ,9]

const filArray = filterArray(array, (e) => e > 5)
console.log(filArray);
```

### Explain the methods map, filter and reduce
```javascript 
const array = [1 ,2 ,5 ,7 ,8, 11, 23]

// Changes all element and returns a new array with same size
const mapArray = array.map(e => e * e);
console.log(mapArray);

// filters the array and returns a new array with same size or less
const filterArray = array.filter(e => e > 7)
console.log(filterArray);

// reduces the array to a single value
const reduceArray = array.reduce((a, e) => a += e, 0)
console.log(reduceArray);

```
### Provide examples of user-defined reusable modules implemented in Node.js
Used in exercises on 12Feb es2015Exercises
```javascript
const f = require("./fFunc")

//fFunc

function f(x, y, ...rest) {
    console.log(`X: ${x}`)
    console.log(`Y: ${y}`)
    rest.forEach((data, index) => console.log(`index: ${index} data: ${data}`))
}

module.exports = f
```

### Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.

```javascript

//Throw error because let does not hoist
function testLet() {
    console.log(x);
    if (false) {
        let x = "hej"
    }
}


// Arrow functions makes this behave more like java
setTimeout(() => {
    console.log("Arrow functions is nice");
}, 1000);

//This is points to the global object unless it is attached to a object
const obj = {
    string: "hej object",
    printString: function () { console.log(this.string) },
    printString2: function () {
        setTimeout(function () {
            console.log(this.string);
        }, 1000)
    }
}

obj.printString()
obj.printString2()


// rest parameter

const restParam = "/test/:num"
const num = req.params.num

// de-structuring assignments
const person = {
    name: "perlt",
    age: 23
}

const { name, age } = person
console.log(name, age);

//Maps 
let map = new Map();

map.set('foo', 123);
map.get('foo')
123

map.has('foo')
true
map.delete('foo')
true
map.has('foo')
false

//Sets 

let set = new Set();
set.add('red')

set.has('red')
true
set.delete('red')
true
set.has('red')
false
```


### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.

```javascript 
export default function test(){
    console.log("test")
    return "test"
}

export function test2(){
    console.log("test2");
    return "test2"
}


// other module

import test, {test2} from './modulename'
```

### Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

```javascript
// differences between java and javascript is for one that i cant make abstract methods
class Human {
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }

    printName(){
        console.log(this.name);
    }
    
    printAge(){
        console.log(this.age);
    }

    printStory(){

    }
}

class basketballPlayer extends Human{
    constructor(name, age, height) {
        super(name, age)
        this.height = height
    }

    printStory(){
        console.log(`I am a ${this.height} tall basketball player`);
    }
}

const bBaller = new basketballPlayer("Perlt", 23, "190")
bBaller.printStory()
bBaller.printAge()
```

### Provide examples with es-next, running in a browser, using Babel and Webpack

Flow 1 on 12Feb in webpackExercises

### Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics

```typescript 
interface Person { name: string };
interface Address { street: string };

const person: Person = { name: "Nikolai Perlt" };
const address: Address = { street: "Bellmansgade 56" };


class GenericLogger<T, U>{
    logger = (t: T, u: U) => {
        console.log(`${t} lives on ${u}`);
    }
}

let classLogger = new GenericLogger<Person, Address>()

classLogger.logger(person, address)

//Class
class TestClass{
    constructor(public name: string, private age: number){}

    printName(){
        console.log(this.name);
    }

    printAge(){
        console.log(this.age);
    }
}

const testClass = new TestClass("Nikolai", 23)
```

### Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)

This is a process split into 4 stages from idea to finished and implemented feature

### Stages:
#### Stage 0 (Strawman):
* No real spec
* Public for feedback
* Allows for input
#### Stage 1 (Proposal):
* Make the case for the addition
* Describe the shape of a solution
* Identify potential challenges
#### Stage 2 (Draft):
* Precisely describe the syntax
* Describe semantics using formal spec language
#### Stage 3 (Candidate):
* Indicate that further refinement will require feedback from implementations and users
#### Stage 4 (Finished):
* Indicate that the addition is ready for inclusion in the formal ECMAScript standard


### Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")

```javascript 
//Pyramid of doom
setTimeout(() => {
    console.log("hej");
    setTimeout(() =>{
        console.log("med");
        setTimeout(() =>{
            console.log("dig");
            setTimeout(() =>{
                console.log("hvad");
                setTimeout(() =>{
                    console.log("laver");
                    setTimeout(() =>{
                        console.log("du");
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
},1000)

//with promises

function clgPromise(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string)
            resolve(string)
        }, 1000);
    })
}

clgPromise("hej")
    .then(() => clgPromise("med"))
    .then(() => clgPromise("dig"))
    .then(() => clgPromise("hvad"))
    .then(() => clgPromise("laver"))
    .then(() => clgPromise("du?"))

```

### Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel

```javascript

//Commen
function facCalc(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(id);
            resolve(id)
        }, 1000);
    })
}
//serial
facCalc(1)
    .then(() => facCalc(2))
    .then(() => facCalc(3))
    .then(() => facCalc(4))
    .then(() => facCalc(5))


//parallel
promiseArray = [
    facCalc(1),
    facCalc(2),
    facCalc(3),
    facCalc(4),
    facCalc(5),
]

Promise.all(promiseArray).then((data) => console.log(data))
```

### Example(s) that demonstrate how to implement our own promise-solutions.
    Look above
### Example(s) that demonstrate error handling with promises
```javascript 
function ownPromise(shouldError, id) {
    return new Promise((resolve, reject) => {
        console.log(id);
        if (shouldError) {
            reject("Error")
            return
        }
        resolve("No error")
    })
}


ownPromise(false, 1)
    .then(() => ownPromise(false, 2))
    .then(() => ownPromise(true, 3))
    .then(() => ownPromise(false, 4))
    .then(() => ownPromise(false, 5))
    .catch(e => console.log(e))
```