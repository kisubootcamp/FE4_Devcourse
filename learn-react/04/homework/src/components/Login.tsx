import Agree from "./Agree";
import Box from "./Box";
import Button from "./Button";
import Head from "./Head";
import Input from "./Input";

export default function Login() {
	return (
		<Box>
			<Head type="Login" />
			<Input ph="someone@example.com" />
			<Input ph="Enter Password" />
			<Agree />
			<Button style="text-white border-gray-600 bg-gray-600" content="Log in" />
			<Button
				style="text-black border-gray-600 bg-white"
				content="Go To Sign Up"
			/>
		</Box>
	);
}
