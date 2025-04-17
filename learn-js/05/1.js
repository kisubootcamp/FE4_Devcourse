// WEB API -> 웹 브라우저에서 제공해주는 API
// setTimeout, setInterval, DOM 이벤트(클릭 시 이벤트 연결되는 것), Promise, Fetch

// 태스크 큐
// setTimeout
// setInterval
// setImmediate
// DOM 이벤트 콜백
// fetch.then()

// 마이크로 태스크 큐
// queueMicrotask()
// Promise.then()
// Promise.catch
// Promise.finally
// MutationObserver

console.log("A");

// Task Queue
// setTimeout의 시간을 아무리 늘려도 Micro Task Queue의 우선순위가 높기 때문에
// B가 C보다 먼저 출력될 일은 절대 없음.
setTimeout(() => {
  console.log("B");
}, 100);

setTimeout(() => {
  console.log("B와 C 사이");
}, 0);

// Micro Task Queue
Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// 출력 순서 : A D C B
// 출력 순서 : A D C B와 C 사이 B
