# fullstackJavaScriptPeriod-1

## Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

java strongly typed langue meaning that you need to define what type each variable has, and are unable to change type thereafter. because of this it gives you alot of error at compile time, which can help catch bugs.

Javascript on the other hand is interpreted at runtime and is dynamically typed, and can therefore not give you as much help at finding bugs before you run the code as java. javascript is also the "only" langue that can run on the browser

## Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers

Because some browser havent cathed up to es6 and up, we need something to transpile or code to a older version if we want to use new javascript features. Two of the biggest technologies to so is typescript and bable. Bable can only transpile the code, where typescript also is a superset of javascript and therefor implements things such as types

## Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.  
node runs in the chromes v8 engines and is written in c++. It allows us to write javascript and run it from other places then the browser, for instance on a server or iot. Npm stands for node package manager, and is the largest of its kind. It allows everyone to publish there code for other programmers to use.

## Explain about the Event Loop in Node.js
javascript is non blocking and single threaded. However we still need to be able handle parallelle programming, to do this we use the eventloop. if we want to make a request to another server we dont want the main thread to wait for a response since this can take some time. 
When the response comes back it ends up in the eventqueue, and when the stack is empty, then it calls the callback method assign to the request.

## Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

