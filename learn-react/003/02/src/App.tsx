import User from "./components/User";

export default function App() {
  return (
    <>
      {/* 컴포넌트 속성(properties)으로 데이터 전달 */}
      {/* 컴포넌트의 props로 데이터 전달 */}
      {/* props 객체 */}
      <User name="jaegeon" age={20} />
    </>
  );
}
