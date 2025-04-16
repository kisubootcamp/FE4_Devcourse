// moudule.css 는 import한 컴포넌트 에서만 영향을 줄 수 있다. 즉, 다른 ts 에서는 underline 을 써도 적용이 되지 않는다.
import styles from './Footer.module.css';
import classNames from 'classnames/bind';
export default function Footer() {
  // npm i classnames 로 라이브러리 설치 -> package.json 에 설치된다!
  const cx = classNames.bind(styles);
  const isLoggedin = true;
  return (
    <>
      <footer>
        {/* <p className={`${styles['red-color']} ${styles.underline}`}></p>  이거를 아래처럼 쓸 수 있다. */}
        <p className={cx('red-color', 'underline')}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={cx({ 'red-color': isLoggedin })}></p>
      </footer>
    </>
  );
}
