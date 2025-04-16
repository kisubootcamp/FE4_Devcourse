import styles from "./Footer.module.css";
import classNames from "classnames/bind";
import className from "classnames";

export default function Footer() {
  const cs = classNames.bind(styles);
  const isLoggedin = true;
  return (
    <>
      <footer>
        <h1 className={className({ title: false })}>title</h1>
        {/* 여러개의 모듈을 사용할 땐 템플릿문자열로 작성. -기호는 [""]안에 작성하도록 한다. */}
        <p className={`${styles.underline} ${styles["red-color"]}`}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={cs("red-color")}>Hello World!</p>

        {/* isLoggedin의 값이 true일 때만 스타일이 적용된다. */}
        <p className={cs({ "red-color": isLoggedin })}>true!!</p>
      </footer>
    </>
  );
}
