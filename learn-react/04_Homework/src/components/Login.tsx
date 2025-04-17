import Input from "./Input";
import Button from "./Button";
import CheckBox from "./CheckBox";

export default function Login() {
    return (
        <>
            <div className="inline-block w-[375px] h-[434px] bg-white border-1 border-[#D1D1D1] rounded-[8px] px-[25px] py-[40px]">
                <h1 className="text-[20px] font-bold">Login Into App</h1>
                <p>Please enter your details to continue.</p>
                <Input id="login_email">someone@example.com</Input>
                <Input id="login_password">Enter Password</Input>
                <CheckBox />
                <Button dark>Log In</Button>
                <Button>Go to Sing up</Button>
            </div>
        </>
    );
}
