// WEB API -> 웹 브라우저에서 제공해주는 API
//setTimeout, setInterval, DOM 이벤트, Promise, Fetch -> 대표적인 API

// 테스크 큐
// setTimeout
// setInterval
// setImmediate
// DOM 이벤트
// fetch.then()

// 마이크로 테스크 큐
// queueMicrotask()
// Promise.then()
// Promise.catch
// Promise.finally
// MutationObserver

console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
Promise.resolve().then(() => {
  console.log("C");
});
console.log("D");
// 출력
// A
// D
// C
// B

console.log("A");
setTimeout(() => {
  console.log("B");
}, 100);
setTimeout(() => {
  console.log("C");
}, 0); // 먼저 task queue에 예약됨.
console.log("D");
