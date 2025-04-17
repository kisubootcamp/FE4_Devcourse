//WEB API->웹 브라우저에서 제공해주는 API
//setTimeout,setInterval,DOM 이벤트, Promise,Fetch

//태스크 큐
//setTimeout
//setInterval->Node.js에서만 실행됨
//setImmediate
//DOM 이벤트 콜백
//fetch.then()

//마이크로태스크큐(태스크 큐보다 우선순위가 더 높음)
//queueMicrotask()
//Promise.then()
//Promise.catch
//Promise.finally
//MutationObserver

console.log("A"); //전역 컨텍스트에 들어오고, 그 위에 log 실행 컨텍스트 올라옴
Promise.resolve().then(() => {
  console.log("micro");
});
setTimeout(() => {
  console.log("B");
}, 100);
setTimeout(() => {
  console.log("C");
}, 0);
console.log("D");
//1억번 이상 실행시켜도 순서 바뀔일 전혀 없음(자바스크립트에서)
//setTimeout 추가 이후-> A,C,D,B 순으로 실행됨
//setTimeout 끝나면 task queue에 넣고 task queue에 뭔가 들어오면 이벤트 루프가 콜스택이 비어있는지 계속 확인함
//결국 WEB API에 들어가는 코드들은 기본 코드들을 다 실행시킨 후 실행시킬 수 있음
//Promise.resolve().then()이뭘까
