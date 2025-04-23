console.log("a"); // 먼저 실행 후 콜스택에서 제거
console.log("B"); // A 컨텍스트 제거 후 실행하고 제거
// WEB API(application interface) -> 웹브라우저에서 제공해주는 API. 웹 브라우저가 자바스크립트에서 사용할 수 있도록 제공해주는 기능
// setTimeout, setInterval, DOM 이벤트, Promise, Fetch
setTimeout(() => {
  console.log("C");
}, 1000); // 0ms 이후에 실행
setTimeout(() => {
  console.log("n");
}, 0); // 0ms 이후에 실행
Promise.resolve().then(() => {
  console.log("micro");
});
console.log("d"); // 이하 동일
// 자바스크립트의 설계 구조상 몇번을 연산을 돌려도 순서가 다르게 나올 수 없다.
// 제일 먼저 생성되는 컨텍스트는 전역 실행 컨텍스트
// log 또한 메서드이다.
// 전역 컨텍스트는 모든 컨텍스트가 실행 되고 콜스택에서 제거된다.
// 자바스크립트는 싱글 스레드 기반

// C가 제일 마지막에 출력되는 이유?
// 전역 실행 컨텍스트가 생긴 이후 A 컨텍스트 실행
// 이후 순서대로 B, C, D, E가 실행됨. 절대적 규칙
// 근데 C는 setTimeout. 일단 전역 컨텍스트에서 실행은 된다.
// 근데 C가 출력되지 않았다고 코드가 멈추지 않음.
// 이유는 WEB API이기 때문
// setTimeout이 실행되면 WEBAPI에 코드가 따로 저장됨
// 이후 콜스택에서는 setTimeout이 제거됨
// 그리고 나서 C와 D를 실행
// setTimeout은 그와 동시에 병렬로 실행되고 있다.
// setTimeout이 시간이 다 되면 매크로 태스크 큐(태스크 큐)에 집어넣는다.
// 그러고 나서 태스크 큐에 무언가 들어갔다는 것이 감지되면 실행함
// 이벤트 루프는 자바스크립트에 콜스택이 비워졌는지 감시하는 역할
// 콜스택이 완전히 비워지면 이벤트 루프가 태스크 큐에서 등록된 작업을 콜스택으로 이동해준다.
// setTimeout이 0초여도 바로 실행되는 것이 아니라 콜스택이 비워질 때까지 기다린 후 실행된다.

// console.log의 경우에도 console.log 위에 log가 생성되고 프린트 한 후 사라지고 그 다음에 console.log 제거

// 함수의 경우
// 저장하는 객체여서 레코드에 저장되고 바로 다음 줄로 넘어간다.

// 이후 함수 호출 코드가 전역 실행 컨텍스트로 가고 호출 코드의 실행 컨텍스트를 만든다. 그 이후 함수 내의 console.log를 출력하기 위해 log 컨텍스트가 생성된다.

// Web API에 대해서 콜스택은 Web API로 이관하는 느낌

// 태스크 큐에서 콜스택으로 가는 것은 자바스크립트 코드의 전역 컨텍스트가 완전 종료된 후 새 전역 컨텍스트에서 작동

// Promise then 코드
// Web API간에도 우선순위가 있다.

// 마이크로 태스크 큐는 태스크 큐보다 우선적으로 처리되는 큐이다.

// 태스크큐
// setTimeout
// setInterval
// setImmediate <- Node.JS용 태스크큐
// DOM 이벤트 콜백
// fetch.then()

// 마이크로 태스크큐
// queueMicrotask()
// Promise.then()
// Promise.catch()
// Promise.finally()
// MutationObserver

// Node.JS가 웹 브라우저의 WEB API를 모방하여 JS를 실행함
// Node.JS 자체에 웹 브라우저가 모방되어 있다.
