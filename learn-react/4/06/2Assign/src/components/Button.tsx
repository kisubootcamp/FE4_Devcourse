export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 컨텐츠가 있는 문법 */}
      {/* <시작태그>...</종료태그> */}
      <button className="border-2"> {children}</button>

      {/* 콘텐츠가 없는 문법 */}
      <button> 로그인</button>
    </>
  );
}
