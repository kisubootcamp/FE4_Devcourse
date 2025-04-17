// 컴포넌트
// 함수에서 JSX를 반환하면 그게 곧 컴포넌트다.

// rafce 화살표함수 형식
const App = () => {
  return (
    <>
      <h1>App Component</h1>
    </>
  );
}
export default App;
// export App; 로도 가능함 단
// main.tsx에서 
// import App from './App.tsx'  를
// import {App} from './App.tsx' 로 변경

// export default function App () {
//   return (
//     <>
//      <h1>App Component</h1>
//     </>
//   );
// }