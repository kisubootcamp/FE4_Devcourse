import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <p className={`${styles.underline}${styles["red-color"]}`}></p>
      </footer>
    </>
  );
}
