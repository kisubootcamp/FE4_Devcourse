import styles from "./Footer.module.css";
import classNames from "classnames/bind";
// bind에서 불러올 때 : css 모듈 방식과 함께 사용할 때
import className from "classnames";

export default function FooterEx() {
  const cx = classNames.bind(styles);
  return (
    <>
      <footer>
        <h1 className={className({title: true})}>title</h1>
        {/* <p className={`${styles.underLine} ${styles["red-color"]}`}> */}
        <p className={cx("red-color", "underline")}>&copy; 2024 내 웹사이트. 모든 권리 보유.</p>
      </footer>
    </>
  );
}
