//web API = web browser에서 제공해주는 API (application interface; 특정 앱끼리 소통할 수 있는 매개체)
// setTimeout, setInterval, DOM 이벤트, Promise, Fetch, setImmediate
// web API 사이에서도 우선순위가 있다 ..! web API 만의 기준이 있음
// 이 분류를 Macro Task Queue(보통의 순위), Micro Tast Queue(가장의 우선순위)
//

// 태스크큐
// setTimeout
// setInterval
// setImmediate (node.js에서만 실행됨)
// DOM 이벤트 콜백
// Fetch,then()

// 마이크로 태스크 큐 (가장 우선)
// queuMicrotask()
// Promise.then()
// Promise.catch
// Promise.finally
// MutationObserver

console.log("a");

setTimeout(() => {
  console.log("b");
}, 1000);

setTimeout(() => {
  console.log("c");
}, 0);

console.log("d");
Promise.resolve().then(() => {
  console.log("micro");
});

//a
//d
//micro
//c
//b
// 위 개념을 이해하기 위해서 이벤트루프와 태스크큐라는 개념을 알아야함
