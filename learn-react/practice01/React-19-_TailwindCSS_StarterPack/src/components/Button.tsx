export default function Button(props: {
  type: 'submit' | 'reset' | 'button';
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 콘텐츠 있는 문법 */}
      {/* <시작태그> ... <종료 태그> */}
      {/* 콘텐츠 없는 문법 */}
      <button type={props.type}>{props.children}</button>
    </>
  );
}
