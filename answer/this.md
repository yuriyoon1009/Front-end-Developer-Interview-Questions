# method
- javascript methods are the actions that can be performed on objects.
##  메소드 호출 패턴 (Method Invocation Pattern)
- 함수가 객체의 프로퍼티이면 메소드 호출 패턴으로 호출된다.
- 메소드 내부의 this는 해당 메소드를 호출한 객체에 바인딩된다.
```
// 함수가 객체의 프로퍼티
var obj1 = {
  name: 'Lee',
  sayName: function() {
    // 메소드 내부
    // this는 메소드를 호출한 객체에 바인딩 
    console.log(this.name);
  }
}
```
- 프로토타입 객체도 메소드를 가질 수 있다.
- 프로토타입 객체 메소드 내부에서 사용된 this도 해당 메소드를 호출한 객체에 바인딩된다.
```
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
}

var me = new Person('Lee');
console.log(me.getName());
```
## 생성자 호출 패턴 (Constructor Invocation Pattern)
- 생성자 함수 내부의 this는 생성자 함수에 의해 생성된 인스턴스를 가린킨다.
```
var Person = function(name) {
  // 1. 생성자 함수 실행전
  // undefined, 빈 객체
  this.name = name; // 2. this는 생성된 객체를 가리킨다.
  // 생성된 객체 반환
}

var me = new Person('lee');
console.log(me.name);
```
## apply 호출 패턴 (Apply Invocation Pattern)
- (자바스크립트 엔진의 암묵적 this 바인딩 이외)
- this를 특정 객체에 명시적으로 바인딩하는 방법도 제공된다.
- 이것은 Function.prototype.apply(), Function.prototype.call() 
- Function.prototype 객체의 메소드이다.
```
// 함수 내부에 this에 바인딩할 객체
// argsArray 함수에 전달할 argument의 배열
func.apply(thisArg, [argsArray])

var Person = function (name) {
  this.name = name;
}

var foo = {};

Person.apply(foo, ['hi']);
console.log(foo) // {name: 'hi'}
```

## bind
콜백함수를 호출하는 함수 내부의 this와 일치시켜 주어야 한다.
```
this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 9 반환 - 함수가 전역 스코프에서 호출됐음

// module의 속성 x를 혼동할 수 있음
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```
## ES 6 arrow function this
- Lexical this : arrow function은 외부 scope에서 this를 계승 받는다. 자신을 포함하고 있는 컨텍스트로부터 this를 계승 받는다.
```
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  return arr.map(function (x) {
    return this.prefix + ' ' + x;;
  }); // this: Prefixer 생성자 함수의 인스턴스
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));

["undefined Lee", "undefined Kim"]
```
```
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  // 외부 scope에서 this를 계승
  // 자신만의 this 생성 안 함
  // 자신을 포함하고 있는 컨텍스트로부터 this를 계승 받는다.
  return arr.map(x => `${this.prefix}  ${x}`);
};

const pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
// ["Hi Lee", "Hi Kim"]
```
