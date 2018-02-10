## 재귀 recursion
- 함수가 자기 자신을 호출하는 것을 의미한다.
- 콜스택으로 인해서 일반적으로 50회 이상 반복하는 경우는 계산하지 못 한다 (?)
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
- 이전에 한번 계산된 값은 기억해나서 성능을 최적화한다. 메모리를 희생하고 성능 확보.
- 재귀형식으로 표현될 수 있는 모든 알고리즘은 메모이제이션을 쓰기만 하면 성능이 개선.
- factorial(4) 예전의 결과값을 활요하지 못 하고 다시 계산하다. 결과값이 메모리에 남아있었다면 재사용이 가능하다.
```
var factorial = (function(){
  var save = {};
  
})()
```



