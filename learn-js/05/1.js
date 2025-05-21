// WEB API -> 웹 브라우저에서 제공해주는 API
// setTimeout, setInterval, DOM 이벤트, Promise, Fetch

// Task Queue 에 들어가는 항목
// setTimeout
// setInterval
// setImmediate
// DOM 이벤트 콜백
// fetch.then()

// Micro Task Queue 에 들어가는 항목
// queueMicrotask()
// Promise.then()
// Promise.catch
// Promise.finally
// MutationObserver

// 콜스택 -> web api 대기 공간 -> 마이크로태스크큐/태스크큐 -> 이벤트루프 -> 콜스택
// 이벤트 루프는 콜 스택이 비는지 계속 확인. 비었을 때 큐에 있는걸 콜 스택으로 이동시킴.

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0); // 0ms 이후에 실행해 주세요.
setTimeout(() => {
  console.log("C");
}, 1000); // 0ms 이후에 실행해 주세요.

Promise.resolve().then(() => [console.log("micro")]);

console.log("D");
