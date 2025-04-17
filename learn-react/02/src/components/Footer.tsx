import styles from "./Footer.module.css";
import className from "classnames";
//css 모듈과 함께 사용할 때 bind 사용
import classNames from "classnames/bind";

export default function Footer() {
  const isLoggedIn = false;
  const cx = classNames.bind(styles);
  return (
    <>
      <footer>
        <h1 className={className({ title: false })}>title</h1>
        <p className={cx("red-color", "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={cx({ "red-color": isLoggedIn }, "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}
