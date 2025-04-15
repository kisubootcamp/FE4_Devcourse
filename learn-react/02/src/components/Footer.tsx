import styles from "./Footer.module.css"; // CSS 모듈
import className from "classnames";
import classNames from "classnames/bind";

export default function Footer() {
	const isLoggedin = true;
	const cx = classNames.bind(styles);
	return (
		<>
			<footer>
				<h1 className={className({ title: true })}>title</h1>
				<p className={`${styles.underline} ${styles["red-color"]}`}>&copy; 2024 내 웹사이트. 모든 권리 보유.</p>
				<p className={cx({ "red-color": isLoggedin }, "underline")}>&copy; 2024 내 웹사이트. 모든 권리 보유.</p>
			</footer>
		</>
	);
}
