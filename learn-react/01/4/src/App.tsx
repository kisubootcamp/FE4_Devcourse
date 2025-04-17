import { css } from "@emotion/css";
import { hero } from "./css/styles.css.ts";

export default function App() {
	return (
		<>
			{/* emoticon */}
			<h1
				className={css`
					color: #008000;
				`}>
				App Component
			</h1>
			{/* Vanilla Extract */}
			<h1 className={hero}>Vanilla Extract</h1>
		</>
	);
}
