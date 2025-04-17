export default function Button({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
}) {
  return (
    <>
      {/* 콘텐츠가 있는 문법 */}
      {/* <시작태그> ... </종료태그> */}

      {/* 콘텐츠가 없는 문법 */}
      <button type={type}>{children}</button>
    </>
  );
}
