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

### Explain the purpose of “use strict” and Linters, exemplified with ESLint 


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

### Function Closures and the JavaScript Module Pattern
### Immediately-Invoked Function Expressions (IIFE)
### JavaScripts Prototype
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


### Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.

### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.

### Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

### Provide examples with es-next, running in a browser, using Babel and Webpack

### Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics

### Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)

### Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")

### Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel

### Example(s) that demonstrate how to implement our own promise-solutions.

### Example(s) that demonstrate error handling with promises
