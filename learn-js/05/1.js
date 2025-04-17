// WEB API -> 웹 브라우저에서 제공해주는 API
// setTimeout, setInterval, DOM 이벤트, Promise, Fetch

// 태스크 큐
// setTimeout
// setInterval
// setImmediate
// DOM 이벤트 콜백
// fetch.then()

// 마이크로태스크큐
// queueMicrotask()
// Promise.then()
// Promise.catch()
// Promise.finally()
// MutationObserver

Promise.resolve().then(() => {
  console.log("promise");
});

queueMicrotask(() => {
  console.log("microtask");
});

