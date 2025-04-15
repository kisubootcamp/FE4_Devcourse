import styles from './Footer.module.css';
import className from 'classnames'; // 아닐때는 그냥 classnames만
import classNames from 'classnames/bind'; //css 모듈과 함께 사용할떄는 bind

export default function Footer() {
    const isLoggedin = true; //false가 오면 적용이안된다.
    const cx = classNames.bind(styles);
    return (
        <>
            <footer>
                <h1 className={className({ title: false })}>title</h1>
                <p className={styles.underline}>&copy; 2024 내 웹사이트. 모든 권리 보유.</p>
                <p className={`${styles.underline} ${styles['red-color']}`}>&copy; 2024 내 웹사이트. 모든 권리 보유.</p>
                <p className={cx('red-color', 'underline')}>&copy; 2024 내 웹사이트. 모든 권리 보유.</p>
                <p className={cx({ 'red-color': isLoggedin }, 'underline')}>&copy; 2024 내 웹사이트. 모든 권리 보유.</p>
            </footer>
        </>
    );
}
