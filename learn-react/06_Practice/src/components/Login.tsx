import { useState, useRef } from "react";
import Input from "./Input";
import Checkbox from "./CheckBox";
import Button from "./Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const loginHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!email) {
            alert("이메일을 입력해주세요.");
            emailRef.current?.focus();
        } else if (!password) {
            alert("비밀번호를 입력해주세요.");
            passwordRef.current?.focus();
        } else if (password.length < 4) {
            alert("비밀번호는 4자리 이상이어야 합니다.");
            passwordRef.current?.focus();
        } else if (!agree) {
            alert("약관동의에 체크해주세요.");
        } else {
            alert("로그인 되었습니다");
        }
    };
    return (
        <>
            <div className="item-middle">
                <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
                    <h1 className="text-xl font-bold mb-[10px]">
                        Login Into App
                    </h1>
                    <p className="text-sm mb-5">
                        Please enter your details to continue.
                    </p>
                    <form action="" className="grid gap-4">
                        <Input
                            type="text"
                            className="input-style"
                            placeholder="someone@example.com"
                            value={email}
                            onChange={emailHandler}
                            ref={emailRef}
                        />
                        <Input
                            type="password"
                            className="input-style"
                            placeholder="Enter Password"
                            value={password}
                            onChange={passwordHandler}
                            ref={passwordRef}
                        />
                        <Checkbox
                            checked={agree}
                            onChange={() => setAgree(!agree)}
                        >
                            <span className="text-sm color-[#4f4f4f]">
                                I agree with{" "}
                                <em className="not-italic font-bold">terms</em>{" "}
                                and{" "}
                                <em className="not-italic font-bold">
                                    policies
                                </em>
                                .
                            </span>
                        </Checkbox>
                        <div className="mt-4 grid gap-4">
                            <Button
                                type="submit"
                                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
                                onClick={loginHandler}
                            >
                                Log In
                            </Button>
                            <Button
                                type="button"
                                className="w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg"
                                onClick={loginHandler}
                            >
                                Go To Sing up
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
