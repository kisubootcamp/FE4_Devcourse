const App = () => {
  // JSX
  // Javascript + XML = JSX 확장 문법
  // react 를 위한 react 에 의한 확장 문법
  // 0. JSX 는 HTML 과 굉장히 유사하다.

  // **  1. 하나의 루트 요소만 반환해야 한다. - return 으로 반환되는 요소는 단 하나의 요소만 있어야 함. 두개 이상으로 될 경우 Fragment 로 감싼다. **
  // 2. 모든 태그는 닫아줘야 한다. -> <br> 이런 태그의 경우 <br /> 이렇게 해야 함. => 자동완성 하면 닫아줌
  // 3. 태그의 속성은 카멜 케이스로 사용해야 한다.
  // 4. 표현식은 중괄호 안에서 사용할 수 있다.
  // 5. 인라인 스타일은 객체로 작성해야 한다.
  // 6. 클래스 이름은 카멜 케이스로 작성해야 한다. - className 으로 작성해야 한다.
  // 7. 주석 - {/*  */}
  return (
    <>
      <div>Hello World!</div>
      <input type="text" maxLength={1} />
    </>
  );
};
export default App;
