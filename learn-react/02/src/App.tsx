import './css/index.css'; //글로벌 스타일 css
import styles from './components/App.module.css'; //module.css
import classNames from 'classnames'; //조건부 클래스 설정
import classNames2 from 'classnames/bind';
import styled from 'styled-components'; //CSS-IN-JS 방법
const Title = styled.h2`
  color: purple;
  font-size = 24px;
`;
export default function App() {
  const cx = classNames2.bind(styles); //bind 적용
  const isBold = true;
  return (
    <>
      {/* 인라인 스타일 */}
      <h2 style={{ color: 'blue', fontSize: '18px' }}>inline-style</h2>
      {/* 글로벌 스타일 */}
      <h2 className="title">global-style</h2>
      {/* css module + classnames */}
      <h2 className={classNames(styles.title, { [styles.bold]: isBold })}>
        css module
      </h2>
      <h2 className={cx('title', { bold: isBold })}>css module2</h2>
      {/* CSS-IN-JSS */}
      <Title>styled-components</Title>
    </>
  );
}
