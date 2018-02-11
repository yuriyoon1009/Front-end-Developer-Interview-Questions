## jquery
- jQuery() === $() (shorthand)

- prop() : Javascript 프로퍼티를 취급. (get the value of a property). 속성중에 true, false값지는 속성들만을 위한 메소드이다. ex/ hidden, readonly, checked
```
$('#hesung').prop('hidden'); // false
$('#hesung').prop('hidden', true); // hidden속성의 값을 true로 변경
document.getElementById('hesung').hidden = true;
```

```
var $input = $("input");

$input.attr("checked"); // "checked"
$input.prop("checked"); // true
```
- get : 제이쿼리 객체를 자바스크립트 객체로 다시 전환. get의 인자는 여러개의 태그중 몇번째 태그를 자바스크립트 객체로 전환할건지 선택.
```
$('.hesung').get(0); // <p></p>
```
- attr : HTML 속성을 조회하거나 변경 할 수 있는 메소드이다.
```
$('#hesung').attr('name'); // 'hesung'
$('#hesung').attr('name', 'babo'); // name속성을 babo로 변경
document.getElementById('hesung').name = 'babo';
```
- val : 속성만을 다루는 메소드이다.
```
$('#hesung').val(); // 'hesung'
$('#hesung').val('name', 'babo'); // name속성을 babo로 변경
document.getElementById('hesung').name = 'babo'; 
```
- data : 태그에 데이터를 조회하거나 저장하는 방법이다. html5에서 태그에 데이터를 저장 할 수있다. data-age, data-name처럼 data-접두어를 붙이면 된다.
```
$('#hesung').data('name'); // hesung
$('#hesung').data('name', babo); // data-name를 babo로 변경
document.getElementById('hesung')['data-name'] = babo;
```
- html : innterHTML과 같다.

- text : textContent를 바꾼다. innterHTML과는 달리 태그를 넣을 수 없다.

// http://lucybain.com/blog/2014/attribute-vs-property/
https://medium.com/@jeongwooahn/html-attribute%EC%99%80-property-%EC%9D%98-%EC%B0%A8%EC%9D%B4-d3c172cebc41

## jQuery 성능 향상하기 (performance)
* 변수 저장 : 단 한번만 호출하기
```
var $hesung = $('hesung');
$hesung.text('test');

// length도 변수에 저장
var length = array.length;
for(var i=0; i < length; i++){...}
```
* documentFragment
- append를 여러번 반복하면 브라우저는 여러번 페이지를 그려야 한다. documentFragment는 가상의 메모리 공간에서 일어나서 브라우저와는 상관이 없다. 마지막으로 documentFragment를 한번에 append해주는 것이다.

* 선택자 최적화
- 최소화해야 한다. 
```
$('div#zero') > $('#zero')
```
- id나 class를 사용하는게 좋다.
```
// 성능이 더 좋다
$('div p a') > $('#zero p a')
// :input, :event, :odd 등은 최대한 피하는게 좋다. 순수 js에서 지원하지 않은 
제이쿼리에서 지원하는 선택자들은 제이쿼리가 직접 구현해야 한다. 이 과정에서 성능 저하.
```
https://www.zerocho.com/category/jQuery/post/57c3a8821efc521700a70918

## Promise를 위한 jquery Deferred object
* promise
- promise를 사용하면 비동기 프로그래밍을 할때 코드가 간결해진다.
- 제이쿼리 프로미스는 기본적으로 공식 구현을 따르지 않아서 문제가 있다. 
- 하지만 복잡한 프로미스를 구현하지 않는 이상은 그 문제가 발생하지 않다. (제이쿼리 3.0에서 그 문제가 해결된다.)
* deferred
- 프로미스를 사용 할 수 있게 deferred라는 객체를 제공한다.
- 프로미스 객체가 완료되었때 done메소드 호출, 실패 fail, 완료든 실패든 행동이 끝나면 always.
```
// 콜백이 여러번 중첩될 경우 프로미스 형식을 사용한다.
var longAngCompletion = function(){
  var deferred = $.Deferred();
  try {
    deferred.resolve('success');
  } catch {
    deferred.reject(err);
  }
  return deferred.promise();
}

longAndComplicatedFunction().done(function(message) {
  console.log(message);
}).fail(function(error) {
  console.log(error);
}).always(function() {
  console.log('완료!');
});
```
http://poiemaweb.com/jquery-deferred
https://www.zerocho.com/category/jQuery/post/57c90814addc111500d85a19

## jquery 유틸
- utility : 무언가를 관리하는데 도움을 주는 프로그램을 뜻한다. 배열이나 객체를 반복하는 메소드이다. 
* $.each
// es5의 forEach와 비슷하다.
```
$.each(['human1', 'human2', 'human3'], function(key, val){
  console.log(key, val);
}); // 0, human1, 1, human2, 2, human3
```
* $.extend
- es6 Object.assign과 비슷하다.
```
$.extend({id: 1}, {id: 2, id: 3}); // {id:1, id:2, id:3}
```
* $.proxy
- this를 바꾸는 메소드이다. this가 바인딩 할 객체를 참조할 수 있도록 도와준다. ES5에서의 bind와 비슷하다.
```
var func = function() {
  console.log(this); //window
};
var obj = {hesung: 'babo'};
var newFunc = $.proxy(func, obj);
newFunc(); // obj
var bindFunc = func.bind(obj);
bindFunc; // obj
```
* $.type
-  typeof 연사자를 조금 보완. typeof연산자는 null, Data등을 모두 object라고 표시된다. 정규표현식도 브라우저마다 다르게 처리한다.
- 하지만 제이쿼리의 $.type은 구분해준다.
```
$.type(new Data); // data
$.type([1,2,3]); // array
$.type(null); // null
$.type(/s/); // regexp
```
https://www.zerocho.com/category/jQuery/post/57aaa0861bdc7215009bd701

## 이벤트
- 제이쿼리의 장점은 이벤트 관리가 편리하다. 선택한 태그에 이벤트를 붙이기만 하면 된다.
```
// document가 ready되면 콜백함수의 내용을 실행하는 것이다.
// ready 되었다는 것은 dom로딩이 완료되었다는 것. (이미지나 아이프레임은 제외)
$(function(){...});
```
* on, off, one
- bind, live, delegate 메소드는 안 쓰는것을 권장.
- 모든 기능이 on으로 통합된다.
- 이벤트 체이닝 기법으로 연달아 달아 줄 수도 있다.
- 데이터를 전달할 수 있다. 전달한 데이터는 event객체의 data속성에 들어있다.
```
// 선택자 부분에 새로 추가될 태그의 선택자를 구           
$('').on(event, 'selector', function(){});

$('').on('click', {name: 'hesung'}, function(e){
  alert(e.data.name); // hesung
})
```
- preventDefault 메소드는 태그의 기본동작을 하지 않게 막아준다.
- stopPropagation 메소드는 태그를 클릭 시 부모에게 이벤트가 전달되지 않도록 한다.
https://www.zerocho.com/category/jQuery/post/57aeec1086aedf1500d91d8e

## 동적 html이 event handler이면
```
var tbody = $('tbody');     
var listener = function(event) {
            var tmp = $(event.currentTarget).siblings('.name');
            tmp.css('font-weight', 'bold');
        }
        // on 이벤트로 하면 차후에 여러개의 이벤트 동시에 달 수 있다.
        // 예를 들어 체이닝 기법
        tbody.on('click', '.age', listener);
```
https://github.com/Younghun-Jung/buildit_test/blob/master/index.html

## jqeury ajax
https://www.zerocho.com/category/jQuery/post/57b1a48f432b8e586ae4a973

## jquery 장담점