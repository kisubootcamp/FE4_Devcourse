import styles from "./Footer.module.css";
// css파일이 중복되지 않도록 class를 암호화된다.
// module의 스펠링 주의
// module.css를 다른 컴포넌트에서 임포트해서 중복으로 사용은 가능하지만 그렇게 사용하지는 않는다.
import classNames from "classnames/bind";
// bind로 불러오는 경우는 css 모듈 방식으로 사용할 때 쓴다
import className from "classnames";
// 모듈 방식 이외에서 쓸 때는 bind를 사용하지 않는다.

export default function Footer() {
  const cx = classNames.bind(styles);
  const isLoggedin = true;

  return (
    <>
      <footer>
        <h1 className={className("title")}>title</h1>
        <p className={`${styles.underline} ${styles["red-color"]}`}>
          {/* 무조건 클래스 선택자로 불러와야 한다. 대시 기호가 붙어있는 css속성은 대괄호를 사용하여 렌더링 한다. */}
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={cx({ "red-color": isLoggedin }, "underline")}>
          {/* 타입 형태로 지정한 후 해당 타입이 true면 css가 적용되고, false이면 적용되지 않음 */}
          {/* classNames: CSS를 더 편하게 쓸 수 있도록 만들어주는 라이브러리 */}
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}

// classnames: 라이브러리
// css모듈이랑만 접목해서 사용하는 것이 아닌 글로벌 css랑 접목되어 있는 classname이랑도 같이 사용이 가능하다
// npm을 이용하여 설치한 대상: 패키지
