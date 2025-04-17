import className from "classnames";
import classNames from "classnames/bind";
import styles from "./Footer.module.css";

export default function Footer() {
  const cx = classNames.bind(styles);
  const isLoggedin = true;
  return (
    <footer>
      {/* module.css를 활용하지 않을 때 */}
      <h1 className={className({ title: true })}>title</h1>
      {/* 활용할 때 */}
      <p className={cx({ "red-color": isLoggedin }, "underline")}>
        &copy; 2024 내 웹사이트. 모든 권리 보유.
      </p>
      <p className={`${styles.underline} ${styles["red-color"]}`}>
        &copy; 2024 내 웹사이트. 모든 권리 보유.
      </p>
    </footer>
  );
}
