import styles from "./Footer.module.css";
import classNames from "classnames/bind";
export default function Footer() {
  const cx = classNames.bind(styles);
  return (
    <footer>
      <p className={cx("red-color", "underline")}>
        &copy; 2024 내 웹사이트. 모든 권리 보유.
      </p>
    </footer>
  );
}
