import styles from './App.module.css'; // CSS 모듈 import
import classNamess from 'classnames'; // 일반 classnames
import classNames from 'classnames/bind'; // CSS Module 전용 bind 함수 -> 모듈용 classnames

export default function App() {
  const isItalic = true;
  const isColorRed = false;

  // CSS Module 을 classNames와 함께 쓰기 위한 bind 함수 정의
  const cx = classNames.bind(styles);
  return (
    <>
      {/* App.module.css의 .container 을 가져옴 */}
      <div className={cx('container')}>
        {/* title 클래스는 무조건 적용하고, isColorRed 가 true 면 "text-red" 도 적용된다 */}
        {/* 아래처럼 조건에 따라 여러 클래스를 붙일 수 있게 해주는걸 classNames 라고 한다. */}
        <h1 className={cx('title', { 'text-red': isColorRed })}>Hello</h1>
        <p className={classNamess('line-through', { italic: isItalic })}>
          Modules CSS!
        </p>
      </div>
    </>
  );
}

/*  App.tsx

import styles from "./App.module.css";
export default function App () {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Hello</h1>
        위 처럼 styles.클래스명 을 붙여서 모듈에 있는 css를 호출한다!

        <p>Moudles CSS!</p>
      </div>
    </>
  );
};
*/

/* App.module.css

.container {
  border: 1px solid red;
  padding: 1rem;
}

.container .title {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: underline;
}

.container p {
  color: green;
}
*/
