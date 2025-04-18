export default function Button({
  type,
  children,
}: {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 콘텐츠가 있는 문법 */}
      {/* <시작태그> ...콘텐츠... </종료태그> */}
      <button type={type}>{children}</button>

      {/* 콘텐츠가 없는 문법 */}
    </>
  );
}
