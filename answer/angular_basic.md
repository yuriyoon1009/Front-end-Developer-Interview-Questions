# Angular introduction
- Angular는 SPA(single page application) 개발을 위한 구글의 오픈소스 자바스크립트 프레임워크이다.
- 정적 타입을 제공하는 typescript을 주력 언어로 채택해 대규모 애플리케이션 개발에 보다 적합한 환경 제공.
- angular는 정적 타이핑과 es6스펙을 충족 시키기 위해 typescript로 재작성 되었다. 
- CBD 기반로 전환.
- 선택적 바인딩(one-way, twe-way)을 지원, 디렉티브, 서비스 의존성 주입 간소화.
- 타입 체크 지원 기능 (인터페이스, 제네릭)
- angular cli 제공
- typescript 정적 타이핑을 지원해 코드 어시스트, 타입 체크, 리팩토링 지원. 즉, 컴파일 단계에서 오류 포착.
- 간단한 명령어를 사용하여 빌드, 테스트, 구성요소 추가. 개발용 서버를 내장하고 있어 실행까지 가능하다.

## 성능 향상 (perfermance)
* Digest loop 성능저하 문제 해결.
- angularJs는 digest loop로 인한 성능 저하. (ex/양방향 바인딩으로 watcher추가 > digest loop 실행되어 watcher가 늘어나 성능 저하)
- digest loop 성능저하를 개선해서 로딩 시간, 리렌더링이 빨라졌다.
* AoT 컴파일
- AoT 컴파일은 사전 컴파일 방식이다. ngIf, ngFor, ngSwitch 디렉티브 런타임에서 실행하지 않고 사전에 컴파일하여 실행 속도 향상되었다.
* Lazy loading
- 모든 모듈을 한꺼번에 로딩하지 않고 필요한 시점에 필요한 모듈만 로딩하는 방식이다. 페이지 로딩 속도 향상
* 코드 최적화
- Mobile First를 지향하는 고성능 프레임워크를 표방하고 있어 코드 최적화 진행.
* 브라우저 지원
- IE 9이상 지원