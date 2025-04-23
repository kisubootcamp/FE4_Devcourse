import styles from "./Footer.module.css";
import className from "classNames";
import classNames from "classnames/bind"; //module.css과 함께 사용
export default function Footer() {
  const isLoggedin = true; //키 값이 true일때만 적용가능(이름에 포함함)
  const cx = classNames.bind(styles);
  return (
    <>
      <footer>
        <p className={cx({ "red-color": isLoggedin }, "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        {/* <p className={`${styles["red-color"]} ${styles.underline}`}>
            &copy: 2024 내 웹사이트. 모든 권리 보유.
        </p> */}
      </footer>
    </>
  );
}
