import { useState } from 'react';
import styles from "./Footer.module.css";
import classNames from "classnames/bind";

export default function Footer(){
  const cx = classNames.bind(styles);
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <footer>
        <div className={styles.footerdiv}>모듈 CSS</div>
        <div className={cx('footerdiv', 'black')}>classNames 모듈 CSS</div>
        <div className={cx('footerdiv', { black: hovered })}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          이렇게도 되는군
        </div>
	      <p>&copy; 2024 내 웹사이트. 모든 권리 보유.</p>
	    </footer>
    </>
  );
} 