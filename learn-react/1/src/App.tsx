//유저 스니펫 rfc
// export default function App() {
//   return (
//     <>
//       <h1>App Component</h1>
//     </>
//   );
// }

/*
JSX
JavaScript + XML - 확장 문법

0. JSX는 HTML과 굉장히 유사하다.

1. 하나의 루트 요소만 반환해야한다.
    return 으로 반환하는게 반드시 하나의 요소여야만 한다는 뜻
2. 모든 태그는 닫아줘야함
    html : <br>
    JSX  : <br />

3. 모든 태그의 속성은 카멜 케이스로 사용해야한다.

4. 표현식은 중괄호 안에서 사용할 수 있다. ex) maxLength={3}
5. 인라인 스타일은 객체로 표현한다.  :: <div style={{ color: 'red', textDecoration: 'underline' }}>hello!!!</div>
6. 주석 작성법 

*/
// 단축키 rfc
export default function App() {
  return (
    <div>
      <div style={{ color: 'red', textDecoration: 'underline' }}>hello!!!</div>
      <div id="root"></div>
      <div>Hello,k World!</div>
      <input type="text" maxLength={3} />
    </div>
  );
}
{
  /*주석은 이렇게 */
}
