export default function Button({
  type,
  children,
}: {
  type: "submit" | "reset" | "button";
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 콘텐츠가 있는 문법 */}
      {/* <시작태그> .... </종료태그> */}
      {/* 콘텐츠가 없는 문법 */}
      {/* <button>{text || "클릭"}</button> */}
      <button type={type}>{children}</button>
      {/* children은 하나의 컴포넌트에 하나밖에 전달을 못한다? -> 콘텐츠를 한번에 묶어서 전달 */}
    </>
  );
}
// children이라는 props 명을 사용하면 타입에러 발생 -> 이미 예약된 이름이니까!
// 일반 props와 children은 섞어서 사용가능
