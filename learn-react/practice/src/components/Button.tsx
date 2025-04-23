export default function Button({ children }: { children: React.ReactNode }) {
  // ReactNode: 대부분의 태그를 허용해줌
  // children: 예약되어있는 속성명
  return (
    <>
      {/* 콘텐츠가 있는 문법 */}
      {/* <시작태그>~~</종료태그> */}
      {/* contents가 들어가는 부분의 컨텐츠를 불러옴 */}
      {/* 콘텐츠가 없는 문법 */}
      {/* <태그 /> */}
      <button>{children || "Click"}</button>
      {/* childern: 컴포넌트에 컨텐츠를 전달하는 방법 */}
      {/* 전달받는 내용이 없으면 클릭, 있으면 전달받는 내용 */}
    </>
  );
}
