import { useState } from "react";
import styles from "./Footer.module.css";
import className from "classnames";
import classNames from "classnames/bind";

export default function Footer() {
  const cx = classNames.bind(styles);
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <>
      <footer>
        <h1 className={className({ title: false })}>title</h1>
        <button onClick={() => setIsLoggedin(!isLoggedin)}>로그인</button>
        <p className={cx({ "red-color": isLoggedin }, "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}
