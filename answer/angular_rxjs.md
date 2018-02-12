## Reactive programming
- observable 이벤트 스트림을 구독하고 이 스트림에 반응하는 방식으로 동작하는 애플리케이션을 작성하는것.

- push-scenario : 외부 환경에 요청 후 응답이 올 때까지 대기하는것이 아니라 외부 환경에서 응답이 오면 그때 반응한다.

- reactive programming은 push-scenario로 동작한다.

## observable
- 외부 환경에서 내부로 연속적으로 흐르는 데이터를 받는 인터페이스가 observable.

- observable은 es7스펙으로 되어있는 비동기 데이터 처리하기 위한 표준.

## RxJS
- 비동기 데이터 스트림을 처리하는 API를 제공하는 라이브러리이다.

- 연속성을 갖는 데이터 스트림을 스트리밍한다. 옵저버는 연속적으로 보내진 데이터를 받아 처리한다.

- promise는 한번에 하나의 데이터를 처리하기 때문에 연속성을 갖는 데이터를 처리할 수 없다.

- promise는 서버로 보낸 요청은 취소 할 수 없다. 

- observer는 데이터 스트림을 구독하여 사용하는 객체이다.

- observable은 데이터 스트림을 생성하는 객체이다.

- 배열, ajax 통신결과, 웹소켓, 사용자 이벤트 등 데이터를 생산하는 것이라면 observable로 만들 수 있다.

- observer는 observable을 생성, 변환, 필터링, 오류처리하는 오퍼레이터를 사용 할 수 았다.

```
import 'rxjs/add/observable/from';
// Observable의 from오퍼레이터를 사용하여 oservable을 생성하였다. 

// Observable.from 배열과 같은 이터러블을 인자로 전달받아 observable을 생성한다.

import 'rxjs/add/operator/map';
import
'rxjs/add/operator/filter';
//map과 filter오퍼레이터를 사용하여 observable 변형, 필터링하였다.
// Obervable.map 인자로 전달된 콜백함수를 실행하고 그 결과값으로 이루어진 observable 반환한다.
// Observable.filter

//
```
