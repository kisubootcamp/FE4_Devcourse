import { css } from "@emotion/css";
import { hero } from "./css/styles.css";

export default function App() {
	return (
		<>
			<h1
				className={css`
					color: red;
				`}
			>
				App Component
			</h1>
      <h1 className={hero}>Vanila Extract</h1>
		</>
	);
}
