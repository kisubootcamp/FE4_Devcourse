import style from "./Footer.module.css";
//module.css 파일은 특정 컴포넌트에 사용할 css 파일이다
//module.css 파일은 import 하지 않는 이상 컴포넌트가 참조하지 않는다

//module.css 방식으로 사용 할 때만 /bind로 불러온다
import classNames from "classnames/bind";
//global.css 방식으로 사용 할 때
// import className from "classnames";

export default function Footer() {
  const isLoggedin: boolean = true;
  const cx = classNames.bind(style);
  return (
    <>
      <footer>
        <p className={style.underline}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        {/* 다양한 css 클래스 불러오는 방법 */}
        <p className={`${style.underline} ${style["red-color"]}`}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        {/* {"red-color": isLoggedin } 불린 값에 의한 css 컨트롤 */}
        <p className={cx({ "red-color": isLoggedin }, "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}
