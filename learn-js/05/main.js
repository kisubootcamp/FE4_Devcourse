// 이벤트 루프와 마이크로 태스크 큐

// web API
// 웹 브라우저에서 제공해주는 API
// setTimeout, setIntervar, DOM Event, fetch, Promise

// 태스크 큐
// setTimeout
// setInterval
// setImmediate
// DOM 이벤트 콜백
// fetch.the()

// 마이크로 태스크 큐
// queueMicrotask()
// Promise.then()
// Promise.catch()
// Promise.finally()
// <itatopmPnserver

// 1. 자바스크립트는 싱글 스레드 기반 동기적 언어임으로 코드의 위에서부터 순차적으로 실행
// 2. 콜스택에 전역 실행 컨텍스트가 생성되며 각자의 함수등을 실행
// 3. 여기서 web API 가 들어오면 작업을 이관하고 실행 컨텍스트는 제거 됨
// 4. web API 는 대기 시간이 끝난 작업을 태스크 큐에 넣는다.
// 5. 여기서 우선순위가 존재하므로 일부 코드는 마이크로 태스크 큐로 들어간다.
// 6. 이벤트 루프는 콜 스택이 빌때까지 감시한다.
// 7. 콜 스택이 비면 이벤트 루프는 태스크 큐에 있는 작업을 콜 스택에 넣어 실행 컨텍스트를 생성한다.
// 8. 모든 작업이 완료된다.

console.log("start"); // 1

setTimeout(() => {
  console.log("setTimeout"); // 4
}, 0);

Promise.resolve().then(() => {
  console.log("promise"); // 3
});

console.log("end"); // 2
