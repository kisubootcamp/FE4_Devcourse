import styles from "./Footer.module.css";
// 그냥 css에서 불러올 때
import className from "classnames";
// css 모듈에서 불러올 때
import classNames from "classnames/bind";

export default function Footer() {
  const isLoggedIn = true;
  const cx = classNames.bind(styles);
  return (
    <>
      <footer>
        <h1 className={className({ title: false })}>Title</h1>
        <p className={cx({ "red-color": isLoggedIn }, "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}
