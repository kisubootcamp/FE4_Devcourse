export default function Header() {
  return (
    <>
      <header>
        <h1 style={{ color: "red", textDecoration: "underline" }}>
          내 웹사이트
        </h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#section1">소개</a>
          </li>
          <li>
            <a href="#section2">서비스</a>
          </li>
          <li>
            <a href="#section3">연락처</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
