import styles from "./Footer.module.css";
import className from "classnames"; // classnames 를 설치하고 불러옴 , 단순히 내가 전달한 문자열을 합쳐서 반환
// 이런 classnames 덕분에 코드가 한결 가독성이 높아짐
import classNames from "classnames/bind"; // css 모듈방식과 함께 사용할때

export default function Footer() {
  const isLoggedIn = false; // true, false 값에 따라 classnames 를 이용해서 동적으로 스타일 추가
  const cx = classNames.bind(styles); // *.module.css 파일을 바인드해서
  return (
    <>
      <footer>
        <h1 className={className({ title: true })}>title</h1>
        {/* classnames 는 truthy, falsy 값으로 동적으로 css 표현 가능, 따로 true 라고 적지 않아도 true. */}
        <p className={cx({ "red-color": isLoggedIn }, "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}

//NOTE
// classNames 는 문자열과 객체를 받아서 string 으로 반환해주는 함수
// true 값 반환, falsy값은 반환하지 않음 (동적으로 스타일 추가 등으로 사용)
//classNames('foo', 'bar'); // => 'foo bar'
// classNames('foo', { bar: true }); // => 'foo bar'
// classNames({ 'foo-bar': true }); // => 'foo-bar'
// classNames({ 'foo-bar': false }); // => ''
// classNames({ foo: true }, { bar: true }); // => 'foo bar'
// classNames({ foo: true, bar: true }); // => 'foo bar'
