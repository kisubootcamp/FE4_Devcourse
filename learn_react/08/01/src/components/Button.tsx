// children으로 컴포넌트에 콘텐츠를 전달하는 방식
export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 콘텐츠가 있는 문법
    <시작태그>....<종료태그>
    콘텐츠가 없는 문법
     */}
      <button>{children}</button>
    </>
  );
}
