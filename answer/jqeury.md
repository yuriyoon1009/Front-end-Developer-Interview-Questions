## jquery
- jQuery() === $() (shorthand)
- attr() HTML의 속성을 취급
- prop() Javascript 프로퍼티를 취급. (get the value of a property)
// http://lucybain.com/blog/2014/attribute-vs-property/
https://medium.com/@jeongwooahn/html-attribute%EC%99%80-property-%EC%9D%98-%EC%B0%A8%EC%9D%B4-d3c172cebc41
```
var $input = $("input");

$input.attr("checked"); // "checked"
$input.prop("checked"); // true
```

- get

- val

- data

- html

- text

## jquery 장담점

## jQuery 성능 향상하기
https://www.zerocho.com/category/jQuery/post/57c3a8821efc521700a70918

## Promise를 위한 jquery Deferred object
http://poiemaweb.com/jquery-deferred

## jqeury ajax
https://www.zerocho.com/category/jQuery/post/57b1a48f432b8e586ae4a973

## jquery 유틸
https://www.zerocho.com/category/jQuery/post/57aaa0861bdc7215009bd701

## 이벤트
https://www.zerocho.com/category/jQuery/post/57aeec1086aedf1500d91d8e

## selector
https://www.zerocho.com/category/jQuery/post/57a9a371e4bc011500624ba3

## 동적 html이 event handler이면
```
var tbody = $('tbody');     
var listener = function(event) {
            var tmp = $(event.currentTarget).siblings('.name');
            tmp.css('font-weight', 'bold');
        }
        tbody.on('click', '.age', listener);
```
https://github.com/Younghun-Jung/buildit_test/blob/master/index.html
## animation
https://www.zerocho.com/category/jQuery/post/57b041af298ead15009f1fb6
