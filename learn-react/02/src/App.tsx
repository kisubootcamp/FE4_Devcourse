// import React from 'react';
//React.Fragment 와 <>똑같다.</> -> 빈태그

// rfc -> 단축키(함수)
// export default function App() {
//     // JSX -> Javascript XML (확장 문법)
//     // JSX는 HTML가 유사하다.
//     // 1. 하나의 루트 요소를 반환해야한다.
//     // 2. 모든 태그는 닫아줘야한다.
//     // 3. 모든 태그의 속성은 카멜케이스로 작성해야한다.
//     // 3.1 예약된 속성명은 쓸 수 없음, class
//     // 4. 표현식을 출력할 수있다. -> 중괄호
//     // 5. 인라인스타일은 객체로 표현해야함
//     // 6. 주석

//     const name = 'TY';
//     const style = {
//         color: 'red',
//         fontSize: '50px',
//     };
//     return (
//         <>
//             {/* 주석 */}
//             <h1 style={{ color: 'red', fontSize: '50px' }}>10 + 20 = {10 + 20}</h1>
//             <h1 className="title" style={style}>
//                 {name}
//             </h1>
//             <br />
//             <label htmlFor="uname">userid</label>
//             <input type="text" readOnly />
//         </>
//     );
// }

// // 컴포넌트
// // 함수에서 JSX를 반환하면 그게 곧 컴포넌트다.
// const App = () => {
//     return (
//         <>
//             <h1>2 Component</h1>
//         </>
//     );
// };

// // rafce -> 단축키(화살표함수)
// // const App = () => (
// //       <>
// //           <h1>2 Component</h1>
// //       </>
// //   );

// export default App;

// import Header from './components/Header.tsx';
// import Main from './components/Main.tsx';
// import AFooter from './components/Footer.tsx';

// export default function App() {
//     return (
//         <>
//             <Header />
//             <Main />
//             <AFooter />
//         </>
//     );
// }

// import Footer from './components/Footer';
// import Header from './components/Header';
// import Main from './components/Main';
// import Nav from './components/Nav';

// //html jsx로 변경
// export default function App() {
//     return (
//         <div>
//             <h1 className="title">Test</h1>
//             <Header />
//             <Nav />
//             <Main />
//             <Footer />
//         </div>
//     );
// }

import styled from 'styled-components';

export default function App() {
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: #bf4f74;
    `;
    return (
        <>
            <Title>App Component</Title>
        </>
    );
}
