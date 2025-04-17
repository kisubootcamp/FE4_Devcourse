import Agree from "./Agree";
import Button from "./Button";
import Header from "./Header";
import Input from "./Input";

export default function Login() {
	return (
		<div className="w-md p-[40px] px-[25px] border rounded-lg border-[#d1d1d1] space-y-3">
			<Header message="Login"></Header>
			<Input name="email"></Input>
			<Input name="password"></Input>
			<Agree></Agree>
			<Button styles="fill">Log in</Button>
			<Button>Go To Sign up</Button>
		</div>
	);
}
