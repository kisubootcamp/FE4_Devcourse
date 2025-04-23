export default function Header() {
  const style = { color: "red", textDecoration: "underline" };
  return (
    <>
      <header>
        <h1
          // className={styles.underline}
          // 중복 사용이 가능은 하다.
          style={style} // 이러한 방법의 인라인 방식도 있다.
          // style={{
          //   color: "blue",
          //   fontStyle: "italic",
          //   textDecoration: "underline",
          // }} // 인라인
          // 두 단어 이상의 속성은 카멜케이스로 작성
        >
          내 웹사이트
        </h1>
      </header>
    </>
  );
}
