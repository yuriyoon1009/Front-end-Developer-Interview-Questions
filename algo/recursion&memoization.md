## 재귀 recursion
- 함수가 자기 자신을 호출하는 것을 의미한다.
- 가독성은 높히지만 성능은 떨어진다.
```
// recursive
var factorial = function(number) {
  if(number > 0) {
    return number * factorial(number - 1);
  } else {
    return 1;
  }
}

// 보통
var factorial = function(number) {
  var result = 1;
  for(var i =1; i <= number; i++) {
    result *= i;
  }
  return result;
}
```
## 메모제이션 memoization
- 프로그래밍을 할때 반복되는 결과를 메모리에 저장해서 결과가 나올 때 빨리 실행하는 코딩 기법
- factorial(4) 예전의 결과값을 활요하지 못 하고 다시 계산하다. 결과값이 메모리에 남아있었다면 재사용이 가능하다.
```
var factorial = (function(){
  var save = {};
  
})();
```


