import User from './components/User';

export default function App() {
  return (
    <>
      {/* 컴포넌트의 속성(properties -> props)으로 데이터를 전달 */}
      {/* props 객체 */}
      <User name="sucoding" age={20} />
    </>
  );
}
