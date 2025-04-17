import Input from "./Input";
import Button from "./Button";
import CheckBox from "./CheckBox";

export default function SignUp() {
    return (
        <>
            <div className="inline-block w-[375px] h-[495px] bg-white border-1 border-[#D1D1D1] rounded-[8px] px-[25px] py-[40px]">
                <h1 className="text-[20px] font-bold">Sign Into App</h1>
                <p>Please enter your details to continue.</p>
                <Input id="signup_name">Enter Your Name</Input>
                <Input id="signup_password">someone@example.com</Input>
                <Input id="signup_password">Enter Password</Input>
                <CheckBox />
                <Button dark>Sign In</Button>
                <Button>Go to Log In</Button>
            </div>
        </>
    );
}
