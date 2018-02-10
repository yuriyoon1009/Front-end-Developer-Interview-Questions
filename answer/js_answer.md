# JS Questions:
* what is oop
- ineritance, encapsulation, and polymorphism

* what is object?
- 데이터 구조를 짤 수 있도록 되어있는것. 데이터 구조들끼리 relationship을 갖도록 해서 데이터를 효율적으로 정리 관리 하는거.
* Explain event delegation
- 상위 element에서는 하위 element 들을 대표 (delegation)해서 event handler 를 등록할 수 있다. 
- 동일 element 유형들에 대해 같은 event handler를 등록할때 좋다. 
- If tehre are many elements inside one parent, and you want to handle events on them - don't bind handlers to each element. Instead, bind the single handler to their parent, and get the child from event.target.
```
<div id="tour">
  <!--button이 100개가 있으면 100개의 evnet handler를 등록해야 한다. 하지만 한줄이면 충분-->
  <button></button>
</div>

// .on(events [, selector], handler)
$('#tour').on('click', 'button', function(){...});
tour의 하위 element중 button element에 대해서만 event handler를 등록한다는 의미이다.
```
출처: http://hyoseokchoi.tistory.com/entry/delegation [프로그래밍 쌀롱]
http://javascript.info/event-delegation

* Explain how `this` works in JavaScript
- 'this' depends on how the function is called.
- If the new keyword is used when calling the function, this inside the function is a brand new object.
- if apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.

references:
https://codeburst.io/clearing-your-front-end-job-interview-javascript-d5ec896adda4
* Explain how prototypal inheritance works
* What do you think of AMD vs CommonJS?
* Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  * What needs to be changed to properly make it an IIFE?
* What's the difference between a variable that is: `null`, `undefined` or undeclared?
  * How would you go about checking for any of these states?
- undefined is a variable that has been declared but no value exists andi is a type of itself 'undefined'
- null is a value of a varible and a type of object.
- undeclared variables is a variable that has been declared without ‘var’ keyword.
```
if(typeof(a) == 'undefined') {
  alert('a is undeclared or undefined');
}else{
  alert('a is declared and defined');
}

```
* What is a closure, and how/why would you use one?

* Explain "hoisting".

* Can you describe the main difference between a `forEach` loop and a `.map()` loop and why you would pick one versus the other?

* What's a typical use case for anonymous functions?

* How do you organize your code? (module pattern, classical inheritance?)

* What's the difference between host objects and native objects?

* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?

* What's the difference between `.call` and `.apply`?
- apply() 두번째 인자에서 배열 형태로 넘기지만 call() 각각 하나의 인자로 넘긴다.
```
Person.apply(foo, [1, 2, 3]);
Person.call(foo, 1, 2, 3);
```
- apply() 메소드는 arguments 객체와 같은 유사 배열 객체에 배열 메소드를 사용하는 경우이다.
- apply(), call() 콜백함수의 this를 위해서 사용되기도 한다. 
- func.apply(thisArg, argsArray);
- thisArg: 함수 내부의 this에 바인딩할 객체
- argsArray: 함수에 전달할 argument의 배열

* Explain `Function.prototype.bind`.

* When would you use `document.write()`?
---------
* What's the difference between feature detection, feature inference, and using the UA string?
* Explain Ajax in as much detail as possible.
* What are the advantages and disadvantages of using Ajax?
* Explain how JSONP works (and how it's not really Ajax).
* Have you ever used JavaScript templating?
  * If so, what libraries have you used?
* Describe event bubbling.
* What's the difference between an "attribute" and a "property"?
* Why is extending built-in JavaScript objects not a good idea?
* Difference between document load event and document DOMContentLoaded event?
* What is the difference between `==` and `===`?
* Explain the same-origin policy with regards to JavaScript.
* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Why is it called a Ternary operator, what does the word "Ternary" indicate?
* What is `"use strict";`? what are the advantages and disadvantages to using it?
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
* Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
* Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
* Explain what a single page app is and how to make one SEO-friendly.
* What is the extent of your experience with Promises and/or their polyfills?
* What are the pros and cons of using Promises instead of callbacks?
* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
* What tools and techniques do you use debugging JavaScript code?
* What language constructions do you use for iterating over object properties and array items?
* Explain the difference between mutable and immutable objects.
  * What is an example of an immutable object in JavaScript?
  * What are the pros and cons of immutability?
  * How can you achieve immutability in your own code?
* Explain the difference between synchronous and asynchronous functions.
* What is event loop?
  * What is the difference between call stack and task queue?
* Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
* What are the differences between variables created using `let`, `var` or `const`?
* What are the differences between ES6 class and ES5 function constructors?
* Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?
* What advantage is there for using the arrow syntax for a method in a constructor?
* What is the definition of a higher-order function?
* Can you give an example for destructuring an object or an array?
* ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?
* Can you give an example of a curry function and why this syntax offers an advantage?
* What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
* How can you share code between files?
* Why you might want to create static class members?
