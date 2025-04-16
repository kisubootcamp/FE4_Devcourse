// WEB API -> 웹 브라우저에서 제공해주는 API
// setTimeout, setInterval, DOM 이벤트, Promise, Fetch

// 태스크큐
// setTimeout
// setInterval
// setImmediate
// DOM 이벤트 콜백
// fetch.then()

// 마이크로태스크큐
// queueMicrotask()
// Promise.then()
// Promise.catch
// Promise.finally
// MutaionObserver

console.log('A');

setTimeout(() => {
  console.log('B');
}, 1000); // 0ms 이후에 실행

Promise.resolve().then(() => {
  console.log('C');
});

console.log('D');
