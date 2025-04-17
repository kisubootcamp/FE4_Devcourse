import User from "./components/User";

export default function App() {
  return (
    <>
      {/* 컴포넌트의 properties로 데이터를 전달 */}
      {/* 컴포넌트의 props로 데이터를 전달 */}
      <User name="sucoding" age={20} />
    </>
  );
}
