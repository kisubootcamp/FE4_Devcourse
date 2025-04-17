import Agree from "./Agree";
import Button from "./Button";
import Header from "./Header";
import Input from "./Input";

export default function Sign() {
	return (
		<div className="w-md p-[40px] px-[25px] border rounded-lg border-[#d1d1d1] space-y-3">
			<Header message="Sign"></Header>
			<Input name="name"></Input>
			<Input name="email"></Input>
			<Input name="password"></Input>
			<Agree></Agree>
			<Button styles="fill">Sign in</Button>
			<Button>Go To Log in</Button>
		</div>
	);
}
