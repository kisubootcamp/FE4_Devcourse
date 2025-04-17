// 전역적으로 영향을 미치는 전역 실행컨텍스트

console.log('A');

// WEB API?
// 웹 브라우저에서 제공해주는 API
// 대표적으로 setTimeout, setInterval, DOM 이벤트, Promise, Fetch 등등

//WEB API 입장에서 태스크 큐로 집어넣는
// setTimeout
// setinterval
// setImmediate
// DOM 이벤트 콜백
// fetch.then()

// 마이크로태스크큐
// queueMicrotask()
// Promise.then()
// Promise.finally
// MutationObserver

setTimeout(() => {
  console.log('B');
}, 100); // 100ms 이후에 실행해주세요.
console.log('C');
console.log('D');

// -> ACDB 순으로 출력
// 만약에 0초로 설정했다면, ABCD라고 출력되지 않을까? 하지만,
// 실제로는 ACDB 순서대로 실행이 된다.
