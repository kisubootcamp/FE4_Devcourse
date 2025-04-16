import styles from "./Footer.module.css";
import classNames from "classnames/bind";
import className from "classnames";
export default function Footer() {
  const cx = classNames.bind(styles);
  const bool = false;
  return (
    <>
      <footer>
        <p className={className({ title: true })}>title</p>
        {/* <p className={`${styles.underline} ${styles["color_aqua"]}`}> */}
        <p className={cx("color_aqua", "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={cx({ color_aqua: bool }, "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}
