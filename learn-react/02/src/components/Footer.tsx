import styles from "./Footer.module.css";
import classNames from "classnames/bind"; // css 모듈 방식
import className from "classnames"; // 일반 방식

export default function Footer() {
  const cx = classNames.bind(styles);
  return (
    <footer>
      {/* 일반 방식 => "title title" 로 삽입*/}
      <h1 className={className("title", { title: true })}>내 웹사이트</h1>
      {/* css 모듈 방식 => "underline red-color" 로 삽입*/}
      <p className={cx("underline", "red-color")}>
        &copy; 2024 내 웹사이트. 모든 권리 보유.
      </p>
      <p className={`${styles.underline} ${styles["red-color"]}`}>
        &copy; 2024 내 웹사이트. 모든 권리 보유.
      </p>
    </footer>
  );
}
