import styles from "./Footer.module.css";
import classNames from "classnames/bind"; // css module방식과 함께 사용할 때
import className from "classnames";

export default function Footer() {
	const isLoggedin = false;
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
