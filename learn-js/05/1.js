// WEB API -> 웹 브라우저에서 제공해주는 API
// setTimeout, setInterval, DOM 이벤트, Promise, Fetch

// 태스크큐 ===================
// SetTimeout
// SetInterval
// setImmediate
// DOM 이벤트 콜백
// fetch.then()

// 마이크로태스크큐 =============
// queueMicrotask()
// Promise.then()
// Promise.catch
// Promise.finally
// MutationObserver

// Event Loop
// 웹 브라우저라는 구성요소 안에서 태스큐, 마이크로 태스큐에 작업이 들어오게되면, 콜스택을 감시하고 있다가
// 콜스택이 비게 되면 큐에 있는 작업을 꺼내어 콜스택으로
// 옮기는 존재

// 태스크큐, 마이크로태스크큐
// 웹API에 의해 실행되는 앱이 대기하는 공간

console.log("A");
Promise.resolve().then(() => {
  console.log("micrl");
});
setTimeout(() => {
  console.log("B");
}, 0);
setTimeout(() => {
  console.log("C");
}, 0);
console.log("D");
