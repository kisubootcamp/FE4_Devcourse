import User from "./components/User";

export default function App() {
  return (
    <>
      <User name="SeolWolWha" age={20} /> {/* 숫자는 중괄호 */}
      {/* User component의 name값이 SeolWolWha */}
    </>
  );
}
// tailwind가 알아서 리셋해주기 때문에 리셋파일을 만들지 않아도 된다.
