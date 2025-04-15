import styles from "./Footer.module.css";
import className from "classnames"; //css 모듈과 함께 사용하지 않을때
import classNames from "classnames/bind"; //외부 라이브러리 bind css 모듈과 함께 쓰고 싶을때

export default function Footer() {
  const isLoggedin = false;
  const cx = classNames.bind(styles);
  return (
    <>
      <footer>
        <p className={`${styles.underline} ${styles["red-color"]}`}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={cx("red-color", "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={cx({ "red-color": isLoggedin }, "underline")}>
          {/* 특정 조건일때 스타일 적용 가능 */}
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={className({ title: true })}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}
