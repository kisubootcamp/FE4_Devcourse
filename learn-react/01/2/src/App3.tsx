import React from 'react';

export default function App() {
  // JSX -> Javascript XML (확장 문법)
  // 하나의 루트 요소를 반환해야한다.
  // readonly 같이 두 단어가 합쳐진것들은 전부 카멜케이스로 써야한다.
  return (
    <React.Fragment>
      {/*이건 그냥 감싸는 용도, 줄여서 <> 만 써도 된다. 빈태그만 쓰면 1번줄을 쓸 필요가 없다 (이걸 빈 태그 라고 한다*/}
      <h1 style={{ color: 'red' }}>10 + 20 = {10 + 20}</h1>
      <h1>App Component</h1>
      <h1>App Component</h1>
      <br />
      <label htmlFor="uname">userid</label>
      <input id="uname" type="text" readOnly></input>
    </React.Fragment>
  );
}

// 예약된 속성명은 쓸 수 없음.
// label for도 htmlFor 로 써야한다.

// - 표현식을 출력할 수 있다. 0-> 중괄호를 이용
// 변수 출력도 가능

// - 인라인 스타일은 객체로 표현해야한다.
