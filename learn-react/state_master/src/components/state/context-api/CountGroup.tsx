import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

export default function CountGroup() {
  return (
    <>
      <CountDisplay />
      <CountButton />
    </>
  );
}
// State Lifting 기법
// Depth가 깊어질수록 props drilling으로 인한 불편이 생길 수 있다.

// 전역 상태 관리: 상태를 별도의 컴포넌트에 지정하고 해당 상태가 필요한 컴포넌트가 직접 받아다 쓴다
// context-api: api를 이용한 전역 상태 관리
