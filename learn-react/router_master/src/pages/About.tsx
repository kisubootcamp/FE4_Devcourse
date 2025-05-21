// 리액트 19부터는 title과 meta 태그를 포함하여 head 태그에서 사용할 수 있는 모든 태그를 JSX에서 사용할 수 있음
export default function About() {
  return (
    <>
      <h1>About Component</h1>
      <title>About</title>
      <link rel="author" href="http://www.yubin.com" />
      <meta name="keyword" content="한유빈" />
    </>
  );
}
