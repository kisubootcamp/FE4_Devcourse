import User from "./components/User";

export default function App() {
  return (
    <>
      {/* 컴포넌트의 속성(properties)으로 데이터를 전달 */}
      {/* 속성 properties -> props */}

      {/* props 객체 */}
      <User name="sucoding" age={20} />
    </>
  );
}
