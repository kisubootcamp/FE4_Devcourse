import { useRef, useState } from "react";

export default function UseRef2() {
    const [email, setEmail] = useState("");
    const emailRef = useRef<HTMLInputElement>(null);
    const [pw, setPw] = useState("");
    const pwRef = useRef<HTMLInputElement>(null);
    const isSubmitting = useRef(false);

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const pwHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    };

    const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isSubmitting.current) return;
        if (!email) {
            alert("이메일을 입력해주세요");
            // (document.querySelector("input[type='text']") as HTMLInputElement).focus();
            emailRef.current?.focus();
            return;
        }
        if (!pw) {
            alert("비밀번호를 입력해주세요");
            pwRef.current?.focus();
            return;
        }
        isSubmitting.current = true;
        alert("로그인됨");
        setTimeout(() => {
            isSubmitting.current = false;
        }, 2000);
    };
    return (
        <>
            <form>
                <input
                    type="text"
                    value={email}
                    onChange={emailHandler}
                    ref={emailRef}
                ></input>
                <input
                    type="password"
                    value={pw}
                    onChange={pwHandler}
                    ref={pwRef}
                ></input>
                <button type="submit" onClick={submitHandler}>
                    로그인
                </button>
            </form>
        </>
    );
}
